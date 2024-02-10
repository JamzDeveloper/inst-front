import Image from "next/image";
import MenuCourse from "./components/menu-course/menu-course";
import SvgBack from "../../../../../public/resource/svg/ep-back.svg";
import styles from "./style.module.css";
// import { useRouter } from "next/navigation";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const router = useRouter();
  // const handleBack = () => {
  //   router.back();_
  // };
  return (
    <div className={styles.containerLayout}>
      <div className={styles.menuFixed}>
        <div className={styles.containerBackAndTitle}>
          <button>
            <Image src={SvgBack} alt="back"></Image>
          </button>
          <div className={styles.containerTitle}>
            <p>Mis Cursos</p>
          </div>
        </div>
        <div className={styles.containerMenu}>
          <MenuCourse />
        </div>
      </div>
      {children}
    </div>
  );
}
