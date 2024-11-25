import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './Components/Utils/Footer.jsx';
import Home from './Components/Home/Home.jsx';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/Hospitality" element={<Hospitality />} /> */}
          {/* <Route path="/Piawood" element={<Piawood />} /> */}
          {/* <Route path="/YellowFilme" element={<YellowFilme />} /> */}
          {/* <Route path="/Informacoes" element={<Informacoes />} /> */}
          {/* <Route path="/FaleConosco" element={<FaleConosco />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
