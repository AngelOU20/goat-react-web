import { Search } from '@mui/icons-material';
import { Button, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import {
  DataGrid,
  type GridColDef,
  type GridValueGetterParams,
} from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: false,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: false,
  },
  {
    field: 'phoneNumber',
    headerName: 'Phone number',
    width: 150,
    editable: false,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName !== null ? params.row.firstName : ''}  
      ${params.row.lastName !== null ? params.row.lastName : ''}`,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: false,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 210,
    editable: false,
  },
];

const rows = [
  {
    id: 1,
    lastName: 'Snow',
    firstName: 'Jon',
    age: 35,
    phoneNumber: '+51 949922073',
    email: 'Snow@gmail.com',
  },
  {
    id: 2,
    lastName: 'Lannister',
    firstName: 'Cersei',
    age: 42,
    phoneNumber: '+51 949922073',
    email: 'Lannister@gmail.com',
  },
  {
    id: 3,
    lastName: 'Lannister',
    firstName: 'Jaime',
    age: 45,
    phoneNumber: '+51 949922073',
    email: 'Lannister@gmail.com',
  },
  {
    id: 4,
    lastName: 'Stark',
    firstName: 'Arya',
    age: 16,
    phoneNumber: '+51 949922073',
    email: 'Stark@gmail.com',
  },
  {
    id: 5,
    lastName: 'Targaryen',
    firstName: 'Daenerys',
    age: null,
    phoneNumber: '+51 949922073',
    email: 'Targaryen@gmail.com',
  },
  {
    id: 6,
    lastName: 'Melisandre',
    firstName: null,
    age: 150,
    phoneNumber: '+51 949922073',
    email: 'Melisandre@gmail.com',
  },
  {
    id: 7,
    lastName: 'Clifford',
    firstName: 'Ferrara',
    age: 44,
    phoneNumber: '+51 949922073',
    email: 'Clifford@gmail.com',
  },
  {
    id: 8,
    lastName: 'Frances',
    firstName: 'Rossini',
    age: 36,
    phoneNumber: '+51 949922073',
    email: 'Frances@gmail.com',
  },
  {
    id: 9,
    lastName: 'Roxie',
    firstName: 'Harvey',
    age: 65,
    phoneNumber: '+51 949922073',
    email: 'Roxie@gmail.com',
  },
  {
    id: 10,
    lastName: 'Maria',
    firstName: 'Rojas',
    age: 45,
    phoneNumber: '+51 949922073',
    email: 'Maria@gmail.com',
  },
];

export default function EnhancedTable(): JSX.Element {
  return (
    <>
      <Grid
        container
        display="flex"
        justifyContent="space-between"
        margin="20px 0"
      >
        <Grid
          item
          xs={4}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          gap="20px"
        >
          <h3>Total ({rows.length})</h3>
          <Button variant="contained" sx={{ textTransform: 'capitalize' }}>
            Agregar nuevo personal
          </Button>
        </Grid>

        <Grid className="container__search">
          <Search className="icon__search" />
          <input
            type="text"
            className="input__search"
            placeholder="Buscar personal"
          />
        </Grid>
      </Grid>

      <Box sx={{ height: 'auto', width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 8,
              },
            },
          }}
          pageSizeOptions={[8]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </>
  );
}
