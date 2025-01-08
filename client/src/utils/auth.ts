import { JwtPayload, jwtDecode } from 'jwt-decode';

class AuthService {
  private tokenKey = 'auth_token';

  getProfile() {
    const token = this.getToken();
    if (token) {
      try {
        return jwtDecode<JwtPayload>(token);
      } catch (error) {
        console.error("Error decoding token:", error);
        return null;
      }
    }
    return null;
  }

  loggedIn() {
    const token = this.getToken();
    return token && !this.isTokenExpired(token);
  }

  isTokenExpired(token: string): boolean {
    try {
      const decoded = jwtDecode<JwtPayload>(token);
      const expirationTime = decoded.exp ? decoded.exp * 1000 : 0;
      return Date.now() >= expirationTime;
    } catch (error) {
      console.error("Error checking token expiration:", error);
      return true;
    }
  }

  getToken(): string {
    return localStorage.getItem(this.tokenKey) || '';
  }

  login(idToken: string) {
    localStorage.setItem(this.tokenKey, idToken);
    window.location.href = '/';
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    window.location.href = '/login'; 
  }
}

export default new AuthService();

