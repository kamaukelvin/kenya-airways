<template>
	<div class="">
		<nav class="navbar navbar-light ">
			<div class="container ">
				<a class="navbar-brand"><img class="logo" :src="Logo" alt="Logo"/></a>
				<button
					class="navbar-toggler d-md-none"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavDropdown"
					aria-controls="navbarNavDropdown"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>

				<div class="navbar-links d-none d-md-block">
					<ul>
						<li><a href="#" class="active"> About</a></li>
						<li><a href="#">Eligibiity</a></li>
						<li><a href="#">Benefits</a></li>
						<li><a href="#">Stages</a></li>
						<li><a href="#">FAQ</a></li>
					</ul>
				</div>
			</div>
		</nav>
	</div>
</template>
<script>
import Logo from '../assets/kq-logo-main.png';
export default {
	name: 'Navbar',
	data() {
		return { Logo };
	},
};
</script>
<style scoped>
.logo {
	max-height: 40px;
	width: 100%;
}
.navbar-links {
	display: flex;
	align-items: center;
	justify-content: flex-end;
}
ul {
	list-style-type: none;
	padding: 0;
	margin: 0;
	float: right;
}
ul li {
	display: inline-block;
	font-size: 16px;
	padding: 20px;
	color: #000;
}
.navbar-links a {
	text-decoration: none;
	color: #000;
}
.navbar-links a.active {
	color: #ec2027;
}

a:hover {
	text-decoration: underline;
	color: #ec2027;
}
@media only screen and (max-width: 600px) {
	.logo {
		max-width: 250px;
		max-height: 100%;
	}
}
</style>
