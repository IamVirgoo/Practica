import { Link } from "react-router-dom";

export default function VkPage() {
    return <main>
        <section className={'vk'}>
            <div className={'vk--container'}>
                <div className={'vk--container--content--heading'}>
                    <h1 className={'vk--container--content--heading--title'}>Сервис с использованием API <span className={'vk--container--content--heading--title__vk'}>Вконтакте</span></h1>
                    <Link to={'/'} className={'vk--container--content--heading--link'}>На главную</Link>
                </div>
                <div className={'line'}/>
                <div className={'vk--container--content'}>
                    <form className={'vk--container--content--form'}>
                        <input type="text" className={'vk--container--content--form__input'}
                               placeholder={'Введите ваш id'}
                        />
                        <input type="text" className={'vk--container--content--form__input'}
                               placeholder={'Введите id вашего друга'}
                        />
                        <input type="button" className={'vk--container--content--form__submit'}
                               value={'Подтвердить'}
                        />
                    </form>
                </div>
            </div>
        </section>
    </main>
}