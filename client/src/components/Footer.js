import React from "react"
import "./style/footer.css"

function Footer() {
    return (
        <div>
            <footer className="page-footer font-small cyan darken-3">
                <div className="footer-copyright text-center py-3">© 2020 Copyright:
                    <a href="https://mdbootstrap.com/"> SkinDex</a>
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