<template>
	<section class="content" :class="[background ? activeClass : '', errorClass]">
		<div class="row">
			<div class="col-md-2 left">
				<h4 class="content-title">{{ title }}</h4>
			</div>
			<div class="col-md-9">
				<h2 class="content-subtitle">
					{{ subtitle }}
				</h2>
				<div class="slot">
					<slot class="slot"></slot>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
export default {
	name: 'Content',
	props: ['title', 'subtitle'],
};
</script>
<style scoped>
.content {
	padding: 1rem 0;
}
.left {
	display: flex;
	justify-content: center;
	align-items: flex-start;
}
.content-title {
	color: #cbb677;
	text-transform: uppercase;
	font-size: 16px;
	font-weight: bold !important;
}
.content-title::after {
	content: '';
	display: block;
	border-bottom: 1px solid #a7a9ac;
	width: 175px;
	position: relative;
	bottom: -10px;
}
.content-subtitle {
	color: #03180d;
	font-size: 20px;
	font-weight: 500px !important;
}
.slot {
	font-size: 15px;
	color: #03180d;
	padding: 1rem 0;
}
@media only screen and (max-width: 600px) {
	.content {
		padding: 0;
	}
	.content-title::after {
		width: 100%;
	}
}
</style>
