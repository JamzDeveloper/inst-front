export default function TableAttendance() {
  return (
    <div>
      <table id="tabla-asistencias">
        <thead>
          <tr>
            <th className="name">Nombre</th>
            <th>Fecha 1</th>
            <th>Fecha 2</th>
            <th>Fecha 3</th> <th>Fecha 2</th>
            <th>Fecha 3</th> <th>Fecha 2</th>
            <th>Fecha 3</th> <th>Fecha 2</th>
            <th>Fecha 3</th> <th>Fecha 2</th>
            <th>Fecha 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
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
          </tr>
        </tbody>
      </table>
    </div>
  );
}
