<template>
	<div class="van-safe-area-top header-contain">
		<div class="header-left" @click="clickLeft">
			<img src="../assets/imgs/arrow-left.png" class="header-icon-left" />
		</div>
		<div class="header-middle color_yellow">{{$t(title)}}</div>
		<div class="header-right" @click="clickRight">
			<img src="../assets/imgs/share.png" class="header-icon-right" v-if="showShare" />
			<div v-if="showPublish" class="header-publish-list">
				<img src="../assets/imgs/publish.svg" @click="publishClick" class="header-icon-right" />
				<img src="../assets/imgs/original-transfer.svg" class="header-icon-right" />
				<img src="../assets/imgs/share.png" class="header-icon-right" />
			</div>
			<div class="itools" v-if="showProflie">
				<div class="ibtn ibtn-swap color_yellow" @click="swapPage">Swap</div>
				<van-icon name="setting-o" color="#F7B62D" class="isetting" size=".84rem" @click="set" />
			</div>
			<div class="header-logout" v-if="showWordsRight">Log Out</div>
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
			},
			showWordsRight: {
				type: Boolean,
				default: false
			},
			showShare: {
				type: Boolean,
				default: false
			},
			showPublish: {
				type: Boolean,
				default: false
			},
			showProflie: {
				type: Boolean,
				default: false
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
			publishClick() {
				this.$router.push({
					name: 'active',
					params: {}
				})
			},
			clickLeft() {
				let _backroute = this.$route.name
				if (_backroute == 'deposit2') {
					this.$router.push({
						name: 'device',
						params: {
							p: 1
						}
					})
				} else if (_backroute == 'conn') {
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
	.itools {
		width: 100%;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		margin-right: 0.6rem;
	}

	.itools .isetting {
		width: 0.84rem;
		height: 0.84rem;
		line-height: 0.84rem;
		margin-right: 0.6rem;
	}

	.itools .isetting:active {
		opacity: .6;
	}

	.itools .ibtn-swap {
		width: 2.28rem;
		height: 0.9rem;
		line-height: 0.9rem;
		border-radius: 0.16rem;
		border: 0.04rem solid #F7B62D;
		font-size: 0.48rem;
		font-family: Poppins-Medium, Poppins;
		font-weight: 500;
		margin-right: 0.7rem;
		padding: 0rem 0.46rem 0rem 0.42rem;
	}

	.header-publish-list {
		display: flex;
		justify-content: flex-end;
	}

	.header-transfer {
		width: 0.8rem;
		height: 0.78rem;
		margin: 0.5rem 0.82rem 0.6rem 0rem;
	}

	.header-publish {
		width: 0.8rem;
		height: 0.78rem;
		margin: 0.46rem 0.8rem 0.52rem 0rem;
	}

	.header-logout {
		margin-right: 0.6rem;
		color: #F7B62D;
		font-size: 0.56rem;
		line-height: 0.84rem;
		margin-top: 0.5rem;
	}

	.header-left {
		width: 3rem;
	}

	.header-right {
		width: 3rem;
		text-align: end;
	}

	.header-left:active {
		opacity: 0.6;
	}

	.header-right:active {
		opacity: 0.6;
	}

	.header-middle {
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
		margin-right: 0.6rem;
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
