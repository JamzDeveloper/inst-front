"use client";
import CardCourse from "@/components/card-course/card-course";
import styles from "./style.module.css";
import Nav from "./components/nav-component";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

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

const fechCourses = (user: any) => {
  console.log("courses");
  console.log(user?.accessToken);
  const headers = {
    Authorization: `Bearer ${user?.accessToken}`,
  };

  return fetch(`http://192.168.1.39:4000/teacher/courses`, { headers }).then(
    (e) => e.json()
  );
};
export default function PageCourses() {
  const { data: session, status } = useSession();
  const [name, setName] = useState("");
  const [courses, setCourses] = useState([]);
  console.log("object")
  fechCourses(session?.user).then((e) => {
    console.log("then");
    console.log(e);
    setName("ja");
  });

  // useEffect(() => {
  //   const requestHttp = async () => {
  //     const respondeData = await fechCourses(session?.user);
  //     console.log(respondeData);
  //     return respondeData;
  //   };
  //   requestHttp().then((e) => console.log(e));
  // }, []);

  return (
    <div>
      <Nav />

      <div className={styles.pageMyCourses}>
        <div className={styles.main}>
          <p className={styles.description}>
            Conoce e ingresa de manera rápida a tus clases pogramadas.
          </p>
          <div className={styles.containerDate}>
            <p>{name}</p>
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
    </div>
  );
}
