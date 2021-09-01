import "phaser"
import { Tilemaps } from "phaser"


export default class startScene extends Phaser.Scene {


    constructor(){
        super('start')
    }

    preload(){
        this.load.image('logo', "assets/logo.png")
  
    }

    create(){
        let exit = this.add.text(700 , 100 , "Exit", {font: "Press Start 2P"}).setInteractive()
        this.hoverOption(exit)
        this.add.text(100,550, "Created by Zachary Holland")
        this.add.image(400, 200, 'logo')
        this.loadMainMenu()
        
    }
   
    loadMainMenu(){
        let newGame = this.add.text(400 , 400 , "New Game", {font: "Press Start 2P"}).setInteractive()
        this.hoverOption(newGame)
        let config = this.add.text(400 , 450 , "Config", {font: "Press Start 2P"}).setInteractive()
        this.hoverOption(config)
    

        newGame.on("pointerdown", () => {
            this.scene.start("gameScene")
        })
       
        config.on("pointerdown", () => {
            this.loadConfigMenu()
            config.destroy()
            newGame.destroy()
        })

    }
    /**
     * Loads configuration menu options
     */
    loadConfigMenu(){
        let title  = this.add.text(400, 350, "CONFIGURATION", {fontSize: '50'})
        let option1 = this.add.text(400, 400, "PLACEHOLDER COFIG OPTION 1")
        let option2 = this.add.text(400, 450, "PLACEHOLDER COFIG OPTION 2")
        let back = this.add.text(400, 500, "BACK").setInteractive()
        this.hoverOption(back)

        back.on('pointerdown', () => {
            title.destroy()
            option1.destroy()
            option2.destroy()
            this.loadMainMenu()
            back.destroy()
        })
        

    }
    /**
     * Sets game object to have a color when hovered
     * @param textObject 
     */
    hoverOption(textObject){
        textObject.on("pointerover", () => {
            textObject.setColor("red")
        })
        textObject.on("pointerout", () => {
            textObject.setColor("white")
        })

    }


}
/*
Main Screen 
    - Start Game
    - High Score
    - Configa
    - Title
*/