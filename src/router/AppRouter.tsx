import { Route, Routes } from 'react-router-dom';
import { HostalPage } from '../hostal/pages/HostalPage';
import { StaffPage } from '../staff/pages/StaffPage';

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HostalPage />} />
      <Route path="/personal" element={<StaffPage />} />
    </Routes>
  );
};
