import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/home/Home';
import Hotel from './pages/hotel/Hotel';
import SearchList from './pages/searchList/SearchList';
import Login from './pages/login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<Home />}/>
          <Route path='/hotel/:id' element={<Hotel />} />
          <Route path='/lists' element={<SearchList />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
