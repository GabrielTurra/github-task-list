import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import Modal from 'react-modal';

import GlobalStyle from './styles/global';

Modal.setAppElement('#root');

const App = () => (
  <Router>
    <Routes />
    <GlobalStyle />
  </Router>
);

export default App;
