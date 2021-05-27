"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profile = void 0;
const objection_1 = require("objection");
class Profile extends objection_1.Model {
    static get tableName() {
        return "profile";
    }
}
exports.Profile = Profile;
//# sourceMappingURL=Profile.js.map