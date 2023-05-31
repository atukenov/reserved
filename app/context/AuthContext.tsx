"use client";

import { UserType } from "@/utils/types";
import React, { ReactNode, useState, createContext } from "react";

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
    loading: false,
    data: null,
    error: null,
  });
  return (
    <AuthenticationContext.Provider value={{ ...authState, setAuthState }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthContext;
