"use strict";
exports.__esModule = true;
var cardMin_1 = require("./cardMin");
var HandMin = /** @class */ (function () {
    function HandMin(hand) {
        var _this = this;
        this.playerID = hand.playerID;
        this.cardMins = [];
        hand.cards.forEach(function (card) {
            if (card.base64 == false) {
                _this.cardMins.push(new cardMin_1["default"](card));
            }
        });
    }
    return HandMin;
}());
exports["default"] = HandMin;
