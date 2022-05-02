<template>
	<div class="main_contain">
		<div class="itools">
			<van-icon name="setting-o" color="#F7B62D" class="isetting" size=".84rem" @click="set" />
		</div>
		<div class="iuser">
			<div class="iuser-header">
				<img src="../../assets/imgs/userheader.png" class="iheader-img" />
			</div>
			<div class="iuser-info">
				<div class="iuser-name color_yellow">Hugo Saavedra</div>
				<div class="iuser-token">0x8862...8818</div>
			</div>
		</div>

		<div class="isummary iaccount bg_lightgray">
			<div class="iaccount-title color_yellow">
				<span>My account</span>
				<img src="../../assets/imgs/eye-open.png" class="ieyes-img" v-if="eyesOpen" @click="open" />
				<img src="../../assets/imgs/eye-close.png" class="ieyes-img" v-if="!eyesOpen" @click="open" />
			</div>
			<div class="iaccount-line"></div>
			<div class="iaccount-assets">
				<div class="icell">
					<div class="icell-name">Balance(veOPH)</div>
					<div class="icell-value">
						<img src="../../assets/imgs/logo/oph.png" class="ilogo-oph" />
						<span class="ivlaue" v-if="eyesOpen">{{balance}}</span>
						<span class="ivlaue ivalue-dot" v-if="!eyesOpen">******</span>
						<img src="../../assets/imgs/arrow-right.png" class="iarrow-right" />
					</div>
				</div>

				<div class="icell">
					<div class="icell-name">Yesterday's reward</div>
					<div class="icell-value">
						<img src="../../assets/imgs/logo/oph.png" class="ilogo-oph" />
						<div class="ivlaue" v-if="eyesOpen">{{reward}}</div>
						<div class="ivlaue ivalue-dot" v-if="!eyesOpen">******</div>
						<img src="../../assets/imgs/arrow-right.png" class="iarrow-right" />
					</div>
				</div>
			</div>

			<div class="ibtn-contain">
				<div class="ibtn ibtn-funding bg_yellow color_black">Deposit</div>
				<div class="ibtn ibtn-funding bg_yellow color_black">Withdraw</div>
				<div class="ibtn ibtn-funding bg_yellow color_black">Swap</div>
			</div>
		</div>

		<div class="infts-tabs">
			<van-tabs v-model:active="activeName" line-width="33%" line-height="0.16rem" color="#F7B62D" background="#FFFFFF00"
				title-inactive-color="#979797" title-active-color="#FFFFFF" sticky swipeable>
				<van-tab title="Original" name="a">
					<originaList></originaList>
				</van-tab>
				<van-tab title="Bought" name="b">
					<boughtList></boughtList>
				</van-tab>
				<van-tab title="Sale" name="c">
					<saleList></saleList>
				</van-tab>
			</van-tabs>
		</div>

	</div>
</template>

<script>
	import {
		ref
	} from 'vue';
	import boughtList from '../../components/profile/boughtList.vue'
	import originaList from '../../components/profile/originaList.vue'
	import saleList  from '../../components/profile/saleList.vue'
	export default {
		name: 'profile',
		data() {
			return {
				eyesOpen: false,
				balance: 8858188,
				reward: 19873
			}
		},
		components:{boughtList, originaList, saleList},
		methods: {
			open() {
				this.eyesOpen = !this.eyesOpen
			},
			set(){
				
			},
			setup() {
				const activeName = ref('a');
				return {
					activeName
				};
			},
		},
	}
</script>
<style>
	.van-tabs__wrap{
		width: 100%;
		height: 2.3rem !important;
		line-height: 2.3rem !important;
		border-bottom: 0.04rem solid #2D2D2D;
	}
	.van-tabs__line{
		border-radius: 0 !important;
	}
	.van-tab--active{
		line-height: 0.78rem;
		font-size: 0.56rem;
		font-weight: 500;
		font-family: Poppins-Medium, Poppins;
		color: #FFFFFF;
	}
	.van-tab--line{
		line-height: 0.78rem;
		font-size: 0.56rem;
		font-weight: 400;
		font-family: Poppins-Regular, Poppins;
		/* color: #979797 !important; */
	}
</style>
<style scoped>
	.itools {
		width: 100%;
		display: flex;
		justify-content: flex-end;
	}

	.itools .isetting {
		width: 0.84rem;
		height: 0.84rem;
		margin: 0.58rem 0 0.66rem;
	}
	.itools .isetting:active{
		opacity: .6;
	}

	.iuser {
		width: 100%;
		margin: 0 auto 0.9rem;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	.iuser .iuser-header {
		width: 1.54rem;
		height: 1.54rem;
		border-radius: 1rem;
		overflow: hidden;
	}

	.iuser .iuser-header .iheader-img {
		width: 1.54rem;
		height: 1.54rem;
	}

	.iuser .iuser-info {
		width: -webkit-calc(100% - 2rem);
		margin-left: 0.44rem;
	}

	.iuser .iuser-info .iuser-name {
		line-height: 0.96rem;
		font-size: 0.68rem;
		font-family: Poppins-Medium, Poppins;
		font-weight: 500;
	}

	.iuser .iuser-info .iuser-token {
		line-height: 0.74rem;
		font-size: 0.52rem;
		color: #979797;
		font-weight: 400;
	}


	.iaccount .iaccount-title {
		width: 100%;
		line-height: 0.9rem;
		font-size: 0.64rem;
		font-weight: 400;
		font-family: Poppins-Regular, Poppins;
	}

	.iaccount .iaccount-title .ieyes-img {
		width: 0.56rem;
		height: 0.3rem;
		margin: 0 0.48rem;
	}

	.iaccount .iaccount-line {
		width: 100%;
		height: 0.04rem;
		margin: 0.6rem auto;
		background: #3F4142;
	}

	.iaccount .iaccount-assets {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.iaccount .iaccount-assets .icell {
		/* width: 50%;
		overflow: hidden; */
	}

	.iaccount .iaccount-assets .icell-name {
		line-height: 0.66rem;
		font-size: 0.48rem;
		font-family: Poppins-Light, Poppins;
		font-weight: 300;
		color: #979797;
	}

	.iaccount .iaccount-assets .icell-value {
		height: 0.96rem;
		line-height: 0.96rem;
		margin: 0.2rem 0;
		font-size: 0.68rem;
		font-family: Poppins-Regular, Poppins;
		font-weight: 400;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	.iaccount .iaccount-assets .icell-value:active {
		opacity: .6;
	}

	.iaccount .iaccount-assets .ivlaue {
		max-width: 3.6rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		margin: 0 0.24rem;
	}

	.iaccount .iaccount-assets .ivalue-dot {
		line-height: 0.48rem;
		padding-top: 0.3rem;
	}

	.iaccount .iaccount-assets .ilogo-oph {
		width: 0.48rem;
		height: 0.48rem;
	}

	.iaccount .iaccount-assets .iarrow-right {
		width: 0.16rem;
		height: 0.28rem;
	}

	.iaccount .ibtn-contain {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.iaccount .ibtn-contain .ibtn-funding {
		width: 3.96rem;
		height: 1.2rem;
		line-height: 1.2rem;
		margin-top: 0.44rem;
		border-radius: 0.16rem;
		font-size: 0.56rem;
		font-family: Poppins-Medium, Poppins;
		font-weight: 500;
	}
	
	.infts-tabs{
		width: 100%;
		margin-top: 0.52rem;
	}
	
</style>
