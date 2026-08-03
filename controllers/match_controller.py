from flask import Blueprint, jsonify

match_bp = Blueprint("match_bp", __name__)

@match_bp.route("/matches", methods=["GET"])
def get_matches():
    return jsonify([])


@match_bp.route("/matches/<int:id>", methods=["GET"])
def get_match(id):
    return jsonify({
        "id": id
    })


@match_bp.route("/matches", methods=["POST"])
def create_match():
    return jsonify({
        "message": "Match created"
    })


@match_bp.route("/matches/<int:id>", methods=["PATCH"])
def update_match(id):
    return jsonify({
        "message": f"Match {id} updated"
    })


@match_bp.route("/matches/<int:id>", methods=["DELETE"])
def delete_match(id):
    return jsonify({
        "message": f"Match {id} deleted"
    })