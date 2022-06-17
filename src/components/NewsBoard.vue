<template>
	<div class="d-flex flex-column w-100" style="height: 400px">
		<ul class="list-group">
			<li class="list-group-item d-flex justify-content-between bg-light">
				<span style="color: var(--bs-gray-600)">{{ $t('pageContent.newsBoard.title') }}</span>
				<span>
					<i class="fas fa-arrow-circle-right ps-1 pe-1 text-lc"></i>
					<a href="http://www06.longchenpaper.com/eip/sayall080613.asp" class="text-lc text-decoration-none active">{{
						$t('pageContent.newsBoard.detail')
					}}</a>
				</span>
			</li>
			<li class="list-group-item list-group-item-action" v-for="newsItem in displayNews" :key="newsItem.title">
				<p>{{ newsItem.title }}</p>
				<div class="d-flex justify-content-between">
					<a :href="newsItem.link" class="text-secondary">{{ newsItem.text }}</a>
					<span>{{ newsItem.date }}</span>
				</div>
			</li>
		</ul>
		<Pagination class="m-2" :totalPages="totalPages" :perPage="perPage" :currentPage="currentPage" @pagechanged="onPageChange" />
	</div>
</template>

<script>
	import Pagination from './Pagination.vue';

	export default {
		name: 'NewsBoard',
		components: {
			Pagination,
		},
		data() {
			return {
				currentPage: 1,
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
					{
						id: 11,
						title: '【 人事異動 】 (22)榮管字第0303號',
						text: '章興國人事異動',
						link: 'http://www06.longchenpaper.com/eip/sayall080613.asp',
						date: '2022/3/16',
					},
					{
						id: 12,
						title: '【 人事異動 】 (22)榮管字第0305號',
						text: 'OOO人事異動',
						link: 'http://www06.longchenpaper.com/eip/sayall080613.asp',
						date: '2022/3/12',
					},
					{
						id: 13,
						title: '【 人事異動 】 (22)榮管字第0306號',
						text: 'XXX人事異動',
						link: 'http://www06.longchenpaper.com/eip/sayall080613.asp',
						date: '2022/3/4',
					},
				],
				totalPages: 0,
				perPage: 4,
			};
		},
		methods: {
			onPageChange(page) {
				console.log(page);
				this.currentPage = page;
			},
			setTotalPages() {
				this.totalPages = Math.ceil(this.newsItems.length / this.perPage);
			},
		},
		mounted() {
			this.setTotalPages();
		},
		computed: {
			displayNews() {
				let from = this.currentPage * this.perPage - this.perPage;
				let to = this.currentPage * this.perPage;

				return this.newsItems.slice(from, to);
			},
		},
	};
</script>
