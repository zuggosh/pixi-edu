import { Application, Graphics } from 'pixi.js';

export default class extends Graphics {
    constructor(app) {
        super();
        this.beginFill(0x0000, 0.5);
        this.drawRoundedRect(0, 0, 100, 100, 10)
        this.endFill()
        // this.beginFill(0xff0000);
        this.interactive = true;
        this.buttonMode = true;

        this.on('click', () => {
            this.clickEvent(app);
        })
    }

    clickEvent(app) {
        console.log(this);
        this.beginFill(0xFF0000);
        app.render();
    }

}
