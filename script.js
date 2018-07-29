"use strict";
class Addressbook {
    constructor() {
        this.contacts = [];
    }
    add() {
        const inputs = document.querySelectorAll("input[type='text']");
        const select = document.querySelector("select");
        this.contacts.push(new Contact(inputs[0].value, inputs[1].value, inputs[2].value, select.value));
        this.display();
    }
    display() {
        this.clear();
        for (let contact of this.contacts) {
            const name = document.createElement("h5");
            const email = document.createElement("h5");
            const phone = document.createElement("h5");
            const rel = document.createElement("h5");
            const delBtn = document.createElement("button");
            name.textContent = `Name: ${contact.name}`;
            email.textContent = `Email: ${contact.email}`;
            phone.textContent = `Phone: ${contact.phone}`;
            rel.textContent = `Relationship: ${contact.relation}`;
            delBtn.innerHTML = `<i class="material-icons">delete</i>`
            delBtn.classList.add("deleteButton");
            const container = document.querySelector(".contactArea");
            const newBox = document.createElement("section");
            newBox.appendChild(name);
            newBox.appendChild(email);
            newBox.appendChild(phone);
            newBox.appendChild(rel);
            newBox.appendChild(delBtn);
            newBox.classList.add("contacts");
            container.appendChild(newBox);
        }
    }
    clear() {
        const contactAreaCol = document.querySelector(".contactArea");
        contactAreaCol.innerHTML = "";
    }
    deleteAt(target) {
        console.log("delete");
        if (target.parentElement.classList.contains("deleteButton")) {
            target.parentElement.parentElement.remove();
        }
    }
}
class Contact {
    constructor(name, email, phone, relation) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    }
}

const del = document.querySelector(".contactArea")
    .addEventListener("click", function (e) {
        const book = new Addressbook();
        book.deleteAt(e.target);
    });
const addressBook = new Addressbook();
// Creating placeholders
let taz = new Contact("Taz", "Taz@gmail.com", "586-111-6392", "Co-Worker");
addressBook.contacts.push(taz)
let jalen = new Contact("Jalen", "Jalen@gmail.com", "586-222-6392", "Self");
addressBook.contacts.push(jalen)
let zavier = new Contact("Zavier", "Zavier@gmail.com", "586-333-6392", "Self");
addressBook.contacts.push(zavier)

