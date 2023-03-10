import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Banner from './components/Banner/Banner';
import CardDetails from './components/CardDetails/CardDetails';
import Catalog from './components/Catalog/Catalog';
import Container from './components/Container/Container';
import Contacts from './components/Contancts/Contacts';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Search from './components/Search/Search'

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Banner />
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route path='/catalog' element={<Catalog><Search /></Catalog>}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/products/:id' element={<CardDetails />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
