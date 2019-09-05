<template>
	<div>
		<page-body>
			<h3>Request A Quote</h3>
		</page-body>
		<div class="grid-x grid-padding-x">
			<div class="cell small-12">
				<form>
					<div class="grid-x grid-margin-x">
						<div class="cell small-12 medium-5">
							<label for="first-name">First Name</label>
							<input type="text" name="first-name" class="first-name" id="firstName" />
						</div>
						<div class="cell small-12 medium-5">
							<label for="last-name">Last Name</label>
							<input type="text" name="last-name" id="lastName" class="last-name" />
						</div>
					</div>

					<div class="grid-x grid-margin-x">
						<div class="cell small-12 large-5">
							<label for="email">Email</label>
							<input type="text" name="email" id="email" class="email" />
						</div>
						<div class="cell small-12 large-5">
							<label for="phone">Phone</label>
							<input type="number" name="phone" id="phone" class="phone" />
						</div>
					</div>

					<div class="grid-x grid-margin-x">
						<div class="cell large-6 small-12"> 
							<div>
								<label for="start-address">Address (Pick Up)</label>
								<input type="text" name="start-address" id="start-address" class="start-address" />
							</div>

							<div>
								<label for="start-address2">Address 2 (Pick Up)</label>
								<input type="text" name="start-address2" id="start-address2" class="start-address2" />
							</div>
						</div>

						<div class="cell large-4 small-12">
							<div class="grid-x grid-margin-x">
								<div class="cell small-4">
									<label for="start-city">City</label>
									<input type="text" name="start-city" id="start-city" class="start-city" />
								</div>
								<div class="cell small-4">
									<label for="start-state">State</label>
									<input type="text" name="start-state" class="start-state" id="start-state" />
								</div>
								<div class="cell small-4">
									<label for="start-zip">Zip</label>
									<input type="text" name="start-zip" id="start-zip" class="start-zip" />
								</div>
							</div>
						</div>
					</div>

					<div class="grid-x grid-margin-x">
						<div class="cell large-6 small-12">
							<div>
								<label for="end-address">Address (Drop Off)</label>
								<input type="text" name="end-address" id="end-address" class="end-address" />
							</div>
							<div>
								<label for="end-address2">Address 2 (Drop Off)</label>
								<input type="text" name="end-address2" id="end-address2" class="end-address2" />
							</div>
						</div>

						<div class="cell large-4 small-12">
							<div class="grid-x grid-margin-x">
								<div class="cell small-4">
									<label for="end-city">City</label>
									<input type="text" name="end-city" id="end-city" class="end-city" />
								</div>
								<div class="cell small-4">
									<label for="end-state">State</label>
									<input type="text" name="end-state" id="end-state" class="end-state" />
								</div>
								<div class="cell small-4">
									<label for="end-zip">Zip</label>
									<input type="text" name="end-zip" id="end-zip" class="end-zip" />
								</div>
							</div>
						</div>
					</div>

					<div class="grid-x grid-margin-x">
						<div class="cell large-4 small-12">
							<label for="start-date">Start Date</label>
							<input type="text" name="start-date" id="start-date" class="start-date" />
						</div>
						<div class="cell large-6 small-12">
							<div class="grid-x grid-margin-x">
								<div class="cell large-2">
									<label for="hour">Hour</label>
									<input type="number" name="hour" id="hour" class="hour" />
								</div>
								<div class="cell large-2">
									<label for="minute">Minute</label>
									<input type="number" name="minute" id="minute" class="minute" />
								</div>
								<div class="cell large-2">
									<label for="day-type">AM/PM</label>
									<input type="text" name="day-type" id="day-type" class="day-type" />
								</div>
							</div>
						</div>
					</div>

					<div class="grid-x grid-margin-x">
						<div class="cell large-6 small-12">
							<label>Square Footage (Current Residence)</label>
							<input type="text" name="" />
						</div>
						
					</div>

					<div>
						<label for="inventory">Inventory/List</label>
						<textarea name="inventory" id="inventory" class="inventory"></textarea>
					</div>

					<div>
						<label for="questions">Questions Or Concerns</label>
						<textarea name="questions" id="questions" class="questions"></textarea>
					</div>

					<button type="button" class="button">Submit</button>

				</form>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'quote'
	}
</script>

<style lang="scss" scoped>
</style>