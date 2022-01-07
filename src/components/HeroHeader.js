import React from 'react';

function HeroHeader() {

    return (
        <div className='hero-img'>
            <div className='overlay'>
                <div className='hero-content'>
                    <img src='/transLogo750.png' />
                    <p>Just giving credit where credit is due.<br/>
                        Thanks for playing. <br/>
                        And, as always, Cheers.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HeroHeader;