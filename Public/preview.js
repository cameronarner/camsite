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

//theme changer
const palette = document.getElementById("paint-sect");
const frame = document.getElementById("palette-pop-up");

const themePopUp = () => {
    if(frame.style.visibility=="visible"){
        frame.style.setProperty('visibility', "hidden");
    }
    else{
        frame.style.setProperty('visibility', "visible");
    }
}

palette.addEventListener("click", themePopUp);

const colors = {
    "Lover": ["#BDBFE1","#FDB8DE", "#FEEDBA", "#70B7DF", "mesh-gradient.png"],
    "Tatooine Sunset": ["#340A14", "#FFD67A", "#AF1E48", "#D55146", "mesh-gradient15.png"],
    "Reyna": ["13152B", "#7A2AA3", "#E16CD6", "#F8B6FB", "mesh-gradient2.png"],
    "Twilight Filter": ["#0C2B39", "#14768F", "#56B0CB", "#AAB4B3", "mesh-gradient3.png"],
    "Wes Anderson": ["#7FC5CF", "#EDAF5D", "#CF2D28", "#939481", "mesh-gradient4.png"]
}

const changeColor = (theme) =>{
    const root = document.documentElement;
    const themeset = colors[theme];
    if (themeset){
        root.style.setProperty('--color1', themeset[0]);
        root.style.setProperty('--color2', themeset[1]);
        root.style.setProperty('--color3', themeset[2]);
        root.style.setProperty('--color4', themeset[3]); 
        root.style.setProperty('--background1', `url(${themeset[4]})`);
    }
   
}


frame.onload = () => {
    const framedoc = frame.contentDocument;
    if (framedoc){
        const Lover = framedoc.getElementById("Lover");
        const TatooineSunset = framedoc.getElementById("Tatooine Sunset");
        const Reyna = framedoc.getElementById("Reyna");
        const TwilightFilter = framedoc.getElementById("Twilight Filter");
        const WesAnderson = framedoc.getElementById("Wes Anderson");
        Lover.addEventListener("click",() => changeColor("Lover"));
        TatooineSunset.addEventListener("click",() => changeColor("Tatooine Sunset"));
        Reyna.addEventListener("click",() => changeColor("Reyna"));
        TwilightFilter.addEventListener("click",() => changeColor("Twilight Filter"));
        WesAnderson.addEventListener("click",() => changeColor("Wes Anderson"));
    }
};

