const generateMadLibs = (event) =>{
    event.preventDefault();
    var personName = document.getElementById("personName").value;
    var character = document.getElementById("character").value;
    var adverb = document.getElementById("adverb").value;
    var adj = document.getElementById("adj").value;
    const madlibs = `<h2>Kendrick's Crazy Madlibs Story</h2>
    <p>One day, my friend <span class = "text">${personName}</span> was visiting New York and ran into <span class = "text">${character}</span>. 
    <span class = "text">${personName}</span> ran <span class = "text">${adverb}</span> to meet <span class = "text">${character}</span>. 
    But <span class = "text">${character}</span> turned out to be very <span class = "text">${adj}</span> and 
    <span class = "text">${personName}</span> did not enjoy the meeting.</p><br/>
    <form onsubmit="resetMadlibs()"><button type="submit">Reset</button></form>`

    document.getElementById("story").innerHTML += madlibs;
    document.getElementById("madlibs").classList.remove('hide');
}

const resetMadlibs = () =>{
    document.getElementById("madlibs").classList.add('hide');
}