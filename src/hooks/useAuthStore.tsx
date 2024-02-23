import { useDispatch, useSelector } from 'react-redux';
import { type RootState } from '../store';
import { onChecking, onLogin, onLogout } from '../store/auth/authSlice';

interface AuthStoreOptions {
  status: 'checking' | 'not-authenticated' | 'authenticated';
  startLogin: () => void;
  startLogout: () => void;
}

export const useAuthStore = (): AuthStoreOptions => {
  const { status } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const startLogin = (): void => {
    dispatch(onChecking());

    dispatch(onLogin());
  };

  const startLogout = (): void => {
    dispatch(onLogout());
  };

  return {
    status,
    startLogin,
    startLogout,
  };
};
