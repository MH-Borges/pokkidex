import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

function Pokemon() {
    const [pokemon, setPokemon] = useState();
    const { name } = useParams();

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((r) => r.json())
        .then((resultPokemon) => {
            setPokemon(resultPokemon);
        });
    }, [name]);

    if (!pokemon) {
        return null;
    }

    return (
        <>
            <Navbar />
            <div className="PokemonView" key={name}>
                <h2>{pokemon.name}</h2>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                Abilities
                <ul className="PokemonView__abilities">
                    {pokemon.abilities.map((item) => (
                    <li>{item.ability.name}</li>
                    ))}
                </ul>
            </div>
        </> 
    );
} 

export default Pokemon;