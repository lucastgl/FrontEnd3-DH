import React, {useState, useEffect} from 'react';


export const PizzaOrder = () => {
  
    useEffect(()=>{
        
        setTimeout(function(){
            console.log("Se generó la orden");
        }, 2000);

        return() =>{
            console.log("Se canceló el pedido")
        }
    },[])

    console.log("a ver cuando aparezco")
    return (
        <div>
            <h2>Su pedido</h2>
            <p>- Pizza Armenia</p>
        </div>
  )
}
