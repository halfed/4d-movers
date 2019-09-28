import * as actions from "./actions";
import * as mutations from "./mutations";
import * as getters from "./getters"

//TODO add zoneid here instead of in module stores*/
//WHATEVER PROPERTIES WE ADD TO THE STORE WE NEED TO ADD THEM
//TO THE MUTATION METHOD THAT RESETS ALL PROPERTIES.
export const getInitialState = () => {
  return {
  	submitStatus: null,
  	returnMessage: ''
  }
}

const state = getInitialState();

export default {
  state,
  actions,
  mutations,
  getters
}