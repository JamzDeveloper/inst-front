import Image from "next/image";
import CardStudentPrincipal from "@/components/card-student-principal/card-student-principal";
import StudentGradeTable from "@/components/student-grade-table/student-grade-table";
import StudentProperty from "@/components/student-property/student-porperty";
import StudentDelaysAbsences from "@/components/student-delays-absences/student-delays-absences";
import style from "./style.module.css";
import SvgCircleHelp from "../../../../../../../public/resource/svg/circle-help.svg";

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
      <div className={style.containerDelaysAbsences}>
        <div>
          <StudentDelaysAbsences />
        </div>
        <div className={style.containerDelaysAbsencesHelp}>
          <div>
            <Image src={SvgCircleHelp} alt="circle help" />
          </div>
          <p>a) DPI: Desaprobado por inasistencia</p>
          <p> b) Faltas máximas permitidas: 10</p>
          <p>c) Justificaciones máximas permitidas: 3</p>
        </div>
      </div>
      <div className={style.detailsofrTardinessContainer}>
        <div>
          <h2>Faltas</h2>
          <p>Falta 1 (Fecha)</p> <p>Falta 1 (Fecha)</p> <p>Falta 1 (Fecha)</p>{" "}
          <p>Falta 1 (Fecha)</p> <p>Falta 1 (Fecha)</p> <p>Falta 1 (Fecha)</p>
        </div>
        <div>
          <h2>Tardanzas</h2>
          <p>Tardanza 1 (Fecha)</p> <p>Tardanza 1 (Fecha)</p>{" "}
          <p>Tardanza 1 (Fecha)</p> <p>Tardanza 1 (Fecha)</p>{" "}
          <p>Tardanza 1 (Fecha)</p> <p>Tardanza 1 (Fecha)</p>
        </div>
      </div>
    </div>
  );
}
