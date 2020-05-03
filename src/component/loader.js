import {Sprite} from "pixi.js";
// import {BtnContainer} from "./button";
//
// export const initLoader = (app) => {
//     // переместить лоудер отдельно
//     app.loader.baseUrl = 'assets';
//     app.loader.add('background', 'space.png');
//
//     app.loader.onProgress.add((e)=>{
//         // console.log(e.progress);
//     });
//     app.loader.onError.add(e=>{
//         // console.log('error: '+ e);
//     });
//
//     app.loader.onComplete.add(e=> {
//         const background = new Sprite.from(app.loader.resources.background.texture);
//         background.x = app.view.width / 2;
//         background.y = app.view.height / 2;
//         background.anchor.set(0.5);
//         app.stage.addChild(background);
//         app.render();
//     });
//     app.loader.load();
// };
