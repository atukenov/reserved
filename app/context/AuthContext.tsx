"use client";

import { UserType } from "@/utils/types";
import axios from "axios";
import { getCookie } from "cookies-next";
import React, { ReactNode, useState, createContext, useEffect } from "react";

interface State {
  loading: boolean;
  error: string | null;
  data: UserType | null;
}

interface AuthState extends State {
  setAuthState: React.Dispatch<React.SetStateAction<State>>;
}

export const AuthenticationContext = createContext<AuthState>({
  loading: false,
  error: null,
  data: null,
  setAuthState: () => {},
});

const AuthContext = ({ children }: { children: ReactNode }) => {
  const [authState, setAuthState] = useState<State>({
    loading: true,
    data: null,
    error: null,
  });

  useEffect(() => {
    const fetchUser = async () => {
      setAuthState({
        data: null,
        error: null,
        loading: true,
      });
      try {
        const jwt = getCookie("jwt");
        if (!jwt) {
          return setAuthState({
            data: null,
            error: null,
            loading: false,
          });
        }

        const response = await axios.get("http://localhost:3000/api/auth/me", {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        });

        axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
        setAuthState({
          data: response.data,
          error: null,
          loading: false,
        });
      } catch (error: any) {
        setAuthState({
          data: null,
          error: error.response.data.errorMessage,
          loading: false,
        });
      }
    };
    fetchUser();
  }, []);

  return (
    <AuthenticationContext.Provider value={{ ...authState, setAuthState }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthContext;
