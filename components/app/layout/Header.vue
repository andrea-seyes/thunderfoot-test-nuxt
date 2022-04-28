<template>
    <header class="header">
        <div class="header__cnt">
            <a href="" class="header__logo">thunderfoot</a>
            <div class="header__actions">
                <button class="header__btn btn">Contact Us</button>
                <button v-on:click="switchTheme" id="toggle"><span></span></button>
            </div>
        </div>
    </header>
</template>


<script>
export default {
	methods: {
		switchTheme() {
			document.body.classList.toggle("light-theme");
		}
	},
}
</script>
