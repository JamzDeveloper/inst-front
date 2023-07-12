import FormLogin from "@/components/form-login/form-login";
import style from "./Login.module.css";
import ButtonContact from "@/components/button/button-contact";
import { POSITION } from "@/common/enum/position.enum";
import Image from "next/image";
import Image1 from "../../../public/resource/imgs/imagen1.png";
import Image2 from "../../../public/resource/imgs/image2.png";
import Logo from "../../../public/resource/imgs/logo_istMGP.png";
export default function LoginPage() {
  return (
    <div className={style.background}>
      <div className={style.containerImage}>
        <Image src={Image2} alt=""></Image>
        <div className={style.containerImageBakground}></div>
      </div>
      <div className={style.containerImage}>
        <Image src={Image1} alt=""></Image>
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
