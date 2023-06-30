//import banksmodel
const BankModel= require('./banksmodel')

//routes - controller
const listBankController = (req,res) =>{
    //list all banks - method to fetch data from bankdatabase
    //we are not creating a new bank method but fetching from existing

    const banks = BankModel.all();
    res.json({data: banks})
}
 
const createBankController = (req,res) =>{
    //create a bank - in here extract data from body
    // .body is supplied by body parser middleware
    const {name, location, branch, phone, address,
        accountNumber} = req.body;
    const bank = new BankModel({name, location, branch, phone, address,
        accountNumber});
    bank.save();
    res.json({message: 'create successful', data: bank})


}
// const updateBankController = (req,res) =>{
    //comment- update  a bank details
    // const {name, location, branch, phone, address,
    //     accountNumber}  = req.body;
    // const updatedBank = new BankModel({name, location, branch, phone, address,
    //     accountNumber})
    // res.json({message: 'update complete', data: updatedBank})
    // updatedBank.save();
    // res.json({ message: 'update complete', data: updatedBank})
// }
// important-  displays the updateddatabase

const updateBankController = (req,res) =>{
    //update  a bank details
    const {name, location, branch, phone, address,
        accountNumber}  = req.body;
    const updatedBank =  BankModel.update({name, location, branch, phone, address,
        accountNumber})
    res.json({message: 'update complete', data: updatedBank})
    // displays message - update complete
}


const deleteaBankController = (req,res) =>{
    //delete
    const {name} = req.body;
    //call static method and pass *name* to it
    const deletedBank = BankModel.delete({name});
    res.json({message: 'bank deleted', data: deletedBank});
}


module.exports = {
    listBankController,
    createBankController,
    updateBankController,
    deleteaBankController
}