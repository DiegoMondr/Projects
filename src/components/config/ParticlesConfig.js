const fs = require('fs');

const data = {
    "particles": {
        // aquí va la configuración de las partículas
    }
};

const jsonData = JSON.stringify(data);

fs.writeFile('/c:/Users/bigni/Documentos/Projects/topico2_p3/src/components/config/particles.json', jsonData, (err) => {
    if (err) throw err;
    console.log('El archivo JSON ha sido creado exitosamente.');
});
