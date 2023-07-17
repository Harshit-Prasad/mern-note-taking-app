import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Notes from "./pages/Notes";
import Note from "./pages/Note";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/note/:id" element={<Note />} />
      </Route>
    </Routes>
  );
}

export default App;
