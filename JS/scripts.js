const filter=document.getElementById('gallery-filter');
const filterBtns=filter.children;
const galleryItems=document.querySelectorAll('.item');

console.log(galleryItems.length);

for(let i=0; i<filterBtns.length;i++){
    filterBtns[i].addEventListener("click",()=>{
        filter.querySelector(".active").classList.remove("active");
        filterBtns[i].classList.add('active');

        const filterValue=filterBtns[i].getAttribute("data-filter");
        
        for(let k=0;k<galleryItems.length;k++){
            if(filterValue===galleryItems[k].getAttribute("data-category")){
                galleryItems[k].classList.remove("hide");
                galleryItems[k].classList.add("show");
            }
            else{
                galleryItems[k].classList.remove("show");
                galleryItems[k].classList.add("hide");
            }  
            if(filterValue==="all"){
                galleryItems[k].classList.remove("hide");
                galleryItems[k].classList.add("show");
            }
        }
    })
}