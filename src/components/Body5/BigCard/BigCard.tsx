import { JSX } from 'react';

import style from './BigCard.module.scss';


interface BigCardProps {
    readonly company: string;
    readonly description: string;
    readonly name: string;
    readonly title: string;
    readonly bgColor: string;
}

export function BigCard({
    company, 
    description, 
    name, 
    title,
    bgColor,
}: BigCardProps): JSX.Element {
    return (
        <div 
            className={ style.container } 
            style={{ backgroundColor: bgColor }}
        >
            <div className={ style.top }>
                <div className={ style.top_container }>
                    <div className={ style.company }>
                        <img 
                            src={company} 
                            alt="company logo" 
                        />
                    </div>
                    <div className={ style.description }>
                        <p>{ description }</p>
                    </div>
                </div>
            </div>

            <div className={ style.bot }>
                <div className={ style.bot_container }>
                    <div className={ style.name }>
                        <p>{ name }</p>
                    </div>

                    <div className={ style.title }>
                        <p>{ title }</p>
                    </div>
                </div>
            </div>
        </div>
    );
}