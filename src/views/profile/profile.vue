<template>
	<div class="main_contain">
		<div class="itools">
			<div class="ibtn ibtn-swap color_yellow" @click="swapPage">Swap</div>
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
		<coph v-if="cophShow"></coph>
		<veoph v-if="veophShow"></veoph>
		<oph v-if="ophShow"></oph>
		<balance v-if="balanceShow"></balance>
		<div class="isummary iaccount bg_lightgray" v-if="messageShow">
			<div class="iaccount-assets">
				<div class="icell">
					<div class="icell-name">
						<span class="iuser-balance">Balance</span>
						<div>
							<span class="iuser-number" @click="balanceClick">$317.78</span>
							<img src="../../assets/imgs/arrow-right.png" class="iarrow-right" />
						</div>
						<span class="iuser-oph">1.234567 OPH</span>
					</div>
				</div>
			</div>
			<hr class="frist-name-hr" />
			<div style="display: flex;">
				<div class="iaccount-assets">
					<div class="icell">
						<div class="icell-name">
							<span>OPH</span>
							<div>
								<span class="iuser-number" @click="ophClick">$55.89</span>
								<img src="../../assets/imgs/arrow-right.png" class="iarrow-right" />
							</div>
							<span>1.234567 OPH</span>
						</div>
					</div>
				</div>
				<div class="iaccount-assets">
					<div class="icell">
						<div class="icell-name">
							<span>veOPH</span>
							<div>
								<span class="iuser-number" @click="veophClick">$12.08</span>
								<img src="../../assets/imgs/arrow-right.png" class="iarrow-right" />
							</div>
							<span>1.234567 veOPH</span>
						</div>
					</div>
				</div>
				<div class="iaccount-assets">
					<div class="icell">
						<div class="icell-name">
							<span>cOPH</span>
							<div>
								<span class="iuser-number" @click="cophClick">$12.08</span>
								<img src="../../assets/imgs/arrow-right.png" class="iarrow-right" />
							</div>
							<span>1.234567 cOPH</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="infts-tabs" v-if="tabsShow">
			<van-tabs v-model:active="activeName" line-width="33%" line-height="0.16rem" color="#F7B62D"
				background="#FFFFFF00" title-inactive-color="#979797" title-active-color="#FFFFFF" sticky swipeable>
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
	import boughtList from '@/components/profile/boughtList.vue'
	import originaList from '@/components/profile/originaList.vue'
	import saleList from '@/components/profile/saleList.vue'
	import balance from '@/components/profile/balance.vue'
	import oph from '@/components/profile/oph.vue'
	import veoph from '@/components/profile/veoph.vue'
	import coph from '@/components/profile/coph.vue'
	export default {
		name: 'profile',
		data() {
			return {
				activeName: '',
				eyesOpen: false,
				balance: 8858188,
				reward: 19873,
				messageShow:true,
				tabsShow:true,
				balanceShow:false,
				ophShow:false,
				veophShow:false,
				cophShow:false
			}
		},
		components: {
			boughtList,
			originaList,
			saleList,
			balance,
			oph,
			veoph,
			coph
		},
		methods: {
			cophClick(){
				this.messageShow = false
				this.tabsShow = false
				this.balanceShow = false
				this.ophShow = false
				this.veophShow = false
				this.cophShow = true
			},
			veophClick(){
				this.messageShow = false
				this.tabsShow = false
				this.balanceShow = false
				this.ophShow = false
				this.veophShow = true
				this.cophShow = false
			},
			ophClick(){
				this.messageShow = false
				this.tabsShow = false
				this.balanceShow = false
				this.ophShow = true
				this.veophShow = false
				this.cophShow = false
			},
			balanceClick() {
				this.messageShow = false
				this.tabsShow = false
				this.balanceShow = true
				this.ophShow = false
				this.veophShow = false
				this.cophShow = false
			},
			open() {
				this.eyesOpen = !this.eyesOpen
			},
			set() {
				this.$router.push({
					name: 'setUp',
					params: {}
				})
			},
			swapPage() {
				this.$router.push({
					name: 'swap',
					params: {}
				})
			},
		},
	}
</script>
<style>
	.van-tabs__wrap {
		width: 100%;
		height: 2.3rem !important;
		line-height: 2.3rem !important;
		border-bottom: 0.04rem solid #2D2D2D;
		background-color: #000000;
	}

	.van-tabs__line {
		border-radius: 0 !important;
	}

	.van-tab--active {
		line-height: 0.78rem;
		font-size: 0.56rem;
		font-weight: 500 !important;
		font-family: Poppins-Medium, Poppins !important;
		color: #FFFFFF;
	}

	.van-tab--line {
		line-height: 0.78rem;
		font-size: 0.56rem;
		font-weight: 400;
		font-family: Poppins-Regular, Poppins;
		background-color: #121619;
	}
</style>
<style scoped>
	.frist-name-hr {
		border: none;
		height: 0.04rem;
		background-color: #3F4142;
	}

	.iuser-size {
		height: 0.66rem;
		font-size: 0.48rem;
		font-family: Poppins-Light, Poppins;
		font-weight: 300;
		color: #979797;
		line-height: 0.7rem;
	}

	.iuser-size .iuser-oph {
		width: 3.04rem;
	}

	.iuser-size .iuser-balance {
		width: 1.96rem;
	}

	.iuser-number {
		width: 2.18rem;
		height: 0.86rem;
		font-size: 0.6rem;
		font-family: Poppins-Medium, Poppins;
		font-weight: 500;
		color: #FFFFFF;
		line-height: 0.92rem;
	}

	.itools {
		width: 100%;
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}

	.itools .isetting {
		width: 0.84rem;
		height: 0.84rem;
		margin: 0.58rem 0 0.66rem;
	}

	.itools .isetting:active {
		opacity: .6;
	}

	.itools .ibtn-swap {
		width: 2.28rem;
		height: 0.9rem;
		line-height: 0.9rem;
		border-radius: 0.16rem;
		border: 0.04rem solid #F7B62D;
		font-size: 0.48rem;
		font-family: Poppins-Medium, Poppins;
		font-weight: 500;
		margin-right: 0.7rem;
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
		width: -webkit-calc(100% - 0.96rem);
		/* margin: 0 auto; */
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.iaccount .iaccount-assets .icell {
		/* width: 50%;
		overflow: hidden; */
		width: 4.6rem;
	}

	.iaccount .iaccount-assets .icell-name {
		line-height: 0.66rem;
		font-size: 0.48rem;
		font-family: Poppins-Light, Poppins;
		font-weight: 300;
		color: #979797;
	}

	.iaccount .iaccount-assets .icell-name .ieyes-img {
		width: 0.56rem;
		height: 0.3rem;
		margin: 0 0.48rem;
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
		margin-left: 0.08rem;
	}

	.iaccount .ibtn-contain {
		width: 100%;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	.iaccount .ibtn-contain .ibtn-funding {
		width: 5.12rem;
		height: 1.2rem;
		line-height: 1.2rem;
		margin-top: 0.44rem;
		border-radius: 0.16rem;
		font-size: 0.56rem;
		font-family: Poppins-Medium, Poppins;
		font-weight: 500;
	}

	.infts-tabs {
		width: 100%;
		margin-top: 0.52rem;
	}
</style>
