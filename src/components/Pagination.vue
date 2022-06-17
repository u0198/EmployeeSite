<template>
	<div>
		<ul class="pagination">
			<li class="pagination-item">
				<button type="button" @click="onClickFirstPage" :disabled="isInFirstPage">
					<i class="fas fa-angle-double-left"></i>
				</button>
			</li>

			<li class="pagination-item">
				<button type="button" @click="onClickPreviousPage" :disabled="isInFirstPage">
					<i class="fas fa-angle-left"></i>
				</button>
			</li>

			<!-- Visible Buttons Start -->

			<li v-for="page in pages" :key="page.name" class="pagination-item">
				<button
					type="button"
					@click="onClickPage(page.name)"
					:disabled="page.isDisabled"
					:class="{ active: isPageActive(page.name) }"
				>
					{{ page.name }}
				</button>
			</li>

			<!-- Visible Buttons End -->

			<li class="pagination-item">
				<button type="button" @click="onClickNextPage" :disabled="isInLastPage">
					<i class="fas fa-angle-right"></i>
				</button>
			</li>

			<li class="pagination-item">
				<button type="button" @click="onClickLastPage" :disabled="isInLastPage">
					<i class="fas fa-angle-double-right"></i>
				</button>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'Pagination',
		props: {
			maxVisibleButtons: {
				type: Number,
				required: false,
				default: 3,
			},
			totalPages: {
				type: Number,
				required: true,
			},
			perPage: {
				type: Number,
				required: true,
			},
			currentPage: {
				type: Number,
				required: true,
			},
		},
		computed: {
			startPage() {
				// When on the first page
				if (this.currentPage === 1) {
					return 1;
				}

				// When on the last page
				if (this.currentPage === this.totalPages) {
					return this.totalPages - this.maxVisibleButtons;
				}

				// When inbetween
				return this.currentPage - 1;
			},
			pages() {
				const range = [];
				// console.log(this.startPage);

				for (let i = this.startPage; i <= Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages); i++) {
					range.push({
						name: i,
						isDisabled: i === this.currentPage,
					});
				}

				// console.log(range);
				return range;
			},
			isInFirstPage() {
				return this.currentPage === 1;
			},
			isInLastPage() {
				return this.currentPage === this.totalPages;
			},
		},
		methods: {
			onClickFirstPage() {
				this.$emit('pagechanged', 1);
			},
			onClickPreviousPage() {
				this.$emit('pagechanged', this.currentPage - 1);
			},
			onClickPage(page) {
				this.$emit('pagechanged', page);
			},
			onClickNextPage() {
				this.$emit('pagechanged', this.currentPage + 1);
			},
			onClickLastPage() {
				this.$emit('pagechanged', this.totalPages);
			},
			isPageActive(page) {
				console.log(this.currentPage === page);
				return this.currentPage === page;
			},
		},
	};
</script>

<style>
	.pagination {
		list-style-type: none;
	}

	.pagination-item {
		display: inline-block;
	}

	.pagination-item button {
		border: none;
		background: none;
		color: var(--bs-gray-300);
		padding: 4px 12px;
	}

	.pagination-item button:hover {
		background: rgb(248, 231, 180);
		color: #ffffff;
		transition: 0.1s;
	}

	.pagination-item button.active {
		background: var(--lc-yellow);
		color: #ffffff;
	}
</style>
