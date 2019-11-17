<template>
	<div>
		<page-body>
			<h3>Request A Quote</h3>
		</page-body>
		<div class="grid-x grid-padding-x">
			<div class="cell small-12">
				<form method="post" class="quote" id="quote" v-on:submit.prevent="submitForm">
					<div class="grid-x grid-margin-x">
						<div class="cell small-12 medium-5" :class="{'input-error': $v.firstName.$error}">
							<label for="firstName">First Name</label>
							<input type="text" name="firstName" class="first-name" id="firstName" v-model="firstName" />
							<div class="form-error" v-if="!this.$v.firstName.required">First Name Required</div>
						</div>
						<div class="cell small-12 medium-5" :class="{'input-error': $v.lastName.$error}">
							<label for="lastName">Last Name</label>
							<input type="text" name="lastName" id="lastName" class="last-name" v-model="lastName" />
							<div class="form-error" v-if="!this.$v.lastName.required">Last Name Required</div>
						</div>
					</div>

					<div class="grid-x grid-margin-x">
						<div class="cell small-12 large-5" :class="{'input-error': $v.email.$error}">
							<label for="email">Email</label>
							<input type="email" name="email" id="email" class="email" v-model="email" />
							<div class="form-error" v-if="!this.$v.email.required">Email Required</div>
							<div class="form-error" v-if="!this.$v.email.email">Valid Email Required</div>
						</div>
						<div class="cell small-12 large-5" :class="{'input-error': $v.phone.$error}">
							<label for="phone">Phone</label>
							<input type="text" name="phone" id="phone" class="phone" v-model="phone" />
							<div class="form-error" v-if="!this.$v.phone.required">Phone Required</div>
						</div>
					</div>

					<div class="grid-x grid-margin-x">
						<div class="cell large-6 small-12"> 
							<div :class="{'input-error': $v.addressPickUp.$error}">
								<label for="addressPickUp">Address (Pick Up)</label>
								<input type="text" name="addressPickUp" id="start-address" class="start-address" v-model="addressPickUp" />
								<div class="form-error" v-if="!this.$v.addressPickUp.required">Address Required</div>
							</div>

							<div>
								<label for="addressPickUp2">Address 2 (Pick Up)</label>
								<input type="text" name="addressPickUp2" id="start-address2" class="start-address2" v-model="addressPickUp2" />
							</div>
						</div>

						<div class="cell large-4 small-12">
							<div class="grid-x grid-margin-x">
								<div class="cell small-4" :class="{'input-error': $v.picUpCity.$error}">
									<label for="picUpCity">City</label>
									<input type="text" name="picUpCity" id="start-city" class="start-city" v-model="picUpCity" />
									<div class="form-error" v-if="!this.$v.picUpCity.required">City Required</div>
								</div>
								<div class="cell small-4" :class="{'input-error': $v.pickUpStateSelected.$error}">
									<label for="pickUpState">State</label>
									<select name="pickUpState" v-model="pickUpStateSelected">
										<option disabled value="">Select</option>
										<option v-for="state in pickUpState.states" v-bind:value="state.id" v-bind:key="state.id"> {{ state.name }} </option>
									</select>
									<div class="form-error" v-if="!this.$v.pickUpStateSelected.required">State Required</div>
								</div>
								<div class="cell small-4" :class="{'input-error': $v.pickUpZip.$error}">
									<label for="pickUpZip">Zip</label>
									<input type="text" name="pickUpZip" id="start-zip" class="start-zip" v-model="pickUpZip" />
									<div class="form-error" v-if="!this.$v.pickUpZip.required">Zip Required</div>
								</div>
							</div>
						</div>
					</div>

					<div class="grid-x grid-margin-x">
						<div class="cell large-6 small-12">
							<div :class="{'input-error': $v.addressDropOff.$error}">
								<label for="addressDropOff">Address (Drop Off)</label>
								<input type="text" name="addressDropOff" id="end-address" class="end-address" v-model="addressDropOff" />
								<div class="form-error" v-if="!this.$v.addressDropOff.required">Address Required</div>
							</div>
							<div>
								<label for="addressDropOff2">Address 2 (Drop Off)</label>
								<input type="text" name="addressDropOff2" id="end-address2" class="end-address2" v-model="addressDropOff2" />
							</div>
						</div>

						<div class="cell large-4 small-12">
							<div class="grid-x grid-margin-x">
								<div class="cell small-4" :class="{'input-error': $v.dropOffCity.$error}">
									<label for="dropOffCity">City</label>
									<input type="text" name="dropOffCity" id="end-city" class="end-city" v-model="dropOffCity" />
									<div class="form-error" v-if="!this.$v.dropOffCity.required">City Required</div>
								</div>
								<div class="cell small-4" :class="{'input-error': $v.dropOffStateSelected.$error}">
									<label for="dropOffState">State
									<select name="dropOffState" v-model="dropOffStateSelected">
										<option disabled value="">Select</option>
										<option v-for="state in dropOffState.states" v-bind:value="state.id" v-bind:key="state.id"> {{ state.name }} </option>
									</select>
									</label>
									<div class="form-error" v-if="!this.$v.dropOffStateSelected.required">State Required</div>
								</div>
								<div class="cell small-4" :class="{'input-error': $v.dropOffZip.$error}">
									<label for="dropOffZip">Zip</label>
									<input type="text" name="dropOffZip" id="end-zip" class="end-zip" v-model="dropOffZip" />
									<div class="form-error" v-if="!this.$v.dropOffZip.required">Zip Required</div>
								</div>
							</div>
						</div>
					</div>

					<div class="grid-x grid-margin-x">
						<div class="cell large-4 small-12" :class="{'input-error': $v.startDate.$error}">
							<label for="startDate">Start Date</label>
							<input type="hidden" name="startDateHidden" id="start-date-hidden" class="start-date-hidden" v-model="startDate" />
							
							<vc-date-picker 
								:mode='mode' 
								v-model='startDate'
								:input-props='{
								    name: "startDate",
								    id: "startDate"
								}'
							/>

							<div class="form-error-date form-error" v-if="!this.$v.startDate.required">Date Required</div>
						</div>
						<div class="cell large-6 small-12">
							<div class="grid-x grid-margin-x">
								<div class="cell large-2" :class="{'input-error': $v.hourSelected.$error}">
									<label for="hour">Hour</label>
									<select name="hour" v-model="hourSelected">
										<option disabled value="">HH</option>
										<option v-for="hour in hours" v-bind:value="hour.id" v-bind:key="hour.id"> {{ hour.value }} </option>
									</select>
									<div class="form-error" v-if="!this.$v.hourSelected.required">Hour Required</div>
								</div>
								<div class="cell large-2" :class="{'input-error': $v.minuteSelected.$error}">
									<label for="minute">Minute</label>
									<select name="minute" v-model="minuteSelected">
										<option disabled value="">MM</option>
										<option v-for="minute in minutes" v-bind:value="minute.id" v-bind:key="minute.id"> {{ minute.value }} </option>
									</select>
									<div class="form-error" v-if="!this.$v.minuteSelected.required">Minute Required</div>
								</div>
								<div class="cell large-2" :class="{'input-error': $v.dayTypeSelected.$error}">
									<label for="dayType">AM/PM</label>
									<select name="dayType" v-model="dayTypeSelected">
										<option disabled value="">Type</option>
										<option v-for="dayType in dayTypes" v-bind:value="dayType.value" v-bind:key="dayType.id"> {{ dayType.value }} </option>
									</select>
									<div class="form-error" v-if="!this.$v.dayTypeSelected.required">Type Required</div>
								</div>
							</div>
						</div>
					</div>
					<div class="grid-x grid-margin-x">
						<div class="cell large-6 small-12" :class="{'input-error': $v.squareFootage.$error}">
							<label for="squareFootage">Square Footage (Current Residence)</label>
							<input type="text" name="squareFootage" v-model="squareFootage" />
							<div class="form-error" v-if="!this.$v.squareFootage.required">Required</div>
						</div>
					</div>
					<div :class="{'input-error': $v.inventory.$error}">
						<label for="inventory">Inventory/List</label>
						<textarea name="inventory" id="inventory" class="inventory" v-model="inventory"></textarea>
						<div class="form-error" v-if="!this.$v.inventory.required">Required</div>
					</div>

					<div :class="{'input-error': $v.questions.$error}">
						<label for="questions">Questions Or Concerns</label>
						<textarea name="questions" id="questions" class="questions" v-model="questions"></textarea>
						<div class="form-error" v-if="!this.$v.questions.required">Required</div>
					</div>
					<div class="terms" :class="{'input-error': $v.terms.$error}">
						<input type="checkbox" name="terms" id="terms" v-model="terms" />
						<span>I agree to the <a href="https://app.termly.io/document/privacy-policy/46d47efe-0a29-4bc8-8ee1-35030bc5db76" target="_blank">Privacy Policy</a></span>
						<div class="form-error" v-if="!this.$v.terms.required">Required</div>
					</div>
					<button type="submit" class="button" :disabled="disableButton">Submit</button>
					<p class="alert-message" v-if="displayMessage === 'ERROR'">Please fill the form correctly.</p>
  					<p class="" v-if="displayMessage === 'OK'">Thanks for your submission! We will contact you to set up your move.</p>
  					<p class="" v-if="displayMessage === 'PENDING'">Sending...</p>
  					<p class="" v-if="displayMessage === 'ERR'">{{ errorStatus }}</p>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
	import { required, minLength, between, email } from 'vuelidate/lib/validators';
	import Vue from 'vue';
	import VCalendar from 'v-calendar';
	import {mapActions} from 'vuex';
	// Use v-calendar & v-date-picker components
	Vue.use(VCalendar, {
	  componentPrefix: 'vc',  // Use <vc-calendar /> instead of <v-calendar />
	 // ...,                // ...other defaults
	});
	export default {
		name: 'quote',
		data() {
			return {
				mode: 'single',
          		inputValue: '',
				firstName: '',
				lastName: '',
				email: '',
				phone: '',
				addressPickUp: '',
				addressPickUp2: '',
				picUpCity: '',
				pickUpStateSelected: '',
				pickUpState: {
					states: [
						{
							id: 6,
							name: 'Colorado',
							value: 'Colorado'
						},
						{
							id: 9,
							name: 'Florida',
							value: 'Florida'
						}
					]
				},
				pickUpZip: '',
				addressDropOff: '',
				addressDropOff2: '',
				dropOffCity: '',
				dropOffStateSelected: '',
				dropOffState: {
					states: [
						{
							id: 6,
							name: 'Colorado',
							value: 'Colorado'
						},
						{
							id: 9,
							name: 'Florida',
							value: 'Florida'
						}
					]
				},
				dropOffZip: '',
				startDate: null,
				hourSelected: '',
				hours: [
					{
						id: 1,
						name: 'Hour',
						value: '1'
					},
					{
						id: 2,
						name: 'Hour',
						value: '2'
					},
					{
						id: 3,
						name: 'Hour',
						value: '3'
					},
					{
						id: 4,
						name: 'Hour',
						value: '4'
					},
					{
						id: 5,
						name: 'Hour',
						value: '5'
					},
					{
						id: 6,
						name: 'Hour',
						value: '6'
					},
					{
						id: 7,
						name: 'Hour',
						value: '7'
					},
					{
						id: 8,
						name: 'Hour',
						value: '8'
					},
					{
						id: 9,
						name: 'Hour',
						value: '9'
					},
					{
						id: 10,
						name: 'Hour',
						value: '10'
					},
					{
						id: 11,
						name: 'Hour',
						value: '11'
					},
					{
						id: 12,
						name: 'Hour',
						value: '12'
					}
				],
				minuteSelected: '',
				minutes: [
					{
						id: 1,
						name: 'Minute',
						value: '01'
					},
					{
						id: 2,
						name: 'Minute',
						value: '02'
					},
					{
						id: 3,
						name: 'Minute',
						value: '03'
					},
					{
						id: 4,
						name: 'Minute',
						value: '04'
					},
					{
						id: 5,
						name: 'Minute',
						value: '05'
					},
					{
						id: 6,
						name: 'Minute',
						value: '06'
					},
					{
						id: 7,
						name: 'Minute',
						value: '07'
					},
					{
						id: 8,
						name: 'Minute',
						value: '08'
					},
					{
						id: 9,
						name: 'Minute',
						value: '09'
					},
					{
						id: 10,
						name: 'Minute',
						value: '10'
					},
					{
						id: 11,
						name: 'Minute',
						value: '11'
					},
					{
						id: 12,
						name: 'Minute',
						value: '12'
					},
					{
						id: 13,
						name: 'Minute',
						value: '13'
					},
					{
						id: 14,
						name: 'Minute',
						value: '14'
					},
					{
						id: 15,
						name: 'Minute',
						value: '15'
					},
					{
						id: 16,
						name: 'Minute',
						value: '16'
					},
					{
						id: 17,
						name: 'Minute',
						value: '17'
					},
					{
						id: 18,
						name: 'Minute',
						value: '18'
					},
					{
						id: 19,
						name: 'Minute',
						value: '19'
					},
					{
						id: 20,
						name: 'Minute',
						value: '20'
					},
					{
						id: 21,
						name: 'Minute',
						value: '21'
					},
					{
						id: 22,
						name: 'Minute',
						value: '22'
					},
					{
						id: 23,
						name: 'Minute',
						value: '23'
					},
					{
						id: 24,
						name: 'Minute',
						value: '24'
					},
					{
						id: 25,
						name: 'Minute',
						value: '25'
					},
					{
						id: 26,
						name: 'Minute',
						value: '26'
					},
					{
						id: 27,
						name: 'Minute',
						value: '27'
					},
					{
						id: 28,
						name: 'Minute',
						value: '28'
					},
					{
						id: 29,
						name: 'Minute',
						value: '29'
					},
					{
						id: 30,
						name: 'Minute',
						value: '30'
					},
					{
						id: 31,
						name: 'Minute',
						value: '31'
					},
					{
						id: 32,
						name: 'Minute',
						value: '32'
					},
					{
						id: 33,
						name: 'Minute',
						value: '33'
					},
					{
						id: 34,
						name: 'Minute',
						value: '34'
					},
					{
						id: 35,
						name: 'Minute',
						value: '35'
					},
					{
						id: 36,
						name: 'Minute',
						value: '36'
					},
					{
						id: 37,
						name: 'Minute',
						value: '37'
					},
					{
						id: 38,
						name: 'Minute',
						value: '38'
					},
					{
						id: 39,
						name: 'Minute',
						value: '39'
					},
					{
						id: 40,
						name: 'Minute',
						value: '40'
					},
					{
						id: 41,
						name: 'Minute',
						value: '41'
					},
					{
						id: 42,
						name: 'Minute',
						value: '42'
					},
					{
						id: 43,
						name: 'Minute',
						value: '43'
					},
					{
						id: 44,
						name: 'Minute',
						value: '44'
					},
					{
						id: 45,
						name: 'Minute',
						value: '45'
					},
					{
						id: 46,
						name: 'Minute',
						value: '46'
					},
					{
						id: 47,
						name: 'Minute',
						value: '47'
					},
					{
						id: 48,
						name: 'Minute',
						value: '48'
					},
					{
						id: 49,
						name: 'Minute',
						value: '49'
					},
					{
						id: 50,
						name: 'Minute',
						value: '50'
					},
					{
						id: 51,
						name: 'Minute',
						value: '51'
					},
					{
						id: 52,
						name: 'Minute',
						value: '52'
					},
					{
						id: 53,
						name: 'Minute',
						value: '53'
					},
					{
						id: 54,
						name: 'Minute',
						value: '54'
					},
					{
						id: 55,
						name: 'Minute',
						value: '55'
					},
					{
						id: 56,
						name: 'Minute',
						value: '56'
					},
					{
						id: 57,
						name: 'Minute',
						value: '57'
					},
					{
						id: 58,
						name: 'Minute',
						value: '58'
					},
					{
						id: 59,
						name: 'Minute',
						value: '59'
					},
					{
						id: 60,
						name: 'Minute',
						value: '60'
					}
				],
				dayTypeSelected: '',
				dayTypes: [
					{
						id: 1,
						value: 'AM'
					},
					{
						id: 2,
						value: 'PM'
					}
				],
				squareFootage: '',
				inventory: '',
				questions: '',
				terms: '',
				disableButton: false,
				payload: {}
			}
		},
		validations: {
	    	firstName: {
	      		required
	    	},
	    	lastName: {
	      		required
	    	},
	    	email: {
	    		required,
	    		email
	    	},
	    	phone: {
	    		required
	    	},
	    	addressPickUp: {
	    		required
	    	},
	    	picUpCity: {
	    		required
	    	},
	    	pickUpStateSelected: {
	    		required
	    	},
	    	pickUpZip: {
	    		required
	    	},
	    	addressDropOff: {
	    		required
	    	},
	    	dropOffCity: {
	    		required
	    	},
	    	dropOffStateSelected: {
	    		required
	    	},
	    	dropOffZip: {
	    		required
	    	},
	    	startDate: {
	    		required
	    	},
	    	hourSelected: {
	    		required
	    	},
	    	minuteSelected: {
	    		required
	    	},
	    	dayTypeSelected: {
	    		required
	    	},
	    	squareFootage: {
	    		required
	    	},
	    	inventory: {
	    		required
	    	},
	    	questions: {
	    		required
	    	},
	    	terms: {
	    		required
	    	}
	  	},
	  	computed: {
	  		displayMessage() {
	  			return this.$store.state.mainStore.submitStatus;
	  		},
	  		errorStatus() {
	  			return this.$store.state.mainStore.returnMessage;
	  		}
	  	},
		methods: {
			...mapActions({
		        postForm: 'postFormdata'
		    }),
			submitForm(event) {
				event.preventDefault();
				this.$v.$touch();

				if (this.$v.$invalid) {
			        this.$store.state.mainStore.submitStatus = 'ERROR'
			    } else {
			        // do your submit logic here
			          	this.payload["firstName"] = this.firstName;
						this.payload["lastName"] = this.lastName;
						this.payload["email"] = this.email;
						this.payload["phone"] = this.phone;
						this.payload["addressPickUp"] = this.addressPickUp;
						this.payload["addressPickUp2"] = this.addressPickUp2;
						this.payload["picUpCity"] = this.picUpCity;
						this.payload["pickUpState"] = this.pickUpStateSelected;
						this.payload["pickUpZip"] = this.pickUpZip;
						this.payload["addressDropOff"] = this.addressDropOff;
						this.payload["addressDropOff2"] = this.addressDropOff2;
						this.payload["dropOffCity"] = this.dropOffCity;
						this.payload["dropOffState"] = this.dropOffStateSelected;
						this.payload["dropOffZip"] = this.dropOffZip;
						this.payload["startDate"] = this.startDate;
						this.payload["hour"] = this.hourSelected;
						this.payload["minute"] = this.minuteSelected;
						this.payload["dayType"] = this.dayTypeSelected;
						this.payload["squareFootage"] = this.squareFootage;
						this.payload["inventory"] = this.inventory;
						this.payload["questions"] = this.questions;
						this.payload["terms"] = this.terms;
						this.postForm(this.payload);
			    }
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import 'node_modules/@livelybone/vue-datepicker/lib/css/index.scss';

	textarea {
		margin: 0px 0px 16px;
    	height: 229px;
	}

	.form-error-date {
		margin-top: 5.5px;
	}

	.terms {
		span {
			position: relative;
			top: -2px;
			display: inline-block;
		}
	}
</style>