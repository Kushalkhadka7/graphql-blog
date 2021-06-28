import * as jwt from 'jsonwebtoken';

class Jwt {
  private secret: string;
  private duration: number;

  constructor(secret: string, duration: number) {
    this.secret = secret;
    this.duration = duration;
  }

  public createToken(payload: any): string {
    delete payload.password;

    return jwt.sign(JSON.stringify(payload), this.secret);
  }

  public verifyToken(token: string) {
    jwt.verify(token, this.secret);
  }

  public decodeToken(token: string) {
    return jwt.decode(token);
  }
}

export { Jwt };
