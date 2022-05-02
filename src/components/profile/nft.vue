<template>
	<div class="inft bg_lightgray">
		<div class="inft-body">
			<div class="inft-status">
				<div class="icountdown" v-if="showTime">
					<div class="icountdown-cell">12</div>
					<img src="../../assets/imgs/dot2.png" class="idots"/>
					<div class="icountdown-cell">22</div>
					<img src="../../assets/imgs/dot2.png" class="idots"/>
					<div class="icountdown-cell">32</div>
				</div>
				<div class="istamp" v-if="showLucky">
					<img src="../../assets/imgs/lucker.png" class="ilucky-img"/>
				</div>
				<div class="istamp" v-if="showReward">
					<img src="../../assets/imgs/rewarded.png" class="ireward-img"/>
				</div>
			</div>
			<div class="inft-imgs">
				<img src="../../assets/imgs/nft-header4.png" class="inft-img"/>
			</div>
			<div class="inft-infos">
				<div class="inames color_yellow">{{name}}</div>
				<div class="ichains">BlockChain:{{chains}}</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'nft',
		data() {
			return {
				id: ''
			}
		},
		props:{
			type: {
				type: String,
				default: 'original'
			},
			urlImg: {
				type: String,
				default: 'OP-20220222-8825'
			},
			showTime: {
				type: Boolean,
				default: false
			},
			showLucky: {
				type: Boolean,
				default: true
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
		}
	}
</script>

<style scoped>
	.inft{
		width: 6.64rem;
		height: 8.92rem;
		border: 0.04rem solid #3F4142;
		border-radius: 0.36rem;
		overflow: hidden;
	}
	.inft .inft-body{
		width: -webkit-calc(100% - 1rem);
		height: -webkit-calc(100% - 0.96rem);
		padding: 0.48rem 0.5rem;
		margin: 0 auto;
	}
	.inft .inft-body .inft-status{
		position: absolute;
		left: 0.84rem;
		top: 0.64rem;
	}
	.inft .inft-body .inft-status .ilucky-img{
		width: 2.14rem;
		height: 0.92rem;
	}
	.inft .inft-body .inft-status .ireward-img{
		width: 2.94rem;
		height: 0.92rem;
	}
	.inft .inft-body .inft-imgs{
		width: 5.62rem;
		height: 6.08rem;
		margin: 0 auto;
		background: #A8B2BC;
		border-radius: 0.36rem;
		overflow: hidden;
	}
	.inft .inft-body .inft-imgs .inft-img{
		width: 100%;
	}
	.inft .inft-body .inft-infos{
		width: 100%;
	}
	.inft .inft-body .inft-infos .inames{
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
	.inft .inft-body .inft-infos .ichains{
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
