  function getRandomElement(arr) { 
    let randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
  } //объявляется функция getRandomElement, которая возвращает рандомный объект из массива
  
  let button = document.querySelector('.button');
  let translating = document.querySelector('.translating');
  let advice = document.querySelector('.advice');
  let targetWordBlock = document.querySelector('.targetWordBlock');
  let linkToCollocation = document.querySelector('.link_to');
  
  button.addEventListener('click', function () { //клик и запуск кода из функции ниже
    let randomElement = getRandomElement(phrases); //в переменную randomElement записывается результат выполения функции getRandomElement  (другими словами: рандомный возвращенный элемент массива записывается в переменную RandomElement)
    smoothly(translating, 'textContent', randomElement.translating);//плавно проявляется на экране текст из переменной randomElement (точнее производится замена на экране захваченного элемента phrase - его свойство textContent меняется на текст из переменной randomElement)
    smoothly(targetWordBlock, 'textContent', randomElement.targetWord); //плавно проявляется на экране картинка из переменной randomElement (указазывается подлежащий изменению элемент страницы, свойство элемента, новое значение свойства) 
    smoothly(linkToCollocation, 'href', randomElement.linkTo);
  });
  
  for (let i = 0; i <= 2; i = i + 1) { 
    smoothly(translating, 'textContent',  phrases[i].translating);//плавно проявляется на экране текст из переменной randomElement (точнее производится замена на экране захваченного элемента phrase - его свойство textContent меняется на текст из переменной randomElement)
    smoothly(targetWordBlock, 'textContent',  phrases[i].targetWord); //плавно проявляется на экране картинка из переменной randomElement (указазывается подлежащий изменению элемент страницы, свойство элемента, новое значение свойства) 
    smoothly(linkToCollocation, 'href',  phrases[i].linkTo);
  }

  // smoothly(translating, 'textContent',  phrases[i].translating);//плавно проявляется на экране текст из переменной randomElement (точнее производится замена на экране захваченного элемента phrase - его свойство textContent меняется на текст из переменной randomElement)
  // smoothly(targetWordBlock, 'textContent',  phrases[i].targetWord); //плавно проявляется на экране картинка из переменной randomElement (указазывается подлежащий изменению элемент страницы, свойство элемента, новое значение свойства) 
  // smoothly(linkToCollocation, 'href',  phrases[i].linkTo);
  
  