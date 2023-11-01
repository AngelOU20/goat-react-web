import { createSlice } from '@reduxjs/toolkit';
import { type Employee } from '../../staff/interfaces/interfaces';

export interface staffState {
  isSaving: boolean;
  staff: Employee[];
  activeEmployee: Employee | null;
}

const initialState: staffState = {
  isSaving: false,
  staff: [
    {
      _id: 1,
      nameComplete: 'Juan Pérez',
      user: 'usmpfca1',
      status: 'Activo',
      number: '987654321',
      email: 'juanPe2021@gmail.com',
      password: '123456',
    },
    {
      _id: 2,
      nameComplete: 'María Sánchez',
      user: 'usmpfca2',
      status: 'Activo',
      number: '924254322',
      email: 'maria_sanchez@gmail.com',
      password: '123456',
    },
    {
      _id: 3,
      nameComplete: 'Ana Martínez',
      user: 'usmpfca3',
      status: 'Activo',
      number: '977888999',
      email: 'ana_m21@hotmail.com',
      password: 'passAna456',
    },
    {
      _id: 4,
      nameComplete: 'Luis Rodríguez',
      user: 'usmpfca4',
      status: 'Inactivo',
      number: '912345678',
      email: 'Garcialuis@hotmail.com',
      password: 'luispass',
    },
  ],
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
