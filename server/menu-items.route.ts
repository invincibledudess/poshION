
import {ITEMS} from "./menu";
const items = ITEMS;
let freeId = 22;

export function getMenuItems(req, res) {
    res.status(200).json(items);
}

export function addItem(req, res) {
    items[freeId] = req.item;
    freeId++;
    res.status(200).json(req.item);
}

export function updateItem(req, res) {
    const itemToUpdate = req.params.itemId;
    items[itemToUpdate] = req.body.item;
    res.status(200).json(items[itemToUpdate]);
}

export function createItemReview(req, res) {
    const review = req.body.review;
    const itemId = req.params.itemId;
    items[itemId].reviews.push(review);
    res.status(200).json(items[itemId]);
}