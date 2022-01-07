import { Pipe, PipeTransform } from "@angular/core";
import { Heroe } from "../interfaces/heroes.interface";

@Pipe({
    name: 'imagen'
})
export class ImagenesPipe implements PipeTransform{
    transform( heroe:Heroe): string {
        // console.log('Pipe imagen se proceso');
        if(!heroe.id && !heroe.alt_image){
            return (`assets/no-image.png`);
        }else if(heroe.alt_image){
            return heroe.alt_image;
        }else{
            return (`assets/heroes/${heroe.id}.jpg`);
        }
    }
}