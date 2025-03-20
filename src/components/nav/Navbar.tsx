import { useLocation } from "react-router-dom";
import { profile } from "../../assets";

export default function Navbar() {
  const location = useLocation()
  const { pathname } = location
  return (
    <div className="w-full h-12 flex justify-between items-center py-12">
      <p className="text-xl text-[#0D0D0D] font-black">{pathname === "/" ? "DASHBOARD" : pathname.split("/")[1].toUpperCase()}</p>
      <div className="w-[16%] bg-white flex justify-start items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-[#ffff]">
          <img src={profile} className="w-full h-full object-cover" alt="" />
        </div>
        <p>Njoku David</p>
      </div>
    </div>
  )
}
