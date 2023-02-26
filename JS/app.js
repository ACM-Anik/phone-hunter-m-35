const loadPhone = async (searchText, dataLimit) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    const res = await fetch(url);
    const data = await res.json();
    displayPhone(data.data, dataLimit);
};


const displayPhone = (phones, dataLimit) => {
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = '';
    // Display 10 phones only
    const showAll = document.getElementById('show-all');
    if (dataLimit && phones.length > 10) {
        phones = phones.slice(0, 10);
        showAll.classList.remove('d-none');
    }
    else {
        showAll.classList.add('d-none');
    }
    // display No phones found
    const noPhone = document.getElementById('no-phone-found');
    if (phones.length === 0) {
        noPhone.classList.remove('d-none');
    }
    else {
        noPhone.classList.add('d-none');
    }
    // Display all phones
    phones.forEach(phone => {
        const phoneDiv = document.createElement('div');
        phoneDiv.innerHTML = `
    <div class="col">
        <div class="card p-4">
            <img class="w-75 mx-auto" src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${phone.phone_name}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <button onclick="loadPhoneDetails('${phone.slug}')" href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#phoneDetailModal">Show Details</button>
          </div>
        </div>
    </div>
        `;
        phoneContainer.appendChild(phoneDiv);
    });
    // Stop spinner/ loader:
    toggleSpinner(false);
};

// common function:
const processSearch = (dataLimit) =>{
    toggleSpinner(true);
   const searchText = document.getElementById('search-field').value;
   loadPhone(searchText, dataLimit);
};


// Handle search button click:
document.getElementById('btn-search').addEventListener('click', function () {
    // Start loader/Spinner:
    processSearch(10);
});

// Search input field enter key handler
document.getElementById('search-field').addEventListener('keypress', function (e){
    // console.log(e.key);
    if(e.key === 'Enter'){
        processSearch(10);
    }
});


const toggleSpinner = isLoading => {
    const spinnerContainer = document.getElementById('spinner');
    if (isLoading) {
        spinnerContainer.classList.remove('d-none');
    }
    else {
        spinnerContainer.classList.add('d-none');
    }
};


// Not the best way to show all:
document.getElementById('btn-show-all').addEventListener('click', function () {
    processSearch();
});


const loadPhoneDetails = async id => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`
    const res = await fetch(url);
    const data = await res.json();
    displayPhoneDetails(data.data);
};

const displayPhoneDetails = phone => {
    console.log(phone)
    const modalTitle = document.getElementById('phoneDetailModalLabel');
    modalTitle.innerText = phone.name;
    const phoneDetails = document.getElementById('phone-details');
    phoneDetails.innerHTML = `
        <p>Release Date: ${phone.releaseDate ? phone.releaseDate : 'No Release Date Found'}</p>
        <p>Storage: ${phone.mainFeatures ? phone.mainFeatures.storage : 'No Information Found'}
        <p>Memory: ${phone.mainFeatures ? phone.mainFeatures.memory : 'No Information Found'}
        <p>ChipSet: ${phone.mainFeatures ? phone.mainFeatures.chipSet : 'No Information Found'}
        <p>sensors: ${phone.mainFeatures ? phone.mainFeatures.sensors: 'No Information Found'}

        <p>Bluetooth: ${phone.others ? phone.others.Bluetooth : 'No Information Found'}
    `;
}

loadPhone('a');