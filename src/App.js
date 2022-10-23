import './App.css';
import "./scss/styles.scss";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Home from './pages/Home';
import Movies from './pages/movies';
import DataContext from './context/DataContext';
import Details from './pages/Details';

function App() {
  return (
    <DataContext>
      <ChakraProvider>
        <div className="bgColor">
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movie" element={<Movies />} />
              <Route path="/movie/:id" element={<Details />} />
            </Routes>
          </Router>
        </div>
      </ChakraProvider>
    </DataContext>
  );
}

export default App;
