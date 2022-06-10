<template>
	<div class="border-end bg-white" id="sidebar-wrapper">
		<div class="sidebar-heading border-bottom bg-light">LongChenPaper</div>
		<ul class="list-group list-group-flush">
			<li><a class="list-group-item list-group-item-action p-2" href="">公司公告</a></li>
			<li class="list-dropdown">
				<a class="list-dropbtn list-group-item list-group-item-action p-2 d-flex justify-content-between align-items-center">
					<span>簽核系統</span>
					<i class="fas fa-caret-down"></i>
				</a>
				<ul class="list-dropdown-content">
					<a class="list-group-item border-0" href="">簽核系統UOF</a>
					<a class="list-group-item border-0" href="">簽核系統BPM</a>
				</ul>
			</li>
			<li class="list-dropdown">
				<a class="list-group-item list-group-item-action p-2 d-flex justify-content-between align-items-center" href="">
					<span>IT系統</span>
					<i class="fas fa-caret-down"></i>
				</a>
				<ul class="list-dropdown-content">
					<a class="list-group-item border-0" href="">IT需求單</a>
					<a class="list-group-item border-0" href="">IT設備系統</a>
				</ul>
			</li>
			<li><a class="list-group-item list-group-item-action p-2" href="">總務系統</a></li>
			<li>
				<a
					class="list-group-item list-group-item-action p-2"
					href="http://portal-ap.longchenpaper.com:8080/lcpcwebnew/menu/menu.aspx"
					>資訊平台</a
				>
			</li>
			<li><a class="list-group-item list-group-item-action p-2" href="">修改密碼</a></li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'Sidebar',
	};
</script>
