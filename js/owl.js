

const searchBar = document.querySelector('.search');
const clearAll = document.querySelector('.searchIcon');

clearAll.addEventListener('click', (e)=>{
    clearAll.style.display = 'none';
    searchBar.value = "";
    e.preventDefault();
})

function checkIfTyping(){
    if(searchBar.value.length > 0){
        clearAll.style.display = 'block';
    }
    else{
        clearAll.style.display = 'none';
    }
}


function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
    
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "flex";
    evt.currentTarget.className += " active";
} 
document.getElementById("defaultOpen").click();

const gridItems = document.querySelector('.grid').children;

let itemDisplay = document.querySelector('.mainItem img');
const smallDisplay = document.querySelectorAll('.smallDispContainer .smallDisp img');
const aboutDisplay = document.querySelector('.about').children;
const display = document.querySelector('.display');
var currentItem;
let nothingText = document.querySelector('.nothing')


// console.log(smallDisplay)

// for(var i = 0; i < gridItems.length; i++){
//     gridItems[i].addEventListener('click', getClicked(gItem));
// }

window.onload = clearDisp();

function clearDisp(){
    nothingText.innerText = 'No item selected';
    display.childNodes[7].style.display = 'none';
    display.childNodes[13].style.display = 'none';
    display.childNodes[17].style.display = 'none';
    display.childNodes[21].style.display = 'none';
    display.childNodes[25].style.display = 'none';
    itemDisplay.style.display = 'none';
    
    // console.log(display.childNodes[21])
}

function getItem(gItem){
    display.childNodes[7].style.display = 'flex'
    display.childNodes[13].style.display = 'flex';
    display.childNodes[17].style.display = 'block';
    display.childNodes[21].style.display = 'flex';
    display.childNodes[25].style.display = 'flex';
    nothingText.innerText = '';
    itemDisplay.style.display = 'flex';
    itemDisplay.src = gItem.children[0].children[0].src;
    smallDisplay[0].src = gItem.children[0].children[0].src;
    smallDisplay[1].src = gItem.children[0].children[0].src;
    smallDisplay[2].src = gItem.children[0].children[0].src;
    smallDisplay[3].src = gItem.children[0].children[0].src;
}



// console.log(currentItem);