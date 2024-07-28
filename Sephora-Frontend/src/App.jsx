import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";

function App() {
  return <>

  <Routes>
    <Route path="/" element={  <Home/>}/>
    <Route path="/cart"  element={<CartPage/>}/>
  </Routes>
  </>;
}

export default App;
