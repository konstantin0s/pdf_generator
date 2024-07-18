import { ActionType } from 'typesafe-actions';
import { RootState } from '../../types';
import { actions } from './slice';

type AppContainer = AppData;

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: any;
};

export interface Cart {
  id: number;
  title?: string;
  description?: string;
  price: number;
  category?: string;
  image: string;
  quantity: number
  name: string
};


export interface AppData {
  products: Array<Product>;
  status: string;
  loading: boolean;
  items: Array<Cart>;
}

type AppActions = ActionType<typeof actions>;

type ContainerState = AppContainer;
type ContainerActions = AppActions;

export type { AppContainer, ContainerActions, ContainerState, RootState };
