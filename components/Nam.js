import React from 'react'
import Link from 'next/link'

function Nam() {
    return (
        <Link href="/">
                   <span>
                    <span className="primary">Ñ</span>
                    <span className="secondary">A</span>
                    <span className="tertiary">M</span>
                    <span className="exclamation">!</span>
                   </span>
                </Link>
    )
}

export default Nam
