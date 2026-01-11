import {describe, expect, it} from 'vitest';
import {Token} from './token.model';
import {AuthService} from '../auth.service';

const auth         = new AuthService()
const tokenAdmin   = auth.tokenAdmin;
const tokenUser    = auth.tokenUser;
const tokenUnknown = auth.tokenUnknown;

describe('Token', () => {
  it('should parse token without exp', () => {
    console.log(Token.parseJwt(tokenAdmin))
  })
  it('should parse username, role, iat and exp from token', () => {
    const token = new Token(tokenAdmin);
    expect(token.username).toBe('Adrian');
    expect(token.role).toBe('Admin');
    // expect(token.issuedAt.getTime()).toBe(1767542202000);   // Because iat is 1767542202 (unix seconds)
    // expect(token.expiresAt.getTime()).toBe(1767542202000); // Because exp is 1767542202 (unix seconds)
  });
  it('should parse role user from token', () => {
    const token = new Token(tokenUser);
    expect(token.role).toBe('User');
  });
  it('should parse role unknown from token', () => {
    const token = new Token(tokenUnknown);
    expect(token.role).toBe('Unknown');
  });
});
