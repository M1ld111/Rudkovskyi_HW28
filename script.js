const list = document.querySelector('.list');
const addList = document.querySelector('#add-list');
const spanArray = ['Перший', 'Другий', 'Третій', 'Четвертий', "П'ятий", 'Шостий', 'Сьомий', 'Восьмий', "Дев'ятий", 'Десятий']
const numbering = []
let liNum = 0;

list.addEventListener('click', function (event) {
    const trigger = event.target.previousElementSibling;
    if (trigger) {
      trigger.classList.toggle('hide');
    }
});  

addList.addEventListener('click', () => {

    const remover = document.createElement('button');
    remover.classList.add('remover');
    const img = document.createElement('img');
    img.src = './delete.svg';
    remover.append(img);

    remover.addEventListener('click', () => {
        console.log(numbering)
        numbering.splice(numbering.indexOf(li), 1)
        numbering.forEach(arrayItem => {
            arrayItem.querySelector('.span').textContent = `${spanArray[numbering.indexOf(arrayItem)]} список`;
        })
        remover.parentElement.remove();
    })

    const li = document.createElement('li')
    numbering.push(li);
    const number = numbering.indexOf(li)
    li.classList.add('list-item');

    const span = document.createElement('span')
    span.classList.add('span')
    span.style.order = -1;

    span.textContent = `${spanArray[number]} список`;
        li.innerHTML = '<ul class="ul">' +
                        '<li class="ulLi"></li>' + 
                        '<li class="ulLi"></li>' + 
                        '<li class="ulLi"></li>' +
                        '<li class="ulLi"></li>' + 
                        '</ul>';
    li.append(span);
    li.append(remover)
    list.append(li); 
    console.log(numbering)
    console.log(number)

    const ulLi = document.querySelectorAll('.ulLi')
        ulLi.forEach(li => {
            if (li.textContent == '') {
                li.textContent = `${liNum += 1} елемент списку`
            }
        });
 })

