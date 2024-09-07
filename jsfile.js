let menu = document.getElementById('Menu');
let icon = document.getElementById('icon');


window.addEventListener("load", () => {
    let loading = document.getElementById("loadingScreen");
    setTimeout(()=>{
        loading.classList.replace("opacity-100", "opacity-0");
        setTimeout(()=>{
            loading.classList.toggle("hidden");
        }, 1000)
    }, 2500)
    
});


function scrollup(){
    window.scrollTo({ top: 0, behavior: 'smooth' })
}



function scrollToSection(sectionID) {
    let element = document.querySelector(sectionID);

    if (element) {
        
        let elementPosition = element.offsetTop - 70;

        
        window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }

    
    menu.classList.add('hidden');

    
    icon.classList.remove('fa-xmark');
    icon.classList.add('fa-bars');
    icon.style.transform = 'rotate(0deg)'; 
}


document.getElementById('hamMenu').addEventListener('click', function() {


    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        // Change icon to X mark
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
        icon.style.transform = 'rotate(90deg)'; 
    } else {
        menu.classList.add('hidden');
        // Change icon back to bars
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
        icon.style.transform = 'rotate(0deg)'; 
    }
});