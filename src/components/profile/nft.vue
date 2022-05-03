<template>
	<div class="inft bg_lightgray">
		<div class="inft-body">
			<div class="inft-status">
				<div class="icountdown" v-if="showTime">
					<div class="icountdown-cell">{{time0}}</div>
					<img src="../../assets/imgs/dot2.png" class="idots" />
					<div class="icountdown-cell">{{time1}}</div>
					<img src="../../assets/imgs/dot2.png" class="idots" />
					<div class="icountdown-cell">{{time2}}</div>
				</div>
				<div class="istamp" v-if="showLucky">
					<img src="../../assets/imgs/lucker.png" class="ilucky-img" />
				</div>
				<div class="istamp" v-if="showReward">
					<img src="../../assets/imgs/rewarded.png" class="ireward-img" />
				</div>
			</div>
			<div class="inft-imgs">
				<img :src="require('../../assets/imgs/example/'+urlImg)" class="inft-img" />
			</div>
			<div class="inft-infos">
				<div :class="gover?'inames inames-over':'inames color_yellow'">{{name}}</div>
				<div class="ichains" v-if="type=='original'||type=='sale'">BlockChain:{{chains}}</div>
				<div class="ichains" v-if="type=='bought'">{{ids}}</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'nft',
		data() {
			return {
				id: '',
				gover: false,
				time0:'01',
				time1:'01',
				time2:'01'
			}
		},
		props: {
			type: {
				type: String,
				default: 'original'
			},
			urlImg: {
				type: String,
				default: '3.png'
			},
			showTime: {
				type: Boolean,
				default: false
			},
			showTimeString: {
				type: String,
				default: '01-01-01'
			},
			showLucky: {
				type: Boolean,
				default: false
			},
			showReward: {
				type: Boolean,
				default: false
			},
			name: {
				type: String,
				default: 'OP-20220222-8825'
			},
			chains: {
				type: String,
				default: 'Ethereum'
			},
			ids: {
				type: String,
				default: '#001 #002'
			},
		},
		created() {
			if(!(this.showTimeString == undefined || this.showTimeString == null || this.showTimeString=='')){
				this.time0 = this.showTimeString.split('-')[0]
				this.time1 = this.showTimeString.split('-')[1]
				this.time2 = this.showTimeString.split('-')[2]
			}
			
			if (this.showTime && this.showTimeString.split('-')[0] == '00' && this.showTimeString.split('-')[1] == '00' &&
				this.showTimeString.split('-')[2] == '00') {
				this.gover = true
			}
		},
	}
</script>

<style scoped>
	.inft {
		width: 6.64rem;
		height: 8.92rem;
		border: 0.04rem solid #3F4142;
		border-radius: 0.36rem;
		margin-bottom: 0.48rem;
		overflow: hidden;
	}
	.inft:active{
		opacity: 0.6;
	}

	.inft .inft-body {
		width: -webkit-calc(100% - 1rem);
		height: -webkit-calc(100% - 0.96rem);
		padding: 0.48rem 0.5rem;
		margin: 0 auto;
	}

	.inft .inft-body .inft-status {
		position: absolute;
		/* left: 0.84rem;
		top: 0.64rem; */
		padding: 0.24rem 0 0 0.24rem;
	}
	
	.inft .inft-body .inft-status .icountdown{
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	.inft .inft-body .inft-status .icountdown .icountdown-cell{
		width: 0.74rem;
		height: 0.72rem;
		line-height: 0.72rem;
		border: 0.04rem solid #3F4142;
		border-radius: 0.12rem;
		text-align: center;
		font-size: 0.48rem;
		font-weight: 400;
		color: #313131;
	}
	.inft .inft-body .inft-status .icountdown .idots{
		width: 0.1rem;
		height: 0.3rem;
		margin: 0 0.16rem;
	}

	.inft .inft-body .inft-status .ilucky-img {
		width: 2.14rem;
		height: 0.92rem;
	}

	.inft .inft-body .inft-status .ireward-img {
		width: 2.94rem;
		height: 0.92rem;
	}

	.inft .inft-body .inft-imgs {
		width: 5.62rem;
		height: 6.08rem;
		margin: 0 auto;
		background: #A8B2BC;
		border-radius: 0.36rem;
		overflow: hidden;
	}

	.inft .inft-body .inft-imgs .inft-img {
		width: 100%;
	}

	.inft .inft-body .inft-infos {
		width: 100%;
	}

	.inft .inft-body .inft-infos .inames {
		width: 100%;
		height: 0.78rem;
		line-height: 0.78rem;
		margin-top: 0.4rem;
		font-size: 0.56rem;
		font-family: Poppins-Medium, Poppins;
		font-weight: 500;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	
	.inft .inft-body .inft-infos .inames-over{
		color: #979797;
	}

	.inft .inft-body .inft-infos .ichains {
		width: 100%;
		height: 0.72rem;
		line-height: 0.72rem;
		font-size: 0.52rem;
		font-family: Poppins-Light, Poppins;
		font-weight: 300;
		color: #979797;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
</style>
