<template>
	<div>
		<div class="main_contain">
			<div class="ilevel-0-page-title">Bond</div>
			
			<div class="isummary bg_gray">
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
			
			<div class="ipanel bg_gray">
				<div class="ipanel-title">
					<table class="itable">
						<thead>
							<tr>
								<th class="th-20">Bond</th><th class="th-20">Price</th><th class="th-20">Discount</th><th class="th-20">Duration</th><th class="th-20">&ensp;</th>
							</tr>
						</thead>
					</table>
				</div>
				<div class="ipanel-body">
					<table class="itable">
						<tbody>
							<tr>
								<td class="td-20">OPH-LP</td>
								<td class="td-20">$28.54</td>
								<td class="td-20">-0.85%</td>
								<td class="td-20">2days</td>
								<td class="td-20">
									<input type="button" value="Bond" class="ibtn ibtn-bond bg_blue" @click="purchase(1)"/>
								</td>
							</tr>
							<tr>
								<td class="td-20">OPH-LP</td>
								<td class="td-20">$28.54</td>
								<td class="td-20">-0.85%</td>
								<td class="td-20">2days</td>
								<td class="td-20">
									<input type="button" value="Bond" class="ibtn ibtn-bond bg_blue" @click="purchase(1)"/>
								</td>
							</tr>
							<tr>
								<td class="td-20">OPH-LP</td>
								<td class="td-20">$28.54</td>
								<td class="td-20">-0.85%</td>
								<td class="td-20">2days</td>
								<td class="td-20">
									<input type="button" value="Bond" class="ibtn ibtn-bond bg_blue" @click="purchase(1)"/>
								</td>
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
				console.info(v)
				this.$router.push({name:'bondpurchase', params:{id:v}})
			}
		}
	}
</script>

<style scoped>
	/* .isummary{
		width: -webkit-calc(100% - 1.2rem);
		padding: 0.6rem;
		margin: 0 auto;
		border-radius: 0.36rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.isummary .isumm-cell .iname{
		line-height: 0.54rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-size: 0.4rem;
		font-weight: 300;
		font-family: OpenSansRoman-Light, OpenSansRoman;		
	}
	.isummary .isumm-cell .ivalue{
		margin-top: 0.28rem;
		line-height: 0.72rem;
		font-size: 0.52rem;
		font-weight: 400;
		font-family: OpenSans-Regular, OpenSans;
	} */
	
	.ibtn-bond{
		width: 1.72rem;
		height: 0.72rem;
		line-height: 0.72rem;
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
		font-family: OpenSans-Regular, OpenSans;
	}
</style>
