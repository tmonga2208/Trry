// Create a new PDFJS document
var pdfDoc = null;
var currentZoomLevel = 1.0; // Add a variable to store the current zoom level

// API function to load a new PDF
function loadPDF(url) {
    PDFJS.getDocument(url).then(function(_pdfDoc) {
        pdfDoc = _pdfDoc;
        renderPage(1);
    });
}

// API function to go to a specific page
function goToPage(pageNumber) {
    renderPage(pageNumber);
}


// Call loadPDF to load your PDF file
loadPDF('Report.pdf');

// API function to change the zoom level
function setZoom(zoomLevel) {
    // PDF.js doesn't directly support zooming, so you'll need to implement this yourself.
    // One way to do this might be to adjust the scale parameter in the renderPage function.
}

// Function to render a page
function renderPage(pageNumber) {
    pdfDoc.getPage(pageNumber).then(function(page) {
        var viewport = page.getViewport(1.0);
        var canvas = document.getElementById('pdf-canvas');
        var context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        var renderContext = {
            canvasContext: context,
            viewport: viewport
        };
        page.render(renderContext);
    });
}