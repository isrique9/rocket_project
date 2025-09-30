from flask import Blueprint, render_template

feed_bp = Blueprint("feed", __name__, url_prefix="/viagens")


@feed_bp.route("/")
def feed_viagens():
    return render_template(
        "base.html", partial="partials/feed_viagens.html", title="Viagens"
    )
