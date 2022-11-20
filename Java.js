var innerList = document.getElementById("innerList");

// making the show menu function

function showMenu() {
    innerList.style.right = "0";
}

// making the hdie menu function 

function hideMenu() {
    innerList.style.right = "-200px";
}

// Rate us 

const btn = document.queryselector("button");
const post = document.queryselector(".post");
const widget = document.queryselector(".star-widget");
const editBtn = document.queryselector(".edit");
btn.onclick = () => {
    widget.style.display = "none";
    post.style.display = "block";
    return false;
    editBtn.onclick = () => {
        widget.style.display = "block";
        post.style.display = "none";
    }
    return false;
}