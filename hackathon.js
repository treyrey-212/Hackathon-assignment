// JavaScript to handle questionnaire form submission
document.getElementById("questionnaire-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const company = document.getElementById("company").value;
    const service = document.getElementById("services").value;
    const experience = document.getElementById("experience").value;
    const feedback = document.getElementById("feedback").value;
    const communication = document.querySelector('input[name="communication"]:checked')?.value;
    const newsletter = document.getElementById("newsletter").checked ? "Yes" : "No";

    // Collecting the answers
    const questionnaireData = {
        name,
        company,
        service,
        experience,
        feedback,
        communication,
        newsletter
    };

    // For now, log the collected data to the console
    console.log("Questionnaire Responses:", questionnaireData);

    // Alert the user with the collected data
    alert(`Thank you for completing the questionnaire, ${name}!\n\nHere are your answers:\n\n- Name: ${name}\n- Company: ${company}\n- Service: ${service}\n- Experience: ${experience}\n- Goal: ${feedback}\n- Preferred Communication: ${communication}\n- Newsletter: ${newsletter}`);
    
    // Optionally, reset the form
    document.getElementById("questionnaire-form").reset();
});