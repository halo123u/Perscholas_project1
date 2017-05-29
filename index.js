var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = "Jyn Erso was a human female soldier and former criminal who became a pivotal member of the Alliance to Restore the Republic when she led Rogue One in stealing the Death Star plans during the Battle of Scarif. She was the daughter of Lyra Erso, a devout member of the Church of the Force, and scientist Galen Erso, who was forced into helping the Galactic Empire build the Death Star. Erso's mother was killed when Director Orson Krennic, the commander of the Death Star project, kidnapped her father—who affectionately referred to his daughter as Stardust. She was raised by resistance fighter Saw Gerrera and became a child soldier in his army.";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}