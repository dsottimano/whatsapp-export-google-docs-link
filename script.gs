// This function will run a search for a string in the document and replace the string with a link to the file
// The file must be in the same folder as the document
// The string to be replaced must be in the following format: <filename.extension> (file attached)

//use main function only
function main() {
  //run first to ensure drive permissions added
  getFolderFromThisSpreadsheet_()
  return linkFiles_()

}

function linkFiles_() {
  let doc = DocumentApp.getActiveDocument();
  let currentDocId = DocumentApp.getActiveDocument().getId()
  let docBody = DocumentApp.openById(currentDocId).getBody();

  let text = doc.getBody().getText();
  
  //this regex may change depending on the language of your export if not english, and may change from whatsapp
  let regex = /.*\s([\w\d-]+\.[\w\d]+)\s\(file attached\)/g;
  
  let match;
  let links = []

  while ((match = regex.exec(text)) != null) {
    let fileName = match[1];
    let files = DriveApp.getFolderById(getFolderFromThisSpreadsheet_()).getFilesByName(fileName);
    if (files.hasNext()) {
      let file = files.next();
      links.push({ "file_url": file.getUrl(), "file_name": fileName });
    }

    let fileAttachedString = docBody.findText(match[1]).getElement();
    links.forEach(link => {
      fileAttachedString.setText(link.file_name).setLinkUrl(link.file_url);
    })


  }
}

function getFolderFromThisSpreadsheet_() {
  let doc = DocumentApp.getActiveDocument()
  let folder = DriveApp.getFileById(doc.getId()).getParents().next()
  return folder.getId()
}
