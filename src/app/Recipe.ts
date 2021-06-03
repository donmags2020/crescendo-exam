export class Recipe 
{
    
    uuid?: number;
    title:string | undefined;
    description: string | undefined;
    images: Blob | undefined;
    servings:string | undefined;
    prepTime:string | undefined;
    cookTime: string | undefined;

    constructor(_uuid: any,_title: any) {
        this.uuid;
        this.title;
        this.images;
    }

}