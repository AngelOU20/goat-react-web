import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { Checking } from '../app/components/Checking';
import { useAuthStore } from '../hooks/useAuthStore';
import { DashboardPage } from '../app/dashboard/pages/DashboardPage';
import { StaffPage } from '../app/staff/pages/StaffPage';
import { RoomsPage } from '../app/rooms/pages/RoomsPage';

export const AppRouter: React.FC = () => {
  const { status } = useAuthStore();

  if (status === 'checking') {
    return <Checking />;
  }

  return (
    <Routes>
      {status === 'not-authenticated' ? (
        <>
          <Route path="/auth/*" element={<AuthRoutes />} />
          <Route path="/*" element={<Navigate to="/auth/login" />} />
        </>
      ) : (
        <>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/personal" element={<StaffPage />} />
          <Route path="/habitaciones" element={<RoomsPage />} />

          <Route path="/*" element={<Navigate to="/" />} />
        </>
      )}

      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
