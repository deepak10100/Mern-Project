import React from 'react';
import Todo from './components/Todo';
import EditForm from './components/EditForm';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/edit/:id" element={<EditForm />} />
      </Routes>
    </BrowserRouter>
  
   </>
  );
}

export default App;
