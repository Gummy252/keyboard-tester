const CLICK_SOUND = new Audio('sounds/click.mp3');
CLICK_SOUND.preload = 'auto';

const dateTimeDisplay = document.getElementById('datetime-display');
const testedCountDisplay = document.getElementById('tested-count');
const resetBtn = document.getElementById('reset-trigger');
const historyLog = document.getElementById('history-log');

const mouseLeft = document.getElementById('mouse-left');
const mouseWheel = document.getElementById('mouse-wheel');
const mouseRight = document.getElementById('mouse-right');

const containers = {
    main: document.getElementById('main-section'),
    nav: document.getElementById('nav-section'),
    numpad: document.getElementById('numpad-section')
};

const LAYOUT = [
    { code: 'Escape', label: 'ESC', section: 'main' }, { code: 'F1', label: 'F1', section: 'main' }, { code: 'F2', label: 'F2', section: 'main' }, { code: 'F3', label: 'F3', section: 'main' }, { code: 'F4', label: 'F4', section: 'main' }, { code: 'F5', label: 'F5', section: 'main' }, { code: 'F6', label: 'F6', section: 'main' }, { code: 'F7', label: 'F7', section: 'main' }, { code: 'F8', label: 'F8', section: 'main' }, { code: 'F9', label: 'F9', section: 'main' }, { code: 'F10', label: 'F10', section: 'main' }, { code: 'F11', label: 'F11', section: 'main' }, { code: 'F12', label: 'F12', section: 'main' },
    { code: 'Backquote', label: '`', section: 'main' }, { code: 'Digit1', label: '1', section: 'main' }, { code: 'Digit2', label: '2', section: 'main' }, { code: 'Digit3', label: '3', section: 'main' }, { code: 'Digit4', label: '4', section: 'main' }, { code: 'Digit5', label: '5', section: 'main' }, { code: 'Digit6', label: '6', section: 'main' }, { code: 'Digit7', label: '7', section: 'main' }, { code: 'Digit8', label: '8', section: 'main' }, { code: 'Digit9', label: '9', section: 'main' }, { code: 'Digit0', label: '0', section: 'main' }, { code: 'Minus', label: '-', section: 'main' }, { code: 'Equal', label: '=', section: 'main' }, { code: 'Backspace', label: 'BCKSP', section: 'main' },
    { code: 'Tab', label: 'TAB', section: 'main' }, { code: 'KeyQ', label: 'Q', section: 'main' }, { code: 'KeyW', label: 'W', section: 'main' }, { code: 'KeyE', label: 'E', section: 'main' }, { code: 'KeyR', label: 'R', section: 'main' }, { code: 'KeyT', label: 'T', section: 'main' }, { code: 'KeyY', label: 'Y', section: 'main' }, { code: 'KeyU', label: 'U', section: 'main' }, { code: 'KeyI', label: 'I', section: 'main' }, { code: 'KeyO', label: 'O', section: 'main' }, { code: 'KeyP', label: 'P', section: 'main' }, { code: 'BracketLeft', label: '[', section: 'main' }, { code: 'BracketRight', label: ']', section: 'main' }, { code: 'Backslash', label: '\\', section: 'main' },
    { code: 'CapsLock', label: 'CAPS', section: 'main' }, { code: 'KeyA', label: 'A', section: 'main' }, { code: 'KeyS', label: 'S', section: 'main' }, { code: 'KeyD', label: 'D', section: 'main' }, { code: 'KeyF', label: 'F', section: 'main' }, { code: 'KeyG', label: 'G', section: 'main' }, { code: 'KeyH', label: 'H', section: 'main' }, { code: 'KeyJ', label: 'J', section: 'main' }, { code: 'KeyK', label: 'K', section: 'main' }, { code: 'KeyL', label: 'L', section: 'main' }, { code: 'Semicolon', label: ';', section: 'main' }, { code: 'Quote', label: "'", section: 'main' }, { code: 'Enter', label: 'ENTER', section: 'main' },
    { code: 'ShiftLeft', label: 'L-SHFT', section: 'main' }, { code: 'KeyZ', label: 'Z', section: 'main' }, { code: 'KeyX', label: 'X', section: 'main' }, { code: 'KeyC', label: 'C', section: 'main' }, { code: 'KeyV', label: 'V', section: 'main' }, { code: 'KeyB', label: 'B', section: 'main' }, { code: 'KeyN', label: 'N', section: 'main' }, { code: 'KeyM', label: 'M', section: 'main' }, { code: 'Comma', label: ',', section: 'main' }, { code: 'Period', label: '.', section: 'main' }, { code: 'Slash', label: '/', section: 'main' }, { code: 'ShiftRight', label: 'R-SHFT', section: 'main' },
    { code: 'ControlLeft', label: 'CTRL', section: 'main' }, { code: 'MetaLeft', label: 'WIN', section: 'main' }, { code: 'AltLeft', label: 'ALT', section: 'main' }, { code: 'Space', label: 'SPACE', section: 'main' }, { code: 'AltRight', label: 'ALT GR', section: 'main' }, { code: 'Fn', label: 'FN', section: 'main' }, { code: 'ContextMenu', label: 'MENU', section: 'main' }, { code: 'ControlRight', label: 'CTRL', section: 'main' },
    { code: 'PrintScreen', label: 'PRT', section: 'nav' }, { code: 'ScrollLock', label: 'SCR', section: 'nav' }, { code: 'Pause', label: 'PAU', section: 'nav' },
    { code: 'Insert', label: 'INS', section: 'nav' }, { code: 'Home', label: 'HOM', section: 'nav' }, { code: 'PageUp', label: 'PGU', section: 'nav' },
    { code: 'Delete', label: 'DEL', section: 'nav' }, { code: 'End', label: 'END', section: 'nav' }, { code: 'PageDown', label: 'PGD', section: 'nav' },
    { code: 'ArrowUp', label: '↑', section: 'nav' }, { code: 'ArrowLeft', label: '←', section: 'nav' }, { code: 'ArrowDown', label: '↓', section: 'nav' }, { code: 'ArrowRight', label: '→', section: 'nav' },
    { code: 'NumLock', label: 'NUM', section: 'numpad' }, { code: 'NumpadDivide', label: '/', section: 'numpad' }, { code: 'NumpadMultiply', label: '*', section: 'numpad' }, { code: 'NumpadSubtract', label: '-', section: 'numpad' },
    { code: 'Numpad7', label: '7', section: 'numpad' }, { code: 'Numpad8', label: '8', section: 'numpad' }, { code: 'Numpad9', label: '9', section: 'numpad' }, { code: 'NumpadAdd', label: '+', section: 'numpad' },
    { code: 'Numpad4', label: '4', section: 'numpad' }, { code: 'Numpad5', label: '5', section: 'numpad' }, { code: 'Numpad6', label: '6', section: 'numpad' },
    { code: 'Numpad1', label: '1', section: 'numpad' }, { code: 'Numpad2', label: '2', section: 'numpad' }, { code: 'Numpad3', label: '3', section: 'numpad' }, { code: 'NumpadEnter', label: 'ENT', section: 'numpad' },
    { code: 'Numpad0', label: '0', section: 'numpad' }, { code: 'NumpadDecimal', label: '.', section: 'numpad' }
];

