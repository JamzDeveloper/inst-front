import Image from "next/image";
import Logo from "../../../public/resource/imgs/logo_istMGP.png";
import styles from "./Nav.module.css" 
export default function Nav() {
  return (
    <div className={styles.containerNav}>
      <Image src={Logo} alt="logo"></Image>
    </div>
  );
}
