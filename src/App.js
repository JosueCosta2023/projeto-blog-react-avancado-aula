import './App.css';
import AppRoutes from './pages/routes'
// Para criar o arquivo reset
import GlobalStyleReset from './GlobalStyles'

function App() {
  return (
    <div>
      <GlobalStyleReset/>
      <AppRoutes />
    </div>
  );
}




export default App;
