export enum PRICE {
  CHEAP = "CHEAP",
  REGULAR = "REGULAR",
  EXPENSIVE = "EXPENSIVE",
}

export interface LocationType {
  _id: string;
  name: string;
}

export interface CuisineType {
  _id: string;
  name: string;
}

export interface RestaurantType {
  _id: string;
  name: string;
  main_image: string;
  images: string[];
  description: string;
  open_time: string;
  close_time: string;
  slug: string;
  price: PRICE;
  location_id: LocationType;
  cuisine_id: CuisineType;
}

export interface UserType {
  _id: string;
  firstName: string;
  lastName: string;
  city: string;
  password: string;
  email: string;
  phone: string;
}

export interface ReviewType {
  _id: string;
  firstName: string;
  lastName: string;
  text: string;
  rating: number;
  restaurant: RestaurantType;
  user: UserType;
}

export interface RestaurantCardType {
  _id: string;
  name: string;
  main_image: string;
  slug: string;
  cuisine_id: CuisineType;
  location_id: LocationType;
  price: PRICE;
  reviews: ReviewType[];
}

export interface ItemType {
  _id: string;
  name: string;
  price: string;
  description: string;
  restaurant_id: string;
}
