<template>
	<div>
		<div class="main_contain">
			<div class="infts-activity-list">
				<div class="ititle-contain">
					<div class="money-cell money-num">
						<select v-model="compieted" class="icon-select1">
							<option value="Com">Compieted</option>
						</select>
					</div>
					<div class="money-cell money-num" style="width: 2.76rem;">
						<select v-model="nft" class="icon-select1" style="width: 2.76rem;">
							<option value="nft">NFT</option>
						</select>
					</div>
					<div class="money-cell money-num money-num-n2" style="padding-right: 0rem;font-size: 0.52rem">
						<input v-model="min" placeholder="Min" class="more-input" />
						To
						<input v-model="max" placeholder="Max" class="more-input" style="margin-left: 0.12rem;" />
						<div class="more-input-img">
							<div @click="minClick" style="line-height: 0.82rem;height: 0.82rem;">
								<img src="../../assets/imgs/arrow-down.svg" />
							</div>
							<hr style="margin:0rem; width: 0.94rem;height: 0.04rem;background-color: #3F4142;border: #3F4142;"/>
							<div @click="maxClick" style="line-height: 0.82rem;height: 0.82rem;">
								<img src="../../assets/imgs/arrow-down.svg" />
							</div>
						</div>
					</div>
				</div>

				<div class="infts-panel bg_lightgray" @click="goBuy('2222')">
					<div class="ipanel-body">
						<div class="ibody-left">
							<img src="../../assets/imgs/nft-header1.png" class="iimg" />
						</div>
						<ul class="ibody-right">
							<li class="ititle-times">
								<div class="ititle color_yellow">Angela Long LongLongLongLongLong</div>
								<div class="itimes">
									<span class="itimes-cell">12</span>
									<img src="../../assets/imgs/dot2.png" class="idot" />
									<span class="itimes-cell">28</span>
									<img src="../../assets/imgs/dot2.png" class="idot" />
									<span class="itimes-cell">19</span>
								</div>
							</li>
							<li class="li-mid li-mid-v2">
								<div class="iprogress">
									<div class="iprogress-inner bg_yellow" style="width: 66%;">66/100</div>
								</div>
							</li>
							<li class="li-mid li-mid-v1">
								<label> Prize:</label>
								<div class="ivalues">NFT</div>
							</li>
							<li class="li-mid">
								<label>Price:</label>
								<div class="ivalues"><img src="../../assets/imgs/logo/eth.png"
										class="logo-eth" />0.03<span class="ius-dol">($895.38)</span> </div>
							</li>
						</ul>
					</div>
				</div>

				<div class="infts-panel bg_lightgray" @click="goBuy('1111')">
					<div class="ipanel-body">
						<div class="ibody-left">
							<img src="../../assets/imgs/nft-header2.png" class="iimg" />
						</div>
						<ul class="ibody-right">
							<li class="ititle-times">
								<div class="ititle color_yellow">Angela Long LongLongLongLongLong</div>
								<div class="itimes">
									<span class="itimes-cell">12</span>
									<img src="../../assets/imgs/dot2.png" class="idot" />
									<span class="itimes-cell">28</span>
									<img src="../../assets/imgs/dot2.png" class="idot" />
									<span class="itimes-cell">19</span>
								</div>
							</li>
							<li class="li-mid li-mid-v2">
								<div class="iprogress">
									<div class="iprogress-inner bg_yellow" style="width: 76%;">76/100</div>
								</div>
							</li>
							<li class="li-mid li-mid-v1">
								<label> Prize:</label>
								<div class="ivalues">NFT</div>
							</li>
							<li class="li-mid">
								<label>Price:</label>
								<div class="ivalues"><img src="../../assets/imgs/logo/eth.png"
										class="logo-eth" />0.03<span class="ius-dol">($895.38)</span> </div>
							</li>
						</ul>
					</div>
				</div>

				<div class="infts-panel bg_lightgray" @click="goBuy('3')">
					<div class="ipanel-body">
						<div class="ibody-left">
							<img src="../../assets/imgs/nft-header3.png" class="iimg" />
						</div>
						<ul class="ibody-right">
							<li class="ititle-times">
								<div class="ititle color_yellow">Angela Long LongLongLongLongLong</div>
								<div class="itimes">
									<span class="itimes-cell">12</span>
									<img src="../../assets/imgs/dot2.png" class="idot" />
									<span class="itimes-cell">28</span>
									<img src="../../assets/imgs/dot2.png" class="idot" />
									<span class="itimes-cell">19</span>
								</div>
							</li>
							<li class="li-mid li-mid-v2">
								<div class="iprogress">
									<div class="iprogress-inner bg_yellow" style="width: 40%;">40/100</div>
								</div>
							</li>
							<li class="li-mid li-mid-v1">
								<label> Prize:</label>
								<div class="ivalues">NFT</div>
							</li>
							<li class="li-mid">
								<label>Price:</label>
								<div class="ivalues"><img src="../../assets/imgs/logo/eth.png"
										class="logo-eth" />0.03<span class="ius-dol">($895.38)</span> </div>
							</li>
						</ul>
					</div>
				</div>


			</div>

		</div>
	</div>
