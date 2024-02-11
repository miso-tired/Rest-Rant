const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img src="images/Restaurant-Front.jpg" alt="Thai Food" />
                    <div>
                        Photo by <a href="https://unsplash.com/@gsandhu?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Gurpartap</a> on <a href="https://unsplash.com/s/photos/free">Unsplash</a>
                    </div>
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home