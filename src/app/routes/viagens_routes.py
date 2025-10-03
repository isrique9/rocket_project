from flask import Blueprint, render_template
from app.utils.utils import load_json

feed_bp = Blueprint("feed", __name__, url_prefix="/viagens")


@feed_bp.route("/")
def feed_viagens():
    data = load_json("viagens.json")
    return render_template(
        "base.html",
        partial="partials/feed_viagens.html",
        title="Viagens",
        destinoPrincipal=data["destinoPrincipal"],
        recomendacoes=data["recomendacoes"],
    )
