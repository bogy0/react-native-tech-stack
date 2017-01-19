/**
 * Created by lendvaib on 19/01/17.
 * Action Creator
 */
export const selectLibrary = (libraryId) => {
	return {
		type: 'select_library',
		payload: libraryId
	};
};
