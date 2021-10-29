export type HotelType = {
  id: number;
  name: string;
  stars: number;
  userRating: number;
  location: {
    address: string;
    city: string;
    latitude: number;
    longitude: number;
  };
  checkIn: {
    from: string;
    to: string;
  };
  checkOut: {
    from: string;
    to: string;
  };
  contact: {
    phoneNumber: string;
    email: string;
  };
  gallery: string[];
  price: number;
  currency: string;
};
