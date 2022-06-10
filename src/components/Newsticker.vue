<template>
	<div class="newsticker">
		<div class="labelBox bg-warning bg-opacity-50">
			<span>post</span>
		</div>
		<div class="newsBox">
			<span>post-content</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Newsticker',
		mounted() {},
	};
</script>

<style>
	@media (min-width: 768px) {
		.newsticker {
			position: relative;
			width: 350px;
			background: white;
			border-radius: 10px;
			padding: 8px;
			box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.1);
		}
		.labelBox {
			position: absolute;
			top: 0;
			left: 0;
			color: white;
			font-weight: 600;
			height: 40px;
			padding: 0 8px;
			padding-top: 6px;
			border-radius: 10px 0 0 10px;
		}
		.newsBox {
			padding-left: 55px;
		}
	}
</style>
