function hideNews(){
    const divsToHide = document.getElementsByClassName("grid_newscol");
    const pulse = document.getElementsByClassName("pulse-lenta");
    const addBanner = document.getElementsByClassName("dtd-b-banner");
    const hideTabs = document.querySelectorAll('[data-testid="news-tabs"]');
    const hideAdd = document.querySelectorAll('.tgb-wrapper.svelte-ddwycw');
    hide(divsToHide);
    hide(pulse);
    hide(addBanner);
    hide(hideTabs);
    hide(hideAdd);
}

function hide(elementsToHide){
    for(let i = 0; i < elementsToHide.length; i++){
        elementsToHide[i].style.display = "none";
    }
}

hideNews();

//Add the script to the DevTools Console and press "Enter"