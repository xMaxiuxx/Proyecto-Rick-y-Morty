
import Cards from './components/Cards/Cards'
import Nav from "./components/Nav/Nav"
import { useState } from 'react';
import style from "./App.module.css";
import {Routes,Route} from "react-router-dom" 
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import NotFound from './components/Error/404';

 function App () { 
  //! HOOKS
const[characters, setCharacters] = useState([]);
//! Event HANDLERS
const onSearch= (id) => {  

const URL_BASE ="https://be-a-rym.up.railway.app/api"
const KEY = "28145bc85540.e1ef46aa1e5d10c4df90";

if(characters.find((char)=>char.id === id)){
 
  return alert("Personaje Repetido");
}

fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
.then((response)  => response.json())
.then ((data)=>{
if(data.name) {
  //! !characters.find se fija si Id co
  setCharacters((oldChars) =>[...oldChars, data]);
  // setCharacters([...characters,data])
}else{
  alert("Algo Salio Mal");
}
});
};

const onClose = (id)=> {
  setCharacters(
    characters.filter((char) => char.id !==id));

    // Filter no modifica el array orginal devuelve un array nuevo  

};

//!<Nav /> tiene  que aparecer en todas las rutas.
//! < Cards />  debe aparecer solo en la ruta /home
//! About /> Debe aparecer solo en la ruta /about.
//! <Detail /> debe aparecer solo en una ruta /detail:detailId  

  return (
    <div className='App' style={{ padding: '25px' }}>

      <div className= {style.nav}> 
       <Nav onSearch={onSearch} />
      <Routes>
      < Route
       path="/home"
       element = {<Cards characters ={characters} onClose={onClose} />}
        />
      <Route
       path="/about"element={<About />} />

      <Route path='*' element={<NotFound />}/>

       <Route path='/detail/:detailId'element={<Detail />} /> 
      </Routes>



      </div>
      <div>
      
      </div>
        
    </div>
  )
}

export default App;




// const [characters,setCharacters]= useState() => HOOK de react
// [
//   un estado => [],
//   fn() que modifica el estado
// ]

