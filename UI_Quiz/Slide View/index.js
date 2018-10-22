const container = document.querySelector(".container");
const backButton = document.querySelector("button");
const listItems = document.querySelectorAll("li");
const detailInfo = document.querySelector(".detailInfo");

const onChange = (e) => {
    container.classList.toggle("change-view");
    const info = e.target.textContent;
    if (info != "back") {
        detailInfo.innerText = e.target.textContent;
    }
};

for (let i = 0, l = listItems.length; i < l; i++) {
    listItems[i].addEventListener("click", onChange, false);
}

backButton.addEventListener("click", onChange);

