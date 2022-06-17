<template>
	<div class="border-end bg-white" id="sidebar-wrapper">
		<div class="sidebar-heading border-bottom bg-light d-flex justify-content-between align-items-center">
			<span>{{ $t('sidebar.title') }}</span>
			<select v-model="$i18n.locale" class="form-select form-select-sm" style="width: 60px">
				<option v-for="(lang, i) in langs" :key="`lang-${i}`" :value="lang.value">
					{{ lang.name }}
				</option>
			</select>
		</div>
		<ul class="list-group list-group-flush">
			<li>
				<a class="list-group-item list-group-item-action p-2" href="">{{ $t('sidebar.subtitle[1]') }}</a>
			</li>
			<li class="list-dropdown">
				<a class="list-dropbtn list-group-item list-group-item-action p-2 d-flex justify-content-between align-items-center">
					<span>{{ $t('sidebar.subtitle[2][0]') }}</span>
					<i class="fas fa-caret-down"></i>
				</a>
				<ul class="list-dropdown-content">
					<a class="list-group-item border-0 text-secondary list-group-item-action" href="">{{ $t('sidebar.subtitle[2][1]') }}</a>
					<a class="list-group-item border-0 text-secondary list-group-item-action" href="">{{ $t('sidebar.subtitle[2][2]') }}</a>
				</ul>
			</li>
			<li class="list-dropdown">
				<a class="list-group-item list-group-item-action p-2 d-flex justify-content-between align-items-center">
					<span>{{ $t('sidebar.subtitle[3][0]') }}</span>
					<i class="fas fa-caret-down"></i>
				</a>
				<ul class="list-dropdown-content">
					<a class="list-group-item border-0 text-secondary list-group-item-action" href="">{{ $t('sidebar.subtitle[3][1]') }}</a>
					<a class="list-group-item border-0 text-secondary list-group-item-action" href="">{{ $t('sidebar.subtitle[3][2]') }}</a>
				</ul>
			</li>
			<li>
				<a class="list-group-item list-group-item-action p-2" href="">{{ $t('sidebar.subtitle[4]') }}</a>
			</li>
			<li>
				<a
					class="list-group-item list-group-item-action p-2"
					href="http://portal-ap.longchenpaper.com:8080/lcpcwebnew/menu/menu.aspx"
					>{{ $t('sidebar.subtitle[5]') }}</a
				>
			</li>
			<li>
				<a class="list-group-item list-group-item-action p-2" href="">{{ $t('sidebar.subtitle[6]') }}</a>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'Sidebar',
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
		methods: {},
		mounted() {
			// console.log(this.selectedValue);
		},
	};
</script>
