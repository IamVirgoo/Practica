import { Link } from "react-router-dom";

export default function IndexPage() {
    return <main>
        <section className={'hero'}>
            <div className={'hero--container'}>
                <div className={'hero--container--heading'}>
                    <h1 className={'hero--container--heading--title'}>Выберите социальную сеть</h1>
                </div>
                <div className={'hero--container--content'}>
                    <Link to={'/app/ok'} className={'hero--container--content__ok'}>
                        Одноклассники
                    </Link>
                    <Link to={'/app/vk'}  className={'hero--container--content__vk'}>
                        Вконтакте
                    </Link>
                </div>
            </div>
        </section>
    </main>
}