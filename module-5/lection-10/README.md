# Заняття 9 - Routing

- Маршрутизація в SPA
  - Один `index.html`
  - `react-router-dom`
- Компонент `BrowserRouter`
- Компоненти `Link` `NavLink`
- Компоненти `Route` `Routes`
- Page 404
- Динаміка з `useParams`
- Вкладені маршрути `Outlet`
- Deploy to vercel

useSearchParams() - це момент, коли ми можемо додати пошук,
але пошук не простий з useState, а пошук цікавий, через url.
Тобто можна ділитися посиланням і людина буде бачити все те,
що бачу я. Що для цього потрібно? Оголосити хук useSearchParams(),
який нам дає дві сутності. 1. searchParams це умовно обєкт, у якого
є методи get() i set(). Ми якщо хочемо щось закинути в url ми
кажемо set(), set(), set(), set()... Записуємо це все діло, як якісь
значення конкретні для нашого майбутнього url, а потім через другу
сутність, яка називається setSearchParams, все що ми зберегли
передаємо в середину searchParams. Якщо потрібо витягнути щось з
url можемо зробити searchParams.get(). Ось цей приклад
const query = searchParams.get("query") ?? ""; він дуже класно
відпрацьовує в моментах, коли вам треба коллбек url відпрацьовувати.
Коли ви робите якісь інтеграції, google-аутентифікації, підключення
slack-акаунту, або веб-хука тощо.

У нас була можливість сформувати свою локацію, тобто будучи на якійсь
сторінці, м можемо подивитися, де ми знаходимось його pathname, query,
hesh і тд. І ось це все ми можемо передати наступному. Даємо в лінк state
і локацію прокидуємо всередину. Локація ця потрапляє на UserDetails, ми її
перехоплюємо і відправляємось назад

Navigate у нас використовуєтьс для програмних навігацій. Він не підходить для
навігації goBack, тому що це має бути Link, він підходить тоді коли вам треба,
напр, зробили оплату повернулись назад, зробили логін повернулись кудись,
побув користувач 10хв на сайті його викинути на сторінку зареєстуйся, щоб далі
читати новини. Можна робити navigate давати якесь посилання слеш і щось, або
можна давати мінус 1 для переходу назад.

Lazy(). Коли вам треб підвантажувати якусь частину сайту ми використовуємо lazy(),
бо все нам вантажити одразу не треба, порібно по частинам. І для того, щоб воно все
працювало правильно треба огорнути Suspense ваші маршрути
