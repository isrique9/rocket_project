from app.routes.viagens_routes import viagens_bp
from app.routes.home import home_bp
from app.routes.receitas_routes import receitas_bp
from app.routes.noticias_routes import noticias_bp


def register_routes(app):
    app.register_blueprint(home_bp)
    app.register_blueprint(viagens_bp)
    app.register_blueprint(receitas_bp)
    app.register_blueprint(noticias_bp)
