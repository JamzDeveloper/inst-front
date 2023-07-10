"use client";

import { POSITION } from "@/common/enum/position.enum";
import styles from "./card-couse.module.css";
import ButtonContact from "../Button/ButtonContact";

export default function CardCourse({
  name,
  carrer,
  cycle,
  section,
}: {
  name: string;
  carrer: string;
  cycle: number;
  section: string;
}) {
  return (
    <div className={styles.containerCourse}>
      <h1>{name}</h1>
      <div className={styles.containerCourseElement}>
        <p>Carrera: </p>
        <p>{carrer}</p>
      </div>
      <div className={styles.containerCourseElement}>
        <p>Ciclo: </p>
        <p>{cycle}</p>
      </div>
      <div className={styles.containerCourseElement}>
        <p>Sección: </p>
        <p>{section}</p>
      </div>
      <ButtonContact text="Entrar" svg={<></>} position={POSITION.left} />
    </div>
  );
}
