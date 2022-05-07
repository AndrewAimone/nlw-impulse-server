"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodemailerMailAdapter = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const transport = nodemailer_1.default.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "c2c403c77f65fe",
        pass: "d1a61f76f2169c"
    }
});
class NodemailerMailAdapter {
    async sendMail({ subject, body }) {
        await transport.sendMail({
            from: 'Team Ghost <dev@ghost.org>',
            to: 'Andrew Aimone <andrewaimone.info@gmail.com>',
            subject: 'New Feedback',
            html: body,
        });
    }
}
exports.NodemailerMailAdapter = NodemailerMailAdapter;
