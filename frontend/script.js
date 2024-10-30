// script.js

// Function to toggle the visibility of a section
function toggleSection(contentId) {
    const content = document.getElementById(contentId);
    content.classList.toggle('hidden'); // Toggle visibility
}

// Function to submit form data to Supabase
document.getElementById('submitBtn').addEventListener('click', async () => {
    // Collecting form data
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const dob = document.getElementById('dob').value;
    const studentId = document.getElementById('studentId').value;
    const age = document.getElementById('age').value;
    const village = document.getElementById('village').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const motherName = document.getElementById('motherName').value;
    const motherPhone = document.getElementById('motherPhone').value;
    const fatherName = document.getElementById('fatherName').value;
    const fatherPhone = document.getElementById('fatherPhone').value;
    const parentsOccupation = document.getElementById('parentsOccupation').value;
    const classInfo = document.getElementById('class').value;
    const level = document.getElementById('level').value;
    const diagnosis = document.getElementById('diagnosis').value;
    const recommendations = document.getElementById('recommendations').value;

    const bodySystems = Array.from(document.querySelectorAll('#healthInfo input[type="checkbox"]:checked'))
        .map(cb => cb.parentElement.innerText.trim());

    const data = {
        first_name: firstName, // Ensure keys match your Supabase table column names
        last_name: lastName,
        dob,
        student_id: studentId,
        age,
        village,
        phone,
        email,
        mother_name: motherName,
        mother_phone: motherPhone,
        father_name: fatherName,
        father_phone: fatherPhone,
        parents_occupation: parentsOccupation,
        class: classInfo,
        level,
        diagnosis,
        recommendations,
        body_systems: bodySystems,
    };

    try {
        // Replace with your Supabase URL and API key
        const response = await fetch('https://YOUR_SUPABASE_URL/rest/v1/YOUR_TABLE_NAME', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer YOUR_SUPABASE_API_KEY',
                'Prefer': 'return=representation' // To return the inserted row
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            const result = await response.json();
            alert('Data submitted successfully! ID: ' + result.id);
        } else {
            const error = await response.json();
            alert('Error submitting data: ' + error.message);
        }
    } catch (err) {
        console.error(err);
        alert('An unexpected error occurred. Please try again later.');
    }
});
