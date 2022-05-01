<template>
	<div>
		<div class="main_contain">
			<div class="ilogo-contain">
				<img src="../../assets/imgs/cattle/cattle-logo.png" class="ilogo" />
			</div>
			
			<div class="ititle">
				<p class="ititle-big">Connect your wallet</p>
				<p class="ititle-small">Contact one of our available wallet providers.</p>
			</div>
			
			<div class="ibtn-contain">
				<div class="ibtn ibtn-conn" @click="connect">
					<img src="../../assets/imgs/logo/metamask.png" class="ibtn-img"/>
					<span>Metamask</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'conn',
		data() {
			return {
				pathFrom: 'home'
			}
		},created() {
			let p = this.$route.params.pathfrom
			if( !(p== undefined || p == null)){
				this.pathFrom = p
			}
		},
		methods:{
			connect(){
				/* this.$router.push({name:this.pathFrom, params:{}}) */
				this.$router.go(-1)
			}
		}
	}
</script>

<style scoped>
	.ilogo-contain{
		width: 100%;
		margin: 4.16rem auto 1.68rem;
		text-align: center;
	}
	.ilogo-contain .ilogo{
		width: 6.9rem;
		height: 8.48rem;
	}
	
	.ititle{
		width: 100%;
	}
	.ititle .ititle-big{
		width: 100%;
		line-height: 1.78rem;
		font-size: 1.28rem;
		font-family: Poppins-Bold, Poppins;
		font-weight: bold;
		text-align: center;
	}
	.ititle .ititle-small{
		width: 100%;
		line-height: 0.72rem;
		margin-top: 0.88rem;
		font-size: 0.56rem;
		font-weight: 400;
		text-align: center;
	}
	
	.ibtn-contain{
		width: 100%;
		margin: 3.2rem auto 1.28rem;
	}
	.ibtn-contain .ibtn-conn{
		width: 12.84rem;
		height: 2.16rem;
		line-height: 2.16rem;
		border-radius: 0.36rem;
		margin: 0 auto;
		background: #253341;
		font-size: 0.96rem;
		font-weight: 500;
		font-family: Poppins-Medium, Poppins;
	}
	.ibtn-contain .ibtn-conn .ibtn-img{
		width: 1.36rem;
		height: 1.22rem;
		margin-right: 1.26rem;
	}
</style>
