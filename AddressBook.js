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

    get firstName() { return this._firstName; }
    set firstName(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(nameRegex.test(name))
            this._firstName = name;
        else throw 'First Name is incorrect';
    }
    get lastName() { return this._firstName; }
    set lastName(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(nameRegex.test(name))
            this._lastName = name;
        else throw 'Last Name is incorrect';
    }
    get address() { return this._address; }
    set address(address){
        let addressRegex = RegExp('^[A-Z][a-z]{4,}');
        if(addressRegex.test(_address))
            this._address=address;
        else
            throw 'Address incorrect';
    }
}