import fs from 'fs/promises';

const contenido = `
ATLAS_USER=""
ATLAS_PASSWORD=""
ATLAS_DB="zoologico"
JWT_PRIVATE_KEY= cc
MY_SERVER={"hostname":"127.1.1.1","port":5510}
`;

const archivo = '.env';
const carpeta = 'env';

(async () => {
    try {
        await fs.mkdirSync(`./${carpeta}`,{recursive:true});
        await fs.writeFile(archivo, contenido);
        console.log(`Se ha creado el archivo "${archivo}"`);
    } catch (err) {
        console.error('Error al crear el archivo:', err);
    }
})();
