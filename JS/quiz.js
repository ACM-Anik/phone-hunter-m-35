// how we can get 2nd element from person array using Slice()?

const person = [
    {
        name: "rahim",
        age: 22,
        friends: ["rahim,karim,jabbar"],
    },
    {
        name: "rahim2",
        age: 22,
        friends: ["rahim,karim,jabbar"],
    },
    {
        name: "rahim3",
        age: 22,
        friends: ["rahim,karim,jabbar"],
    },
];

const newPerson = person.slice(1, 2);
console.log(newPerson);




// how to get sokina instagram from dreamGirl?

const dreamGirl = [
    {
        sokina: {
            name: "bbu",
            height: "5.4",
            family: [{ father: "rock", mother: "shila", sister: "chinki" }],
            age: undefined,
            contactInfo: [
                {
                    facebook: {
                        link: "https://www.facebook.com/",
                        followers: "12545",
                        status: "single",
                        friendsList: [{ name: "rofik" }, undefined],
                    },
                },
                { instagram: "https://www.instagram.com/" },
            ],
        },
    },
];


const instagram = dreamGirl[0].sokina.contactInfo[1].instagram;
console.log(instagram);



// can you get the phone which price not 500 ? which one is correct?

const phones = [
 { name: "sony", price: 500 },
 { name: "apple", price: 700 },
 { name: "sony", price: 700 },
];

const lowPrice = phones.filter((phone) => phone.price != 500);
console.log(lowPrice);
