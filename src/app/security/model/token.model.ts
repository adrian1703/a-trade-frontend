export class Token {
  issuedAt: Date;
  expiresAt: Date;
  username: string;
  role: 'Admin' | 'User' | 'Unknown';
  validRoles: string[] = ['Admin', 'User'];

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
      this.role      = data[this.roleKey] as 'Admin' | 'User' | 'Unknown';
      if (!this.validRoles.includes(this.role)) {
        this.role = 'Unknown';
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
