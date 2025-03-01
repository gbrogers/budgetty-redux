
// IMPORT THE REDUX FUNCTIONS, MIDDLEWARE, AND REDUCERS THAT WILL BE USED TO CREATE A STORE
import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import budgetReducer from './budgetReducer';
import userReducer from './userReducer';


// USE COMBINE REDUCERS TO COMBINE REDUCERS INTO A SINGLE, "ROOT" REDUCER THAT WILL BE USED BY THE STORE. EVENTUALLY YOU MAY HAVE MULTIPLE REDUCERS IN AN APPLICATION, AND THIS STEP HELPS US COMBINE THOSE INTO ONE ROOT REDUCER THAT CAN BE USED TO CREATE A STORE
const rootReducer = combineReducers({
  budget: budgetReducer, 
  user: userReducer
})

// CREATE THE STORE USING THE CREATE STORE FUNCTION. PASS IN THE APPROPRIATE ARGUMENTS.
// YOU ARE EXPORTING IT SO THAT IT CAN BE USED BY THE PROVIDER COMPONENT LATER ON
export default createStore(rootReducer, applyMiddleware(promiseMiddleware));

