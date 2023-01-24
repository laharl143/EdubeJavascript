// Scenario
// Modify the Figure class from the previous task so that you can sort points and lines in the collection and automatically remove elements with the same values (e.g. lines composed of the same points).



class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.type = 'point';
    }
}

class Line {
    constructor(points) {
        this.points = points.map(p => new Point(p[0], p[1]));
        this.type = 'line';
    }
}

//Modified Figure class
class Figure {
    constructor() {
        this.elements = {
            points: [],
            lines: []
        };
    }

    addPoint(x, y) {
        let point = new Point(x, y);
        let found = this.elements.points.find(p => p.x === point.x && p.y === point.y);
        if (!found) {
            this.elements.points.push(point);
        }
    }

    addLine(points) {
        let line = new Line(points);
        let found = this.elements.lines.find(l => this.areLinesEqual(l, line));
        if (!found) {
            this.elements.lines.push(line);
        }
    }

    areLinesEqual(line1, line2) {
        if (line1.points.length !== line2.points.length) {
            return false;
        }
        for (let i = 0; i < line1.points.length; i++) {
            if (line1.points[i].x !== line2.points[i].x || line1.points[i].y !== line2.points[i].y) {
                return false;
            }
        }
        return true;
    }

    sortPoints(field) {
        if (field === 'x') {
            this.elements.points.sort((a, b) => a.x - b.x);
        } else if (field === 'y') {
            this.elements.points.sort((a, b) => a.y - b.y);
        }
    }

    sortLines(field) {
        if (field === 'x') {
            this.elements.lines.sort((a, b) => a.points[0].x - b.points[0].x);
        } else if (field === 'y') {
            this.elements.lines.sort((a, b) => a.points[0].y - b.points[0].y);
        }
    }

    toJSON() {
        return JSON.stringify(this.elements);
    }

    fromJSON(json, append) {
        let data = JSON.parse(json);
        if (!append) {
            this.elements.points = data.points;
            this.elements.lines = data.lines;
        } else {
            this.elements.points = this.elements.points.concat(data.points);
            this.elements.lines = this.elements.lines.concat(data.lines);
        }
    }

    deleteAll() {
        this.elements.points = [];
        this.elements.lines = [];
    }
}

//Test Script:
let f = new Figure();
f.addPoint(10,20);
f.addPoint(10,10);
f.addLine([[10,20], [30,40], [50,60]]);
let json = f.toJSON();
console.log(json);
f.fromJSON(json, true);
console.log(f.elements.points.length);
console.log(f.elements.lines.length);
f.fromJSON('{"points":[{"type":"point","x":10,"y":20},{"type":"point","x":10,"y":30},{"type":"point","x":10,"y":-30},{"type":"point","x":10,"y":20},{"type":"point","x":20,"y":20},{"type":"point","x":30,"y":20},{"type":"point","x":130,"y":20},{"type":"point","x":30,"y":20},{"type":"point","x":0,"y":20},{"type":"point","x":0,"y":-20},{"type":"point","x":0,"y":20}],"lines":[{"type":"line","points":[{"x":0,"y":0},{"x":10,"y":0},{"x":0,"y":10},{"x":20,"y":0},{"x":0,"y":20}]},{"type":"line","points":[{"x":30,"y":0},{"x":10,"y":0},{"x":0,"y":10},{"x":20,"y":0},{"x":0,"y":20}]},{"type":"line","points":[{"x":30,"y":0},{"x":10,"y":-10},{"x":0,"y":10},{"x":20,"y":0},{"x":0,"y":20}]},{"type":"line","points":[{"x":0,"y":0},{"x":10,"y":0},{"x":0,"y":10},{"x":20,"y":0},{"x":0,"y":20}]}]}');
console.log(f.elements.points.length);
console.log(f.elements.lines.length);
