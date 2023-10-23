import { createSlice } from '@reduxjs/toolkit';

export interface Employee {
  _id: number;
  nameComplete: string;
  user: string | undefined;
  status: string;
  number: string;
  email: string;
  password: string;
}

export interface staffState {
  isSaving: boolean;
  staff: Employee[];
  // eslint-disable-next-line @typescript-eslint/ban-types
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
  },
});

// Action creators are generated for each case reducer function
export const {
  onSetActiveEmployee,
  onClearEmployeeActive,
  onAddNewEmployee,
  onUpdateEmployee,
} = staffSlice.actions;
