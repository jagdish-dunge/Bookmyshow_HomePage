
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import './Stream.css';
import './Activities/Activity.css';
import Navbar from './Navbar';
import Stream from './Stream';
import Activity from './Activities/Activity';
import Buzz from './Buzz/Buzz'
import ICC from './ICC';
import Events from './Events';
import Header from './Header';
import Sports from './Sports';
import Offer from './offer';
import Footer from './Footer';
import Giftcards from './Giftcards';
import ListYourShow from './ListYourShow';
import Corporates from './Corporate/Corporates';


function App() {
  return (
    <div className="App">

      {/* <Navbar></Navbar> */}
      {/* <Stream></Stream> */}
      {/* <Activity></Activity> */}


      <BrowserRouter>

      <Header></Header>
        <Routes>

          <Route path='/' element={<Navbar></Navbar>}></Route>
          <Route path='/Stream' element={<Stream></Stream> }></Route>
          <Route path='/Activity' element={ <Activity></Activity>}> </Route>
          <Route path='/Buzz' element={ <Buzz></Buzz>}> </Route>
          <Route path='/Icc' element={ <ICC></ICC>}> </Route>
          <Route path='/Event' element={<Events></Events>}> </Route>
          <Route path='/Sport' element={ <Sports></Sports>}> </Route>
          <Route path='/Offer' element={   <Offer></Offer>}> </Route>
          <Route path='/Gift' element={ <Giftcards></Giftcards>}> </Route>
          <Route path='/List' element={  <ListYourShow></ListYourShow>}> </Route>
          <Route path='/Corporate' element={    <Corporates></Corporates>}> </Route>
  
        
        </Routes>
<Footer></Footer>
      </BrowserRouter>

    </div>
  );
}

export default App;
