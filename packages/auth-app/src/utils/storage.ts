const AUTH_TOKEN = 'auth-token-v1';
export function saveToken(token: string) {
  localStorage.set(AUTH_TOKEN, token);
}