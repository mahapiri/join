let selectPage = [];

const STORAGE_TOKEN = 'MKWYMW3ZCIEWUYO2I64SK34MDCA45OO3E4G0MNQJ';
const STORAGE_URL = 'https://remote-storage.developerakademie.org/item';

async function setItem(key, value) {
    const payload = { key, value, token: STORAGE_TOKEN };
    return fetch(STORAGE_URL, { method: 'POST', body: JSON.stringify(payload) })
        .then(res => res.json())
}

async function getItem(key) {
    const url = `${STORAGE_URL}?key=${key}&token=${STORAGE_TOKEN}`;
    return fetch(url).then(res => res.json()).then(res => {
        if (res.data) {
            return res.data.value;
        } throw `Could not find data with key "${key}".`;
    });
}

async function init() {
    await includeHTML();
    await loadContacts();
    renderBackArrow();
}

async function initSummary() {
    await includeHTML();
    dateUpdate();
    timer();
}

async function initAddTask() {
    await includeHTML();
    await renderAddTask();
    loadContacts();
}

async function initContacts() {
    await includeHTML();
    await loadContacts();
    renderContacts();
}

async function initBoard() {
    await includeHTML();
    // await generateProgressCards();
    // await generateFeedbackCards();
    // await generateDoneCards();
    await loadTasks();
    loadToDo();

}

function forwardToPage(page) {
    let allButtons = document.querySelectorAll('.menubar a');
    let clickedButton = document.getElementById(`${page}-page`);
    allButtons.forEach(button => {

        if (button.classList.contains('selected-color')) {
            button.classList.remove('selected-color');
        
        }
    });

    if (clickedButton) {
        clickedButton.classList.add('selected-color');
        selectPage = clickedButton;
        localStorage.setItem('selectedPage', page);
    }
}


async function loadSelectedPage() {
    let page = localStorage.getItem('selectedPage');
    let id = page + '-page';
    let div = document.getElementById(`${id}`);
    if(div) {
        div.classList.add('selected-color');
    } else {
        // console.log('nicht gefunden');
        // if (div.classList.contains('selected-color')) {
        //     div.classList.remove('selected-color');
        // }
    }
}


function deleteLocalStorage() {
    localStorage.removeItem('selectedPage');
}    