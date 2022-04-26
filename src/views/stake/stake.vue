<template>
	<div>
		<div class="main_contain">
			<div class="ilevel-0-page-title">Stake</div>
			<div class="isummary bg_gray">
				<div class="isumm-cell">
					<div class="iname">Tatal Value Deposited</div>
					<div class="ivalue">$378.288.910</div>
				</div>
				<div class="isumm-cell">
					<div class="iname">Current Index</div>
					<div class="ivalue">102.66 OPH</div>
				</div>
				<div class="isumm-cell">
					<div class="iname">APY</div>
					<div class="ivalue">288.15%</div>
				</div>
			</div>
			
			<div class="ipanel bg_gray">
				<div class="ipanel-title">
					<span>Stake</span>
				</div>
				<div class="ipanel-body">
					<div class="iconten-up">
						<div class="iconten-up-left">OPH wallet：<span>{{maxstakev}}</span></div>
						<van-icon name="question-o" />
					</div>
					<div class="iconten-down">
						<div class="iinput-contain">
							<input type="text" v-model="stakev" class="iinput" placeholder="Enter your number"/>
							<span @click="max(1)" class="imax">Max</span>
						</div>
						<div class="ibtn-stake">Stake</div>
					</div>
				</div>
			</div>
			
			<div class="ipanel bg_gray">
				<div class="ipanel-title">
					<span>UnStake</span>
				</div>
				<div class="ipanel-body">
					<div class="iconten-up">
						<div class="iconten-up-left">veOPH wallet：<span>{{maxunstakev}}</span></div>
						<van-icon name="question-o" />
					</div>
					<div class="iconten-down">
						<div class="iinput-contain">
							<input type="text" v-model="unstakev" class="iinput" placeholder="Enter your number"/>
							<span @click="max(2)" class="imax">Max</span>
						</div>
						<div class="ibtn-stake">Stake</div>
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
		methods:{
			max(v){
				if (v ==1) {
					this.stakev = this.maxstakev
				} else{
					this.unstakev = this.maxunstakev
				}
			}
		}
	}
</script>

<style scoped>
	.isummary{
		width: -webkit-calc(100% - 1.2rem);
		padding: 0.6rem;
		margin: 0 auto;
		border-radius: 0.36rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.isummary .isumm-cell .iname{
		line-height: 0.54rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-size: 0.2rem;
		font-weight: 300;
		font-family: OpenSansRoman-Light, OpenSansRoman;		
	}
	.isummary .isumm-cell .ivalue{
		margin-top: 0.28rem;
		line-height: 0.72rem;
		font-size: 0.52rem;
		font-weight: 400;
		font-family: OpenSans-Regular, OpenSans;
	}
	.ipanel{
		width: 100%;
		margin: 0.6rem auto;
		border-radius: 0.36rem;
		overflow: hidden;
		font-family: OpenSans-Regular, OpenSans;
	}
	.ipanel .ipanel-title{
		width: -webkit-calc(100% - 1.2rem);
		margin: 0 auto;
		height: 1.28rem;
		line-height: 1.28rem;
		font-size: 0.48rem;
		font-weight: 400;
	}
	.ipanel .ipanel-body{
		width: -webkit-calc(100% - 1.2rem);
		padding: 0.6rem;
		background: #303f4c;
	}
	.ipanel .ipanel-body .iconten-up{
		width: 100%;
		height: 0.56rem;
		padding: 0.24rem 0 0.6rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.ipanel .ipanel-body .iconten-up .iconten-up-left{
		font-size: 0.4rem;
		font-weight: 400;
	}
	.ipanel .ipanel-body .iconten-down{
		width: 100%;
		margin-bottom: 1.2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 0.48rem;
		font-weight: 400;
	}
	.ipanel .ipanel-body .iconten-down .iinput-contain{
		width: 9.8rem;
		height: 1.44rem;
		background: #4A5965;
		border-radius: 0.16rem;
	}
	.ipanel .ipanel-body .iconten-down .ibtn-stake{
		width: 2.36rem;
		height: 1.44rem;
		line-height: 1.44rem;
		background: #1D9BF0;
		border-radius: 0.16rem;
		text-align: center;
	}
	.iinput{
		width: 8rem;
		height: 1.44rem;
		line-height: 1.44rem;
		margin: 0;
		padding: 0 0.2rem;
		background-color: #FFFFFF00;
		border: 0;
	}
	.imax{
		color: #1D9BF0;
	}
	.imax:active{
		opacity: .6;
	}
</style>
