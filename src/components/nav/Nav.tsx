import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/resource/imgs/logo_istMGP.png";
import styles from "./Nav.module.css";
import SvgHome from "./../../../public/resource/svg/ico-home.svg";
import SvgCourses from "../../../public/resource/svg/icon-courses.svg";
import SvgClock from "../../../public/resource/svg/icon-clock.svg";
import SvgSetting from "../../../public/resource/svg/icon-setting.svg";
export default function Nav() {
  return (
    <div className={styles.containerGeneral}>
      <div className={styles.containerNav}>
        <Image src={Logo} alt="logo"></Image>
        <div className={styles.navElementContainer}>
          <div className={styles.element}>
            <Image src={SvgHome} alt="icon home" />
            <div className={styles.containerLink}>
              <Link href="/dashboard">Inicio</Link>
            </div>
          </div>
          <div className={styles.element}>
            <Image src={SvgCourses} alt="icon courses" />
            <div>
              <Link href="/dashboard/courses">Cursos</Link>
            </div>
          </div>
          <div className={styles.element}>
            <Image src={SvgClock} alt="icon clock" />
            <div>
              <Link href="/dashboard/horario">Horario</Link>
            </div>
          </div>
          <div className={styles.element}>
            <Image src={SvgSetting} alt="icon setting" />
            <div>
              <Link href="/dashboard/configuracion">Ajustes</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
