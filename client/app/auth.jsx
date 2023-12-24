/**
 * Title: Write a program using JavaScript on Auth
 * Author: Hasibul Islam
 * Portfolio: https://devhasibulislam.vercel.app
 * Linkedin: https://linkedin.com/in/devhasibulislam
 * GitHub: https://github.com/devhasibulislam
 * Facebook: https://facebook.com/devhasibulislam
 * Instagram: https://instagram.com/devhasibulislam
 * Twitter: https://twitter.com/devhasibulislam
 * Pinterest: https://pinterest.com/devhasibulislam
 * WhatsApp: https://wa.me/8801906315901
 * Telegram: devhasibulislam
 * Date: 24, December 2023
 */

"use client";

import { addAuth } from "@/features/user/userSlice";
import { usePersistLoginQuery } from "@/services/auth/authApi";
import React, { useEffect, useMemo } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";

const Auth = ({ children }) => {
  const dispatch = useDispatch();
  const { data, isLoading, isError } = usePersistLoginQuery();
  const user = useMemo(() => data?.data || {}, [data]);

  useEffect(() => {
    if (user) {
      dispatch(addAuth(user));
    }

    if (isLoading) {
      toast.loading("Loading...", { id: "auth" });
    }

    if (isError) {
      toast.error("Something went wrong", { id: "auth" });
    }
  }, [user, dispatch, isError, isLoading]);

  return <>{children}</>;
};

export default Auth;
