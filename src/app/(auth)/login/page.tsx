"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { FiEye, FiEyeOff } from "react-icons/fi";
import img from "../../../assets/images/login-bg.jpg";

import { useForm } from "react-hook-form";
import { useLoginMutation } from "@/redux/api/authApi";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { loginSchema } from "@/schemas/register.schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppDispatch } from "@/redux/Hooks/hooks";
import { setToken, setUser } from "@/redux/features/authSlice";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const [loginUser, { isLoading }] = useLoginMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const dispatch = useAppDispatch();

  const onSubmit = async (data: any) => {
    try {
      const res = await loginUser(data).unwrap();

      console.log(res);

      dispatch(setToken(res.token));
      localStorage.setItem("token", res.token);
      dispatch(setUser(res.user));

      toast.success(res.message || "Login successful");

      // token save
      // if (res.token) {
      //   dispatch(setToken(res.token));
      //   localStorage.setItem("token", res.token);
      //   dispatch(setUser(res.user));
      // }

      router.push("/");
    } catch (err: any) {
      console.log(err);

      toast.error(err?.data?.message || "Login failed");
    }
  };

  return (
    <section className="min-h-screen bg-[#F8F9FA] flex items-center justify-center px-4 py-10">
      <div className="max-w-6xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl grid lg:grid-cols-2">
        {/* Left Side */}
        <div className="relative hidden lg:block">
          <Image src={img} fill alt="Travel" className="object-cover" />

          <div className="absolute inset-0 bg-black/50" />

          <div className="absolute inset-0 flex flex-col justify-center px-12 text-white">
            <p className="uppercase tracking-[5px] text-sm mb-4">
              Welcome Back
            </p>

            <h1 className="text-5xl font-bold leading-tight mb-6">
              Continue Your
              <span className="block bg-gradient-to-r from-[#2ECC71] to-[#F5C542] bg-clip-text text-transparent">
                Adventure
              </span>
            </h1>

            <p className="text-lg text-white/90">
              Sign in and manage your bookings, wishlist, and upcoming
              unforgettable experiences.
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="p-8 md:p-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Sign In</h2>

          <p className="text-gray-500 mb-8">
            Welcome back! Please enter your details.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email Address
              </label>

              <input
                type="email"
                placeholder="john@example.com"
                {...register("email")}
                className="w-full px-5 py-4 rounded-xl border border-gray-200 outline-none focus:border-[#2ECC71]"
              />

              <p className="text-red-500 text-sm mt-1">
                {errors.email?.message as string}
              </p>
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Password
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  {...register("password")}
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 outline-none focus:border-[#2ECC71]"
                />

                <button
                  type="button"
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                </button>
              </div>

              <p className="text-red-500 text-sm mt-1">
                {errors.password?.message as string}
              </p>
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-gray-600 text-sm">
                <input type="checkbox" className="accent-[#2ECC71]" />
                Remember me
              </label>

              <Link
                href="/forgot-password"
                className="text-sm font-medium text-[#2ECC71] hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-[#2ECC71] to-[#F5C542] text-black font-bold text-lg hover:scale-[1.02] transition"
            >
              {isLoading ? "Signing In..." : "Sign In"}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-[1px] bg-gray-200" />
            <span className="text-gray-400 text-sm">OR CONTINUE WITH</span>
            <div className="flex-1 h-[1px] bg-gray-200" />
          </div>

          {/* Social Buttons */}
          {/* <div className="grid grid-cols-2 gap-4">
            <button className="border border-gray-200 rounded-xl py-4 flex items-center justify-center gap-3 hover:border-[#2ECC71] transition">
              <FaGoogle className="text-red-500" />
              Google
            </button>

            <button className="border border-gray-200 rounded-xl py-4 flex items-center justify-center gap-3 hover:border-[#2ECC71] transition">
              <FaFacebookF className="text-blue-600" />
              Facebook
            </button>
          </div> */}

          {/* Footer */}
          <p className="text-center text-gray-500 mt-8">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="font-semibold text-[#2ECC71]">
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
