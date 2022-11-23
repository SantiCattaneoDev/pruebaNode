const autosImportados = require('./etapaUno')
/* requerir módulo autos */

let concesionaria = {
   autos: autosImportados,
 
   buscarAuto: function (patenteAuto){
      let resultado = null;
      let auto = this.autos.find((el) => el.patente === patenteAuto);
         if(auto){
            return resultado = auto 
      } 
      return resultado
   },

   venderAuto: function (patenteAuto){
      this.autos.map(el =>{
         if(el.patente === patenteAuto && el.vendido === false){
            el.vendido = true
         }
      });
      return this.buscarAuto(patenteAuto);
   }
}

concesionaria.venderAuto('AJP123')