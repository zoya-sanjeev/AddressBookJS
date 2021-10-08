class Contact{
   
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
        if(addressRegex.test(address))
            this._address=address;
        else
            throw 'Address incorrect';
    }
    get city() { return this._city; }
    set city(city){
        let cityRegex = RegExp('^[A-Z][a-z]{4,}');
        if(cityRegex.test(city))
            this._city=city;
        else
            throw 'City incorrect';
    }
    get state() { return this._state; }
    set state(state){
        let stateRegex = RegExp('^[A-Z][a-z]{4,}');
        if(stateRegex.test(state))
            this._state=state;
        else
            throw 'State incorrect';
    }
    get zipCode(){ return this._zipCode; }
    set zipCode(zipCode){
        let zipCodeRegex = RegExp('^[0-9]{3}\\s{0,1}[0-9]{3}$');
        if(zipCodeRegex.test(zipCode))
            this._zipCode=zipCode;
        else 
            throw 'ZipCode incorrect';
    }
    get phoneNumber(){ return this._phoneNumber; }
    set phoneNumber(phoneNumber){
        let phoneRegex = RegExp('[0-9]{2,3}\\s[0-9]{10}$');
        if(phoneRegex.test(phoneNumber))
            this._phoneNumber=phoneNumber;
        else 
            throw 'Phone Number incorrect';
    }
    get email(){ return this._email; }
    set email(email){
        let emailRegex = RegExp('[a-zA-Z]{1,}([\\.\\_\\-\\+]?[a-zA-Z0-9]+)@[a-z0-9]+[.][a-z]+[.]?[a-z]{2,3}?$');
        if(emailRegex.test(email))
            this._email=email;
        else 
            throw 'Email incorrect';
    }

    toString() {
        return "first name="+ this.firstName +",last name="+ this.lastName +", address="+ this.address+", city="+ this.city
        +", state="+ this.state+", zip="+ this.zip+", phone="+ this.phoneNumber+", email="+ this.email+"\n";
    }
}

let addressBook = new Array();
function addContact(newcontact){
    let duplicate= addressBook.findIndex(contact=> contact._firstName==newcontact._firstName && contact._lastName== newcontact._lastName);
    if(duplicate==-1)
        addressBook.push(newcontact);
    else
        throw 'Duplicate contact' + newcontact;
}
try{
addContact(new Contact('Zoya','Sanjeev','Abcdaddress','Hyderabad','Telangana','500100','91 9900990099','zoya@gmail.com'));
addContact(new Contact('Harry','Potter','Hogwarts','Hyderabad','Telangana','500200','91 9900991199','harry@gmail.com'));
addContact(new Contact('Ron','Weasley','Burrow','Bangalore','Karnataka','561100','91 9911990099','ron@gmail.com'));
addContact(new Contact('Dummy','Dumm','Address','Bangalore','Karnataka','562200','91 9911990099','dummy@gmail.com'));
console.log(addressBook);
}catch(e){
    console.error(e);
} 
function editContact(firstName, lastName,fieldToBeEdited, newField){
    let contact = addressBook.find(contact => contact._firstName==firstName && contact._lastName==lastName);
    switch(fieldToBeEdited){
        case "firstName": contact._firstName=newField;
                        break;
        case "lastName": contact._lastName=newField;
                        break;
        case "address": contact._address=newField;
                        break;
        case "city": contact._city=newField;
                        break;
        case "state": contact.state=newField;
                        break;
        case "zipCode": contact._zipCode=newField;
                        break;
        case "phoneNumber": contact._phoneNumber=newField;
                        break;
        case "email": contact._email=newField;
                        break;
        default: console.log("Invalid Field");
    }
    console.log("Edited contact");
    console.log(contact);
}

editContact('Zoya','Sanjeev','address','Secunderabad');

function deleteContact(firstName,lastName){
    let indexToBeDeleted= addressBook.findIndex(contact=> contact._firstName==firstName && contact._lastName==lastName);
    if(indexToBeDeleted!=-1){
        addressBook.splice(indexToBeDeleted,1);
        console.log("Deleted contact");
    }
    else
        throw 'Contact not found';
    
}
try{
    deleteContact('Dummy','Dumm');  
    deleteContact('Hermione','Granger');

}catch(e){
    console.error(e);
}

function getCountOfContacts(){
    let count= addressBook.reduce(count => count+=1, 0);
    return count;
}
console.log("Number of contacts in addressBook are: "+ getCountOfContacts());

function searchInCity(firstName, lastName, cityName){
    let contact=addressBook.find(contact => contact._firstName==firstName && contact._lastName==lastName && contact.city==cityName);
    if(contact!=null)
        console.log("Contact found: "+ contact);
    else
        throw 'Contact not found';
}
function searchInState(firstName, lastName, stateName){
    let contact=addressBook.find(contact => contact._firstName==firstName && contact._lastName==lastName && contact.state==stateName);
    if(contact!=null)
        console.log("Contact found: "+ contact);
    else
        throw 'Contact not found';
}

try{
    searchInCity('Zoya','Sanjeev','Hyderabad');
    searchInState('Zoya','Sanjeev','Telangana');
    searchInState('Zoya','Sanjeev','Karnataka');
}catch(e){
    console.error(e)
}

function getContactsByCity(cityName){
    let contacts=addressBook.filter(contact=> contact._city==cityName);
    return contacts;
}
function getContactsByState(stateName){
    let contacts=addressBook.filter(contact=> contact._state==stateName);
    return contacts;
}
console.log("Contact from city Hyderabad: "+ getContactsByCity('Hyderabad'));
console.log("Contact from state Karnataka: "+ getContactsByState('Karnataka'));

function getCountInCityOrState(fieldName,fieldValue){
    let count=0;
    switch(fieldName){
        case 'city': count = addressBook.filter(contact=> contact._city==fieldValue).reduce(countOfContacts=> countOfContacts+=1);
                    break;
        case 'state': count = addressBook.filter(contact=> contact._city==fieldValue).reduce(countOfContacts=> countOfContacts+=1);
                    break;
        default: console.log('Invalid field name');
    }
    return count;
}