//import banks database
let banksdatabase = require('./database')

//Bank model
//constructor with object of 
class BankModel {
    constructor({name, location, branch, phone, address,
        accountNumber }){
        this.name = name;
        this.location = location;
        this.branch = branch;
        this.phone = phone;
        this.address = address;
        this.accountNumber = accountNumber;
    }
    //save method to save information to our database
    save(){
    //this - is all the instances in the constructor
        banksdatabase.push(this);return this;
    }
    static all(){
        return banksdatabase;
    }
    static update(updateInfo = {}){
        //find the bank and  update it
        banksdatabase= banksdatabase.map(bank =>{
            if(bank.name === updateInfo.name){
                return{...bank, ...updateInfo};
            }
            return bank;
        })
       
    }
    static delete({name}){
        let deletedBank = null;
        banksdatabase= banksdatabase.filter(bank => {
            console.log(bank.name === name)
            if(bank.name !==name){
                
                return true;
            }
            deletedBank= bank;
            return false;
        })
        return deletedBank
    }
}

module.exports = BankModel