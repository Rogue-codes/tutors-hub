import { Card, Progress, Table } from "antd";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";
import { CalendarOutlined, UserOutlined, TeamOutlined } from "@ant-design/icons";
import HeaderTab from "../../components/HeaderTab";

const data = [
  { name: "Week 1", lastMonth: 80, thisMonth: 90 },
  { name: "Week 2", lastMonth: 70, thisMonth: 85 },
  { name: "Week 3", lastMonth: 90, thisMonth: 95 },
  { name: "Week 4", lastMonth: 60, thisMonth: 75 },
];

const departmentData = [
  {
    key: "1",
    title: "Prof",
    name: "Chioma Martins",
    department: "Information Technology",
    teachers: 30,
  },
  {
    key: "2",
    title: "Prof",
    name: "Henshaw Martins",
    department: "Software Engineering",
    teachers: 30,
  },
  {
    key: "3",
    title: "Prof",
    name: "Kizito Perple",
    department: "Computer Science",
    teachers: 30,
  },
];

const columns = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Department",
    dataIndex: "department",
    key: "department",
  },
  {
    title: "No. of Teachers",
    dataIndex: "teachers",
    key: "teachers",
  },
];

const studentCount = JSON.parse(localStorage.getItem('student-data')!)
const TutorsCount = JSON.parse(localStorage.getItem('tutor-data')!)


console.log("object: ===>", {
  studentCount,TutorsCount
})

const Analytics = () => {
  return (
    <div className="p-6 bg-gradient-to-b from-green-50 to-white min-h-screen">
      {/* Header */}
      <HeaderTab btnText=""  hide={true}/>

      {/* Overview Cards */}
      <div className="grid mt-5 grid-cols-3 gap-6 mb-6">
        <Card>
          <div className="flex items-center gap-4">
            <UserOutlined className="text-red-500 text-2xl" />
            <div>
              <h2 className="text-3xl font-bold">{studentCount?.length || 0}</h2>
              <p className="text-gray-500">Total Students</p>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex items-center gap-4">
            <TeamOutlined className="text-blue-500 text-2xl" />
            <div>
              <h2 className="text-3xl font-bold">{TutorsCount.length || 0}</h2>
              <p className="text-gray-500">Total Tutors</p>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex items-center gap-4">
            <CalendarOutlined className="text-red-500 text-2xl" />
            <div>
              <h2 className="text-3xl font-bold">3</h2>
              <p className="text-gray-500">Total Dept Heads</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Department Heads and Upcoming Events */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        {/* Department Heads List */}
        <Card title="Department Heads List">
          <Table dataSource={departmentData} columns={columns} pagination={false} />
        </Card>

        {/* Upcoming Events */}
        <Card title="Upcoming Events">
          <ul className="space-y-4">
            <li className="flex items-center gap-4">
              <div className="w-10 h-10 bg-blue-100 text-blue-500 rounded-full flex items-center justify-center">
                8
              </div>
              <div>
                <h3 className="font-semibold">Introduction to Information Tech</h3>
                <p className="text-sm text-gray-500">8AM - 9AM | Google Classroom</p>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <div className="w-10 h-10 bg-red-100 text-red-500 rounded-full flex items-center justify-center">
                13
              </div>
              <div>
                <h3 className="font-semibold">CIT 302 Test</h3>
                <p className="text-sm text-gray-500">8AM - 9AM | Google Classroom</p>
              </div>
            </li>
          </ul>
        </Card>
      </div>

      {/* Statistics Section */}
      <div className="grid grid-cols-2 gap-6">
        {/* Meeting and Tutor Statistics */}
        <Card title="Meeting and Tutor Statistics">
          <LineChart width={400} height={200} data={data}>
            <Line type="monotone" dataKey="lastMonth" stroke="#8884d8" />
            <Line type="monotone" dataKey="thisMonth" stroke="#82ca9d" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </Card>

        {/* Activity Check */}
        <Card title="Statistics - Activity Check">
          <div className="flex flex-col items-center gap-4">
            <div className="relative w-36 h-36">
              <Progress type="circle" percent={65} />
            </div>
            <p className="text-center text-gray-500">Total Tutors: 500</p>
            <div className="text-sm text-gray-500">
              <p>Very Active: 65%</p>
              <p>Less Active: 35%</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;
