import Card from "../Card/Card";
import {CardsContainer} from"./styledComponents";
//! "../" para buscar carpetas

export default function Cards({ characters,onClose }) {
   // const { characters } = props;

   

   return (
   <CardsContainer>

   {characters.map(({id,name, species, gender, image}) => {
      return (
   <Card 
   id={id}
   image={image}
   name={name}
   species={species} 
   gender={gender}
   onClose={onClose}
   />
      );
   })}
   </CardsContainer>
   );
}
