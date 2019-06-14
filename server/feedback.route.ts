import {FEEDBACKS} from './feedbacks';

export function readAllFeedbacks(req, res) {
    res.status(200).json(FEEDBACKS);
}