import React from 'react'
import './Footer.css'

export default () => (
    <div>
        <h2 className="taCenter">
            Follow us{' '}
            <a href="https://twitter.com/sheehyjohn">@sheehyjohn</a>
        </h2>
        <br />
        <footer className="footer">
            <div className="container taCenter">
                <span>
                    © Copyright {new Date().getFullYear()} All rights reserved.
        </span>
            </div>
        </footer>
    </div>
)

/*
  © Copyright {new Date().getFullYear()} All rights reserved. Crafted by{' '}
                    <a href="https://thriveweb.com.au/">Thrive</a>.
*/