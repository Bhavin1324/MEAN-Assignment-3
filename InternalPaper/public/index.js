const brand = document.querySelector("#brand");
const category = document.querySelector("#floatingSelect");
const picture = document.querySelector("#formFile");
const price = document.querySelector("#price");
const depreciation = document.querySelector("#depreciation");
const noy = document.querySelector("#noy");
const totalprice = document.querySelector("#totprice");
const submit = document.querySelector("#submit");
const tableBody = document.querySelector(".tableBody");
let currentImage;

function calculateDepreciation(actualAmount, numberOfYears, rate) {
    let totalAmount = actualAmount;
    for (let i = 1; i <= numberOfYears; i++) {
        let depAmount = (totalAmount * rate) / 100;
        totalAmount -= depAmount;
    }
    return totalAmount.toFixed(2);
}

async function fetchCategory() {
    try {
        const response = await fetch("api/vehicle/category");
        const data = await response.json();
        floatingSelect.innerHTML = data.map(item => {
            return `<option value=${item.categoryName}>${item.categoryName}</option>`
        }).join(" ");
    }
    catch (ex) {
        console.log(ex);
    }
}
async function fetchVehicleData() {
    try {
        const response = await fetch("api/vehicle");
        const data = await response.json();
        tableBody.innerHTML = data.map(item => {
            return `
            <tr>
                <td>${item.vehicleBrand}</td>
                <td>${item.categoryName}</td>
                <td><img src=${item.picture} alt="" height="100px" width="150px"/></td>
                <td>${item.vehiclePrice}</td>
                <td>${item.depreciation}</td>
                <td>${item.numberOfYears}</td>
                <td>${item.totalPrice}</td>
                <!-- <td><button class="btn btn-primary" id=${item._id} onclick="editEntry(this.id)">Edit</button></td>
                <td><Button class="btn btn-danger"  id=${item._id} onclick="deleteEntry(this.id)">Delete</Button></td> -->
            </tr>
            `
        }).join(" ");
    }
    catch (ex) {
        console.log(ex);
    }
}
async function insertEntry() {
    const payload = {
        vehicleBrand: brand.value,
        categoryName: category.value,
        vehiclePrice: price.value,
        picture: currentImage,
        depreciation: depreciation.value,
        numberOfYears: noy.value,
        totalPrice: totalprice.value
    }
    console.log("PAYLOAD", payload)
    try {
        const response = await fetch("api/vehicle", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(payload)
        })
        fetchCategory();
        fetchVehicleData();
    }
    catch (ex) {
        console.log(ex)
    }
}

/* async function editEntry(id) {
    console.log(id);
}
async function deleteEntry(id) {
    console.log(id);
} */

// EVENTS
depreciation.addEventListener("input", () => {
    if (noy.value && price.value) {
        totalprice.value = calculateDepreciation(price.value, noy.value, depreciation.value)
    }
})
price.addEventListener("input", () => {
    if (noy.value && depreciation.value) {
        totalprice.value = calculateDepreciation(price, noy, depreciation)
    }
})
noy.addEventListener("input", () => {
    if (depreciation.value && price.value) {
        totalprice.value = calculateDepreciation(price.value, noy.value, depreciation.value)
    }
})

picture.addEventListener("change", async (e) => {
    const imageFile = e.target.files[0];
    const formData = new FormData();
    formData.append("image", imageFile);
    try {
        const response = await fetch("api/vehicle/image", {
            method: "POST",
            body: formData
        });
        const { data } = await response.json();
        console.log("Image get from server ", data);
        currentImage = data?.src || "";
    }
    catch (ex) {
        console.log(ex)
    }
})
submit.addEventListener("click", (e) => {
    e.preventDefault();
    insertEntry()
});

fetchCategory();
fetchVehicleData();
