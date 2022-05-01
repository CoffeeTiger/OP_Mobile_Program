<template>
	<div>
		<div class="main_contain">
			
			<div class="isummary isummary-v3 bg_lightgray margin-top-32">
				<div class="isumm-cell">
					<div class="iname">Bond Price</div>
					<div class="ivalue">$3.11</div>
				</div>
				<div class="isumm-cell">
					<div class="iname">Market Price</div>
					<div class="ivalue">$32217.21</div>
				</div>
			</div>
			
			<div class="iuser-stat" v-if="!ustat">
				<div class="itips">
					<article class="iarticle">Please connect your wallet to purchase bonds</article>
				</div>
				<div class="ibtn-contain">
					<div class="ibtn iibtn-bond-purc bg_yellow" @click="walletConn">Connect wallet</div>
				</div>
			</div>
			
			<div class="iuser-stat" v-if="ustat && ufirst">
				<div class="itips">
					<article class="iarticle">First time bonging OPH?<br /> Please approve OpenPublish to use your OPH for bonding.</article>
				</div>
				<div class="ibtn-contain">
					<div class="ibtn iibtn-bond-purc bg_yellow">Approve</div>
				</div>
			</div>
			
			<div class="ipanel bg_lightgray" v-if="ustat && !ufirst">
				<div class="ipanel-body ipanel-body-v3">
					<div class="iconten-down">
						<div class="iinput-contain">
							<input type="text" v-model="stakev" class="iinput" placeholder="Enter your number"/>
							<span @click="max(1)" class="imax color_yellow">Max</span>
						</div>
						<div  class="ibtn ibtn-stake bg_yellow">Bond</div>
					</div>
				</div>
			</div>
			
			<div class="ipanel bg_lightgray">
				<!-- <div class="ipanel-title">
					<span>Bond</span>
				</div> -->
				<div class="ipanel-body ipanel-body-v3">
					<ul class="ibond-infos">
						<li>
							<span>Your Balance</span>
							<span v-if="ustat">12 OPH-LP</span>
							<span v-if="!ustat">-</span>
						</li>
						<li>
							<span>You Will Get</span><span>0 OPH</span>
						</li>
						<li>
							<span>Max You Can Buy</span><span>1,234,567,890 OPH</span>
						</li>
						<li>
							<span>Discount</span><span>0.73%</span>
						</li>
						<li>
							<span>Duration</span><span>2days</span>
						</li>
					</ul>
				</div>
			</div>
			
			
		</div>
	</div>
</template>

<script>
	export default{
		name:'bondpurchase',
		data() {
			return {
				ustat: false,
				ufirst: true,
				stakev: '',
				maxstakev: 88588858,
			}
		},created() {
			let pv = this.$route.params.id
			if (pv == 1) {
				this.ustat = false
				this.ufirst = true
			} else if(pv ==2){
				this.ustat = true
				this.ufirst = true
			} else {
				this.ustat = true
				this.ufirst = false
			}
		},methods:{
			max(v){
				if (v ==1) {
					if(this.stakev != this.maxstakev){
						this.stakev = this.maxstakev
					} else {
						this.stakev = ''
					}
				}
			},
			walletConn(){
				this.$router.push({name:'conn', params:{pathfrom:'bondpurchase'}})
			}
		}
	}
</script>

<style scoped>
	.margin-top-32{
		margin-top: 0.64rem;
	}
	.ipanel .ipanel-body-v3{
		width: -webkit-calc(100% - 1.2rem);
		padding: 0.6rem;
		background: #252525;
	}
	.ibond-infos{
		width: 100%;
		line-height: 0.84rem;
		font-size: 0.56rem;
		font-weight: 400;
		color: #979797;
	}
	.ibond-infos > li{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
	.iuser-stat{
		width: 100%;
		margin: 1.6rem auto;
	}
	.itips{
		width: 100%;
		margin: 0 auto 0.2rem;
	}
	.itips .iarticle{
		font-size: 0.48rem;
		font-weight: 400;
		line-height: 0.86rem;
		color: #979797;
		text-align: center;
	}
	.ibtn-contain{
		width: 100%;
		margin: 0 auto;
	}
	.ibtn-contain .iibtn-bond-purc{
		width: 12.6rem;
		height: 1.6rem;
		line-height: 1.6rem;
		border-radius: 0.32rem;
		margin: 0 auto;
		font-size: 0.64rem;
		font-weight: bold;
		font-family: Poppins-Bold, Poppins;
		color: #313131;
	}
	
	.ipanel .ipanel-body .iconten-down{
		width: 100%;
		margin-bottom: 0.2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 0.48rem;
		font-weight: 400;
	}
	.ipanel .ipanel-body .iconten-down .iinput-contain{
		width: 9.76rem;
		height: 1.76rem;
		background: #6B6B6B;
		border-radius: 0.16rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.ipanel .ipanel-body .iconten-down .ibtn-stake{
		width: 2.44rem;
		height: 1.76rem;
		line-height: 1.76rem;
		border-radius: 0.16rem;
		overflow: hidden;
		font-size: 0.56rem;
		font-family: Poppins-SemiBold, Poppins;
		font-weight: 600;
		color: #313131;
	}
	.iinput{
		width: 7.5rem;
		height: 1.76rem;
		line-height: 1.76rem;
		margin: 0;
		padding-left: 0.4rem;
		background-color: #FFFFFF00;
		border: 0;
		font-size: 0.56rem;
		font-weight: 400;
	}
	.iinput::placeholder{
		color: #979797;
	}
	.imax{
		width: 1.2rem;
		font-size: 0.56rem;
		font-weight: 400;
		margin-right: 0.4rem;
	}
	.imax:active{
		opacity: .6;
	}
</style>
