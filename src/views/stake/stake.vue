<template>
	<div>
		<div class="main_contain">
			<div class="ilevel-0-page-title color_yellow">Stake</div>
			<div class="isummary bg_lightgray">
				<div class="isumm-cell">
					<div class="iname">Tatal Value Deposited</div>
					<div class="ivalue">$378.288.910</div>
				</div>
				<div class="imid-line"></div>
				<div class="isummary-v2">
					<div class="isumm-cell">
						<div class="iname">Current Index</div>
						<div class="ivalue">102.66 OPH</div>
					</div>
					<div class="isumm-cell">
						<div class="iname">APY</div>
						<div class="ivalue">288.15%</div>
					</div>
					<div class="isumm-cell">
						<div class="iname">&ensp;</div>
						<div class="ivalue"></div>
					</div>
				</div>
			</div>
			
			<div class="ipanel bg_lightgray">
				<div class="ipanel-title color_yellow">
					<span>Stake</span>
				</div>
				<div class="ipanel-body">
					<div class="iconten-up">
						<div class="iconten-up-left">OPH wallet：<span>{{maxstakev}}</span></div>
						<!-- <van-icon name="question-o" /> -->
					</div>
					<div class="iconten-down">
						<div class="iinput-contain">
							<input type="text" v-model="stakev" class="iinput" placeholder="Enter your number"/>
							<span @click="max(1)" class="imax color_yellow">Max</span>
						</div>
						<!-- <input type="button" value="Stake" class="ibtn ibtn-stake bg_yellow" /> -->
						<div  class="ibtn ibtn-stake bg_yellow">Stake</div>
					</div>
				</div>
			</div>
			
			<div class="ipanel bg_lightgray">
				<div class="ipanel-title color_yellow">
					<span>UnStake</span>
				</div>
				<div class="ipanel-body">
					<div class="iconten-up">
						<div class="iconten-up-left">veOPH wallet：<span>{{maxunstakev}}</span></div>
						<!-- <van-icon name="question-o" /> -->
					</div>
					<div class="iconten-down">
						<div class="iinput-contain">
							<input type="text" v-model="unstakev" class="iinput" placeholder="Enter your number"/>
							<span @click="max(2)" class="imax color_yellow">Max</span>
						</div>
						<div  class="ibtn ibtn-stake bg_yellow">Unstake</div>
					</div>
				</div>
			</div>			
			
		</div>
	</div>
</template>

<script>
	export default{
		name:'stake',
		data() {
			return {
				stakev: '',
				maxstakev: 88588858,
				unstakev:'',
				maxunstakev:8876521,
			}
		},
		created() {
			
		},
		methods:{
			max(v){
				if (v ==1) {
					if(this.stakev != this.maxstakev){
						this.stakev = this.maxstakev
					} else {
						this.stakev = ''
					}
				} else{
					if(this.unstakev != this.maxunstakev){
						this.unstakev = this.maxunstakev
					} else {
						this.unstakev = ''
					}
				}
			}
		}
	}
</script>

<style scoped>
	
	.ipanel .ipanel-body .iconten-up{
		width: 100%;
		padding: 0 0 0.64rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.ipanel .ipanel-body .iconten-up .iconten-up-left{
		line-height: 0.8rem;
		font-size: 0.56rem;
		font-weight: 400;
		color: #979797;
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
	
	.imid-line{
		width: 100%;
		height: 0.04rem;
		background-color: #3F4142;
		margin: 0.6rem auto;
	}
</style>
