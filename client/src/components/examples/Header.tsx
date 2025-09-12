import Header from '../Header';
import { ThemeProvider } from '../ThemeProvider';

export default function HeaderExample() {
  return (
    <ThemeProvider>
      <Header onNavigate={(section) => console.log(`Navigate to: ${section}`)} />
    </ThemeProvider>
  );
}