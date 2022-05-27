<template>
	<div>
		<div class="main_contain">
			<div class="swap-setup">
				<img @click="set" class="swap-set" src="@/assets/imgs/swap-setup.svg" />
			</div>
			<div v-show="setShow==true" class="sawp-popup-set">
				<div class="isummary-v2 swap-popup-detail">
					<div>Transaction Settings</div>
				</div>
				<div class="isummary-v2 setsize">
					<div>Slippage tolerance?</div>
				</div>
				<div class="isummary-v2 setsize-s2">
					<div class="swap-popup-auto">Auto</div>
					<div class="swap-popup-a2">0.10%</div>
				</div>
				<div class="isummary-v2 setsize">
					<div>Transaction deadline?</div>
				</div>
				<div class="setup setsize-s2">
					<div class="swap-popup-num">30</div>
					<div class="swap-popup-min">minutes</div>
				</div>
				<div class="isummary-v2 setsize-s2">
					<div class="swap-popup-inter">Interface Settings</div>
				</div>
				<div class="isummary-v2 setsize-s2">
					<div>Auto Router API?</div>
					<div class="swap-btm">
						<div @click="btm(1)" style="padding-right: 0.08rem" :class="swapActive?'swap-active':''">On
						</div>
						<div @click="btm(2)" style="padding-left: 0.08rem" :class="swapInActive?'swap-inactive':''">Off
						</div>
					</div>
				</div>
				<div class="isummary-v2" style="color: #979797;">
					<div>Expert Mode?</div>
					<div class="swap-btm">
						<div @click="btm(3)" style="padding-left: 0.08rem" :class="swapMode?'swap-active':''">On</div>
						<div @click="btm(4)" :class="swapInMode?'swap-inactive':''">Off</div>
					</div>
				</div>
			</div>
			<div class="isummary bg_lightgray money-list">
				<div class="isummary-v2">
					<div class="money-cell">0.0</div>
					<div class="money-cell money-num money-ico">
						<div class="iname">ETH</div>
						<img class="money-img" src="@/assets/imgs/arrow-down.png" />
					</div>
				</div>
				<div class="isummary-v2">
					<div class="money-cell">$0.242306</div>
					<div class="money-cell">Balance: 0</div>
				</div>
			</div>
			<div class="swap-img">
				<img class="swap-tran" src="@/assets/imgs/swap-transformation.svg" />
			</div>
			<div class="isummary bg_lightgray money-list">
				<div class="isummary-v2">
					<div class="money-cell">0.0</div>
					<div class="money-cell money-num">
						<div class="iname">OPH</div>
					</div>
				</div>
				<div class="isummary-v2">
					<div class="money-cell">$0.242306</div>
					<div class="money-cell">Balance: 0</div>
				</div>
			</div>
			<div class="isummary-v2 money-deail">
				<div class="money-deail-d2">
					<img @click="dialogShow" class="money-deail-img" src="@/assets/imgs/swap-explain.svg" />
					<div class="money-deail-s1">1 OPH=0.0004601 ETH($1.09301)</div>
				</div>
				<div class="money-deail-d2">
					<div class="money-oil-quantity">
						<img class="money-deail-img" src="@/assets/imgs/swap-come.svg" />
						<div class="money-deail-size">$15.16</div>
					</div>
					<div class="money-img-i2">
						<img class="money-img" src="@/assets/imgs/arrow-down.png" />
					</div>
				</div>
			</div>
			<van-popup v-show="show==true" v-model="show" class="sawp-popup">
				<div class="isummary-v2 swap-popup-detail">
					<div>Expected Output</div>
					<div>0.217172 OPH</div>
				</div>
				<div class="isummary-v2">
					<div>Price Impact</div>
					<div>0.00%</div>
				</div>
				<hr class="frist-name-hr">
				<div class="isummary-v2">
					<div class="swap-popup-mininum">Minimum received after slippage (25.00%)</div>
					<div class="swap-popup-m2">0.173738 OPH</div>
				</div>
				<div class="isummary-v2 swap-popup-d2">
					<div>Network Fee</div>
					<div>~$17.80</div>
				</div>
			</van-popup>
			<div class="brt-top">
				<div class="ibtn ibtn-wall bg_yellow color_black">Connect Wallet</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {
		ref
	} from 'vue';
	export default {
		name: 'bond',
		data() {
			return {
				show: false,
				setShow: false,
				checked: false,
				swapActive: true,
				swapInActive: false,
				swapMode: false,
				swapInMode: true
			}
		},
		methods: {
			btm(e) {
				if (e == 1) {
					this.swapActive = true
					this.swapInActive = false
				} else if (e == 2) {
					this.swapInActive = true
					this.swapActive = false
				} else if (e == 3) {
					this.swapMode = true
					this.swapInMode = false
				} else if (e == 4) {
					this.swapInMode = true
					this.swapMode = false
				}

			},
			onInput(checked) {
				Dialog.confirm({
					title: '提醒',
					message: '是否切换开关？'
				}).then(() => {
					this.checked = checked;
				});
			},
			set() {
				this.setShow = !this.setShow
			},
			dialogShow() {
				this.show = !this.show
			},
			purchase(v) {
				if (v == 1) {
					this.$router.push({
						name: 'bondpurchase',
						params: {
							id: v
						}
					})
				} else if (v == 2) {
					this.$router.push({
						name: 'bondpurchase',
						params: {
							id: v
						}
					})
				} else if (v == 3) {
					this.$router.push({
						name: 'bondpurchase',
						params: {
							id: v
						}
					})
				}
			}
		}
	}
