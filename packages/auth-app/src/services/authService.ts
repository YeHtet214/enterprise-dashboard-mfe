const API_URL = "http://localhost:4000"; 

export const authService = {
  login: async (username: string, password: string) => {
    const res = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (!res.ok) throw new Error("Login failed");
    return res.json(); // { token }
  },
  logout: async () => {
    return true;
  },
};
