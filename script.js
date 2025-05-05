let isRunning = false;
let timerInterval = null;
let seconds = 0;

const startStopButton = document.getElementById('startStop');
const resetButton = document.getElementById('reset');
const stopwatch = document.getElementById('stopwatch');


function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function toggleStopwatch() {
    if (isRunning) {
        // Stop the stopwatch
        clearInterval(timerInterval);
        startStopButton.textContent = 'Start';
    } else {
        // Start the stopwatch
        timerInterval = setInterval(() => {
            seconds++;
            stopwatch.textContent = formatTime(seconds);
        }, 1000);
        startStopButton.textContent = 'Stop';
    }

    
    isRunning = !isRunning;
}

// Function to reset the stopwatch
function resetStopwatch() {
    // Stop the stopwatch if it's running
    clearInterval(timerInterval);
    isRunning = false;
    startStopButton.textContent = 'Start';
    
    
    seconds = 0;
    stopwatch.textContent = formatTime(seconds);
}


startStopButton.addEventListener('click', toggleStopwatch);

resetButton.addEventListener('click', resetStopwatch);
