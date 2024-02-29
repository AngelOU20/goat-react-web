import { HostalLayout } from '@/app/layout/HostalLayout';
import { PageTitle } from '@/app/components/PageTitle';
import { StaffTable, StaffModal } from '../components';

export const StaffPage: React.FC = () => {
  return (
    <HostalLayout>
      <PageTitle>Administrar Personal</PageTitle>
      <StaffTable />
      <StaffModal />
    </HostalLayout>
  );
};
