from flask import Blueprint, jsonify

group_bp = Blueprint("group_bp", __name__)

@group_bp.route("/groups", methods=["GET"])
def get_groups():
    return jsonify([])


@group_bp.route("/groups", methods=["POST"])
def create_group():
    return jsonify({
        "message": "Group created"
    })


@group_bp.route("/groups/<int:id>", methods=["PATCH"])
def update_group(id):
    return jsonify({
        "message": f"Group {id} updated"
    })


@group_bp.route("/groups/<int:id>", methods=["DELETE"])
def delete_group(id):
    return jsonify({
        "message": f"Group {id} deleted"
    })