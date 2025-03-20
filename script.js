// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // active sections for animation on scroll
            sec.classList.add('show-animate');
        }
        // if want to animation that repeats on scroll use this
        else {
            sec.classList.remove('show-animate');
        }
    });

    // sticky navbar
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // animation footer on scroll
    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}

function openMail() {
    window.location.href = "mailto:gujarprajwal12@gmail.com?subject=Inquiry&body=Hello,";
}

function openPhone() {
    window.location.href = "tel:+917040452312";
}



function sendEmail(event) {
    event.preventDefault(); // Prevent form submission

    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    let mailtoLink = `mailto:gujarprajwal12@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

    window.location.href = mailtoLink;
}

function openDialer() {
    window.location.href = "tel:+917040452312";
}

// Open WhatsApp with pre-filled message
function openWhatsApp() {
    let phoneNumber = "917040452312"; // WhatsApp format without "+"
    let message = encodeURIComponent("Hello, I want to connect with you!");
    let whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

    window.location.href = whatsappURL;
}

