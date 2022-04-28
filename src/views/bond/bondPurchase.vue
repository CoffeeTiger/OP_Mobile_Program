<template>
	<div>
		<div class="main_contain">
			
			<div class="isummary bg_gray margin-top-48">
				<div class="isumm-cell">
					<div class="iname">Bond Price</div>
					<div class="ivalue">$317,344,011</div>
				</div>
				<div class="isumm-cell">
					<div class="iname">Market Price</div>
					<div class="ivalue">$32217.21</div>
				</div>
				<div class="isumm-cell">
					<div class="iname">Fixed Term</div>
					<div class="ivalue">2days</div>
				</div>
			</div>
			
			<div class="ipanel bg_gray">
				<div class="ipanel-title">
					<span>Bond</span>
				</div>
				<div class="ipanel-body">
					<ul class="ibond-infos">
						<li>
							<span>Your Balance</span><span>0.00000 OPH-LP</span>
						</li>
						<li>
							<span>You Will Get</span><span>0.0000</span>
						</li>
						<li>
							<span>Max You Can Buy</span><span>OPH</span>
						</li>
						<li>
							<span>Discount</span><span>0.73%</span>
						</li>
						<li>
							<span>Duration</span><span>2days</span>
						</li>
					</ul>
				</div>
			</div>
			
			
			<div class="itips">
				<article class="iarticle">Important: New bonds are auto-staked(accrue rebase rewards) and no longer vest linearly. Simply claim as OPH at the end of the term.</article>
			</div>
			
			<div class="ibtn-contain">
				<input type="button" value="Connect wallet" class="ibtn iibtn-bond-purc bg_blue" v-if="!ustat"/>
				<input type="button" value="Bond" class="ibtn iibtn-bond-purc bg_blue" v-if="ustat"/>
			</div>
			
		</div>
	</div>
</template>

<script>
	export default{
		name:'bondpurchase',
		data() {
			return {
				ustat: true
			}
		},
	}
</script>

<style scoped>
	.margin-top-48{
		margin-top: 0.96rem;
	}
	.ibond-infos{
		width: 100%;
		line-height: 0.6rem;
		font-size: 0.4rem;
		font-weight: 400;
		/* font-family: OpenSans-Regular, OpenSans; */
		color: #B3C0CA;
	}
	.ibond-infos > li{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
	.itips{
		width: 11.2rem;
		margin: 1.28rem auto;
	}
	.itips .iarticle{
		font-size: 0.4rem;
		font-weight: 400;
		line-height: 0.54rem;
		color: #B3C0CA;
		/* font-family: OpenSans-Regular, OpenSans; */
	}
	.ibtn-contain{
		width: 100%;
		margin: 1.28rem auto;
	}
	.ibtn-contain .iibtn-bond-purc{
		width: 13.72rem;
		height: 1.6rem;
		line-height: 1.6rem;
		border-radius: 0.32rem;
		font-size: 0.52rem;
		font-weight: 500;
	}
</style>
