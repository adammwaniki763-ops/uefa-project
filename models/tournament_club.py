from app import db

class TournamentClub(db.Model):

    __tablename__ = "tournament_clubs"

    id = db.Column(db.Integer, primary_key=True)

    tournament_id = db.Column(
        db.Integer,
        db.ForeignKey("tournaments.id")
    )

    club_id = db.Column(
        db.Integer,
        db.ForeignKey("clubs.id")
    )