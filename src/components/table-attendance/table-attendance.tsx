import styles from "./style.module.css";
import "./globals.css";
import Image from "next/image";
const data = {
  header: [
    "Nombre",
    "fecha1",
    "fecha2",
    "fecha3",
    "fecha4",
    "fecha1",
    "fecha2",
    "fecha3",
    "fecha4",
    "fecha1",
    "fecha2",
    "fecha3",
    "fecha4",
    "fecha1",
    "fecha2",
    "fecha3",
    "fecha4",
    "fecha1",
    "fecha2",
    "fecha3",
    "fecha4",
    "fecha1",
    "fecha2",
    "fecha3",
    "fecha4",
    "fecha1",
    "fecha2",
    "fecha3",
    "fecha4",
    "fecha1",
    "fecha2",
    "fecha3",
    "fecha4",
  ],
  content: [
    {
      id: 2,
      name: "jose montenegro",
      email: "josemontenegro@gmail.com",
      photo: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      assists: [
        "present",
        "tardy",
        "absent",
        "present",
        "present",
        "tardy",
        "absent",
        "present",
        "present",
        "tardy",
        "absent",
        "present",
        "present",
        "tardy",
        "absent",
        "present",
        "present",
        "tardy",
        "absent",
        "present",
        "present",
        "tardy",
        "absent",
        "present",
        "present",
        "tardy",
        "absent",
        "present",
        "present",
        "tardy",
        "absent",
        "present",
      ],
    },
    {
      id: 2,
      email: "juanparedes@gmail.com",
      photo: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      name: "juan paredes",
      assists: [
        "",
        "present",
        "present",
        "",
        "",
        "present",
        "present",
        "",
        "",
        "present",
        "present",
        "",
        "",
        "present",
        "present",
        "",
        "",
        "present",
        "present",
        "",
        "",
        "present",
        "present",
        "",
        "",
        "present",
        "present",
        "",
        "",
        "present",
        "present",
        "",
      ],
    },
  ],
};

export default function TableAttendance() {
  return (
    <div>
      <table id="tabla-asistencias">
        <thead>
          <tr>
            {data.header.map((e) => {
              return <th key={e}>{e}</th>;
            })}
            {/* <th className="name">Nombre</th>
            <th>Fecha 1</th>
            <th>Fecha 2</th>
            <th>Fecha 3</th> <th>Fecha 2</th>
            <th>Fecha 3</th> <th>Fecha 2</th>
            <th>Fecha 3</th> <th>Fecha 2</th>
            <th>Fecha 3</th> <th>Fecha 2</th>
            <th>Fecha 3</th> */}
          </tr>
        </thead>
        <tbody className={styles.containerBody}>
          {data.content.map((e, index) => {
            return (
              <tr key={index}>
                <td key={e.name}>
                  <div className={styles.containerRelative}>
                    <div className={styles.containerAvatar}>
                      <div className={styles.containerAvatarItemImage}>
                        <Image
                          width={40}
                          height={40}
                          src={e.photo}
                          alt={e.name}
                        ></Image>
                      </div>
                      <div>
                        <div>{e.name}</div>
                        <div className={styles.itemEmail}>{e.email}</div>
                      </div>
                    </div>
                  </div>
                </td>
                {e.assists.map((e) => {
                  return (
                    <td key={e}>
                      <div className={styles.containerAttendance}>
                        <div className={`${styles.attendanceItem} ${e}`}></div>
                      </div>
                    </td>
                  );
                })}
              </tr>
            );
          })}
          {/* <tr>
            <td>Estudiante 1</td>
            <td className="presente"></td>
            <td className="tardanza"></td>
            <td className="ausente"></td>
            <td className="tardanza"></td>
            <td className="ausente"></td>
            <td className="tardanza"></td>
            <td className="tardanza"></td>
            <td className="ausente"></td>
            <td className="tardanza"></td>

            <td className="ausente"></td>
            <td className="tardanza"></td>
            <td className="ausente"></td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
}
