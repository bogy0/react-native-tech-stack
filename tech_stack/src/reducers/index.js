/**
 * Created by lendvaib on 18/01/17.
 */
import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
	libraries: LibraryReducer,
	selectedLibraryId: SelectionReducer
});
