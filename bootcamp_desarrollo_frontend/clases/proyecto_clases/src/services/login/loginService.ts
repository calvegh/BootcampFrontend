interface ILogin {
  user: string;
  password?: string;
  email: string;
  role: string[];
  isAuthenticated: boolean;
}
export async function login(user: ILogin): Promise<boolean> {
  const request = { username: user.user, password: user.password };
  const response = await fetch("http://localhost:3001/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  });
  if (response.ok) {
    const jsonResponse = await response.json();
    const { role, username, email, isAuthenticated } = jsonResponse.metadata;
    const userResponse: ILogin = {
      isAuthenticated,
      user: username,
      email,
      role,
    };
    const datosUsuario = JSON.stringify(userResponse);
    localStorage.setItem("user", datosUsuario);
    return true;
  } else {
    localStorage.removeItem("user");
    return false;
  }
}
