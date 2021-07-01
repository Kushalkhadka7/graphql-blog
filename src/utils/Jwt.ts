import * as jwt from 'jsonwebtoken';

/**
 * Jwt creator and validator.
 */
class Jwt {
  private secret: string;
  private duration: number;

  /**
   * @param {string} secret
   * @param {number} duration
   */
  constructor(secret: string, duration: number) {
    this.secret = secret;
    this.duration = duration;
  }

  /**
   * Create jwt token.
   *
   * @param {any} payload
   * @returns {string}
   */
  public createToken(payload: any): string {
    delete payload.password;

    return jwt.sign(JSON.stringify(payload), this.secret);
  }

  /**
   * Verify token.
   *
   * @param {string} token
   * @returns {void}
   */
  public verifyToken(token: string): void {
    jwt.verify(token, this.secret);
  }

  /**
   * Decode token.
   *
   * @param {string} token
   * @returns {any}
   */
  public decodeToken(token: string): any {
    return jwt.decode(token);
  }
}

export { Jwt };
