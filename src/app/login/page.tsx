import FormLogin from "@/components/form-login/Form-login";
import style from "./Login.module.css";
import ButtonContact from "@/components/Button/ButtonContact";
import { POSITION } from "@/common/enum/position.enum";
import Image from "next/image";
import UsSvg from "../../../public/resource/svg/us-icon.svg";
import ContacSvg from "../../../public/resource/svg/contact-icon.svg";
import CardCourse from "@/components/card-course/card-course";
import image1 from "../../../public/resource/imgs/image1.png";
import Image2 from "../../../public/resource/imgs/image2.png";
import Logo from "../../../public/resource/imgs/logo_istMGP.png";
export default function LoginPage() {
  return (
    <div className={style.background}>
      <div className={style.containerImage}>
        <Image src={image1} alt=""></Image>
        <div className={style.containerImageBakground}></div>
      </div>
      <div className={style.containerImage}>
        <Image src={Image2} alt=""></Image>
        <div
          className={style.containerImageBakground}
          style={{ background: "rgba(255, 145, 83, 0.45)" }}
        ></div>
      </div>

      <div className={style.containerForm}>
        <FormLogin></FormLogin>
      </div>

      <div className={style.containerLogo}>
        <Image src={Logo} alt="logo"></Image>
        <p>
          Instituto Superior Tecnológico
          <br /> MANUEL GONZALES PRADA
        </p>
      </div>
      <div className={style.cotainerTermsConditions}>
        <p>© 2023 Derechos reservados, IST Manuel Gonzales Prada</p>
        <p>Privacidad: Términos de servicio.</p>
      </div>
    </div>
  );
}
