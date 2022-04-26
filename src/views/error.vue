<template>
	<div class="error-contain">
		<p>ERROR</p>
		<div @click="back()" class="back">back <van-icon name="revoke" /></div>
	</div>
</template>

<script>
	export default{
		name:'error',
		methods:{
			back(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style scoped>
	.error-contain{
		width: 100%;
		height: 100vh;
		padding: 2rem 0;
		text-align: center;
	}
	.back{
		margin: 1.2rem auto;
		color: #F1F1F1;
	}
</style>