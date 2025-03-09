import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/home/Home";
import AppOutlet from "./layout/AppOutlet";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppOutlet />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
