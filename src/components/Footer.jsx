import { footerColumns, socialItems } from '../data/blogData'
import Icon from './Icon'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__top">
        <nav className="footer__nav" aria-label="Навигация в подвале">
          {footerColumns.map((column) => (
            <ul className="footer__list" key={column.join('-')}>
              {column.map((item) => (
                <li key={item}><a href="/blog">{item}</a></li>
              ))}
            </ul>
          ))}
        </nav>

        <section className="subscribe" aria-labelledby="subscribe-title">
          <h2 id="subscribe-title">Одно письмо в неделю со свежими новостями и акциями</h2>
          <form className="subscribe__form">
            <label className="visually-hidden" htmlFor="email">Ваш e-mail</label>
            <input id="email" type="email" placeholder="Ваш e-mail" />
            <button type="submit" aria-label="Подписаться"><Icon name="arrow" /></button>
          </form>
          <p>Подписываясь, я соглашаюсь на обработку персональных данных в соответствии с ФЗ РФ № 152-ФЗ «О персональных данных», а также с Политикой конфиденциальности</p>
        </section>

        <div className="footer__social">
          <div className="footer__badge" aria-label="Участник Сколково">Sk Участник</div>
          <ul className="socials" aria-label="Социальные сети">
            {socialItems.map((social) => (
              <li key={social}>
                <a href="/blog" aria-label={`Социальная сеть ${social}`}>
                  <Icon name={social} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container footer__bottom">
        <span>©Youtalk, 2018 - 2022</span>
        <a href="/blog">Юридические документы</a>
        <a href="/blog">Способы оплаты</a>
      </div>
    </footer>
  )
}

export default Footer
