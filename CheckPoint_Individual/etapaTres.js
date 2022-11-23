const autosImportados = require('./autos')
/* requerir módulo autos */

let concesionaria = {
   autos: autosImportados,
 
   buscarAuto: function (patenteAuto){
      let auto = this.autos.find((el) => el.patente === patenteAuto);
         if(auto === true){
            return auto
      } else { return null }
   }
}

concesionaria.buscarAuto('APL123')