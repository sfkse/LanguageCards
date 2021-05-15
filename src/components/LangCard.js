import React from 'react';
import { useState } from 'react'

export default function LangCard({ logo, name, desc }) {

    const [flip, setFlip] = useState(false);

    const handleClick = () => {
        setFlip(!flip);
    }
    return (
        <div className="langCard" onClick={handleClick}>

            {!flip ? (
                <>
                    <div className="logo">
                        <img src={logo} alt="heyy" />
                    </div>
                    <div className="name">
                        <h3>{name}</h3>
                    </div>
                </>
            ) : (
                <div className="back">
                    <ul>
                        {
                            desc.map((item) => (
                                <li>{item}</li>
                            ))
                        }
                        {/* <li>{desc}</li>
                        <li>{date}</li>
                        <li>{author}</li> */}
                    </ul>
                </div>
            )}

        </div>
    )
}
