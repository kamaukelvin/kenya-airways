<template>
	<div>
		<Navbar />
		<Hero />
		<div class="container">
			<Content
				title="about"
				class="about-content"
				subtitle="Sit quis viverra enim proin fermentum egestas facilisis lacus ultrices. Neque, dignissim faucibus ac in ipsum elit. "
				><About
			/></Content>
			<Content
				title="eligibility"
				subtitle=" To be eligiblie to participate, here are the rules that all competitors must follow "
			>
				<Eligibility
			/></Content>
			<Content title="benefits" subtitle="What do you stand to gain if you participate in this competition?">
				<Benefits />
			</Content>
			<Content title="stages" subtitle="The competition is divided into stages as follows some more text here">
				<Stages />
			</Content>
		</div>
		<Footer />
	</div>
</template>
<script>
import Navbar from '../components/Navbar.vue';
import Hero from '../components/Hero.vue';
import Content from '../components/Content.vue';
import Benefits from '../components/Benefits.vue';
import Eligibility from '../components/Eligibility.vue';
import About from '../components/About.vue';
import Stages from '../components/Stages.vue';
import Footer from '../components/Footer.vue';
export default {
	name: 'Landing',
	components: {
		Navbar,
		Hero,
		About,
		Content,
		Benefits,
		Eligibility,
		Stages,
		Footer,
	},
};
</script>
<style>
.about-content {
	margin-top: 4rem;
	position: relative;
	z-index: 300;
}
p {
	color: #03180d;
	opacity: 0.6;
}
@media only screen and (max-width: 600px) {
	.about-content {
		margin-top: 8rem;
	}
	.container {
		padding: 1rem;
	}
	body {
		overflow-x: hidden;
	}
}
</style>
