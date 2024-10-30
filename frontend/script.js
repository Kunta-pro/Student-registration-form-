<script>
    document.addEventListener("DOMContentLoaded", function() {
        const form = document.querySelector("form");

        form.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent form submission for validation
            const errors = [];

            // Get form field values
            const firstName = document.getElementById("firstName").value.trim();
            const middleName = document.getElementById("middleName").value.trim();
            const lastName = document.getElementById("lastName").value.trim();
            const email = document.querySelector("input[type='email']").value.trim();
            const mobile = document.querySelector("input[type='tel']").value.trim();
            const gender = document.querySelector("select").value;

            // Validate required fields
            if (!firstName) errors.push("First Name is required.");
            if (!lastName) errors.push("Last Name is required.");
            if (!email) errors.push("Email is required.");
            if (!mobile) errors.push("Mobile Number is required.");
            if (gender === "Please Select") errors.push("Gender is required.");

            // Validate email format
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (email && !emailPattern.test(email)) {
                errors.push("Please enter a valid email address.");
            }

            // Validate mobile number format
            const mobilePattern = /^[0-9]{10}$/; // Adjust to your preferred pattern
            if (mobile && !mobilePattern.test(mobile)) {
                errors.push("Please enter a valid 10-digit mobile number.");
            }

            // Display errors or submit form
            if (errors.length > 0) {
                alert("Please fix the following errors:\n" + errors.join("\n"));
            } else {
                alert("Form submitted successfully!");
                form.submit(); // Uncomment to submit the form after validation
            }
        });
    });
</script>
