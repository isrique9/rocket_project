from app.routes.feed_routes import feed_bp
from app.routes.home import home_bp


def register_routes(app):
    app.register_blueprint(feed_bp)
    app.register_blueprint(home_bp)
