const form = document.getElementById('mail-form');
const resultDiv = document.getElementById('result');
const resultText = document.getElementById('resultText');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    // Simulate API call and response for file upload
    try {
        const response = await fetch('/analyze', {
            method: 'POST',
            body: formData
        });
        const data = await response.json();
        resultText.textContent = data.result;
        resultDiv.style.display = 'block';
    } catch (error) {
        console.error('Error:', error);
        resultText.textContent = 'Analysis failed. Try again.';
        resultDiv.style.display = 'block';
    }
});
