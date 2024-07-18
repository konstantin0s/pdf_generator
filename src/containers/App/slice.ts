import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppContainer, Product } from './types';


export const initialState: AppContainer = {
  status: 'saving',
  products: [],
  loading: false,
  items: [],
};

export const REDUCER_NAME = 'app';
export const appSlice = createSlice({
  name: REDUCER_NAME,
  initialState,
  reducers: {
    productsLoading: (state: AppContainer, action: PayloadAction<boolean>) => {
      return {
        ...state,
        loading: action.payload,
      };
    },
    setProducts: (state: AppContainer, action: PayloadAction<Product[]>) => {
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    },
    setRemoveFromCart: (state: AppContainer, action: PayloadAction<number>) => {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    },
    setAddToCart: (state: AppContainer, action: any) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      return existingItem
        ? {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        }
        : {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
        };
    },
  },
});

const generatedActions = appSlice?.actions;

export const actions = {
  ...generatedActions,
};
export const { reducer, name: sliceKey } = appSlice;
