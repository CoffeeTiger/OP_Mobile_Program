<template>
	<BarHeader :title="showBarHeader_title" :leftIcon="showBarHeader_leftIcon" :leftTitle="showBarHeader_leftTitle"
		:rightIcon="showBarHeader_rightIcon" :rightTitle="showBarHeader_rightTitle"  :showShare="showShare" v-if="showBarHeader" />

	<!-- <transition name="van-slide-right">
		<router-view class="center-contain center-contain-hheader_hfooter"/>
	</transition> -->

	<router-view v-slot="{ Component }">
		<transition name="van-fade" mode="out-in" v-if="showBarHeader && showFooterBar">
			<keep-alive>
				<component :is="Component" class="center-contain center-contain-hheader_hfooter"  />
			</keep-alive>
		</transition>
		<transition name="van-fade" mode="out-in" v-if="showBarHeader && !showFooterBar">
			<keep-alive>
				<component :is="Component" class="center-contain center-contain-hheader" />
			</keep-alive>
		</transition>
		<transition name="van-fade" mode="out-in" v-if="!showBarHeader && showFooterBar">
			<component :is="Component" class="center-contain center-contain-hfooter" />
		</transition>
		<transition name="van-fade" mode="out-in" v-if="!showBarHeader && !showFooterBar">
			<keep-alive>
				<component :is="Component" class="center-contain"  />
			</keep-alive>
		</transition>
	</router-view>

	<BarFooter v-if="showFooterBar"></BarFooter>
</template>

<script>
	import BarHeader from './components/BarHeader.vue'
	import BarFooter from './components/BarFooter.vue'
	export default {
		name: 'App',
		components: {
			BarHeader,
			BarFooter
		},
		data: function() {
			return {
				showBarHeader: false,
				showBarHeader_title: 'middleName',
				showBarHeader_leftIcon: '',
				showBarHeader_leftTitle: '',
				showBarHeader_rightIcon: '',
				showBarHeader_rightTitle: '',
				showShare:false,
				showFooterBar: false,
			}
		},
		watch: {
			$route(to, from) {
				console.info(to)
				console.info(from)
				let index  = to.meta.index
				/* let showHeader = to.meta.showHeader
				let showFooter = to.meta.showFooter */
				if(index == 0){
					this.showBarHeader = false
					this.showFooterBar = true
				} else if(index == 1){
					this.showBarHeader = true
					this.showFooterBar = false
					this.showBarHeader_title = to.meta.title
				} else if(index == 2){
					this.showBarHeader = false
					this.showFooterBar = false
				} else {
					this.showBarHeader = false
					this.showFooterBar = false
				}
				
				let share = to.meta.share
				if(!(share == undefined || share == null)){
					if(share == 1){
						this.showShare = true
					}
				}
				
			}
		},

	}
</script>

<style>
	@import url("assets/css/base.css");

	#app {
		width: 100%;
		font-family: Poppins, sans-serif;
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
