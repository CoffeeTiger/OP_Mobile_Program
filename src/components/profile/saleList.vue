<template>
	<div>
		<div class="infts-list">
			<nft type="sale" urlImg="1.png" showTime showTimeString="00-00-00" name="OP-20220222-8841"
				chains="Ethereum"></nft>
			<nft type="sale" urlImg="2.png" showTime showTimeString="18-12-45" name="OP-20220222-8842"
				chains="Ethereum"></nft>
			<nft type="sale" urlImg="3.png" showTime showTimeString="00-00-00" name="OP-20220222-8843"
				chains="Ethereum"></nft>
			<nft type="sale" urlImg="4.png" showTime showTimeString="10-10-20" name="OP-20220222-8844"
				chains="Ethereum"></nft>
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
