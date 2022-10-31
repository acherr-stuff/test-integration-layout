
changeSize();
window.onresize = () => changeSize();
function changeSize() {
    if (window.matchMedia("(max-width: 800)").matches) {
        document.getElementById("filters").hidden = true;
    } else {
        document.getElementById("filters").hidden = false;
    }
}

document.getElementById("open-filters").onclick = function () {
    if (document.getElementById("filters").hidden == false) {
        document.getElementById("filters").hidden = true;
    } else {
        document.getElementById("filters").hidden = false;
    }
};
