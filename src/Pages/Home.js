import styles from './Home.module.scss'
import Button from '../components/Button/Button';
import pokebola from '../components/imgs/pokebola.svg'
import pikachu from '../components/imgs/pikachu.png'

function Home() {
    return (

        <div className={styles.principal}>

            <div className={styles.imgPika}>
                <img src={pikachu} alt="pikachu" />
            </div>

            <div className={styles.logo}>
                <img src={pokebola} alt="pokebola" />
                <h1>Pokki10</h1>
                <Button to="/pokedex" text="Ver Pokedex"/>
            </div>
            
        </div>
    
    )
}

export default Home