import StudentGradeTable from "@/components/student-grade-table/student-grade-table";
import style from "./style.module.css";
import CardStudentPrincipal from "@/components/card-student-principal/card-student-principal";
import StudentProperty from "@/components/student-property/student-porperty";
import StudentDelaysAbsences from "@/components/student-delays-absences/student-delays-absences";
export default function AlumnoId() {
  const photo =
    "https://media.licdn.com/dms/image/C4E03AQEmrsbAVxtFnw/profile-displayphoto-shrink_100_100/0/1662805226331?e=1694649600&v=beta&t=LfHBjEGwhd7bhqhZJchfZCsAZIgnzVQwCJ5MwAGbJRE";

  return (
    <div className={style.containerPage}>
      <div className={style.containerDataPersonal}>
        <CardStudentPrincipal
          photo={photo}
          firstName="Daniela Elisa"
          lastName="Luque  Dias"
          code="0123456789"
          email="Daniela@gmaik.com"
        />
        <div className={style.containerProperties}>
          <StudentProperty title="Plan académico" value="Informatica" />
          <StudentProperty title="Ciclo" value="VI" />
          <StudentProperty title="Sección" value="A" />
          <StudentProperty title="Periodo" value="2024-I" />
          <StudentProperty title="#Vez" value="1" />
        </div>
      </div>
      <StudentGradeTable />
      <div>
        <div>
          <StudentDelaysAbsences />
        </div>
        <div></div>
      </div>
    </div>
  );
}
