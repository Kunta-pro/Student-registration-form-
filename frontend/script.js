// Initialize Supabase
const SUPABASE_URL = 'https://your-supabase-url.supabase.co';
const SUPABASE_KEY = 'your-supabase-public-api-key';
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Form submission handler
document.getElementById("submitBtn").addEventListener("click", async (event) => {
    event.preventDefault();

    // Collect form data
    const formData = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        dob: document.getElementById("dob").value,
        studentId: document.getElementById("studentId").value,
        age: parseInt(document.getElementById("age").value),
        village: document.getElementById("village").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        motherName: document.getElementById("motherName").value,
        motherPhone: document.getElementById("motherPhone").value,
        fatherName: document.getElementById("fatherName").value,
        fatherPhone: document.getElementById("fatherPhone").value,
        parentsOccupation: document.getElementById("parentsOccupation").value,
        class: document.getElementById("class").value,
        level: document.getElementById("level").value,
        diagnosis: document.getElementById("diagnosis").value,
        recommendations: document.getElementById("recommendations").value,
        healthInfo: {
            cardiovascular: document.querySelector("input[value='Cardiovascular System']").checked,
            respiratory: document.querySelector("input[value='Respiratory System']").checked,
            digestive: document.querySelector("input[value='Digestive System']").checked,
            nervous: document.querySelector("input[value='Nervous System']").checked,
            musculoskeletal: document.querySelector("input[value='Musculoskeletal System']").checked
        }
    };

    // Insert data into Supabase
    try {
        const { data, error } = await supabase
            .from('students') // replace 'students' with your table name
            .insert([formData]);

        if (error) throw error;
        
        alert("Registration submitted successfully!");
    } catch (error) {
        console.error("Error submitting registration:", error.message);
        alert("Failed to submit the registration. Please try again.");
    }
});
