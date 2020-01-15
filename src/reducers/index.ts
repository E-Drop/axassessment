import { combineReducers } from 'redux';

import gnomes from './gnomeReducer';
import filteredGnomes from './filteredGnomeReducer';
import pagination from './paginationReducer';

export default () => combineReducers({
    gnomes,
    filteredGnomes,
    pagination
});