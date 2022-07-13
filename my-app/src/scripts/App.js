import Sidebar from "./SideBar.js";
import Main from "./Main.js";
import MatrixBackgroud from "./DigitalRain";
import '../css/App.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <>
      <MatrixBackgroud timeout={70}/>
      <div style={{marginLeft:"50%"}}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="expenses" element={<Main/>} />
          <Route path="invoices" element={<Main/>} />
        </Route>
      </Routes>
      </BrowserRouter>
      </div>
      <Sidebar />
    </>
  );
}

export default App;
