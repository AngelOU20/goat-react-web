import EnhancedTable from '../components/EnhancedTable';
import { HostalLayout } from '../layout/HostalLayout';
import { Container } from '@mui/material';

export const PersonalPage: React.FC = () => {
  return (
    <HostalLayout>
      <Container>
        <h2>Personal</h2>
        <EnhancedTable />
      </Container>
    </HostalLayout>
  );
};
