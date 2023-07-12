"use client";
import Image from "next/image";
import Logo from "../../../public/resource/imgs/logo_istMGP.png";
import CardCourse from "@/components/card-course/card-course";
import styles from "./page.module.css";
type CourseCard = {
  name: string;
  carrer: string;
  cycle: number;
  section: string;
};

const dataJson: CourseCard[] = [
  {
    name: "Javascript",
    carrer: "Informatica",
    cycle: 20,
    section: "C",
  },
  {
    name: "python",
    carrer: "Informatica",
    cycle: 20,
    section: "C",
  },
  {
    name: "Word",
    carrer: "Enfermeria",
    cycle: 20,
    section: "C",
  },
  {
    name: "Javascript",
    carrer: "Informatica",
    cycle: 20,
    section: "C",
  },
  {
    name: "Javascript",
    carrer: "Informatica",
    cycle: 20,
    section: "C",
  },
  {
    name: "python",
    carrer: "Informatica",
    cycle: 20,
    section: "C",
  },
  {
    name: "Word",
    carrer: "Enfermeria",
    cycle: 20,
    section: "C",
  },
  {
    name: "Javascript",
    carrer: "Informatica",
    cycle: 20,
    section: "C",
  },
  {
    name: "Javascript",
    carrer: "Informatica",
    cycle: 20,
    section: "C",
  },
  {
    name: "python",
    carrer: "Informatica",
    cycle: 20,
    section: "C",
  },
  {
    name: "Word",
    carrer: "Enfermeria",
    cycle: 20,
    section: "C",
  },
  {
    name: "Javascript",
    carrer: "Informatica",
    cycle: 20,
    section: "C",
  },
  {
    name: "Javascript",
    carrer: "Informatica",
    cycle: 20,
    section: "C",
  },
  {
    name: "python",
    carrer: "Informatica",
    cycle: 20,
    section: "C",
  },
  {
    name: "Word",
    carrer: "Enfermeria",
    cycle: 20,
    section: "C",
  },
  {
    name: "Javascript",
    carrer: "Informatica",
    cycle: 20,
    section: "C",
  },
  {
    name: "Javascript",
    carrer: "Informatica",
    cycle: 20,
    section: "C",
  },
  {
    name: "python",
    carrer: "Informatica",
    cycle: 20,
    section: "C",
  },
  {
    name: "Word",
    carrer: "Enfermeria",
    cycle: 20,
    section: "C",
  },
  {
    name: "Javascript",
    carrer: "Informatica",
    cycle: 20,
    section: "C",
  },
  {
    name: "Javascript",
    carrer: "Informatica",
    cycle: 20,
    section: "C",
  },
  {
    name: "python",
    carrer: "Informatica",
    cycle: 20,
    section: "C",
  },
  {
    name: "Word",
    carrer: "Enfermeria",
    cycle: 20,
    section: "C",
  },
  {
    name: "Javascript",
    carrer: "Informatica",
    cycle: 20,
    section: "C",
  },
  {
    name: "Javascript",
    carrer: "Informatica",
    cycle: 20,
    section: "C",
  },
  {
    name: "python",
    carrer: "Informatica",
    cycle: 20,
    section: "C",
  },
  {
    name: "Word",
    carrer: "Enfermeria",
    cycle: 20,
    section: "C",
  },
  {
    name: "Javascript",
    carrer: "Informatica",
    cycle: 20,
    section: "C",
  },
];
export default function PageCourses() {
  return (
    <div className={styles.pageMyCourses}>
      <h1 className={styles.title}>Mis Cursos</h1>
      <p className={styles.description}>
        Conoce e ingresa de manera rápida a tus clases pogramadas.
      </p>
      <div className={styles.containerDate}>
        <p>2023 - 5</p>
      </div>
      <div className={styles.containerCourses}>
        {dataJson.map((course) => {
          return (
            <CardCourse
              carrer={course.carrer}
              cycle={course.cycle}
              name={course.name}
              section={course.section}
              key={course.name}
            />
          );
        })}
      </div>
    </div>
  );
}
