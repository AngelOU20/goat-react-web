import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage } from '../pages';

export const AuthRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />

      <Route path="*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
