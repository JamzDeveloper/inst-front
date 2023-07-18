import style from "./style.module.css";
export default function StudentDelaysAbsences() {
  return (
    <div className={style.container}>
      <div>
        <h2>Tardanzas e inasistencias</h2>
      </div>
      <div className={style.containerContent}>
        <p>
          Total de inasistencias:<b>06</b>
        </p>
        <p>Total de inasistencias: 10</p>
      </div>
      <div className={style.containerProgress}>
        <progress value="50" max="100" className={style.progress}></progress>
      </div>
    </div>
  );
}
