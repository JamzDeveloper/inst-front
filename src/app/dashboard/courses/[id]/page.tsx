import CardStudent from "@/components/card-student/card-student";
import styles from "./style.module.css";
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
      <div className={styles.containerTitle}>
        <button>{"<-"}</button>
        <p>
          {course.name.slice(0, 1).toLocaleUpperCase()}
          {course.name.slice(1, course.name.length)}
        </p>
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
  );
}
