from app import ma
from models.group import Group

class GroupSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Group
        load_instance = True


group_schema = GroupSchema()
groups_schema = GroupSchema(many=True)