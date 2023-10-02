//basic fade

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.classList.contains('show')) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.5
});

const hiddenelements = document.querySelectorAll('.hidden');
hiddenelements.forEach((el) => observer.observe(el));

//transform from left

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.classList.contains('show2')) {
            entry.target.classList.add('show2');
        }
    });
}, {
    threshold: 0.5
});

const hiddenelements2 = document.querySelectorAll('.hidden2');
hiddenelements2.forEach((el) => observer2.observe(el));

//transform from right

const observer3 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.classList.contains('show3')) {
            entry.target.classList.add('show3');
        }
    });
}, {
    threshold: 0.5
});

const hiddenelements3 = document.querySelectorAll('.hidden3');
hiddenelements3.forEach((el) => observer3.observe(el));

window.onload = function() {
    const menu_btn = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobile-nav')

    menu_btn.addEventListener('click', function() {
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active')
    })
}
