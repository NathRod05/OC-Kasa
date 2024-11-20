import "../style/notfound.css"

function NotFound() {
    return (
        <div className="not-found">
            <h1 className="page-404">404</h1>
            <p className="text">
                Oups! La page que vous demandez n'existe pas.
            </p>
            <nav>
                <a className="lien" href="/">
                    Retourner sur la page d’accueil
                </a>
            </nav>
        </div>
    )
}

export default NotFound
