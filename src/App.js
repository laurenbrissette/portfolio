import './App.css';
import { Provider } from './components/ui/provider'
import Page from './pages/page'

function App() {
  return (
    <Provider>
      <Page/>
    </Provider>
  );
}

export default App;
