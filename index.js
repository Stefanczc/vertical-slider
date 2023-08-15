const leftBtn = document.getElementById('left-btn');
const rightBtn = document.getElementById('right-btn');
const leftItems = document.querySelectorAll('.left-side-container div');
const rightItems = document.querySelectorAll('.right-side-container div');

for (let i = 0; i < leftItems.length; i++) {
    let leftItem = leftItems[i];
    let rightItem = rightItems[i];
    let viewHeight = 100;
    
    leftBtn.addEventListener('click', () => {
        if (viewHeight === 400) {
            viewHeight = 0;
        } 
        leftItem.style.transform = `translate(0, -${viewHeight}vh)`;
        rightItems[i].style.transform = `translate(0, -${300 - viewHeight}vh)`;
        viewHeight += 100;
        console.log(viewHeight);
    })
    rightBtn.addEventListener('click', () => { 
        if (viewHeight === 400) {
            viewHeight = 0;
        } 
        leftItem.style.transform = `translate(0, -${viewHeight}vh)`;
        rightItem.style.transform = `translate(0, -${300 - viewHeight}vh)`;
        viewHeight += 100;
    });
}
