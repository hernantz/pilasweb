define(
  ['require', 'singleton', 'actores/actor', 'mootools'],
  function(require, singleton, actor, mootools){
    /**
     * @extends Actor
     * Representa una cadena de texto.
     *
     *      @example
     *      var saludo = pilas.actores.Texto("Hola mundo", 30, 30);
     *      saludo.rotacion = 30;
     *
     */
    var Texto = new Class({
      Extends: actor.Actor,
      initialize: function(texto, x, y, centro_x, centro_y, escala_x, escala_y, rotacion) {
        this.texto = texto;
        this.nombre = "Texto";
        this.imagen = new Text(this.texto, "22px arial");
        this.imagen.textBaseline = "top";
        this.inicializar(x, y, centro_x, centro_y, escala_x, escala_y, rotacion);
        pilas.agregar_actor(this);
      }
    });

    /**
     * @extends Actor
     */
    var Aceituna = new Class({
      Extends: actor.Actor,
      initialize: function(x, y, centro_x, centro_y, escala_x, escala_y, rotacion) {
        this.parent("sin_imagen.png", x, y, centro_x, centro_y, escala_x, escala_y, rotacion);
        this.nombre = "Aceituna";
        this.imagen = this.cargar_imagen("aceituna.png");
        this.centro_x = 18;
        this.centro_y = 18;
      },
      actualizar: function(){
      },
      click: function(){
        this.eliminar();
      }
    });

    return {
      Actor: actor.Actor,
      Aceituna: Aceituna,
      Texto: Texto
    };
  }
);
