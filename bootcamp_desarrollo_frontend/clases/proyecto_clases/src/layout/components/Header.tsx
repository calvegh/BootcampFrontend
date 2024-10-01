import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Usuarios</Link>
        </li>
        <li></li>
        <li></li>
        <li>
          <Link to="/admin">Administrador</Link>
        </li>
      </ul>
    </header>
  );
  /* return <Link to="/Post">Posts</Link>; */
};
