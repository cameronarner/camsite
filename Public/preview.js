const coverpg = document.getElementById("cover");
const pages = Array.from(document.getElementsByClassName("page")).reverse();
const book = document.getElementById("book");
const resetbtn = document.getElementById("reset");
let currentPage = 0;  // Start with the cover as the current page
let open = false;
const flipPageForward = () => {
    if (currentPage < pages.length) {
        console.log(pages);
        const page = pages[currentPage];
        page.style.setProperty('transform', 'rotateY(-160deg)');
        page.style.setProperty('z-index', `${currentPage + 2}`);  // Adjust z-index to bring it above the previous pages
        currentPage++;
    }
};

const flipPageBackward = () => {
    if (currentPage > 0) {
        currentPage--;
        const page = pages[currentPage];
        page.style.setProperty('transform', 'none');
        setTimeout(()=> {page.style.setProperty('z-index', '1'); console.log('delay')}, 501);
    }
};

const openBook = () => {
    if (currentPage === 0) {
        open=true;
        coverpg.style.setProperty('transform', 'rotateY(-160deg)');
        book.style.setProperty('margin-left','50vh');
        setTimeout(()=> {coverpg.style.setProperty('z-index', '1'); console.log('delay')}, 501);
    }
};

const closeBook = () => {
    if (currentPage === 0) {
        coverpg.style.setProperty('z-index', '2');
        coverpg.style.setProperty('transform', 'none');
        book.style.setProperty('margin-left','0');
        currentPage = 0;
        open= false;
    }
};

const reset = () =>{
    const callback = () => {
        while (currentPage > 0) {
       
         flipPageBackward();
        }
        setTimeout(() => {closeBook();}, 150);
    }
    callback();
}


coverpg.addEventListener("click", () => {
    if (!open) {
        openBook();
    } else {
        closeBook();
    }
});

pages.forEach((page, index) => {
    page.addEventListener("click", () => {
        console.log("clicked", index, currentPage);
        if (index === currentPage) {
            flipPageForward();
        } else if (index === currentPage - 1) {
            flipPageBackward();
        }
    });
});


resetbtn.addEventListener("click", reset);