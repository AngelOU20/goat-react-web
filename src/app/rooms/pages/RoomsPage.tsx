import { HostalLayout } from '@/app/layout/HostalLayout';
import { AssignStaffModal, RoomsTable, TasksModal } from '../components';
import { PageTitle } from '@/app/components/PageTitle';

export const RoomsPage: React.FC = () => {
  return (
    <HostalLayout>
      <PageTitle>Habitaciones</PageTitle>
      <RoomsTable />
      <TasksModal />
      <AssignStaffModal />
    </HostalLayout>
  );
};
