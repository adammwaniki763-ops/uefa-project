from flask import Blueprint, request, jsonify
from app import db
from ..models.club import Club

club_bp = Blueprint("club_bp", __name__)

@club_bp.route("/clubs", methods=["GET"])
def get_clubs():
    clubs = Club.query.all()

    return jsonify([
        {
            "id": club.id,
            "club_name": club.club_name,
            "country": club.country,
            "coach": club.coach,
            "stadium": club.stadium,
            "logo_url": club.logo_url
        } for club in clubs
    ])


@club_bp.route("/clubs/<int:id>", methods=["GET"])
def get_club(id):
    club = Club.query.get_or_404(id)

    return jsonify({
        "id": club.id,
        "club_name": club.club_name,
        "country": club.country,
        "coach": club.coach,
        "stadium": club.stadium,
        "logo_url": club.logo_url
    })


@club_bp.route("/clubs", methods=["POST"])
def create_club():
    data = request.get_json()

    club = Club(
        club_name=data["club_name"],
        country=data["country"],
        coach=data["coach"],
        stadium=data["stadium"],
        logo_url=data.get("logo_url")
    )

    db.session.add(club)
    db.session.commit()

    return jsonify({"message": "Club created"}), 201


@club_bp.route("/clubs/<int:id>", methods=["PATCH"])
def update_club(id):
    club = Club.query.get_or_404(id)
    data = request.get_json()

    club.club_name = data.get("club_name", club.club_name)
    club.country = data.get("country", club.country)
    club.coach = data.get("coach", club.coach)
    club.stadium = data.get("stadium", club.stadium)

    db.session.commit()

    return jsonify({"message": "Club updated"})


@club_bp.route("/clubs/<int:id>", methods=["DELETE"])
def delete_club(id):
    club = Club.query.get_or_404(id)

    db.session.delete(club)
    db.session.commit()

    return jsonify({"message": "Club deleted"})