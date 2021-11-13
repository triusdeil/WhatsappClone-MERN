import { Router } from "express";
import { getMessage, getMessages, sendMessage } from "../controllers/messages";
const router = Router();

/**
 * @swagger
 * /tags:
 *  name: Messages
 *  description: Messages Endpoint
 */

/**
 * @swagger
 * /:
 *  get:
 *    summary: get all Messages
 *    tags: [Messages]
 */
router.get("/", getMessages);

/**
 * @swagger
 * /id:
 *  get:
 *    summary: get Message
 *    tags: [Messages]
 */
router.get("/api/v1/message/:id", getMessage);

/**
 * @swagger
 * /:
 *  post:
 *    summary: post Messages
 *    tags: [Messages]
 */
router.post("/message/new", sendMessage);

export default router;
