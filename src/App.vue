<template>
	<div id="wrapper" class="d-flex">
		<Sidebar />
		<PageContent />
	</div>
</template>

<script>
	import Sidebar from './components/Sidebar.vue';
	import PageContent from './components/PageContent.vue';

	export default {
		name: 'App',
		components: {
			Sidebar,
			PageContent,
		},
		mounted() {
			var sidebartoogler = this.$el.querySelector('#sidebarToggle');
			sidebartoogler.addEventListener('click', (e) => {
				e.preventDefault();
				document.body.classList.toggle('sb-sidenav-toggled');
			});
		},
	};
</script>

<style>
	@import '~bootstrap/dist/css/bootstrap.css';
	@import '~assets/base.css';
	@import '~assets/navbar.css';
</style>
