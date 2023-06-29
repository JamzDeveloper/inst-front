"use client";
import Image from "next/image";
import { useState } from "react";

import styles from "./form-login.module.css";

import Lock from "../../../public/resource/svg/lock.svg";
import EyeLock from "../../../public/resource/svg/eye-view-off.svg";
import EyeOn from "../../../public/resource/svg/eye-on.svg";
import EmailSvg from "../../../public/resource/svg/email.svg";
export default function FormLogin() {
  const [statuEye, setStatuEye] = useState<boolean>(false);

  return (
    <form className={styles.container}>
      <h2>Iniciar Sesión</h2>
      <p>Introduzca su correo electrónico y contraseña</p>
      <div
        className={styles.inputContainer}
        style={{ justifyContent: "start" }}
      >
        <Image
          src={EmailSvg}
          alt="emial icon"
          style={{ left: "0" }}
          width={20}
          height={20}
        ></Image>
        <input
          type="email"
          className={styles.input}
          placeholder="Correo electrónico"
          style={{ marginLeft: "11px" }}
        ></input>
      </div>
      <div className={styles.inputContainer}>
        <Image src={Lock} alt="Lock"></Image>
        <input
          className={styles.input}
          type={statuEye ? "text" : "password"}
          placeholder="Contraseña"
        ></input>
        <div
          onClick={() => setStatuEye(!statuEye)}
          className={styles.buttonEye}
        >
          {statuEye ? (
            <Image alt="eye on" src={EyeOn}></Image>
          ) : (
            <Image alt="eye off" src={EyeLock}></Image>
          )}
        </div>
      </div>
      <div className={styles.containerPasswordHelp}>
        <label className={styles.label}>
          <input
            name="recuerdame"
            type="checkbox"
            value="recuerdame"
            className={styles.inputCheckbox}
          />{" "}
          Recuérdame
        </label>
        <a href="#">
          <p>¿Olvidaste tu contraseña?</p>
        </a>
      </div>
      <div className={styles.containerButtonLogin}>
        <button type="submit" className={styles.buttonLogin}>
          Iniciar sesión
        </button>
      </div>
    </form>
  );
}
