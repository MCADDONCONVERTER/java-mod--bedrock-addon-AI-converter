function convertMod() {
  const fileInput = document.getElementById('modUpload');
  const file = fileInput.files[0];

  if (!file) {
    alert("Please upload a Java mod (.jar or .zip)");
    return;
  }

  const reader = new FileReader();

  reader.onload = async function(event) {
    const arrayBuffer = event.target.result;

    // Use a JS zip parser to read .jar or .zip
    const zip = await JSZip.loadAsync(arrayBuffer);
    let outputText = "Parsed files:\n";

    zip.forEach((relativePath, file) => {
      outputText += `- ${relativePath}\n`;
    });

    document.getElementById('output').textContent = outputText;

    // TODO:
    // - Use AI logic (e.g., GPT, rule-based patterns) to interpret item/block definitions
    // - Generate Bedrock-compatible JSONs
    // - Allow preview/edit
    // - Zip output as .mcaddon
  };

  reader.readAsArrayBuffer(file);
}
