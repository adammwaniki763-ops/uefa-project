from flask import Blueprint, jsonify

standings_bp = Blueprint("standings_bp", __name__)

@standings_bp.route("/standings", methods=["GET"])
def get_standings():
    return jsonify([])


@standings_bp.route("/standings/<string:group>", methods=["GET"])
def get_group_standings(group):
    return jsonify({
        "group": group
    })
