import { logo } from "../../assets";

export default function Sidebar() {
  const routes = ["Dashboard", "Reports", "Students", "Meetings"];
  return (
    <div className="w-[17vw]  bg-white h-screen fixed left-0 top-0 z-20 py-12">
      <div className="w-full flex justify-center items-center">
        <img src={logo} alt="" />
      </div>

      <div className="mt-12">
        {routes.map((route) => (
          <div className=" py-6 px-12 flex justify-start text-[#666666] text-2xl font-semibold">{route}</div>
        ))}
      </div>


      <div className="absolute left-0 bottom-0">
        <p className="py-6 px-12 flex justify-start text-[#666666] text-2xl font-semibold">Settings</p>
        <p className="py-6 px-12 flex justify-start text-red-600 text-2xl font-semibold">Sign out</p>
      </div>
    </div>
  );
}
