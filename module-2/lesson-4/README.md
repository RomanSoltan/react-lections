Заняття 4 - Ефекти

- Життєвий цикл компонента

  - Монтування
  - Оновлення
    -Розмонтування

- Хук useEffect

  - Створення ефектів
  - Етап оновлення
  - Декілька ефектів
  - Етап розмонтування та очищення еффекту
  - Етап монтування та розмонтування

- Робота з LocalStorage на прикладі Todolist

  - Запис через ефект
  - Читання через useState(callback)
  - схоже завдання по дз

Цикл життя компонента

Є компоненти, вони живуть своє життя. Коли компонент
створюється, тоді відбувається етап монтування. Після
відбувається етап оновлення, тобто у нього відбуваються
якісь зміни, може бути багато змін. І останній етап
життя компонента - це розмонтування. І тут він один раз
покидає DOM-дерево і більше вже не зявляється на сторінці.
Відповідно маємо три етапи, які у кожного компонена завжди
присутні:

- це монтування (один раз)
- оновлення (багато разів)
- розмонтування (один раз)

Це означає, що кожен з цих етапів може опрацьовувати useEffect.
useEffect - це хук, який приймає в собі два аргументи.

- 1. callback-функція.
- 2. масив залежностей.

Якщо масив залежностей буде порожнім, це означає, що useEffect
виконається лише один раз, при монтуванні компонента.
Як тільки у хука буде якась залежність у масиві, то це означає,
що кожна зміна цієї залежності буде викликати callback-функцію
стільки разів, скільки буде оновлюватися залежність.
Потім настає момент, коли компонент прибирають. І цей хук
наостанок перед виходом компонента з DOM-дерева може зробити
якусь подію. Зазвичай це виглядає так, що у колбеці
прописують return, після якого пишеться ще один callback, в
якому щось робиться (наприклад видаляються слухачі подій,
очищення інтервалів, таймаутів + зупиняти fetch).

- Якщо перевести в алегорію, то useEffect - це охоронець,
  який пильнує за тим, що ви йому скажете. Умовно є декілька
  варіацій використання useEffect (із залежністю, без неї,
  з return).
  - У випадку, якщо пуста залежнісь, то він виконує якусь
    операцію лише один раз
  - якщо залежність не порожня, то він буде слідкувати
    за цією залежністю, і коли вона буде змінюватися, то буде
    виконуватися певний код, яки ми написали у useEffect.
  - і якщо у useEffect є написаний return, незалежно від
    того порожня злежність чи ні, то виконається код, який
    прописаний у return, лише при виході один раз.

-Відповідно useEffect буде виконувти за вас якусь роботу
автоматично, нам не треба буде вручну кожен раз це робити.

-Strict.mode не працює в режимі деплоя.

Для useEffect діють т самі обмеження, що й для useState:
-не можна писати в if, циклах, в return, і за межами компонента
useEffect нічого не повертає.
Ефектів може бути багато, вони дивляться за своєю зоною
відповідальності, і якщо дублюються залежності, то
спрацьовують обидва.

Підсумки.

1. Життєвий цикл. Є декілька етапів: монтування, оновлення і
   розмонтування. Виконується при мотуванні 1 раз, при
   розмонтуванні 1 раз, та багато в пезультаті апдейта

2. Хук useEffect. Має два аргументи: функція, масив залежностей,
   який можна передавати або не передавати. Якщо не передаєте, то
   робите один раз виконання, якщо передаєте щось, то виконуєте
   один раз при монтуванні і всі наступні рази, коли зачепили ту
   залежність. Можна створювати декілька ефектів. Розмонтування
   виконується тоді, коли навісили, якісь сторонні ефекти (напр
   eventListener, timeOut, interval)
