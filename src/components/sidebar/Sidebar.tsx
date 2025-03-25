/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaRegCalendarAlt } from "react-icons/fa";
import { logo } from "../../assets";
import { FaChildren } from "react-icons/fa6";
import { RxDashboard } from "react-icons/rx";
import { paths } from "../../routes/paths";
import { useLocation, useNavigate } from "react-router-dom";
import { IoAnalytics } from "react-icons/io5";

interface IRoutes {
  label: string;
  icon: any;
  link: string
  show: boolean
}
export default function Sidebar() {
  const user = JSON.parse(localStorage.getItem("user-tutor")!);

  const navigate = useNavigate()

  const routes: IRoutes[] = [
    {
      label: "Dashboard",
      icon: <RxDashboard />,
      link: paths.dashboard,
      show: true
    },
    {
      label: "Students",
      icon: <FaChildren />,
      link: paths.students,
      show: user.role !== "STUDENT"
    },
    {
      label: "Meetings",
      icon: <FaRegCalendarAlt />,
      link: paths.meetings,
      show: true
    },
    {
      label: "Tutors",
      icon: <FaChildren />,
      link: paths.tutors,
      show: user.role === "SUPER_ADMIN"
    },
    {
      label: "Analytics",
      icon: <IoAnalytics />,
      link: paths.analytics,
      show: user.role === "SUPER_ADMIN"
    },
  ];

  const location = useLocation()

  const { pathname } = location

  const logout = () => {
    localStorage.removeItem("user-tutor")
    window.location.reload()
  }

  return (
    <div className="w-[17vw]  bg-white h-screen fixed left-0 top-0 z-20 py-12">
      <div className="w-full flex justify-center items-center">
        <img src={logo} alt="" />
      </div>

      <div className="mt-12">
        {routes.map((route) => {
          const isActive =
            pathname.split('/')[1].toLowerCase() === route.label.toLowerCase() ||
            (pathname === '/' && route.label.toLowerCase() === 'dashboard');

          return (
            <div
              key={route.label}
              className={`${isActive ? "border-l-4 border-green-600 bg-[#F2FEF7]" : ""
                } ${route.show ? "block" : "hidden"} py-8 px-6 flex items-center gap-4 text-[#666666] cursor-pointer text-base font-medium hover:bg-[#E9F5EC]`}
              onClick={() => navigate(route.link)}
            >
              <div className="text-xl">{route.icon}</div>
              <p className={`${isActive ? "text-black  text-lg font-semibold" : ""}`}>
                {route.label}
              </p>
            </div>
          );
        })}
      </div>

      <div className="absolute left-0 bottom-0">
        <p className=" px-12 flex justify-start text-[#666666] cursor-pointer text-xl font-semibold">
          Settings
        </p>
        <p className="py-6 px-12 flex justify-start text-red-600 cursor-pointer text-xl font-semibold" onClick={logout}>
          Sign out
        </p>
      </div>
    </div>
  );
}
