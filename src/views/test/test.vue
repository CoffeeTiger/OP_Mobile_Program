<template>
	<div>
		<p class="test1">Welcome to the OP beta</p>
		<p class="test2">Welcome to the OP beta</p>
		<p class="test3">Welcome to the OP beta</p>


		<van-collapse v-model="activeNames">
			<van-collapse-item title="标题1" name="1">
				代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。
			</van-collapse-item>
		</van-collapse>


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
