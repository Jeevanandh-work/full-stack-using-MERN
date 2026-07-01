import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Sidebar</h1>

      <h2 onClick={() => navigate("/show-student")}>
        Show Students
      </h2>

      <h2 onClick={() => navigate("/update-student")}>
        Update Student
      </h2>

      <h2 onClick={() => navigate("/add-student")}>
        Add Student
      </h2>

      <h2 onClick={() => navigate("/delete-student")}>
        Delete Student
      </h2>
    </div>
  );
}

export default Sidebar;