<template>
	<div class="footer ">
		<div class="container ">
			<div class="row">
				<div class="col-md-2 logo">
					<img :src="Logo" alt="Logo" />
				</div>
				<div class="col-md-10 footer-links">
					<ul>
						<li><a href="#"> Privacy Policy</a></li>
						<li><a href="#">Terms and Conditions</a></li>
						<li>© 2021 Kenya Airways Limited. All rights reserved.</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import Logo from '../assets/kq-logo.png';
export default {
	name: 'Footer',
	data() {
		return { Logo };
	},
};
</script>
<style scoped>
.logo {
	display: flex;
	justify-content: center;
	align-items: center;
}
.logo img {
	max-height: 80px;
}
.footer {
	max-height: 180px;
	width: 100%;
	background: #03180d;
	color: #fff;
	padding: 1rem 0;
}
.footer-links {
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
	font-size: 12px;
	padding: 20px;
}
.footer-links a {
	text-decoration: none;
	color: #fff;
}
a:hover {
	text-decoration: underline;
}

@media only screen and (max-width: 600px) {
	.footer {
		max-height: 100%;
	}
	.footer-links {
		display: block;
	}
	ul {
		float: none;
	}
	ul li {
		display: block;
		padding: 10px;
	}
}
</style>
