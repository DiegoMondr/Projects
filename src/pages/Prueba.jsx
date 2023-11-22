import React, { useState, useEffect} from 'react';
import ParticlesBackground from '../components/ParticlesBackground';

const Pregunta = ({ pregunta, opciones, handleRespuesta }) => {
    return (
        <div className='bodyprueba'>
            <ParticlesBackground/>
            <h1 style={{
                color: '#F26B1D',
                fontFamily: 'sans-serif',
                fontWeight: 'bold',
                fontSize: '3rem',
                textAlign: 'center',
                padding: '20px',


            }}>Evaluación de Motivación Académica</h1>
            <div className='preguntas'>
                <p>{pregunta}</p>
                <div>
                    {opciones.map((opcion, index) => (
                        <label key={index}>
                            <input
                                type="radio"
                                name={pregunta}
                                value={opcion}
                                onChange={(e) => handleRespuesta(pregunta, e.target.value)}
                            />
                            {opcion}
                        </label>

                        
                    ))}
                    <br/>
                </div>
            </div>
        </div>
    );
};


const Prueba = () => {
    const preguntas = [
        {
            pregunta: '¿Qué tan emocionado/a estás por aprender cosas nuevas en tu área de estudio?',
            opciones: [
                'Muy emocionado/a',
                'Algo emocionado/a',
                'Neutral',
                'Poco emocionado/a',
                'Nada emocionado/a'
            ]
        },
        {
            pregunta: '¿Con qué frecuencia te sientes motivado/a para estudiar o completar tus tareas académicas?',
            opciones: [
                'Siempre',
                'Con frecuencia',
                'A veces',
                'Raramente',
                'Nunca'
            ]
        },
        {
            pregunta: '¿Cómo percibes el nivel de desafío de tus actividades académicas actuales?',
            opciones: [
                'Muy desafiantes',
                'Moderadamente desafiantes',
                'Ni fáciles ni difíciles',
                'Poco desafiantes',
                'Nada desafiantes'
            ]
        },
        {
            pregunta: '¿Qué tan importante es para ti obtener buenas calificaciones en tus cursos?',
            opciones: [
                'Muy importante',
                'Importante',
                'Neutral',
                'Poco importante',
                'Nada importante'
            ]
        },
        {
            pregunta: '¿Qué tan organizado/a te sientes en tus métodos de estudio y planificación?',
            opciones: [
                'Muy organizado/a',
                'Moderadamente organizado/a',
                'Ni organizado/a ni desorganizado/a',
                'Poco organizado/a',
                'Nada organizado/a'
            ]
        },
        {
            pregunta: '¿Te sientes motivado/a para participar activamente en clases y discusiones?',
            opciones: [
                'Siempre',
                'Con frecuencia',
                'A veces',
                'Raramente',
                'Nunca'
            ]
        },
        {
            pregunta: '¿Cómo valoras tu nivel de persistencia cuando enfrentas dificultades en tus estudios?',
            opciones: [
                'Muy persistente',
                'Moderadamente persistente',
                'Ni persistente ni renuente',
                'Poco persistente',
                'Nada persistente'
            ]
        },
        {
            pregunta: '¿Sientes que tienes un propósito claro y definido en tu educación actual?',
            opciones: [
                'Totalmente claro y definido',
                'Moderadamente claro y definido',
                'Más o menos claro',
                'Poco claro',
                'Nada claro'
            ]
        },
        {
            pregunta: '¿Qué tanto disfrutas la realización de proyectos o trabajos relacionados con tus estudios?',
            opciones: [
                'Mucho disfrute',
                'Algo de disfrute',
                'Neutral',
                'Poco disfrute',
                'Nada de disfrute'
            ]
        },
        {
            pregunta: '¿Qué tan autónomo/a te sientes en tu proceso de aprendizaje?',
            opciones: [
                'Muy autónomo/a',
                'Moderadamente autónomo/a',
                'Ni autónomo/a ni dependiente',
                'Poco autónomo/a',
                'Nada autónomo/a'
            ]
        },
        {
            pregunta: '¿Cuánto crees que el logro académico impactará en tus metas a largo plazo?',
            opciones: [
                'Un impacto significativo',
                'Algo de impacto',
                'Neutral',
                'Poco impacto',
                'Ningún impacto'
            ]
        },
        {
            pregunta: '¿Qué tan interesado/a estás en aplicar lo que aprendes en tu vida diaria o futura carrera?',
            opciones: [
                'Muy interesado/a',
                'Interesado/a',
                'Neutral',
                'Poco interesado/a',
                'Nada interesado/a'
            ]
        }
    ];

    const [respuestas, setRespuestas] = useState({});
    const [preguntaActual, setPreguntaActual] = useState(0);
    const [calificacion, setCalificacion] = useState('');
    const [testCompleto, setTestCompleto] = useState(false);

    const handleRespuesta = (pregunta, respuesta) => {
        setRespuestas({
            ...respuestas,
            [pregunta]: respuesta
        });

        // Pasar a la siguiente pregunta
        if (preguntaActual < preguntas.length - 1) {
            setPreguntaActual(preguntaActual + 1);
        } else {
            setTestCompleto(true);
        }
    };

    useEffect(() => {
        // Evaluar las respuestas recopiladas
        const respuestasFavorables = Object.values(respuestas).filter(
            (respuesta) =>
                respuesta === 'Muy emocionado/a' ||
                respuesta === 'Siempre' ||
                respuesta === 'Muy desafiantes' /* y otras respuestas favorables */
        );

        // Determinar la calificación
        if (respuestasFavorables.length >= 8) {
            setCalificacion('Muy bien. Estás motivado/a.');
        } else {
            setCalificacion('¿Necesitas ayuda?');
        }
    }, [respuestas]);

    const reiniciarTest = () => {
        setRespuestas({});
        setPreguntaActual(0);
        setCalificacion('');
        setTestCompleto(false);
    };

    return (
        <div className='respuestas'style={{
            backgroundColor: 'rgba(255, 255, 255, 0.6)',
            height:'40%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            fontFamily: 'sans-serif',
            fontSize:'2.5rem',
            fontWeight: 'bold',
            textAlign: 'center',
            padding: '20px',
            borderRadius: '20px',
        }}>
            
            {testCompleto ? (
                <div>
                    <h3>Respuestas:</h3>
                    <pre>{JSON.stringify(respuestas, null, 2)}</pre>
                    <h3>Calificación:</h3>
                    <p>{calificacion}</p>
                    <button onClick={reiniciarTest}>Reiniciar Test</button>
                </div>
            ) : (
                <Pregunta
                    pregunta={preguntas[preguntaActual].pregunta} 
                    opciones={preguntas[preguntaActual].opciones}
                    handleRespuesta={handleRespuesta}
                />
            )}
        </div>
    );
};

export default Prueba;
