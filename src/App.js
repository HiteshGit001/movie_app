import './App.css';
import "./scss/styles.scss";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Home from './pages/Home';
import Movies from './pages/movies';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie" element={<Movies />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
