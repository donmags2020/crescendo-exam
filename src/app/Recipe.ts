export class Recipe 
{
    
    uuid?: number;
    title:string | undefined;
    description: string | undefined;
    images: string | undefined;
    servings:string | undefined;
    prepTime:string | undefined;
    cookTime: string | undefined;
    full:string | undefined;

    constructor(_uuid: any,_title: any,_images:any,_full:any) {
        this.uuid;
        this.title;
        this.images;
        this.servings;
        this.prepTime;
        this.cookTime;
        this.full;
        
    }

}