document.getElementById("translate-btn").addEventListener("click", function() {
    const text = document.getElementById("source-text").value;
    const sourceLang = document.getElementById("source-lang").value;
    const targetLang = document.getElementById("target-lang").value;
    const outputArea = document.getElementById("target-text");

    if (!text.trim()) {
        alert("Please enter some text to translate!");
        return;
    }

    outputArea.placeholder = "Translating...";
    outputArea.value = "";

    const apiUrl = `https://translated.net{encodeURIComponent(text)}&langpair=${sourceLang}|${targetLang}`;
  
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          
            outputArea.value = data.responseData.translatedText;
        })
        .catch(error => {
            console.error("Error:", error);
            outputArea.placeholder = "Translation failed. Try again.";
        });
});
