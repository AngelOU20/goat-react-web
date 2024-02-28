import { Box, Button, Card, CardContent, CardHeader, Typography } from '@mui/material';
import { Groups, MeetingRoom } from '@mui/icons-material';
import { HostalLayout } from '@/layout/HostalLayout';
import { useStaffStore } from '@/staff/hooks';

export const DashboardPage: React.FC = () => {
  const { staff } = useStaffStore();

  return (
    <HostalLayout>
      <Box
        display="flex"
        gap="10px"
        justifyContent="flex-end"
        sx={{ marginBottom: '3em' }}
      >
        <Button variant="contained">30 días</Button>
        <Button variant="outlined">90 días</Button>
        <Button variant="outlined">6 meses</Button>
        <Button variant="outlined">12 meses</Button>
      </Box>

      <Box display="flex" gap="30px" justifyContent="flex-start">
        <Card
          sx={{
            minHeight: 110,
            minWidth: 275,
            boxShadow: '0px 8px 36px 0px rgba(0, 0, 0, 0.16)',
          }}
        >
          <CardHeader
            avatar={
              <Groups
                sx={{
                  color: '#1F3B51',
                  backgroundColor: '#CCD9E3',
                  fontSize: '70px',
                  padding: '15px',
                  borderRadius: '50%',
                }}
              />
            }
          />
          <CardContent>
            <Typography sx={{ fontSize: '28px', fontWeight: '800', color: '#1F3B51' }}>
              {staff.length <= 9 ? `0${staff.length}` : staff.length}
            </Typography>
            <Typography sx={{ fontSize: '16px', fontWeight: '400', color: '#000000' }}>
              Personal de limpieza
            </Typography>
          </CardContent>
        </Card>

        <Card
          sx={{
            minHeight: 120,
            minWidth: 275,
            boxShadow: '0px 8px 36px 0px rgba(0, 0, 0, 0.16)',
          }}
        >
          <CardHeader
            avatar={
              <MeetingRoom
                sx={{
                  color: '#1F3B51',
                  backgroundColor: '#CCD9E3',
                  fontSize: '70px',
                  padding: '15px',
                  borderRadius: '50%',
                }}
              />
            }
          />
          <CardContent>
            <Typography sx={{ fontSize: '28px', fontWeight: '800', color: '#1F3B51' }}>
              12
            </Typography>
            <Typography sx={{ fontSize: '16px', fontWeight: '400', color: '#000000' }}>
              Habitaciones
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </HostalLayout>
  );
};
