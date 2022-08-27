export class Mobile{
    mobileId:number;
    mobileName:String;
    mobileCost:number;
    constructor( mobileId:number,mobileName:String,mobileCost:number) {
        this.mobileId=mobileId;
        this.mobileName=mobileName;
        this.mobileCost=mobileCost;
      }
    printMobileDetail(){
        return `mobileId   :${this.mobileId} , mobileName :${this.mobileName} , mobileCost :${this.mobileCost}`;
    }
}