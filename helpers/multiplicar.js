const fs = require('fs');
const colors = require('colors');

const crearArchivo = async ( base = 5, listar = false, hasta = 10 ) => {
    
    let salida = '';

    try {
        for( let i = 1; i <= hasta; i++) {
            salida += `${ base } * ${ i } = ${ base * i }\n`;
        }

        if ( listar ) {
            console.log('========================'.green);
            console.log(colors.blue(`     Tabla del: ${ base }`));
            console.log('========================'.green);
            console.log(salida);
        }

        await fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida );
        return `tabla-${ base }.txt`;
    } catch( err ) {
        throw error
    }
    
    


}

module.exports = {
    crearArchivo
}