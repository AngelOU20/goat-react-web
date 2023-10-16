import { Route, Routes } from 'react-router-dom';
import { HostalPage } from '../hostal/pages/HostalPage';
import { PersonalPage } from '../hostal/pages/PersonalPage';

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HostalPage />} />
      <Route path="/personal" element={<PersonalPage />} />
    </Routes>
  );
};
