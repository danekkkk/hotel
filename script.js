function toggleAnimation() {
    const breakpoint = 1400;
    const screenWidth = window.innerWidth;

    let isMobileOrTablet = screenWidth < breakpoint;

    if (!isMobileOrTablet) {
        // jesli urzadzenie to komputer / laptop
        gsap.registerPlugin(ScrollTrigger);
        gsap.to('.img-side', {
            scrollTrigger: {
                trigger: ".text-side",
                toggleActions: "play none none none",
            },
            duration: 1,
            opacity: 1,
            x: -30
        });
        gsap.to('.secondary-title', {
            scrollTrigger: {
                trigger: ".text-side",
                toggleActions: "play none none none",
            },
            duration: 1,
            opacity: 1,
            x: 20
        });
        gsap.to('.main-title', {
            scrollTrigger: {
                trigger: ".text-side",
                toggleActions: "play none none none",
            },
            duration: 1,
            opacity: 1,
            x: 20
        });
        gsap.to('.description-title', {
            scrollTrigger: {
                trigger: ".text-side",
                toggleActions: "play none none none",
            },
            duration: 1,
            opacity: 1,
            x: 20
        });
        gsap.to('.view-button', {
            scrollTrigger: {
                trigger: ".text-side",
                toggleActions: "play none none none",
            },
            duration: 1,
            opacity: 1,
            x: 20
        });
        gsap.to('.preview-section', {
            scrollTrigger: {
                trigger: ".text-side",
                toggleActions: "play none none none",
            },
            duration: 1,
            opacity: 1,
            y: -20
        });
        gsap.to('.mockup', {
            scrollTrigger: {
                trigger: ".preview-section",
                toggleActions: "restart reverse restart reverse",
                id: 'mockup',
                // markers: true,
                start: "40% center",
                end: "90% 70%",
                pin: true,
                scrub: 1,
                pinSpacing: false,
            },
            duration: 1,
            width: '698.23px',
            height: '500px'
        });
        gsap.to('.positives-section .article-heading', {
            scrollTrigger: {
                trigger: ".positives-section",
                toggleActions: "play none none none",
                // markers: true,
                id: 'co zawiera',
                start: '-30px 90%'
            },
            duration: 1.3,
            opacity: 1,
            y: -30
        });

        let cards = gsap.utils.toArray('.first-row .card');
        let cards2 = gsap.utils.toArray('.second-row .card');

        gsap.to(cards, {
            scrollTrigger: {
                trigger: ".first-row",
                toggleActions: "play none none none",
                // markers: true,
                id: 'karty',
                start: '100px 65%'
            },
            duration: 1.3,
            opacity: 1,
            y: -30
        });
        gsap.to(cards2, {
            scrollTrigger: {
                trigger: ".second-row",
                toggleActions: "play none none none",
                // markers: true,
                id: 'karty 2',
                start: '-10px 90%',
            },
            duration: 1.3,
            opacity: 1,
            y: -30
        });
        gsap.to('.gallery-section .article-heading', {
            scrollTrigger: {
                trigger: ".gallery-section",
                toggleActions: "play none none none",
                // markers: true,
                id: 'galeria',
                start: '-10px 85%'
            },
            duration: 1.3,
            opacity: 1,
            y: -30
        });
        gsap.to('body', {
            scrollTrigger: {
                trigger: ".gallery-section",
                toggleActions: "restart reverse restart reverse",
                // markers: true,
                start: "365px center",
                end: "4100px center",
                // scrub: 1,
                // pin: true,
            },
            duration: 0.7,
            backgroundColor: "#4D4D4D",
        });
        gsap.to('.gallery-section .article-heading', {
            scrollTrigger: {
                trigger: ".gallery-section",
                toggleActions: "restart reverse restart reverse",
                // markers: true,
                start: "365px center",
                end: "4100px center",
            },
            duration: 0.7,
            color: "white",
        });

        let images = gsap.utils.toArray('.img-box');
        gsap.to(images, {
            scrollTrigger: {
                trigger: ".gallery-imgs",
                toggleActions: "restart reverse restart reverse",
                // markers: true,
                id: 'zdjęcia',
                start: '200px 70px',
                end: "4100px 70%",
                pinSpacing: false,
            },
            duration: 1.3,
            height: '30.8333%',
            width: '80%'
        });

    } else {
        // jesli urzadzenie to telefon / tablet
        gsap.registerPlugin(ScrollTrigger);
        gsap.to('.img-side', {
            scrollTrigger: {
                trigger: ".text-side",
                toggleActions: "play none none none",
            },
            duration: 1,
            opacity: 1,
            x: -30
        });
        gsap.to('.secondary-title', {
            scrollTrigger: {
                trigger: ".text-side",
                toggleActions: "play none none none",
            },
            duration: 1,
            opacity: 1,
            x: 20
        });
        gsap.to('.main-title', {
            scrollTrigger: {
                trigger: ".text-side",
                toggleActions: "play none none none",
            },
            duration: 1,
            opacity: 1,
            x: 20
        });
        gsap.to('.description-title', {
            scrollTrigger: {
                trigger: ".text-side",
                toggleActions: "play none none none",
            },
            duration: 1,
            opacity: 1,
            x: 20
        });
        gsap.to('.view-button', {
            scrollTrigger: {
                trigger: ".text-side",
                toggleActions: "play none none none",
            },
            duration: 1,
            opacity: 1,
            x: 20
        });
        gsap.to('.preview-section', {
            scrollTrigger: {
                trigger: ".text-side",
                toggleActions: "play none none none",
            },
            duration: 1,
            opacity: 1,
            y: -20
        });
        gsap.to('.positives-section .article-heading', {
            scrollTrigger: {
                trigger: ".positives-section",
                toggleActions: "play none none none",
                // markers: true,
                id: 'co zawiera',
                start: '-30px 90%'
            },
            duration: 1.3,
            opacity: 1,
            y: -30
        });

        let cards = gsap.utils.toArray('.first-row .card');
        let cards2 = gsap.utils.toArray('.second-row .card');

        gsap.to(cards, {
            scrollTrigger: {
                trigger: ".first-row",
                toggleActions: "play none none none",
                // markers: true,
                id: 'karty',
                start: '-50px 65%'
            },
            duration: 1.3,
            opacity: 1,
            y: -30
        });
        gsap.to(cards2, {
            scrollTrigger: {
                trigger: ".second-row",
                toggleActions: "play none none none",
                // markers: true,
                id: 'karty 2',
                start: '-50px 90%',
            },
            duration: 1.3,
            opacity: 1,
            y: -30
        });
        gsap.to('.gallery-section .article-heading', {
            scrollTrigger: {
                trigger: ".gallery-section",
                toggleActions: "play none none none",
                // markers: true,
                id: 'galeria',
                start: '-80px 85%'
            },
            duration: 1.3,
            opacity: 1,
            y: -30
        });
    }
}


window.addEventListener("DOMContentLoaded", function() {
    toggleAnimation();
});

let lastScreenWidth = window.innerWidth;

window.addEventListener('resize', () => {
    // Opóźniamy wywołanie funkcji, aby uniknąć nadmiernego obciążenia
    // i wykonujemy ją tylko raz, po zakończeniu zmiany rozmiaru ekranu
    clearTimeout(window.resizedFinished);
        window.resizedFinished = setTimeout(() => {
        const breakpoint = 1400;
        const screenWidth = window.innerWidth;

        const widthExceededBreakpoint = lastScreenWidth > breakpoint && screenWidth <= breakpoint;
        const widthBelowBreakpoint = lastScreenWidth <= breakpoint && screenWidth > breakpoint;

        // Odświeżamy stronę tylko jeśli szerokość ekranu przekroczyła lub wróciła poniżej wartości breakpointu
        if (widthExceededBreakpoint || widthBelowBreakpoint) {
            location.reload();
        }

        lastScreenWidth = screenWidth;
    }, 500);
});