import { sign, decode, verify } from 'jsonwebtoken';

class Jwt {
  private secret: string;
  private duration: number;

  constructor(secret: string, duration: number) {
    this.secret = secret;
    this.duration = duration;
  }

  public createToken(payload: any): string {
    return sign(payload, this.secret, { expiresIn: this.duration });
  }

  public verifyToken(token: string) {
    verify(token, this.secret);
  }

  public decodeToken(token: string) {
    return decode(token);
  }
}

export { Jwt };
