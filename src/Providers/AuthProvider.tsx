"use client";

import { useEffect } from "react";
import { useAppDispatch } from "@/redux/Hooks/hooks";
import { setToken, setUser } from "@/redux/features/authSlice";
import { useGetMeQuery } from "@/redux/api/authApi";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useAppDispatch();

  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  // if token get only call
  const { data } = useGetMeQuery(undefined, {
    skip: !token,
  });

  // token redux এ save
  useEffect(() => {
    if (token) {
      dispatch(setToken(token));
    }
  }, [token, dispatch]);

  // user redux এ save
  useEffect(() => {
    if (data?.user) {
      dispatch(setUser(data.user));
    }
  }, [data, dispatch]);

  return <>{children}</>;
}

// "use client";

// import { useEffect } from "react";
// import { setToken } from "@/redux/features/authSlice";
// import { useGetMeQuery } from "@/redux/api/authApi";
// import { useAppDispatch } from "@/redux/Hooks/hooks";

// export default function AuthProvider({ children }) {
//   const dispatch = useAppDispatch();

//   const token =
//     typeof window !== "undefined" ? localStorage.getItem("token") : null;

//   const { data } = useGetMeQuery(undefined, {
//     skip: !token,
//   });

//   useEffect(() => {
//     if (token) {
//       dispatch(setToken(token));
//     }
//   }, [token, dispatch]);

//   return children;
// }
