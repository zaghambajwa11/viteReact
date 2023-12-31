import { useState, useEffect } from "react";
import Pet from "./Pet.jsx";


const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
const BREEDS = [""];

// add to the other useStates inside component at top



const SearchParams = () => {
   
    const [location, setLocation] = useState("");
    const [animal, setAnimal] = useState("");
    const [breed, setBreed] = useState("");
    const [pets, setPets] = useState([]);

    useEffect(() => {
        requestPets();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    async function requestPets() {
        const res = await fetch(
            `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
  );
    const json = await res.json();
    console.log(json);
    setPets(json.pets);
    }
    
    return (
      <div className="search-params">
        
        <form onSubmit={
            e=>{
                e.preventDefault();
                requestPets();
            }
        }>
          <label htmlFor="location">
            Location
            <input onChange = {e => setLocation(e.target.value)} id="location" value={location} placeholder="Location" />
          </label>
            <label htmlFor="animal">
            Animal
            <select
                id="animal"
                value={animal}
                onChange={e => {
                     setAnimal(e.target.value);
                     setBreed("");
                    }
                }
                onBlur={e => setAnimal(e.target.value)}
            >
                <option />
                {ANIMALS.map(animal => (
                <option key={animal} value={animal}>
                    {animal}
                </option>
                ))}
            </select>
            </label>

            <label htmlFor="breed">
            breed
            <select
                id="breed"
                disabled={!BREEDS.length}
                value={breed}
                onChange={e => setBreed(e.target.value)}
                onBlur={e => setBreed(e.target.value)}
            >
                <option />
                {BREEDS.map(breed => (
                <option key={breed} value={breed}>
                    {breed}
                </option>
                ))}
            </select>
            </label>
          <button>Submit</button>


        </form>
        {
            pets.map(pet =>(
                <Pet name={pet.name} animal={pet.animal} breed={pet.breed} key={pet.id} />
            ))
        }
      </div>
    );
  };
  
  export default SearchParams;