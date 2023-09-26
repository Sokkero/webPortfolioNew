
//Make nav links scroll smoothly
export function MakeSmoothScroll(elements) {
    for (let n in elements) {
        if (
            Object.prototype.hasOwnProperty.call(elements, n) &&
            elements[n].hasAttribute("href")
        ) {
            elements[n].addEventListener("click", (e) => {
                e.preventDefault();
                document.querySelector(elements[n].hash).scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                    inline: "center"
                });
            });
        }
    }
}

//Spy scrolling to highlight correct navbar element
export function SpyScrolling(activeStyle) {
    const sections = document.querySelectorAll(".contentBlock");
    const scrollPos = document.querySelector("#root div").scrollTop;
    for (let s in sections) {
        if (
            Object.prototype.hasOwnProperty.call(sections, s) &&
            sections[s].offsetTop <= scrollPos + window.innerHeight / 2 &&
            sections[s].offsetHeight + sections[s].offsetTop >= scrollPos + window.innerHeight / 2
        ) {
            const id = sections[s].id;
            let currBlock = document.querySelector(`nav ul a[href*=${id}]`);
            if(!currBlock.classList.contains(activeStyle)) {
                document.querySelector(`nav ul a.${activeStyle}`)?.classList.remove(activeStyle);
                currBlock.classList.add(activeStyle);
            }
            return;
        }
    }
}
