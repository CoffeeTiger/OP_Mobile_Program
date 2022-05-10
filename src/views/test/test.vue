<template>
	<div class="main_contain">
		<p class="test1">HelloOPENPUBLISH</p>

		<img src="../../assets/imgs/example/1.png" class="itest-img" />

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

	.itest-img {
		width: 13.8rem;
		height: auto;
		margin: 0.6rem auto;

		&:after {
			content: "";
			display: inline-block;
			position: absolute;
			z-index: 2;
			top: 0;
			left: 0;
			width: 100%;
			height: 145px;
			background: url("../../assets/imgs/home-1.png") no-repeat;
			background-size: 100%;
			background-color: #fff;
		}
	}
</style>
