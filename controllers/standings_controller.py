from flask import Blueprint, jsonify
from models.standings import Standings

standings_bp = Blueprint("standings_bp", __name__)


@standings_bp.route("/standings", methods=["GET"])
def get_standings():

    standings = Standings.query.all()

    return jsonify([
        {
            "id": standing.id,
            "group_id": standing.group_id,
            "club_id": standing.club_id,
            "matches_played": standing.matches_played,
            "wins": standing.wins,
            "draws": standing.draws,
            "losses": standing.losses,
            "goals_for": standing.goals_for,
            "goals_against": standing.goals_against,
            "goal_difference": standing.goal_difference,
            "points": standing.points
        }

        for standing in standings
    ])


@standings_bp.route("/standings/<int:group_id>", methods=["GET"])
def get_group_standings(group_id):

    standings = Standings.query.filter_by(group_id=group_id).all()

    return jsonify([
        {
            "club_id": standing.club_id,
            "matches_played": standing.matches_played,
            "wins": standing.wins,
            "draws": standing.draws,
            "losses": standing.losses,
            "goal_difference": standing.goal_difference,
            "points": standing.points
        }

        for standing in standings
    ])
