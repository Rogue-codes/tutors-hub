/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { pepps } from "../../assets"; // Ensure this path is correct
import { useDispatch } from "react-redux";
import { loginUser } from "../../config/authSlice";
import { enqueueSnackbar } from "notistack";
import { student } from "../../utils/data";

export default function Login() {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: ""
  });

  const dispatch = useDispatch();
  const validEmails = [
    "nnamdidanielosuji@gmail.com",
    "josephagboola@gmail.com",
    "tavershima@gmail.com"
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault(); // Corrected spelling from "preventDeafult" to "preventDefault"
    
    if (!validEmails.includes(userDetails.email) || userDetails.password !== "Simple@123") {
      enqueueSnackbar("Invalid Credentials", {
        variant: "error"
      });
      return; // Return early if credentials are invalid
    }

    // Dispatch login action (uncomment and update as needed)
    dispatch(loginUser(student));
    enqueueSnackbar("Login Successful", {
      variant: "success"
    });
  };

  return (
    <div className="w-full h-screen">
      <div className="h-[40%] relative bg-red-900">
        <img src={pepps} className="w-full h-full object-cover" alt="Background" />
        <div className="w-full h-full flex justify-center items-center absolute left-0 top-0 bg-[#333333a8]">
          <p className="text-7xl w-[40%] text-center text-white font-extrabold leading-20">
            Sign in form for Executive Short Course.
          </p>
        </div>
      </div>

      <div className="h-[60%] w-full bg-white flex justify-center items-center">
        <div className="bg-white p-8 rounded-2xl shadow-md w-96">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label
                htmlFor="emailOrPhone"
                className="block text-sm font-medium text-gray-700"
              >
                Email or Phone number
              </label>
              <input
                type="text"
                value={userDetails.email}
                onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
                id="emailOrPhone"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                value={userDetails.password}
                onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })}
                id="password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              />
            </div>
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="keepLoggedIn"
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
              />
              <label
                htmlFor="keepLoggedIn"
                className="ml-2 block text-sm text-gray-700"
              >
                Keep me logged in
              </label>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 text-white bg-green-600 hover:bg-green-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Login
            </button>
          </form>
          <div className="mt-4 text-center text-sm text-gray-500">
            <a href="#" className="text-green-600 hover:underline">
              Reset Password
            </a>{" "}
            |{" "}
            <a href="#" className="text-green-600 hover:underline">
              Register
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
