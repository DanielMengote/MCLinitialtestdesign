document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.dropdown-item-1');

    links.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            // Remove the 'active' class from all links
            links.forEach(function (link) {
                link.classList.remove('active');
            });

            // Add the 'active' class to the clicked link
            this.classList.add('active');

            // Redirect to the link's href attribute value
            window.location.href = this.getAttribute('href');
        });
    });

    // effects on services 
    $("#p1").mouseenter(function () {
        $("#p2").css({ "background-color": "#0032A0", "color": "white" });
    });

    $("#p1").mouseleave(function () {
        $("#p2").css({ "background-color": "", "color": "#0032A0" });
    });

    $("#p2").mouseleave(function () {
        $("#p2").css({ "background-color": "", "color": "#0032A0" });
    });



    /**
     * Hero carousel indicators
    */
    // let heroCarouselIndicators = select("#hero-carousel-indicators")
    // let heroCarouselItems = select('#heroCarousel .carousel-item', true)

    // heroCarouselItems.forEach((item, index) => {
    //     (index === 0) ?
    //         heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "' class='active'></li>" :
    //         heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "'></li>"
    // });


    // function setNavbarHeight() {
    //     const navbar = document.getElementById('collapsibleNavbar');
    //     const windowHeight = window.innerHeight;
    //     const navbarTop = navbar.getBoundingClientRect().top;
    //     const availableHeight = windowHeight - navbarTop;
    
        // navbar.style.height = `${availableHeight}px`; // Set the height of the collapsible content
    // }
    
    // Call the function on window resize and when the document is loaded
    // window.addEventListener('resize', setNavbarHeight);
    // window.addEventListener('DOMContentLoaded', setNavbarHeight);


});




