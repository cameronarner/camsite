
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

