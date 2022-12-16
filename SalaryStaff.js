"use strict";
exports.__esModule = true;
exports.SalaryStaff = void 0;
var Node_1 = require("./Node");
var SalaryStaff = /** @class */ (function () {
    function SalaryStaff() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    SalaryStaff.prototype.addFirst = function (month, money) {
        var node = new Node_1.Node(month, money);
        node.next = this.head;
        this.head = node;
        if (!this.tail) {
            this.tail = node;
        }
        this.size++;
    };
    SalaryStaff.prototype.addLast = function (month, money) {
        var node = new Node_1.Node(month, money);
        if (!this.head) {
            this.addFirst(month, money);
        }
        else {
            this.tail.next = node;
            this.tail = node;
            this.size++;
        }
    };
    SalaryStaff.prototype.displayNode = function () {
        var currentData = this.head;
        var result = [];
        while (currentData != null) {
            result.push([currentData.month, currentData.money]);
            currentData = currentData.next;
        }
        return result;
    };
    SalaryStaff.prototype.totalSalary = function () {
        var sum = 0;
        var currentData = this.head;
        while (currentData != null) {
            sum += currentData.money;
            currentData = currentData.next;
        }
        return sum;
    };
    SalaryStaff.prototype.MaxMonthSalary = function () {
        var currentData = this.head;
        var MaxSalary = this.head.money;
        var result = [];
        while (currentData != null) {
            if (currentData.money > MaxSalary) {
                MaxSalary = currentData.money;
                result.push([currentData.month, currentData.money]);
            }
            currentData = currentData.next;
        }
        return result;
    };
    return SalaryStaff;
}());
exports.SalaryStaff = SalaryStaff;
