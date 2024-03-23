//alert('hello');
/*if(window.location)
{
    const urlParams = new window.location.href
    urlParams.set('fh', 'loop');
//document.location.search = urlParams;
    alert(window.location.href);
}*/

/*if ('URLSearchParams' in window) {
    var searchParams = new URLSearchParams(window.location.search)
    searchParams.set("fh", "loop");
    window.location.search = searchParams.toString();
    //var newRelativePathQuery = window.location.pathname + '?' + searchParams.toString();
    //history.pushState(null, '', newRelativePathQuery);
}*/

try{
    const sliderHandleObj = document.getElementsByClassName('ui-slider-handle');
    sliderHandleObj[0].addEventListener("mouseout", (event) => {
        sliderHandleObj[0].blur();
    });
}
catch(error) {}