const keyElementsMap = new Map();
const testedKeysSet = new Set();
const TOTAL_KEYS = 104;

function initClock() {
    const updateTime = () => {
        const now = new Date();
        const dateStr = now.getFullYear() + '-' + String(now.getMonth() + 1).padStart(2, '0') + '-' + String(now.getDate()).padStart(2, '0');
        const timeStr = String(now.getHours()).padStart(2, '0') + ':' + String(now.getMinutes()).padStart(2, '0') + ':' + String(now.getSeconds()).padStart(2, '0');
        const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        if(dateTimeDisplay) dateTimeDisplay.textContent = `${dateStr} | ${timeStr} [${timeZone}]`;
    };
    setInterval(updateTime, 1000);
    updateTime();
}

function initKeyboard() {
    Object.values(containers).forEach(container => container.innerHTML = '');
    LAYOUT.forEach(item => {
        const keyDiv = document.createElement('div');
        keyDiv.className = 'key';
        keyDiv.textContent = item.label;
        keyDiv.setAttribute('data-code', item.code);
        containers[item.section].appendChild(keyDiv);
        keyElementsMap.set(item.code, keyDiv);
    });
}

function playKeySound() {
    const clone = CLICK_SOUND.cloneNode();
    clone.volume = 0.4;
    clone.play().catch(() => {}); 
}

