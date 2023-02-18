const Person={
    init(fullName,money,sleepMood,healthRate){
        this.fullName=fullName;
        this.money=money;
        this.sleepMood=sleepMood;
        this.healthRate=healthRate;
        return this;
    },
    
    Sleep(hours){if(hours==7) {this.sleepMood="happy";console.log(`Im ${this.sleepMood}`)}
    else if(hours<7) {this.sleepMood="tired";console.log(`Im ${this.sleepMood}`)}
    else if(hours>7) {this.sleepMood="lazy";console.log(`Im ${this.sleepMood}`)};},
    
    Eat(meals){if(meals==3) {this.healthRate="100";console.log(`My health rate is ${this.healthRate}`)}
    else if(meals==2) {this.healthRate="75";console.log(`My health rate is ${this.healthRate}`)}
    else if(meals==1) {this.healthRate="50";console.log(`My health rate is ${this.healthRate}`)};},
    
    Buy(NofItems) {this.money-=NofItems*10;console.log(`money= is ${this.money}`);}
    
    }
    
    
    
    
    
    const ahmed = Object.create(Person).init('ahmed fahmi',500,"tired",78);
    
    ahmed.Sleep(7);
    ahmed.Sleep(8);
    ahmed.Sleep(4);
    
    ahmed.Eat(3);
    ahmed.Eat(2);
    ahmed.Eat(1);
    
    ahmed.Buy(5);
    
    
    