import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Detail = () =>  {
    const {detailId} = useParams();

    const [character,setCharacter] = useState({});
    useEffect(() => {
    const URL_BASE = "https://be-a-rym.up.railway.app/api";
    const KEY = "28145bc85540.e1ef46aa1e5d10c4df90";
    
    axios(`${URL_BASE}/character/${detailId}?key=${KEY}`)
    .then(response => setCharacter(response.data)
    );
    }, []);

    return(
        <div>
            
          {character.name?
        (<>
            <h2> {character.name}  </h2>
            <p>  {character.status}  </p>
            <p>  {character.species}  </p> 
            <p>  {character.gender}  </p>
            <p>  {character.origin?.name} </p>
            <img src={character.image}alt="img"/>


         </>
         ):( <h3> Loading...</h3>
           ) }
            
        </div>
    );

    };

export default Detail;


//? Ternario ? esto se culpe  {character.name?
 
 //Respuesta Positiva Esto 
                // <h2> {character.name}  </h2>
//             <p>  {character.status}  </p>
//             <p>  {character.species}  </p> 
//             <p>  {character.gender}  </p>
//             <p>  {character.origin?.name} </p>
//             <img src={character.image}alt="img"/>


//  , Esto no se cumple //!           :
// respuesta negativa esto 
 //! :( <h3> Loading...</h3>)