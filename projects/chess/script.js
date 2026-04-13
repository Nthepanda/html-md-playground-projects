console.log('Welcome to the Interactive Playground! 🎉');
console.log('Use the console input below to execute JavaScript commands!');

let clickCount = 0;
let count = 0;

function handleClick() {
    clickCount++;
    console.log(`Button clicked ${clickCount} times!`);
    
    const output = document.getElementById('output');
    output.innerHTML = `
        <h3>Button clicked ${clickCount} times!</h3>
        <p>Last click: ${new Date().toLocaleTimeString()}</p>
        <p>Current count: ${count}</p>
    `;
}

// Make functions globally available
window.handleClick = handleClick;
window.count = count;

console.log('Available global variables:');
console.log('- handleClick(): A function that increments click count');
console.log('- count: A variable you can modify');