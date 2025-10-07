// Initialize Vanta.js background
window.addEventListener('DOMContentLoaded', function () {
    if (window.VANTA && VANTA.GLOBE) {
        VANTA.GLOBE({
            el: "#vanta-bg",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x00bfff,
            backgroundColor: 0x111827,
            size: 0.8
        });
    }

    // Initialize AOS
    if (window.AOS) {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true
        });
    }

    // Initialize Feather Icons
    if (window.feather) {
        feather.replace();
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var target = document.querySelector(this.getAttribute('href'));
            if (!target) return;
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Navbar background on scroll
    var navbar = document.getElementById("navbar");
    if (navbar) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 10) {
                navbar.classList.add("backdrop-blur-sm", "bg-black/30");
            } else {
                navbar.classList.remove("backdrop-blur-sm", "bg-black/30");
            }
        });
    }
});



document.addEventListener("DOMContentLoaded", function() {
    // Lock scroll while loading screen is active
    if (document && document.body) {
        document.body.classList.add("loading-active");
    }
    const counter3 = document.querySelector(".counter-3");
    for(let i = 0; i < 2; i++) {
        for(let j = 0; j < 10; j++) {
            const div = document.createElement("div");
            div.className = "num";
            div.textContent = j;
            counter3.appendChild(div);
        }
    }

    const finalDiv = document.createElement("div");
    finalDiv.className = "num";
    finalDiv.textContent = "0";
    counter3.appendChild(finalDiv);

    function animate(counter, duration, delay = 0) {
        const numHeight = counter.querySelector(".num").clientHeight;
        const totalDistance = (counter.querySelectorAll(".num").length - 1) * numHeight;
        gsap.to(counter, {
            y: -totalDistance,
            duration: duration,
            delay: delay,
            ease: 'power2.inOut',
        });
    }

    animate(counter3, 5);
    animate(document.querySelector(".counter-2"), 6);
    animate(document.querySelector(".counter-1"), 2, 4);
});

gsap.to(".digit", {
    top: "-150px",
    stagger: { amount: 0.25 },
    delay: 6,
    duration: 1,
    ease: "power4.inOut"
});
gsap.from(".loader-1", {
    width: 0,
    duration: 6,
    ease: "power2.inOut",
});
gsap.from(".loader-2", {
    width: 0,
    delay: 1.9,
    duration: 2,
    ease: "power2.inOut",
});
gsap.to(".loader", {
    background: "none",
    delay: 6,
    duration: 0.1,
});
gsap.to(".loader-1", {
    rotate: 90,
    y: -50,
    duration: 0.5,
    delay: 6,
});
gsap.to(".loader-2", {
    x: -75,
    y: 75,
    duration: 0.5,
}, "<"
);
gsap.to(".loader", {
    scale: 40,
    duration: 1,
    delay: 7,
    ease: "power2.inOut",
});
gsap.to(".loader", {
    rotate: 45,
    y: 500,
    x: 2000,
    duration: 1,
    delay: 7,
    ease: "power2.inOut",
});
gsap.to(".loading-screen", {
    opacity: 0,
    duration: 0.5,
    delay: 7.5,
    ease: "power1.inOut",
    onComplete: function() {
        var ls = document.querySelector(".loading-screen");
        if (ls) {
            ls.style.display = "none";
        }
        if (document && document.body) {
            document.body.classList.remove("loading-active");
        }
    }
});

const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');

    form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    try {
        const response = await fetch('https://formspree.io/f/mrbyabqz', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
        form.reset();
        successMessage.classList.remove('hidden');
        errorMessage.classList.add('hidden');
        } else {
        throw new Error('Network response was not ok.');
        }
    } catch (error) {
        successMessage.classList.add('hidden');
        errorMessage.classList.remove('hidden');
    }
});
