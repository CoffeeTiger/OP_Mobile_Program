<template>
	<div class="van-safe-area-bottom footer-contain">
		<div :class="active=='home'?'footer-cell cell-active':'footer-cell'" class="footer-cell" @click="go('home')">
			<img src="../assets/imgs/home.png" class="footer-cell-img" v-if="active!='home'"/>
			<img src="../assets/imgs/home-1.png" class="footer-cell-img" v-if="active=='home'"/>
			<span class="footer-cell-name">Home</span>
		</div>
		<div :class="active=='nfts'?'footer-cell cell-active':'footer-cell'" @click="go('nfts')">
			<img src="../assets/imgs/nfts.png" class="footer-cell-img" v-if="active!='nfts'"/>
			<img src="../assets/imgs/nfts-1.png" class="footer-cell-img" v-if="active=='nfts'"/>
			<span class="footer-cell-name">NFTs</span>
		</div>
		<div :class="active=='stake'?'footer-cell cell-active':'footer-cell'" @click="go('stake')">
			<img src="../assets/imgs/stake.png" class="footer-cell-img" v-if="active!='stake'"/>
			<img src="../assets/imgs/stake-1.png" class="footer-cell-img" v-if="active=='stake'"/>
			<span class="footer-cell-name">Stake</span>
		</div>
		<div :class="active=='bond'?'footer-cell cell-active':'footer-cell'" @click="go('bond')">
			<img src="../assets/imgs/bond.png" class="footer-cell-img" v-if="active!='bond'"/>
			<img src="../assets/imgs/bond-1.png" class="footer-cell-img" v-if="active=='bond'"/>
			<span class="footer-cell-name">Bond</span>
		</div>
		<div :class="active=='profile'?'footer-cell cell-active':'footer-cell'" @click="go('profile')">
			<img src="../assets/imgs/Profile.png" class="footer-cell-img" v-if="active!='profile'"/>
			<img src="../assets/imgs/Profile-1.png" class="footer-cell-img" v-if="active=='profile'"/>
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
		background-color: #252525; 
		color: #979797;
		border-top: 0.04rem solid #3F4142;
	}
	.footer-contain .footer-cell{
		width: 20%;
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		overflow: hidden;
	}
	.footer-contain .cell-active{
		color: #F7B62D;;
	} 
	.footer-contain .footer-cell .footer-cell-img{
		width: 0.88rem;
		height: 0.88rem;
		margin: 0.28rem auto;
	}
	.footer-contain .footer-cell .footer-cell-name{
		line-height: 0.7rem;
		font-size: 0.48rem;
		font-weight: 400;
	}
</style>
