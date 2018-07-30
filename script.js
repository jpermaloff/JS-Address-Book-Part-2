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
        let index = 0;
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
            delBtn.innerHTML = `<i class="material-icons" id=${index} >delete</i>`
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
            index++
        }
    }
    clear() {
        const contactAreaCol = document.querySelector(".contactArea");
        contactAreaCol.innerHTML = "";
    }
    deleteAt(target) {
        if (target.parentElement.classList.contains("deleteButton")) {
            addressBook.contacts.splice((target.getAttribute("id")), 1);
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


