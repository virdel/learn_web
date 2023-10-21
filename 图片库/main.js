const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const filename=["images/pic1.jpg","images/pic2.jpg","images/pic3.jpg","images/pic4.jpg",]

/* Declaring the alternative text for each image file */

/* Looping through images */
for(let i=0;i<filename.length;i++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', filename[i]);
    newImage.setAttribute('alt', filename[i]);
    thumbBar.appendChild(newImage);

    newImage.addEventListener("click",()=>{
        displayedImage.setAttribute("src",filename[i]);

    })

}

btn.addEventListener("click",()=>{
    if(btn.getAttribute("class")=="Dark"){
        btn.setAttribute("class","light");
        btn.textContent="lighten";
        overlay.style.backgroundColor ="rgba(0,0,0,0.5)";

    }else{
        btn.setAttribute("class","Dark");
        btn.textContent="Darken";
        overlay.style.backgroundColor ="rgba(0,0,0,0)";
    }

})




/* Wiring up the Darken/Lighten button */
