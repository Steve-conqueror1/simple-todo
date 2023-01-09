import React from 'react';
import {BrowserRouter as Router, Routes, Route} from  'react-router-dom';
import {Home} from "./pages";
import {Todo} from "./pages/Todos";
function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/todos" element={<Todo/>}/>
        </Routes>
    </Router>
  );
}

export default App;
