import Image from "next/image";
import style from "./style.module.css";
import PngAverage from "../../../public/resource/svg/promedio.png";
import SubTable from "./subtable/subtable";

function StudentGradeTable() {
  return (
    <div>
      <table className={style.table}>
        <thead className={style.headerTable}>
          <tr>
            <th className={style.tableHeadElement}>Ítem de calificación</th>
            <th className={style.tableHeadElement}>Calificación</th>
            <th className={style.tableHeadElement}>Ponderación</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td className={style.tableElement}>Practica 1</td>
            <td className={style.tableElement}>0.3</td>
            <td className={style.tableElement}> 0.5</td>
          </tr> */}

          <tr>
            <td colSpan={3}>
              {/* <table className={style.tableChild}>
                <caption className={style.tableChildTitle}>
                  <div className={style.tableChilContainerTible}>
                    <Image src={SvgFiles} alt="file icon" />
                    <p>Unidad 1</p>
                  </div>
                </caption>
                <thead className={style.tableChildHeaderContainer}>
                  <tr>
                    <th className={style.tableChildHeaderContainerElement}>
                      Índice
                    </th>
                    <th className={style.tableChildHeaderContainerElement}>
                      Calificación
                    </th>
                    <th className={style.tableChildHeaderContainerElement}>
                      Ponderación
                    </th>
                  </tr>
                </thead>
                <tbody>
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
              </table> */}
              <SubTable />
              <SubTable />
              <SubTable />
            </td>
          </tr>
          {/* <tr className={style.tableElement}>
            <td>1</td>
            <td>8.5</td>
            <td>0.3</td>
          </tr> */}
        </tbody>
        <tfoot className={style.tableFoot}>
          <tr className={style.tableFootContentContainer}>
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
    </div>
  );
}

export default StudentGradeTable;
