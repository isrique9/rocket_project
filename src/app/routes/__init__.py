from app.routes.viagens_routes import feed_bp
from app.routes.home import home_bp
from app.routes.receitas_routes import receitas_bp


def register_routes(app):
    app.register_blueprint(feed_bp)
    app.register_blueprint(home_bp)
    app.register_blueprint(receitas_bp)
