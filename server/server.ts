
import * as express from 'express';
import {Application} from "express";
import {readAllLessons} from "./read-all-lessons.route";
import {addPushSubscriber} from "./add-push-subscriber.route";
import {sendNewsletter} from "./send-newsletter.route";
import {validateUser} from "./validate-user.route";
import {getUserOrders, getOrderById, createOrderReview} from "./user-orders.route";
import {getMenuItems, addItem, updateItem, createItemReview} from "./menu-items.route";
const bodyParser = require('body-parser');

const webpush = require('web-push');

const vapidKeys = {
    "publicKey":"BLnVk1MBGFBW4UxL44fuoM2xxQ4o9CuxocVzKn9UVmnXZEyPCTEFjI4sALMB8qN5ee67yZ6MeQWjd5iyS8lINAg",
    "privateKey":"mp5xYHWtRTyCA63nZMvmJ_qmYO6A1klSotcoppSx-MI"
};


webpush.setVapidDetails(
    'mailto:example@yourdomain.org',
    vapidKeys.publicKey,
    vapidKeys.privateKey
);




const app: Application = express();


app.use(bodyParser.json());


// REST API
app.route('/api/lessons')
    .get(readAllLessons);

app.route('/api/notifications')
    .post(addPushSubscriber);

app.route('/api/newsletter')
    .post(sendNewsletter);

app.route('/api/login')
    .post(validateUser);

app.route('/api/user/:userId/orders')
    .get(getUserOrders);

app.route('/api/user/:userId/order/:orderId')
    .get(getOrderById);

app.route('/api/menu')
    .get(getMenuItems);

app.route('/api/item')
    .post(addItem);

app.route('/api/item/:itemId')
    .put(updateItem);

app.route('/api/item/:itemId/review')
    .put(createItemReview);

app.route('/api/order/:orderId/review')
    .put(createOrderReview);

// launch an HTTP Server
const httpServer = app.listen(9000, () => {
    console.log("HTTP Server running at http://localhost:" + httpServer.address().port);
});









