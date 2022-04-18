class MiddlewareContainer {
    constructor(objeto) {
        this.middlewares = [];
        this.objeto = objeto;       
        this.req = {}; 

        // añadir funciones
        const prototype = Object.getPrototypeOf(this.objeto);
        const propertyNames = Object.getOwnPropertyNames(prototype);
        for (let property of propertyNames) {
            if(property !== "constructor") {
                this[property] = (args) => {
                    this.req = {...args};
                    // ejecución de middlewares
                    for (let middleware of this.middlewares){
                        this.req = middleware.call(this, this.req);
                    }
                    // ejecución función
                    return prototype[property].call(this, this.req);
                }
            }
        }

    }       
  
    use (funcion) {
        this.middlewares.push(funcion);
    }    
}

module.exports.MiddlewareContainer = MiddlewareContainer;