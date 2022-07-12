import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button/Button';
]import styles from './Pokedex.module.scss'

function Pokedex() {

    const [search, setSearch] = useState('');
    const [pokemons, setPokemons] = useState();


    //const filtered = !pokemons || !s ? pokemons : pokemons.filter(({ name }) => name.toLowerCase().includes(s) );
    //const s = search && search.toLowerCase();
    const filtered = !pokemons ? pokemons : pokemons.filter(({ name }) => name.toLowerCase().includes() );

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then((r) => r.json())
        .then((json) => {
            setPokemons(json.results);
        });
    }, []);

    if (pokemons) {
        var urlNumList = [];
        var nameList = [];

        nameList.push(pokemons.filter(({ name }) => name ));
        
        for (var i = 0; i < 151; i++){
            let text = pokemons[i].url.toString();
            let pattern = `${i +1}`;
            let result = text.match(pattern);
            urlNumList.push(("000" + result).slice(-3) )
        }

        let rows = []
        for (let i = 0; i < 151; i++) {
            rows.push(
                <Link to={`/pokemons/${pokemons[i].name}`} key={pokemons[i].name}>
                    <li key={pokemons[i].name}>
                        <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${urlNumList[i]}.png`} alt="pokemon" />
                        <p>N° {urlNumList[i]}</p>
                        <h2>{pokemons[i].name}</h2>
                    </li>
                </Link>
            )
        }

        //<input type="search" value={search} onChange={(e) => setSearch(e.target.value)} />
        // <Navbar />

        return (
            <>
                <div className={styles.pokedexBlock}>
                    <div className={styles.bigBlock}>
                        <div className={styles.header}>
                            <div className={styles.bigCircle}></div>
                        </div>
                        <div className={styles.visorPoke}>
                            <div className={styles.visorInterno}></div>
                        </div>
                        <div className={styles.controls}>
                            <div className={styles.buttonRandom}></div>
                            <div className={styles.visorUnder}></div>
                            <div className={styles.buttonsNextBefore}>
                                <Button to="/pokedex" className={styles.before}/>
                                <Button to="/pokedex" className={styles.next}/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.smallBlock}>

                    </div>
                </div>
                
                <div className={styles.pokedex}>              
                    {filtered && (
                        <ul className={styles.PokemonList}>
                            { rows }
                        </ul>
                    )}
                </div>
            </>  
        )
    } 
    
    else{
        return null
    }

    
}

export default Pokedex