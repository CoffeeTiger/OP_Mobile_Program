<template>
	<div class="main_contain">
		<div class="inft-imgs">
			<img src="../../assets/imgs/nft-example.jpg" class="nft-img" />
		</div>
		<div class="nft-names color_yellow">Crytomories-20200122-0011</div>

		<div class="icollapse-panel bg_lightgray">

			<div class="iheader" @click="show(1)">
				<div class="ititle">Description</div>
				<div class="iarrow">
					<img src="../../assets/imgs/arrow-down.png" class="icollepse-arrow" v-if="!open1" />
					<img src="../../assets/imgs/arrow-up.png" class="icollepse-arrow" v-if="open1" />
				</div>
			</div>
			<div :class="open1?'ibody':'ibody ibody-close ibody-close-bottom'">
				<div class="infos">Stakers play an important role in the Openpublish ecosystem. Stakers deposit their
					OPH into the protocol, which contributes to OPH’s long-term price stability. </div>
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
					</ul>
				</div>
			</div>

		</div>

		<div class="iform-panel">
			
			<div class="iform-cell">
				<label>Blockchain</label>
				<div class="iinput-contain">
					<div class="iinput-body">
						<select class="iinput ifrom-input" v-model="blockchain">
							<option value="Ethereum">Ethereum</option>
						</select>
					</div>					
				</div>
			</div>
			
			<div class="iform-cell">
				<label>Price</label>
				<div class="iinput-contain">
					<div class="iinput-body ifrom-input-w460">
						<input type="number" class="iinput ifrom-input" v-model="price" @input="inputChange" placeholder="Please enter the price" min="1" max="999999" />
					</div>
					<div class="iinput-body ifrom-input-w210">
						<select class="iinput ifrom-input" v-model="priceType">
							<option value="OPH">OPH</option>
						</select>
					</div>
				</div>
			</div>
			
			<div class="iform-cell">
				<label>Total count</label>
				<div class="iinput-contain">
					<div class="iinput-body">
						<input type="number" class="iinput ifrom-input" v-model="totalCount" @input="inputChange" placeholder="Please enter the total count" min="1" max="999999"/>
					</div>
				</div>
			</div>
			
			<div class="iform-cell">
				<label>Duration</label>
				<div class="iinput-contain">
					<div class="iinput-body">
						<select class="iinput ifrom-input" v-model="duration">
							<option value="7">7days</option>
							<option value="10">10days</option>
							<option value="14">14days</option>
						</select>
					</div>
				</div>
			</div>			
			
			<div class="iform-panel-title color_yellow">Activity information</div>
			
			<div class="iform-cell">
				<label>Reward</label>
				<div class="iinput-contain"> 
					<div class="iinput-body">
						<select class="iinput ifrom-input" v-model="reward">
							<option value="OPH">OPH</option>
							<option value="NFT">NFT</option>
						</select>
					</div>
				</div>
			</div>
			
			<div class="iform-cell">
				<label>Prize</label>
				<div class="iinput-contain">
					<div class="iinput-body ifrom-input-w460">
						<input type="number" disabled="disabled" class="iinput ifrom-input" v-model="prize" placeholder="Please enter the Prize"/>
					</div>
					<div class="iinput-body ifrom-input-w210">
						<select class="iinput ifrom-input" v-model="prizeType">
							<option value="OPH">OPH</option>
						</select>
					</div>
				</div>
			</div>
			
			<div class="ibtn-contain">
				<div class="ibtn ibtn-publish bg_yellow">Publish</div>
			</div>
		</div>


	</div>
</template>

<script>
	export default {
		name: 'publish',
		data() {
			return {
				open1: true,
				open2: true,
				blockchain:'Ethereum',
				price:10,
				priceType:'OPH',
				totalCount:100,
				duration:'7',
				reward:'OPH',
				prize:1000,
				prizeType:'OPH'
			}
		},created() {
			
		},
		methods: {
			show(v) {
				if (v == 1) {
					this.open1 = !this.open1
				} else if (v == 2) {
					this.open2 = !this.open2
				}
			},
			inputChange(){
				if(!(this.price ==undefined || this.price == null || this.totalCount == undefined || this.totalCount == null)){
					this.prize = this.price * this.totalCount
				}
			}

		},
	}
