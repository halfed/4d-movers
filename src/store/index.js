import Vue from 'vue';
import Vuex from 'vuex';

//Import individual stores
import mainStore from './store';
//import signage from './modules/signage/store';

//Import global actions
import * as mainActions from './actions';

//Import global mutations
import * as mainMutations from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
  mainActions,
  mainMutations,
  modules: {
    mainStore
  }
});