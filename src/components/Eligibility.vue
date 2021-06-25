<template>
	<ul>
		<li>
			Turpis sed at in tellus at diam. Eget commodo volutpat nibh suspendisse proin volutpat odio ipsum.
		</li>
		<li>
			Diam aenean pellentesque adipiscing in iaculis. Magnis urna risus dignissim sit est, rutrum. Augue blandit
			urna scelerisque donec.
		</li>
		<li>
			Eu elementum lorem pellentesque urna mauris libero vulputate sed. Vitae tincidunt massa elit enim tellus.
		</li>
		<li>
			Nunc eu gravida dictumst laoreet vitae. Arcu diam, nunc non orci, non purus neque.
		</li>
	</ul>
</template>
<script>
export default {
	name: 'Eligibiity',
	data() {
		return {};
	},
};
</script>
<style scoped>
ul {
	list-style: none;
	padding: 0;
}
li {
	padding-left: 2.3em;
}
li:before {
	content: '\e90b';
	font-family: Icomoon;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-left: -1.3em;
	width: 0px;
	font-size: 20px;
	margin-bottom: -30px;
	margin-top: 32px;

	color: #cbb677;
}
</style>
