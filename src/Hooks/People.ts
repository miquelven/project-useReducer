import { useReducer } from "react"
import { v4 as  uuidv4} from "uuid"

    interface TypePeople{
        name: string,
        id: string
        
    }

    interface TypeAction{
        type: string
        payload?:{
            name?: string,
            id?: string
        }
    }

    let initialValue:TypePeople[] = []

    const reducer = (state: TypePeople[], action: TypeAction) =>{
        switch(action.type){
            case 'add':

                if(action.payload?.name){
                    const newState = [...state]
                    newState.push({
                        id: uuidv4(),
                        name: action.payload.name
                    })
                    return newState
                }
                break;
            case 'del':
                let newStateDel = [...state];
                newStateDel = newStateDel.filter((item)=> item.id !== action.payload?.id)
                return newStateDel;
                break;
            case 'order':
                let newStateOrder = [...state];
                newStateOrder = newStateOrder.sort((a, b)=> a.name > b.name ? 1 : -1)
                return newStateOrder;
                break;
        }

        return state;
    }

export const AddPeople = () =>{
    return useReducer(reducer, initialValue);

}