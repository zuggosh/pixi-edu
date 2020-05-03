import { Application, Sprite } from 'pixi.js';
import sound from 'pixi-sound';
import { BtnContainer } from './component/button'

const app = new Application({
    backgroundColor: 0x999999,
    width: 1200,
    height: 600,
    autoStart: false
});
document.body.appendChild(app.view);

// переместить лоудер отдельно
app.loader.baseUrl = 'assets';
app.loader.add('background', 'space.png');

app.loader.onProgress.add((e)=>{
    // console.log(e.progress);
});
app.loader.onError.add(e=>{
    // console.log('error: '+ e);
});

app.loader.onComplete.add(e=> {
    const background = new Sprite.from(app.loader.resources.background.texture);
    background.x = app.view.width / 2;
    background.y = app.view.height / 2;
    background.anchor.set(0.5);
    app.stage.addChild(background, new BtnContainer(app));
    app.render();
});
app.loader.load();

app.render();

