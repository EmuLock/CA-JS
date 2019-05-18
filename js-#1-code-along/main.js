
let doorIsClosed = true;

function toggleDoor() {
    const door = document.getElementById('door');

    if(doorIsClosed){
        door.src = 'img/open.jpg';
        doorIsClosed = false;
    } else{
        door.src = 'img/closed.jpg';
        doorIsClosed = true;
    }
}