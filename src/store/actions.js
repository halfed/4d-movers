import axios from 'axios';
const urlBase = 'https://4dlocalmovers.com/cgi-bin/getFormData.php';
const url = {
  postToForm: urlBase + '/form'
}
export const postFormdata = ({commit}, {firstName, lastName, email, phone, addressPickUp, addressPickUp2, picUpCity, pickUpState, pickUpZip, addressDropOff, addressDropOff2, dropOffCity, dropOffState, dropOffZip, startDate, hour, minute, dayType, squareFootage, inventory, questions, terms }) => {
	commit('changeSubmitStatus', 'PENDING');
    axios.post(url.postToForm, {
    	firstName: firstName, 
    	lastName: lastName, 
    	email: email, 
    	phone: phone, 
    	addressPickUp: addressPickUp, 
    	addressPickUp2: addressPickUp2, 
    	picUpCity: picUpCity,
    	pickUpState: pickUpState, 
    	pickUpZip: pickUpZip, 
    	addressDropOff: addressDropOff, 
    	addressDropOff2: addressDropOff2, 
    	dropOffCity: dropOffCity, 
    	dropOffState: dropOffState, 
    	dropOffZip: dropOffZip, 
    	startDate: startDate, 
    	hour: hour, 
    	minute: minute, 
    	dayType: dayType, 
    	squareFootage: squareFootage, 
    	inventory: inventory, 
    	questions: questions, 
    	terms: terms
    })
  	.then(function (response) {
        commit('changeSubmitStatus', 'OK');
    	console.log(response);

  	})
  	.catch(function (error) {
        commit('changeSubmitStatus', 'ERR');
        commit('changeStatusMessage', error);
    	console.log(error);
  	});
}