</script>

<style scoped>
	.swap-img {
		position: absolute;
		top: 6.26rem;
		right: 7.1rem;
	}

	.swap-active {
		line-height: 0.64rem;
		width: 0.98rem;
		height: 0.64rem;
		border-radius: 0.32rem;
		text-align: center;
		background: #F7B62D;
		color: #313131;
		transition: all .3s ease .1s;
	}

	.swap-inactive {
		line-height: 0.64rem;
		width: 0.98rem;
		height: 0.64rem;
		background: #727271;
		border-radius: 0.32rem;
		text-align: center;
		color: #FFFFFF;
		transition: all .3s ease .1s;
	}

	.swap-btm {
		width: 1.96rem;
		height: 0.64rem;
		background: #414242;
		border-radius: 0.32rem;
		line-height: 0.64rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 0.4rem;
		color: #979797;
	}

	.swap-popup-inter {
		color: #ffffff;
	}

	.swap-popup-min {
		color: #F7B62D;
		margin-left: 0.16rem;
		line-height: 0.96rem;
	}

	.setup {
		display: flex;
		margin-bottom: 0.32rem;
	}

	.swap-popup-num {
		width: 2.14rem;
		height: 0.96rem;
		background: #414242;
		border-radius: 0.54rem;
		text-align: center;
		line-height: 0.96rem;
	}

	.setsize-s2 {
		color: #979797;
		margin-bottom: 0.32rem;
	}

	.swap-popup-a2 {
		width: 5.52rem;
		height: 0.96rem;
		background: #414242;
		border-radius: 0.54rem;
		line-height: 0.96rem;
		text-align: end;
		padding-right: 0.4rem;
	}

	.swap-popup-auto {
		width: 1.76rem;
		height: 0.96rem;
		background: #F7B62D;
		border-radius: 0.54rem;
		line-height: 0.96rem;
		text-align: center;
		color: #313131;
	}

	.setsize {
		color: #979797;
		margin-bottom: 0.24rem;
	}

	.sawp-popup-set {
		width: 8.36rem;
		height: 9.04rem;
		background: #252525;
		border: 0.04rem solid #3C3C3C;
		position: absolute;
		right: 0.6rem;
		z-index: 2;
		top: 1.76rem;
		border-radius: 0.52rem;
		padding: 0.4rem;
	}

	.swap-popup-m2 {
		width: 1.86rem;
		color: #979797;
	}

	.swap-popup-mininum {
		width: 4.46rem;
		color: #979797;
	}

	.swap-popup-d2 {
		margin-top: 0.32rem;
		margin-bottom: 0.02rem;
		color: #979797;
	}

	.swap-popup-detail {
		font-size: 0.48rem;
		margin-bottom: 0.24rem;
		margin-top: 0.38rem;
	}

	.frist-name-hr {
		border: none;
		height: 0.04rem;
		background-color: #3F4142;
		margin-top: 0.32rem;
		margin-bottom: 0.32rem;
	}

	.sawp-popup {
		position: absolute;
		left: 0.44rem;
		width: 8.36rem;
		height: 6.16rem;
		background: #252525;
		border: 0.04rem solid #3C3C3C;
		padding: 0.4rem;
		font-size: 0.44rem;
		border-radius: 0.52rem;
	}

	.swap-tran {
		width: 0.8rem;
		height: 0.8rem;
	}

	.money-img-i2 {
		line-height: 0.7rem;
		margin-left: 0.24rem;
	}

	.money-oil-quantity {
		display: flex;
		width: 2.64rem;
		height: 0.66rem;
		background: #252525;
		border-radius: 0.52rem;
		border: 0.04rem solid #3C3C3C;
		padding-left: 0.12rem;
	}

	.money-deail-s1 {
		margin-left: 0.18rem;
	}

	.money-deail-size {
		margin-left: 0.4rem;
	}

	.swap-set {
		width: 0.8rem;
		height: 0.8rem;
	}

	.money-deail {
		font-size: 0.48rem;
	}

	.money-img {
		width: 0.28rem;
		height: 0.16rem;
		margin-right: 0.3rem;
	}

	.money-ico {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.list-buttom {
		margin-top: 0.48rem;
		width: 7.58rem;
		height: 0.66rem;
		line-height: 0.7rem;
	}

	.brt-top {
		margin-top: 1.62rem;
	}

	.ibtn-wall {
		height: 1.6rem;
		border-radius: 0.32rem;
		line-height: 1.6rem;
		font-size: 0.64rem;
		font-family: Poppins-Bold, Poppins;
		font-weight: bold;
		color: #313131;
	}

	.money-list {
		height: 3.02rem;
		display: grid;
		margin-bottom: 0.48rem;
	}

	.money-num {
		height: 1.04rem;
		width: 3.28rem;
		text-align: left;
		line-height: 1.04rem;
		background: #636464;
		box-shadow: 0rem 0.08rem 0.16rem 0rem rgba(0, 0, 0, 0.3);
		border-radius: 0.52rem;
	}

	.iname {
		padding-left: 0.3rem
	}

	.money-deail-img {
		width: 0.44rem;
		height: 0.44rem;
		margin-top: 0.08rem;
	}

	.money-deail-d2 {
		color: #979797;
		display: flex;
		line-height: 0.66rem
	}

	.money-cell {
		color: #979797
	}

	.swap-setup {
		text-align: end;
		margin: 0.64rem 0;
	}
</style>
