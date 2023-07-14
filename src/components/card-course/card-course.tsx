"use client";

import { POSITION } from "@/common/enum/position.enum";
import styles from "./card-couse.module.css";
import ButtonContact from "../button/button-contact";
import { useRouter } from "next/navigation";
export default function CardCourse({
  name,
  carrer,
  cycle,
  section,
  id,
}: {
  name: string;
  carrer: string;
  cycle: number;
  section: string;
  id: number;
}) {
  const router = useRouter();
  const handleClick = (): void => {
    router.push(`/dashboard/courses/${id}`);
  };

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
      <ButtonContact
        text="Entrar"
        svg={<></>}
        position={POSITION.left}
        onclick={handleClick}
      />
    </div>
  );
}
