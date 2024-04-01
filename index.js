function menuClick(){
    var menu=document.getElementById('mobileMenu');
    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden');
    }else{
        menu.classList.add('hidden');
    }
}




   document.querySelector("#scroll").addEventListener("click", () =>{
    window.scrollTo(0,document.body.scrollHeight);

   })
 
   document.querySelector("#scroll_up").addEventListener("click", () =>{
    window.scrollTo(0,document.head.scrollHeight);

   })  
