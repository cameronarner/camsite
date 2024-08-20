const nextbtn = document.getElementsByClassName("next");
const pages = document.getElementsByClassName("page");
const coverpg = document.getElementById("cover");

let currentPage = 0;


const openBook = () => {
    currentPage = 1;
    if(coverpg.style.transform ==='rotateY(-160deg)'){
        coverpg.style.setProperty('transform', 'none');
    }
    else{
    coverpg.style.setProperty('transform', 'rotateY(-160deg)');
    }
 }

const flipPage = () => {
    const page = document.getElementById(`p${currentPage}`);
    page.style.setProperty('transform', 'rotateY(-160deg)');
    page.style.setProperty('z-index', `${currentPage+1}`);
    currentPage++;
}

coverpg.addEventListener("click", openBook);

for (const page of pages) {
    page.addEventListener("click", flipPage);
}
