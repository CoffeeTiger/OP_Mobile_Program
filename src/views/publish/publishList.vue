<template>
	<div class="main_contain">
		<div class="infts-list">
			
			<router-link :to="{name:'publish'}">
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
			
		</div>
	</div>
</template>

<script>
	import nft from '../../components/profile/nft.vue'
	export default{
		name:'publishlist',
		components:{nft}
	}
</script>

<style>
</style>
