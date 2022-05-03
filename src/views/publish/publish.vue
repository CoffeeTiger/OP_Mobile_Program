<template>
	<div class="main_contain">
		<div class="inft-imgs">
			<img src="../../assets/imgs/nft-example.jpg" class="nft-img"/>
		</div>
		<div class="nft-names color_yellow">Crytomories-20200122-0011</div>
		
		<div class="icollapse-panel bg_lightgray">
			
			<div class="iheader" @click="show(1)">
				<div class="ititle">Description</div>
				<div class="iarrow">
					<img src="../../assets/imgs/arrow-down.png" class="icollepse-arrow" v-if="!open1" />
					<img src="../../assets/imgs/arrow-up.png" class="icollepse-arrow" v-if="open1" />
				</div>
			</div>
			<div :class="open1?'ibody':'ibody ibody-close ibody-close-bottom'" >
				<div class="infos">Stakers play an important role in the Openpublish ecosystem. Stakers deposit their OPH into the protocol, which contributes to OPH’s long-term price stability. </div>
			</div>
			
			<div class="iheader" @click="show(2)">
				<div class="ititle">Details</div>
				<div class="iarrow">
					<img src="../../assets/imgs/arrow-down.png" class="icollepse-arrow" v-if="!open2" />
					<img src="../../assets/imgs/arrow-up.png" class="icollepse-arrow" v-if="open2" />
				</div>
			</div>
			<div :class="open2?'ibody':'ibody ibody-close'">
				<div class="infos-list">
					<ul>
						<li>
							<div class="iname">Contract Address</div>
							<div class="ivalue">0x8723...98f7</div>
						</li>
						<li>
							<div class="iname">Token ID</div>
							<div class="ivalue">982642364873...</div>
						</li>
						<li>
							<div class="iname">Token standard</div>
							<div class="ivalue">ERC-721</div>
						</li>
						<li>
							<div class="iname">Blockchain</div>
							<div class="ivalue">Ethereum</div>
						</li>
					</ul>
				</div>
			</div>
			
		</div>
	</div>
</template>

<script>
	export default{
		name:'publish',
		data() {
			return {
				open1: true,
				open2: true,
			}
		},methods:{
			show(v){
				if (v == 1) {
					this.open1 = !this.open1
				} else if (v == 2) {
					this.open2 = !this.open2
				}
			}
		}
	}
</script>

<style scoped>
	.inft-imgs{
		width: 100%;
		margin-top: 0.64rem;
		max-height: 7.34rem;
		border-radius: 0.64rem;
		overflow: hidden;
	}
	.inft-imgs .nft-img{
		width: 100%;
		height: 100%;
	}
	.nft-names{
		height: 1.02rem;
		line-height: 1.02rem;
		margin: 0.4rem auto 0.48rem;
		font-size: 0.72rem;
		font-family: Poppins-Medium, Poppins;
		font-weight: 500;
	}
	
	.icollapse-panel{
		width: -webkit-calc(100% - 0.08rem);
		margin: 0.48rem auto;
		border: 0.04rem solid #3F4142;
		border-radius: 0.36rem;
		font-family: Poppins-Regular, Poppins;
	}
	.icollapse-panel .iheader{
		width: -webkit-calc(100% - 1.2rem);
		height: 1.76rem;
		margin: 0 0.6rem;
		line-height: 1.76rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.icollapse-panel .iheader .ititle{
		line-height: 0.9rem;
		font-size: 0.64rem;
		font-weight: 400;
	}
	.icollapse-panel .iheader .icollepse-arrow{
		width: 0.34rem;
		height: 0.2rem;
	}
	.icollapse-panel .ibody{
		width: -webkit-calc(100% - 1.2rem);
		padding: 0.6rem;
		background: #3A3A3A;
		color: #979797;
	}
	.icollapse-panel .ibody-close {
		width: -webkit-calc(100% - 1.2rem);
		height: 0;
		padding: 0;		
		overflow: hidden;
	}
	.icollapse-panel .ibody-close-bottom{
		border-bottom: 0.04rem solid #3F4142;
		margin: 0 auto;
	}
	
	.icollapse-panel .ibody .infos{
		width: 100%;
		line-height: 0.84rem;
		font-size: 0.56rem;
		font-weight: 400;
	}
	.icollapse-panel .ibody .infos-list{
		width: 100%;
		line-height: 0.84rem;
		font-size: 0.52rem;
		font-weight: 400;
	}
	.icollapse-panel .ibody .infos-list ul > li{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
</style>
