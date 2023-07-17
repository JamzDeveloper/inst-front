"use client";
import { useState } from "react";
import style from "../style.module.css";
import SvgFiles from "../../../../public/resource/svg/files.svg";
import PngAverage from "../../../../public/resource/svg/promedio.png";
import SvgArrowDown from "../../../../public/resource/svg/arrow-down.svg";

import Image from "next/image";

export default function SubTable() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <table className={style.tableChild}>
      <caption className={style.tableChildTitle}>
        <div className={style.tableChilContainerTable}>
          <div className={style.tableChilContainerTable}>
            <Image src={SvgFiles} alt="file icon" />
            <p>Unidad 1</p>
          </div>

          <button
            onClick={() => setIsVisible(!isVisible)}
            className={style.buttonToCollapse}
            style={{
              transition: "0.3s",
              transform: isVisible ? "rotate(-180deg)" : "rotate(0deg)",
            }}
          >
            <Image src={SvgArrowDown} alt="arrow down" />
          </button>
        </div>
      </caption>
      <thead className={style.tableChildHeaderContainer}>
        <tr>
          <th className={style.tableChildHeaderContainerElement}>Índice</th>
          <th className={style.tableChildHeaderContainerElement}>
            Calificación
          </th>
          <th className={style.tableChildHeaderContainerElement}>
            Ponderación
          </th>
        </tr>
      </thead>
      <tbody
        style={{
          display: !isVisible ? "none" : "contents",
        }}
      >
        <tr className={style.tableChildElementContainer}>
          <td className={style.tableChildElement}>
            <p> Práctica 01</p>
          </td>
          <td className={style.tableChildElement}>
            <p>20</p>
          </td>
          <td className={style.tableChildElement}>
            <p>19%</p>
          </td>
        </tr>
        <tr className={style.tableChildElementContainer}>
          <td className={style.tableChildElement}>
            <p> Práctica 01</p>
          </td>
          <td className={style.tableChildElement}>
            <p>20</p>
          </td>
          <td className={style.tableChildElement}>
            <p>19%</p>
          </td>
        </tr>
        <tr className={style.tableChildElementContainer}>
          <td className={style.tableChildElement}>
            <p> Práctica 01</p>
          </td>
          <td className={style.tableChildElement}>
            <p>20</p>
          </td>
          <td className={style.tableChildElement}>
            <p>19%</p>
          </td>
        </tr>
      </tbody>
      <tfoot className={style.tableChildFoot}>
        <tr className={style.tableChildFootContentContainer}>
          <td>
            <div>
              <p>
                <Image src={PngAverage} alt="promedio" />
                Promedio
              </p>
            </div>
          </td>
          <td>
            <div>
              <p>8.5</p>
            </div>
          </td>
          <td>
            <div>
              <p>100%</p>
            </div>
          </td>
        </tr>
      </tfoot>
    </table>
  );
}
