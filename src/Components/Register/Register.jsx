import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { User, Mail, Lock } from "lucide-react";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const Register = ({ onToggle }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Register Data:", data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl w-full max-w-md transition-all">
        <h2 className="text-2xl md:text-3xl font-extrabold text-center text-gray-800 mb-6">Register</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="relative">
            <User className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              {...register("name")}
              className="w-full px-10 py-3 border rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Enter your name"
            />
            <p className="text-red-500 text-sm mt-1">{errors.name?.message}</p>
          </div>
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-gray-400" />
            <input
              type="email"
              {...register("email")}
              className="w-full px-10 py-3 border rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Enter your email"
            />
            <p className="text-red-500 text-sm mt-1">{errors.email?.message}</p>
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-3 text-gray-400" />
            <input
              type="password"
              {...register("password")}
              className="w-full px-10 py-3 border rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Enter your password"
            />
            <p className="text-red-500 text-sm mt-1">{errors.password?.message}</p>
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-3 text-gray-400" />
            <input
              type="password"
              {...register("confirmPassword")}
              className="w-full px-10 py-3 border rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Confirm your password"
            />
            <p className="text-red-500 text-sm mt-1">{errors.confirmPassword?.message}</p>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 rounded-xl font-bold hover:opacity-90 transition-all"
          >
            Register
          </button>
        </form>
        <p className="text-center mt-4 text-gray-600 text-sm md:text-base">
          Already have an account?{" "}
          <button onClick={onToggle} className="text-blue-500 hover:underline">
            Log In
          </button>
        </p>
      </div>
    </div>
  );
};

export default Register;
