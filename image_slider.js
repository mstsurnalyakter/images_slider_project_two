 
const photo = ["images/picture.jpg","images/nature_picture_one.jpg", "images/nature_picture_two.jpg", "images/nature_picture_three.jpg"]

let images = document.querySelector("img");

let count = 0;

let len = photo.length;
 
 document.querySelector("#nextBtn").addEventListener("click", ()=>{
        count++;

        if(count >= len){
            count = 0;
            images.src = photo[count];
        }else{
            images.src = photo[count];
        }

 })

 document.querySelector("#preBtn").addEventListener("click", ()=>{
    count--;
    if(count < 0){
        count = len - 1;
        images.src = photo[count];
    }else{
        images.src = photo[count]
    }
 })
