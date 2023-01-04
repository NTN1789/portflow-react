import React from 'react'
import styles from './Main.module.css'
import cafe from "../Assets/img/cafe.png"
import pao from "../Assets/img/pao.png"
import sorvete from "../Assets/img/sorvete.png"
import telaDePc from "../Assets/img/telaDePc.png"
import Dashbord from "../Assets/img/Dashbord.png"
import xicara from "../Assets/img/xicara.png"
import monitor from "../Assets/img/monitor.png"
import barraDeCereal from "../Assets/img/barraDeCereal.png"
import cel from "../Assets/img/cel.png"
import Tablet from "../Assets/img/Tablet.png"
import fotos from "../Assets/img/fotos.png"
import escritorio from "../Assets/img/escritorio.png"

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