var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Account = /** @class */ (function () {
    function Account(Acc_no, balance) {
        if (Acc_no === void 0) { Acc_no = ""; }
        if (balance === void 0) { balance = 0; }
        this.Acc_no = Acc_no;
        this.balance = balance;
        //
    }
    Object.defineProperty(Account.prototype, "Balance", {
        get: function () {
            return this.Balance;
        },
        enumerable: false,
        configurable: true
    });
    Account.prototype.debitAmount = function () {
        //
    };
    Account.prototype.creditAmount = function () {
        //
    };
    return Account;
}());
var Saving_Account = /** @class */ (function (_super) {
    __extends(Saving_Account, _super);
    function Saving_Account(Acc_no, Balance, Min_balance, Date_of_opening) {
        if (Acc_no === void 0) { Acc_no = ""; }
        if (Balance === void 0) { Balance = 0; }
        if (Min_balance === void 0) { Min_balance = 0; }
        var _this = _super.call(this, Acc_no, Balance) || this;
        _this.Min_balance = Min_balance;
        _this.Date_of_opening = Date_of_opening;
        return _this;
    }
    Saving_Account.prototype.addCustomer = function () {
        //
    };
    ;
    Saving_Account.prototype.removeCustomer = function () {
        //
    };
    ;
    return Saving_Account;
}(Account));
var Current_Account = /** @class */ (function (_super) {
    __extends(Current_Account, _super);
    function Current_Account(Acc_no, Balance, Interest_rate, Date_of_opening) {
        if (Acc_no === void 0) { Acc_no = ""; }
        if (Balance === void 0) { Balance = 0; }
        if (Interest_rate === void 0) { Interest_rate = 0; }
        var _this = _super.call(this, Acc_no, Balance) || this;
        _this.Interest_rate = Interest_rate;
        _this.Date_of_opening = Date_of_opening;
        return _this;
    }
    Current_Account.prototype.addCustomer = function () {
        //
    };
    ;
    Current_Account.prototype.removeCustomer = function () {
        //
    };
    ;
    return Current_Account;
}(Account));
