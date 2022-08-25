
function Persona(nombre,peso,altura){
    this.nombre = nombre;
    this.peso =peso;
    this.altura = altura;
    
}
Persona.prototype.saludar =  function saludar(nombre) {
    return `Hola ${nombre}, me llamo ${this.nombre}`;
}
Persona.prototype.bmi =  function bmi(){
    return this.peso/Math.pow(this.altura,2)
}


