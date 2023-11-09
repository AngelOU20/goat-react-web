import { createSlice } from '@reduxjs/toolkit';

export interface UiRoomState {
  isTaskModalOpen: boolean;
  isAssignPersonalModalOpen: boolean;
}

const initialState: UiRoomState = {
  isTaskModalOpen: false,
  isAssignPersonalModalOpen: false,
};

export const uiRoomSlice = createSlice({
  name: 'uiRoom',
  initialState,
  reducers: {
    onOpenTaskModal: (state) => {
      state.isTaskModalOpen = true;
    },
    onCloseTaskModal: (state) => {
      state.isTaskModalOpen = false;
    },
    onOpenAssignPersonalModal: (state) => {
      state.isAssignPersonalModalOpen = true;
    },
    onCloseAssignPersonalModal: (state) => {
      state.isAssignPersonalModalOpen = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  onOpenTaskModal,
  onCloseTaskModal,
  onOpenAssignPersonalModal,
  onCloseAssignPersonalModal,
} = uiRoomSlice.actions;
