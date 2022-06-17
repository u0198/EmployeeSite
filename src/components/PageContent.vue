<template>
	<!-- Page content wrapper-->
	<div id="page-content-wrapper" class="wrapper">
		<div class="content">
			<!-- Top navigation-->
			<nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom mt-1 mb-1">
				<div class="container-fluid">
					<!-- 左側選單toggler -->
					<div class="nav-toggler">
						<div id="sidebarToggle">
							<div class="nav-icon"></div>
							<div class="nav-icon"></div>
							<div class="nav-icon"></div>
						</div>
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

					<!-- 登入者資訊 -->
					<div class="login-info">
						<i class="fa fa-user text-lc pe-2" aria-hidden="true"></i>
						<span>秦譽芳-u0198-T1</span>
					</div>
				</div>
			</nav>
			<!-- Page content-->
			<div class="container-fluid">
				<!-- 公告輪播 -->
				<Newsticker />

				<!-- 圖片輪播 -->
				<!-- <div style="height: 300px">
					<ImageSlider />
				</div> -->

				<div class="d-md-flex justify-content-between" style="gap: 1.25rem">
					<!-- 個人區塊 -->
					<PersonalArea class="mb-2 mb-sm-0" />
					<!-- 公告選單 -->
					<NewsBoard />
				</div>
			</div>
		</div>

		<!-- Footer -->
		<div class="d-md-flex justify-content-between bg-light mt-3 pt-3">
			<p class="ps-3">{{ $t('footer[1]') }} : 2022/9/9 下午 02:27:33 (86天)</p>
			<div class="d-flex">
				<p class="ps-3 pe-3">{{ $t('footer[2]') }}</p>
				<p class="ps-3 pe-3">{{ $t('footer[3]') }}</p>
			</div>
		</div>
	</div>
</template>

<script>
	import Newsticker from './Newsticker.vue';
	import ImageSlider from './ImageSlider.vue';
	import NewsBoard from './NewsBoard.vue';
	import PersonalArea from './PersonalArea.vue';

	export default {
		name: 'PageContent',
		components: {
			Newsticker,
			ImageSlider,
			NewsBoard,
			PersonalArea,
		},
		data() {
			return {
				langs: [
					{
						name: '繁',
						value: 'tw',
					},
					{
						name: '简',
						value: 'cn',
					},
				],
			};
		},
	};
</script>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		width: 100%;
	}

	.content {
		flex: 1;
	}

	.nav-toggler {
		padding: 0.1rem 0.6rem;
		border: 2px solid var(--bs-gray-300);
		border-radius: 10%;
	}

	.nav-toggler:hover {
		border: 2px solid var(--bs-gray-200);
		cursor: pointer;
		transition: 0.2s;
	}

	.nav-icon {
		width: 30px;
		height: 3px;
		background-color: var(--bs-gray-300);
		margin: 5.5px 0;
	}
</style>
