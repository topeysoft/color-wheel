"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ColorWheel = (function () {
    function ColorWheel() {
        this.options = { radius: 80, centerRadius: 0 };
    }
    ColorWheel.prototype.drawWheel = function (canvas) {
        // canvas.style.minHeight = ((this.options.radius * 2) + 200) + '';
        // canvas.style.minWidth = ((this.options.radius * 2) + 100) + '';
        var ctx = canvas.getContext('2d');
        canvas.addEventListener('click', function (e) {
            console.log(e);
        });
        for (var i = 0; i < 360; i++) {
            var color = "hsl(" + i + ", 100%, 50%)";
            var rgbaColor = this.hslToRgba(color, 0.1);
            this.drawQuadrant(ctx, this.options.radius - 50, this.options.radius - 50, this.options.radius, i, i + 5, rgbaColor);
        }
    };
    ColorWheel.prototype.drawQuadrant = function (context, x, y, radius, startAngle, sweepAngle, fillColor, counterClockwise, lineColor, lineWidth) {
        if (counterClockwise === void 0) { counterClockwise = false; }
        context.beginPath();
        context.fillStyle = fillColor;
        context.arc(this.options.radius, this.options.radius, this.options.radius, this.toRadians(startAngle), this.toRadians(sweepAngle));
        context.lineTo(this.options.radius, this.options.radius);
        context.closePath();
        context.fill();
    };
    ColorWheel.prototype.hslToRgba = function (hslValue, alpha) {
        var span = document.createElement('span');
        span.style.color = hslValue;
        var rgbColor = span.style.color;
        var rgba = rgbColor;
        if (rgbColor.indexOf('a') == -1) {
            rgba = rgbColor.replace(')', ", " + alpha + ")").replace('rgb', 'rgba');
        }
        return rgba;
    };
    ColorWheel.prototype.toDegrees = function (angle) {
        return angle * (180 / Math.PI);
    };
    ColorWheel.prototype.toRadians = function (angle) {
        return angle * (Math.PI / 180);
    };
    ColorWheel.prototype.renderTo = function (selector) {
        var element = document.querySelector(selector);
        if (!element)
            return;
        console.log('HERE');
        var canvas = document.createElement('canvas');
        canvas.style.position = 'relative';
        element.appendChild(canvas);
        this.drawWheel(canvas);
    };
    ColorWheel.prototype.drawArc = function (ctx, xPos, yPos, radius, startAngle, endAngle, anticlockwise, lineColor, fillColor) {
        startAngle = startAngle * (Math.PI / 180);
        endAngle = endAngle * (Math.PI / 180);
        var radius = radius;
        ctx.strokeStyle = lineColor;
        ctx.fillStyle = fillColor;
        ctx.lineWidth = 8;
        ctx.beginPath();
        ctx.arc(xPos, yPos, radius, startAngle, endAngle, anticlockwise);
        ctx.fill();
        ctx.stroke();
    };
    return ColorWheel;
}());
exports.ColorWheel = ColorWheel;
