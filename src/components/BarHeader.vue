<template>
	<div class="van-safe-area-top header-contain">
		<div class="header-left" @click="clickLeft"> 
			<img src="../assets/imgs/arrow-left.png" class="header-icon-left"/>
		</div>
		<div class="header-middle color_yellow">{{$t(title)}}</div>
		<div class="header-right" @click="clickRight">
			<!-- <img src="../assets/imgs/share.png" class="header-icon-right"/> -->
		</div>
	</div>
</template>

<script>
	export default {
		name: 'BarHeader',
		data: function() {
			return {
				ShowBarHeader: true
			}
		},
		props: {
			barbg: {
				type: String,
				default: 'barBak'
			},
			title: {
				type: String,
				default: 'middleTitle'
			},
			leftTitle: {
				type: String,
				default: 'leftTitle'
			},
			leftIcon: {
				type: String,
				default: 'arrow-left'
			},
			rightTitle: {
				type: String,
				default: 'rightTitle'
			},
			rightIcon: {
				type: String,
				default: ''
			},
			/* Digital information is displayed in the middle */
			showNumber: {
				type: Boolean,
				default: false
			},
			/* Show text title in the middle */
			showWords: {
				type: Boolean,
				default: true
			}
		},
		created() {
			/* let token = this.$ls.get('token')
			if (token == null || token == '') {
			  let _meta = this.$route.meta
			  if(_meta.login != undefined && !_meta.login){
			    console.info('Online/offline browsing')
			  } else {
			    this.$router.push('login')
			  }
			} */
		},
		methods: {
			clickLeft() {
				let _backroute = this.$route.name
				if (_backroute == 'deposit2') {
					this.$router.push({
						name: 'device',
						params: {
							p: 1
						}
					})
				} else if(_backroute == 'conn'){
					this.$router.go(-2)
				} else {
					this.$router.go(-1)
				}
			},
			clickRight() {
				console.info('clickRight')
			}
		}
	}
</script>

<style scoped="scoped">
	.header-left, .header-right{
		width: 3rem;
	}
	.header-middle{
		width: 9rem;
		height: 1.76rem;
		line-height: 1.76rem;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-size: 0.84rem;
		font-weight: 600;
		font-family: Poppins-SemiBold, Poppins;
		text-align: center;
	}
	.header-icon-left {
		width: 0.64rem;
		height: 0.64rem;
		margin-left: 0.74rem;
	}

	.header-icon-right {
		width: 0.6rem;
		height: 0.82rem;
		margin-right: 0.82rem;
	}

	.showNumber {
		margin: 0 auto;
		font-weight: 500;
		font-size: 16px;
		font-size: 0.52rem;
		color: #FFFFFF;
	}

	.showWords {
		margin: 0 auto;
		color: #FFFFFF;
		font-weight: 500;
		font-size: 16px;
	}
</style>
