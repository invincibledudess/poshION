
import {USERS} from "./users";
import {ORDER} from "./order";

const order = ORDER;

export function getUserOrders(req, res) {
    const userId = req.params.userId;
    const user = USERS[Object.keys(USERS).find((u) => USERS[u].id === userId)];

    res.status(200).json(user.pastOrders);
}

export function getOrderById(req, res) {
    const orderId = req.params.orderId;
    res.status(200).json(order[orderId]);
}

export function createOrderReview(req, res) {
    const orderId = req.params.orderId;
    order[orderId].review = req.body.review;
    res.status(200).json(order[orderId]);
}
