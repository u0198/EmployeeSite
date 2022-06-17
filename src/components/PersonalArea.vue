<template>
	<div class="w-100">
		<ul class="list-group">
			<li class="list-group-item disabled bg-light">{{ $t('pageContent.personalArea.title') }}</li>
			<li class="list-group-item list-group-item-action">
				<a href="" target="_blank" class="text-secondary"> 個人分機資訊修改(575-chinyufang) </a>
			</li>
			<li class="list-group-item list-group-item-action">
				<a href="" target="_blank" class="text-secondary"><span class="text-danger">0</span> 件待簽核案件在舊簽核</a>
			</li>
			<li class="list-group-item list-group-item-action">
				<a href="" target="_blank" class="text-secondary"><span class="text-danger">0</span> 件待簽核案件在UOF系統</a>
				&nbsp;
				<a href="" target="_blank" class="text-secondary"><span class="text-danger">0</span> 件待簽核案件在BPM系統</a>
			</li>
			<li class="list-group-item list-group-item-action">
				<a href="" target="_blank" class="text-secondary">部門年資假預排/實際差異</a>
			</li>
			<li class="list-group-item list-group-item-action">
				<a href="" target="_blank" class="text-secondary">你有 <span class="text-danger">0</span> 件待簽核的請假單</a>
				&nbsp;
				<a href="" target="_blank" class="text-secondary">你有 <span class="text-danger">0</span> 件待簽核的加班單</a>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'PersonalArea',
	};
</script>
