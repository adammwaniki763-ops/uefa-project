from flask import Blueprint, jsonify

club_bp = Blueprint("club_bp", __name__)

@club_bp.route("/clubs", methods=["GET"])
def get_clubs():
    return jsonify([])


@club_bp.route("/clubs/<int:id>", methods=["GET"])
def get_club(id):
    return jsonify({
        "id": id
    })


@club_bp.route("/clubs", methods=["POST"])
def create_club():
    return jsonify({
        "message": "Club created"
    })


@club_bp.route("/clubs/<int:id>", methods=["PATCH"])
def update_club(id):
    return jsonify({
        "message": f"Club {id} updated"
    })


@club_bp.route("/clubs/<int:id>", methods=["DELETE"])
def delete_club(id):
    return jsonify({
        "message": f"Club {id} deleted"
    })