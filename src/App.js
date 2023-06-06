import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/home/Home';
import Hotel from './pages/hotel/Hotel';
import SearchList from './pages/searchList/SearchList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/hotels' element={<Hotel />} />
          <Route path='/lists' element={<SearchList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
