<template lang="">
	<div class="newsticker mt-2 mb-4">
		<div class="labelBox bg-lc bg-opacity-50 ps-2 pe-2">
			<i class="fa fa-bell pe-1 text-light"></i>
			<span class="text-light d-none d-sm-inline-block">公告</span>
		</div>
		<div class="newsBox d-flex justify-content-between align-items-center">
			<div class="d-flex flex-column flex-sm-row" v-for="i in [currentIndex]" :key="i">
				<span class="ps-sm-2 pe-sm-2">{{ currentNews.date }}</span>
				<a :href="currentNews.link" class="link-secondary">{{ currentNews.text }}</a>
			</div>
			<div class="d-flex flex-column flex-sm-row">
				<div id="prev-select" class="circle" @click="prev">
					<i class="fas fa-chevron-up"></i>
				</div>
				<div id="next-select" class="circle" @click="next">
					<i class="fas fa-chevron-down"></i>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Newsticker',
		data() {
			return {
				newsItems: [
					{
						id: 1,
						title: '【一般規定】(22)榮管字第0503號',
						text: '特別休假起訖期間調整及預排辦法 、、',
						link: 'http://www06.longchenpaper.com/eip/say010401.asp?sid=5387&rnd=5050888',
						date: '2022/5/30',
					},
					{
						id: 2,
						title: '【福利】(22)榮管字第0502號',
						text: '端午節禮金 、、',
						link: 'http://www06.longchenpaper.com/eip/say010401.asp?sid=5383&rnd=6968193',
						date: '2022/5/19',
					},
					{
						id: 3,
						title: '【人事異動】(22)榮管字第0501號',
						text: '章興國人事異動 、、',
						link: 'http://www06.longchenpaper.com/eip/say010401.asp?sid=5381&rnd=0324173',
						date: '2022/5/3',
					},
					{
						id: 4,
						title: '【一般規定】(22)榮管字第0405號',
						text: '重申參觀工廠需經報備核准 、、',
						link: 'http://www06.longchenpaper.com/eip/say010401.asp?sid=5378&rnd=0441475',
						date: '2022/4/19',
					},
					{
						id: 5,
						title: '【人事異動】(22)榮管字第0404號',
						text: '陳宗業等人事異動 、、',
						link: 'http://www06.longchenpaper.com/eip/say010401.asp?sid=5377&rnd=3936386',
						date: '2022/4/18',
					},
					{
						id: 6,
						title: '【獎懲】(22) 榮管字第 0403 號',
						text: '2022年3月關心郵址處理說明 、、',
						link: 'http://www06.longchenpaper.com/eip/say010401.asp?sid=5376&rnd=0441475',
						date: '2022/4/18',
					},
					{
						id: 7,
						title: '【福利】(22)榮管字第0402號',
						text: '勞動節禮金 、、',
						link: 'http://www06.longchenpaper.com/eip/say010401.asp?sid=5375&rnd=0419846',
						date: '2022/4/13',
					},
					{
						id: 8,
						title: '【人事異動】(22)榮管字第0401號',
						text: '葉震華人事異動 、、',
						link: 'http://www06.longchenpaper.com/eip/say010401.asp?sid=5373&rnd=4167938',
						date: '2022/3/31',
					},
					{
						id: 9,
						title: '【 人事異動 】 (22)榮管字第0304號',
						text: '李美玲人事異動',
						link: 'http://www06.longchenpaper.com/eip/say010401.asp?sid=5368&rnd=1852417',
						date: '2022/3/21',
					},
					{
						id: 10,
						title: '(17)榮管字第0710號',
						text: '重申 改善人例增加罰抄榮成文化',
						link: 'http://www06.longchenpaper.com/eip/say010401.asp?sid=3427&rnd=',
						date: '2022/3/16',
					},
				],
				timer: null,
				currentIndex: 0,
			};
		},
		mounted() {
			this.startSlide();
		},
		methods: {
			startSlide() {
				this.timer = setInterval(this.next, 4000);
			},

			next() {
				this.currentIndex += 1;
			},
			prev() {
				this.currentIndex -= 1;
			},
		},
		computed: {
			currentNews() {
				return this.newsItems[Math.abs(this.currentIndex) % this.newsItems.length];
			},
		},
	};
</script>

<style>
	.newsticker {
		position: relative;
		width: 100%;
		background: white;
		/* border-radius: 10px; */
		padding: 0 6px;
		/* box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.1); */
	}
	.labelBox {
		position: absolute;
		top: 0;
		left: 0;
		color: white;
		font-weight: 600;
		height: 35px;
		/* padding: 0 8px; */
		padding-top: 5px;
		margin-top: 5px;
		/* border-radius: 10px 0 0 10px; */
	}
	.newsBox {
		padding-left: 40px;
	}
	.circle {
		color: var(--bs-gray-300);
		padding: 0 5px;
		border: 2px solid var(--bs-gray-300);
		border-radius: 50%;
		margin: 2px 4px;
		cursor: pointer;
	}
	.circle:hover {
		color: var(--bs-gray-200);
		border: 2px solid var(--bs-gray-200);
	}

	@media (min-width: 576px) {
		.newsticker {
			padding: 8px;
		}
		.labelBox {
			margin-top: 5px;
		}
		.newsBox {
			padding-left: 60px;
		}
		.circle {
			margin: 0 4px;
		}
	}
</style>
