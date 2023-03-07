const display = document.querySelector('.display');
const clearButton = document.querySelector('.clear');
const keys = document.querySelectorAll('.key');

        let text = '';
        
    keys.forEach(key => {
  key.addEventListener('click', () => {
    text += key.textContent;
    display.textContent = text;
  });
  
});
    
clearButton.addEventListener('click', () => {
  text = '';
  display.textContent = '';
}); 



