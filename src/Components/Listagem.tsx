import { ChangeEvent, useState } from "react";
import { AddPeople } from "../Hooks/People"


export const ListPeople = ()=>{

    let [txt, setTxt] = useState('');
    const [people, dispatch] = AddPeople();

    const HandleInputName = (e: ChangeEvent<HTMLInputElement>) =>{
        setTxt(e.target.value)
    }   

    const DelPeople = (id:string) =>{
        dispatch({
            type: "del",
            payload:{
                id: id
            }
        })
    }


    return (
        <div>
            <input type="text" placeholder="Digite seu nome" onChange={HandleInputName} value={txt}/>
            <br />
            <button onClick={()=>dispatch({
                type: 'add',
                payload:{
                    name: txt
                }
            })}>ADICIONAR!</button>

            <ul>
                {people.map((item, key)=>(
                    <div key={key}>
                        <li>{item.name}</li>
                        <p onClick={()=>DelPeople(item.id)}>[ DELETAR ]</p>
                    </div>
                ))}
            </ul>
            <button onClick={()=>dispatch({
                type: 'order'
            })}>Ordernar</button>
        </div>
    )
}

export default ListPeople;