import { JSX } from 'react';

import style from './HomePage.module.scss';
import { 
    Body1,
    Body2,
    Body3,
    Body4,
    Body5,
    Footer,
    Header,
    Nav,
} from '../components';

export function HomePage(): JSX.Element {
    return (
        <div className={ style.container }>
            <nav>
                <Nav />
            </nav>
            <body>
                <header>
                    <Header />
                </header>

                <section className={style.f}>
                    <Body1 />
                </section>

                <section  className={style.s}>
                    <Body2 />
                </section>

                <section  className={style.t}>
                    <Body3 />
                </section>

                <section  className={style.fo}>
                    <Body4 />
                </section>

                <section  className={style.ff}>
                    <Body5 />
                </section>

                <footer>
                    <Footer />
                </footer>
            </body>
        </div>
    );
}
