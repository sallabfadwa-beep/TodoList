import { INCREMENT, DECREMENT, RESET, ADD }
from '../actionTypes';

export const increment = () => {
    return { type: INCREMENT };
};

export const decrement = () => {
    return { type: DECREMENT };
};

export const reset = () => {
    return { type: RESET };
};

export const add = (nombre) => {
    return { type: ADD, payload: nombre };
};