$(document).ready(function() {
    const citiesByState = {
        "Maharashtra": [
            "Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad",
            "Solapur", "Amravati", "Kolhapur", "Sangli", "Satara"
        ],
        "Karnataka": [
            "Bangalore", "Mysore", "Hubli", "Belgaum", "Mangalore",
            "Gulbarga", "Davanagere", "Shimoga", "Bellary", "Tumkur"
        ],
        "Gujarat": [
            "Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar",
            "Jamnagar", "Junagadh", "Gandhinagar", "Anand", "Bharuch"
        ]
    };

    $("#state").change(function() {
        const selectedState = $(this).val();
        const cityDropdown = $("#city");
        cityDropdown.empty();
        
        if (selectedState === "") {
            cityDropdown.append("<option value=''>Select City</option>");
        } else {
            $.each(citiesByState[selectedState], function(index, city) {
                cityDropdown.append("<option value='" + city + "'>" + city + "</option>");
            });
        }
    });

    $("#myForm").submit(function(event) {
        event.preventDefault();
        let isValid = true;

        // Reset previous error messages
        $(".error").remove();

        // First Name and Last Name validation
        const firstName = $("#firstName").val().trim();
        const lastName = $("#lastName").val().trim();
        if (firstName === "" || lastName === "" || !/^[a-zA-Z]*$/.test(firstName) || !/^[a-zA-Z]*$/.test(lastName)) {
            $("#firstName").after("<span class='error'>First and Last Name are required and should contain only letters.</span>");
            isValid = false;
        }

        // Phone Number validation
        const phoneNumber = $("#phoneNumber").val().trim();
        if (!/^\d{10}$/.test(phoneNumber)) {
            $("#phoneNumber").after("<span class='error'> Phone Number should be a 10-digit number.</span>");
            isValid = false;
        }

        // Email Address validation
        const email = $("#email").val().trim();
        if (!/^\S+@\S+\.\S+$/.test(email)) {
            $("#email").after("<span class='error'>Invalid Email Address.</span>");
            isValid = false;
        }

        // State validation
        const state = $("#state").val();
        if (state === "") {
            $("#state").after("<span class='error'>State is required.</span>");
            isValid = false;
        }

        // City validation
        const city = $("#city").val();
        if (city === "") {
            $("#city").after("<span class='error'>City is required.</span>");
            isValid = false;
        }

        // Pin Code validation
        const pincode = $("#pincode").val().trim();
        if (!/^\d{6}$/.test(pincode)) {
            $("#pincode").after("<span class='error'>Pin Code should be a 6-digit number.</span>");
            isValid = false;
        }

        if (isValid) {
            // Form is valid, you can submit it here
            alert("Form submitted successfully!");
        }
    });

    // Real-time validation on input change
    $("#firstName, #lastName, #phoneNumber, #email, #pincode").on("input", function() {
        $(".error").remove();

        // First Name and Last Name validation
        const firstName = $("#firstName").val().trim();
        const lastName = $("#lastName").val().trim();
        if (firstName !== "" && !/^[a-zA-Z]*$/.test(firstName)) {
            $("#firstName").after("<span class='error'>First Name should contain only letters.</span>");
        }
        if (lastName !== "" && !/^[a-zA-Z]*$/.test(lastName)) {
            $("#lastName").after("<span class='error'>Last Name should contain only letters.</span>");
        }

        // Phone Number validation
        const phoneNumber = $("#phoneNumber").val().trim();
        if (phoneNumber !== "" && !/^\d{10}$/.test(phoneNumber)) {
            $("#phoneNumber").after("<span class='error'>Phone Number should be a 10-digit number.</span>");
        }

        // Email Address validation
        const email = $("#email").val().trim();
        if (email !== "" && !/^\S+@\S+\.\S+$/.test(email)) {
            $("#email").after("<span class='error'>Invalid Email Address.</span>");
        }

        // Pin Code validation
        const pincode = $("#pincode").val().trim();
        if (pincode !== "" && !/^\d{6}$/.test(pincode)) {
            $("#pincode").after("<span class='error'>Pin Code should be a 6-digit number.</span>");
        }
    });
});
