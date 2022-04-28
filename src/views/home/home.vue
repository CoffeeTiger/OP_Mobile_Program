<template>
	<div>
		<div class="main_contain">
			<div class="ihome-top">
				<img src="../../assets/imgs/topbanner.png" class="itopbanner-img" />
			</div>
			<!-- <div class="ilevel-0-page-title">About OpenPublish</div> -->
			<!-- <div class="ihome-media-contain">
				<iframe class="ivideo"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen frameborder="0" sandbox="allow-same-origin allow-scripts allow-presentation"
					src="https://www.youtube.com/embed/ontbTdodX7M?autoplay=0&amp;controls=1&amp;loop=1&amp;modestbranding=1&amp;rel=0"
					title="Meet OpenSea"></iframe>
			</div> -->
			<div class="ihome-share">
				<img src="../../assets/imgs/home-top-tw.png" class="ishare-img" />
				<img src="../../assets/imgs/home-top-tg.png" class="ishare-img ishare-img-middle" />
				<img src="../../assets/imgs/home-top-dis.png" class="ishare-img" />
			</div>
			<div class="ihome-road-contain">
				<div class="iroad-title">ROADMAP</div>
				<div class="iroad-content">
					<img src="../../assets/imgs/home-road.png" class="iroad-img" />
				</div>
			</div>
			<div class="ihome-panel">
				<div class="ipanel-title">How to get involved?</div>

				<div class="ipanel-card imargin-bottom-36 bg_gray">
					<div class="ipanel-card-body">
						<div class="ipanel-card-title">
							<div class="ititle">Staking</div>
							<!-- <img src="../../assets/imgs/cattle/cattle-purple.png" class="icattle"/> -->
						</div>
						<div class="ipanel-card-info">
							<div class="iinfs">Stakers play an important role in the OpenPublish ecosystem. Stakers deposit
								their OPH into the protocol, which contributes to OPH long-term price stability. In
								exchange, stakers receive additional oph token rewards as well as the right to govern
								the protocol.</div>
							<!-- <div class="iimgs">
								<img src="../../assets/imgs/ihome-Staking.png" class="iimge-stake" />
							</div> -->
						</div>
						<div class="ipanel-card-btns">
							<van-button round type="primary" class="ibtn ibtn-stake bg_blue">STAKE</van-button>
						</div>
					</div>
				</div>

				<div class="ipanel-card imargin-bottom-36 bg_gray">
					<div class="ipanel-card-body">
						<div class="ipanel-card-title">
						<div class="ititle">Bonding</div>
						<!-- <img src="../../assets/imgs/cattle/cattle-red.png" class="icattle"/> -->
						</div>
						<div class="ipanel-card-info">
							<div class="iinfs">Bonding allows you to trade various tokens for OPH at a discounted price.
								In exchange, bond sales provide additional liquidity and reserve assets to the
								Openpublish treasury, contributing to the stability of the protocol. As a result, 99% of
								all liquidity in the treasury is owned by Openpublish.</div>
							<!-- <div class="iimgs">
								<img src="../../assets/imgs/ihome-Bonding.png" class="iimge-bond" />
							</div> -->
						</div>
						<div class="ipanel-card-btns">
							<van-button round type="primary" class="ibtn ibtn-stake bg_blue">BOND</van-button>
						</div>
					</div>
				</div>

				<div class="ipanel-card imargin-bottom-36 bg_gray">
					<div class="ipanel-card-body">
						<div class="ipanel-card-title">
							<div class="ititle">NFTs</div>
							<!-- <img src="../../assets/imgs/cattle/cattle-blue.png" class="icattle"/> -->
						</div>
						<div class="ipanel-card-info">
							<div class="iinfs">Openpublish is the first market to realize and implement very significant
								changes in NFT trading mode and application of economic theory. The general situation of
								this transformation is as follows: in the openpublish platform, the NFT publishing
								business model with high liquidity replaces the traditional NFT auction model.</div>
							<!-- <div class="iimgs">
								<img src="../../assets/imgs/ihome-NFTs.png" class="iimge-nfts" />
							</div> -->
						</div>
						<div class="ipanel-card-btns">
							<van-button round type="primary" class="ibtn ibtn-stake bg_blue">NFTs</van-button>
						</div>
					</div>
				</div>

			</div>
			
			<div class="ihome-panel">
				<div class="ipanel-title">About OpenPublish</div>
				<div class="ihome-media-contain">
					<iframe class="ivideo"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen frameborder="0" sandbox="allow-same-origin allow-scripts allow-presentation"
						src="https://www.youtube.com/embed/ontbTdodX7M?autoplay=0&amp;controls=1&amp;loop=1&amp;modestbranding=1&amp;rel=0"
						title="Meet OpenSea"></iframe>
				</div>
			</div>

			<div class="ihome-panel">
				<div class="ipanel-title">FAQ</div>

				<div class="icollapse ipadding-bottom-30">
					<div
						:class="open1?'icollapse-title-contain':'icollapse-title-contain icollapse-title-contain-close'">
						<div class="icollapse-title" @click="show(1)">
							<div class="ititle">What is Openpublish</div>
							<div class="iarrow">
								<img src="../../assets/imgs/arrow-down.png" class="icollepse-arrow" v-if="!open1" />
								<img src="../../assets/imgs/arrow-up.png" class="icollepse-arrow" v-if="open1" />
							</div>
						</div>
					</div>
					<div :class="open1?'ibody-open':'ibody-close'">
						<div class="icontent">Openpublish is the first market to realize and implement very significant changes in NFT trading mode and application of economic theory.In short! Openpublish = printed version opensea + enhanced version looksrare + value version OpenPublish<br /><br /> In the openpublish platform, the NFT publishing business model with high liquidity replaces the traditional NFT auction model; Cooperate with the strategy of "trading is mining" with strong incentive; Based on the legendary (3,3) token model. These three powerful economic mechanisms are connected by an efficient dispatching control system to build a stable triangular economic system.</div>
					</div>
				</div>

				<div class="icollapse ipadding-bottom-30">
					<div
						:class="open2?'icollapse-title-contain':'icollapse-title-contain icollapse-title-contain-close'">
						<div class="icollapse-title" @click="show(2)">
							<div class="ititle">When to start?</div>
							<div class="iarrow">
								<img src="../../assets/imgs/arrow-down.png" class="icollepse-arrow" v-if="!open2" />
								<img src="../../assets/imgs/arrow-up.png" class="icollepse-arrow" v-if="open2" />
							</div>
						</div>
					</div>
					<div :class="open2?'ibody-open':'ibody-close'">
						<div class="icontent">Sooner than you think! Follow us on Twitter and turn on notifications so
							you don't miss out on any future promotions and giveaways!</div>
					</div>
				</div>

				<div class="icollapse ipadding-bottom-30">
					<div
						:class="open3?'icollapse-title-contain':'icollapse-title-contain icollapse-title-contain-close'">
						<div class="icollapse-title" @click="show(3)">
							<div class="ititle ititle-v2">Is NFT publishing or trading the only way I can benefit from
								OpenPublish?</div>
							<div class="iarrow">
								<img src="../../assets/imgs/arrow-down.png" class="icollepse-arrow" v-if="!open3" />
								<img src="../../assets/imgs/arrow-up.png" class="icollepse-arrow" v-if="open3" />
							</div>
						</div>
					</div>
					<div :class="open3?'ibody-open':'ibody-close'">
						<div class="icontent">
							<p>Of course not, there are many ways to play OpenPublish</p>
							<ul>
								<li>Publish NFT - Bonus for every copy sold</li>
								<li>Trading Rewards - 100% rebate on bonus trading fees! A chance to win a mystery gift
									with every transaction</li>
								<li>Pledge - the more you pledge, the more you get rewarded</li>
								<li>Bonds - Buy our bonds with discounted OPH tokens</li>
								<li>We also have a lot of great gifts for you to explore in our community!</li>
							</ul>
						</div>
					</div>
				</div>

				<div class="icollapse ipadding-bottom-30">
					<div :class="open4?'icollapse-title-contain':'icollapse-title-contain icollapse-title-contain-close'">
						<div class="icollapse-title" @click="show(4)">
							<div class="ititle">How do I help OpenPublish move forward?</div>
							<div class="iarrow">
								<img src="../../assets/imgs/arrow-down.png" class="icollepse-arrow" v-if="!open4" />
								<img src="../../assets/imgs/arrow-up.png" class="icollepse-arrow" v-if="open4" />
							</div>
						</div>
					</div>
					<div :class="open4?'ibody-open':'ibody-close'">
						<div class="icontent">
							<ul>
								<li>Give us your feedback, we are not perfect, but with your suggestions and feedback,
									we will be more and more perfect with your help!</li>
								<li>Send us bug reports, feature requests, your favorite NFT creators, and more at .....
								</li>
								<li>Join us! We welcome anyone who loves what we're doing and wants to contribute to
									OpenPublish!</li>
							</ul>
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'home',
		data() {
			return {
				open1: false,
				open2: false,
				open3: false,
				open4: false,
			}
		},
		created() {

		},
		mounted() {
			/* var video = document.getElementById('video');
			video.play();
			console.info(video) */
		},
		methods: {
			show(v) {
				if (v == 1) {
					this.open1 = !this.open1
				} else if (v == 2) {
					this.open2 = !this.open2
				} else if (v == 3) {
					this.open3 = !this.open3
				} else if (v == 4) {
					this.open4 = !this.open4
				}
				console.info(v)
			},
			play() {
				var video = document.getElementById('video');
				video.play();
				console.info(video)
			}
		},
	}
