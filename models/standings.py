from app import db

class Standings(db.Model):

    __tablename__ = "standings"

    id = db.Column(db.Integer, primary_key=True)

    group_id = db.Column(
        db.Integer,
        db.ForeignKey("groups.id")
    )

    club_id = db.Column(
        db.Integer,
        db.ForeignKey("clubs.id")
    )

    matches_played = db.Column(db.Integer, default=0)

    wins = db.Column(db.Integer, default=0)

    draws = db.Column(db.Integer, default=0)

    losses = db.Column(db.Integer, default=0)

    goals_for = db.Column(db.Integer, default=0)

    goals_against = db.Column(db.Integer, default=0)

    goal_difference = db.Column(db.Integer, default=0)

    points = db.Column(db.Integer, default=0)