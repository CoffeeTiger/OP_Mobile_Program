<template>
	<div class="main_contain">
		<div class="inft-imgs">
			<img src="../../assets/imgs/nft-example.jpg" class="nft-img" />
		</div>
		<div class="inft-names color_yellow">Crytomories-20200122-0011</div>

		<div class="inft-prize">
			<div class="iname">Prize:</div>
			<div class="ivalues">
				<img src="../../assets/imgs/logo/oph.png" class="ilogo-oph" />
				<span class="inum">25</span>
				<span class="idesc">(Highest)</span>
			</div>
		</div>

		<div class="icomm-panel inft-info">
			<div class="ipanel-header"></div>
			<div class="ipanel-body">
				<div class="idesc">Sale ends March 5,2022 at 12:29an CST</div>
				<div class="icountdown icountdown-active">
					<span class="itimes-cell">{{time0}}</span>
					<img src="../../assets/imgs/dot2.png" class="idot" />
					<span class="itimes-cell">{{time1}}</span>
					<img src="../../assets/imgs/dot2.png" class="idot" />
					<span class="itimes-cell">{{time2}}</span>
				</div>
				<div class="iprogress">
					<div class="iprogress-inner bg_yellow" style="width: 50%;">{{progress + '/' +progressTotal}}</div>
				</div>
				<div class="iprice-num">
					<div class="iprice">
						<img src="../../assets/imgs/logo/eth.png" class="logo-eth" />
						<span class="ieth-value">0.03</span>
						<span class="ius-value">($881.8)</span>
					</div>
					<div class="inums" v-if="saleStatus">
						<div class="icount-img" @click="plus(-1)">
							<img src="../../assets/imgs/minus.png" class="iminus" />
						</div>
						<span class="icount">{{count}}</span>
						<div class="icount-img" @click="plus(1)">
							<img src="../../assets/imgs/plus.png" class="iplus" />
						</div>
					</div>
				</div>

			</div>
		</div>

		<div class="ibtn-contain">
			<div class="ibtn ibtn-buy bg_yellow color_black" v-if="saleStatus">Buy Now</div>
			<div class="ibtn ibtn-buy ibtn-disable bg_yellow color_black" v-if="!saleStatus">Sale end</div>
		</div>

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
						<li>
							<div class="iname">Number</div>
							<div class="ivalue">12/100</div>
						</li>
					</ul>
				</div>
			</div>

		</div>

		<div class="ipanel bg_lightgray">
			<div class="ipanel-title ipanel-title-v2">
				<table class="itable itable-v2">
					<thead>
						<tr class="color_yellow">
							<th class="th-25 th-frist">Buyer</th>
							<th class="th-25"><div class="td_cell_text">Date</div></th>
							<th class="th-25"><div class=" td_cell_text">Number</div></th>
							<th class="th-25">Commodity</th>
						</tr>
					</thead>
				</table>
			</div>
			<div class="ipanel-body ipanel-body-v2">
				<table class="itable itable-v2">
					<tbody>
						<tr @click="purchase(1)">
							<td class="th-25 td-frist">Anto</td>
							<td class="th-25"><div class="td_cell_times td_cell_text">Jan.29,2021<br />11h 22m 34s</div></td>
							<td class="th-25"><div class="td_cell_text">1</div></td>
							<td class="th-25 td-last">#001</td>
						</tr>
						<tr @click="purchase(2)">
							<td class="th-25 td-frist">Fabioo</td>
							<td class="th-25 td_cell_times">Jan.29,2021<br />11h 22m 34s</td>
							<td class="th-25"><div class="td_cell_text">1</div></td>
							<td class="th-25 td-last color_yellow"><span>#002</span><img src="../../assets/imgs/prize-win.png" class="iprize-win"/></td>
						</tr>
						<tr @click="purchase(3)">
							<td class="th-25 td-frist">Jaysa</td>
							<td class="th-25 td_cell_times">Jan.29,2021<br />11h 22m 34s</td>
							<td class="th-25"><div class="td_cell_text">1</div></td>
							<td class="th-25 td-last">#003</td>
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
				saleStatus: true,
				time0:'12',
				time1:'01',
				time2:'28',
				progress:20,
				progressTotal:100,
			}
		},created() {
			let id = this.$route.params.id
			if(id == '3'){
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
	
	
	.td_cell_times{
		line-height: 0.6rem;
		text-align: center;
	}
	.td_cell_text{
		text-align: center;
	}
	.iprize-win{
		width: 0.84rem;
		height: 0.98rem;
	}
	
</style>
