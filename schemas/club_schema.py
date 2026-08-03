from app import ma
from models.club import Club

class ClubSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Club
        load_instance = True


club_schema = ClubSchema()
clubs_schema = ClubSchema(many=True)
