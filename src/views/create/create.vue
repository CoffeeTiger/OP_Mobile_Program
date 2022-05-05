<template>
	<div class="main_contain">
		<div class="icreate-require">
			<div class="ititle color_yellow">Crerte New items</div>
			<div class="iremarks">*Requried fields</div>
		</div>

		<div class="iform-panel">

			<div class="iform-cell">
				<label class="label-yellow">Image*</label>
				<div class="label-descirp">File types supported:JPG,PNG,GIF</div>
				<div class="iinput-contain">
					<van-field name="uploader">
						<template #input>
						<van-uploader v-model="uploader" multiple :max-count="1" :max-size="30*1024*1024" preview-size="100%" :upload-icon="require('../../assets/imgs/upload.png')"/>
						</template>
					</van-field>
					
					<!-- <img src="../../assets/imgs/upload.png" /> -->
				</div>
			</div>

			<div class="iform-cell">
				<label>Name</label>
				<div class="iinput-contain">
					<div class="iinput-body">
						<input type="text" class="iinput ifrom-input" v-model="name" placeholder="Item name"
							maxlength="100" />
					</div>
				</div>
			</div>

			<div class="iform-cell">
				<label>External link</label>
				<div class="iinput-contain">
					<div class="iinput-body">
						<input type="text" class="iinput ifrom-input" v-model="link"
							placeholder="https://yoursite.io/item/123" maxlength="500" />
					</div>
				</div>
				<div class="iinput-desc">OpenPublish will include a link to this URL on this item’s detail page,so that
					users can click to leam moreabout it. you are welcome to link to your own webpage with more details.
				</div>
			</div>

			<div class="iform-cell">
				<label>Description</label>
				<div class="iinput-contain">
					<div class="itextarea-body">
						<textarea class="itextarea" placeholder="Provide a detailed description of your item"></textarea>
					</div>
				</div>
				<div class="iinput-desc">The description will be included on the item’s detail page underneath.Makdown
					syntax is supported.</div>
			</div>

			<div class="iform-cell">
				<label>Blockchain</label>
				<div class="iinput-contain">
					<div class="iinput-body">
						<select class="iinput ifrom-input ifrom-select" v-model="blockchain" ref="blockchain">
							<option value="Ethereum">Ethereum</option>
						</select>
					</div>
				</div>
			</div>
			
			<div class="ibtn-contain">
				<div class="ibtn ibtn-publish bg_yellow">Create</div>
			</div>

		</div>
	</div>
</template>

<script>
	export default {
		name: 'create',
		data() {
			return {
				name: '',
				link: '',
				description: '',
				blockchain: 'Ethereum',
				uploader: [],
			}
		},
	}
</script>
<style>
	.van-cell{
		background: #FFFFFF00;
		width: -webkit-calc(100% - 0.12rem);
		min-height: 6.82rem;
		border-radius: 0.32rem;
		border: 0.06rem dashed #3F4142;
		padding: 0 !important;
	}
	.van-uploader__upload{
		background: #FFFFFF00;
	}
	.van-icon__image{
		width: 2.42rem;
		height: 1.94rem;
	}
	.van-field__body{
		margin: 0 auto;
	}
	.van-uploader{
		margin: 0 auto;
	}
	.van-field__value{
		display: flex;
	}
	.van-uploader__preview{
		margin: 0 auto;
	}
</style>
<style scoped>
	@import url("../../assets/css/comm.css");

	.icreate-require {
		width: 100%;
	}

	.icreate-require .ititle {
		width: 100%;
		height: 1.02rem;
		line-height: 1.02rem;
		font-size: 0.72rem;
		font-family: Poppins-Medium, Poppins;
		margin: 0.36rem auto 0.34rem;
		font-weight: 500;
	}

	.icreate-require .iremarks {
		height: 0.72rem;
		line-height: 0.72rem;
		font-size: 0.52rem;
		font-family: Poppins-Regular, Poppins;
		font-weight: 400;
		color: #979797;
	}
</style>
