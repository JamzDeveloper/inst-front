"use client";

import { POSITION } from "@/common/enum/position.enum";
import styles  from "./button-contact.module.css"

export default function ButtonContact({
  position,
  svg,
  text,
  onclick
}: {
  position: POSITION;
  svg: any;
  text: string;
  onclick:()=>void
}) {
  return (
    <button className={styles.button} onClick={()=>onclick()}>
      {position == POSITION.left ? svg : <></>}
      <p>{text}</p>
      {position == POSITION.right ? svg : <></>}
    </button>
  );
}
