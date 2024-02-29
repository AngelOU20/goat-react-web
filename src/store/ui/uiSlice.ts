import { createSlice } from '@reduxjs/toolkit';

export interface UiState {
  isDrawerOpen: boolean;
}

const initialState: UiState = {
  isDrawerOpen: false,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setOpenDrawer: (state) => {
      state.isDrawerOpen = true;
    },
    setCloseDrawer: (state) => {
      state.isDrawerOpen = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setOpenDrawer, setCloseDrawer } = uiSlice.actions;
