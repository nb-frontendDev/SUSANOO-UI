/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from "@emotion/react";
import React, { useState } from 'react'

const Modal = () => {
    const [ show, setShow ] = useState(false);

    if (show) {
        return (
            <div id="overlay">
                <div id="content">
                    <p>これがモーダルウィンドウです。</p>
                    <p>
                        <button onClick={() => setShow(false)}>close</button>
                    </p>
                </div>
            </div>
        )
    } else { 
        return null;
    }
  
}

export default Modal
