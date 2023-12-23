import { JSX, useEffect, useState } from 'react';

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
    const [scrollDirection, setScrollDirection] = useState<string>('');
  const [prevScrollY, setPrevScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY) {
        setScrollDirection('down');
      } else if (currentScrollY < prevScrollY) {
        setScrollDirection('up');
      }

      setPrevScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      // Cleanup: remove the scroll event listener when the component unmounts
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollY]);
  
    return (
        <div className={ style.container }>
            <nav>
                <Nav
                    scrollDirection={scrollDirection}
                />
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
