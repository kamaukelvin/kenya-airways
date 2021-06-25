<template>
	<div class="row mt-md-5">
		<div v-for="benefit in benefits" :key="benefit.class" class="col-md-4 benefit mb-md-5">
			<div class="benefit-body">
				<div><span :class="benefit.class"></span></div>
				<p class="pt-3">
					{{ benefit.text }}
				</p>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'Benefits',
	data() {
		return {
			benefits: [
				{
					class: 'icon-desktop',
					text: 'Nunc eu gravida dictumst laoreet vitae. Arcu diam, nunc non orci, non purus neque.',
				},
				{
					class: 'icon-user',
					text: 'Lacinia magna quam magna blandit. Ac aliquam tellus iaculis varius ultrices viverra risus.',
				},
				{
					class: 'icon-calendar',
					text:
						'Tellus nunc pulvinar adipiscing eget erat in nunc, sapien. Duis faucibus amet volutpat quam.',
				},
				{
					class: 'icon-briefcase',
					text: 'Feugiat sapien leo amet, sit faucibus cras. Magna morbi ac in suscipit neque. Tincidunt et.',
				},

				{
					class: 'icon-plane',
					text: 'Ut facilisis ultricies tincidunt netus sed placerat nunc consequat, dolor. At id vitae.',
				},
				{
					class: 'icon-star-red',
					text:
						'Sed elementum sem vel aliquam. Vitae vel non diam fringilla amet, semper nunc dictum nulla. Quis ut.',
				},
			],
		};
	},
};
</script>
<style scoped>
.benefit-body {
	border-left: 1px solid rgba(130, 0, 36, 0.3);
	padding: 0 1rem;
}
.benefit span {
	font-size: 50px;
}

@media only screen and (max-width: 600px) {
	.benefit {
		display: flex;
		justify-content: center;
		align-items: center;
		border-left: none;
		flex-direction: column;
		text-align: center;
	}

	.benefit span {
		font-size: 50px;
	}
	.benefit-body {
		border-left: none;
		padding: 0 1rem;
	}
}
</style>
