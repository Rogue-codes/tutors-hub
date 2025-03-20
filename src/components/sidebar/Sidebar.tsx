/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaRegCalendarAlt } from "react-icons/fa";
import { logo } from "../../assets";
import { FaChildren } from "react-icons/fa6";
import { RxDashboard } from "react-icons/rx";
import { paths } from "../../routes/paths";
import { useLocation, useNavigate } from "react-router-dom";

interface IRoutes {
  label: string;
  icon: any;
  link:string
}
export default function Sidebar() {
  const navigate = useNavigate()
  const routes: IRoutes[] = [
    {
      label: "Dashboard",
      icon: <RxDashboard />,
      link: paths.dashboard
    },
    {
      label: "Students",
      icon: <FaChildren />,
      link:paths.students
    },
    {
      label: "Meetings",
      icon: <FaRegCalendarAlt />,
      link: paths.meetings
    },
    {
      label: "Tutors",
      icon: <FaChildren />,
      link: paths.tutors
    },
  ];

  const location = useLocation()

  const {pathname} = location

  console.log("pathname", pathname)
  return (
    <div className="w-[17vw]  bg-white h-screen fixed left-0 top-0 z-20 py-12">
      <div className="w-full flex justify-center items-center">
        <img src={logo} alt="" />
      </div>

      <div className="mt-12">
        {routes.map((route) => (
          <div className={`${pathname.split('/')[1].toLowerCase() ===route.label.toLowerCase() ? "border-l-4 border-green-600 bg-[#F2FEF7]" : ""} py-6 px-12 flex justify-start items-center gap-5 text-[#666666] cursor-pointer text-xl font-semibold`} onClick={()=>navigate(route.link)}>
            <div>{route.icon}</div>
            <p>{route.label}</p>
          </div>
        ))}
      </div>

      <div className="absolute left-0 bottom-0">
        <p className=" px-12 flex justify-start text-[#666666] cursor-pointer text-xl font-semibold">
          Settings
        </p>
        <p className="py-6 px-12 flex justify-start text-red-600 cursor-pointer text-xl font-semibold">
          Sign out
        </p>
      </div>
    </div>
  );
}
