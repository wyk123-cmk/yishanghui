<template>
	<view>
		<userevaluation :show="shoupj"></userevaluation>
	</view>
</template>

<script>
	import userevaluation from '../../components/user-evaluation/user-evaluation.vue' //首次活动提醒
	export default {
		data() {
			return {
				shoupj:false
			}
		},
		components: {
			
			userevaluation
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
