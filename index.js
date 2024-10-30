document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    // Function to change background gradient based on section
    function changeBackgroundColor(sectionId) {
        let gradient;
        switch (sectionId) {
            case "home":
                gradient = "radial-gradient(circle, rgba(81,112,255,1) 0%, rgba(255,102,196,1) 100%)";
                break;
            case "skills":
                gradient = "radial-gradient(circle, rgba(140, 82, 255, 1) 0%, rgba(92, 255, 230, 1) 100%)";
                break;
            case "contact":
                gradient = "radial-gradient(circle, rgba(0, 128, 128, 1) 10%, rgba(0, 192, 192, 1) 50%, rgba(75, 0, 130, 1) 100%)";
                break;
            default:
                gradient = "radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(220, 220, 220, 1) 100%)";
                break;
        }
        document.body.style.background = gradient;
    }

    // Change background on scroll
    function onScroll() {
        let foundSection = false; 
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                changeBackgroundColor(section.id);
                foundSection = true; 
            }
        });

        if (!foundSection) {
            const homeRect = document.getElementById("home").getBoundingClientRect();
            if (homeRect.top < window.innerHeight && homeRect.bottom > 0) {
                changeBackgroundColor("home");
            }
        }
    }

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetSectionId = this.getAttribute("href").substring(1);
            changeBackgroundColor(targetSectionId);
            document.getElementById(targetSectionId).scrollIntoView({ behavior: 'smooth' });
        });
    });

    window.addEventListener("scroll", onScroll);
    changeBackgroundColor("home"); 
});
