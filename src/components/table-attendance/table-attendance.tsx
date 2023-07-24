export default function TableAttendance() {
  return (
    <div>
      <table id="tabla-asistencias">
        <thead>
          <tr>
            <th className="name">Nombre</th>
            <th>Fecha 1</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Estudiante 1</td>
            <td className={`default`}></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
