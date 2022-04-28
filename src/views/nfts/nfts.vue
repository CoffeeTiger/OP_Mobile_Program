<template>
	<div>
		<div class="main_contain">
			<div class="ilevel-0-page-title">NFTs</div>
			<div class="infts-primay-nft bg_gray">
				<div class="inft-imgs">
					<img src="../../assets/imgs/nft-example.png" class="inft-img" />
				</div>
				<div class="inft-infos">
					<div class="icell icell-title">
						<div class="ititle">Cryptomorie</div>
						<div class="ivalue">
							<div class="iprogress">
								<div class="iprogress-inner" style="width: 50%;">50/100</div>
							</div>
						</div>
					</div>

					<div class="icell icell-values">
						<div class="ivalue">
							<img src="../../assets/imgs/logo/eth.png" class="logo-eth" />
							<div class="">0.36</div>
						</div>
					</div>
				</div>
			</div>

			<div class="infts-btns-contain">
				<div class="ibtn infts-btns bg_gray">Create</div>
				<div class="ibtn infts-btns bg_blue">Publish</div>
			</div>

			<!-- <div class="marquee bg_gray">
				<div class="con">
					<div class="cons cons1">OPENPUBLISH <span class="color_blue">OPENPUBLISH</span> OPENPUBLISH <span
							class="color_blue">OPENPUBLISH</span> OPENPUBLISH <span
							class="color_blue">OPENPUBLISH</span> OPENPUBLISH <span
							class="color_blue">OPENPUBLISH</span> OPENPUBLISH <span
							class="color_blue">OPENPUBLISH</span> OPENPUBLISH <span
							class="color_blue">OPENPUBLISH</span> OPENPUBLISH <span
							class="color_blue">OPENPUBLISH</span> OPENPUBLISH <span
							class="color_blue">OPENPUBLISH</span></div>
					<div class="cons"> OPENPUBLISH <span class="color_blue">OPENPUBLISH</span> OPENPUBLISH <span
							class="color_blue">OPENPUBLISH</span> OPENPUBLISH <span
							class="color_blue">OPENPUBLISH</span> OPENPUBLISH <span
							class="color_blue">OPENPUBLISH</span> OPENPUBLISH <span
							class="color_blue">OPENPUBLISH</span>OPENPUBLISH <span
							class="color_blue">OPENPUBLISH</span></div>
				</div>
			</div> -->

			<div class="infts-activity-list">
				<div class="ititle-contain">
					<div class="ititle">Activity list</div>
					<div class="imore">More
						<van-icon name="arrow" />
					</div>
				</div>
				
				<div class="infts-panel bg_gray">
					<div class="ipanel-body">
						<div class="ibody-left">
							<img src="../../assets/imgs/nft-header2.png" class="iimg" />
						</div>
						<ul class="ibody-right">
							<li class="ititle-times">
								<div class="ititle">Angela Long LongLongLongLongLong</div>
								<div class="itimes">
									<span class="itimes-cell">12</span><span class="itimes-middle">:</span>
									<span class="itimes-cell">28</span><span class="itimes-middle">:</span>
									<span class="itimes-cell">19</span>
								</div>
							</li>
							<li class="li-mid li-mid-v1">
								<div class="iprogress">
									<div class="iprogress-inner" style="width: 50%;">50/100</div>
								</div>
							</li>
							<li class="li-mid">
								<label>Price:</label>
								<div class="ivalues"><img src="../../assets/imgs/logo/eth.png"
										class="logo-eth" />0.03<span class="ius-dol">($895.38)</span> </div>
							</li>
							<li class="li-mid">
								<label> Prize:</label>
								<div class="ivalues">NFT</div>
							</li>
						</ul>
					</div>
				</div>

				<div class="infts-panel bg_gray">
					<div class="ipanel-body">
						<div class="ibody-left">
							<img src="../../assets/imgs/nft-header1.png" class="iimg" />
						</div>
						<ul class="ibody-right">
							<li class="ititle-times">
								<div class="ititle">Angela Long LongLongLongLongLong</div>
								<div class="itimes">
									<span class="itimes-cell">12</span><span class="itimes-middle">:</span>
									<span class="itimes-cell">28</span><span class="itimes-middle">:</span>
									<span class="itimes-cell">19</span>
								</div>
							</li>
							<li class="li-mid li-mid-v1">
								<div class="iprogress">
									<div class="iprogress-inner" style="width: 50%;">50/100</div>
								</div>
							</li>
							<li class="li-mid">
								<label>Price:</label>
								<div class="ivalues"><img src="../../assets/imgs/logo/eth.png"
										class="logo-eth" />0.03<span class="ius-dol">($895.38)</span> </div>
							</li>
							<li class="li-mid">
								<label> Prize:</label>
								<div class="ivalues">NFT</div>
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
		name: 'nfts'
	}
</script>

<style scoped>
	.infts-primay-nft {
		width: 100%;
		border-radius: 0.6rem;
		overflow: hidden;
		/* font-family: OpenSans-Regular, OpenSans; */
	}

	.infts-primay-nft .inft-imgs .inft-img {
		width: 100%;
		height: auto;
	}

	.infts-primay-nft .inft-infos {
		width: -webkit-calc(100% - 1.6rem);
		padding: 0.8rem;
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
		line-height: 1.1rem;
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

	.infts-btns-contain {
		width: 100%;
		margin: 0.96rem auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.infts-btns-contain .infts-btns {
		width: 6.6rem;
		height: 1.6rem;
		line-height: 1.6rem;
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
		/* font-family: OpenSans-Regular, OpenSans; */
	}

	.infts-activity-list .ititle-contain {
		width: 100%;
		margin: 1.52rem auto 1.2rem;
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
		color: #B3C0CA;
	}

	.infts-panel {
		width: 100%;
		margin-bottom: 0.64rem;
		border-radius: 0.36rem;
	}

	.infts-panel .ipanel-body {
		width: -webkit-calc(100% - 1.2rem);
		padding: 0.6rem;
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
	.infts-panel .ipanel-body .ibody-right .li-mid-v1{
		margin-top: 0.5rem;
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
		font-weight: 400;
	}

	.ibody-right .ititle-times {
		display: flex;
		justify-content: space-between;
	}

	.ibody-right .ititle-times .ititle {
		width: 4.88rem;
		line-height: 0.84rem;
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
		width: 0.72rem;
		height: 0.72rem;
		line-height: 0.72rem;
		border-radius: 0.12rem;
		display: block;
		background: #D3DBE2;
		text-align: center;
		font-size: 0.48rem;
		font-weight: 400;
		color: #313131;
	}

	.ibody-right .ititle-times .itimes .itimes-middle {
		width: 0.3rem;
		height: 0.72rem;
		line-height: 0.72rem;
		text-align: center;
		font-size: 0.6rem;
	}

	.iprogress {
		width: 4.4rem;
		height: 0.5rem;
		border-radius: 0.26rem;
		background: #D3DBE2;
	}

	.iprogress .iprogress-inner {
		height: 0.5rem;
		line-height: 0.5rem;
		font-size: 0.48rem;
		font-weight: 400;
		border-radius: 0.26rem;
		background: #F7B62D;
		color: #1C212B;
		text-align: right;
	}
</style>
