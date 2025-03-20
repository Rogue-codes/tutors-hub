import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/home/Home";
import AppOutlet from "./layout/AppOutlet";
import Student from "./views/student/Student";
import Meeting from "./views/meeting/Meeting";
import { paths } from "./routes/paths";
import Tutors from "./views/tutors/Tutors";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppOutlet />}>
          <Route path={paths.dashboard} index element={<Home />} />
          <Route path={paths.students} element={<Student />} />
          <Route path={paths.meetings} element={<Meeting />} />
          <Route path={paths.tutors} element={<Tutors />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
