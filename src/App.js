import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/profile' element={<Profile />} >
        <Route path=':username' element={<Profile />} />
      </Route>
      <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
