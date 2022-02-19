import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { HomePage } from './pages/home-page/home-page.js';
import { Header } from './components/header/header.js';
import { store } from './redux'
import './App.css';

function App() {
  return ( 
    <Provider store={ store }>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element={ <HomePage /> } />
        </Routes>
      </div>
    </Provider>
);
}

export default App;
