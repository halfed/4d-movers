import axios from 'axios';
const urlBase = 'https://4dlocalmovers.com/cgi-bin/getFormData.php';
const url = {
  postToForm: urlBase + '/form'
}
//const urlBase = 'http://localhost:8080/scripts/getFormData.php';
export const postFormdata = ({commit}, {firstName, lastName, email, phone, addressPickUp, addressPickUp2, picUpCity, pickUpState, pickUpZip, addressDropOff, addressDropOff2, dropOffCity, dropOffState, dropOffZip, startDate, hour, minute, dayType, squareFootage, inventory, questions, terms }) => {
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
    	console.log(response);
  	})
  	.catch(function (error) {
    	console.log(error);
  	});
}