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

const navBar = document.createElement("nav");
navBar.className = "flex nav flex-col gap-2 w-72 p-4 justify-center  border border-zinc-800 rounded-4xl";

navBar.innerHTML = `

            <a href="index.html"
                class="nav-link group relative flex h-px items-center after:absolute after:size-full after:top-1/2 after:left-0 after:-translate-y-1/2  after:p-3.5 gap-3">

                <span class="nav-line block h-px w-6 shrink-0 bg-white/20 transition-all duration-300 ease-out
                    group-hover:w-12
                    group-hover:bg-white
                    group-aria-[current=page]:w-10
                    group-aria-[current=page]:bg-white">
                </span>

                <span class="text-sm text-white/60 transition-colors duration-300
                    group-hover:text-white
                    group-aria-[current=page]:text-white">
                    Home
                </span>

            </a>

            <span class="block h-px w-6 bg-white/20"></span>
            <span class="block h-px w-6 bg-white/20"></span>

            <a href="line-nav.html"
                class="nav-link group relative flex h-px items-center after:absolute after:size-full after:top-1/2 after:left-0 after:-translate-y-1/2  after:p-3.5 gap-3">

                <span class="nav-line block h-px w-6 shrink-0 bg-white/20 transition-all duration-300
                    group-hover:w-12
                    group-hover:bg-white
                    group-aria-[current=page]:w-10
                    group-aria-[current=page]:bg-white">
                </span>

                <span class="text-sm text-white/60 transition-colors duration-300
                    group-hover:text-white
                    group-aria-[current=page]:text-white">
                    Line Nav
                </span>

            </a>

            <span class="block h-px w-6 bg-white/20"></span>
            <span class="block h-px w-6 bg-white/20"></span>

            <a href="animated-spinner.html"
                class="nav-link group relative flex h-px after:absolute after:size-full after:top-1/2 after:left-0 after:-translate-y-1/2  after:p-3.5 items-center gap-3">

                <span class="nav-line block h-px w-6 shrink-0 bg-white/20 transition-all duration-300
                    group-hover:w-12
                    group-hover:bg-white
                    group-aria-[current=page]:w-10
                    group-aria-[current=page]:bg-white">
                </span>

                <span class="text-sm text-white/60 transition-colors duration-300
                    group-hover:text-white
                    group-aria-[current=page]:text-white">
                    Animated Spinner
                </span>

            </a>

            <span class="block h-px w-6 bg-white/20"></span>
            <span class="block h-px w-6 bg-white/20"></span>

            <a href="modern-button.html"
                class="nav-link group relative flex h-px after:absolute after:size-full after:top-1/2 after:left-0 after:-translate-y-1/2  after:p-3.5 items-center gap-3">

                <span class="nav-line block h-px w-6 shrink-0 bg-white/20 transition-all duration-300
                    group-hover:w-12
                    group-hover:bg-white
                    group-aria-[current=page]:w-10
                    group-aria-[current=page]:bg-white">
                </span>

                <span class="text-sm text-white/60 transition-colors duration-300
                    group-hover:text-white
                    group-aria-[current=page]:text-white">
                    Modern Button
                </span>

            </a>


            <span class="block h-px w-6 bg-white/20"></span>
            <span class="block h-px w-6 bg-white/20"></span>

            <a href="modern-menu.html"
                class="nav-link group relative flex h-px after:absolute after:size-full after:top-1/2 after:left-0 after:-translate-y-1/2  after:p-3.5 items-center gap-3">

                <span class="nav-line block h-px w-6 shrink-0 bg-white/20 transition-all duration-300
                    group-hover:w-12
                    group-hover:bg-white
                    group-aria-[current=page]:w-10
                    group-aria-[current=page]:bg-white">
                </span>

                <span class="text-sm text-white/60 transition-colors duration-300
                    group-hover:text-white
                    group-aria-[current=page]:text-white">
                    Modern Menu
                </span>

            </a>


            <span class="block h-px w-6 bg-white/20"></span>
            <span class="block h-px w-6 bg-white/20"></span>

            <a href="cards.html"
                class="nav-link group relative flex h-px after:absolute after:size-full after:top-1/2 after:left-0 after:-translate-y-1/2  after:p-3.5 items-center gap-3">

                <span class="nav-line block h-px w-6 shrink-0 bg-white/20 transition-all duration-300
                    group-hover:w-12
                    group-hover:bg-white
                    group-aria-[current=page]:w-10
                    group-aria-[current=page]:bg-white">
                </span>

                <span class="text-sm text-white/60 transition-colors duration-300
                    group-hover:text-white
                    group-aria-[current=page]:text-white">
                    Cards
                </span>

            </a>

            <span class="block h-px w-6 bg-white/20"></span>
            <span class="block h-px w-6 bg-white/20"></span>

            <a href="navbars.html"
                class="nav-link group relative flex h-px after:absolute after:size-full after:top-1/2 after:left-0 after:-translate-y-1/2  after:p-3.5 items-center gap-3">

                <span class="nav-line block h-px w-6 shrink-0 bg-white/20 transition-all duration-300
                    group-hover:w-12
                    group-hover:bg-white
                    group-aria-[current=page]:w-10
                    group-aria-[current=page]:bg-white">
                </span>

                <span class="text-sm text-white/60 transition-colors duration-300
                    group-hover:text-white
                    group-aria-[current=page]:text-white">
                    Nav bars
                </span>

            </a>

            <span class="block h-px w-6 bg-white/20"></span>
            <span class="block h-px w-6 bg-white/20"></span>

            <a href="Modern-page.html"
                class="nav-link group relative flex h-px after:absolute after:size-full after:top-1/2 after:left-0 after:-translate-y-1/2  after:p-3.5 items-center gap-3">

                <span class="nav-line block h-px w-6 shrink-0 bg-white/20 transition-all duration-300
                    group-hover:w-12
                    group-hover:bg-white
                    group-aria-[current=page]:w-10
                    group-aria-[current=page]:bg-white">
                </span>

                <span class="text-sm text-white/60 transition-colors duration-300
                    group-hover:text-white
                    group-aria-[current=page]:text-white">
                    Modern page
                </span>

            </a>
`;

mainDiv.forEach((main) => {
    main.insertAdjacentElement("afterbegin", navBar);
})