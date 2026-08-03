from flask import Blueprint, jsonify

auth_bp = Blueprint("auth_bp", __name__)

@auth_bp.route("/signup", methods=["POST"])
def signup():
    return jsonify({
        "message": "User registration endpoint"
    })


@auth_bp.route("/login", methods=["POST"])
def login():
    return jsonify({
        "message": "User login endpoint"
    })


@auth_bp.route("/logout", methods=["DELETE"])
def logout():
    return jsonify({
        "message": "User logout endpoint"
    })


@auth_bp.route("/check_session", methods=["GET"])
def check_session():
    return jsonify({
        "message": "Session is active"
    })