from app import db

class Match(db.Model):

    __tablename__ = "matches"

    id = db.Column(db.Integer, primary_key=True)
    home_team_id = db.Column(db.Integer, db.ForeignKey("clubs.id"), nullable=False)
    away_team_id = db.Column(db.Integer, db.ForeignKey("clubs.id"), nullable=False)
    home_score = db.Column(db.Integer, default=0)
    away_score = db.Column(db.Integer, default=0)
    match_date = db.Column(db.DateTime)
    group_id = db.Column(db.Integer, db.ForeignKey("groups.id"), nullable=True)
    tournament_id = db.Column(db.Integer, db.ForeignKey("tournaments.id"), nullable=False)

    home_team = db.relationship("Club", foreign_keys=[home_team_id], backref="home_matches")
    away_team = db.relationship("Club", foreign_keys=[away_team_id], backref="away_matches")
    group = db.relationship("Group", backref="matches")
    tournament = db.relationship("Tournament", back_populates="matches")
