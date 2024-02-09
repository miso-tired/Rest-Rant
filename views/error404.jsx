const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: Page Not Found</h1>
                <p>Sorry, we can't find the page you are looking for! D:</p>
                <div>
                    <img src="images/404-image.jpg" alt="Kurt Angle Staring Meme" />
                    <div>
                        Photo by <a href="https://imgflip.com/memegenerator/498898104/Kurt-Angle-Stare">imgflip Meme Generator</a>
                    </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = error404