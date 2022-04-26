<template>
	<div>
		<div class="main_contain">
			<div class="infts-title-big">NFTs</div>
			<div class="infts-primay-nft bg_gray">
				<div class="inft-imgs">
					<img src="../../assets/imgs/nft-example.png" class="inft-img" />
				</div>
				<div class="inft-infos">
					<div class="icell icell-title">
						<div class="ititle">Cryptomorie</div>
						<div class="ivalue">
							<img src="../../assets/imgs/logo/eth.png" class="logo-eth" />
							<div class="">0.36</div>
						</div>
					</div>

					<div class="icell icell-values">
						<div class="ititle">Progress:80%</div>
						<div class="ivalue">($302.11)</div>
					</div>
				</div>
			</div>

			<div class="infts-btns">
				<div class="ibtn bg_gray">Create</div>
				<div class="ibtn bg_blue">Publish</div>
			</div>

			<div class="marquee bg_gray">
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
			</div>

			<div class="infts-activity-list">
				<div class="ititle-contain">
					<div class="ititle">Activity list</div>
					<div class="imore">More <van-icon name="arrow" />
					</div>
				</div>
				<div class="infts-panel bg_gray">
					<div class="ipanel-body">
						<div class="ibody-up">
							<div class="ibody-up-left">
								<div class="iindex">01</div>
								<div class="inftimgs">
									<img src="../../assets/imgs/nft-header1.png" class="iimg"/>
								</div>
								<div class="iname-value">
									<div class="iname">Erin Green</div>
									<div class="ivalue">
										<img src="../../assets/imgs/logo/eth.png" class="logo-eth" />
										<span class="ivalue-eth">0.03</span>
										<span class="ivalue-dol">($895.32)</span>
									</div>
								</div>
							</div>
							<div class="ibody-up-right">
								<div class="itime-cell">12</div>:
								<div class="itime-cell">12</div>:
								<div class="itime-cell">12</div>
							</div>
						</div>
						<div class="ibody-down">
							<div class="iinfos-cell">
								<div class="ititle">Prize</div>
								<div class="ivalues">NFT</div>
							</div>
							<div class="iinfos-cell">
								<div class="ititle">Progress</div>
								<div class="ivalues">
									<!-- <van-progress :percentage="50" stroke-width="8" class="iprogress"/> -->
									<div class="iprogress">
										<div class="iprogress-inner" style="width: 30%;">30/100</div>
									</div>
								</div>
							</div>
							<div class="iinfos-cell">
								<div class="ititle">Sale end</div>
								<div class="ivalues">Apr 19.2022</div>
							</div>
						</div>
					</div>
				</div>
				
				<div class="infts-panel bg_gray">
					<div class="ipanel-body">
						<div class="ibody-up">
							<div class="ibody-up-left">
								<div class="iindex">02</div>
								<div class="inftimgs">
									<img src="../../assets/imgs/nft-header2.png" class="iimg"/>
								</div>
								<div class="iname-value">
									<div class="iname">Erin Green</div>
									<div class="ivalue">
										<img src="../../assets/imgs/logo/eth.png" class="logo-eth" />
										<span class="ivalue-eth">0.03</span>
										<span class="ivalue-dol">($895.32)</span>
									</div>
								</div>
							</div>
							<div class="ibody-up-right">
								<div class="itime-cell">12</div>:
								<div class="itime-cell">12</div>:
								<div class="itime-cell">12</div>
							</div>
						</div>
						<div class="ibody-down">
							<div class="iinfos-cell">
								<div class="ititle">Prize</div>
								<div class="ivalues">NFT</div>
							</div>
							<div class="iinfos-cell">
								<div class="ititle">Progress</div>
								<div class="ivalues">
									<div class="iprogress">
										<div class="iprogress-inner" style="width: 50%;">50/100</div>
									</div>
								</div>
							</div>
							<div class="iinfos-cell">
								<div class="ititle">Sale end</div>
								<div class="ivalues">Apr 19.2022</div>
							</div>
						</div>
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
	.infts-title-big {
		width: 100%;
		height: 1.3rem;
		padding: 0.96rem 0;
		font-size: 0.96rem;
		font-weight: 600;
		line-height: 1.3rem;
		font-family: OpenSansRoman-SemiBold, OpenSansRoman;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.infts-primay-nft {
		width: 100%;
		border-radius: 0.6rem;
		overflow: hidden;
		font-family: OpenSans-Regular, OpenSans;
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
		font-size: 0.64rem;
		font-weight: 400;
		line-height: 0.86rem;
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
		font-size: 0.52rem;
		font-weight: 400;
		line-height: 0.72rem;
	}

	.infts-btns {
		width: 100%;
		margin: 0.96rem auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.infts-btns .ibtn {
		width: 6.6rem;
		height: 1.6rem;
		line-height: 1.6rem;
		text-align: center;
		font-size: 0.52rem;
		font-weight: 500;
		border-radius: 0.36rem;
	}

	.infts-btns .ibtn:active {
		opacity: .6;
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
		font-family: OpenSansRoman-Light, OpenSansRoman;
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
	
	.infts-activity-list{
		width: 100%;
		font-family: OpenSans-Regular, OpenSans;
	}
	.infts-activity-list .ititle-contain{
		width: 100%;
		line-height: 1.28rem;
		margin: 0.96rem auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.infts-activity-list .ititle-contain .ititle{
		font-size: 0.64rem;
		font-weight: 500;
	}
	.infts-activity-list .ititle-contain .imore{
		font-size: 0.4rem;
		font-weight: 400;
	}
	
	.infts-panel{
		width: 100%;
		margin-bottom: 0.64rem;
		border-radius: 0.36rem;
	}
	.infts-panel .ipanel-body{
		width: -webkit-calc(100% - 1.2rem);
		padding: 0.6rem;
		margin: 0 auto;
	}
	.infts-panel .ipanel-body .ibody-up{
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.infts-panel .ipanel-body .ibody-up .ibody-up-left{
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	.ibody-up-left .iindex{
		font-size: 0.52rem;
		font-weight: 500;
	}
	.ibody-up-left .inftimgs{
		width: 1.44rem;
		height: 1.44rem;
		margin: 0 0.36rem;
		border-radius: 0.24rem;
		overflow: hidden;
	}
	.ibody-up-left .inftimgs .iimg{
		width: 100%;
	}
	.ibody-up-left .iname-value .iname{
		font-size: 0.52rem;
		font-weight: 400;
	}
	.ibody-up-left .iname-value .ivalue{
		display: flex;
		justify-content: flex-start;
		align-items: center;
		margin-top: 0.28rem;
	}
	.ibody-up-left .iname-value .ivalue-eth{
		font-size: 0.52rem;
		font-weight: 500;
	}
	.ibody-up-left .iname-value .ivalue-dol{
		font-size: 0.4rem;
		font-weight: 300;
		font-family: OpenSansRoman-Light, OpenSansRoman;
	}
	.infts-panel .ipanel-body .ibody-up .ibody-up-right{
		line-height: 0.6rem;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	.ibody-up-right .itime-cell{
		width: 0.6rem;
		height: 0.6rem;
		line-height: 0.6rem;
		margin: 0 0.16rem;
		border-radius: 0.1rem;
		overflow: hidden;
		background: #B3C0CA;
		font-size: 0.34rem;
		font-weight: 400;
		font-family: PingFangSC-Regular, PingFang SC;
		color: #313131;
		text-align: center;
	}
	
	.infts-panel .ipanel-body .ibody-down{
		width: 100%;
		padding-top: 0.8rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.infts-panel .ipanel-body .ibody-down .iinfos-cell{
		font-family: OpenSansRoman-Light, OpenSansRoman;
	}
	.infts-panel .ipanel-body .ibody-down .iinfos-cell .ivalues{
		line-height: 0.66rem;
		margin-top: 0.1rem;
		font-size: 0.48rem;
		font-weight: 400;
		font-family: OpenSans-Regular, OpenSans;
	}
	.iprogress{
		width: 2.4rem;
		height: 0.32rem;
		border-radius: 0.16rem;
		margin-top: 0.28rem;
		background: #D8D8D8;
	}
	.iprogress .iprogress-inner{
		height: 0.32rem;
		line-height: 0.32rem;
		font-size: 0.28rem;
		border-radius: 0.16rem;
		background: #F7B62D;
		color: #313131;
	}
	.infts-panel .ipanel-body .ibody-down .iinfos-cell .ititle{
		font-size: 0.4rem;
		font-weight: 300;
		font-family: OpenSansRoman-Light, OpenSansRoman;
	}
	
</style>
