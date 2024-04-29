function sumarHastaNConBreak(n) {
   // La función recibe un numero n por argumento.
   // Devuelve la suma de todos los números desde 1 hasta n.
   // Si la suma supera a 100, detén el bucle usando break.
   // Tu código:

   var acum = 0;

   for (var i = 1; i <= n; i++) {
      if (acum > 100) break;
      acum = acum + i;
   }
   return acum;
}

module.exports = sumarHastaNConBreak;
