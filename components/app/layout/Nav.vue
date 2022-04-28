<template>
    <nav class="nav">
        <div class="project-image-wrapper">
            <div class="project-image"></div>
        </div>

        <ul class="nav-list">
            <li class="nav-item" v-for="project in projects" :key="project.id" >
                <a href="" class='nav-link' :class="'nav-link-0' + project.id">
                    <div class="nav-link__cnt">
                        <p class="nav-link__txt h-xl">{{ project.text }}</p>
                        <button class="nav-link__btn btn">Explore</button>
                    </div>
                    <span class="nav-link__bar"></span>
                </a>
            </li>
        </ul>

    </nav>
</template>


<script>
export default {
    data() {
        return {
			projects: [ 
				{
					"id": "1",
					"text": "Portfolio Page 01",
					"image": "img_01.png",
				},
				{
					"id": "2",
					"text": "Portfolio Page 02",
					"image": "img_02.png",
				},
				{
					"id": "3",
					"text": "Portfolio Page 03",
					"image": "img_03.png",
				},
				{
					"id": "4",
					"text": "Portfolio Page 04",
					"image": "img_04.png",
				},
				{
					"id": "5",
					"text": "Portfolio Page 05",
					"image": "img_05.png",
				},
				{
					"id": "6",
					"text": "Portfolio Page 06",
					"image": "img_06.png",
				},
			]
		}
	},

	mounted() {
        this.showProject();
	},

    methods: {
        showProject() {
            let navLinks = document.querySelectorAll(".nav-link");
            
            navLinks.forEach((link, i) => {

                let linkClass = link.classList[1];
                let linkId = linkClass.slice(linkClass.length - 1);
                let linkImg = "img_0" + linkId + ".png";
                let linkTxt = link.querySelector(".nav-link__txt");
                let linkBtn = link.querySelector(".nav-link__btn");

                let tl1 = gsap.timeline({ defaults: {duration: .36, ease: "Power2.easeInOut", delay: .1 } }).pause();
                let tl2 = gsap.timeline({ defaults: {duration: .2, ease: "Circ.easeOut" } }).pause();

                tl1
                .to(linkTxt, {
                    "--stop-hover": "100%",
                })
                .to(linkBtn, {
                    opacity: 1,
                    duration: .1,
                    y: -15,
                }, "=-0.1" )
                .to(link.querySelector(".nav-link__bar"), {
                    width: '100%',
                }, '=-0.5')
                .to(document.querySelector(".project-image-wrapper"), {
                    x: 0,
                    opacity: 1,
                }, '=-0.1');


                tl2
                .to(document.querySelectorAll(".nav-link__txt"), {
                    opacity: 0,
                })
                .to(linkTxt, {
                    opacity: 1,
                }, '<')
                .to(document.querySelector(".project-image"), {
                    opacity: 1
                }, '<');

                                    
                link.addEventListener("mouseenter", function() {
                    document.querySelector(".project-image").style.backgroundImage = "url(assets/img/" + linkImg + ")";
                    tl1.play();
                });
            
                link.addEventListener("mouseleave", function() {
                    tl1.timeScale(2).reverse();
                });

                linkBtn.addEventListener("mouseenter", function() {
                    tl2.play();
                });

                linkBtn.addEventListener("mouseleave", function() {
                    tl2.timeScale(3).reverse();
                });

            });
        }
    }

}
</script>
