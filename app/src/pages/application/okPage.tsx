import {Link} from "react-router-dom";

export default function OkPage() {
    return <main>
        <section className={'ok'}>
            <div className={'ok--container'}>
                <div className={'ok--container--content--heading'}>
                    <h1 className={'ok--container--content--heading--title'}>Сервис с использованием API <span className={'ok--container--content--heading--title__ok'}>Одноклассники</span></h1>
                    <Link to={'/'} className={'ok--container--content--heading--link'}>На главную</Link>
                </div>
                <div className={'ok--container--content'}>

                </div>
            </div>
        </section>
    </main>
}