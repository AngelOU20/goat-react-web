import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

interface SearchFieldProps {
  placeholder?: string;
  onClick?: () => void;
}

export default function SearchField({
  placeholder = 'Buscar',
  onClick = () => {},
}: SearchFieldProps): JSX.Element {
  return (
    <Paper
      component="form"
      sx={{
        p: '0px 8px',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#fcfcfc',
        border: '1px solid #61616170',
        boxShadow: 'none',
      }}
    >
      <IconButton onClick={onClick} type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>

      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder={`${placeholder}`}
        inputProps={{ 'aria-label': 'search google maps' }}
      />
    </Paper>
  );
}
