import React from 'react'

export default function About(props) {
    return (
        <div>
                <div className="card  my-3" style={{backgroundColor: props.mode=== 'dark'?'#423F3E':'white',borderColor: props.mode=== 'dark'?'white':'black'}}>
                    <h1 className="text-center my-2 fw-bolder font-monospace"  style={{color: props.mode=== 'dark'?'white':'black'}}>About Us</h1>
                    <p className="lh-base"  style={{color: props.mode=== 'dark'?'white':'black'}}>This product is designed by Ocean Tech. Basically it is used for basic text manipulation.</p>
                </div>
            </div>
    )
}
