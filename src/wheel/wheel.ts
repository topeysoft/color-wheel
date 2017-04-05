export class ColorWheel {
    options: any = { radius: 80, centerRadius: 0 };

    private drawWheel(canvas: HTMLCanvasElement) {
        // canvas.style.minHeight = ((this.options.radius * 2) + 200) + '';
        // canvas.style.minWidth = ((this.options.radius * 2) + 100) + '';
        var ctx = canvas.getContext('2d');
        canvas.addEventListener('click', (e) => {
            var pos = this.findPos(canvas);
            var x = e.pageX - pos.x;
            var y = e.pageY - pos.y;
            var p = ctx.getImageData(e.pageY, y, 1, 1).data;
            console.log(p);
        })
        for (var i = 0; i < 360; i++) {
            var color = `hsl(${i}, 100%, 50%)`;
            var rgbaColor = this.hslToRgba(color, 0.1);
            this.drawQuadrant(ctx, this.options.radius - 50, this.options.radius - 50, this.options.radius, i, i + 5, rgbaColor);
        }
    }

    private findPos(obj) {
        var curleft = 0, curtop = 0; 
        if (obj.offsetParent) {
            do {
                curleft += obj.offsetLeft;
                curtop += obj.offsetTop;
            } while (obj = obj.offsetParent);
            return { x: curleft, y: curtop };
        }
        return undefined;
    }

    private rgbToHex(r, g, b) {
        if (r > 255 || g > 255 || b > 255)
            throw "Invalid color component";
        return ((r << 16) | (g << 8) | b).toString(16);
    }
    private drawQuadrant(context, x, y, radius, startAngle, sweepAngle, fillColor, counterClockwise = false, lineColor?, lineWidth?) {
        context.beginPath();
        context.fillStyle = fillColor;
        context.arc(this.options.radius, this.options.radius, this.options.radius, this.toRadians(startAngle), this.toRadians(sweepAngle));
        context.lineTo(this.options.radius, this.options.radius);
        context.closePath();
        context.fill();
    }
    private hslToRgba(hslValue, alpha) {
        var span = document.createElement('span');
        span.style.color = hslValue;
        var rgbColor = span.style.color;
        var rgba = rgbColor;
        if (rgbColor.indexOf('a') == -1) {
            rgba = rgbColor.replace(')', `, ${alpha})`).replace('rgb', 'rgba');
        }
        return rgba;
    }

    private toDegrees(angle) {
        return angle * (180 / Math.PI);
    }

    private toRadians(angle) {
        return angle * (Math.PI / 180);
    }
    renderTo(selector) {
        var element: HTMLElement = document.querySelector(selector);
        if (!element) return;
        console.log('HERE')
        var canvas = document.createElement('canvas');
        canvas.style.position = 'relative';
        element.appendChild(canvas);
        this.drawWheel(canvas);
    }

    drawArc(ctx, xPos, yPos,
        radius,
        startAngle, endAngle,
        anticlockwise,
        lineColor, fillColor) {
        startAngle = startAngle * (Math.PI / 180);
        endAngle = endAngle * (Math.PI / 180);

        var radius = radius;

        ctx.strokeStyle = lineColor;
        ctx.fillStyle = fillColor;
        ctx.lineWidth = 8;

        ctx.beginPath();
        ctx.arc(xPos, yPos,
            radius,
            startAngle, endAngle,
            anticlockwise);
        ctx.fill();
        ctx.stroke();
    }
}