import React from "react";

export enum roles {
  Admin = "admin",
  User = "user",
  God = "god",
  Moderator = "moderator",
}

export interface alertProps {
  alertType: "idle" | "error" | "warning" | "success" | "info";
  msg: string | null;
}

export const device = {
  mobile: `only screen and (min-width: 600px)`,
  tablet: `only screen and (min-width: 768px)`,
  laptop: `only screen and (min-width: 992px)`,
  desktop: `only screen and (min-width: 1200px)`,
};

export interface Error {
  success: boolean;
  status: number;
  message: string;
  stack: string;
}

//TODO update types.

// Old props
export interface userProps {
  _id: string;
  name: string;
  email: string;
  username: string;
  avatar: string;
  createdAt: string;
  birthday: string;
  gender: string;
  mobile: string;
  roles: string[];
  token: string;
}

export interface AuthProps {
  token: string | null;
  isAuth: boolean | null;
  isAdmin: boolean | null;
  loading: boolean;
  user: userProps | null;
}

export interface MessageProps {
  message: string;
  sender: boolean;
}

export interface ChatProps {
  allMessage: MessageProps[];
  receivedMessage: string | null;
  typing: boolean;
}

export interface UserProps {
  userData: userProps[] | null;
  loading: boolean;
  user: userProps | null;
}

export interface LogoProps {
  _id: string;
  title: string | null;
  description: string | null;
  createdAt: Date | null;
  modifiedAt: Date | null;
  userId: string | null;
  comment: string | null;
}

export interface InteriorProps {
  title: string;
  description: string;
  createdAt: Date;
  modifiedAt: Date;
  userId: string;
  comment: string;
}

export interface DetailsProps {
  _id: string;
  date: Date | null;
  status: number;
  projectId: String;
}

export interface PhotoProps {
  title: string;
  description: string;
  url: string;
  _id: string;
}

export interface StepProps {
  step: number;
  title: string;
  description: string;
}

export interface ProjectProps {
  logoData: LogoProps[];
  interiorData: InteriorProps[];
  projectDetails: DetailsProps[];
  steps: StepProps[];
  currentStep: number;
  loading: boolean;
}

//------------------------------------------------

export interface SiteThemeProps {
  sider?: string;
  header?: string;
  content?: string;
  footer?: string;
  logo?: string;
  children: React.ReactNode;
}

export interface StyleProps {
  border?: boolean;
  backgroundImage?: string;
  height?: number;
  scale?: number;
  children: React.ReactNode;
}

export interface ContainerProps {
  border?: boolean;
  backgroundImage?: string;
  isHeight?: boolean;
  children: React.ReactNode;
  scale?: number;
}

export interface ButtonProps {
  color?: string;
  fixedWidth?: boolean;
  name?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export interface ShadowProps {
  children: React.ReactNode;
}

export interface InputProps {
  name?: string;
  label?: string;
  placeholder?: string;
  t?: any;
  validate?: {
    touched: boolean | undefined;
    errors: string | undefined;
  };
  type?: string;
  value?: string;
  onChange?: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}

export interface validateProps {
  name: string;
  message: string;
  email: string;
}
