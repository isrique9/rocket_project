from flask import Flask
from app.routes import register_routes


def create_app(testing=False):
    app = Flask(__name__)
    app.secret_key = "chave-secreta"

    if testing:
        app.config["TESTING"] = True

    register_routes(app)

    return app
