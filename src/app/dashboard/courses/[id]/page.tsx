import CardStudent from "@/components/card-student/card-student";
import styles from "./style.module.css";
import Image from "next/image";
// import { useRouter } from "next/router";
// import SvgBack from "../../../../../public/resource/svg/ep-back.svg";
import SvgArrowsFilter from "../../../../../public/resource/svg/arrows-filter.svg";
// import MenuCourse from "./menu-course/menu-course";
import Search from "@/components/search/search";
// import { usePathname } from 'next/navigation'
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
  // const router = useRouter();

  return <div className={styles.pageCourseStudent}></div>;
}
