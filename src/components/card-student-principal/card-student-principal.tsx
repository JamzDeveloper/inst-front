import Image from "next/image";
import style from "./style.module.css";

export default function CardStudentPrincipal({
  photo,
  firstName,
  lastName,
  code,
  email,
}: {
  photo: string;
  firstName: string;
  lastName: string;
  code: string;
  email: string;
}) {
  return (
    <div className={style.containerCard}>
      <div className={style.containerImage}>
        <Image
          src={photo}
          alt={firstName + " " + lastName}
          width={250}
          height={250}
        />
      </div>
      <div className={style.containerContent}>
        <div>
          <h2>Apellidos y Nombres</h2>
          <div>
            <p>{firstName}</p>
            <p>{lastName}</p>
          </div>
        </div>
        <div>
          <h2>Código del estudiante</h2>
          <p>{code}</p>
        </div>
        <div>
          <h2>Correo del estudiante</h2>
          <p>{email}</p>
        </div>
      </div>
    </div>
  );
}
