import StudentGradeTable from "@/components/student-grade-table/student-grade-table";
import style  from "./style.module.css"
export default function AlumnoId() {
  return (
    <div className={style.containerPage}>
      <StudentGradeTable />
    </div>
  );
}
