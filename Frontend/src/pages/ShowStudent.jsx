import Sidebar from "../components/Sidebar";
import Studdetail from "../data/Student";

function ShowStudent() {
  return (
    <div>
      <Sidebar />

      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>City</th>
          </tr>
        </thead>

        <tbody>
          {Studdetail.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.phone}</td>
              <td>{student.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ShowStudent;