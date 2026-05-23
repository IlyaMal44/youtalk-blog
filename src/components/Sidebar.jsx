import { sidebarImages } from '../data/articleAssets'

function Sidebar() {
  return (
    <aside className="sidebar" aria-label="Дополнительные материалы">
      <section className="sidebar-card sidebar-card--blue">
        <img src={sidebarImages.chat} alt="" />
        <h2>Загружаем свободные окошки</h2>
        <p>Все в порядке, сейчас мы подберем для вас подходящего психолога.</p>
        <button className="button button--primary" type="button">Подробнее</button>
      </section>

      <section className="sidebar-card therapist">
        <img className="therapist__photo" src={sidebarImages.person} alt="Психолог Лилия" />
        <h2>Лилия</h2>
        <p className="therapist__role">Психолог</p>
        <ul>
          <li>Опыт 6 лет</li>
          <li>43 года</li>
        </ul>
        <button className="button button--primary" type="button">Подробнее</button>
      </section>

      <a className="sidebar-banner" href="/blog" aria-label="Подарить заботу">
        <img src={sidebarImages.gift} alt="" />
      </a>

      <section className="sidebar-card sidebar-card--price">
        <h2>8 Видео сессий</h2>
        <p>Проработать небольшие проблемы и продвинуться к важным изменениям.</p>
        <strong>18 500 ₽</strong>
        <button className="button button--primary" type="button">Купить</button>
      </section>
    </aside>
  )
}

export default Sidebar
