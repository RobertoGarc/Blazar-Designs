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

const menuItem=document.querySelectorAll('.nav-link');
const sections=document.querySelectorAll('.section');

const functionObserver = entries => {
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            const itemActual=Array.from(menuItem).find(item=>item.dataset.url===entry.target.id);
            itemActual.classList.add('active');
            for(const item of menuItem){
                if(item != itemActual){
                    item.classList.remove('active');
                }
            }
        }
    })
}

const observer = new IntersectionObserver(functionObserver,{
    root:null,
    rootMargin:'0px',
    threshold:0.2
});

sections.forEach(section=>observer.observe(section));