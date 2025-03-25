import { useLocation } from "react-router-dom";
import { profile } from "../../assets";
import { Modal, Tag } from "antd";
import { useState } from "react";

export default function Navbar() {
  const location = useLocation()
  const { pathname } = location


  const user = JSON.parse(localStorage.getItem("user-tutor")!);

  const [showProfileModal, setShowProfileModal] = useState(false)
  const handleViewCancel = () => {
    setShowProfileModal(false);
  };

  return (
    <div className="w-full h-12 flex justify-between items-center py-12">
      <p className="text-xl text-[#0D0D0D] font-black">{pathname === "/" ? "DASHBOARD" : pathname.split("/")[1].toUpperCase()}</p>
      <div className="w-[16%] bg-white flex justify-start items-center gap-3 cursor-pointer" onClick={()=>setShowProfileModal(true)}>
        <div className="w-12 h-12 rounded-full bg-[#ffff]">
          <img src={profile} className="w-full h-full object-cover" alt="" />
        </div>
        <p>Njoku David</p>
      </div>




      <Modal
        title="Profile Details"
        open={showProfileModal}
        onCancel={handleViewCancel}
        footer={null}
      >
        {user && (
          <div className="p-4 bg-gray-100 rounded-lg space-y-2">
            <div className="w-[150px] h-[150px] bg-white mx-auto border border-gray-300 rounded-full"></div>
            <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Department:</strong> {user.department}</p>
            <p><strong>Role:</strong> {user.role}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Status:</strong> <Tag color={user.is_active ? "green" : "volcano"}>{user.is_active ? "Active" : "In-Active"}</Tag></p>
          </div>
        )}
      </Modal>
    </div>
  )
}
