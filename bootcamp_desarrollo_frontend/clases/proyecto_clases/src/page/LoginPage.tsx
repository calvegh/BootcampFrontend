import { login } from "../services/login/loginService";

export const LoginPage = () => {
  const handleSubmit = (event: React.MouseEvent) => {
    event.preventDefault();
    login({ user: "admin", password: "0192023a7bbd73250516f069df18b500" });
  };
  return (
    <div>
      <h1>login page</h1>
      <button
        onClick={(e) => {
          handleSubmit(e);
        }}
      >
        Login
      </button>
    </div>
  );
};
