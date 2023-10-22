import { createSlice } from '@reduxjs/toolkit';

export interface UiState {
  isStaffModalOpen: boolean;
}

const initialState: UiState = {
  isStaffModalOpen: false,
};

export const uiStaffSlice = createSlice({
  name: 'uiStaff',
  initialState,
  reducers: {
    onOpenStaffModal: (state) => {
      state.isStaffModalOpen = true;
    },
    onCloseStaffModal: (state) => {
      state.isStaffModalOpen = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { onOpenStaffModal, onCloseStaffModal } = uiStaffSlice.actions;