</script>

<style>
	
	.ihome-media-contain {
		/* width: 13.8rem; 
		opacity: 0.9;
		overflow: hidden;
		background-color: #FFFFFF6e; */
		position: relative;
		width: 100%;
		height: 0;
		padding-bottom: 56.25%;
	}

	.ihome-media-contain .ivideo {
		/* width: 100%;
		height: auto;
		margin: 0 auto; */
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	.ihome-road-contain {
		width: 100%;
		margin: 0 auto;
	}

	.ihome-road-contain .iroad-title {
		width: 100%;
		height: 1.26rem;
		margin: 1.96rem auto 1.44rem;
		line-height: 1.26rem;
		font-size: 0.84rem;
		font-weight: 600;
		font-family: Poppins-SemiBold, Poppins;
	}

	.ihome-road-contain .iroad-cells {
		width: 100%;
		padding-left: 3.48rem;
	}

	.iroad-cell {
		width: 1.32rem;
		height: 2.64rem;
		border: 3px solid #E6AA53;
		border-top-left-radius: 1.32rem;
		border-bottom-left-radius: 1.32rem;
		border-right: 0;
	}

	.ihome-road-contain .iroad-content {
		width: 100%;
		text-align: center;
	}

	.ihome-road-contain .iroad-content .iroad-img {
		width: 10.38rem;
		height: auto;
	}

	.ihome-panel {
		width: 100%;
		/* font-family: OpenSans-Regular, OpenSans; */
	}

	.ihome-panel .ipanel-title {
		width: 100%;
		height: 1.2rem;
		line-height: 1.2rem;
		font-size: 0.84rem;
		font-weight: 600;
		margin: 2.4rem 0 1.52rem;
		font-family: Poppins-SemiBold, Poppins;
	}

	.ihome-panel .ipanel-card {
		width: 100%;
		border-radius: 0.36rem;
	}

	.ihome-panel .ipanel-card .ipanel-card-body {
		width: -webkit-calc(100% - 1.2rem);
		margin: 0 auto;
		padding: 0.6rem 0;
	}

	.ihome-panel .ipanel-card .ipanel-card-title {
		width: 100%;
		margin-bottom: 0.4rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.ihome-panel .ipanel-card .ipanel-card-title .ititle{
		height: 1.2rem;
		line-height: 1.2rem;
		font-size: 0.84rem;
		font-weight: 500;
		font-family: Poppins-Medium, Poppins;
	}
	.ihome-panel .ipanel-card .ipanel-card-title .icattle{
		width: 1rem;
		height: 1.22rem;
	}

	.ihome-panel .ipanel-card .ipanel-card-info {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.ihome-panel .ipanel-card .ipanel-card-info .iinfs {
		/* width: 7.88rem; */
		width: 100%;
		min-height: 3.3rem;
		font-size: 0.56rem;
		font-weight: 400;
		line-height: 0.84rem;
		text-align: justify;
		/* font-family: Poppins-Regular, Poppins; */
	}

	.ihome-panel .ipanel-card .ipanel-card-info .iimge-stake {
		width: 3.44rem;
		height: 3.84rem;
	}

	.ihome-panel .ipanel-card .ipanel-card-info .iimge-bond {
		width: 3.76rem;
		height: 3.88rem;
	}

	.ihome-panel .ipanel-card .ipanel-card-info .iimge-nfts {
		width: 3.58rem;
		height: 2.94rem;
	}

	.ihome-panel .ipanel-card .ipanel-card-btns {
		width: 100%;
		padding: 0.96rem 0 0.36rem;
	}

	.ihome-panel .ipanel-card .ipanel-card-btns .ibtn-stake {
		width: 3.56rem;
		height: 1.2rem;
		line-height: 1.2rem;
		border-radius: 0.6rem;
		padding: 0 0.5rem;
		font-size: 0.56rem;
		font-weight: 400;
		font-family: Poppins-Medium, Poppins;
	}
 

	.van-cell {
		background-color: #0C111B !important;
	}
 
	.icollapse .icollapse-title-contain {
		width: 100%;
		background-color: #253341;
		border-top-left-radius: 0.36rem;
		border-top-right-radius: 0.36rem;
	}

	.icollapse .icollapse-title-contain-close {
		border-bottom-left-radius: 0.36rem;
		border-bottom-right-radius: 0.36rem;
	}

	.icollapse .icollapse-title-contain .icollapse-title {
		line-height: 1.44rem;
		width: -webkit-calc(100% - 1.2rem);
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 0.56rem;
		font-weight: 400;
		font-family: Poppins-Regular, Poppins;
	}

	.icollapse .icollapse-title-contain .icollapse-title .ititle {
		width: -webkit-calc(100% - 1rem);
	}

	.icollapse .icollapse-title-contain .icollapse-title .ititle-v2 {
		line-height: .8rem;
	}

	.icollapse .icollapse-title-contain .icollapse-title .icollepse-arrow {
		width: 0.38rem;
		height: 0.24rem;
	}

	.ibody-open {
		width: 100%;

		/* min-height: 9.6rem;
		transition: min-height .5s; */
		background: #313e4c;
		border-radius: 0 0 0.36rem 0.36rem;
		overflow: hidden;
		/* font-family: OpenSans-Regular, OpenSans; */
	}

	.ibody-close {
		width: 100%;
		height: 0;
		/* height: 0;
		min-height: 0;
		transition: min-height .5s; */
		background: #313e4c;
		border-radius: 0 0 0.36rem 0.36rem;
		overflow: hidden;
	}

	.icollapse .icontent {
		width: -webkit-calc(100% - 1.2rem);
		margin: 0 auto;
		padding: 0.6rem 0;
		line-height: 0.66rem;
		font-size: 0.48rem;
		font-weight: 400;
		color: #B3C0CA;
		font-family: Poppins-Regular, Poppins;
		text-align: justify;
	}

	/* @media only screen and (min-width: 0px) and (max-width: 360px){
		.ibody-open{
		width: 100%;
		height: 0;
		min-height: 10.5rem;
		transition: min-height .5s;
		background: #313e4c;
		border-radius: 0 0 0.36rem 0.36rem;
		overflow: hidden;
		font-family: OpenSans-Regular, OpenSans;
		}
	} 
	@media only screen and (min-width: 450px){
		.ibody-open{
		width: 100%;
		height: 0;
		min-height: 8rem;
		transition: min-height .5s;
		background: #313e4c;
		border-radius: 0 0 0.36rem 0.36rem;
		overflow: hidden;
		font-family: OpenSans-Regular, OpenSans;
		}
	} */

	.icollapse .icontent ul {
		width: 100%;
	}

	.icollapse .icontent ul>li {
		line-height: 0.72rem;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	.icollapse .icontent ul>li::before {
		content: '';
		width: 0.08rem;
		height: 0.08rem;
		border-radius: 50%;
		margin: 0.4rem;
		display: block;
		background: #B3C0CA;
	}

	.ihome-share {
		width: 100%;
	}

	.ihome-share .ishare-img {
		width: 0.88rem;
		height: 0.88rem;
	}

	.ihome-share .ishare-img-middle {
		margin: 0 0.78rem;
	}

	.ihome-share .ishare-img:active {
		opacity: 0.6;
	}
	
	.ihome-top{
		width: 100%;
		margin: 1.14rem auto 1.64rem;
	}
	.ihome-top .itopbanner-img{
		width: 100%;
	}
</style>
