from app import db

class Group(db.Model):

    __tablename__ = "groups"

    id = db.Column(db.Integer, primary_key=True)

    group_name = db.Column(db.String(10))

    tournament_id = db.Column(
        db.Integer,
        db.ForeignKey("tournaments.id")
    )

    standings = db.relationship("Standings", backref="group", lazy=True)