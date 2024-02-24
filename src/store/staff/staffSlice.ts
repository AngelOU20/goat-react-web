import { createSlice } from '@reduxjs/toolkit';
import { type Employee } from '../../staff/interfaces/interfaces';
import { staffData } from '../../lib/staff';

export interface staffState {
  isSaving: boolean;
  staff: Employee[];
  activeEmployee: Employee | null;
}

const initialState: staffState = {
  isSaving: false,
  staff: staffData,
  activeEmployee: null,
};

export const staffSlice = createSlice({
  name: 'staff',
  initialState,
  reducers: {
    onSetActiveEmployee: (state, action) => {
      state.activeEmployee = action.payload;
    },
    onClearEmployeeActive: (state) => {
      state.activeEmployee = null;
    },
    onAddNewEmployee: (state, action) => {
      state.staff.push(action.payload);
    },
    onUpdateEmployee: (state, action) => {
      state.staff = state.staff.map((employee) => {
        if (employee._id === action.payload._id) {
          return action.payload;
        }
        return employee;
      });
    },
    onDeleteEmployeeById: (state) => {
      if (state.activeEmployee !== null) {
        state.staff = state.staff.filter(
          (employee) => employee._id !== state.activeEmployee?._id
        );
        state.activeEmployee = null;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  onSetActiveEmployee,
  onClearEmployeeActive,
  onAddNewEmployee,
  onUpdateEmployee,
  onDeleteEmployeeById,
} = staffSlice.actions;
