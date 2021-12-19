
import './App.css';
import { Navbar } from './components/navbar';

import { BrowserRouter, Switch, Route } from "react-router-dom";
import {LoginPage} from './pages/LoginPage'
import { ArtistSearchPage } from './pages/ArtistSearchPage';
import { AlbumArtistPage } from './pages/AlbumArtistPage';
//** implement the react router to naviagte between pages */
function App() {

  return (
    <BrowserRouter>
    <Navbar/>
    <Switch>
      <Route path="/"  exact component={LoginPage} />
      <Route path="/artist"  exact  component={ArtistSearchPage} />
      <Route path="/artist-album" exact component={AlbumArtistPage} />
    </Switch>
  </BrowserRouter>
    
    
  );
}

export default App;
