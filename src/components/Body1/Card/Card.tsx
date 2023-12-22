import { JSX } from 'react';
import { FaArrowRight } from "react-icons/fa";
import { WiStars } from "react-icons/wi";

import style from './Card.module.scss';

interface CardProps {
    readonly imageUrl: string;
    readonly title: string;
    readonly description: string;
    readonly isComingSoon: boolean;
}

export function Card({imageUrl, title, description, isComingSoon}: CardProps): JSX.Element {
    return (
        <div className={style.container }>
            <div className={style.card_container }>
                <div className={style.icon }>
                    {
                        isComingSoon ?
                            <div> 
                                <WiStars size={'20px'}/> Coming soon
                            </div> :
                            <div><FaArrowRight size={'25px'}/> </div>
                    }
                </div>

                <div className={style.head }>
                    <div className={style.img }>
                        <img src={imageUrl} alt="card" />
                    </div>
                </div>

                <div className={style.title }>
                    <p><span>{title}</span> API</p>
                </div>

                <div className={style.description }>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
}
