let cont = document.getElementById("cont")
let conALL = document.getElementById("conALL")

let dataBase = [
    {title : "test1" , content:"lorem meti1 " , src :"images/icon-plus.svg"},
    {title : "test2" , content:"lorem meti2 " , src :"images/icon-plus.svg"},
    {title : "test3" , content:"lorem meti3 " , src :"images/icon-plus.svg"},
    {title : "test4" , content:"lorem meti4 " , src :"images/icon-plus.svg"},
]

let hideFlag = false

function bgb (event) {
    
    
    let ovntainer = event.currentTarget.parentElement.lastElementChild
    
    
    if(hideFlag){
        event.currentTarget.firstElementChild.src="images/icon-plus.svg"
        ovntainer.style.display="none"
        hideFlag = false
    }else{
        event.currentTarget.firstElementChild.src="images/icon-minus.svg"
        ovntainer.style.display="block"
        hideFlag = true
    }
    
    console.log(event.currentTarget.firstElementChild.src);

}


dataBase.forEach( faq =>{

   let inners = `  <div class="contanetText border-b-2" >


    <div class="flex justify-between flex-col p-4" id="cont">

        <div class="flex justify-between text-right titlehead"  onclick="bgb(event)" >
          <img src= ${faq.src} alt="">
        <p  class="font-bold text-[#2c162f] text-xl" >${faq.title}</p>
        </div>
        
        <p class="content hidden mt-2 text-[#8a6991] text-right">${faq.content}</p>
    </div>
</div>
`

    conALL.insertAdjacentHTML("beforeend",inners)


})





























// cont.addEventListener("click", bgb)