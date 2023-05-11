class Production_intro extends Phaser.Scene{
    constructor() {
        super('Production_intro');
    }

    preload(){
        this.load.path = './assets/';
        this.load.image('sn', 'Studio.png');
        this.load.image('star', 'Star.png');
        this.load.audio('ptheme', 'intro.mp3');
    }


    create() {

        //create image object 
        let prod = this.add.image(
            400,//x
            250,//y
            'sn',//imagename
        )
        prod.setScale(0.8) //resize

        //create image object 
        let star1 = this.add.image(
            0,//x
            100,//y
            'star',//imagename
        )
        star1.setScale(0.1) //resize

        let star2 = this.add.image(
            0,//x
            100,//y
            'star',//imagename
        )
        star2.setScale(0.1) //resize

        let theme = this.sound.add(
         "ptheme",
        );
        theme.play();

        this.tweens.add({
            targets: prod,
            alpha: {start: 0, to: 1},
            duration: 7000,
            //ease: "Sine",
            //repeat: -1
         });


         this.tweens.add({
            targets: star1,
            x:271,
            y:230,
            duration: 4000,
            ease: 'Linear',
            //repeat: -1,
        });


        this.tweens.add({
            targets: star2,
            x:544,
            y:230,
            duration: 4000,
            ease: 'Linear',
            //repeat: -1,
        });


        this.tweens.add({
            targets: [star1, star2],
            scale: {start: 0.1, to: 14},
            delay: 7000,
            duration: 4000,
            //ease: "Sine",
            //repeat: -1
         });


         this.tweens.add({
            targets: prod,
            delay: 7000,
            alpha: {start: 0, to: 1, to : 0},
            duration: 2000,
            //ease: "Sine",
            //repeat: -1
         });

         this.tweens.add({
            targets: [star1, star2],
            delay: 9000,
            alpha: {from: 1, to: 0},
            duration: 3000,
            ease: "Sine",
            //repeat: -1
         });

        

        this.time.delayedCall(8000, () => {
            this.cameras.main.fadeOut(2000, 0,0,0);
        });
        //this.input.on('pointerdown', () => theme.stop);
        this.input.on('pointerdown', () => this.scene.start('Story'));
    }


}




class Loadingscrn extends Phaser.Scene {

    constructor() {
        super('Story');
    }

    preload(){
        this.load.path = './assets/';
        //this.load.image('gtb', 'Good-to-Bad-Background.jpg');
        this.load.image('night', '25039-5-star.png');
    }

