import { Fragment, useState } from 'react'
import { PizzaOrder } from './useEffectPractica/PizzaOrder'
import './App.css'

export const AppUseEffect = () => {
const [toggle, setToggle] = useState(true);
  
return (
    <Fragment>
        <button onClick={() => setToggle(prevToggle => !prevToggle)}>Cancelar Pedido</button>
        {toggle && (<PizzaOrder />) }
    </Fragment>
  )
}

// export default AppUseEffect;