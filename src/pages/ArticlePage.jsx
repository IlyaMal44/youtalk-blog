import Breadcrumbs from '../components/Breadcrumbs'
import Sidebar from '../components/Sidebar'
import { articleImages } from '../data/articleAssets'

function ArticlePage() {
  return (
    <main className="main article-page">
      <Breadcrumbs items={['Главная', 'Блог', 'Как не утонуть в тревоге']} />
      <div className="container article-page__layout">
        <article className="article">
          <header className="article__header">
            <h1 className="article__title">Как не утонуть в тревоге и управлять своими страхами</h1>
            <p className="article__meta">Автор: Лиза Файнтух · <time dateTime="2021-08-21">21.08.2021</time></p>
            <img className="article__hero" src={articleImages.hero} alt="Человек спокойно лежит на воде в бассейне" />
          </header>

          <section className="article__toc" aria-labelledby="toc-title">
            <h2 id="toc-title">Содержание</h2>
            <ul>
              <li><a href="#anxiety">Как понять, что отношения с мамой были дисфункциональными</a></li>
              <li><a href="#what-to-do">Что еще можно делать с тревогой?</a></li>
              <li><a href="#exercise-one">Упражнение 1</a></li>
              <li><a href="#exercise-two">Упражнение 2</a></li>
            </ul>
          </section>

          <section className="article__section" id="anxiety">
            <h2>Заголовок h3</h2>
            <p>Одна из самых важных задач, которую может дать работа с психотерапевтом, - научиться бережно замечать тревогу и возвращать себе ощущение опоры. Тревога часто возникает там, где много неопределенности и мало понятных действий.</p>
            <p>Важно не пытаться мгновенно убрать все чувства. Гораздо полезнее разобраться, что именно сейчас происходит, какие мысли усиливают напряжение и что можно сделать в ближайшие несколько минут.</p>
          </section>

          <blockquote className="quote">
            <p>Мы знаем, что тревога является неприятным и мощным переживанием. Но она не делает вас слабым человеком и не отменяет вашу способность выбирать действия.</p>
            <cite>Екатерина Бельтюкова</cite>
          </blockquote>

          <section className="article__section" id="what-to-do">
            <h2>Что еще можно делать с тревогой?</h2>
            <p>Попробуйте заметить момент, когда тревога только начинает нарастать. Назовите чувство, проверьте дыхание и спросите себя: «Что я могу сделать прямо сейчас?» Такой вопрос помогает вернуть контроль.</p>
            <img className="article__image" src={articleImages.people} alt="Люди стоят в светлом помещении и обсуждают ситуацию" />
            <p>Если тревога связана с будущим, полезно разделить ситуацию на факты и предположения. Факты можно проверять, а предположения - обсуждать, записывать и постепенно снижать их влияние.</p>
          </section>

          <section className="exercise" id="exercise-one">
            <h2>Упражнение #1</h2>
            <p>Сядьте удобно, поставьте ноги на пол и назовите пять предметов, которые видите вокруг. Затем отметьте четыре звука, три телесных ощущения, два запаха и один вкус. Это упражнение возвращает внимание в настоящее.</p>
          </section>

          <section className="article__section">
            <h2>Что еще поможет справиться с тревогой?</h2>
            <ul className="article__list">
              <li>Сохраняйте режим сна и отдыха, насколько это возможно.</li>
              <li>Записывайте тревожные мысли, чтобы отделять факты от фантазий.</li>
              <li>Обращайтесь за поддержкой, если тревога мешает жить обычной жизнью.</li>
            </ul>
            <img className="article__image article__image--small" src={articleImages.hands} alt="Руки человека крупным планом" />
            <img className="article__image" src={articleImages.woman} alt="Женщина сидит у окна в теплой одежде" />
          </section>

          <section className="exercise exercise--warm" id="exercise-two">
            <h2>Упражнение #2</h2>
            <p>Напишите короткий список ситуаций, которые вызывают тревогу. Рядом с каждой ситуацией укажите одно маленькое действие, которое находится в зоне вашего контроля.</p>
          </section>

          <div className="article__split">
            <figure>
              <img src={articleImages.chair} alt="Светлая комната со стулом и растением" />
              <figcaption>Иногда безопасная среда начинается с простых вещей: света, воздуха и понятного пространства.</figcaption>
            </figure>
            <figure>
              <img src={articleImages.sunset} alt="Человек смотрит на закат у воды" />
              <figcaption>Пауза и спокойный ритм помогают нервной системе постепенно снижать напряжение.</figcaption>
            </figure>
          </div>

          <section className="exercise exercise--blue">
            <h2>Упражнение #3</h2>
            <p>Вернитесь к списку тревожных мыслей через день. Отметьте, какие из них подтвердились, а какие оказались только предположениями. Это помогает увидеть, что тревога не всегда равна реальности.</p>
          </section>

          <div className="article__topics">
            <a href="/blog">Self</a>
            <a href="/blog">Самооценка и самопринятие</a>
            <a href="/blog">Тревога</a>
            <a href="/blog">Психология</a>
          </div>

          <section className="article-cta">
            <div>
              <h2>Откликается проблема?</h2>
              <p>Поможем подобрать специалиста по вашим задачам и состоянию.</p>
              <button className="button button--primary" type="button">Подобрать психолога</button>
            </div>
            <img src={articleImages.ctaFamily} alt="" />
          </section>
        </article>
        <Sidebar />
      </div>
    </main>
  )
}

export default ArticlePage
