function downloadAndRedirect(event) {
    event.preventDefault(); // Prevent the default navigation

    // Create a temporary link element for download
    const link = document.createElement("a");
    link.href = "images/Fo4_mini_nuke.webp"; // Change to your file's path
    link.download = "Death.webp"; // Optional: Set a custom file name
    link.click();

    // Redirect to the new page
    window.location.href = "lmao.html";
  }