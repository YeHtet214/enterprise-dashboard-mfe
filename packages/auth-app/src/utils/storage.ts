const TOKEN_KEY = 'auth-token-v1';
export function saveToken(token: string) {
  localStorage.set(TOKEN_KEY, token);
}

export function getToken() {
  return localStorage.get(TOKEN_KEY);
}

export function removeToken() {
  localStorage.remove(TOKEN_KEY);
}