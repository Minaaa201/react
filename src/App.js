// import { useState } from "react"
// import image1 from "./1.ipg"
// import image2 from "./2.ipg"
// import menu1 from "./menu1.png"
// import menu2 from "./menu2.png"

// function App() {
//  const [count, setCount] = useState(0);
//  const [name, setName] = useState("Иван")
//  const [class1, setClass1] = useState("block_red")
//  const [img, setimg] = useState(image1)
//  const [sizeImg, setSizeImg] = useState(5);
//  const [krug, setKrug] = useState(0);
//  const [listBlock, setListBlock] = useState(false);


//  return (
//   <div className="App">
//     <h2> Хук UseState</h2>
//     <p>
//       Счестчик: <button> onClick={() => setCount(count + 1)}+</button>
//       {count}
//       <button> onClick={() => setCount(count - 1)}+</button>
//     </p>
//     <h2>{name}</h2>
//     <button onClick={()=> setClass1("block_black")}>Изменить класс</button>
//     <div>
//       Меняй картинку и стили 
//       <img src={img} style={(width: sizeImg, borderRadius: krug)} />
//     </div>
//     <button onClick={() => setimg(image2)}>Изменить картинку</button>
//     <button onClick={() => setSizeImg(10)}>10%</button>
//     <button onClick={() => setSizeImg(30)}>30%</button>
//     <button onClick={() => setSizeImg(50)}>50%</button>
//     <button onClick={() => setSizeImg(70)}>70%</button>
//     <button onClick={() => setSizeImg(90)}>90%</button>
//     <button onClick={() => setSizeImg(100)}>100%</button>
//     <button onClick={() => setKrug(100)}>Круг</button>




//     <div className> 
//     <h2 onClick={()=> setListBlock(!ListBlock)}>Выпадающий список <img src={listBlock ? menu1 : menu2} style={{width15}}:/> </h2>
//     {ListBlock ? (
//        <div className="list_block">
//     <a href="#">Мясо</a>
//     <br></br>
//     <a href="#">Рыба</a>
//     <br></br>
//     <a href="#">Банан</a>
//     <br></br>
//     <a href="#">Апельсин</a>
//     <br></br>
//     <a href="#">Мандарин</a>
//     <br></br>
//     <a href="#">Киви</a>
//     <br></br>
//     <a href="#">Яблоко</a>
//     <br></br>
//     </div>
//     ) : (

    
//      ""
//     )}
//     </div>
//   </div>
//  );
// }

// export default App;


import { useState } from "react" // Импортируем хук useState из библиотеки React для работы с состоянием в функциональном компоненте

// Импортируем статичные файлы. 
// ОШИБКА: расширения .ipg не существует, сборщик выдаст ошибку Module not found. Должно быть .jpg или .png.
import image1 from "./1.ipg"
import image2 from "./2.ipg"
import menu1 from "./menu1.png" // Иконка меню (например, стрелка вверх)
import menu2 from "./menu2.png" // Иконка меню (например, стрелка вниз)

