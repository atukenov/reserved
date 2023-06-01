import React from "react";

export enum Roles {
  Admin = "admin",
  User = "user",
  God = "god",
  Moderator = "moderator",
}

export enum Status {
  Confirmed = "confirmed",
  Pending = "pending",
  Cancelled = "cancelled",
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

export interface alertProps {
  alertType: "idle" | "error" | "warning" | "success" | "info";
  msg: string | null;
}

interface State extends Pagination {
  loading: boolean;
}

interface Pagination {
  totalItem?: number;
  pageSize?: number;
  page?: number;
  pages?: number;
}

// Data types
export interface User {
  _id: string;
  username: string;
  email: string;
  role: Roles;
  phoneNumber: string;
  adminRestaurantId?: string;
  reservationHistory?: string[];
}

export interface Authorization {
  username?: string;
  password?: string;
  email?: string;
}

export interface Restaurant {
  _id: string;
  restaurantName: string;
  description: string;
  location: string;
  contactDetails: {
    phoneNumber: string;
    email: string;
  };
  hoursOfOperation?: string;
  type: string;
  menu?: string[];
  tableCapacity: number;
  tags?: string[];
  images?: [{ url: string; alt: string }];
  tables?: [{ tableNumber: string; times: string[] }];
}

export interface Menu {
  _id: string;
  restaurantId: string;
  itemName: string;
  description: string;
  price: string;
  ingredients?: string[];
  image?: {
    url: string;
    alt: string;
  };
}

export interface Reservation {
  _id: string;
  restaurantId: string;
  tableId?: string;
  reservationDate: string;
  reservationTime: string;
  partySize: number;
  specialRequest: string;
  status?: Status;
  guest?: {
    name: string;
    phoneNumber: string;
  };
}

// States
export interface RestaurantState extends State {
  restaurants: Restaurant[];
  restaurant?: Restaurant | null;
}

export interface ReservationState extends State {
  reservations?: Reservation[];
  reservation?: Reservation | null;
}

export interface UserState extends State {
  user: User | null;
  users?: User[];
}

// Component Props

export interface StepItem {
  icon: React.ReactNode;
  title: string;
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
