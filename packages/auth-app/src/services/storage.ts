const TOKEN_KEY = 'auth-token-v1';

export const storage = {
  getToken: ()=> localStorage.getItem(TOKEN_KEY),
  saveToken: (token: string) => localStorage.setItem(TOKEN_KEY, token),
  removeToken: () => localStorage.removeItem(TOKEN_KEY),
}
  
