from flask import Blueprint, render_template

noticias_bp = Blueprint("noticias", __name__, url_prefix="/noticias")


@noticias_bp.route("/")
def feed_noticias():
    return render_template(
        "base.html",
        partial="partials/feed_noticias.html",
        title="Noticias",
    )
