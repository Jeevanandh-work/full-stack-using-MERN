import Sidebar from "../components/Sidebar";
import Studdetail from "../data/Student";
import "../pages/AddStudent.css";

function AddStudent() {
  return (
    <div className="container">
      <Sidebar />

      <div className="content">
        <h1>This is the page for showing students</h1>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>City</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            {Studdetail.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.city}</td>
                <td>
                  <button>Edit</button>
                </td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <h1>Page to add a new student</h1>
      </div>

    </div>
  );
}

export default AddStudent;