import { JSX } from 'react';
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaReddit, FaGithub, FaArrowRight } from "react-icons/fa";

import style from './Footer.module.scss';

export function Footer(): JSX.Element {
    return (
        <div className={ style.container }>
            <div className={ style.footer_container }>
                <div className={ style.top }>
                    <div className={[style.footer_card, style.f].join(' ')}>
                        <div className="top_container">
                            <div className="title">
                                <p>Ready to start building?</p>
                            </div>
                            <div className="description">
                                <p>Create a 0x account and get started, for free, in less than five minutes.</p>
                            </div>
                            <div className="button">
                                <button>Create Account</button>
                            </div>
                        </div>
                    </div>

                    <div className={[style.footer_card, style.s].join(' ')}>
                        <div className={style.bot_container }>
                            <div className={style.title }>
                                <p>Join our newsletter</p>
                            </div>
                            <div className={style.description }>
                                <p>Stay in the know on the latest alpha, news and product updates.</p>
                            </div>

                            <div className={style.input }>
                                <div className={ style.input_container }>
                                    <input 
                                        type="text" 
                                        placeholder='Enter your email'
                                    />
                                    <div className={style.icon }>
                                        <FaArrowRight color='#fff' size='20px'/>
                                    </div>
                                </div>
                            </div>

                            <div className={style.terms }>
                                <p>To learn how we manage your data, visit our</p>
                                <a href=".">Privacy Policy</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={ style.bottom }>
                    <div className={ style.main }>Main</div>
                    <div className={ style.sub }>
                        <div className={ style.sub_container }>
                            <div className={ style.left }>
                                <p>© ZeroEx Holdings, Inc. All rights reserved.</p>
                            </div>
                            <div className={ style.right }>
                                <AiFillTwitterCircle />
                                <FaReddit />
                                <FaGithub />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
