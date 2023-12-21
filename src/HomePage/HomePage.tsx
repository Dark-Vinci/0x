import { JSX } from 'react';

import style from './HomePage.module.scss';

export function HomePage(): JSX.Element {
    return (
        <div className={ style.container }>
            <nav></nav>
            <body>
                <header></header>
                <section>
                    body1
                </section>

                <section>
                    body2
                </section>

                <section>
                    body3
                </section>

                <section>
                    body4
                </section>

                <section>
                    body5
                </section>

                <footer>
                    
                </footer>
            </body>
        </div>
    );
}
