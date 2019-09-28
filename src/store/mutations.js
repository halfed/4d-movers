export const changeSubmitStatus = (state, response) => {
	state.submitStatus = response;
}

export const changeStatusMessage = (state, response) => {
	state.returnMessage = response;
}