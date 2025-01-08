function downloadFiles() {
    // Define file URLs
    var fileUrls = ['./pdf/Problem Statement - Artiverse.pdf', './pdf/Abstract Template - Artiverse.docx'];
    
    // Create anchor element for download
    var anchor = document.createElement('a');
    anchor.style.display = 'none';
    document.body.appendChild(anchor);
    
    // Sequentially trigger downloads
    fileUrls.forEach(function(url) {
      anchor.href = url;
      anchor.download = url.split('/').pop(); // Extract filename from URL
      anchor.click(); // Trigger download
    });
    
    // Clean up
    document.body.removeChild(anchor);
  }
  