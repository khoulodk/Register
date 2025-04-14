import { useState } from 'react'
import './App.css'
import Register from './Components/Register/Register'
import AuthPage from './Components/AuthPage'


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import ModelSelection from './Components/ModelInfo/ModelSelection';
import ModelInfo from './Components/ModelInfo/ModelInfo';

function App() {
  const [count, setCount] = useState(0)
 
  return (
    // <>
    // <AuthPage/>
    // </>
    <Router>
    <Routes>
      <Route path="/" element={<ModelSelection />} />
      <Route path="/model/:id" element={<ModelInfo />} />
    </Routes>
  </Router>
  )
}


export default App;
