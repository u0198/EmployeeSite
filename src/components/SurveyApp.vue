<template>
	<FormulateForm @submit="showAlert">
		<FormulateInput type="text" v-model="myModel" />
		<FormulateInput type="submit" name="Submit this form!" />
	</FormulateForm>
</template>

<script>
	export default {
		name: "SurveyApp",
		data() {
			return {
				myModel: "Initial value",
			};
		},
	};
</script>
