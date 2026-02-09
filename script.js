(function() {
    // --- Smooth scroll
    function scrollToSection(id) {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    window.scrollToSection = scrollToSection;

    // --- Contact form
    try {
        const contactForm = document.getElementById("contactForm");
        if(contactForm){
            contactForm.addEventListener("submit", function(e){
                e.preventDefault();
                const resp = document.getElementById("responseMessage");
                if(resp){
                    resp.classList.remove("hidden");
                    resp.innerText = "Thank you! Your message has been sent.";
                }
                this.reset();
            });
        }
    } catch(err) { console.error("Contact form error:", err); }

    // --- Image Modal
    try {
        const modal = document.getElementById("imgModal");
        const modalImg = document.getElementById("modalImg");
        const closeBtn = document.querySelector(".close");
        const zoomImgs = document.querySelectorAll(".zoom-img");

        if(zoomImgs.length && modal && modalImg){
            zoomImgs.forEach(img=>{
                img.addEventListener("click", ()=>{
                    modal.style.display="block";
                    modalImg.src = img.src;
                });
            });
            if(closeBtn) closeBtn.addEventListener("click", ()=> modal.style.display="none");
            modal.addEventListener("click", (ev)=> { if(ev.target===modal) modal.style.display="none"; });
        }
    } catch(err){ console.error("Modal error:", err); }

    // --- Testimonials carousel
    try{
        let currentIndex = 0;
        const testimonials = document.querySelectorAll(".testimonial");

        function showSlide(index){
            testimonials.forEach((t,i)=>{
                t.classList.remove("active");
                if(i===index) t.classList.add("active");
            });
        }

        function nextSlide(){
            currentIndex = (currentIndex+1)%testimonials.length;
            showSlide(currentIndex);
        }

        if(testimonials.length>0){
            showSlide(currentIndex);
            setInterval(nextSlide,3000);
        }
    } catch(err){ console.error("Testimonials error:", err); }

})();

// JavaScript

// JavaScript

// Show About Us on scroll
window.addEventListener('scroll', () => {
    const about = document.getElementById('about-us');
    const scrollPos = window.scrollY + window.innerHeight;
    const aboutPos = about.offsetTop + 100;

    if(scrollPos > aboutPos){
        about.classList.add('show');
    } else {
        about.classList.remove('show');
    }
});

// Arrow click - reveal Team section
document.getElementById('about-arrow').addEventListener('click', () => {
    const team = document.getElementById('team-section');
    team.style.display = team.style.display === 'block' ? 'none' : 'block';
    team.scrollIntoView({behavior: 'smooth'});
});
document.querySelector('a[href="#about-us"]').addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector('#about-us');
    const offset = 130;  // adjust only this number if needed

    const topPos = target.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({
        top: topPos,
        behavior: 'smooth'
    });
});

function scrollToSection(id, offset = 130) {
    const section = document.querySelector(id);
    if (!section) return;

    const y = section.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({
        top: y,
        behavior: "smooth"
    });
}

// For Navbar Click: About Us
document.querySelector('a[href="#about-us"]').addEventListener("click", function(e) {
    e.preventDefault();
    scrollToSection("#about-us", 130);
});

// For Arrow Click in About Us
document.querySelector('#about-arrow').addEventListener("click", function(e) {
    e.preventDefault();
    scrollToSection("#meet-our-founder", 130); 
});