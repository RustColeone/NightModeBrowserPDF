javascript:(function(){
    /*For Chrome, Firefox, and Safari*/
    var cover = document.createElement("InvertLayer");
    cover.setAttribute("style", 'position: fixed; top: 0;buttom: 0; pointer-events: none; width: 100vw; height: 100vh; background-color: white; mix-blend-mode: difference; z-index: 1;', "id", "InvertLayer");
    if(document.getElementById("InvertLayer")){
        document.getElementById("InvertLayer").remove();
    }
    else{
        document.body.insertBefore(cover,document.body.firstChild)
    }
})();
