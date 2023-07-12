import {Link} from "react-router-dom";

export default function OkPage() {
    return <main>
        <section className={'ok'}>
            <div className={'ok--container'}>
                <div className={'ok--container--content--heading'}>
                    <h1 className={'ok--container--content--heading--title'}>Сервис с использованием API <span className={'ok--container--content--heading--title__ok'}>Одноклассники</span></h1>
                    <Link to={'/'} className={'ok--container--content--heading--link'}>На главную</Link>
                </div>
                <div className={'line'}/>
                <div className={'ok--container--content'}>
                    <form className={'ok--container--content--form'}>
                        <input type="text" className={'ok--container--content--form__input'}
                               placeholder={'Введите ваш id'}
                        />
                        <input type="text" className={'ok--container--content--form__input'}
                               placeholder={'Введите id вашего друга'}
                        />
                        <input type="button" className={'ok--container--content--form__submit'}
                               value={'Подтвердить'}
                        />
                    </form>
                </div>
            </div>
        </section>
    </main>
}