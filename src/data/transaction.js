class Transaction {
    constructor(date="5/5/2020",label="default",amount=0,category="none",description="") {
        this.date = date 
        this.label = label 
        this.amount = amount 
        this.category = category 
        this.description = description 

    }
}

export default Transaction;