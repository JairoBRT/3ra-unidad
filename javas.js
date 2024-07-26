
function iniciar(){
    let name=document.getElementById("name").Value;
    let ape=document.getElementById("ape").Value;
    let pass=document.getElementById("pass").Value;

    n="jairo";
    a="bartolomin;";
    p="1234"

    if(name==n && ape==a && pass==p){
       window.location="tabla/drag and drop.html";
    }else{
        alert("datos incorrectos");
    }
}





const rows = document.querySelectorAll('tbody tr');

let dragStartIndex;

function dragStart() {
    dragStartIndex = this.rowIndex;
    this.classList.add('dragging');
}

function dragEnd() {
    this.classList.remove('dragging');
}

function dragOver(e) {
    e.preventDefault();
    const draggingRow = document.querySelector('.dragging');
    const currentRow = this;

    const bounding = currentRow.getBoundingClientRect();
    const offset = bounding.y + bounding.height / 2;

    if (e.clientY - offset > 0) {
        this.parentNode.insertBefore(draggingRow, this.nextSibling);
    } else {
        this.parentNode.insertBefore(draggingRow, this);
    }
}

function dragDrop() {
    this.classList.remove('dragging');
}

rows.forEach(row => {
    row.addEventListener('dragstart', dragStart);
    row.addEventListener('dragend', dragEnd);
    row.addEventListener('dragover', dragOver);
    row.addEventListener('drop', dragDrop);
});