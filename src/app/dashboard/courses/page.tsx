// "use client";
import CardCourse from "@/components/card-course/card-course";
import styles from "./style.module.css";
import Nav from "./components/nav-component";
import { useSession } from "next-auth/react";
// import { useEffect, useState } from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { options } from "@/app/api/auth/[...nextauth]/options";
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

  return fetch(`${process.env.URL_API}/teacher/courses`, { headers }).then(
    (e) => e.json()
  );
};
export default async function PageCourses() {
  // const { data: session, status } = useSession();
  // const [name, setName] = useState("");
  // const [courses, setCourses] = useState([]);
  const sessionn = await getServerSession(options);
  console.log("session");
  console.log(sessionn);
  console.log("session");

  if (!sessionn) {
    console.log(sessionn);

    redirect("/api/auth/signin?callbackUrl=/server");
  }
  console.log("object");
 const data = await fechCourses(sessionn?.user);

 console.log(data);
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
            <p>name</p>
          </div>
          <div className={styles.containerCourses}>
            {data.map((course:any,index:any) => {
              return (
                <CardCourse
                  carrer={"course.carrer"}
                  cycle={course.cycle}
                  name={course.course.name}
                  section={course.section.name}
                  key={index}
                  id={course.course.id}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
