import { useState } from 'react';
import './App.css';
import WelcomePage from './WelcomePage';
import Content from './Content';
import Footer from './Footer'


function App() {
  const [entered, setEntered] = useState(false);


  const handleClick= () => {
    setEntered(true)
  }
  return (
    <div className="App">
      {!entered && <WelcomePage onEnter={handleClick}/>}
      {entered && <Content/>}
      {entered && <Footer/>}
    </div>
  );
}

export default App;
