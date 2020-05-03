import { Graphics, Container, Text } from 'pixi.js';

export class BtnContainer extends Container {
    constructor(app) {
        super(app);
        this.x = 50;
        this.y = 50;
        this.interactive = true;
        this.buttonMode = true;

        this.addChild(new Button('usual'), new Button('pressed'), new RunText('RUN'));
        this.on('pointerdown', () => this.pointerdown(app))
            .on('pointerup', () => this.pointerup(app))
    }

    pointerdown(app) {
        this.children[0].visible = false;
        this.children[1].visible = true;
        app.render();
    }

    pointerup(app) {
        this.children[0].visible = true;
        this.children[1].visible = false;
        app.render();
    }
}

class Button extends Graphics {
    constructor(type) {
        super();
        if(type === 'usual') {
            this.beginFill(0xFF0000, 0.5);
            this.drawRoundedRect(0, 0, 100, 100, 10);
            this.endFill();
            this.visible = true;
        } else if (type === 'pressed') {
            this.beginFill(0xFF0000, 1);
            this.drawRoundedRect(0, 0, 100, 100, 10);
            this.endFill();
            this.visible = false;
        }
    }
}

class RunText extends Text {
    constructor(text) {
        super(text);
        this.x = 50;
        this.y = 50;
        this.anchor.set(0.5, 0.5);
    }
}
