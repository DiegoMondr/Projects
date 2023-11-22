import React from 'react';
import BlogEntry from './BlogEntry';

const Blog = () => {
  // Simulando un array de entradas de blog
  const blogEntries = [
    {
        title: 'Autonomía y Motivación Intrínseca',
        content: 'La autonomía se refiere a la sensación de control y elección sobre nuestras acciones. La motivación intrínseca surge cuando estamos motivados por el placer y la satisfacción interna que obtenemos al realizar una actividad en lugar de depender de recompensas externas. Este tema podría explorar:',
        points: [
            'Factores que Fomentan la Autonomía: Discutir la importancia de permitir a las personas tomar decisiones y controlar su propio trabajo. Destacar cómo la autonomía puede aumentar la satisfacción laboral y la motivación intrínseca.',
            'Entornos de Trabajo Autónomos: Analizar cómo los entornos de trabajo que fomentan la autonomía pueden impulsar la creatividad, la innovación y la auto-superación.',
            'Equilibrio entre Estructura y Autonomía: Explorar cómo encontrar un equilibrio entre proporcionar guía y permitir la libertad puede optimizar la motivación intrínseca y la realización personal.'
          ]
      },
      {
        title: 'Metas y Motivación',
        content: 'Las metas son fundamentales en la motivación humana, ya que proporcionan dirección y propósito. Este tema podría abordar:',
        points: [
          'Tipos de Metas: Explorar la diferencia entre metas a corto y largo plazo, metas específicas y generales, y cómo cada tipo puede influir en la motivación.',
          'Efectividad de las Metas Desafiantes: Discutir cómo las metas desafiantes pero alcanzables pueden aumentar la motivación y la persistencia.',
          'Teoría de la Fijación de Metas: Introducir la teoría de Locke y Latham, que explora cómo establecer metas claras y proporcionar retroalimentación puede mejorar el rendimiento y la motivación.'
        ]
      },
      {
        title: 'Motivación en el Ambiente Laboral',
        content: 'Este tema se centra en la motivación de los empleados en el entorno laboral y cómo los factores organizacionales influyen en ella:',
        points: [
          'Reconocimiento y Recompensa: Explorar cómo el reconocimiento y las recompensas afectan la motivación y la satisfacción laboral.',
          'Cultura Organizacional y Clima Laboral: Analizar cómo la cultura de una empresa y el ambiente en el lugar de trabajo influyen en la motivación y el compromiso de los empleados.',
          'Liderazgo y Motivación: Discutir cómo un liderazgo efectivo puede inspirar, motivar y empoderar a los empleados para alcanzar sus objetivos y contribuir al éxito de la organización.'
        ]
      }
    
  ];

  return (
    <div className="blog-page" style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'flex-start',
        padding:'50px',
        marginTop:'50px',
        backgroundColor:'#F2F2F2',
        borderRadius:'25px',
        width:'70%',
    }}>
      <h1 style={{
        fontFamily: 'sans-serif',
        fontSize:'4rem',
        fontWeight: 'bold',
        textAlign: 'start',
        padding: '20px',
        
      }}>Blog</h1>
      <div className="blog-entries">
      {blogEntries.map((entry, index) => (
          <BlogEntry
            key={index}
            title={entry.title}
            content={entry.content}
            points={entry.points}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;