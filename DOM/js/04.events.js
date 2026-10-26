const button = document.querySelector('#myButton');
const title = document.querySelector('#title');
const input = document.querySelector('#myInput');

// console.log(button);
// button.addEventListener('click', async () => {

//     title.textContent = await input.value;    
// });


button.addEventListener('click', () => {
    console.log(`Before: ${title.textContent}`);
    title.textContent = input.value;
    console.log(`After: ${title.textContent}`); 
})