function updateTestedCount() {
    testedCountDisplay.textContent = `${testedKeysSet.size} / ${TOTAL_KEYS}`;
}

// ---------------------------------------------------------
// EVENT LOG ENGINE (Strict 5 Item Limit)
// ---------------------------------------------------------
function appendLog(eventName, eventCode, type) {
    const entry = document.createElement('div');
    entry.className = `log-entry ${type}`;
    
    const now = new Date();
    const timeString = `${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}:${String(now.getSeconds()).padStart(2,'0')}.${String(now.getMilliseconds()).padStart(3,'0')}`;

    entry.innerHTML = `<span>[${timeString}] ${type.toUpperCase()}</span> <span>${eventName} (${eventCode})</span>`;
    
    historyLog.prepend(entry);

    if (historyLog.children.length > 5) {
        historyLog.removeChild(historyLog.lastChild);
    }
}

window.addEventListener('contextmenu', (e) => e.preventDefault());

window.addEventListener('keydown', (e) => {
    const blockedKeys = ["Tab", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "AltLeft", "AltRight", "Enter", "NumpadEnter", "PrintScreen", "MetaLeft", "MetaRight", "ContextMenu"];
    if (blockedKeys.includes(e.code)) e.preventDefault();

    const el = keyElementsMap.get(e.code);
    if (el && !el.classList.contains('active')) {
        playKeySound();
        el.classList.add('active', 'tested');
        
        if (!testedKeysSet.has(e.code)) {
            testedKeysSet.add(e.code);
            updateTestedCount();
        }

        appendLog(e.key === " " ? "Space" : e.key, e.code, "keydown");
    }
});

window.addEventListener('keyup', (e) => {
    const el = keyElementsMap.get(e.code);
    if (el) {
        el.classList.remove('active');
        appendLog(e.key === " " ? "Space" : e.key, e.code, "keyup");
    }
});

window.addEventListener('mousedown', (e) => {
    if (e.target.tagName === 'BUTTON') return; 
    if (e.button === 0) { mouseLeft.classList.add('active', 'tested'); appendLog("Left Click", "Mouse0", "keydown"); }
    if (e.button === 1) { mouseWheel.classList.add('active', 'tested'); appendLog("Middle Click", "Mouse1", "keydown"); e.preventDefault(); }
    if (e.button === 2) { mouseRight.classList.add('active', 'tested'); appendLog("Right Click", "Mouse2", "keydown"); }
});

window.addEventListener('mouseup', (e) => {
    if (e.button === 0) { mouseLeft.classList.remove('active'); appendLog("Left Click", "Mouse0", "keyup"); }
    if (e.button === 1) { mouseWheel.classList.remove('active'); appendLog("Middle Click", "Mouse1", "keyup"); }
    if (e.button === 2) { mouseRight.classList.remove('active'); appendLog("Right Click", "Mouse2", "keyup"); }
});

window.addEventListener('wheel', (e) => {
    mouseWheel.classList.add('tested');
    const direction = e.deltaY > 0 ? "Scroll Down" : "Scroll Up";
    appendLog(direction, "Wheel", "keydown");
});

resetBtn.onclick = () => {
    keyElementsMap.forEach(el => el.classList.remove('active', 'tested'));
    mouseLeft.classList.remove('active', 'tested');
    mouseWheel.classList.remove('active', 'tested');
    mouseRight.classList.remove('active', 'tested');
    
    historyLog.innerHTML = '';
    testedKeysSet.clear();
    updateTestedCount();
    appendLog("System", "Reset", "keydown");
};

initClock();
initKeyboard();