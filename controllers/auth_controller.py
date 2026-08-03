from flask import Blueprint, request, jsonify

auth_bp = Blueprint("auth_bp", __name__)

@auth_bp.route("/signup", methods=["POST"])
def signup():
    return jsonify({"message": "User registered successfully"}), 201


@auth_bp.route("/login", methods=["POST"])
def login():
    return jsonify({"message": "Login successful"}), 200


@auth_bp.route("/logout", methods=["DELETE"])
def logout():
    return jsonify({"message": "Logged out successfully"}), 200


@auth_bp.route("/check_session", methods=["GET"])
def check_session():
    return jsonify({"message": "Session active"}), 200