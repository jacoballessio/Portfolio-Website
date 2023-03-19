document.addEventListener("DOMContentLoaded", function() {
    //display an image next to the mouse cursor while the cursor is hovering over a project-element
    var projectElements = document.getElementsByClassName("project-element");
    for (var i = 0; i < projectElements.length; i++) {
        let projectEl = projectElements[i];
        projectEl.addEventListener("mouseover", () =>{
            //create a new image that has the same src as the image in the project-element
            
            var image = document.createElement("img");
            image.src = projectEl.querySelector('img').src;
            image.id = "project-image";
            //hide original image
            document.body.appendChild(image);
            //set styles
            image.style.position = "absolute";
            image.style.width = "175px";
            image.style.height = "175px";
            image.style.zIndex = "100";
            //border
            image.style.border = "1px solid black";
            image.style.borderRadius = "5px";

            document.addEventListener("mousemove", function(event) {
                image.style.left = event.pageX + 20 + "px";
                image.style.top = event.pageY + 20 + "px";
            });
        });
        projectElements[i].addEventListener("mouseout", function() {
            var image = document.getElementById("project-image");
            document.body.removeChild(image);
        });
    }

});