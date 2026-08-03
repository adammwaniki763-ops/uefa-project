from flask import Blueprint, jsonify

tournament_bp = Blueprint("tournament_bp", __name__)

@tournament_bp.route("/tournaments", methods=["GET"])
def get_tournaments():
    return jsonify([])


@tournament_bp.route("/tournaments/<int:id>", methods=["GET"])
def get_tournament(id):
    return jsonify({
        "id": id
    })


@tournament_bp.route("/tournaments", methods=["POST"])
def create_tournament():
    return jsonify({
        "message": "Tournament created"
    })


@tournament_bp.route("/tournaments/<int:id>", methods=["PATCH"])
def update_tournament(id):
    return jsonify({
        "message": f"Tournament {id} updated"
    })


@tournament_bp.route("/tournaments/<int:id>", methods=["DELETE"])
def delete_tournament(id):
    return jsonify({
        "message": f"Tournament {id} deleted"
    })
