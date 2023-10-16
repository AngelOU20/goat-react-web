import { AppRouter } from './router/AppRouter';
import { AppTheme } from './theme/AppTheme';

function App(): JSX.Element {
  return (
    <AppTheme>
      <AppRouter />
    </AppTheme>
  );
}

export default App;
