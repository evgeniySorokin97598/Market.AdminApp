import { Charastitic } from "../Entities/Product";

export class AddCharecteristicsRequest
{
    public productId:number = 0;
    public name:string = "";
    public charastitics: Charastitic [] =  [];
    public removeId:number[] = [];
}