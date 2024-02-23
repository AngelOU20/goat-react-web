import { createSlice } from '@reduxjs/toolkit';

export interface authState {
  status: "checking" | 'not-authenticated' | 'authenticated';
  // user: {};
  errorMessage: string | null;
}

const initialState: authState = {
  status: "not-authenticated", // 'checking', 'not-authenticated', 'authenticated'
  // user: {},
  errorMessage: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    onLogin: (state, /* action: PayloadAction<number> */) => {
      state.status = "authenticated";
    },
    onLogout: (state) => {
      state.status = "not-authenticated";
    },
    onChecking: (state) => {
      state.status = 'checking';
    }
  }
});

// Action creators are generated for each case reducer function
export const { onLogin, onLogout, onChecking } = authSlice.actions;
