export interface IPokemon {
    name: string
    id: number
    sprites: {
        versions: { 
        ["generation-v"]:{
            ["black-white"]: {
                animated: {
                   front_default: string
                }
            }
        }
     }
    }
}