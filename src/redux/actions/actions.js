import {type_number} from './types'

export  const typeNumber=(number)=>{
    return {
        type:type_number,
        payload:number
    }
}
