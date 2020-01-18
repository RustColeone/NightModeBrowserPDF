//For Chrome
javascript:(function(){
    var cover = document.createElement("InvertLayer");
    cover.setAttribute("style", 'position: fixed;pointer-events: none;width: 100vw;height: 100vh;background-color: white;mix-blend-mode: difference;z-index: 1;', "id", "InvertLayer");
    if(document.getElementById("InvertLayer")){
        document.getElementById("InvertLayer").remove();
    }
    else{
        document.body.appendChild(cover);
    }
})();
