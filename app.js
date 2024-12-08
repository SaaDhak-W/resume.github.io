document.getElementById('resume-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Collect the user input
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const experience = document.getElementById('experience').value;
    const education = document.getElementById('education').value;
    const skills = document.getElementById('skills').value.split(',');

    // Display the resume preview
    const preview = document.getElementById('preview');
    preview.innerHTML = `
        <h2>${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <h3>Work Experience</h3>
        <p>${experience}</p>
        <h3>Education</h3>
        <p>${education}</p>
        <h3>Skills</h3>
        <ul>
            ${skills.map(skill => `<li>${skill.trim()}</li>`).join('')}
        </ul>
    `;
});

// Function to generate PDF
document.getElementById('download-btn').addEventListener('click', function() {
    const { jsPDF } = window.jspdf;

    // Collect the user input again to generate the PDF
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const experience = document.getElementById('experience').value;
    const education = document.getElementById('education').value;
    const skills = document.getElementById('skills').value.split(',');

    // Create a new PDF document
    const doc = new jsPDF();

    // Add content to the PDF
    doc.setFontSize(16);
    doc.text("Resume", 20, 20);

    doc.setFontSize(12);
    doc.text("Full Name: " + name, 20, 40);
    doc.text("Email: " + email, 20, 50);
    doc.text("Work Experience: " + experience, 20, 60);
    doc.text("Education: " + education, 20, 80);
    doc.text("Skills: " + skills.join(', '), 20, 100);

    // Save the generated PDF
    doc.save("resume.pdf");
});
