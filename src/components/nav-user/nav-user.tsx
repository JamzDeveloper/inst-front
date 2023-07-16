import styles from "./style.module.css";
import SvgMoon from "../../../public/resource/svg/moon.svg";
import SvgCampaign from "../../../public/resource/svg/campaign.svg"
import Avatar from "../../../public/resource/imgs/avatar.png"
import Image from "next/image";
export default function NavUser() {
  return (
    <div className={styles.container}>
      <div className={styles.containerElement}>
        <Image src={SvgMoon} alt="icon moong" />
      </div>
      <div className={styles.containerElement }>
        <Image src={SvgCampaign} alt="icon campaign" />
      </div>
      <div className={styles.containerElement}>
        <Image src={Avatar} alt="avatar" width={50} height={50}/>
      </div>
    </div>
  );
}
