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

export interface RestaurantCardType {
  _id: string;
  name: string;
  main_image: string;
  slug: string;
  cuisine_id: CuisineType;
  location_id: LocationType;
  price: PRICE;
}
