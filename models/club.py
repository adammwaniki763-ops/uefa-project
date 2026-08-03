from app import db

class Club(db.Model):

    __tablename__ = "clubs"

    id = db.Column(db.Integer, primary_key=True)

    club_name = db.Column(db.String(100), nullable=False)

    country = db.Column(db.String(100))

    coach = db.Column(db.String(100))

    stadium = db.Column(db.String(100))

    logo_url = db.Column(db.String(255)), nullable=False