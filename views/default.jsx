const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"/>
                <link rel="stylesheet" href="/css/style.css"/>
            </head>
            <body>
                {html.children}
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
            </body>
        </html>
    )
}

module.exports = Def