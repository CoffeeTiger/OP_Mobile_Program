<template>
	<div>
		<div class="main_contain">
			<!-- <div class="page-title color_yellow">
				<div class="page-title-t2">Log Out</div>
			</div> -->
			<div style="text-align: center;">
				<img class="setup-img" src="@/assets/imgs/setuphead.svg" />
				<div class="setup-size">set New Photo</div>
			</div>
			<div class="setup-name">
				<div class="setup-input">
					<input type="text" class="frist-name" @focus="changInput()" v-model="fristName"
						placeholder="Frist Name" maxlength="100" />
					<img class="setup-close" @click="closeChang" v-if="closeShow == true"
						src="@/assets/imgs/close.svg" />
				</div>
				<hr class="frist-name-hr">
				<div class="setup-input">
					<input type="text" class="frist-name" @focus="lastchangInput()" v-model="lastName"
						placeholder="Last Name" maxlength="100" />
					<img class="setup-close" @click="lastcloseChang" v-if="lastcloseShow == true"
						src="@/assets/imgs/close.svg" />
				</div>
			</div>
			<div class="setup-tips">
				Enter your name and add optional profile photo
			</div>
			<div class="setup-name" style="height: 7.22rem;">
				<div class="setup-detail">
					<div class="setup-datail-num">Change Number</div>
					<input type="text" class="setup-data" placeholder="number" maxlength="100" />
				</div>
				<hr class="frist-name-hr">
				<div class="setup-detail">
					<div class="setup-datail-num">Username</div>
					<input type="text" class="setup-data" placeholder="name" maxlength="100" />
				</div>
				<hr class="frist-name-hr">
				<div class="setup-detail">
					<div class="setup-datail-num">E-mail</div>
					<input type="text" class="setup-data" placeholder="e-mail" maxlength="100" />
				</div>
			</div>
			<div style="margin-top: 0.96rem;">
				<div class="ibtn ibtn-log bg_yellow color_black">Save</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'bond',
		data() {
			return {
				fristName: '',
				lastName: '',
				closeShow: false,
				lastcloseShow: false
			}
		},
		methods: {
			lastcloseChang() {
				this.lastName = ''
			},
			lastchangInput() {
				this.lastcloseShow = true
			},
			closeChang() {
				this.fristName = ''
			},
			changInput() {
				this.closeShow = true
			},
			purchase(v) {
				if (v == 1) {
					this.$router.push({
						name: 'bondpurchase',
						params: {
							id: v
						}
					})
				} else if (v == 2) {
					this.$router.push({
						name: 'bondpurchase',
						params: {
							id: v
						}
					})
				} else if (v == 3) {
					this.$router.push({
						name: 'bondpurchase',
						params: {
							id: v
						}
					})
				}
			}
		}
	}
</script>

<style scoped>
	.setup-input {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.setup-close {
		margin-right: 0.6rem;
		width: 0.48rem;
		height: 0.48rem;
	}

	.ibtn-log {
		height: 1.6rem;
		border-radius: 0.32rem;
		line-height: 1.6rem;
		font-size: 0.64rem;
		font-family: Poppins-Bold, Poppins;
		font-weight: bold;
		color: #313131;
	}

	.setup-data {
		line-height: 2.38rem;
		margin-right: 0.6rem;
		text-align: end;
		background-color: #252525;
		border: #3F4142;
	}

	.setup-datail-num {
		line-height: 2.38rem;
		color: #979797;
		text-align: start;
		width: 234px;
		white-space: normal;
		text-overflow: ellipsis;
		overflow: hidden;
	}

	.setup-detail {
		display: flex;
		justify-content: space-between;
		text-align: center;
		height: 2.38rem;
		margin-left: 0.6rem;
	}

	.setup-tips {
		margin-top: 0.34rem;
		margin-left: 0.08rem;
		font-size: 0.48rem;
		color: #979797;
		line-height: 0.7rem;
		margin-bottom: 0.96rem;
	}

	::-webkit-input-placeholder {
		/* WebKit browsers */
		color: #646464;
	}

	.frist-name-hr {
		border: none;
		height: 0.04rem;
		background-color: #3F4142;
		margin: 0 0.6rem;
	}

	.frist-name {
		height: 2.4rem;
		width: 90%;
		background-color: #252525;
		border-radius: 0.36rem;
		border: #3F4142;
		margin-left: 0.6rem;
		margin-right: 0.6rem;
	}

	.setup-name-n2 {
		height: 7.22rem;
	}

	.setup-name {
		padding: 0.04rem;
		height: 4.8rem;
		background: #252525;
		box-shadow: 0rem 4rem 17rem 1rem rgba(0, 0, 0, 0.13);
		border-radius: 0.36rem;
		border: 2px solid #3F4142;
	}

	.setup-img {
		width: 2.76rem;
		height: 2.8rem;
	}

	.setup-size {
		height: 0.78rem;
		font-size: 0.56rem;
		font-family: Poppins-Light, Poppins;
		font-weight: 300;
		color: #F7B62D;
		line-height: 0.84rem;
		margin-top: 0.4rem;
		margin-bottom: 0.48rem;
	}

	.page-title-t2 {
		position: absolute;
		right: 0.6rem;
		top: 0.48rem;
	}

	.ibtn-bond {
		width: 1.72rem;
		height: 0.72rem;
		line-height: 0.72rem;
	}

	.itips {
		width: 10.6rem;
		margin: 2.52rem auto;
	}

	.itips .iarticle {
		font-size: 0.52rem;
		font-weight: 400;
		line-height: 0.64rem;
		color: #979797;
		text-align: center;
	}
</style>
