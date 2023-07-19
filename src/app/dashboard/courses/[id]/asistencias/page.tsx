import TableAttendance from "@/components/table-attendance/table-attendance";
import style from "./style.module.css";
export default function Asistencias() {
  return (
    <div className={style.AsistenciasPage}>
      <TableAttendance />
    </div>
  );
}
