import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function CustomizedInputBase(): JSX.Element {
  return (
    <Paper
      component="form"
      sx={{
        p: '0px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '40%',
        border: '1px solid #61616170',
        boxShadow: 'none',
      }}
    >
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>

      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Buscar"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
    </Paper>
  );
}
