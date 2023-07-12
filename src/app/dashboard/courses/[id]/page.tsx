import CardStudent from "@/components/card-student/card-student";
import styles from "./style.module.css";
import Image from "next/image";
import SvgBack from "../../../../../public/resource/svg/ep-back.svg";
import SvgArrowsFilter from "../../../../../public/resource/svg/arrows-filter.svg";
import MenuCourse from "../../../../components/menu-course/menu-course";
import Search from "@/components/search/search";
import { usePathname } from 'next/navigation'
const datajson = [
  {
    photo:
      "https://media.licdn.com/dms/image/C4E03AQEmrsbAVxtFnw/profile-displayphoto-shrink_100_100/0/1662805226331?e=1694649600&v=beta&t=LfHBjEGwhd7bhqhZJchfZCsAZIgnzVQwCJ5MwAGbJRE",
    firstName: "Daniela",
    lastName: "Luque Dia",
    email: "Daniela@gmaik.com",
  },
  {
    photo:
      "https://media.licdn.com/dms/image/C4E03AQEmrsbAVxtFnw/profile-displayphoto-shrink_100_100/0/1662805226331?e=1694649600&v=beta&t=LfHBjEGwhd7bhqhZJchfZCsAZIgnzVQwCJ5MwAGbJRE",
    firstName: "Daniela",
    lastName: "Luque Dia",
    email: "Daniela@gmaik.com",
  },
  {
    photo:
      "https://media.licdn.com/dms/image/C4E03AQEmrsbAVxtFnw/profile-displayphoto-shrink_100_100/0/1662805226331?e=1694649600&v=beta&t=LfHBjEGwhd7bhqhZJchfZCsAZIgnzVQwCJ5MwAGbJRE",
    firstName: "Daniela",
    lastName: "Luque Dia",
    email: "Daniela@gmaik.com",
  },
  {
    photo:
      "https://media.licdn.com/dms/image/C4E03AQEmrsbAVxtFnw/profile-displayphoto-shrink_100_100/0/1662805226331?e=1694649600&v=beta&t=LfHBjEGwhd7bhqhZJchfZCsAZIgnzVQwCJ5MwAGbJRE",
    firstName: "Daniela",
    lastName: "Luque Dia",
    email: "Daniela@gmaik.com",
  },
  {
    photo:
      "https://media.licdn.com/dms/image/C4E03AQEmrsbAVxtFnw/profile-displayphoto-shrink_100_100/0/1662805226331?e=1694649600&v=beta&t=LfHBjEGwhd7bhqhZJchfZCsAZIgnzVQwCJ5MwAGbJRE",
    firstName: "Daniela",
    lastName: "Luque Dia",
    email: "Daniela@gmaik.com",
  },
  {
    photo:
      "https://media.licdn.com/dms/image/C4E03AQEmrsbAVxtFnw/profile-displayphoto-shrink_100_100/0/1662805226331?e=1694649600&v=beta&t=LfHBjEGwhd7bhqhZJchfZCsAZIgnzVQwCJ5MwAGbJRE",
    firstName: "Daniela",
    lastName: "Luque Dia",
    email: "Daniela@gmaik.com",
  },
  {
    photo:
      "https://media.licdn.com/dms/image/C4E03AQEmrsbAVxtFnw/profile-displayphoto-shrink_100_100/0/1662805226331?e=1694649600&v=beta&t=LfHBjEGwhd7bhqhZJchfZCsAZIgnzVQwCJ5MwAGbJRE",
    firstName: "Daniela",
    lastName: "Luque Dia",
    email: "Daniela@gmaik.com",
  },
  {
    photo:
      "https://media.licdn.com/dms/image/C4E03AQEmrsbAVxtFnw/profile-displayphoto-shrink_100_100/0/1662805226331?e=1694649600&v=beta&t=LfHBjEGwhd7bhqhZJchfZCsAZIgnzVQwCJ5MwAGbJRE",
    firstName: "Daniela",
    lastName: "Luque Dia",
    email: "Daniela@gmaik.com",
  },
  {
    photo:
      "https://media.licdn.com/dms/image/C4E03AQEmrsbAVxtFnw/profile-displayphoto-shrink_100_100/0/1662805226331?e=1694649600&v=beta&t=LfHBjEGwhd7bhqhZJchfZCsAZIgnzVQwCJ5MwAGbJRE",
    firstName: "Daniela",
    lastName: "Luque Dia",
    email: "Daniela@gmaik.com",
  },
  {
    photo:
      "https://media.licdn.com/dms/image/C4E03AQEmrsbAVxtFnw/profile-displayphoto-shrink_100_100/0/1662805226331?e=1694649600&v=beta&t=LfHBjEGwhd7bhqhZJchfZCsAZIgnzVQwCJ5MwAGbJRE",
    firstName: "Daniela",
    lastName: "Luque Dia",
    email: "Daniela@gmaik.com",
  },
  {
    photo:
      "https://media.licdn.com/dms/image/C4E03AQEmrsbAVxtFnw/profile-displayphoto-shrink_100_100/0/1662805226331?e=1694649600&v=beta&t=LfHBjEGwhd7bhqhZJchfZCsAZIgnzVQwCJ5MwAGbJRE",
    firstName: "Daniela",
    lastName: "Luque Dia",
    email: "Daniela@gmaik.com",
  },
  {
    photo:
      "https://media.licdn.com/dms/image/C4E03AQEmrsbAVxtFnw/profile-displayphoto-shrink_100_100/0/1662805226331?e=1694649600&v=beta&t=LfHBjEGwhd7bhqhZJchfZCsAZIgnzVQwCJ5MwAGbJRE",
    firstName: "Daniela",
    lastName: "Luque Dia",
    email: "Daniela@gmaik.com",
  },
  {
    photo:
      "https://media.licdn.com/dms/image/C4E03AQEmrsbAVxtFnw/profile-displayphoto-shrink_100_100/0/1662805226331?e=1694649600&v=beta&t=LfHBjEGwhd7bhqhZJchfZCsAZIgnzVQwCJ5MwAGbJRE",
    firstName: "Daniela",
    lastName: "Luque Dia",
    email: "Daniela@gmaik.com",
  },
  {
    photo:
      "https://media.licdn.com/dms/image/C4E03AQEmrsbAVxtFnw/profile-displayphoto-shrink_100_100/0/1662805226331?e=1694649600&v=beta&t=LfHBjEGwhd7bhqhZJchfZCsAZIgnzVQwCJ5MwAGbJRE",
    firstName: "Daniela",
    lastName: "Luque Dia",
    email: "Daniela@gmaik.com",
  },
  {
    photo:
      "https://media.licdn.com/dms/image/C4E03AQEmrsbAVxtFnw/profile-displayphoto-shrink_100_100/0/1662805226331?e=1694649600&v=beta&t=LfHBjEGwhd7bhqhZJchfZCsAZIgnzVQwCJ5MwAGbJRE",
    firstName: "Daniela",
    lastName: "Luque Dia",
    email: "Daniela@gmaik.com",
  },
  {
    photo:
      "https://media.licdn.com/dms/image/C4E03AQEmrsbAVxtFnw/profile-displayphoto-shrink_100_100/0/1662805226331?e=1694649600&v=beta&t=LfHBjEGwhd7bhqhZJchfZCsAZIgnzVQwCJ5MwAGbJRE",
    firstName: "Daniela",
    lastName: "Luque Dia",
    email: "Daniela@gmaik.com",
  },
  {
    photo:
      "https://media.licdn.com/dms/image/C4E03AQEmrsbAVxtFnw/profile-displayphoto-shrink_100_100/0/1662805226331?e=1694649600&v=beta&t=LfHBjEGwhd7bhqhZJchfZCsAZIgnzVQwCJ5MwAGbJRE",
    firstName: "Daniela",
    lastName: "Luque Dia",
    email: "Daniela@gmaik.com",
  },
  {
    photo:
      "https://media.licdn.com/dms/image/C4E03AQEmrsbAVxtFnw/profile-displayphoto-shrink_100_100/0/1662805226331?e=1694649600&v=beta&t=LfHBjEGwhd7bhqhZJchfZCsAZIgnzVQwCJ5MwAGbJRE",
    firstName: "Daniela",
    lastName: "Luque Dia",
    email: "Daniela@gmaik.com",
  },
  {
    photo:
      "https://media.licdn.com/dms/image/C4E03AQEmrsbAVxtFnw/profile-displayphoto-shrink_100_100/0/1662805226331?e=1694649600&v=beta&t=LfHBjEGwhd7bhqhZJchfZCsAZIgnzVQwCJ5MwAGbJRE",
    firstName: "Daniela",
    lastName: "Luque Dia",
    email: "Daniela@gmaik.com",
  },
  {
    photo:
      "https://media.licdn.com/dms/image/C4E03AQEmrsbAVxtFnw/profile-displayphoto-shrink_100_100/0/1662805226331?e=1694649600&v=beta&t=LfHBjEGwhd7bhqhZJchfZCsAZIgnzVQwCJ5MwAGbJRE",
    firstName: "Daniela",
    lastName: "Luque Dia",
    email: "Daniela@gmaik.com",
  },
  {
    photo:
      "https://media.licdn.com/dms/image/C4E03AQEmrsbAVxtFnw/profile-displayphoto-shrink_100_100/0/1662805226331?e=1694649600&v=beta&t=LfHBjEGwhd7bhqhZJchfZCsAZIgnzVQwCJ5MwAGbJRE",
    firstName: "Daniela",
    lastName: "Luque Dia",
    email: "Daniela@gmaik.com",
  },
  {
    photo:
      "https://media.licdn.com/dms/image/C4E03AQEmrsbAVxtFnw/profile-displayphoto-shrink_100_100/0/1662805226331?e=1694649600&v=beta&t=LfHBjEGwhd7bhqhZJchfZCsAZIgnzVQwCJ5MwAGbJRE",
    firstName: "Daniela",
    lastName: "Luque Dia",
    email: "Daniela@gmaik.com",
  },
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
export default async function Course({ params }: any) {
  console.log(params);
  return (
    <div className={styles.pageCourseStudent}>
      <div className={styles.menuFixed}>
        <div className={styles.containerBackAndTitle}>
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
      </div>
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
        <div className={styles.containerStudent}>
          {datajson.map((e, index) => (
            <CardStudent
              email={e.email}
              firstName={e.firstName}
              lastName={e.lastName}
              photo={e.photo}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
