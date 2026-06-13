"use client";

import Link from "next/link";
import Image from "next/image";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useState } from "react";
import img from "@/assets/images/login-bg.jpg";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "@/schemas/register.schema";
import { useRegisterMutation } from "@/redux/api/authApi";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/Hooks/hooks";
import { setToken, setUser } from "@/redux/features/authSlice";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const [registerUser, { isLoading }] = useRegisterMutation();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = async (data: any) => {
    try {
      const res = await registerUser(data).unwrap();
      console.log(res);

      dispatch(setToken(res.token));
      localStorage.setItem("token", res.token);
      dispatch(setUser(res.data));

      toast.success(res.message || "Account created!");

      // save token
      // if (res.token) {
      //   localStorage.setItem("token", res.token);
      // }

      reset();

      router.push("/"); // redirect after register
    } catch (err: any) {
      toast.error(err?.data?.message || "Something went wrong");
    }
  };
  return (
    <section className="min-h-screen bg-[#F8F9FA] flex items-center justify-center px-4 py-10">
      <div className="max-w-6xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl grid lg:grid-cols-2">
        {/* Left */}
        <div className="relative hidden lg:block">
          <Image src={img} fill alt="Travel" className="object-cover" />
          <div className="absolute inset-0 bg-black/45" />

          <div className="absolute inset-0 flex flex-col justify-center px-12 text-white">
            <p className="uppercase tracking-[6px] text-sm mb-4">
              Start Your Journey
            </p>

            <h1 className="text-5xl font-bold leading-tight mb-6">
              Explore The World
              <span className="block bg-gradient-to-r from-[#2ECC71] to-[#F5C542] bg-clip-text text-transparent">
                With Us
              </span>
            </h1>

            <p className="text-white/90 text-lg">
              Discover unforgettable adventures, hidden gems and premium
              experiences with trusted local guides.
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="p-8 md:p-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            Create Account
          </h2>

          <p className="text-gray-500 mb-8">
            Join thousands of travelers worldwide.
          </p>

          {/* FORM */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* NAME */}
            <div>
              <label className="font-medium text-gray-700 mb-2 block text-[15px]">
                Full Name
              </label>

              <input
                type="text"
                placeholder="John Doe"
                {...register("name")}
                className="w-full border border-gray-200 rounded-xl px-5 py-3 outline-none focus:border-[#2ECC71]"
              />
              <p className="text-red-500 text-sm">
                {errors.name?.message as string}
              </p>
            </div>

            {/* EMAIL */}
            <div>
              <label className="font-medium text-gray-700 mb-2 block text-[15px]">
                Email Address
              </label>

              <input
                type="email"
                placeholder="john@gmail.com"
                {...register("email")}
                className="w-full border border-gray-200 rounded-xl px-5 py-3 outline-none focus:border-[#2ECC71]"
              />
              <p className="text-red-500 text-sm">
                {errors.email?.message as string}
              </p>
            </div>

            {/* PASSWORD */}
            <div>
              <label className="font-medium text-gray-700 mb-2 block text-[15px]">
                Password
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  {...register("password")}
                  className="w-full border border-gray-200 rounded-xl px-5 py-3 outline-none focus:border-[#2ECC71]"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                </button>
              </div>

              <p className="text-red-500 text-sm">
                {errors.password?.message as string}
              </p>
            </div>

            {/* CHECKBOX */}
            <label className="flex items-start gap-3">
              <input type="checkbox" className="mt-1 accent-[#2ECC71]" />
              <span className="text-sm text-gray-600">
                I agree to Terms & Conditions
              </span>
            </label>

            {/* BUTTON */}
            <button
              type="submit"
              onClick={() => {
                console.log("clicked");
              }}
              disabled={isLoading}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#2ECC71] to-[#F5C542] text-black font-bold hover:scale-[1.02] transition"
            >
              {isLoading ? "Creating..." : "Create Account"}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-[1px] bg-gray-200" />
            <span className="text-gray-400 text-sm">OR CONTINUE WITH</span>
            <div className="flex-1 h-[1px] bg-gray-200" />
          </div>

          {/* Social */}
          <div className="grid grid-cols-2 gap-4">
            <button className="border rounded-xl py-3 flex items-center justify-center gap-3">
              <FaGoogle className="text-red-500" />
              Google
            </button>

            <button className="border rounded-xl py-3 flex items-center justify-center gap-3">
              <FaFacebookF className="text-blue-600" />
              Facebook
            </button>
          </div>

          <p className="text-center text-gray-500 mt-8">
            Already have an account?{" "}
            <Link href="/login" className="font-semibold text-[#2ECC71]">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Signup;
