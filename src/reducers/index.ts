import { combineReducers } from 'redux';

import gnomes from './gnomeReducer';

// event that i dont need more than one reducer i do it in that way because 
// it's the most common way to do it and allows me to use more reducers if i need it

export default () => combineReducers({
    gnomes
});