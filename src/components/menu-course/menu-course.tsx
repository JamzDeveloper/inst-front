"use client";
import Image from "next/image";
import SvgArrowBack from "../../../public/resource/svg/arrow-back.svg";
import SvgArrowNext from "../../../public/resource/svg/arrow-next.svg";
import styles from "./menu-course.module.css";
import { useState } from "react";
const options = [
  {
    id: "dfklacdsd",
    name: "Material",
  },
  {
    id: "dmfaksmdfskd",
    name: "Estudiantes",
  },
  {
    id: "dfasfdsa",
    name: "Notas",
  },
  {
    id: "jn2n3r23",
    name: "Asistencia",
  },
];
export default function MenuCourse() {
  const [option, setOption] = useState(options[0]);
  const handleBackOption = (id: string) => {
    options.map((value, index) => {
      if (value.id === id) {
        if (index == 0) {
          setOption(options[options.length - 1]);
        } else {
          setOption(options[index - 1]);
        }
      }
    });
  };
  const handleNextOption = (id: string) => {
    options.map((value, index) => {
      if (value.id === id) {
        if (index == options.length - 1) {
          setOption(options[0]);
        } else {
          setOption(options[index + 1]);
        }
      }
    });
  };
  return (
    <div className={styles.containerMenuCourse}>
      <button
        onClick={() => handleBackOption(option.id)}
        className={styles.button}
      >
        <Image src={SvgArrowBack} alt="arrow back" />
      </button>
      <div className={styles.containerOption}>
        <p>{option.name}</p>
      </div>
      <button
        onClick={() => handleNextOption(option.id)}
        className={styles.button}
      >
        <Image src={SvgArrowNext} alt="arrow next" />
      </button>
    </div>
  );
}
