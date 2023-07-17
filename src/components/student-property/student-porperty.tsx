import style from "./style.module.css";
export default function StudentProperty({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className={style.container}>
      <div>
        <h2>{title}:</h2>
      </div>
      <div className={style.containerValue}>
        <p>{value}</p>
      </div>
    </div>
  );
}
