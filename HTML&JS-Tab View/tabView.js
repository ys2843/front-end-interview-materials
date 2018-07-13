function tabshow(e, id) {
    const tablist = document.getElementsByClassName("tab-view");
    for (let i = 0; i < tablist.length; i++) {
        if (tablist[i].id === id) {
            tablist[i].style.display = 'block';
        } else {
            tablist[i].style.display = 'none';
        }
    }
    const butlist = document.getElementsByClassName("tablinks");
    for (let i = 0; i < butlist.length; i++) {
        butlist[i].className = butlist[i].className.replace(" active", "");
    }
    e.target.className += " active";
}