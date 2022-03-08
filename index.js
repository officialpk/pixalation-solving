

const fs = require('fs')
const { createCanvas, loadImage } = require('Canvas')

const sizeOf = require('image-size')
var shop_picture = './WhatsApp Image 2022-03-08 at 2.17.48 PM.jpeg'
var diamentions = sizeOf(shop_picture)



var empty_templates = {
    'Fresh Fruits And Vegetables' : 'https://categoryvisitingcards.s3.ap-south-1.amazonaws.com/FreshFruitsAndVegetables.png',
    'Groceries Kirana': 'https://categoryvisitingcards.s3.ap-south-1.amazonaws.com/Groceries+-+Kirana.png',
    'Restaurant' : 'https://categoryvisitingcards.s3.ap-south-1.amazonaws.com/Restaurant.png'
}

var category_choice = "Groceries Kirana"

const cv = async ()=>{
    const w = 1200, h = 630;
    const canvas = createCanvas(w, h)
    const context = canvas.getContext('2d')

    context.fillStyle = '#000'
    context.fillRect(0, 0, w, h)

    const category_template = await loadImage(empty_templates[category_choice]) 
    context.drawImage(category_template, 0, 0 , w, h)


    const shop_image = await loadImage(shop_picture)
    // context.imageSmoothingEnabled = false
    // context.drawImage(shop_image, 100, 130, (diamentions.width/4)* 0.5, (diamentions.height/4)*0.5);
    // console.log(diamentions.width* 0.8, diamentions.height*0.8);
    


        context.rect(80, 130, 470, 410);
        context.clip();
        context.drawImage(shop_image, 100, 100, diamentions.width*0.8, diamentions.height*0.8, 
            110, 130, 470, 410)
        // context.drawImage(shop_image, 0, 0);



    const buffer = canvas.toBuffer('image/png')
    fs.writeFileSync('./output-visiting-card.png', buffer)  
}


cv(shop_picture)



