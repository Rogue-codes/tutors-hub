import { v4 as uuidv4 } from "uuid"; // Import UUID
import { IStudent, ISuperAdmin, ITutor } from "../config/authSlice";

export const data = [
  {
    key: "1",
    firstName: "Chioma",
    lastName: "Martins",
    course: "Information Technology",
    enrolledDate: "25/02/25",
    status: "Ongoing",
  },
  {
    key: "2",
    firstName: "Njoku ",
    lastName:"David",
    course: "Cyber Security",
    enrolledDate: "25/02/25",
    status: "Completed",
  },
  {
    key: "3",
    firstName: "Blessing",
    lastName:"Emmanuel",
    course: "Computer Science",
    enrolledDate: "5/06/25",
    status: "Ongoing",
  },
];

export const student:IStudent  = {
  id: uuidv4(),
    first_name:"Nnamdi Daniel",
    last_name:"Osuji",
    email:"nnamdidanielosuji@gmail.com",
    department:"Computer Science",
    is_active:true,
    role:"STUDENT",
    phone:'090988567586'
}

export const tutor: ITutor = {
  id: uuidv4(),
  first_name: "Joseph",
  last_name: "Agboola",
  email: "josephagboola@gmail.com",
  department: "Computer Science",
  is_active: true,
  role: "TUTOR",
  phone: "+1234567890"
};

export const superAdmin: ISuperAdmin = {
  id: "admin456",
  first_name: "Tavershima",
  last_name: "Smith",
  email: "tavershima@gmail.com",
  role: "SUPER_ADMIN"
};