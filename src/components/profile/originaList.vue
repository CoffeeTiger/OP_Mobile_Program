<template>
	<div>
		<div class="infts-list">
			<!-- <router-link :to="{name:'publish'}">
				<nft type="original" urlImg="1.png" name="OP-20220222-8821" chains="Ethereum"></nft>
			</router-link>
			
			<router-link :to="{name:'publish'}">
				<nft type="original" urlImg="2.png" name="OP-20220222-8822" chains="Ethereum"></nft>
			</router-link>
			
			<router-link :to="{name:'publish'}">
				<nft type="original" urlImg="3.png" name="OP-20220222-8823" chains="Ethereum"></nft>
			</router-link>
			
			<router-link :to="{name:'publish'}">
				<nft type="original" urlImg="4.png" name="OP-20220222-8824" chains="Ethereum"></nft>
			</router-link>
			
			<router-link :to="{name:'publish'}">
				<nft type="original" urlImg="2.png" name="OP-20220222-8825" chains="Ethereum"></nft>
			</router-link>
			
			<router-link :to="{name:'publish'}">
				<nft type="original" urlImg="1.png" name="OP-20220222-8826" chains="Ethereum"></nft>
			</router-link> -->
			
			<nft type="original" urlImg="1.png" name="OP-20220222-8821" chains="Ethereum"></nft>
			<nft type="original" urlImg="2.png" name="OP-20220222-8822" chains="Ethereum"></nft>
			<nft type="original" urlImg="3.png" name="OP-20220222-8823" chains="Ethereum"></nft>
			<nft type="original" urlImg="4.png" name="OP-20220222-8824" chains="Ethereum"></nft>
			
			<nft type="original" urlImg="2.png" name="OP-20220222-8825" chains="Ethereum"></nft>
			<nft type="original" urlImg="1.png" name="OP-20220222-8826" chains="Ethereum"></nft>
			<nft type="original" urlImg="4.png" name="OP-20220222-8828" chains="Ethereum"></nft>
			
		</div>
	</div>
</template>

<script>
	import nft from './nft.vue'
	export default{
		components:{ nft },
		data() {
			return {
				id: ''
			}
		},methods:{
			
		}
	}
</script>

<style scoped></style>
