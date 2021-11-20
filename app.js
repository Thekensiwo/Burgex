const { default: gsap } = require("gsap/gsap-core")

const socials = document.querySelectorAll('.social')

window.addEventListener('resize', e => {

    console.log(document.body.clientWidth)

    if (document.body.clientWidth > 1000) {

        setTimeout(() => {
            socials.forEach(social => {

                social.style.opacity = '1'
                social.style.animation = 'none'

                social.addEventListener('mouseover', e => {
                    e.currentTarget.style.transform = 'translateY(-10px)'
                })

                social.addEventListener('mouseout', e => {
                    e.currentTarget.style.transform = 'translateY(0px)'
                })
            })

        }, 5300)

    }
})


gsap.to('.logos', { opacity: 0, duration: 5 })