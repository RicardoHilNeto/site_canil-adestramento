import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Home from './routes/Home.jsx';
import Login from './routes/Login.jsx';
import Canil from './routes/Canil.jsx'; 
import Cursos from './routes/Cursos.jsx';
import Contato from './routes/Contato.jsx';
import Shop from './routes/Shop.jsx';


const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="home" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="canil" element={<Canil />} />
        <Route path="cursos" element={<Cursos />} />
        <Route path="shop" element={<Shop />} />
        <Route path="contato" element={<Contato />} />
        
      </Route>
    </Routes>
  </Router>
);

ReactDOM.createRoot(document.getElementById('root')).render(<AppRouter />);
