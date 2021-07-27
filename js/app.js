header = document.querySelector('.navbar')

window.onscroll = function(){
    scrollFunction();
    // headerFunction();
};

function scrollFunction(){
    if(document.body.scrollTop > 60 || document.documentElement.scrollTop > 60){
        
        header.classList.add('coloredHeader');
    }
    else{
        
        header.classList.remove('coloredHeader');
    }
}