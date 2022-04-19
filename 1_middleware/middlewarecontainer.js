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
                   
                    /* EJECUCIÓN MIDDLEWARES OLD
                    for (let middleware of this.middlewares){
                        middleware.call(this, this.req);
                    }*/
                    
                    // Ejecución 1er middleware
                    this.ejecutarMiddleware(0);

                    // ejecución función
                    return prototype[property].call(this, this.req);
                }
            }
        }
    }    
    ejecutarMiddleware(index) {
        if (index < (this.middlewares.length-1)) {
            this.middlewares[index].call(this, this.req, () => this.ejecutarMiddleware(index+1));
        } else if (index = (this.middlewares.length-1)) { // caso de que sea el último
            this.middlewares[index].call(this, this.req, () => {});
        }       
    }   
  
    use (funcion) {
        this.middlewares.push(funcion);
    }    
}

module.exports.MiddlewareContainer = MiddlewareContainer;