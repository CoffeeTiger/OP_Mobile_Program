<template>
	<div>
		<div class="main_contain">
			<div class="ilevel-0-page-title color_yellow">Bond</div>
			
			<div class="isummary isummary-v2 bg_lightgray">
				<div class="isumm-cell">
					<div class="iname">Tatal Value Deposited</div>
					<div class="ivalue">$378.288.910</div>
				</div>
				<div class="isumm-cell">
					<div class="iname">APY</div>
					<div class="ivalue">288.15%</div>
				</div>
				<div class="isumm-cell">
					<div class="iname">&emsp;&emsp;</div>
					<div class="ivalue"></div>
				</div>
			</div>
			
			<div class="ipanel bg_lightgray">
				<div class="ipanel-title ipanel-title-v2">
					<table class="itable itable-v2">
						<thead>
							<tr class="color_yellow">
								<th class="th-25 th-frist">Bond</th>
								<th class="th-25">Price</th>
								<th class="th-25">Discount</th>
								<th class="th-25 th-last">Duration</th>
							</tr>
						</thead>
					</table>
				</div>
				<div class="ipanel-body ipanel-body-v2">
					<table class="itable itable-v2">
						<tbody>
							<tr @click="purchase(1)">
								<td class="th-25 td-frist">OPH-LP</td>
								<td class="th-25">$20.54</td>
								<td class="th-25">-0.25%</td>
								<td class="th-25 td-last">5days</td>
							</tr>
							<tr @click="purchase(2)">
								<td class="th-25 td-frist">OPH-LP</td>
								<td class="th-25">$28.54</td>
								<td class="th-25">-0.85%</td>
								<td class="th-25 td-last">3days</td>
							</tr>
							<tr @click="purchase(3)">
								<td class="th-25 td-frist">OPH-LP</td>
								<td class="th-25">$28.54</td>
								<td class="th-25">-0.15%</td>
								<td class="th-25 td-last">2days</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			
			<div class="itips">
				<article class="iarticle">Important: New bonds are auto-staked(accrue rebase rewards) and no longer vest linearly. Simply claim as OPH at the end of the term.</article>
			</div>
			
		</div>
	</div>
</template>

<script>
	export default{
		name:'bond',
		methods:{
			purchase(v){
				if (v == 1) {
					this.$router.push({name:'bondpurchase', params:{id:v}})
				} else if(v == 2){
					this.$router.push({name:'bondpurchase', params:{id:v}})
				} else if(v == 3){
					this.$router.push({name:'bondpurchase', params:{id:v}})
				}
			}
		}
	}
</script>

<style scoped>
	/* .itable-v2{
		background: ##3A3A3A;
		font-size: 0.52rem;
		font-weight: 400;
		font-family: Poppins-Regular, Poppins;
	}
	.itable-v2 th, td{text-align: left;font-weight: 400;}
	.itable-v2 tr:active{
		background: #6B6B6B;
	}
	.itable-v2 .th-frist, .th-last{
		padding-left: 0.4rem;
	}
	.itable-v2 .td-frist, .td-last{
		padding-left: 0.4rem;
	}
	.itable-v2 .tr-last{
		padding-bottom: 0.6rem;
	} */
	
	.ibtn-bond{
		width: 1.72rem;
		height: 0.72rem;
		line-height: 0.72rem;
	}
	
	.itips{
		width: 10.6rem;
		margin: 2.52rem auto;
	}
	.itips .iarticle{
		font-size: 0.52rem;
		font-weight: 400;
		line-height: 0.64rem;
		color: #979797;
		text-align: center;
	}
</style>
