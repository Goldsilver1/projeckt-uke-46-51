// Enkel prototype for Note Website
// Oppretter, lagrer og sletter notater i minnet (ikke database enda)

let notes = [];
let currentIndex = null;

const notesList = document.getElementById('notes');
const titleInput = document.getElementById('note-title');
const contentInput = document.getElementById('note-content');

document.getElementById('new-note').addEventListener('click', () => {
    titleInput.value = '';
    contentInput.value = '';
    currentIndex = null;
});

document.getElementById('save-note').addEventListener('click', () => {
    const note = {
        title: titleInput.value,
        content: contentInput.value
    };

    if (currentIndex !== null) {
        notes[currentIndex] = note;
    } else {
        notes.push(note);
    }

    renderNotes();
});

document.getElementById('delete-note').addEventListener('click', () => {
    if (currentIndex !== null) {
        notes.splice(currentIndex, 1);
        renderNotes();
        titleInput.value = '';
        contentInput.value = '';
        currentIndex = null;
    }
});

function renderNotes() {
    notesList.innerHTML = '';
    notes.forEach((note, index) => {
        const li = document.createElement('li');
        li.textContent = note.title || 'Uten tittel';
        li.addEventListener('click', () => {
            titleInput.value = note.title;
            contentInput.value = note.content;
            currentIndex = index;
        });
        notesList.appendChild(li);
    });
}
