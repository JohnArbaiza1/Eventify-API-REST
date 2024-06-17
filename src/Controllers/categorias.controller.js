//Controladores de la API REST para las categorias

//Controlador encargado de mostrar los datos de las categorias
export const getCategorias = async(req,res) =>{
    try {
        res.json({
            message:'Mostrando Categorias disponibles'
        })
        
    } catch (error) {
        res.status(500).json({
            message: 'Algo salio mal'
        })
    }
};

//Controlador encargado de mostrar el dato de una categoria
export const getCategoria = async(req,res) =>{
    try {
        res.json({
            message:'Catgoria Disponible'
        })
        
    } catch (error) {
        res.status(500).json({
            message: 'Algo salio mal'
        })
    }
};