



const hamburgerMenu = document.querySelector('.hamburger-menu');
const body = document.body;

// navbar muncul dan hilang
hamburgerMenu.addEventListener('click', function () {
    const navigationBar = document.querySelector('header ul');
    navigationBar.classList.toggle('ul-active');

    const menuNavigationBar = document.querySelectorAll('header ul li');
    menuNavigationBar.forEach(function (menu) {
        menu.addEventListener('click', function () {
            navigationBar.classList.remove('ul-active')
        })
    })

})

// efek scroll smooth
// navbar
document.querySelectorAll('.home a').forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        })
    })
})
// swipe up

// animation show image certificate
const spanCertificate = document.querySelectorAll('.icon-eye');
const overlayCertificate = document.querySelectorAll('.overlay-image-certificate');
const fieldOverlayCertificate = document.querySelectorAll('.field-overlay-certificate')
const buttonCloseOverlay = document.querySelectorAll('.overlay-image-certificate button');
const slideBeforeCertificate = document.querySelectorAll('.slide-before-image-certificate')
const slideAfterCertificate = document.querySelectorAll('.slide-after-image-certificate');
const imageCertificate = document.querySelectorAll('.img-certificate');



spanCertificate.forEach(function (e, i) {
    e.addEventListener('click', function () {
        overlayCertificate[i].style.transform = 'scale(1)';
    });
})

buttonCloseOverlay.forEach(function (e, i) {
    e.addEventListener('click', function () {
        overlayCertificate[i].style.transform = 'scale(0)';
    });
})

for (let i = 0; i < slideAfterCertificate.length; i++) {
    slideAfterCertificate[i].addEventListener('click', function () {
        overlayCertificate[i].style.transform = 'scale(0)';
        overlayCertificate[i + 1].style.transform = 'scale(1)';
    })
}

for (let i = 0; i < slideBeforeCertificate.length; i++) {
    slideBeforeCertificate[i].addEventListener('click', function () {
        overlayCertificate[i].style.transform = 'scale(0)';
        overlayCertificate[i - 1].style.transform = 'scale(1)';
    })
}


// ANIMATION SECTION SKILL
const fieldSkill = document.querySelectorAll('.field-image-skill');
for (let i = 0; i < fieldSkill.length; i++) {
    if (i % 2 === 0) {
        // Index genap
        fieldSkill[i].setAttribute('data-aos', 'flip-right');
    }
    if (i % 2 === 1) {
        // Index ganjil
        fieldSkill[i].setAttribute('data-aos', 'flip-left');
    }
    if (window.innerWidth > 768) {
        if (i == 0) {
            fieldSkill[i].setAttribute('data-aos-duration', '300');
        }
        else {
            fieldSkill[i].setAttribute('data-aos-delay', `${i * 300}`);
        }
    }
}

// ALERT SECTION PROJECT
const linkToProject = document.querySelectorAll('.link-to-project');
linkToProject.forEach(function (project) {
    project.addEventListener('click', function (e) {
        e.preventDefault();

        let atributLinkProject = project.getAttribute('href');

        Swal.fire({
            title: "Are you sure?",
            text: "This action will bring you to project",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, go there"
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = atributLinkProject;
            }
        });
    })
})



// // ANIMATION SECTION PROJECT
const fieldProject = document.querySelectorAll('.field-project');
for (let i = 0; i < fieldProject.length; i++) {
    if (window.innerWidth > 768) {
        fieldProject[i].setAttribute('data-aos-duration', '1000');
        if (i % 2 === 0) {
            fieldProject[i].setAttribute('data-aos', 'fade-up-right');
        }
        else {
            fieldProject[i].setAttribute('data-aos', 'fade-up-left');
        }
    }

    else {
        fieldProject[i].setAttribute('data-aos', 'fade-up');
        fieldProject[i].setAttribute('data-aos-duration', '700')
    }
};



// ANIMATION SECTION CONTACT
const formMessage = document.querySelector('.form-message');
const fieldMap = document.querySelector('.sosmed-and-maps');

if(formMessage && fieldMap){
    if (window.innerWidth > 768) {
        fieldMap.setAttribute('data-aos', 'fade-right');
        formMessage.setAttribute('data-aos', 'fade-left');
    } else {
        fieldMap.setAttribute('data-aos', 'zoom-in-up');
        formMessage.setAttribute('data-aos', 'zoom-in-down');
    }
}


// ALERTSECTION CONTACT
const formContact = document.querySelector('.form-message');

if (formContact) {
formContact.addEventListener('submit', function (e) {
    e.preventDefault();
});
}

AOS.init({
    once: false
});

// TYPING NAME
const nameTyping = document.querySelector('.typing-name');

if(nameTyping){
    new Typed(".typing-name", {
        strings: ["Amalia Rifda Taurizka"],
        typeSpeed: 80,
        showCursor: true,
        loop: false
    });
}


// TYPING SUBTITLE
const subtitleTyping = document.querySelector('.typing-subtitle');

if(subtitleTyping){
    new Typed(".typing-subtitle", {
        strings: ["Analyst, UI UX Designer, Web Development | Information Systems"],
        typeSpeed: 35,
        startDelay: 300,
        showCursor: false,
        loop: false
    });
}

const form = document.querySelector(".contact-form");

if(form){
form.addEventListener("submit", function(e){
e.preventDefault();

const name = form.querySelector("input[type='text']").value;
const email = form.querySelector("input[type='email']").value;
const message = form.querySelector("textarea").value;

window.location.href =
`mailto:amaliarifda48@gmail.com?subject=Message from ${name}&body=${message} (${email})`;

});
}













