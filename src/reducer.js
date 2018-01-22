import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux'
const initialState = {
    curUser: {
        isLogined: false,
        userInfo: null
    },
    prop1: {},
    prop2: {}
};

//curUserName reducer
function curUserName(_curUser=initialState.curUser, action) {
    switch (action.type) {
        case 'login': {
            return {
                ..._curUser,
                ...action.value,
            };
        }
        default:
            return _curUser;
    }

}

//prop1 reducer
function setProp1Value(_prop1=initialState.prop1, action) {
    switch (action.type) {
        case 'setProp1Value': {
            return {
                ..._prop1,
                ...action.value
            };
        }
        default:
            return _prop1;
    }

}

function setProp2Value(_prop2=initialState.prop2, action) {
    switch (action.type) {
        case 'setProp1Value': {
            return {
                ..._prop2,
                ...action.value
            };
        }
        default:
            return _prop2;
    }
}


export default  combineReducers( {
    curUser: curUserName,
    prop1: setProp1Value,
    prop2: setProp2Value,
    test:1,
    routing:routerReducer,
} )


//combineReducers与下面这个写法等价
/*export default function(state=initialState,action){
	return{
		curUser:curUserName(state,curUser,action),
		prop1:setProp1Value(state.prop1,action),
		prop2:setProp2Value(state.prop2,action),
	}
}*/