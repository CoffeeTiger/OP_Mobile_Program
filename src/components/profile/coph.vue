<template>
	<div>
		<div class="isummary iaccount bg_lightgray">
			<div class="iaccount-assets">
				<div class="icell">
					<div class="icell-name">
						<span class="iuser-balance">cOPH</span>
						<div>
							<span class="iuser-number" @click="balanceClick">$55.89</span>
						</div>
						<span class="iuser-oph">$1.23456.24</span>
					</div>
				</div>
				<div class="coph-btn-b2 ">
					<div class=" coph-btn coph-btn-dep">Deposit</div>
					<div class=" coph-btn coph-btn-d2">Withdraw</div>
				</div>
			</div>
		</div>
		<div class="ipanel bg_lightgray">
			<div class="ipanel-title ipanel-title-v2">
				<table class="itable itable-v2">
					<thead>
						<th class="th-25 th-frist" style="font-size: 0.64rem;">All
							<img src="@/assets/imgs/arrow-down.png" class="arrow-down-d1" />
						</th>
					</thead>
				</table>
			</div>
			<div class="ipanel-body ipanel-body-v2" style="padding: 0 0 0.2rem 0;">
				<div class="table-list table-list-border">
					<div class="table-row">
						<img class="table-row-img" src="@/assets/imgs/OPH.png" />
						<div class="table-row-num1">
							<div class="table-row-num">OPH</div>
							<div class="table-row-num-n2">Stake</div>
						</div>
					</div>
					<div style="display: flex;">
						<div class="table-list-right-num">1.3339</div>
						<img style="height: 0.4rem;width: 0.1rem;margin: 1.02rem 0rem 0.94rem 0rem"
							src="@/assets/imgs/profile-more.svg" />
					</div>
				</div>
				<div class="table-list table-list-border">
					<div class="table-row">
						<img class="table-row-img" src="@/assets/imgs/OPH.png" />
						<div class="table-row-num1">
							<div class="table-row-num">OPH</div>
							<div class="table-row-num-n2">Transfer to 0xfgss11…18fb</div>
						</div>
					</div>
					<div style="display: flex;">
						<div class="table-list-right-num">1.3339</div>
						<img style="height: 0.4rem;width: 0.1rem;margin: 1.02rem 0rem 0.94rem 0rem"
							src="@/assets/imgs/profile-more.svg" />
					</div>

				</div>
				<div class="table-list">
					<div class="table-row">
						<img class="table-row-img" src="@/assets/imgs/cOPH.png" />
						<div class="table-row-num1">
							<div class="table-row-num">cOPH</div>
							<div class="table-row-num-n2">Deposit from 0xfgss11…c489</div>
						</div>
					</div>
					<div style="display: flex;">
						<div class="table-list-right-num">1.3339</div>
						<img style="height: 0.4rem;width: 0.1rem;margin: 1.02rem 0rem 0.94rem 0rem"
							src="@/assets/imgs/profile-more.svg" />
					</div>

				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {
		ref
	} from 'vue';
	export default {
		name: 'profile',
		data() {
			return {
				activeName: '',
				eyesOpen: false,
				balance: 8858188,
				reward: 19873
			}
		},
		methods: {
			balanceClick() {

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
<style scoped>
	.coph-btn {
		width: 3.72rem;
		height: 0.96rem;
		border-radius: 0.28rem;
		text-align: center;
		font-size: 0.52rem;
		font-family: Poppins-SemiBold, Poppins;
		font-weight: 600;
		line-height: 0.96rem;
	}

	.coph-btn-dep {
		background: #F7B62D;
		color: #313131;
		margin-right: 0.56rem;
		margin-left: 1.85rem;

	}

	.coph-btn-d2 {
		border: 0.04rem solid #F7B62D;
		color: #F7B62D;
		margin-right: 0.1rem;
	}

	.coph-btn-b2 {
		display: flex;
		margin-top: 1.16rem;
		margin-bottom: 0.14rem;
	}

	.table-row-num1 {
		display: grid;
		font-family: Poppins-Regular, Poppins;
		height: 0.72rem;
		font-weight: 400;
		line-height: 0.72rem;
		margin: 0.48rem 0rem;
	}

	.table-list-right-num {
		margin: 0.84rem 0.16rem 0.8rem 0;
		width: 1.64rem;
		height: 0.72rem;
		font-size: 0.56rem;
		font-family: Poppins-Regular, Poppins;
		font-weight: 400;
		color: #FFFFFF;
		line-height: 0.84rem;
	}

	.table-row-num1 .table-row-num-n2 {
		/* width: 1.52rem; */
		font-size: 0.52rem;
		color: #979797;
	}

	.table-row-num1 .table-row-num {
		width: 1.2rem;
		font-size: 0.56rem;
		color: #FFFFFF;
	}

	.table-row-img {
		width: 1.2rem;
		height: 1.26rem;
		margin: 0.56rem 0.08rem 0.54rem -0.14rem;
	}

	.table-row {
		display: flex;
	}

	.table-list {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 0rem 0.6rem;

	}

	.table-list-border {
		border-bottom: 0.02rem solid #3F4142;
		/* margin: 0rem 0.6rem; */
	}

	.arrow-down-d1 {
		width: 0.34rem;
		height: 0.2rem;
		margin-left: 0.12rem;
		/* width: 0.34rem;
		height: 0.34rem;
		background: #979797; */
	}

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


	.iaccount .iaccount-assets .iarrow-right {
		width: 0.16rem;
		height: 0.28rem;
		margin-left: 0.08rem;
	}
</style>
