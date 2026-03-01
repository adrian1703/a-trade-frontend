export enum AuthRole {
  Admin   = 'Admin',
  User    = 'User',
  Unknown = 'Unknown'
}

/**
 * Represents an authentication token and provides utilities to parse and validate token data.
 */
export class AuthToken {
  readonly issuedAt: Date;
  readonly expiresAt: Date;
  readonly username: string;
  readonly role: AuthRole;
  readonly validRoles: readonly string[] = ['Admin', 'User'];

  private issuedAtKey: string  = "iat";
  private expiresAtKey: string = "exp";
  private usernameKey: string  = "Username";
  private roleKey: string      = "Role";

  constructor(token: string) {
    {
      const payload = token.split('.')[1];
      const decoded = atob(payload.replace(/-/g, '+').replace(/_/g, '/'));
      const data    = JSON.parse(decoded);

      this.issuedAt  = new Date((data[this.issuedAtKey] as number) * 1000);
      this.expiresAt = new Date((data[this.expiresAtKey] as number) * 1000);
      this.username  = data[this.usernameKey];
      this.role = data[this.roleKey] as AuthRole;
      if (!this.validRoles.includes(this.role)) {
        this.role = AuthRole.Unknown;
        console.log(`Invalid role detected: ${data[this.roleKey]}`);
      }
    }
  }

  static parseJwt(token: string): string {
    const payload = token.split('.')[1];
    const decoded = atob(payload.replace(/-/g, '+').replace(/_/g, '/'));
    return JSON.parse(decoded);
  }
}
