function Drop() {
    if(dropdown.hidden == true){
        dropdown.hidden = false
        rt.style.animationName = 'bup'
    }else{
        dropdown.hidden = true
        rt.style.animationName = 'bd'
    }
}
let lastScrollPosition = 0
window.onscroll = function(){
    dropdown.hidden = true
    if(window.scrollY >= 950){
        document.getElementById("sli").style.animationPlayState = "running"
        document.getElementById("sli2").style.animationPlayState = "running"
    }
    if (window.scrollY >= 800){
        btn.style.display = "flex"
    }else{
        btn.style.display = "none"
    }
}
function shownav(){
    if(main.style.display == "block"){
        main.style.display = "none"
        document.getElementById("toogle").setAttribute('class', "fa-regular fa-circle-xmark barr")
        nav.hidden = false
    }else{
        main.style.display = "block"
        document.getElementById("toogle").setAttribute('class', "fa-solid fa-bars-staggered barr")
        nav.hidden = true
        toogle.style.animationName = "bg"
        comp.style.animationName = "red"
        dropDown.style.display = "none"
    }
}
function extend(){
    if(comp.style.animationName != "ext"){
        comp.style.animationName = "ext"
        rot.style.animationName = 'bup'
        setTimeout(() => {
            dropDown.style.display = "block"
        }, 250);
    }else{
        comp.style.animationName = "red"
        dropDown.style.display = "none"
        rot.style.animationName = 'bd'
    }
}
function b2top() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
}
function next() {
    scrollItems.scrollBy({
        top: 0,
        left: 180,
        behavior: 'smooth'
    })
}
function prev() {
    scrollItems.scrollBy({
        top: 0,
        left: -180,
        behavior: 'smooth'
    })
}
function prevvideo() {
    VideoSlider.scrollBy({
        top: 0,
        left: 260,
        behavior: 'smooth'
    })
}
function nextvideo() {
    VideoSlider.scrollBy({
        top: 0,
        left: -260,
        behavior: 'smooth'
    })
}
function playvideo() {
    videoplayer.style.display = 'flex'
    document.getElementById('body').style.overflowY = 'hidden'
}
function endVideo() {
    document.getElementById('body').style.overflowY = 'auto'
    videoplayer.style.display = 'none'
}
