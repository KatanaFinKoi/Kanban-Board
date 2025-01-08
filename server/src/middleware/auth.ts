import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface JwtPayload {
  username: string;
}

export const authenticateToken = (_req: Request, _res: Response, next: NextFunction) => {
  // Extract the token from the Authorization header
  const authHeader = _req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1]; // Format: "Bearer <token>"

  if (!token) {
    return _res.status(401).json({ error: 'Unauthorized: Token not provided' });
  }

  try {
    const secretKey = process.env.JWT_SECRET || 'your_jwt_secret_key'; // Use a secure way to manage secrets
    const decoded = jwt.verify(token, secretKey) as JwtPayload;

    // Add user data to the request object
    _req.user = decoded;

    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    _res.status(403).json({ error: 'Forbidden: Invalid or expired token' });
  }
};

