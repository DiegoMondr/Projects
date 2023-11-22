import React from "react";
import Fondo from "../assets/Index.png";
import ParticlesBackground from '../components/ParticlesBackground';

import pdf1 from "../assets/pdf (1).jpg";
import pdf2 from "../assets/pdf (2).jpg";
import pdf3 from "../assets/pdf (3).jpg";
import pdf4 from "../assets/pdf (4).jpg";
import pdf5 from "../assets/pdf (5).jpg";
import pdf6 from "../assets/pdf (6).jpg";
import pdf7 from "../assets/pdf (7).jpg";
import pdf8 from "../assets/pdf (8).jpg";





const Aprende = () => {
    
    return(
        
        <div className="aprendeBody" style={{

            width:'85%',
            height:'200%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent:'flex-start',
            padding:'50px',
            marginTop:'80%',

        }}>
            <ParticlesBackground/>
            <div className="header-container">
                <div className="header" style={{
                    display: 'flex',
                    flexDirection: 'row',
                    backgroundColor:'rgba(255, 255, 255, 0.486)',
                    borderRadius:'20px',
                    padding:'25px'
                    
                }}>
                    <img src={Fondo} alt="" style={{width:'30%',}}/>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems:'flex-start',
                        width:'70%',
                        paddingLeft:'50px'                    
                    }}>
                       <h1 style={{
                        fontFamily: 'sans-serif',
                        fontSize:'2.5rem',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        padding: '20px',
                        color:'white'
                    
                    }}>
                        La Psicologia de la MOTIVACION
                    </h1>
                    <a href style={{
                        fontFamily: 'sans-serif',
                        fontSize:'1.5rem',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        padding: '20px',
                        color:'white',
                    }}>
                        La psicología de la motivación es el estudio de los factores que impulsan el comportamiento humano. Se centra en las fuerzas internas y externas que motivan a las personas a actuar.

La motivación es un concepto complejo que ha sido estudiado por filósofos y psicólogos durante siglos. No hay una definición única de la motivación, pero generalmente se entiende como el impulso que nos lleva a actuar.

                    
                    </a> 
                    </div>
                    

                </div>

            </div>
            <div className="aprende-container">
                <div className="aprende" style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent:'center',
                    alignItems:'center',
                    padding:'50px',
                    marginTop:'50px',}}>

                <img src={pdf1} alt="" style={{width:'40%',}}/> 
                <img src={pdf2} alt="" style={{width:'40%',}}/>
                <img src={pdf3} alt="" style={{width:'40%',}}/>
                
                </div>
                <div className="aprende" style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent:'center',
                    alignItems:'center',
                    padding:'50px',
                    marginTop:'50px',}}>
                <img src={pdf4} alt="" style={{width:'40%',}}/>
                <img src={pdf5} alt="" style={{width:'40%',}}/>
                <img src={pdf6} alt="" style={{width:'40%',}}/>
                </div>
                <div className="aprende" style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent:'center',
                    alignItems:'center',
                    padding:'50px',
                    marginTop:'50px',}}>
                <img src={pdf7} alt="" style={{width:'40%',}}/>
                <img src={pdf8} alt="" style={{width:'40%',}}/>
                   
                        
          
                
        </div>
            </div>
            <div className="footer-container">
                <div className="footer">

                </div>
            </div>    
            
        </div>
    );
}

export default Aprende;