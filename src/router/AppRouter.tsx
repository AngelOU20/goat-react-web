import { Route, Routes } from 'react-router-dom';
import { HostalPage } from '../hostal/pages/HostalPage';
import { StaffPage } from '../staff/pages/StaffPage';
import { RoomsPage } from '../rooms/pages/RoomsPage';

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HostalPage />} />
      <Route path="/personal" element={<StaffPage />} />
      <Route path="/habitaciones" element={<RoomsPage />} />
    </Routes>
  );
};
