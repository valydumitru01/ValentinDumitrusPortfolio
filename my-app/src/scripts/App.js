import Sidebar from "./SideBar.js";
import Main from "./Main.js";
import MatrixBackgroud from "./DigitalRain";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <>
      <MatrixBackgroud timeout={70}/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="expenses" element={<Main/>} />
          <Route path="invoices" element={<Main/>} />
        </Route>
      </Routes>
      </BrowserRouter>
      <Sidebar />
    </>
  );
}

export default App;
