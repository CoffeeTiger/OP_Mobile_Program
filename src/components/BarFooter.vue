<template>
	<div class="van-safe-area-bottom footer-contain">
		<div :class="active=='home'?'footer-cell cell-active':'footer-cell'" class="footer-cell" @click="go('home')">
			<img src="../assets/imgs/share.png" class="footer-cell-img" />
			<span class="footer-cell-name">home</span>
		</div>
		<div :class="active=='nfts'?'footer-cell cell-active':'footer-cell'" @click="go('nfts')">
			<img src="../assets/imgs/share.png" class="footer-cell-img" />
			<span class="footer-cell-name">NFTs</span>
		</div>
		<div :class="active=='stake'?'footer-cell cell-active':'footer-cell'" @click="go('stake')">
			<img src="../assets/imgs/share.png" class="footer-cell-img" />
			<span class="footer-cell-name">Stake</span>
		</div>
		<div :class="active=='bond'?'footer-cell cell-active':'footer-cell'" @click="go('bond')">
			<img src="../assets/imgs/share.png" class="footer-cell-img" />
			<span class="footer-cell-name">Bond</span>
		</div>
		<div :class="active=='profile'?'footer-cell cell-active':'footer-cell'" @click="go('profile')">
			<img src="../assets/imgs/share.png" class="footer-cell-img" />
			<span class="footer-cell-name">Profile</span>
		</div>
	</div>
</template>

<script>
	export default{
		name:'BarFooter',
		data() {
			return {
				active: 'home'
			}
		},
		created() {
			let current_path_name = this.$route.name
			if (current_path_name == 'undefined') {
				this.active = 'home'
			} else{
				this.active = current_path_name
			}
		},
		methods:{
			go(v){
				this.active = v
				this.$router.push({name:v})
			}
		}
	}
</script>

<style scoped="scoped">
	.footer-contain{
		width: 100%;
		height: 2.8rem;
		position: fixed;
		bottom: 0;
		left: 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #253341; 
	}
	.footer-contain .footer-cell{
		width: 20%;
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		overflow: hidden;
		font-size: 0.4rem;
		font-family: 'OpenSans-Regular, OpenSans';
	}
	.footer-contain .cell-active{ 
		color: #1D9BF0;
	} 
	.footer-contain .footer-cell .footer-cell-img{
		width: 0.8rem;
		height: 0.8rem;
		margin: 0.32rem auto;
	}
	.footer-contain .footer-cell .footer-cell-name{
		line-height: 0.54rem;
	}
</style>
