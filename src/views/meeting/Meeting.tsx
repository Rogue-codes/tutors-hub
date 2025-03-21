/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'
import HeaderTab from '../../components/HeaderTab'
import { DatePicker, Form, Input, Modal, Select, Tag } from 'antd';
import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid"; // Import UUID
import MyTable from '../../components/tables/Table';
import TextArea from 'antd/es/input/TextArea';
import { EyeOutlined } from "@ant-design/icons";

export default function Meeting() {
  const { Option } = Select;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [meetingArray, setMeetingArray] = useState<any[]>([]);
  const [meetingObj, setMeetingObj] = useState<any>(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);

  console.log("object", meetingObj)

  const handleGetMeeting = (id:string) => {
       const meeting = meetingArray.find((meeting)=>meeting.id === id)
       setMeetingObj(meeting)
       setIsViewModalOpen(true);
  }

  // Load data from localStorage or use default data
  useEffect(() => {
    const meetingArray_ = JSON.parse(localStorage.getItem("meeting") || "[]");
    setMeetingArray(meetingArray_);
  }, []);

  const studentArray = JSON.parse(localStorage.getItem("data") || "[]");

  console.log("object",studentArray)
  const showModal = () => {
    form.setFieldsValue({
      enrolledDate: dayjs(), // Set today's date as default
    });
    setIsModalOpen(true);
  };

  const addToLocalStorage = (values: any) => {
    const storedData = JSON.parse(localStorage.getItem("meeting") || "[]"); // Ensure the key is "meeting"
    const newMeeting = {
      id: uuidv4(), // Generate a unique ID for each meeting
      ...values,
      fixedDate: dayjs(values.enrolledDate).format("YYYY-MM-DD"),
      status: "Not Started",
    };
  
    const newArr = [...storedData, newMeeting]; // Append new meeting instead of replacing
  
    localStorage.setItem("meeting", JSON.stringify(newArr)); // Store updated array
    setMeetingArray(newArr); // Update state
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
    { title: "topic", dataIndex: "topic", key: "topic" },
    { title: "Student", dataIndex: "student", key: "student" },
    {
      title: "Fixed Date",
      dataIndex: "enrolledDate",
      key: "fixedDate",
      render: (date:any) => dayjs(date).format("MMMM D, YYYY") // Format for display
    },
    {
      title: "Meeting Link",
      dataIndex: "meetingLink",
      key: "meetingLink",
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
    {
      title: "Actions",
      key: "actions",
      render: (row:any) => (
        <EyeOutlined className="text-xl cursor-pointer" onClick={()=>{
          handleGetMeeting(row.id)
        }
        } />
      ),
    },
  ];
  return (
    <div>
      <div>
        <HeaderTab showModal={showModal} btnText='Add New Meeting' />

        <div className="w-full h-[700px] bg-white p-6 rounded-2xl mt-5">
          <MyTable columns={columns} data={meetingArray} />
        </div>
      </div>

      <Modal
        title="Student Registration"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Submit"
        cancelText="Close"
      >
        <Form form={form} layout="vertical" className="grid grid-cols-2 gap-4">
          <Form.Item
            label="Topic*"
            name="topic"
            rules={[{ required: true, message: "Please enter topic" }]}
          >
            <Input placeholder="Enter topic" />
          </Form.Item>

          <Form.Item
            label="Student*"
            name="student"
            rules={[{ required: true, message: "Please select a student" }]}
          >
            <Select placeholder="Select student">
              {studentArray.map((student:any) => {
                const fullName = student.firstName + " " + student.lastName
                return (
                  <Option key={student.id} value={fullName}>
                    {fullName} - {student.course}
                  </Option>)
              }
              )}
            </Select>
          </Form.Item>

          <Form.Item
            label="Meeting Link*"
            name="meetingLink"
            rules={[{ required: true, message: "Please enter meeting link" }]}
          >
            <Input placeholder="Enter meeting link" />
          </Form.Item>

          <Form.Item
            label="Fixed Date*"
            name="fixedDate"
            rules={[{ required: true, message: "Please select meeting date" }]}
          >
            <DatePicker className="w-full" />
          </Form.Item>

          {/* Make Description field span the entire row */}
          <Form.Item
            label="Description*"
            name="description"
            rules={[{ required: true, message: "Please enter description" }]}
            className="col-span-2"
          >
            <TextArea placeholder="Description" rows={4} />
          </Form.Item>
        </Form>

      </Modal>

      <Modal
              title="Student Details"
              open={isViewModalOpen}
              onCancel={handleViewCancel}
              footer={null}
            >
              {meetingObj && (
                <div className="p-4 bg-gray-100 rounded-lg space-y-2">
                  <p><strong>Topic:</strong> {meetingObj.topic}</p>
                  <p><strong>Student:</strong> {meetingObj.student}</p>
                  <p><strong>Fixed Date:</strong> {dayjs(meetingObj.fixedDate).format("MMMM D, YYYY")}</p>
                  <p><strong>Meeting Link:</strong> {meetingObj.meetingLink}</p>
                  <p><strong>Description:</strong> {meetingObj.description}</p>
                  <p><strong>Status:</strong> <Tag color={meetingObj.status === "Active" ? "green" : "volcano"}>{meetingObj.status}</Tag></p>
                </div>
              )}
            </Modal>
    </div>
  )
}
