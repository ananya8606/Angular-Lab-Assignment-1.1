import { Mobile } from "./Mobile";
export class BasicPhone extends Mobile{
    mobileType:string;
    constructor(mobileId:number,mobileName:String,mobileCost:number,mobileType:string){
        super(mobileId,mobileName,mobileCost);
        this.mobileType=mobileType;
    }
    override printMobileDetail(){
        console.log(`mobileId   :${this.mobileId} , mobileName :${this.mobileName} , mobileCost :${this.mobileCost} , mobileType :${this.mobileType}`);
        return `mobileId   :${this.mobileId} , mobileName :${this.mobileName} , mobileCost :${this.mobileCost} , mobileType :${this.mobileType}`;
    }
}