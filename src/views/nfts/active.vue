<template>
	<div class="main_contain">
		<div class="inft-imgs">
			<img src="../../assets/imgs/nft-example.jpg" class="nft-img" />
		</div>
		<div class="inft-names color_yellow">Crytomories-20200122-0011</div>
		
		<div class="inft-prize">
			<div class="iname">Prize:</div>
			<div class="ivalues">
				<img src="../../assets/imgs/logo/oph.png" class="ilogo-oph"/>
				<span class="inum">25</span>
				<span class="idesc">(Highest)</span>
			</div>
		</div>
		
		<div class="icomm-panel inft-info">
			<div class="ipanel-header"></div>
			<div class="ipanel-body">
				<div class="idesc">Sale ends March 5,2022 at 12:29an CST</div>
				<div class="icountdown icountdown-active">
					<span class="itimes-cell">12</span>
					<img src="../../assets/imgs/dot2.png" class="idot"/>
					<span class="itimes-cell">28</span>
					<img src="../../assets/imgs/dot2.png" class="idot"/>
					<span class="itimes-cell">19</span>
				</div>
				<div class="iprogress">
					<div class="iprogress-inner bg_yellow" style="width: 76%;">76/100</div>
				</div>
				<div class="iprice-num">
					<div class="iprice">
						<img src="../../assets/imgs/logo/eth.png" class="logo-eth"/>
						<span class="ieth-value">0.03</span>
						<span class="ius-value">($881.8)</span>
					</div>
					<div class="inums">
						<div class="icount-img" @click="plus(-1)">
							<img src="../../assets/imgs/minus.png" class="iminus"/>
						</div>
						<span class="icount">{{count}}</span>
						<div class="icount-img" @click="plus(1)">
							<img src="../../assets/imgs/plus.png" class="iplus"/>
						</div>
					</div>
				</div> 
				
			</div>
		</div>
		
		<div class="ibtn-contain">
			<div class="ibtn ibtn-buy bg_yellow color_black">Buy Now</div>
		</div>
		
		
		
	</div>
</template>

<script>
	export default{
		name:'active',
		data() {
			return {
				count: 1
			}
		},methods:{
			plus(v){
				this.count = this.count + v
				if(this.count <= 0){
					this.count = 0
				}
			}
		}
	}
</script>

<style accesskey>
	@import url("../../assets/css/comm.css");
	
	.inft-info .idesc{
		width: 100%;
		line-height: 0.66rem;
		font-size: 0.48rem;
		font-weight: 300;
	}
	.inft-info .icountdown-active{
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
	
	.iprice-num{
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 0.84rem;
	}
	
	.iprice-num .iprice{
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	
	.iprice-num .iprice .ieth-value{
		line-height: 0.96rem;
		font-size: 0.68rem;
		font-family: Poppins-Medium, Poppins;
		font-weight: 500;
		color: #FFFFFF;
	}
	.iprice-num .iprice .ius-value{
		line-height: 0.66rem;
		font-size: 0.48rem;
		font-weight: 300;
	}
	.iprice-num .inums{
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}
	.iprice-num .inums .iminus{
		width: 0.56rem;
		height: 0.1rem;
	}
	.iprice-num .inums .icount-img{
		width: 1rem;
		height: 0.96rem;
		text-align: center;
	}
	.iprice-num .inums .icount-img:active{
		opacity: 0.6;
	}
	.iprice-num .inums .iplus{
		width: 0.56rem;
		height: 0.56rem;
	}
	.iprice-num .inums .icount{
		font-size: 0.68rem;
		font-family: Poppins-Medium, Poppins;
		font-weight: 500;
		color: #FFFFFF;
		margin: 0 1.28rem;
	}
	
	.ibtn-buy{
		width: 100%;
		height: 1.6rem;
		line-height: 1.6rem;
		font-size: 0.64rem;
		font-family: Poppins-Bold, Poppins;
		font-weight: bold;
		border-radius: 0.32rem;
	}
</style>