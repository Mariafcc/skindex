import React from "react"
import "./style/footer.css"

function Footer() {
    return (
        <div className="">
            <footer className="footer">
                <div className="footer-copyright text-center py-3">© 2020 Copyright:
                    <a className="footer-link" href="https://github.com/Mariafcc/skindex"> SkinDex</a>
                </div>
            </footer>
            {/* <blockquote className="blockquote">
                <footer className="blockquote-footer">
                    <a href="https://github.com/Mariafcc/skindex">skinDex® Copyright 2020</a>
                </footer>
            </blockquote> */}
        </div>
    )
}

export default Footer