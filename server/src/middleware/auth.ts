import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface JwtPayload {
  username: string;
}

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized: Token not provided' });
  }

  try {
    const secretKey = process.env.JWT_SECRET_KEY || 'your_jwt_secret_key'; 
    const decoded = jwt.verify(token, secretKey) as JwtPayload;

    req.user = decoded;

  } catch (error) {
    return res.status(403).json({ error: 'Forbidden: Invalid or expired token' });
  }
  return next();
};


