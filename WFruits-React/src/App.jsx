import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar_Me from './components/navbar_me';
import 'flowbite';
import Beranda from './views/beranda';
import Klasifikasi from './views/Klasifikasi';
import Masukan from './views/Masukan';
import Informasi from './views/Informasi';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/informasi" element={<Informasi />} />
          <Route path="/masukan" element={<Masukan />} />
          <Route path="/input_gambar" element={<Klasifikasi />} />
          <Route path="/" element={<Beranda />} />
        </Routes>
      </Router>
    </>

  );
}

export default App;
