import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Home from "./pages/Home";
import Notes from "./pages/Notes";
import Note from "./pages/Note";
import Register from "./pages/Register";
import Login from "./pages/Login";
import CreateNote from "./pages/CreateNote";
import Profile from "./pages/Profile";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<PrivateRoute />}>
          <Route path="/notes" element={<Notes />} />
          <Route path="/note/:id" element={<Note />} />
          <Route path="/createNote" element={<CreateNote />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
