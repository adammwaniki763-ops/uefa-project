from app import ma
from models.standings import Standings

class StandingsSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Standings
        load_instance = True


standings_schema = StandingsSchema()
standings_list_schema = StandingsSchema(many=True)