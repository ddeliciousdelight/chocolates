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
    const offset = 100;  // adjust only this number if needed

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

// Product Search
function searchData() {

    let input = document.getElementById("searchInput")
        .value.toLowerCase()
        .trim();

    let items = document.querySelectorAll(
        ".product-box, .brownie-card, .special-box"
    );

    items.forEach(item => {

        let text = item.innerText.toLowerCase();

        if (input === "" || text.includes(input)) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }

    });

}
document.getElementById("searchInput").addEventListener("input", function () {

    if (this.value.trim() === "") {
        searchData();
    }

});

document.getElementById("searchInput").addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        event.preventDefault();
        searchData();
    }

});


function searchData() {

    let input = document.getElementById("searchInput")
        .value.toLowerCase()
        .trim();

    let items = document.querySelectorAll(
        ".product-box, .brownie-card, .special-box"
    );

    let found = false;

    items.forEach(item => {

        let text = item.innerText.toLowerCase();

        if (input === "" || text.includes(input)) {
            item.style.display = "";
            found = true;
        } else {
            item.style.display = "none";
        }

    });

    let noResults = document.getElementById("noResultsMessage");

    if (!found && input !== "") {
        noResults.style.display = "block";
    } else {
        noResults.style.display = "none";
    }
}

function searchData() {

    let input = document.getElementById("searchInput")
        .value.toLowerCase()
        .trim();

   let warning = document.getElementById("searchWarning");

if (input === "") {

    warning.style.display = "none";

    document.getElementById("noResultsMessage").style.display = "none";

    document.querySelectorAll(
        ".product-box, .brownie-card, .special-box"
    ).forEach(item => {
        item.style.display = "";
    });

    return;
}

    let items = document.querySelectorAll(
        ".product-box, .brownie-card, .special-box"
    );

    let found = false;
    let firstMatch = null;

    items.forEach(item => {

        let text = item.innerText.toLowerCase();

        if (text.includes(input)) {

            item.style.display = "";

            if (!firstMatch) {
                firstMatch = item;
            }

            found = true;

        } else {
            item.style.display = "none";
        }
    });

    let noResults = document.getElementById("noResultsMessage");

    if (!found) {
        noResults.style.display = "block";
    } else {
        noResults.style.display = "none";
    }

    if (firstMatch) {
        setTimeout(() => {
            firstMatch.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }, 100);
    }
}
document.getElementById("searchInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        searchData();
    }
});
document.getElementById("searchInput").addEventListener("input", function () {
    if (this.value.trim() === "") {
        searchData();
		 window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
});

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", function() {

    let value = this.value.toLowerCase().trim();

    let suggestions =
        document.getElementById("searchSuggestions");

    suggestions.innerHTML = "";

    if (value === "") {
        suggestions.style.display = "none";
        return;
    }

    let products = document.querySelectorAll(
        ".product-box, .brownie-card, .special-box"
    );

    let matches = [];

   products.forEach(product => {

    let nameElement = product.querySelector("h3");

    if (nameElement) {

        let name = nameElement.innerText;

        if (
            name.toLowerCase().includes(value) &&
            !matches.includes(name)
        ) {
            matches.push(name);
        }
    }
});

    matches.slice(0, 10).forEach(match => {

        let div = document.createElement("div");

        div.textContent = match;

        div.onclick = function() {

            searchInput.value = match;

            suggestions.style.display = "none";

            searchData();
        };

        suggestions.appendChild(div);
    });

    suggestions.style.display =
        matches.length ? "block" : "none";
});

// hamburger menu for mobile view 

const menuBtn =
document.getElementById("mobile-menu");

const navMenu =
document.querySelector("nav ul");

if(menuBtn && navMenu){
    menuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
}

document.querySelectorAll('.dropdown > a').forEach(link => {

    link.addEventListener('click', function(e){

        if(window.innerWidth <= 768){

            e.preventDefault();

            this.parentElement.classList.toggle('active');

        }

    });

});
