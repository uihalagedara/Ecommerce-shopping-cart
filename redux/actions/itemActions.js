import * as actionTypes from '../constants/itemsConstants';
import axios from 'axios';

export const getItems = () => async (dispatch) =>{
    try {
        dispatch({type:actionTypes.GET_ITEMS_REQUEST});

        const { data } = await axios.get("/items");

        dispatch({
            type: actionTypes.GET_ITEMS_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: actionTypes.GET_ITEM_DETAILS_FAIL,
            payload:error.response && error.response.data.message 
            ? error.response.data.message
            :error.message,
        });
        
    }
};

// getItemDetails to be implemented

export const removeItemDetails = () => (dispatch) =>{
    dispatch({
        type:actionTypes.GET_ITEM_DETAILS_RESET,
    });

};
