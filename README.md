# dust-pifu-converter

Converts and merges PIFU files for VFK and TFK into a VTFK PIFU file

## Setup

1. Create a `.env` file
    ```bash
    PIFU_XML_FILE_PATH_1=<full-path-to-pifu-file-1>
    PIFU_XML_FILE_PATH_2=<full-path-to-pifu-file-2>
    ```

## Usage

1. `npm run convert` will read in both files from `.env` file and convert them from XML to JSON. JSON file will be written to `data` folder
