import styles from "./form-login.module.css";
export default function FormLogin() {
  return (
    <form className={styles.container}>
      <h2>Iniciar Sesión</h2>
      <p>Introduzca su correo electrónico y contraseña</p>
      <div>
        <input type="text"></input>
      </div>
      <div>
        <input type="text"></input>
      </div>
      <div>
        <button>Recuérdame</button>
        <p>¿Olvidaste tu contraseña?</p>
      </div>
      <button type="submit">Iniciar sesión</button>
    </form>
  );
}
