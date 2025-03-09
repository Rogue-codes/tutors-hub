import { Outlet } from "react-router-dom";
import DashboardLayout from "./DashboardLayout";

export default function AppOutlet() {
  return (
    <div>
      <DashboardLayout>
        <Outlet />
      </DashboardLayout>
    </div>
  );
}
