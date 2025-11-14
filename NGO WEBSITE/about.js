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