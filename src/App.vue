<template>
	<v-app>
		<router-view />
	</v-app>
</template>

<script>
export default {
	name: 'App',
};
</script>

<style>
@font-face {
	font-family: interstate;
	src: url('./assets/fonts/interstate/Interstate-regular.ttf');
}
@import url(./assets/fonts/icomoon/style.css);
body {
	font-family: interstate;
}
</style>
