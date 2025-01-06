import { ImageProps } from 'react-native';

export interface IFeaturedCard {
  title: string;
  location: string;
  price: string;
  rating: number;
  category: string;
  image: ImageProps;
}
