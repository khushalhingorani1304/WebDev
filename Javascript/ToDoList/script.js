const input = document.getElementById('add-note-input');



function addNote(){
    if(!input.value) return;
    // const text = input.value;
    // const date = new Date();

    let  data = {
        text  : input.value,
        date : new Date()
    };

    input.value = '';

    bindData(data);
}


function bindData(data){
    const displayNote = document.getElementById('display-note');
    const noteTemplate = document.getElementById('note-template');

    const noteClone = noteTemplate.content.cloneNode(true);
    fillDatainCard(noteClone,data);
    // console.log(noteClone.id);
    
    displayNote.appendChild(noteClone);
}

let cnt = 1;

function fillDatainCard(noteClone,data){
    const fullNote = noteClone.querySelector('#full-note');

    const btnId = noteClone.querySelector('#delete-note-button');

    btnId.id = btnId.id + `${cnt}`;
    fullNote.id = fullNote.id + `${cnt}`;
    cnt++;
    // console.log(btnId.id);

    const date = fullNote.querySelector('#date');
    const note = fullNote.querySelector('#note');

    date.innerHTML = data.date;
    note.innerHTML = data.text;
}




function deleteNote(id){
    
    console.log(id);
    const fullNote = document.getElementById(id).parentNode.parentNode;
    // console.log(fullNote);
    
    // fullNote.style = 

    fullNote.classList.add('hidden');
}

