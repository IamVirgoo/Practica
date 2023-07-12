import { Link } from "react-router-dom";

export default function VkPage() {
    return <main>
        <section className={'vk'}>
            <div className={'vk--container'}>
                <div className={'vk--container--content--heading'}>
                    <h1 className={'vk--container--content--heading--title'}>Сервис с использованием API <span className={'vk--container--content--heading--title__vk'}>Вконтакте</span></h1>
                    <Link to={'/'} className={'vk--container--content--heading--link'}>На главную</Link>
                </div>
                <div className={'vk--container--content'}>

                </div>
            </div>
        </section>
    </main>
}