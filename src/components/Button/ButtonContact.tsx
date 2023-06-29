"use client";

import { POSITION } from "@/common/enum/position.enum";
import styles  from "./ButtonContact.module.css"

export default function ButtonContact({
  position,
  svg,
  text,
}: {
  position: POSITION;
  svg: any;
  text: string;
}) {
  return (
    <button className={styles.button}>
      {position == POSITION.left ? svg : <></>}
      <p>{text}</p>
      {position == POSITION.right ? svg : <></>}
    </button>
  );
}
