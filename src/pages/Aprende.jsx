import React from "react";
import Fondo from "../assets/Index.png";
import ParticlesBackground from '../components/ParticlesBackground';





const Aprende = () => {
    const pdfURL = 'https://drive.google.com/file/d/1PgoyCx315cpmXOJZtqToHP2V5Uu-o4aT/view?usp=sharing';
    return(
        
        <div className="aprendeBody" style={{

            width:'85%',
            height:'200%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent:'flex-start',
            padding:'50px',
            marginTop:'1200px',

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
                    flexDirection: 'column',
                    justifyContent:'center',
                    alignItems:'center',
                    padding:'50px',
                    marginTop:'50px',

                }}>
          <div className="PDF" style={{ width: '100%', height: '500px' }}>
            <iframe
              title="PDFViewer"
              src={`https://docs.google.com/viewer?url=${pdfURL}&embedded=true`}
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                paddingTop:'25px'
              
              }}
              
            ></iframe>
          </div>
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