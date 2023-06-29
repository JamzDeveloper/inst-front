import FormLogin from "@/components/form-login/Form-login";
import style from "./Login.module.css";
import ButtonContact from "@/components/Button/ButtonContact";
import { POSITION } from "@/common/enum/position.enum";
import Image from "next/image";
import UsSvg from "../../../public/resource/svg/us-icon.svg";
import ContacSvg from "../../../public/resource/svg/contact-icon.svg";
export default function LoginPage() {
  return (
    <div className={style.background}>
      <div>
        <div>
          <ButtonContact
            position={POSITION.right}
            svg={<Image src={UsSvg} alt="us" />}
            text="Nosotros"
          />
          <ButtonContact
            position={POSITION.right}
            svg={<Image src={ContacSvg} alt="contact" />}
            text="Soporte"
          />
        </div>
      </div>
      <div>
        <FormLogin></FormLogin>
      </div>
    </div>
  );
}
