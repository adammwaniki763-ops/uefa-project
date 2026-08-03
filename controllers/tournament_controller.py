from flask import Blueprint, request, jsonify
from app import db
from models.tournament import Tournament

tournament_bp = Blueprint("tournament_bp", __name__)


@tournament_bp.route("/tournaments", methods=["GET"])
def get_tournaments():
    tournaments = Tournament.query.all()

    return jsonify([
        {
            "id": tournament.id,
            "name": tournament.name,
            "season": tournament.season,
            "location": tournament.location,
            "start_date": str(tournament.start_date),
            "end_date": str(tournament.end_date),
            "status": tournament.status
        }

        for tournament in tournaments
    ])


@tournament_bp.route("/tournaments/<int:id>", methods=["GET"])
def get_tournament(id):

    tournament = Tournament.query.get_or_404(id)

    return jsonify({
        "id": tournament.id,
        "name": tournament.name,
        "season": tournament.season,
        "location": tournament.location,
        "start_date": str(tournament.start_date),
        "end_date": str(tournament.end_date),
        "status": tournament.status
    })


@tournament_bp.route("/tournaments", methods=["POST"])
def create_tournament():

    data = request.get_json()

    tournament = Tournament(
        name=data["name"],
        season=data["season"],
        location=data["location"],
        start_date=data["start_date"],
        end_date=data["end_date"],
        status=data["status"]
    )

    db.session.add(tournament)
    db.session.commit()

    return jsonify({"message": "Tournament created successfully"}), 201


@tournament_bp.route("/tournaments/<int:id>", methods=["PATCH"])
def update_tournament(id):

    tournament = Tournament.query.get_or_404(id)

    data = request.get_json()

    tournament.name = data.get("name", tournament.name)
    tournament.season = data.get("season", tournament.season)
    tournament.location = data.get("location", tournament.location)
    tournament.start_date = data.get("start_date", tournament.start_date)
    tournament.end_date = data.get("end_date", tournament.end_date)
    tournament.status = data.get("status", tournament.status)

    db.session.commit()

    return jsonify({"message": "Tournament updated successfully"})


@tournament_bp.route("/tournaments/<int:id>", methods=["DELETE"])
def delete_tournament(id):

    tournament = Tournament.query.get_or_404(id)

    db.session.delete(tournament)
    db.session.commit()

    return jsonify({"message": "Tournament deleted successfully"})