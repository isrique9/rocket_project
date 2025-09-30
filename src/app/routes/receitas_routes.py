from flask import Blueprint, render_template

receitas_bp = Blueprint("receitas", __name__, url_prefix="/receitas")


@receitas_bp.route("/")
def feed_receitas():
    return render_template("feed_receitas.html")
