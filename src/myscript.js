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




const mainDiv = document.querySelectorAll(".main");


const navItems = [
    {
        name: "Home",
        href: "index.html"
    },
    {
        name: "Line Nav",
        href: "line-nav.html"
    },
    {
        name: "Animated Spinner",
        href: "animated-spinner.html"
    },
    {
        name: "Modern Button",
        href: "modern-button.html"
    },
    {
        name: "Modern Menu",
        href: "modern-menu.html"
    },
    {
        name: "Cards",
        href: "cards.html"
    },
    {
        name: "Nav bars",
        href: "navbars.html"
    },
    {
        name: "Modern page",
        href: "Modern-page.html"
    }
];


const navBar = document.createElement("nav");

navBar.className =
    "flex nav flex-col gap-2 w-72 p-4 justify-center border border-zinc-800 rounded-4xl";

const fragment = document.createDocumentFragment();

navItems.forEach((item, index) => {

    const link = document.createElement("a");

    link.href = item.href;

    link.className =
        "nav-link group relative flex h-px items-center after:absolute after:size-full after:top-1/2 after:left-0 after:-translate-y-1/2 after:p-3.5 gap-3";

    link.innerHTML = `
        <span class="
            nav-line
            block
            h-px
            w-6
            shrink-0
            bg-white/20
            transition-all
            duration-300
            ease-out
            group-hover:w-12
            group-hover:bg-white
            group-aria-[current=page]:w-10
            group-aria-[current=page]:bg-white
        "></span>

        <span class="
            text-sm
            text-white/60
            transition-colors
            duration-300
            group-hover:text-white
            group-aria-[current=page]:text-white
        ">
            ${item.name}
        </span>
    `;

    fragment.append(link);

    // Add separators except after the last item
    if (index < navItems.length - 1) {
        const separator1 = document.createElement("span");
        separator1.className = "block h-px w-6 bg-white/20";

        const separator2 = document.createElement("span");
        separator2.className = "block h-px w-6 bg-white/20";

        fragment.append(separator1, separator2);
    }
});



navBar.append(fragment);



mainDiv.forEach((main) => {
    main.insertAdjacentElement("afterbegin", navBar.cloneNode(true));
});