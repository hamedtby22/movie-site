import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import 'swiper/css';
import { ToastContainer} from 'react-toastify';
import { toastType } from './components/Toast';
//pages
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Catalog from './pages/Catalog';
import Detailss from './components/detail/Detailss';
import Footer from './components/Footer';
import Images from './components/Images';
import Favorite from './pages/Favorite';
import Contact from './pages/Contact'
import SignUp from './pages/SignUp';
import Login from './pages/Login';
function App() {

  const [transparent,setTransparent] = useState(null);
  const [favorites,setFavorites] = useState([]);


  const saveToLocalStorage = (items) => {
    localStorage.setItem('favorite', JSON.stringify(items))
  }

  const addFavorite = (movie) => {
    const newAddFavorite = [...favorites, movie];
    setFavorites(newAddFavorite)
    saveToLocalStorage(newAddFavorite)
    toastType('success', 'به لیست علاقه مندی اضافه شد');
}
  const removeFavorite = (id) => {
    const newFavouriteList = favorites.filter(
      (favorite) => favorite.id !== id
    );
    setFavorites(newFavouriteList);
    saveToLocalStorage(newFavouriteList)
  };
  
  useEffect(() => {
    const showFavorites = JSON.parse(localStorage.getItem('favorite'))
    if(showFavorites) {
      setFavorites(showFavorites)
    }
  },[])
  return (     
    <div className={!transparent ?  'dark' : 'bright'}>
      <Navbar transparent={transparent} setTransparent={setTransparent} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search/:category/:keyword' element={<Catalog />} />
          <Route path='/:category/:id' element={<Detailss transparent={transparent} addFavorite={addFavorite} />} />
          <Route path='/:category' element={<Catalog />} />
          <Route path='/:category/:id/images' element={<Images />} />
          <Route path='/contact-us' element={<Contact />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/favorites' element={<Favorite removeFavorite={removeFavorite} favorites={favorites} />} /> 
        </Routes>
      <Footer />
      <ToastContainer />
    </div>     
  );
}

export default App;
