window.onload = function () {
    const submitBtn = document.getElementById("submitButton")

    console.log({ submitBtn })

    submitBtn.addEventListener("click", () => {
        // Get the form data
        const name = document.getElementById('firstname').value;
        const email = document.getElementById('emailaddress').value;
        const gender = document.getElementById('selectgender').value;
        const mobile = document.getElementById('quantity').value;
        const address = document.getElementById('locationfield').value;
        const message = document.getElementById('comment').value;
        var selectedValue = '';

        if (document.getElementById("radoi-btn").checked) {
            selectedValue = document.getElementById("radoi-btn").value;
        } else if (document.getElementById("radoi-btn-1").checked) {
            selectedValue = document.getElementById("radoi-btn-1").value;
        }

        const apiUrl = 'https://api.v-siah.co.in/registerintrest';

        // Create an object with the form data
        const data = {
            name,
            email,
            gender,
            mobile,
            address,
            message,
            isInterest: selectedValue
        };

        // Send a POST request to the API with the form data
        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => {
                if (response.ok) {
                    console.log('Request was successful:', response.status, response.statusText);
                    return response.json();
                } else {
                    console.error('Request failed:', response.status, response.statusText);
                    throw new Error(`Error: ${response.status} - ${response.statusText}`);
                }
            })
            .then(data => {
                console.log('Success:', data);
            })
            .catch(error => {
                console.error(error);
            });
    })
}