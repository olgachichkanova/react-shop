import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Banner from './components/Banner/Banner';
import Catalog from './components/Catalog/Catalog';
import Container from './components/Container/Container';
import Contacts from './components/Contancts/Contacts';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import PageNotFound from './components/PageNotFound/PageNotFound';

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Banner />
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route path='/catalog' element={<Catalog />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contacts' element={<Contacts />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