    create(){

        let load = this.add.text(125, 580
            ,
            "Loading",
            {
               font: "45px Garamond",
               color: "#fcfcfc"
            }
         );
         load.setOrigin(0.5);

         this.add.tween({   //loading getting started up
            targets: load,
            alpha: {start: 0, to:1},
            duration: 1000,
         });



         let w1 = this.add.circle(175, 580, 5, 0xffffff);
         let w2 = this.add.circle(200, 580, 5, 0xffffff);
         let w3 = this.add.circle(225, 580, 5, 0xffffff);
         
         this.add.tween({
            targets: w1,
            alpha: {start: 0, to:1},
            delay: 500,
            duration: 1000,
         });
         this.add.tween({
            targets: w2,
            alpha: {start: 0, to:1},
            delay: 1000,
            duration: 1000,
         });
         this.add.tween({
            targets: w3,
            alpha: {start: 0, to:1},
            delay: 2000,
            duration: 1000,
         });
         this.add.tween({
            targets: w1,
            alpha: {start: 0, to:1, to: 0},
            delay: 3000,
            duration: 1000,
         });
         this.add.tween({
            targets: w2,
            alpha: {start: 0, to:1, to: 0},
            delay: 4000,
            duration: 1000,
         });
         this.add.tween({
            targets: w3,
            alpha: {start: 0, to:1, to: 0},
            delay: 5000,
            duration: 1000,
         });
         this.add.tween({
            targets: w1,
            alpha: {start: 0, to:1},
            delay:6000,
            duration: 1000,
         });
         this.add.tween({
            targets: w2,
            alpha: {start: 0, to:1},
            delay: 7000,
            duration: 1000,
         });
         this.add.tween({
            targets: w3,
            alpha: {start: 0, to:1},
            delay: 8000,
            duration: 1000,
         });

         this.add.tween({
            targets: w1,
            alpha: {start: 0, to:1, to: 0},
            delay: 9000,
            duration: 1000,
         });
         this.add.tween({
            targets: w2,
            alpha: {start: 0, to:1, to: 0},
            delay: 10000,
            duration: 1000,
         });

         this.add.tween({
            targets: [load, w3],
            alpha: {start: 0, to:1, to: 0},
            delay: 11000,
            duration: 1000,
         });

        //  this.time.delayedCall(11000, () => {
        //     this.cameras.main.fadeOut(2000, 0,0,0);
        // });

        let sky = this.add.image(775, 300
            ,
            "night",
         );
         load.setOrigin(0.8);


        let strt = this.add.text(170, 100
            ,
            "Our story begins in a galaxy...",
            {
               font: "25px Garamond",
               color: "#fcfcfc",
               align: "centered"
            }
         );
         strt.setOrigin(0.5);

         this.add.tween({
            targets: sky,
            alpha: {start: 0, to:1},
            delay: 10000,
            duration: 15000,
         });

         let f1 = this.add.text(220, 150
            ,
            "\n\tfar",
            {
               font: "25px Garamond",
               color: "#fcfcfc",
               align: "centered"
            }
         );
         f1.setOrigin(0.5);
         

         let f2 = this.add.text(270, 200
            ,
            "\n\tfar",
            {
               font: "25px Garamond",
               color: "#fcfcfc",
               align: "centered"
            }
         );
         f2.setOrigin(0.5);

         let f3 = this.add.text(320, 250
            ,
            "\n\tfar away..",
            {
               font: "25px Garamond",
               color: "#fcfcfc",
               align: "centered"
            }
         );
         f3.setOrigin(0.5);

         let end = this.add.text(380, 300
            ,
            "\n\ton a once peaceful and harmonious world.",
            {
               font: "25px Garamond",
               color: "#fcfcfc",
               align: "centered"
            }
         );
         end.setOrigin(0.5);

         this.add.tween({
            targets: strt,
            alpha: {start: 0, to:1},
            delay: 13000,
            duration: 7000,
         });
         this.add.tween({
            targets: f1,
            alpha: {start: 0, to:1},
            delay: 15000,
            duration: 7000,
         });
         this.add.tween({
            targets: f2,
            alpha: {start: 0, to:1},
            delay: 17000,
            duration: 7000,
         });
         this.add.tween({
            targets: f3,
            alpha: {start: 0, to:1},
            delay: 19000,
            duration: 7000,
         });
         this.add.tween({
            targets: end,
            alpha: {start: 0, to:1},
            delay: 21000,
            duration: 7000,
         });


         let next = this.add.text(500, 555,
            "Click to continue",
            {
               font: "25px Garamond",
               color: "#fcfcfc",
               align: "center",
               scale: 0.9
            }
         );
         next.setOrigin(0.5);


         this.add.tween({
            targets: next,
            alpha: {start: 0.1, to:1},
            delay: 24000,
            duration: 2000,
            yoyo: true,
            ease: "Sine",
            repeat: -1,
            scale: {start: 0.3, to: 0.7}
         });


         this.time.delayedCall(35000, () => {
            this.cameras.main.fadeOut(2000, 0,0,0);
            this.scene.start("Menu");
        });
         

         this.input.on('pointerdown', () => this.scene.start('menu'));

    }



}

class Menu extends Phaser.Scene {

   constructor() {
      super('menu');
   }

   preload(){
      this.load.path = './assets/';
      this.load.image('gtb', 'Good-to-Bad-Background.jpg');
      this.load.audio('menutheme', 'menu music.mp3');
   }

   create(){
      let mainu = this.add.image(
         800, 
         300,
         "gtb",
      )
      mainu.setScale(0.4)

      let theme = this.sound.add(
         "menutheme",
        );
        theme.play();

      this.tweens.add({
         targets: mainu,
         x:400,
         y:300,
         //scale: 0.1,
         duration: 15000,
         ease: 'Linear',
         //repeat: -1,
     });

     let prompt = this.add.text(
      280, 70,
      "Fallen into chaos, its up to you to restore order and peace once again.",
      {
         font: "20px Garamond",
         color: "#fcfcfc",
         align: "center",
         //scale: 0.4
      }
   );
   prompt.setOrigin(0.5);

   this.add.tween({
      targets: prompt,
      // x: 50,
      // y: 100,
      alpha: {start: 1, to: 0},
      duration: 10000
   })

   let title = this.add.text(
      400, 
      50,
      "Eternal Guardian",
      {
         font: "70px Garamond",
         color: "#fccc9c",
         align: "center",
      }
   );
   title.setOrigin(0.5);

   this.add.tween({
      targets: title,
      // x: 50,
      // y: 100,
      alpha: {start: 0, to: 1},
      delay: 14000,
      duration: 7000
   })

   let play = this.add.text(
      400, 
      250,
      "Play",
      {
         font: "50px Garamond",
         color: "#fccc9c",
         align: "center",
      }
   );
   play.setOrigin(0.5);
   

   this.add.tween({
      targets: play,
      // x: 50,
      // y: 100,
      alpha: {start: 0, to: 1},
      delay: 15000,
      duration: 7000
   })


   }
   update(){}


}




let config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: 0x000000,
    scene: [Production_intro, Loadingscrn, Menu],
    // audio: {
    //     disableWebAudio: true
    // }
}





let game = new Phaser.Game(config);