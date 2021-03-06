import * as actionTypes from '../actions/actionsTypes';
import { updateObject } from '../utilily/utility';

const initialState = {
    orders: [],
    loading: false,
    purchased: false
};

const purcharBurgerSuccess = (state, action)=>{
    const newOrder = updateObject(action.orderData, {
        id: action.orderId,
        purchased: true
    });
    return updateObject(state, {
        loading: false,
        orders: state.orders.concat(newOrder)
    });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PURCHASE_INIT:
            return updateObject(state, { purchased: false });
        case actionTypes.PURCHASE_BURGER_START:
            return updateObject(state, { loading: true });
        case actionTypes.PURCHASE_BURGER_SUCCESS:
            return purcharBurgerSuccess(state, action);
        case actionTypes.PURCHASE_BURGER_FAIL:
            return updateObject(state, { loading: false });
        case actionTypes.FETCH_ORDERS_START:
            return updateObject(state, { loading: true });
        case actionTypes.FETCH_ORDERS_SUCCESS:
            return updateObject(state, { orders: action.orders,
                loading: false });
        case actionTypes.FETCH_ORDERS_FAIL:
            return updateObject(state, {loading: false });
        default:
            return state;
    }
};

export default reducer;