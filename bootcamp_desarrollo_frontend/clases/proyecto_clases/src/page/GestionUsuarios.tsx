import { useState } from "react";
import { MainLayout } from "../layout/MainLayout";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../states/userSlices";
interface IForm {
  name: string;
  username: string;
  email: string;
}
export const GestionUsuarios = () => {
  const dispatch = useDispatch();

  const [form, setForm] = useState<IForm>({
    name: "",
    username: "",
    email: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(addUser(form));
  };
  return (
    <MainLayout>
      <h3>Gestión de usuarios</h3>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Ingresa tu nombre"
          onChange={handleChange}
          value={form.name}
        />
        <input
          type="text"
          name="username"
          placeholder="Ingresa tu usuario"
          onChange={handleChange}
          value={form.username}
        />
        <input
          type="email"
          name="email"
          placeholder="Ingresa tu correo"
          onChange={handleChange}
          value={form.email}
        />
        <button onClick={handleSubmit}>Guardar</button>
      </form>
    </MainLayout>
  );
};
