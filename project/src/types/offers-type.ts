export type LocationType = {
  latitude: number,
  longitude: number,
  zoom: number,
};

export type HostType = {
  avatarUrl: string,
  id: number,
  isPro: boolean,
  name: string
};

export type CityType = {
  location: LocationType,
  name: string
};

export type OfferType =  {
  bedrooms: number,
  city: CityType,
  description: string,
  goods: string[],
  host: HostType,
  id: number,
  images: string[],
  isFavorite: boolean,
  isPremium: boolean,
  location: LocationType,
  maxAdults: number,
  previewImage: string,
  price: number,
  rating: string,
  title: string,
  type: string
};

export type OffersType = OfferType[];
