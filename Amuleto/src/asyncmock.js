const misproductos = [
    
        {id: 1, nombre: "Alambre", precio: 3000, img:"../img/alambre.jpg"},
        {id: 2, nombre: "Cuenca", precio: 300, img:"../img/cuenca.jpg"},
        {id: 3, nombre: "Argolla", precio: 200, img:"../img/argolla.jpg"},
        {id: 4, nombre: "Cierre", precio: 800, img:"../img/cierre.jpg"},
        {id: 5, nombre: "Cinta", precio: 1000, img:"../img/cinta.jpg"},
        {id: 6, nombre: "Elastico", precio: 3000, img:"../img/elastico.jpg"},
        {id: 7, nombre: "Papel Afiche", precio: 1200, img:"../img/papelafiche.jpg"},
        {id: 8, nombre: "Cartulina", precio: 700, img:"../img/cartulina.jpg"},
        {id: 9, nombre: "Carpeta Cristal", precio: 1300, img:"../img/carpetacristal.jpg"},
        {id: 10, nombre: "Aguja Crochet", precio: 1000, img:"../img/agujacrochet.jpg"},
        {id: 11, nombre: "Lana LHO", precio: 2500, img:"../img/lanalho.jpg"},
        {id: 12, nombre: "Amigurumi LHO", precio: 3300, img:"../img/amigurumi.jpg"},


];

export const getproductos = () => {
    return new Promise ((resolve) => {
        setTimeout(() => { 
            resolve(misproductos);
        }, 2000);
    });
}                   
