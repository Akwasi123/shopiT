

const searchBar = document.querySelector('.search');
const clearAll = document.querySelector('.searchIcon');

clearAll.addEventListener('click', (e)=>{
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