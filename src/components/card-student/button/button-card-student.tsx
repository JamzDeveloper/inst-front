
import styles from "./button.module.css";
// import { useRouter } from "next/navigation";
export default function ButtonCardStudent() {
  // const router = useRouter();
  // const handleClick = ()=>{
  //   // console.log(":")
  //   // router.push(`/${id}`)
  // }
  return (
    <button className={styles.buttonStudent} >
      Historial de notas y asistencias
    </button>
  );
}
