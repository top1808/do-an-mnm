import React, { useState } from "react";
import { toast } from "react-toastify";

const users = [{
    username: "top123",
    password: "123123"
}]

const Login = () => {
    const [data, setData] = useState({ username: "", password: ""})

    const onChange = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (users.find(user => user.username === data.username && user.password === data.password)) {
            toast.success("Đăng nhập thành công");
        } else {
            toast.error("Sai thông tin.")
        }
    }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">
          <span className="bg-gradient-to-r text-transparent from-blue-500 to-purple-500 bg-clip-text">
            LogIn
          </span>
        </h2>
        <form onSubmit={onSubmit}>
          <div className="mb-6">
            <label
              htmlFor="username"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              <i className="fas fa-envelope mr-2"></i>Username
            </label>
            <div>
              <input
                id="username"
                type="username"
                name="username"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your username"
                onChange={onChange}
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              <i className="fas fa-lock mr-2"></i>Password
            </label>
            <div>
              <input
                id="password"
                type="password"
                name="password"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your password"
                onChange={onChange}
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            >
              LogIn
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
