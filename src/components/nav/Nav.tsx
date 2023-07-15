import Image from "next/image";
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
            <div>
              <p>Home</p>
            </div>
          </div>
          <div className={styles.element}>
            <Image src={SvgCourses} alt="icon courses" />
            <div>
              <p>Home</p>
            </div>
          </div>
          <div className={styles.element}>
            <Image src={SvgClock} alt="icon clock" />
            <div>
              <p>Home</p>
            </div>
          </div>
          <div className={styles.element}>
            <Image src={SvgSetting} alt="icon setting" />
            <div>
              <p>Home</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
