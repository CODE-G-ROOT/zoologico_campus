import fs from 'fs/promises';

const contenido = `
ATLAS_USER="JuanDev856"
ATLAS_PASSWORD="juan856"
ATLAS_DB="zoologico"
JWT_PRIVATE_KEY="cc"
MY_SERVER={"hostname":"127.1.1.1","port":5510}
`;

const archivo = '.env';

(async () => {
    try {
        await fs.writeFile(archivo, contenido);
        console.log(`Se ha creado el archivo "${archivo}"`);
        console.warn("No te olvides de agregar tus credenciales en el archivo .env\n");
    } catch (err) {
        console.error('Error al crear el archivo:', err);
    }
})();