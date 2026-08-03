from app import ma
from models.tournament import Tournament

class TournamentSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Tournament
        load_instance = True


tournament_schema = TournamentSchema()
tournaments_schema = TournamentSchema(many=True)