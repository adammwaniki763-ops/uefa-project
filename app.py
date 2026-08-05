from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_bcrypt import Bcrypt
from flask_marshmallow import Marshmallow
from flask_cors import CORS
from flask.cli import with_appcontext
import click


# Initialize extensions
db = SQLAlchemy()
migrate = Migrate()
bcrypt = Bcrypt()
ma = Marshmallow()


def create_app():

    app = Flask(__name__)

    app.config.from_object("config.Config")

    CORS(app)

    db.init_app(app)
    migrate.init_app(app, db)
    bcrypt.init_app(app)
    ma.init_app(app)

    # Import models
    import models

    from controllers.auth_controller import auth_bp
    from controllers.club_controller import club_bp
    from controllers.group_controller import group_bp
    from controllers.match_controller import match_bp
    from controllers.standings_controller import standings_bp
    from controllers.tournament_controller import tournament_bp

    app.register_blueprint(auth_bp)
    app.register_blueprint(club_bp)
    app.register_blueprint(group_bp)
    app.register_blueprint(match_bp)
    app.register_blueprint(standings_bp)
    app.register_blueprint(tournament_bp)

    @app.cli.command("seed")
    @with_appcontext
    def seed():
        from models.user import User

        db.create_all()

        admin = User(
            username="admin",
            email="admin@gmail.com",
            role="admin"
        )
        admin.set_password("admin123")

        db.session.add(admin)
        db.session.commit()

        click.echo("Database tables created and admin user seeded successfully!")

    return app


app = create_app()

if __name__ == "__main__":
    app.run(debug=True)