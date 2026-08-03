from flask import Blueprint, request, jsonify
from app import db
from models.match import Match

match_bp = Blueprint("match_bp", __name__)


@match_bp.route("/matches", methods=["GET"])
def get_matches():

    matches = Match.query.all()

    return jsonify([
        {
            "id": match.id,
            "tournament_id": match.tournament_id,
            "home_club_id": match.home_club_id,
            "away_club_id": match.away_club_id,
            "stage": match.stage,
            "match_date": str(match.match_date),
            "venue": match.venue,
            "home_score": match.home_score,
            "away_score": match.away_score,
            "winner": match.winner
        }

        for match in matches
    ])


@match_bp.route("/matches/<int:id>", methods=["GET"])
def get_match(id):

    match = Match.query.get_or_404(id)

    return jsonify({
        "id": match.id,
        "tournament_id": match.tournament_id,
        "home_club_id": match.home_club_id,
        "away_club_id": match.away_club_id,
        "stage": match.stage,
        "match_date": str(match.match_date),
        "venue": match.venue,
        "home_score": match.home_score,
        "away_score": match.away_score,
        "winner": match.winner
    })


@match_bp.route("/matches", methods=["POST"])
def create_match():

    data = request.get_json()

    match = Match(
        tournament_id=data["tournament_id"],
        home_club_id=data["home_club_id"],
        away_club_id=data["away_club_id"],
        stage=data["stage"],
        match_date=data["match_date"],
        venue=data["venue"],
        home_score=data["home_score"],
        away_score=data["away_score"],
        winner=data["winner"]
    )

    db.session.add(match)
    db.session.commit()

    return jsonify({"message": "Match created successfully"}), 201


@match_bp.route("/matches/<int:id>", methods=["PATCH"])
def update_match(id):

    match = Match.query.get_or_404(id)

    data = request.get_json()

    match.stage = data.get("stage", match.stage)
    match.match_date = data.get("match_date", match.match_date)
    match.venue = data.get("venue", match.venue)
    match.home_score = data.get("home_score", match.home_score)
    match.away_score = data.get("away_score", match.away_score)
    match.winner = data.get("winner", match.winner)

    db.session.commit()

    return jsonify({"message": "Match updated successfully"})


@match_bp.route("/matches/<int:id>", methods=["DELETE"])
def delete_match(id):

    match = Match.query.get_or_404(id)

    db.session.delete(match)
    db.session.commit()

    return jsonify({"message": "Match deleted successfully"})