<template>
	<div class="hero">
		<div class="container">
			<div class="hero-text">
				<h1>Fahari Innovation Challenge</h1>
				<p class="float-md-left">
					Sit quis viverra enim proin fermentum egestas facilisis lacus ultrices. Neque, dignissim faucibus ac
					in ipsum elit.
				</p>
			</div>
			<img :src="clouds" class="clouds-img" alt="clouds" />
			<img :src="plane" class="plane-img" alt="plane" />
			<button class="btn btn-md-lg btn-md apply-btn float-md-right">Apply Now</button>
		</div>
	</div>
</template>
<script>
import clouds from '../assets/clouds.png';
import plane from '../assets/plane.png';
export default {
	name: 'Hero',
	data() {
		return { clouds, plane };
	},
};
</script>
<style scoped>
.hero {
	background: linear-gradient(180deg, #57d2fa 0.8%, rgba(227, 244, 254, 0) 100%);
	min-height: 250px;
	position: relative;
}
.hero-text {
	max-width: 50%;
	margin-top: 3rem;
	z-index: 100;
	position: relative;
}
.hero-text h1 {
	color: #ec2027;
	font-size: 36px;
	font-weight: bold;
}
.clouds-img {
	position: absolute;
	top: 25px;
	right: 10%;
}
.plane-img {
	top: -10px;
	right: 250px;
	max-height: 150px;
	position: absolute;
}
.apply-btn {
	background-color: #ec2027;
	color: #fff;
	position: absolute;
	right: 310px;
	bottom: 0;
	font-size: 17px;
}
.apply-btn:focus {
	outline: 0;
	box-shadow: none;
}
@media only screen and (max-width: 600px) {
	.hero-text {
		max-width: 100%;
		margin-top: 1rem;
		z-index: 100;
		position: relative;
	}
	.hero-text h1 {
		font-size: 30px;
	}
	.plane-img {
		top: 130px;
		right: -100px;
		max-height: 150px;
		position: absolute;
	}
	.apply-btn {
		bottom: -110px;
		left: 33.3%;
		right: 0px;
	}
}
</style>
