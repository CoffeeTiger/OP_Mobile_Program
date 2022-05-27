<template>
	<div class="main_contain">
		<div class="inft-imgs">
			<img src="../../assets/imgs/nft-example.jpg" class="nft-img" />
		</div>
		<div class="inft-names color_yellow">Cryptomories#8112</div>

		<div class="icollapse-panel bg_lightgray">

			<div class="iheader" @click="show(1)">
				<div class="ititle">Description</div>
				<div class="iarrow">
					<img src="../../assets/imgs/arrow-down.png" class="icollepse-arrow" v-if="!open1" />
					<img src="../../assets/imgs/arrow-up.png" class="icollepse-arrow" v-if="open1" />
				</div>
			</div>
			<div :class="open1?'ibody':'ibody ibody-close ibody-close-bottom'">
				<div class="infos">Stakers play an important role in the Openpublish ecosystem. </div>
			</div>

			<div class="iheader" @click="show(2)">
				<div class="ititle">Details</div>
				<div class="iarrow">
					<img src="../../assets/imgs/arrow-down.png" class="icollepse-arrow" v-if="!open2" />
					<img src="../../assets/imgs/arrow-up.png" class="icollepse-arrow" v-if="open2" />
				</div>
			</div>
			<div :class="open2?'ibody':'ibody ibody-close'">
				<div class="publish-detail">
					<div class="iname">Contract Address Token ID Token standard Blackchain Number</div>
					<div class="publish-detail-ivalue">0x3e11…18fb 80277467893097… ERC-721 Ethereum 44/100</div>
				</div>
			</div>

		</div>

		<div class="ipanel bg_lightgray">
			<div class="ipanel-title ipanel-title-v2">
				<table class="itable itable-v2">
					<thead>
						<tr class="color_yellow">
							<th class="th-20 th-frist" style="text-align: center;">Event</th>
							<th class="th-20 th-center" style="text-align: center;">Price</th>
							<th class="th-20 th-center" style="text-align: center;">Form</th>
							<th class="th-20 th-center" style="text-align: center;">To</th>
							<th class="th-20 th-center" style="text-align: center;">Date</th>
						</tr>
					</thead>
				</table>
			</div>
			<div class="ipanel-body ipanel-body-v2">
				<table class="itable itable-v2" style="width: 100%;table-layout: fixed">
					<tbody>
						<tr @click="purchase(1)">
							<td class="th-20 td-frist publish-detail-data">Minted</td>
							<td class="th-20 publish-detail-data">0.02</td>
							<td class="th-20 publish-detail-data">David Li</td>
							<td class="th-20 publish-detail-data" style="text-align: center;">you</td>
							<td class="th-20 td-last publish-detail-data">14 days ago</td>
						</tr>
						<tr @click="purchase(2)">
							<td class="th-20 td-frist publish-detail-data">Minted</td>
							<td class="th-20 publish-detail-data">0.14</td>
							<td class="th-20 publish-detail-data">Lubosek</td>
							<td class="th-20 publish-detail-data" style="text-align: center;">you</td>
							<td class="th-20 td-last publish-detail-data">1 days ago</td>
						</tr>
						<tr @click="purchase(3)">
							<td class="th-20 td-frist">Minted</td>
							<td class="th-20 publish-detail-data">0.11</td>
							<td class="th-20 publish-detail-data">Cardarion</td>
							<td class="th-20 publish-detail-data" style="text-align: center;">you</td>
							<td class="th-20 td-last publish-detail-data">3 days ago</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		name: 'active',
		data() {
			return {
				open1: true,
				open2: true,
				count: 1,
				time0: '12',
				time1: '01',
				time2: '28',
				progress: 20,
				progressTotal: 100,
			}
		},
		created() {
			let id = this.$route.params.id
			if (id == '3') {
				this.saleStatus = false
			}
		},
		methods: {
			plus(v) {
				this.count = this.count + v
				if (this.count <= 0) {
					this.count = 0
				}
			},
			show(v) {
				if (v == 1) {
					this.open1 = !this.open1
				} else if (v == 2) {
					this.open2 = !this.open2
				}
			},
		}
	}
</script>

<style accesskey>
	@import url("../../assets/css/comm.css");

	.publish-detail-data {
		width: 4%;
		word-break: keep-all;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}

	.publish-detail-ivalue {
		text-align: end;
	}

	.publish-detail {
		display: flex;
		justify-content: space-between;
		align-items: center
	}

	.publish-detail-d1 {
		font-size: 0.52rem;
		font-family: Poppins-Regular, Poppins;
		font-weight: 400;
		color: #979797;
		line-height: 0.84rem;
	}

	.inft-info .idesc {
		width: 100%;
		line-height: 0.66rem;
		font-size: 0.48rem;
		font-weight: 300;
	}

	.inft-info .icountdown-active {
		margin: 0.34rem auto 0.58rem;
	}

	.iprogress {
		width: 9.1rem;
		height: 0.5rem;
		border-radius: 0.26rem;
		background: #505050;
	}

	.iprogress .iprogress-inner {
		height: 0.5rem;
		line-height: 0.5rem;
		font-size: 0.48rem;
		font-weight: 400;
		border-radius: 0.26rem;
		color: #1C212B;
		text-align: center;
	}

	.iprice-num {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 0.84rem;
	}

	.iprice-num .iprice {
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	.iprice-num .iprice .ieth-value {
		line-height: 0.96rem;
		font-size: 0.68rem;
		font-family: Poppins-Medium, Poppins;
		font-weight: 500;
		color: #FFFFFF;
	}

	.iprice-num .iprice .ius-value {
		line-height: 0.66rem;
		font-size: 0.48rem;
		font-weight: 300;
	}

	.iprice-num .inums {
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}

	.iprice-num .inums .iminus {
		width: 0.56rem;
		height: 0.1rem;
	}

	.iprice-num .inums .icount-img {
		width: 1rem;
		height: 0.96rem;
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.iprice-num .inums .icount-img:active {
		opacity: 0.6;
	}

	.iprice-num .inums .iplus {
		width: 0.56rem;
		height: 0.56rem;
	}

	.iprice-num .inums .icount {
		line-height: 0.96rem;
		font-size: 0.68rem;
		font-family: Poppins-Medium, Poppins;
		font-weight: 500;
		color: #FFFFFF;
		margin: 0 1.28rem;
	}

	.ibtn-buy {
		width: 100%;
		height: 1.6rem;
		line-height: 1.6rem;
		font-size: 0.64rem;
		font-family: Poppins-Bold, Poppins;
		font-weight: bold;
		border-radius: 0.32rem;
	}


	.td_cell_times {
		line-height: 0.6rem;
		text-align: center;
	}

	.td_cell_text {
		text-align: center;
	}

	.iprize-win {
		width: 0.84rem;
		height: 0.98rem;
	}
</style>
