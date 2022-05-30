<template>
	<BarHeader :title="showBarHeader_title" :leftIcon="showBarHeader_leftIcon" :leftTitle="showBarHeader_leftTitle"
		:rightIcon="showBarHeader_rightIcon" :showProflie="showProflie" :rightTitle="showBarHeader_rightTitle"
		:showWordsRight="showWordsRight" :showPublish="showPublish" :showShare="showShare" v-if="showBarHeader" />

	<!-- <transition name="van-slide-right">
		<router-view class="center-contain center-contain-hheader_hfooter"/>
	</transition> -->

	<router-view v-slot="{ Component }">
		<transition name="van-fade" mode="out-in" v-if="showBarHeader && showFooterBar">
			<keep-alive>
				<component :is="Component" class="center-contain center-contain-hheader_hfooter" />
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
				<component :is="Component" class="center-contain" />
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
				showShare: false,
				showWordsRight: false,
				showFooterBar: false,
				showPublish: false,
				showProflie: false
			}
		},
		watch: {
			$route(to, from) {
				/* console.info(to)
				console.info(from) */
				let index = to.meta.index
				/* let showHeader = to.meta.showHeader
				let showFooter = to.meta.showFooter */
				if (index == 0) {
					this.showBarHeader = false
					this.showFooterBar = true
				} else if (index == 1) {
					this.showBarHeader = true
					this.showFooterBar = false
					this.showBarHeader_title = to.meta.title
				} else if (index == 2) {
					this.showBarHeader = false
					this.showFooterBar = false
				} else {
					this.showBarHeader = false
					this.showFooterBar = false
				}

				let share = to.meta.share
				if (!(share == undefined || share == null)) {
					if (share == 1) {
						this.showShare = true
					} else {
						this.showShare = false
					}
				}

				let showWordsRight = to.meta.showWordsRight
				if (!(showWordsRight == undefined || showWordsRight == null)) {
					if (showWordsRight == 0) {
						this.showWordsRight = false
					} else {
						this.showWordsRight = true
					}
				}
				let showPublish = to.meta.showPublish
				if (!(showPublish == undefined || showPublish == null)) {
					if (showPublish == 0) {
						this.showPublish = false
					} else {
						this.showPublish = true
					}
				}

				let showProflie = to.meta.showProflie
				if (!(showProflie == undefined || showProflie == null)) {
					if (showProflie == 0) {
						this.showProflie = false
					} else {
						this.showProflie = true
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
