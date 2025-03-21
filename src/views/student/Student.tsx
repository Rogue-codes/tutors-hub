/* eslint-disable @typescript-eslint/no-explicit-any */
import { Modal, Tag, Form, Input, Select, Button, DatePicker } from "antd";
import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid"; // Import UUID
import HeaderTab from "../../components/HeaderTab";
import MyTable from "../../components/tables/Table";
import { useState, useEffect } from "react";
import { EyeOutlined } from "@ant-design/icons";

export default function Student() {
  const { Option } = Select;
  const [isModalOpen, setIsModalOpen] = useState(false);  
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [studentArray, setStudentArray] = useState<any[]>([]);
  const [studentObj, setStudentObj] = useState<any>(null);

  console.log("object", studentObj)

  const handleGetStudent = (id:string) => {
       const student = studentArray.find((student)=>student.id === id)
       setStudentObj(student)
       setIsViewModalOpen(true);
  }

  // Load data from localStorage or use default data
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("data") || "[]");
    setStudentArray(storedData);
  }, []);

  const showModal = () => {
    form.setFieldsValue({
      enrolledDate: dayjs(), // Set today's date as default
    });
    setIsModalOpen(true);
  };

  const addToLocalStorage = (values: any) => {
    const storedData = JSON.parse(localStorage.getItem("data") || "[]");
    const newStudent = {
      id: uuidv4(), // Generate a unique ID for each student
      ...values,
      enrolledDate: dayjs(values.enrolledDate).format("YYYY-MM-DD"), // Format date
      status: "Active",
    };

    const newArr = Array.isArray(storedData) ? [...storedData, newStudent] : [newStudent];

    localStorage.setItem("data", JSON.stringify(newArr));
    setStudentArray(newArr); // Update state in real-time
  };

  const handleOk = () => {
    form.validateFields()
      .then((values) => {
        console.log("Form Values:", values);
        setIsModalOpen(false);

        addToLocalStorage(values); // Save form data to localStorage
        form.resetFields();
      })
      .catch((error) => console.log("Validation Failed:", error));
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
  };

  const handleViewCancel = () => {
    setIsViewModalOpen(false);
  };

  const columns = [
    { title: "First Name", dataIndex: "firstName", key: "firstName" },
    { title: "Last Name", dataIndex: "lastName", key: "lastName" },
    { title: "Course", dataIndex: "course", key: "course" },
    { 
      title: "Enrolled Date", 
      dataIndex: "enrolledDate", 
      key: "enrolledDate",
      render: (date:any) => dayjs(date).format("MMMM D, YYYY") // Format for display
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status:any) => (
        <Tag color={status === "Active" ? "green" : "volcano"}>{status}</Tag>
      ),
    },
    {
      title: "Actions",
      key: "actions",
      render: (row:any) => (
        <EyeOutlined className="text-xl cursor-pointer" onClick={()=>{
          handleGetStudent(row.id)
        }
        } />
      ),
    },
  ];

  return (
    <div>
      <HeaderTab showModal={showModal} btnText="Add New students"/>

      <div className="w-full h-[700px] bg-white p-6 rounded-2xl mt-5">
        <MyTable columns={columns} data={studentArray} />
      </div>

      <Modal
        title="Student Registration"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Submit"
        cancelText="Close"
        footer={[
          <Button
            key="cancel"
            onClick={handleCancel}
            className="bg-gray-300 hover:bg-gray-400 text-black border-none"
          >
            Close
          </Button>,
          <Button
            key="submit"
            onClick={handleOk}
            className="!bg-green-400 hover:bg-green-500 !text-white border-none"
          >
            Submit
          </Button>,
        ]}
      >
        <Form form={form} layout="vertical" className="grid grid-cols-2 gap-4">
          <Form.Item
            label="First Name*"
            name="firstName"
            rules={[{ required: true, message: "Please enter first name" }]}
            className="custom-form-item"
          >
            <Input
              placeholder="Enter first name"
              className="!border-green-400 focus:border-green-500 focus:ring-green-500"
            />
          </Form.Item>

          <Form.Item
            label="Last Name*"
            name="lastName"
            rules={[{ required: true, message: "Please enter last name" }]}
          >
            <Input
              placeholder="Enter last name"
              className="!border-green-400 focus:border-green-500 focus:ring-green-500"
            />
          </Form.Item>

          <Form.Item
            label="Email*"
            name="email"
            rules={[
              { required: true, message: "Please enter email" },
              { type: "email", message: "Please enter a valid email" },
            ]}
          >
            <Input
              placeholder="Enter email"
              className="!border-green-400 focus:border-green-500 focus:ring-green-500"
            />
          </Form.Item>

          <Form.Item
            label="Date of Birth*"
            name="dob"
            rules={[{ required: true, message: "Please select date of birth" }]}
          >
            <DatePicker className="w-full !border-green-400 focus:border-green-500 focus:ring-green-500" />
          </Form.Item>

          <Form.Item
            label="Course*"
            name="course"
            rules={[{ required: true, message: "Please select a course" }]}
          >
            <Select
              placeholder="Select course"
              className="!border-green-400 focus:border-green-500 focus:ring-green-500"
            >
              <Option value="Computer Science">Computer Science</Option>
              <Option value="Cyber Security">Cyber Security</Option>
              <Option value="Medicine">Medicine</Option>
              <Option value="Engineering">Engineering</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Enrolled Date*"
            name="enrolledDate"
            rules={[{ required: true, message: "Please select enrolled date" }]}
          >
            <DatePicker className="w-full !border-green-400 focus:border-green-500 focus:ring-green-500" />
          </Form.Item>

          <Form.Item
            label="Address*"
            name="address"
            rules={[{ required: true, message: "Please enter address" }]}
          >
            <Input
              placeholder="Enter address"
              className="!border-green-400 focus:border-green-500 focus:ring-green-500"
            />
          </Form.Item>

          <Form.Item
            label="Phone Number"
            name="phone"
            rules={[{ pattern: /^[0-9]+$/, message: "Enter a valid phone number" }]}
          >
            <Input
              placeholder="Enter phone number"
              className="!border-green-400 focus:border-green-500 focus:ring-green-500"
            />
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        title="Student Details"
        open={isViewModalOpen}
        onCancel={handleViewCancel}
        footer={null}
      >
        {studentObj && (
          <div className="p-4 bg-gray-100 rounded-lg space-y-2">
            <p><strong>Name:</strong> {studentObj.firstName} {studentObj.lastName}</p>
            <p><strong>Email:</strong> {studentObj.email}</p>
            <p><strong>Date of Birth:</strong> {dayjs(studentObj.dob).format("MMMM D, YYYY")}</p>
            <p><strong>Course:</strong> {studentObj.course}</p>
            <p><strong>Enrolled Date:</strong> {dayjs(studentObj.enrolledDate).format("MMMM D, YYYY")}</p>
            <p><strong>Address:</strong> {studentObj.address}</p>
            <p><strong>Phone:</strong> {studentObj.phone}</p>
            <p><strong>Status:</strong> <Tag color={studentObj.status === "Active" ? "green" : "volcano"}>{studentObj.status}</Tag></p>
          </div>
        )}
      </Modal>

    </div>
  );
}
