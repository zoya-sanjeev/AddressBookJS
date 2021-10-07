class Contact{
    firstName;
    lastName;
    address;
    city;
    state;
    zipCode;
    phoneNumber;
    email;
    
    constructor(... params){
    this.firstName = params[0];
    this.lastName = params[1];
    this.address = params[2];
    this.city = params[3];
    this.state = params[4];
    this.zipCode = params[5];
    this.phoneNumber = params[6];
    this.email = params[7];
    }
}