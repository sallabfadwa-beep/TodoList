import React, { useState } from 'react';
import { increment, decrement, reset, add }
from './actions/counterActions';

import { useDispatch, useSelector } from 'react-redux';

function Counter() {

    const compteur = useSelector(state => state.compteur);

    const dispatch = useDispatch();

    const [pas, setPas] = useState(1);

    return (
        <div>
            <h3>Compteur : {compteur}</h3>

            <input
                type="number"
                value={pas}
                onChange={(e) => setPas(Number(e.target.value))}
            />

            <button onClick={() => dispatch(increment())}>+</button>

            <button onClick={() => dispatch(decrement())}>-</button>

            <button onClick={() => dispatch(reset())}>Reset</button>

            <button onClick={() => dispatch(add(5))}>+5</button>

            <button onClick={() => dispatch(add(10))}>+10</button>

            <button onClick={() => dispatch(add(Number(pas)))}>
                +{pas}
            </button>
        </div>
    );
}

export default Counter;