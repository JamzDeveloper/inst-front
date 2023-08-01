"use client";
import CardCourse from "@/components/card-course/card-course";
import styles from "./style.module.css";
import Nav from "./components/nav-component";
import { cookies } from "next/dist/client/components/headers";
import { useSession } from "next-auth/react";

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

const fetchCourses = () => {
  const {} = cookies();
  // console.log(cookieStore)
  // console.log("haciendo fech de cursos");
  // console.log(process.env.URL_API);
  // return fetch(`${process.env.URL_API}/teacher/courses`, {
  //   headers: {
  //     Authorization: cookieStore,
  //   },
  // }).then((res) => res.json());
};
export default async function PageCourses() {
  const { data: session, status } = useSession();
  console.log(session);
  const courses = await fetchCourses();
  console.log(courses);
  return (
    <div>
      <Nav />
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
    </div>
  );
}