</template>

<script>
	export default {
		name: 'nfts',
		data() {
			return {
				ustat: false,
				compieted: 'Com',
				nft: 'nft',
				min:'',
				max:''
			}
		},
		methods: {
			maxClick(){
				this.max++
			},
			minClick(){
				this.min++
			},
			goMoreList() {
				this.$router.push({
					name: 'publishlist',
					params: {}
				})
			},
			publish() {
				this.$router.push({
					name: 'publishlist',
					params: {}
				})
			},
			create() {
				this.$router.push({
					name: 'create',
					params: {}
				})
			},
			goBuy(id) {
				this.$router.push({
					name: 'active',
					params: {
						id: id
					}
				})
			},
		}
	}
</script>

<style scoped>
	.more-input-img {
		width: 0.94rem;
		border-left: 0.02rem solid #3F4142;
		display: grid;
		text-align: center;
	}

	.more-input {
		width: 1.2rem;
		height: 1.76rem;
		background: #252525;
		border-radius: 0.32rem;
		border: none;
		font-size: 0.52rem;
		line-height: 1.76rem;
		color: #FFFFFF;
	}

	.icon-select1 {
		cursor: pointer;
		appearance: none;
		-moz-appearance: none;
		-webkit-appearance: none;
		background: url("../../assets/imgs/arrow-down.png") no-repeat right center transparent;
		background-size: 0.34rem 0.2rem;
		border: none;
		font-size: 0.52rem;
		color: #FFFFFF;
		width: 4.14rem;
		height: 1.76rem;
		border-radius: 0.32rem;

	}

	.money-num-n2 {
		display: flex;
		
	}

	.money-num {
		width: 4.14rem;
		height: 1.76rem;
		text-align: left;
		line-height: 1.76rem;
		background: #252525;
		box-shadow: 0rem 0.08rem 0.16rem 0rem rgba(0, 0, 0, 0.3);
		border-radius: 0.32rem;
		padding-right: 0.28rem;
		border: 0.04rem solid #3F4142;
		padding-left: 0.28rem;
	}

	.money-cell {
		color: #979797
	}

	.infts-primay-nft {
		width: -webkit-calc(100% - 0.08rem);
		border-radius: 0.64rem;
		overflow: hidden;
		border: 0.04rem solid #3F4142;
		/* font-family: OpenSans-Regular, OpenSans; */
	}

	.infts-primay-nft .inft-imgs .inft-img {
		width: 100%;
		height: auto;
	}

	.infts-primay-nft .inft-infos {
		width: -webkit-calc(100% - 1.6rem);
		padding: 0.6rem 0.8rem;
		margin: 0 auto;
	}

	.infts-primay-nft .inft-infos .icell {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 0.22rem;
	}

	.infts-primay-nft .inft-infos .icell-title {
		font-size: 0.72rem;
		font-weight: 500;
		line-height: 1.02rem;
		font-family: Poppins-Medium, Poppins;
	}

	.infts-primay-nft .inft-infos .icell-title .ivalue {
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}

	.logo-eth {
		width: 0.34rem;
		height: 0.6rem;
		margin-right: 0.2rem;
	}

	.infts-primay-nft .inft-infos .icell-values {
		font-size: 0.72rem;
		font-weight: 500;
		line-height: 0.9rem;
		margin-top: 0.5rem;
		font-family: Poppins-Medium, Poppins;
	}

	.infts-primay-nft .inft-infos .icell-values .ivalue {
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	.infts-primay-nft .inft-infos .icell-values .ivalue .ius-dol {
		font-size: 0.48rem;
		font-weight: 300;
		font-family: Poppins-Light, Poppins;
		color: #979797;
	}

	.infts-btns-contain {
		width: 100%;
		margin: 0.48rem auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.infts-btns-contain .infts-btns {
		width: 6.54rem;
		height: 1.52rem;
		line-height: 1.52rem;
		border: 0.04rem solid #3F4142;
		text-align: center;
		font-size: 0.64rem;
		font-weight: 600;
		border-radius: 0.36rem;
		font-family: Poppins-SemiBold, Poppins;
	}

	.marquee {
		width: 100%;
		margin: 0 auto;
		overflow: hidden;
	}

	.marquee .con {
		width: 100%;
		line-height: 1rem;
		animation: marquee 60s linear infinite;
		animation-delay: 0s;
		position: relative;
		white-space: nowrap;
		font-size: 0.4rem;
		font-weight: 300;
		/* font-family: OpenSansRoman-Light, OpenSansRoman; */
		display: inline-block;
	}

	@keyframes marquee {
		0% {
			transform: translateX(100%);
		}

		100% {
			transform: translateX(-100%);
		}
	}

	.marquee .con .cons {
		display: inline;
	}

	.marquee .con .cons1 {
		margin-left: -90%;
	}

	.infts-activity-list {
		width: 100%;
	}

	.infts-activity-list .ititle-contain {
		width: 100%;
		margin: 0.82rem auto 0.56rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.infts-activity-list .ititle-contain .ititle {
		line-height: 1.16rem;
		font-size: 0.84rem;
		font-weight: 600;
		font-family: Poppins-SemiBold, Poppins;
	}

	.infts-activity-list .ititle-contain .imore {
		font-size: 0.52rem;
		font-weight: 400;
		color: #B4B4B4;
	}

	.infts-activity-list .ititle-contain .imore .iarrow-right {
		width: 0.16rem;
		height: 0.28rem;
		margin-left: 0.2rem;
	}

	.infts-panel {
		width: -webkit-calc(100% - 0.08rem);
		margin-bottom: 0.48rem;
		border-radius: 0.36rem;
		border: 0.04rem solid #3F4142;
	}

	.infts-panel:active {
		opacity: 0.6;
	}

	.infts-panel .ipanel-body {
		width: -webkit-calc(100% - 1.2rem);
		padding: 0.78rem 0.6rem;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
	}

	.infts-panel .ipanel-body .ibody-left {
		width: 3.54rem;
		height: 4.04rem;
		border-radius: 0.3rem;
		overflow: hidden;
	}

	.infts-panel .ipanel-body .ibody-left .iimg {
		width: 3.54rem;
		height: 4.04rem;
	}

	/* 418 */
	.infts-panel .ipanel-body .ibody-right {
		width: 8.36rem;
	}

	.infts-panel .ipanel-body .ibody-right .li-mid {
		margin-top: 0.2rem;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	.infts-panel .ipanel-body .ibody-right .li-mid-v1 {
		margin-top: 0.4rem;
	}

	.infts-panel .ipanel-body .ibody-right .li-mid-v2 {
		margin-top: 0.3rem;
	}

	.infts-panel .ipanel-body .ibody-right .li-mid label {
		margin-right: 0.2rem;
		font-size: 0.48rem;
		font-weight: 300;
		font-family: Poppins-Light, Poppins;
	}

	.li-mid .ivalues {
		font-size: 0.68rem;
		font-family: Poppins-Medium, Poppins;
		font-weight: 500;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	.li-mid .ivalues .ius-dol {
		font-size: 0.48rem;
		font-weight: 300;
		font-family: Poppins-Light, Poppins;
		color: #979797;
	}

	.ibody-right .ititle-times {
		display: flex;
		justify-content: space-between;
	}

	.ibody-right .ititle-times .ititle {
		width: 4.88rem;
		line-height: 0.78rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-size: 0.56rem;
		font-weight: 400;
	}

	.ibody-right .ititle-times .itimes {
		width: 3.54rem;
		overflow: hidden;
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}

	.ibody-right .ititle-times .itimes .itimes-cell {
		width: 0.74rem;
		height: 0.72rem;
		line-height: 0.72rem;
		border-radius: 0.12rem;
		display: block;
		background: #B4B4B4;
		text-align: center;
		font-size: 0.48rem;
		font-weight: 400;
		color: #313131;
	}

	.ibody-right .ititle-times .itimes .idot {
		width: 0.1rem;
		height: 0.3rem;
		margin: 0 0.14rem;
	}

	.iprogress {
		width: 4.48rem;
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
</style>
