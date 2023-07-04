var accordion = document.getElementsByClassName("accordion");

for(var i= 0;i<accordion.length;i++){
    accordion[i].addEventListener("click", function() {
        this.classList.toggle("active"); //add active class when it's clicked
        var panel = this.nextElementSibling;
        if(panel.style.display == "none"){
            panel.style.display = "block"; //open the panel
        }
        else{
            panel.style.display = "none"; //close the panel
        }

    });
}

