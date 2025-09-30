from flask import Blueprint, render_template
from app.utils.utils import load_json  # importa seu helper

receitas_bp = Blueprint("receitas", __name__, url_prefix="/receitas")


@receitas_bp.route("/")
def feed_receitas():
    data = load_json("receitas.json")
    return render_template(
        "base.html",
        partial="partials/feed_receitas.html",
        title="Receitas",
        receitas=data["receitas"],
    )