function App() {
 const [count, setCount] = useState(0); // Создаем состояние счетчика со стартовым значением 0 и функцию для его обновления
 const [name, setName] = useState("Иван") // Состояние для хранения имени, по умолчанию "Иван"
 const [class1, setClass1] = useState("block_red") // Состояние для хранения названия CSS-класса блока
 const [img, setimg] = useState(image1) // Состояние для пути к картинке. ОШИБКА стиля именования: согласно camelCase должно быть setImg
 const [sizeImg, setSizeImg] = useState(5); // Состояние ширины картинки. Значение 5 сейчас подставится как '5px', а не проценты
 const [krug, setKrug] = useState(0); // Состояние радиуса скругления углов (border-radius). Название переменной неудачное, лучше radius
 const [listBlock, setListBlock] = useState(false); // Булево состояние-тоггл для видимости выпадающего списка


 return (
  <div className="App"> // Главный контейнер компонента с классом App для глобальных стилей
    <h2> Хук UseState</h2>
    <p>
      Счестчик: {/* Опечатка в слове: правильно "Счётчик" */}
      {/* 
        КРИТИЧЕСКАЯ ОШИБКА синтаксиса JSX: пропущены фигурные скобки у атрибута onClick.
        Браузер попытается обработать это как обычную HTML-строку "onClick=...", клик не сработает.
        Также текст кнопки (+) стоит ЗА пределами тега button, он не отобразится на экране.
      */}
      <button> onClick={() => setCount(count + 1)}+</button>
      {count} // Выводим текущее значение state count внутри параграфа
      {/* Та же ошибка синтаксиса во второй кнопке */}
      <button> onClick={() => setCount(count - 1)}+</button>
    </p>
    <h2>{name}</h2> // Динамический заголовок h2, который перерисуется при изменении state name
    
    {/* Кнопка меняет значение state class1 на "block_black". Чтобы цвет изменился, этот класс должен применяться к div ниже */}
    <button onClick={()=> setClass1("block_black")}>Изменить класс</button>
    
    <div>
      Меняй картинку и стили 
      {/* 
        КРИТИЧЕСКИЕ ОШИБКИ:
        1. Объект style должен быть обернут в двойные фигурные скобки {{...}}. Здесь открыта только одна.
        2. Внутри объекта ключи пишутся через запятую без двоеточий как свойства JS-объекта. Запись (width: sizeImg...) вызовет SyntaxError.
        3. Переменная krug объявлена выше, но если нужно именно круглое изображение, здесь логичнее было бы написать borderRadius: '50%'.
      */}
      <img src={img} style={(width: sizeImg, borderRadius: krug)} />
    </div>
    
    {/* Меняет источник изображения на вторую картинку при клике */}
    <button onClick={() => setimg(image2)}>Изменить картинку</button>
    
    {/* Группа кнопок для изменения ширины. Передают числа (10, 30...), которые интерпретируются как пиксели (10px), а не проценты */}
    <button onClick={() => setSizeImg(10)}>10%</button>
    <button onClick={() => setSizeImg(30)}>30%</button>
    <button onClick={() => setSizeImg(50)}>50%</button>
    <button onClick={() => setSizeImg(70)}>70%</button>
    <button onClick={() => setSizeImg(90)}>90%</button>
    <button onClick={() => setSizeImg(100)}>100%</button>
    
    {/* Устанавливает радиус скругления в 100 единиц (скорее всего, имелось в виду 100px или 50%) */}
    <button onClick={() => setKrug(100)}>Круг</button>




    <div className> {/* ОШИБКА: атрибут className пустой. Нужно указать имя класса, иначе блок может потерять стили */}
    {/* 
      Блок заголовка-спойлера. 
      ОШИБКИ: 
      1. Регистр: используется ListBlock вместо listBlock (переменные чувствительны к регистру, такой переменной нет).
      2. Тег img: сломан синтаксис style={{width15}}: — лишняя фигурная скобка, двоеточие вне объекта и неверное название свойства width.
    */}
    <h2 onClick={()=> setListBlock(!ListBlock)}>Выпадающий список <img src={listBlock ? menu1 : menu2} style={{width15}}:/> </h2>
    
    {/* 
      Условный рендеринг (Ternary operator). 
      ОШИБКА: снова опечатка в регистре ListBlock. Так как этой переменной не существует, код упадет с ошибкой ReferenceError.
      Если бы регистр был верным ({listBlock ? ...}), то при true рисовался бы список ссылок, при false — пустая строка "".
    */}
    {ListBlock ? (
       <div className="list_block">
    <a href="#">Мясо</a>
    <br></br>
    <a href="#">Рыба</a>
    <br></br>
    <a href="#">Банан</a>
    <br></br>
    <a href="#">Апельсин</a>
    <br></br>
    <a href="#">Мандарин</a>
    <br></br>
    <a href="#">Киви</a>
    <br></br>
    <a href="#">Яблоко</a>
    <br></br>
    </div>
    ) : (

    
     ""
    )}
    </div>
  </div>
 );
}

export default App; // Экспортируем компонент по умолчанию, чтобы главный файл приложения (index.js) мог его отрендерить
