import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Events from './components/Events';
import Organizer from './components/Organizer';
import Footer from './components/Footer';
import { createContext, useState } from 'react';
import UsersDisplay from './components/UsersDisplay';
import GoogleLoginComponent from './components/GoogleLoginComponent';
import UserInfo from './components/user-info';

export const ThemeContext  = createContext("");

function App() {
  const [dark, setdark] = useState("");
  const dartAction = () => {
    setdark(!dark);
  };

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={dark}>
        <div style={{ backgroundColor: dark ? "black" : "", color: dark ? "white" : "" }}>
          <div style={{ backgroundColor: dark ? "black" : "", color: dark ? "white" : "" }} className="App">
            <Navbar />
            <button className='border-0 bg-transparent' onClick={dartAction}>
              <i style={{ fontSize: "30px", zIndex: "4", left: 34 }} className="fa-solid fa-circle-half-stroke position-fixed top-50"></i>
            </button>
            <Header/>
            <Switch>
              <Route exact path="/" component={About} />
              <Route path="/events" component={Events} />
              <Route path="/organizer" component={Organizer} />
              <Route path="/users" component={UsersDisplay} />
              <Route path="/login" component={GoogleLoginComponent} />
              <Route path="/user-info" component={UserInfo} />
              {/* Ajoutez d'autres routes si nécessaire */}
            </Switch>
            <hr></hr>
            <Footer />
          </div>
        </div>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
