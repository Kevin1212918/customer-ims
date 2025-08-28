class Customer {
    constructor({
        id, 
        name, 
        email, 
        phone = null, 
        address = null, 
        createdAt = new Date(), 
        updatedAt = new Date() 
    }) {
        this.id = id;             
        this.name = name;         
        this.email = email;       
        this.phone = phone;       
        this.address = address;   
        this.createdAt = createdAt; 
        this.updatedAt = updatedAt; 
    }
}

module.exports = Customer;
  