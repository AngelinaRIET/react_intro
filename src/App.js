import logo from './logo.svg';
import './App.css';
import Test from './components/Test';
import Card from './components/Card';
import { useEffect, useState } from 'react';

function App() {

  // let maValeur = "1234";
  const [maValeur, setMaValeur] = useState("1234");

  function maFonctionChangement(){
    setMaValeur("C'est maintenant TOTO");
  }

  // useEffect(()=> {
  //   alert('La valeur a changé')
  // }, [maValeur]);
  
  useEffect(()=>{
    alert('chargement de la page')
  },[]);
 

  let obj = {
    firstname : "Angélina",
    lastname : "Riet ",
    age : 36
  }
  
  let listOBJ = [{
    firstname : "Gilda",
    lastname : "Riet ",
    age : 36
  },
  {
    firstname : "Anthony",
    lastname : "Riet ",
    age : 40
  },
  {
    firstname : "Mathis",
    lastname : "Perret ",
    age : 7
  }]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          {maValeur}
        </p>
        <p>
          <button onClick={maFonctionChangement}>Click</button>
        </p>
        <Test/>
        <Card data={obj}/>
     

        {
          listOBJ.map((element,i) => {
            return <Card key={i} data={element}/>
          })
        }
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      
    </div>
  );
}

export default App;
