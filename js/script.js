window.onload = function(){
    let progressspans = document.querySelectorAll(".card .content .progressbar span")
    progressspans.forEach(span =>{
        span.style.width = span.dataset.progress;
    })
}