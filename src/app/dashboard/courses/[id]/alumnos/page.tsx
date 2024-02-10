"use client";
import { redirect } from "next/navigation";
import CardStudent from "@/components/card-student/card-student";
import styles from "./style.module.css";
import Image from "next/image";
// import { useRouter } from "next/router";
// import SvgBack from "../../../../../public/resource/svg/ep-back.svg";
import SvgArrowsFilter from "../../../../../../public/resource/svg/arrows-filter.svg";
// import MenuCourse from "./menu-course/menu-course";
import Search from "@/components/search/search";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { ResponseOneCourse } from "@/types/response-one-course";
import { useSession } from "next-auth/react";
// import { usePathname } from 'next/navigation'
const datajson = [
  {
    photo:
      "https://media.licdn.com/dms/image/C4E03AQEmrsbAVxtFnw/profile-displayphoto-shrink_100_100/0/1662805226331?e=1694649600&v=beta&t=LfHBjEGwhd7bhqhZJchfZCsAZIgnzVQwCJ5MwAGbJRE",
    firstName: "Daniela",
    lastName: "Luque Dia",
    email: "Daniela@gmaik.com",
  },
];
const course = {
  name: "informatica",
  credit: 1,
  description: "",
};

const fechCourses = (user: any, id: number) => {
  console.log("courses");
  console.log(user?.accessToken);
  const headers = {
    Authorization: `Bearer ${user?.accessToken}`,
  };
  return fetch(`${process.env.URL_API}/teacher-course/${id}`, { headers })
    .then((e) => e.json())
    .catch();
};

export default function Course({ params }: { params: { id: number } }) {
  console.log("params", params.id);
  const { data: session, status } = useSession();
  console.log(session);

  // const router = useRouter();
  // const sessionn = await getServerSession(options);

  // if (!sessionn) {
  //   console.log(sessionn);

  //   redirect("/api/auth/signin?callbackUrl=/server");
  // }

  // const data: ResponseOneCourse = await fechCourses(sessionn?.user, params.id);

  // console.log(data);

  // let temporalStudent = data.students || [];
  // const handleSearch = (e: any) => {
  //   console.log(e);
  // };
  return (
    <div className={styles.pageCourseStudent}>
      {/* <div className={styles.menuFixed}>7
      ohhh  <div className={styles.containerBackAndTitle}>
          <button>
            <Image src={SvgBack} alt="back"></Image>
          </button>
          <div className={styles.containerTitle}>
            <p>
              {course.name.slice(0, 1).toLocaleUpperCase()}
              {course.name.slice(1, course.name.length)}
            </p>
          </div>
        </div>
        <div className={styles.containerMenu}>
          <MenuCourse />
        </div>
      </div> */}
      <div className={styles.main}>
        <div className={styles.containerFilter}>
          <Search />
          <button className={styles.filterOrder}>
            <p>A - Z</p>
            <Image src={SvgArrowsFilter} alt="arrrows filter"></Image>
          </button>
        </div>
        <div className={styles.containerTotalStudent}>
          <p>Número de estudiantes: {"18"}</p>
          <a href="#">Descargar lista</a>
        </div>
        {/* <div className={styles.containerStudent}>
          {temporalStudent.map((e, index) => (
            <CardStudent
              email={e.user.email}
              firstName={e.user.firstName}
              lastName={e.user.lastName}
              photo={
                e.user.photo != null
                  ? e.user.photo
                  : "https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ="
              }
              key={index}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
}
