// Obtener texto
function obtenerTexto(){
    const text = document.getElementById("input-text").value;

    if(text.trim() === ''){
        alert("No se ha ingresado ningún texto.");
        return null;
    }

    return text;
}

//PDF

function obtenerTexto() {
    const text = document.getElementById("input-text").value;

    if (text.trim() === "") {
        alert("No se ha ingresado ningún texto");
        return null;
    }

    return text;
}

document.getElementById("pdf-btn").addEventListener("click", () => {

    const text = obtenerTexto();
    if (!text) return;

    // modal simple
    let fileName = prompt("Nombre del archivo:", "archivo");

    if (fileName === null) return;

    if (fileName.trim() === "") {
        fileName = "archivo";
    }

    const { jsPDF } = window.jspdf;

    const doc = new jsPDF();

    doc.text(text, 10, 10);

    doc.save(fileName + ".pdf");

});


//TXT
document.getElementById("txt-btn").addEventListener("click", () => {

    const text = obtenerTexto();
    if(!text) return;
    

    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });

    saveAs(blob, "archivo.txt");
});


//DOCX
document.getElementById("docx-btn").addEventListener("click", async () => {

    const text = obtenerTexto();
    if(!text) return;

    const doc = new docx.Document({
        sections: [{
            children: [
                new docx.Paragraph({
                    children: [
                        new docx.TextRun(text)
                    ]
                })
            ]
        }]
    });

    const blob = await docx.Packer.toBlob(doc);

    saveAs(blob, "archivo.docx");

});


//RTF
document.getElementById("rtf-btn").addEventListener("click", () => {

    const text = obtenerTexto();
    if(!text) return;

    const rtfContent = `
{\\rtf1\\ansi
\\b Texto convertido a RTF \\b0
\\par
${text}
}
`;

    const blob = new Blob([rtfContent], {type:"application/rtf"});

    saveAs(blob,"archivo.rtf");

});