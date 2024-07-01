class Video{
    private _producer: string = '';
    
     constructor(public title: string, private year: number){
         console.log("Creating a new video....");        
     }
 
     printItm(): void{
         console.log(`${this.title} was released in ${this.year}.`);
         if(this.Producer !== ''){
             console.log(`The producer is ${this.Producer}`);
         }        
     }
 
     get Producer(): string{
         return this._producer.toUpperCase();
     }
 
     set Producer(name: string){
         this._producer = name;
     }
 }
 
 class Popular extends Video {
     constructor(title: string, year: number, public subject: string){
         super(title, year);
     }
 
     printItm(): void {
         super.printItm();
         console.log(`The subject is ${this.subject}`);
     }
 }
 
 let popularVideo = new Popular("Sathiya", 2008, "Romantic song");
 popularVideo.printItm();