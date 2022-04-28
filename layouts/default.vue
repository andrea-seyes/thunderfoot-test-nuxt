<template>
	<div class="layout">
		<Header/>
		<Nav/>
	</div>
</template>


<script>
export default {

	mounted() {
		const tl0 = gsap.timeline({ defaults:{ duration:.4 }, ease: "Power1.easeInOut" })

		tl0
		.from(".header", {
			opacity: 0,
			y: -200
		})
		.from(".nav-item", {
			opacity: 0,
			stagger: .2,
			y: 100
		})

		tl0.play();
		window.scrollTo(0, 0);
	}

}
</script>
