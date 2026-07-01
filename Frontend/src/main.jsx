import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from './Pages/Login.jsx';
import ShowStudent from './Pages/ShowStudent.jsx';
import AddStudent from './Pages/AddStudent.jsx';
import UpdateStudent from './Pages/UpdateStudent.jsx';
import DeleteStudent from './Pages/DeleteStudent.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/show-student" element={<ShowStudent />} />
      <Route path="/add-student" element={<AddStudent />} />
      <Route path="/update-student" element={<UpdateStudent />} />
      <Route path="/delete-student" element={<DeleteStudent />} />
    </Routes>
  </BrowserRouter>
);