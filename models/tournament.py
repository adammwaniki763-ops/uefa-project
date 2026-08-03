from app import db

class Tournament(db.Model):

    __tablename__ = "tournaments"

    id = db.Column(db.Integer, primary_key=True)

    name = db.Column(db.String(100), nullable=False)

    season = db.Column(db.String(50))

    location = db.Column(db.String(100))

    start_date = db.Column(db.Date)

    end_date = db.Column(db.Date)

    status = db.Column(db.String(50))

    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))

    groups = db.relationship("Group", backref="tournament", lazy=True)

    matches = db.relationship("Match", backref="tournament", lazy=True)

    tournament_clubs = db.relationship("TournamentClub", backref="tournament", lazy=True)
