# Link up whatsapp export files to google docs

When a whatsapp chat is exported, it contains a txt file and other filetypes. In the main txt file, there are references to the additional files (images,video) but they are not easily accessed.  Especially for legal cases, you want a Google document with hyperlinked resources in the Google drive folder, this small script will do this for you.

**Example, original exported chat:**

9/16/22, 7:42 PM - David Sottimano: Hello PTT-20220916-WA0006.opus (file attached)

**After script finishes:**

9/16/22, 7:42 PM - David Sottimano: Hello [PTT-20220916-WA0006.opus](https://github.com/dsottimano/whatsapp-export-google-docs-link/edit/main/#)

# Pre-requisities
- You have a whatsapp chat export
- The export folder contains a main txt file and supporting files
- You have a Google account and are able to upload the entire folder to Google Drive

# Usage
- In your uploaded whatsapp folder (Google drive), click on the main txt file and choose open with Google docs
- Click on the extensions > apps script menu
- Copy the script.gs file and paste it into the editor
- Click on save
- Select **main** function in the top menu and click run
- You will have to authorize the script's scopes and then you will have to re-run after you've accepted

Note: 

This script is provided for free and without guarantees.  It relies on a regular expression from English Whatsapp exports, namely looking for (file attached) in the main txt document.

In the event that the regular expression fails, it could be an update on how whatsapp exports their chats, or it maybe it a different language. In that case, just rewrite the regular expression.

