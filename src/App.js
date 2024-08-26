import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './home/Home';

function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
    </div>
  );
}

export default App;