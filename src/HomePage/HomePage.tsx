import { JSX } from 'react';

import style from './HomePage.module.scss';
import { Body1, Body3, Body4, Body5, Footer, Header, Body2, Nav } from '../components';

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

                <section>
                    <Body1 />
                </section>

                <section>
                    <Body2 />
                </section>

                <section>
                    <Body3 />
                </section>

                <section>
                    <Body4 />
                </section>

                <section>
                    <Body5 />
                </section>

                <footer>
                    <Footer />
                </footer>
            </body>
        </div>
    );
}
