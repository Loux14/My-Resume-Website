import { HashRouter } from 'react-router-dom';
import { Content } from './components/layout';
import './styles/App.css';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Content />
      </div>
    </HashRouter>
  );
}

export default App;
