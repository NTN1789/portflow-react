import React from 'react'
import styles from './Main.module.css'
import cafe from "../img/cafe.png"
import pao from "../img/pao.png"
import sorvete from "../img/sorvete.png"
import telaDePc from "../img/telaDePc.png"
import Dashbord from "../img/Dashbord.png"
import xicara from "../img/xicara.png"
import monitor from "../img/monitor.png"
import barraDeCereal from "../img/barraDeCereal.png"
import cel from "../img/cel.png"
import Tablet from "../img/Tablet.png"
import fotos from "../img/fotos.png"
import escritorio from "../img/escritorio.png"

function Main (){

    return (
        <div>
        <section className={styles.banner}> 


        <p className={styles.text}> Imagine,Discuta,Desenhe.</p>



        <h2 className={styles.sloganFrase}> fale conosco </h2> 
        </section>

    <main>
        <figure>
            <img src={cafe} alt="imagem de um café"/>
        </figure>

        <figure>
            <img src={pao} alt="pao de queijo"/>
        </figure>
          
          
        <figure>
            <img src={sorvete} alt="sorvete"/>
        </figure>

        
        <figure>
            <img src={telaDePc} alt="monitores"/>
        </figure>

        
        <figure>
            <img src={Dashbord} alt="imagem de dashbord"/>
        </figure>
        
        <figure>
            <img src={xicara} alt="uma caneca de café"/>
        </figure>

        
        <figure>
            <img src={monitor} alt="uma caneca de café"/>
        </figure>

        <figure>
            <img src={barraDeCereal} alt="uma caneca de café"/>
        </figure>

        
        <figure>
            <img src={cel} alt="iphone para investimentos "/>
        </figure>

            
        <figure>
            <img src={Tablet} alt="tablet "/>
        </figure>

        <figure>
            <img src={fotos} alt="fotos "/>
        </figure>

        <figure>
            <img src={escritorio} alt="escritorio "/>
        </figure>

        </main>


        </div>
    )
}


export default Main