export function colapsibleBlock() {
    var coll = document.getElementsByClassName("frequent-questions__collapsible-wrapper-item");
    var i;

    for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
        content.style.maxHeight = null;
        content.style.marginTop = null;
        content.style.marginBottom = null; 
        } else {
        content.style.maxHeight = content.scrollHeight + "px";
        content.style.marginTop = "20px";
        content.style.marginBottom = "40px";   
        } 
    });
    }
}

