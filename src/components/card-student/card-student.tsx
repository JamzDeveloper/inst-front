import Image from "next/image";
import styles from "./card-student.module.css";
import ButtonCardStudent from "./button/button-card-student";

export default function CardStudent({
  // id,
  photo,
  firstName,
  lastName,
  email,
}: {
  // id: number;
  photo: string;
  firstName: string;
  lastName: string;
  email: string;
}) {
  return (
    <div className={styles.containerCardStudent}>
      <div className={styles.containerImageCardStudent}>
        <Image src={photo} alt={firstName} width={100} height={100}></Image>
      </div>
      <div>
        <p>
          {firstName} {lastName}
        </p>
      </div>
      <div>
        <p className={styles.email}>{email}</p>
      </div>
      <div>
        <ButtonCardStudent  />
      </div>
      <div className={styles.line}></div>
    </div>
  );
}
