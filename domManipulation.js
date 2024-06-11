// html button elements
let contentButton = document.querySelector('.content-button');
let image1Button = document.querySelector('.image-1-button');
let image2Button = document.querySelector('.image-2-button');

// html content elements
let myName = document.querySelector('.name');
let myHobby = document.querySelector('.hobby');
let myLocation = document.querySelector('.location');
let image = document.querySelector('.image');


// CODE ALONG
// 1. An event listener is provided for the `contentButton`
// 2. When clicked, it should change the content of:
//   - The `name` header.
     
// -- RETURN TO LESSON --

// CODE SOLO
//   - The `hobby` paragraph.
//   - The `location` paragraph.

contentButton.addEventListener("click", function() {
myName.innerHTML = "Deep";
myHobby.innerHTML = "play tennis";
myLocation.innerHTML = "Indiana";

});

// 3. Add an event listener to the `image1Button`
// 4. When clicked, it should change the source of `image` to another image URL.
image1Button.addEventListener("mouseover", function(){
   image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNSOsu45vfTiFqM_a3PDKq-2AWTOo70tiynw&s"; 
});




// 5. Add an event listener to the `image2Button`
image2Button.addEventListener("mouseout", function (){
    image.src = "https://m.media-amazon.com/images/I/618cfwT7KGL._AC_UY1000_.jpg";
});
// 6. When clicked, it should change the source of `image` to another image URL.


// BONUS
// 7. Try using different event types for your buttons.

