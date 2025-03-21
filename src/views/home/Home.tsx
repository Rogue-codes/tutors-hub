/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaReceipt } from "react-icons/fa";
import Card from "../../components/cards/Card";
import Paper from "../../components/cards/Paper";
import { Icons } from "../../components/icons";
import { cicle, dd, njoku } from "../../assets";
import MyTable from "../../components/tables/Table";
import { Tag } from "antd";
import { useEffect, useState } from "react";

export default function Home() {
  const columns = [
    { title: "firstName", dataIndex: "firstName", key: "firstName" },
    { title: "lastName", dataIndex: "lastName", key: "lastName" },
    { title: "Course", dataIndex: "course", key: "course" },
    { title: "Enrolled Date", dataIndex: "enrolledDate", key: "enrolledDate" },
    {
      title: "Grade",
      dataIndex: "grade",
      key: "grade",
      render: () => (
        <button className="bg-green-400 px-5 py-1 text-white rounded-lg">
          View
        </button>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status:any) => (
        <Tag color={status === "Completed" ? "green" : "volcano"}>{status}</Tag>
      ),
    },
  ];
    const [studentArray, setStudentArray] = useState<any[]>([]);
  
    // Load data from localStorage or use default data
    useEffect(() => {
      const storedData = JSON.parse(localStorage.getItem("data") || "[]");
      setStudentArray(storedData);
    }, []);

  return (
    <div className="mt-12">
      <div className="flex justify-between items-center">
        <Card count={100} text="Total Students" position={1} icon={<Icons.grad />} />
        <Card count={2} text="Courses" position={2} icon={<Icons.book />} />
        <Card count={20} text="Results" position={3} icon={<FaReceipt size={20} color="blue" />} />
      </div>

      <div className="w-full p-6 h-[443px] bg-white rounded-3xl mt-6">
        <MyTable columns={columns} data={studentArray}/>
      </div>

      <div className="flex mt-8 pb-12 justify-between items-center">
        <Paper title="Grade Preformance" img={cicle} />
        <Paper title="Profile" img={njoku} desc="Njoku David" />

        <div className="w-[48%] flex  rounded-3xl bg-[#12A454] h-[288px]">
          <div className="w-1/2 h-full p-6 pt-16">
            <h1 className="text-4xl text-white font-black">
              Welcome back,
              Mr David
            </h1>
            <p className="text-md py-4 text-white">The last class has ended
              successfully
            </p>

              <button className="py-2 px-12 rounded-[10px] border border-white text-white">Resume course</button>
          </div>
          <div className="w-1/2 h-full">
          <img className="w-full h-full object-cover" src={dd}/>
          </div>
        </div>
      </div>
    </div>
  );
}
