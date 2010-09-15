/**
 * @depends App.js
 * @depends Buffer.js
 */

var Mesh = new Class({
    initialize: function(numVertices, drawMode, vertexUsage, colorUsage,
                         normalUsage) {
        this.numVertices = numVertices;
        this.drawMode = drawMode;
        this.vertexUsage = vertexUsage;
        this.colorUsage = colorUsage;
        this.normalUsage = normalUsage;

        this.vertexBuffer = new Buffer(numVertices, 3, this.vertexUsage);
        this.normalBuffer = new Buffer(numVertices, 3, this.normalUsage);
        this.colorBuffer = new Buffer(numVertices, 4, this.colorUsage);

        this.position = [0, 0, 0];
        this.rotation = quat4.create();
        this.scale = [1, 1, 1];
    }
});

