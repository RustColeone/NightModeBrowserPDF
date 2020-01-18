javascript:(function(){
    /*For Firefox*/
    if(viewer.style.filter.toString() != 'grayscale(1) invert(1) sepia(1)'){
        viewer.style = 'filter: grayscale(1) invert(1) sepia(1)';
    }
    else{
        viewer.style = 'filter: grayscale(0) invert(0) sepia(0)';
    }
    console.log("Pressed");
    console.log(viewer.style.filter.toString());
})();
