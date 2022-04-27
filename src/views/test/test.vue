<template>
	<div>
		<p class="test1">Hello, OPENPUBLISH</p> 


	</div>

</template>

<script>
	import {
		ref
	} from 'vue';
	export default {
		name: 'test',
		setup() {
			const activeNames = ref(['1']);
			return {
				activeNames
			};
		}
	}
</script>

<style>
	.test1 {
		font-size: 16px;
	}

	.test2 {
		font-size: 16px;
		font-family: 'Poppins, sans-serif';
	}

	.test3 {
		font-size: 16px;
		font-family: 'Open Sans, Poppins, sans-serif';
	}
</style>
