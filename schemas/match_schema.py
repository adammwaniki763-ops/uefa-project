from app import ma
from models.match import Match

class MatchSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Match
        load_instance = True


match_schema = MatchSchema()
matches_schema = MatchSchema(many=True)