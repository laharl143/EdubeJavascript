let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
    }, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
    }, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
    }];
    
    /////////////////////////////////////////////
    let newName = prompt("Please enter a Name: ");
    let newPhone = prompt("Please enter the corresponding Phone Number: ");
    let newEmail = prompt("Please enter the corresponding Email Address: ");
    
    contacts.push({
        name: newName,
        phone: newPhone,
        email: newEmail,
        });
    /////////////////////////////////////////////
    let last = contacts.length - 1;
    
    console.log(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
    console.log(`${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`);
    
    
    function new(){
    let newName = prompt("Please enter a Name: ");
    let newPhone = prompt("Please enter the corresponding Phone Number: ");
    let newEmail = prompt("Please enter the corresponding Email Address: ");
    
    let names = [];
    let isOver = false;
    while (!isOver) {
       let name = prompt("Enter another name or press cancel.");
       if (name != null) {
          names.push(name);
       } else {
          isOver = true;
       }
    }
    if (new != (newName && newPhone && newEmail) ) {
        alert("Please make sure to add all the components!");
        break;
    } else {
        contacts.push({
        name: newName,
        phone: newPhone,
        email: newEmail,
        })
    };
    
    
    ///////////
    function first(array[]) {
      var firstName = name.substring(0, space);
      return firstName;
    };
    
    function last(array[]) {
      var lastName = name.substring(space + 1);
      return lastName;
    };
    ////////////
    function quit() {
      break;
    };
    ///////////////////
    function all() {
      console.log(contacts);
    };
    console.log(contacts);
    var space = name.indexOf(" ");
    var firstName = name.substring(0, space);
    var lastName = name.substring(space + 1)
    console.log("First Name = "+ firstName);
    console.log("Last Name = "+ lastName);
    
    
    
    //var names = name.split(' ')
    //console.log("First Name = "+ names[0]);
    //console.log("Last Name = "+ names[1]);
    
    }
//////////////////////////




// let contacts = [{
//     name: "Maxwell Wright",
//     phone: "(0191) 719 6495",
//     email: "Curabitur.egestas.nunc@nonummyac.co.uk"
//     }, {
//     name: "Raja Villarreal",
//     phone: "0866 398 2895",
//     email: "posuere.vulputate@sed.com"
//     }, {
//     name: "Helen Richards",
//     phone: "0800 1111",
//     email: "libero@convallis.edu"
//     }];
    
//     function showContact(conList, indexList) {
//         if (!(conList instanceof Array)) {
//             return "Enter a valid array.";
//         } else {
//             return `${conList[indexList].name} / ${conList[indexList].phone} / ${conList[indexList].email}`;
//         }
//     };
    
//     function showAllContacts(conList) {
//         let returnList = [];
//         if (!(conList instanceof Array)) {
//             return "Enter a valid array.";
//         } else {
//             for (let i = 0; i < conList.length; i++) {
//                 returnList[i] = `${conList[i].name} / ${conList[i].phone} / ${conList[i].email} || `;
//             };
//         }
//         return returnList
//     }
    
//     function addNewContact(conList, newName, newPhone, newEmail) {
//         if (!(conList instanceof Array) || !newName || !newPhone || !newEmail) {
//             return "Enter valid inputs."
//         } else {
//             contacts.push({
//                 name: newName,
//                 phone: newPhone,
//                 email: newEmail
//             });
//             return `The following contact is added: ${conList[conList.length-1].name} / ${conList[conList.length-1].phone} / ${conList[conList.length-1].email}`
//         }
//     }
    
let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
    }, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
    }, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
    }];
    
    function showContact(contactList, indexList) {
        if (!(contactList instanceof Array && contacts[i])) { //contacts instanceof Array && contacts[i]
            let validArray = console.log ("Please input a valid argument");
            return validArray;
        } else {
            return `
            ${contactList[indexList].name} / 
            ${contactList[indexList].phone} / 
            ${contactList[indexList].email}`;
        }
    };
    
    function showAllContacts(contactList) {
        let returnList = [];
        if (!(contactList instanceof Array)) { 
            let validArray = console.log ("Please input a valid argument");
            return validArray;
        } else {
            for (let i = 0; i < contactList.length; i++) {
                returnList[i] = `
                ${contactList[i].name} / 
                ${contactList[i].phone} / 
                ${contactList[i].email} `;
            };
        }
        return returnList
    }
    
    function addNewContact(contactList, addName, addPhone, addEmail) {
        if (!(contactList instanceof Array) || !addName || !addPhone || !addEmail) {
            let validArray = console.log ("Please input a valid argument");
            return validArray;
        } else {
            contacts.push({
                name: addName,
                phone: addPhone,
                email: addEmail
            });
            return `
            The following contact is successfully added: 
            ${contactList[contactList.length-1].name} / 
            ${contactList[contactList.length-1].phone} / 
            ${contactList[contactList.length-1].email}`
        }
    }
    
