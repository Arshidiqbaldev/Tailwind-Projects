document.addEventListener("DOMContentLoaded", () => {
    const currentPage = window.location.pathname.split("/").pop();

    document.querySelectorAll(".nav-link").forEach(link => {
        const href = link.getAttribute("href");

        if (href === currentPage) {
            link.setAttribute("aria-current", "page");
        } else {
            link.removeAttribute("aria-current");
        }
    });
});