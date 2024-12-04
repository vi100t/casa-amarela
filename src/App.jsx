import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home.jsx';
import FaleConosco from './Components/FaleConosco/FaleConosco.jsx';
import Informacoes from './Components/Informacoes/Informacoes.jsx';
import Piawood from './Components/Piawood/Piawood.jsx';
import Hospitality from './Components/Hospitality/Hospitality.jsx';
import YellowFilme from './Components/YellowFilme/YellowFilme.jsx';
import HospitalityHospedagem from './Components/Hospitality/HospitalityHospedagem.jsx';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Hospitality/" element={<Hospitality />} />
          <Route path="Piawood/" element={<Piawood />} />
          <Route path="YellowFilme/" element={<YellowFilme />} />
          <Route path="Informacoes/" element={<Informacoes />} />
          <Route path="FaleConosco/" element={<FaleConosco />} />
          <Route
            path="HospitalityHospedagem/"
            element={<HospitalityHospedagem />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
