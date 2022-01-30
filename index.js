function showAns(){
    const li = event.currentTarget;
    const list = document.querySelectorAll(".faq li");
    const listArray = [...list];
   
    const index = listArray.indexOf(li);
    for(let i = 0; i < listArray.length; i++){
        if(i !== index){
            listArray[i].lastElementChild.classList.add("closed");
        }
    }
    li.lastElementChild.classList.toggle("closed"); 
}

