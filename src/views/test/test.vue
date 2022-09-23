<template>
	<div class="main_contain">
		<p class="test1">HelloOPENPUBLISH</p>

		<br />
		<van-cell title="选择单个日期" :value="date" @click="show = true" />
		<van-calendar v-model:show="show" @confirm="onConfirm" />
		 
	</div>
</template>

<script> 

export default {
	name: 'test',
	data() {
		return {
			date: '',
			show: false
		};
	},
	methods: {
		onConfirm(value) {
			console.info(value);
			// this.show = true;
			this.date = this.formatDate(value);
			this.show = false;
		},
		formatDate(date) {
			this.date = date;
			const d1 = date.getTime();
			console.info(d1);
			//return '2022-01-10'
			const y = this.date.getFullYear()
			const m = this.date.getMonth() + 1
			const d = this.date.getDate()
			return  y + '-' + m + '-' + d;
		}
	}
	/* setup() {
		    const date = ref('');
		    const show = ref(false);
		
		    const formatDate = (date) => `${date.getMonth() + 1}/${date.getDate()}`;
		    const onConfirm = (value) => {
		      show.value = true;
		      date.value = formatDate(value);
		    };
		
		    return {
		      date,
		      show,
		      onConfirm,
		    };
		  }, */
};
</script>

<style>
.test1 {
	font-size: 16px;
}

.itest-img {
	width: 13.8rem;
	height: auto;
	margin: 0.6rem auto;

	&:after {
		content: '';
		display: inline-block;
		position: absolute;
		z-index: 2;
		top: 0;
		left: 0;
		width: 100%;
		height: 145px;
		background: url('../../assets/imgs/home-1.png') no-repeat;
		background-size: 100%;
		background-color: #fff;
	}
}
</style>
