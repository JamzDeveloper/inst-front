import style from "./style.module.css";
function StudentGradeTable() {
  return (
    <div>
      <table className={style.table}>
        <thead className={style.headerTable}>
          <th className={style.tableHeadElement}>Índice</th>
          <th className={style.tableHeadElement}>Calificación</th>
          <th className={style.tableHeadElement}>Ponderación</th>
        </thead>
        <tbody>
          {/* <tr>
            <td className={style.tableElement}>1.9</td>

            <td className={style.tableElement}>0.3</td>
            <td className={style.tableElement}> 0.5</td>
          </tr> */}

          <tr>
            <td colSpan={3}>
              <table className={style.tableChild}>
                <caption className={style.tableChildTitle}>
                  Detalle de la calificación seleccionada
                </caption>
                <thead className={style.tableChildHeaderContainer}>
                  <th className={style.tableChildHeaderContainerElement}>
                    Índice
                  </th>
                  <th className={style.tableChildHeaderContainerElement}>
                    Calificación
                  </th>
                  <th className={style.tableChildHeaderContainerElement}>
                    Ponderación
                  </th>
                </thead>
                <tbody>
                  <tr className={style.tableChildElementContainer}>
                    <td className={style.tableChildElement}>
                      <p> Práctica 01</p>
                    </td>
                    <td className={style.tableChildElement}>
                      <p>9.7</p>
                    </td>
                    <td className={style.tableChildElement}>
                      <p>8.8 %</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          {/* <tr className={style.tableElement}>
            <td>1</td>
            <td>8.5</td>
            <td>0.3</td>
          </tr> */}
        </tbody>
        <tfoot className={style.tableElement}>
          <tr>
            <td>1</td>
            <td>8.5</td>
            <td>0.3</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default StudentGradeTable;
