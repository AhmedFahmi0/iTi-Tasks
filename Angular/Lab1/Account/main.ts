abstract class Account{
    constructor(public Acc_no="",public balance=0){
        //
    }
    get Balance(){
        return this.Balance;
    }

    debitAmount(){
        //
    }
    creditAmount(){
        //
    }
}

interface IAccount{
    Date_of_opening:string;
    addCustomer();
    removeCustomer();
}   

class Saving_Account extends Account implements IAccount{
    constructor(Acc_no="",Balance=0,public Min_balance=0,public Date_of_opening:string){
        super(Acc_no,Balance)
    }
    addCustomer(){
        //
    };
    removeCustomer(){
        //
    };
    
}
class Current_Account extends Account implements IAccount{
    constructor(Acc_no="",Balance=0,public Interest_rate=0,public Date_of_opening:string){
        super(Acc_no,Balance)
    }
    addCustomer(){
        //
    };
    removeCustomer(){
        //
    };
    
}

