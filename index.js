const leftBtn = document.getElementById('left-btn');
const rightBtn = document.getElementById('right-btn');
const leftItems = document.querySelectorAll('.left-side-container div');
const rightItems = document.querySelectorAll('.right-side-container div');

let viewHeight = 100;
let rightHeight = 100;

leftBtn.addEventListener('click', () => {
    for (let i = 0; i < leftItems.length; i++) {
        if (viewHeight === 400) {
            viewHeight = 0;
        }
        if(rightHeight === 400) {
            rightHeight = 0;
        }
        let leftItem = leftItems[i];
        let rightItem = rightItems[i];
        leftItem.style.transform = `translate(0, -${viewHeight}vh)`;
        rightItem.style.transform = `translate(0, -${300 - rightHeight}vh)`;
    }
    viewHeight += 100;
    rightHeight += 100;
});

rightBtn.addEventListener('click', () => {
    if (viewHeight === 100) {
        viewHeight = 500;
    }
    if (rightHeight === 100) {
        rightHeight = 500;
    }
    for (let i = 0; i < rightItems.length; i++) {
        let leftItem = leftItems[i];
        let rightItem = rightItems[i];
        leftItem.style.transform = `translate(0, -${viewHeight - 200}vh)`;
        rightItem.style.transform = `translate(0, -${500 - rightHeight}vh)`;
    }
    viewHeight -= 100;
    rightHeight -= 100;

})






