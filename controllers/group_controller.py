from flask import Blueprint, request, jsonify
from app import db
from models.group import Group

group_bp = Blueprint("group_bp", __name__)


@group_bp.route("/groups", methods=["GET"])
def get_groups():

    groups = Group.query.all()

    return jsonify([
        {
            "id": group.id,
            "group_name": group.group_name,
            "tournament_id": group.tournament_id
        }

        for group in groups
    ])


@group_bp.route("/groups/<int:id>", methods=["GET"])
def get_group(id):

    group = Group.query.get_or_404(id)

    return jsonify({
        "id": group.id,
        "group_name": group.group_name,
        "tournament_id": group.tournament_id
    })


@group_bp.route("/groups", methods=["POST"])
def create_group():

    data = request.get_json()

    group = Group(
        group_name=data["group_name"],
        tournament_id=data["tournament_id"]
    )

    db.session.add(group)
    db.session.commit()

    return jsonify({"message": "Group created successfully"}), 201


@group_bp.route("/groups/<int:id>", methods=["PATCH"])
def update_group(id):

    group = Group.query.get_or_404(id)

    data = request.get_json()

    group.group_name = data.get("group_name", group.group_name)
    group.tournament_id = data.get("tournament_id", group.tournament_id)

    db.session.commit()

    return jsonify({"message": "Group updated successfully"})


@group_bp.route("/groups/<int:id>", methods=["DELETE"])
def delete_group(id):

    group = Group.query.get_or_404(id)

    db.session.delete(group)
    db.session.commit()

    return jsonify({"message": "Group deleted successfully"})