<template>
	<div>
		<div class="infts-list">
			<nft type="bought" urlImg="1.png" showReward name="OP-20220222-8830" ids="#001 #002 #004"></nft>
			<nft type="bought" urlImg="2.png" showTime showTimeString="18-12-45" name="OP-20220222-8831"
				ids="#001 #002 #003 #004"></nft>
			<nft type="bought" urlImg="3.png" showLucky name="OP-20220222-8833" ids="#001 #002 #003"></nft>
			<nft type="bought" urlImg="4.png" showTime showTimeString="10-10-20" name="OP-20220222-8834"
				ids="#001 #002 #003 #004"></nft>
		</div>
	</div>
</template>

<script>
	import nft from './nft.vue'
	export default {
		components: {
			nft
		},
		data() {
			return {
				id: ''
			}
		},
		methods: {

		}
	}
</script>

<style scoped>
	.infts-list {
		width: 100%;
		margin-top: 0.64rem;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
</style>
