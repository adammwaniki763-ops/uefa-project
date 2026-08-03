from app import app, db
from app.models import User

with app.app_context():
    db.create_all()

    admin = User(
        username="admin",
        email="admin@gmail.com",
        role="admin"
    )

    admin.set_password("admin123")

    db.session.add(admin)
    db.session.commit()

    print("Database tables created successfully!")