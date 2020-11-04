import React, { useState } from 'react'
import { Collapse } from 'react-collapse'

const Footer = () => {
    const [isOpen, setOpen] = useState(false)

    const toggle = () => setOpen(!isOpen)

    return (
        <div>
            <div onClick={toggle} >About</div>
            <div></div>
            <Collapse isOpened={isOpen} theme={{collapse: 'foo', content: 'bar'}}>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, corporis cupiditate debitis omnis ducimus odit quia consequatur tempore voluptas ea repellat soluta repellendus, possimus asperiores consectetur error aliquam eos eum.
                 </div>
            </Collapse>
        </div>
    )
}

export default Footer

import React, { Component } from 'react'



