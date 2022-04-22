<template>
	<BarHeader :title="showBarHeader_title" :leftIcon="showBarHeader_leftIcon"
		:leftTitle="showBarHeader_leftTitle" :rightIcon="showBarHeader_rightIcon"
		:rightTitle="showBarHeader_rightTitle"/>
	
	<transition name="van-fade">
		<router-view class="center-contain center-contain-hheader_hfooter"/>
	</transition>
	
	<BarFooter></BarFooter>
</template>

<script>
	import BarHeader from './components/BarHeader.vue'
	import BarFooter from './components/BarFooter.vue'
	export default {
		name: 'App',
		components: {
			BarHeader, BarFooter
		},
		data: function() {
			return {
				showBarHeader: 2,
				showBarHeader_title: '中间标题',
				showBarHeader_leftIcon: '',
				showBarHeader_leftTitle: '',
				showBarHeader_rightIcon: '',
				showBarHeader_rightTitle: '',
				showFooterBar: false,
				
			}
		},

	}
</script>

<style>
	@import url("assets/css/base.css");

	#app {
		width: 100%;
		/* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		position: absolute;
		top: 0;
		bottom: 0;
		top: constant(safe-area-inset-top);
		top: env(safe-area-inset-top);
		bottom: constant(safe-area-inset-bottom);
		bottom: env(safe-area-inset-bottom);
		overflow: hidden;
	}
	
</style>
