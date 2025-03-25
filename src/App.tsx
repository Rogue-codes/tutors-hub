import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppOutlet from "./layout/AppOutlet";
import Student from "./views/student/Student";
import Meeting from "./views/meeting/Meeting";
import { paths } from "./routes/paths";
import Tutors from "./views/tutors/Tutors";
import PublicOutlet from "./layout/guard/public/PublicOutlet";
import { Suspense } from "react";
import Preloader from "./components/preloader/Preloader";
import Login from "./views/auth/Login";
import Home from "./views/home/Home";
import Analytics from "./views/analytics/Analytics";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppOutlet />}>
          <Route index element={<Home/>} />
          <Route path={paths.students} element={<Student />} />
          <Route path={paths.meetings} element={<Meeting />} />
          <Route path={paths.tutors} element={<Tutors />} />
          <Route path={paths.analytics} element={<Analytics />} />
        </Route>

        <Route element={<PublicOutlet />}>
            <Route index element={<Navigate to={paths.login} />} />
            <Route
              path={paths.login}
              element={
                <Suspense fallback={<Preloader />}>
                  <Login />
                </Suspense>
              }
            />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
