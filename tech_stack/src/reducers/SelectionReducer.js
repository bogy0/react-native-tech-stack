/**
 * Created by lendvaib on 19/01/17.
 */
// state = null is for if state is undefine, like in the initial state,
// then state should be null not undefined,
// coz if the state is undefined redux will throw error
export default (state = null, action) => {
	switch (action.type) {
		case 'select_library':
			return action.payload;
		default:
			return state;
	}
};
