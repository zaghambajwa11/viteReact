import { useState, useEffect } from "react";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
const BREEDS = [""];

const SearchParams = () => {
   
    const [location, setLocation] = useState("");
    const [animal, setAnimal] = useState("");
    const [breed, setBreed] = useState("");
    
    return (
      <div className="search-params">
        
        <form>
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
      </div>
    );
  };
  
  export default SearchParams;