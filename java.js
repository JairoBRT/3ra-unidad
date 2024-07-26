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