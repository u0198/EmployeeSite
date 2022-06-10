<template>
	<!-- Page content wrapper-->
	<div id="page-content-wrapper">
		<!-- Top navigation-->
		<nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
			<div class="container-fluid">
				<!-- 左側選單toggler -->
				<div style="padding: 0.25rem 0.75rem; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 10%">
					<button class="btn navbar-toggler-icon" id="sidebarToggle"></button>
				</div>
				<!-- 上層選單 -->
				<!-- <button
						class="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class="navbar-toggler-icon"></span>
					</button> -->
				<!-- <div class="collapse navbar-collapse" id="navbarSupportedContent">
						<ul class="navbar-nav ms-auto mt-2 mt-lg-0">
							<li class="nav-item active"><a class="nav-link" href="#!">Home</a></li>
							<li class="nav-item"><a class="nav-link" href="#!">Link</a></li>
							<li class="nav-item dropdown">
								<a
									class="nav-link dropdown-toggle"
									id="navbarDropdown"
									href="#"
									role="button"
									data-bs-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false"
									>Dropdown</a
								>
								<div class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
									<a class="dropdown-item" href="#!">Action</a>
									<a class="dropdown-item" href="#!">Another action</a>
									<div class="dropdown-divider"></div>
									<a class="dropdown-item" href="#!">Something else here</a>
								</div>
							</li>
						</ul>
					</div> -->
				<!-- 公告輪播 -->
				<Newsticker />
			</div>
		</nav>
		<!-- Page content-->
		<div class="container-fluid">
			<h1 class="mt-4">Simple Sidebar</h1>
			<p>
				The starting state of the menu will appear collapsed on smaller screens, and will appear non-collapsed on larger screens.
				When toggled using the button below, the menu will change.
			</p>
			<p>
				Make sure to keep all page content within the
				<code>#page-content-wrapper</code>
				. The top navbar is optional, and just for demonstration. Just create an element with the
				<code>#sidebarToggle</code>
				ID which will toggle the menu when clicked.
			</p>
		</div>
		<div class="container-fluid">
			<h1 class="mt-4">Simple Sidebar</h1>
			<p>
				The starting state of the menu will appear collapsed on smaller screens, and will appear non-collapsed on larger screens.
				When toggled using the button below, the menu will change.
			</p>
			<p>
				Make sure to keep all page content within the
				<code>#page-content-wrapper</code>
				. The top navbar is optional, and just for demonstration. Just create an element with the
				<code>#sidebarToggle</code>
				ID which will toggle the menu when clicked.
			</p>
		</div>
		<div class="container-fluid">
			<h1 class="mt-4">Simple Sidebar</h1>
			<p>
				The starting state of the menu will appear collapsed on smaller screens, and will appear non-collapsed on larger screens.
				When toggled using the button below, the menu will change.
			</p>
			<p>
				Make sure to keep all page content within the
				<code>#page-content-wrapper</code>
				. The top navbar is optional, and just for demonstration. Just create an element with the
				<code>#sidebarToggle</code>
				ID which will toggle the menu when clicked.
			</p>
		</div>
		<!-- Footer -->
		<div class="d-flex justify-content-end bg-light pt-2">
			<h5 class="pe-3">網頁製作 : 總處資訊</h5>
			<h5 class="pe-3">資料維護 : 相關單位</h5>
		</div>
	</div>
</template>

<script>
	import Newsticker from './Newsticker.vue';

	export default {
		name: 'PageContent',
		components: {
			Newsticker,
		},
	};
</script>

<style></style>
