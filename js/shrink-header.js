(function () {
    const header = document.querySelector(".site-header");
    if (!header) return;

    const SHRINK_SCROLL_Y = 120;  // scroll position to shrink
    const EXPAND_SCROLL_Y = 80;   // scroll position to expand (lower = buffer zone)

    function debounce(fn, delay) {
        let timeoutId;
        return function () {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(fn, delay);
        };
    }

    const handleScroll = debounce(() => {
        const scrollY = window.scrollY;

        if (scrollY > SHRINK_SCROLL_Y && !header.classList.contains("is-shrunk")) {
            header.classList.add("is-shrunk");
        } else if (scrollY < EXPAND_SCROLL_Y && header.classList.contains("is-shrunk")) {
            header.classList.remove("is-shrunk");
        }
    }, 50);

    document.addEventListener("scroll", handleScroll);
})();