</script>

<style scoped>
	.inft-imgs {
		width: 100%;
		margin-top: 0.64rem;
		max-height: 7.34rem;
		border-radius: 0.64rem;
		overflow: hidden;
	}

	.inft-imgs .nft-img {
		width: 100%;
		height: 100%;
	}

	.nft-names {
		height: 1.02rem;
		line-height: 1.02rem;
		margin: 0.4rem auto 0.48rem;
		font-size: 0.72rem;
		font-family: Poppins-Medium, Poppins;
		font-weight: 500;
	}
	
	/* .icollapse-panel begain */
	.icollapse-panel {
		width: -webkit-calc(100% - 0.08rem);
		margin: 0.48rem auto;
		border: 0.04rem solid #3F4142;
		border-radius: 0.36rem;
		font-family: Poppins-Regular, Poppins;
	}

	.icollapse-panel .iheader {
		width: -webkit-calc(100% - 1.2rem);
		height: 1.76rem;
		margin: 0 0.6rem;
		line-height: 1.76rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.icollapse-panel .iheader .ititle {
		line-height: 0.9rem;
		font-size: 0.64rem;
		font-weight: 400;
	}

	.icollapse-panel .iheader .icollepse-arrow {
		width: 0.34rem;
		height: 0.2rem;
	}

	.icollapse-panel .ibody {
		width: -webkit-calc(100% - 1.2rem);
		padding: 0.6rem;
		background: #3A3A3A;
		color: #979797;
	}

	.icollapse-panel .ibody-close {
		width: -webkit-calc(100% - 1.2rem);
		height: 0;
		padding: 0;
		overflow: hidden;
	}

	.icollapse-panel .ibody-close-bottom {
		border-bottom: 0.04rem solid #3F4142;
		margin: 0 auto;
	}

	.icollapse-panel .ibody .infos {
		width: 100%;
		line-height: 0.84rem;
		font-size: 0.56rem;
		font-weight: 400;
	}

	.icollapse-panel .ibody .infos-list {
		width: 100%;
		line-height: 0.84rem;
		font-size: 0.52rem;
		font-weight: 400;
	}

	.icollapse-panel .ibody .infos-list ul>li {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	/* .icollapse-panel end */
	
	.iform-panel{
		width: 100%;
		margin: 0 auto 1.2rem;
		font-family: Poppins-Light, Poppins;
	}
	.iform-panel .iform-cell{
		width: 100%;
		margin: 0.48rem auto;
	}
	.iform-panel .iform-cell > label{
		line-height: 0.78rem;
		font-size: 0.56rem;
		font-weight: 300;
		color: #979797;
	}
	.iform-panel .iform-cell .iinput-contain{
		width: 100%;
		height: 1.76rem;
		margin-top: 0.34rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
	.iinput-body{
		width: -webkit-calc(100% - 0.08rem);
		height: 1.76rem;
		line-height: 1.76rem;
		background: #252525;
		border-radius: 0.32rem;
		border: 0.04rem solid #3F4142;
	}
	
	.ifrom-input{
		width: -webkit-calc(100% - 1.2rem);
		height: 1.76rem;
		line-height: 1.76rem;
		margin: 0 0.6rem;
		background-color: #FFFFFF00;
		border: 0;
		font-size: 0.64rem;
		font-weight: 400;
		color: #979797;
		font-family: Poppins-Light, Poppins !important;
	}
	.ifrom-input-w460{
		width: 9.2rem;
	}
	.ifrom-input-w210{
		width: 4.2rem;
	}
	
	.iform-panel-title{
		width: 100%;
		height: 0.9rem;
		line-height: 0.9rem;
		margin: 1rem auto 0;
		font-size: 0.64rem;
		font-family: Poppins-Medium, Poppins;
		font-weight: 500;
	}
	
	select > option{
		background: #252525;
		color: #FFFFFF;
	}
	
	.ibtn-contain{
		width: 100%;
		margin: 0.8rem auto 1.2rem;
	}
	.ibtn-publish{
		width: 100%;
		height: 1.6rem;
		line-height: 1.6rem;
		border-radius: 0.32rem;
		font-size: 0.64rem;
		font-family: Poppins-Bold, Poppins;
		font-weight: bold;
		color: #313131;
	}
</style>
