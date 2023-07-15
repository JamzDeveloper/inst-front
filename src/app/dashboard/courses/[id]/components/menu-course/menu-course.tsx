"use client";
import Image from "next/image";
import SvgArrowBack from "../../../../../../../public/resource/svg/arrow-back.svg";
import SvgArrowNext from "../../../../../../../public/resource/svg/arrow-next.svg";
import styles from "./menu-course.module.css";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

const options = [
 
  {
    id: "dmfaksmdfskd",
    route: "/alumnos",
    label: "Estudiantes",
  },
  {
    id: "dmfaksmdcjdnjcd",
    route: "/notas",
    label: "Notas",
  },
  {
    id: "dmkmfskmfksd293i29",
    route: "/asistencias",
    label: "Asistencia",
  },
  {
    id: "jn2n3r23",
    route: "/material",
    label: "Material",
  },
];

export default function MenuCourse() {
  const [option, setOption] = useState(options[0]);
  const [origiPath, setOriginPath] = useState("");
  const router = useRouter();
  const pathName = usePathname();

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
    router.replace(`${origiPath}${option.route}`);
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
    router.replace(`${origiPath}${option.route}`);
  };

  useEffect(() => {
    let valor = pathName.split("/")
    valor =valor.slice(0,valor.length-1);
    setOriginPath(valor.join("/"));
    // router.replace(`${origiPath}${option.route}`);
  }, []);
  return (
    <div>
      <div className={styles.containerMenuCourse}>
        <button
          onClick={() => handleBackOption(option.id)}
          className={styles.button}
        >
          <Image src={SvgArrowBack} alt="arrow back" />
        </button>
        <div className={styles.containerOption}>
          <p>{option.label}</p>
        </div>
        <button
          onClick={() => handleNextOption(option.id)}
          className={styles.button}
        >
          <Image src={SvgArrowNext} alt="arrow next" />
        </button>
      </div>
    </div>
  );
}
