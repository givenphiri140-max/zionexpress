// MENU TOGGLE (for smaller screens)


function menu() {
    if (sidebar) sidebar.classList.add("active");
}

function closing() {
    if (sidebar) sidebar.classList.remove("active");
}

// IMPACT COUNTERS
const counters = document.querySelectorAll(".counter");
const speed = 200; // lower = faster

const animateCounters = () => {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute("data-target");
            const count = +counter.innerText;
            const increment = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 15);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
};

// Trigger animation when section appears
window.addEventListener("scroll", () => {
    const impactSection = document.querySelector(".impact");
    const sectionTop = impactSection.getBoundingClientRect().top;
    const triggerHeight = window.innerHeight / 1.2;

    if (sectionTop < triggerHeight) {
        animateCounters();
    }
}, { once: true });


//////////sidebar
const sidebar = document.querySelector(".sidebar");

// OPEN SIDEBAR
function menu() {
    sidebar.classList.add("active");
}

// CLOSE SIDEBAR
function closeSidebar() {
    sidebar.classList.remove("active");
}


