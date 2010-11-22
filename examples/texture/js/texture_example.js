window.addEvent("domready", function() {
    var TextureExample = new Class({
        Extends: App,
        initialize: function(element, options) {
            App.prototype.initialize.apply(this, [element, options]);
            this.texture = new Texture(163, 75);
            this.texture.load("WebGL_logo.png");
            
            // For rendering the texture to the screen
            this.texRenderer = new BasicRenderer('texture-vert',
                                                 'texture-frag');

            this.orthoMatrices = new TransformationMatrices();
            mat4.ortho(0, this.options.width, this.options.height, 0, -1, 1,
                       this.orthoMatrices.projection.matrix);

            this.textureMesh = new RectMesh(163, 75, gl.STATIC_DRAW, null,
                                            null, gl.STATIC_DRAW);
        },

        draw: function() {
            this.clear([1, 1, 1, 1]);
            this.texture.begin();
            this.texRenderer.render([this.textureMesh], this.orthoMatrices);
            this.texture.end();
        }
    });

    window.app = new TextureExample(document.body);
    window.app.run();
});
