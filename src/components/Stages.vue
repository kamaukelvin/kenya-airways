<template>
	<ul class="stages">
		<li>
			<h3>Registration - 2 weeks</h3>
			<p>Turpis sed at in tellus at diam. Eget commodo volutpat nibh suspendisse proin volutpat odio ipsum.</p>
		</li>
		<li>
			<h3>Sprint - 3 weeks</h3>
			<p>
				Nunc tellus interdum ullamcorper ipsum, ipsum a. Egestas non posuere sed ultricies dolor, elit. Proin
				congue ut vitae venenatis, purus. Aliquet dolor tempor.
			</p>
		</li>
		<li>
			<h3>Review - 2 weeks</h3>
			<p>
				Dui vulputate turpis venenatis lorem eget. Pellentesque viverra velit lectus donec iaculis. Neque dui
				gravida sed semper id vitae vestibulum diam sit. Mauris.
			</p>
		</li>
		<li>
			<h3>Judges - 1 week</h3>
			<p>
				Tristique cras morbi sed natoque sagittis, fringilla. Mauris morbi amet at vitae lectus. Nisl,
				condimentum nec id eget. Mauris odio fermentum sit diam mauris id.
			</p>
		</li>
		<li>
			<h3>Winners Revealed!</h3>
			<p>
				Porta dolor dui ullamcorper et et. Nec eget odio libero ipsum enim neque netus sed. Iaculis elementum
				gravida tincidunt viverra dictum praesent nunc mattis.
			</p>
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
.stages h3 {
	font-size: 17px;
	font-weight: bold;
}
.stages p {
	color: #03180d;
	opacity: 0.6;
}
ul {
	list-style: none;
	padding: 0;
}
li {
	padding-left: 1.3em;
}
li:before {
	font-family: Icomoon;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-left: -1.3em;
	width: 0px;
	font-size: 20px;
	color: #00b259;
	margin-bottom: -30px;
	margin-top: 32px;
}
li:nth-child(1):before {
	content: '\e905';
}
li:nth-child(2):before {
	content: '\e904';
}
li:nth-child(3):before {
	content: '\e903';
}
li:nth-child(4):before {
	content: '\e902';
}
li:last-child:before {
	content: '\e90b';
	color: #cbb677;
}
@media only screen and (max-width: 600px) {
	li {
		padding-left: 2.3em;
	}
}
</style>
