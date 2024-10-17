import { useState } from "react";
import "./App.css";
function App() {
  const [errores, setErrores] = useState<string[]>([]);
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    birthdate: "",
    age: 0,
    country: "",
    website: "",
    favoriteColor: "",
    satisfaction: 0,
    genero: "",
    terminos: false,
  });
  const handleOnSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const newErrores: string[] = [];
    const {
      username,
      email,
      password,
      genero,
      age,
      country,
      website,
      favoriteColor,
      satisfaction,
      terminos,
    } = form;
    if (username.length === 0 || username.length > 64) {
      newErrores.push(
        "El nombre de usuario es requerido y debe tener menos de 64 caracteres"
      );
    }
    if (email.length === 0) {
      newErrores.push("El email es requerido");
    }
    const dominio_email = email.split("@")[1];
    if (dominio_email === "yahoo.com") {
      newErrores.push("El dominio de email no puede ser yahoo.com");
    }
    if (password != "administrador123") {
      newErrores.push("La contraseña debe es diferente a la pedida");
    }
    if (age < 18) {
      newErrores.push("Debes ser mayor de edad para registrarte");
    }
    if (website.length === 0) {
      newErrores.push("El sitio web es requerido");
    } else if (["https:", "http:"].includes(website.split("/")[0]) == false) {
      newErrores.push("El sitio web debe protocolo https:// o http://");
    } else if (
      ["www"].includes(website.split("//")[1].split(".")[0]) == false
    ) {
      newErrores.push("El sitio web debe tener www");
    } else if (
      ["com", "org", "net", "cl"].includes(
        website.split(".").pop()?.trim() ?? ""
      ) == false
    ) {
      newErrores.push("El sitio web debe tener un dominio .com, .org o .net");
    }
    if (country.length === 0) {
      newErrores.push("El país es requerido");
    }
    if (favoriteColor.length === 0) {
      newErrores.push("El color favorito es requerido");
    }
    if (genero.length === 0) {
      newErrores.push("El género es requerido");
    }
    if (satisfaction === 0) {
      newErrores.push("El nivel de satisfacción es requerido");
    }
    if (!terminos) {
      newErrores.push("Debes aceptar los términos y condiciones");
    }
    setErrores(newErrores);
    if (newErrores.length === 0) {
      console.log("El formulario esta correcto y estos son los datos:", form);
      setForm({
        username: "",
        email: "",
        password: "",
        birthdate: "",
        age: 0,
        country: "",
        website: "",
        favoriteColor: "",
        satisfaction: 0,
        genero: "",
        terminos: false,
      });
    }
  };
  const edad = (birthdate: string) => {
    const milisconds = new Date().getTime() - new Date(birthdate).getTime();
    return Number((milisconds / (1000 * 60 * 60 * 24 * 365.25)).toFixed(2));
  };
  const handleOnChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setErrores([]);
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
    if (name === "birthdate") {
      setForm({
        ...form,
        age: edad(value),
      });
    }
  };
  return (
    <div>
      <form>
        <h2>Registro Nuevo</h2>
        <label htmlFor="username">Nombre de usuario</label>
        <input
          id="username"
          placeholder="Tu nombre de usuario"
          name="username"
          onChange={handleOnChange}
        />
        <label htmlFor="email">Correo Electrónico</label>
        <input
          type="email"
          placeholder="Tu correo electrónico"
          name="email"
          onChange={handleOnChange}
        />

        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          placeholder="Tu contraseña"
          name="password"
          onChange={handleOnChange}
        />

        <label htmlFor="birthdate">Fecha de Nacimiento</label>
        <input
          id="birthdate"
          type="date"
          name="birthdate"
          onChange={handleOnChange}
        />

        <label htmlFor="age">Edad</label>
        <input
          id="age"
          type="number"
          min="0"
          max="120"
          disabled
          placeholder="Tu edad"
          onChange={handleOnChange}
          value={form.age}
        />
        <label htmlFor="country">País</label>
        <select
          id="country"
          name="country"
          value={form.country}
          onChange={handleOnChange}
        >
          <option value="">Seleccione un país</option>
          <option value="argentina">Argentina</option>
          <option value="brasil">Brasil</option>
          <option value="chile">Chile</option>
          <option value="méxico">México</option>
          <option value="perú">Perú</option>
        </select>
        <label htmlFor="website">Sitio Web</label>
        <input
          id="website"
          type="url"
          placeholder="Tu sitio web"
          name="website"
          onChange={handleOnChange}
        />

        <label htmlFor="favorite-color">Color Favorito</label>
        <input
          id="favorite-color"
          name="favoriteColor"
          type="color"
          onChange={handleOnChange}
        />
        <label htmlFor="satisfaction">Nivel de Satisfacción</label>
        <input
          id="satisfaction"
          type="range"
          name="satisfaction"
          min="0"
          max="10"
          onChange={handleOnChange}
        />
        <label>Género</label>
        <div className="radio-group">
          <div className="radio-container">
            <input
              id="male"
              name="genero"
              type="radio"
              onChange={handleOnChange}
            />
            <label htmlFor="male">Masculino</label>
          </div>
          <div className="radio-container">
            <input id="female" name="genero" type="radio" />
            <label htmlFor="female">Femenino</label>
          </div>
          <div className="radio-container">
            <input id="other" name="genero" type="radio" />
            <label htmlFor="other">Otro</label>
          </div>
        </div>
        <div className="checkbox-container">
          <input
            id="terms"
            type="checkbox"
            name="terminos"
            className="terms"
            onChange={handleOnChange}
          />
          <label htmlFor="terms" className="terms">
            Acepto los términos y condiciones
          </label>
        </div>
        {errores.length > 0 ? (
          <ul>
            {errores.map((error, index) => (
              <li className="errores" key={index}>
                {error}
              </li>
            ))}
          </ul>
        ) : (
          <></>
        )}
        <button type="submit" onClick={handleOnSubmit}>
          Registrar
        </button>
      </form>
    </div>
  );
}
export default App;
