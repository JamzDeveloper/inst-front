
import FormLogin from "@/components/form-login/form-login";
import style from "./Login.module.css";
export default function LoginPage() {
  return (
    <div className={style.background}>
      <FormLogin></FormLogin>
    </div>
  );
}
