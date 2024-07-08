import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'flowbite';
import Beranda from './views/beranda';
import Klasifikasi from './views/Klasifikasi';
import Masukan from './views/Masukan';
import DaftarLabel from './views/DaftarLabel';
import Informasi from './views/Informasi';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/daftar-label" element={<DaftarLabel />} />
          <Route path="/masukan" element={<Masukan />} />
          <Route path="/input_gambar" element={<Klasifikasi />} />
          <Route path="/informasi" element={<Informasi />} />
          <Route path="/" element={<Beranda />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
