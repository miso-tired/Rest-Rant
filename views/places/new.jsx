const React = require('react')
const Def = require('../default')

function new_form () {
    return (
        <Def>
            <main>
                <h1>Add a New Place</h1>
                <form method="POST" action="/places">
                    <div>
                        <label>Place Name</label>
                        <input id="name" name="name" required />
                    </div>
                    <div>
                        <label htmlFor="pic">Place Picture</label>
                        <input type="url" id="pic" name="pic" />
                    </div>
                    <div>
                        <label>City</label>
                        <input id="city" name="city" />
                    </div>
                    <div>
                        <label>State</label>
                        <input id="state" name="state" />
                    </div>
                    <div>
                        <label>Cuisine</label>
                        <input id="cuisine" name="cuisine" required />
                    </div>
                    <input type="submit" value="Add Place" />
                </form>
            </main>
        </Def>
    )
}

module.exports = new_form