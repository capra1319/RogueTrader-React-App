var aDiv = document.getElementById("animatedDiv");

function changeWidth() 
{
    var scrollVal = window.pageYOffset;
    var scrollSlow  = (scrollVal / 4);
    
    //Changing CSS Width
    aDiv.style.width = Math.min(Math.max(scrollSlow, 20), 100) + "%";
}

window.addEventListener('scroll', function() 
{
    requestAnimationFrame(changeWidth);
}, false);