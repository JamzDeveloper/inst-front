"use client";
import Image from "next/image";
import Logo from "../../../public/resource/imgs/logo_istMGP.png";
import CardCourse from "@/components/card-course/card-course";
import styles from "./style.module.css";
type CourseCard = {
  name: string;
  carrer: string;
  cycle: number;
  section: string;
  id: number;
};

const dataJson: CourseCard[] = [
  {
    name: "Javascript",
    carrer: "Informatica",
    cycle: 20,
    section: "C",
    id: 1,
  },
  {
    name: "python",
    carrer: "Informatica",
    cycle: 20,
    section: "C",
    id: 2,
  },
  {
    name: "Word",
    carrer: "Enfermeria",
    cycle: 20,
    section: "C",
    id: 3,
  },
];
export default function PageCourses() {
  return (
    <div className={styles.pageMyCourses}>
      <div className={styles.main}>
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
                id={course.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
