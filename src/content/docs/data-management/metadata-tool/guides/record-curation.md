---
title: Records
description: Explains record fields and how to create record 
author: Skyler Kimura
---


![Metadata Tool](../../../../../assets/metadata-tool/metadata-tool-01.png)

### Field Definitions
![Record Fields](../../../../../assets/metadata-tool/metadata-tool-02.png)
 - Record Name: Name of the record related to the dataset 
- CRCID: A unique identifier that will be utilized to keep track of CRC associated data
    - Ex. CRC20231024001GDTS
    - Format of the CRCID: CRCYYYYMMDD000XXYY
        - CRC: Identifies that this ID is associated to CRC
        - YYYY: Year that the record for the data has been created
        - MM: Month that the record for the data has been created
        - DD: Date that the record for the data has been created
        - 000: ID of the record stored within the database that increments each time a record is created
        - XX: Primary Project Code
        - YY: Secondary Project Code
 - Creator: Name of user who curated the record
 - Keywords: Keywords that are related to the dataset
 - Location Type: The location medium type that the dataset has been stored
 - Location: The location path where the dataset file is stored
 - File: Name of the file for the dataset
 - Project 1: The primary project that the dataset is associated with (List of projects on project page)
 - Project 2: The secondary project that the dataset is associated with (List of projects on project page)
 - Zenodo: Is the data stored in Zenodo or will it be uploaded to Zenodo in the future?
 - Date: Date associated with the dataset
 - Created: Date and time record has been **curated** into the Metadata Tool
 - Updated: Date and time record has been **updated** in the Metadata Tool
 - Description: Additional metadata for the dataset name and description to further identify what the dataset means

 Note: You can query the records based on the fields above. You can checkout the record querying guide over [here](record-management/)<br>
 All fields for this form requires an entry. If there is ambiguity within the description of the field, please email skyler8@hawaii.edu, but for now you can just enter
 a temporary placeholder for now and edit it with the actual information later. 


## <a href="https://crc-metadata-tool.fly.dev/records/create" target="_blank">How to Curate Record in Metadata Tool?</a>

### 1. In the navigation bar, click on Records
![Step 1 screenshot](https://images.tango.us/workflows/e2aed1bc-5fb3-4842-8746-1fa30482f3e8/steps/58d4a4f8-cd47-4697-bd4f-f0b8315495c8/4bebea58-3387-42c4-935b-20e2348f2fac.png?crop=focalpoint&fit=crop&fp-x=0.1064&fp-y=0.0328&fp-z=2.8936&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=290&mark-y=50&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0xNTgmaD03NCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)


### 2. In the dropdown, click on Create Record
![Step 2 screenshot](https://images.tango.us/workflows/e2aed1bc-5fb3-4842-8746-1fa30482f3e8/steps/747b51da-f82a-4c77-9623-c75ffa378b58/b91a08b7-f064-4b26-8a46-a0ac0a7321b2.png?crop=focalpoint&fit=crop&fp-x=0.0866&fp-y=0.1264&fp-z=2.5563&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=126&mark-y=221&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0yODAmaD0xNDkmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)


### 3. Type in name that is associated with the dataset
![Step 3 screenshot](https://images.tango.us/workflows/e2aed1bc-5fb3-4842-8746-1fa30482f3e8/steps/772fb08a-70a6-4bc7-8528-7a36314fac40/f0240f71-29dd-4d3c-b96b-d9d7510c2127.png?crop=focalpoint&fit=crop&fp-x=0.4666&fp-y=0.2687&fp-z=1.4386&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=259&mark-y=317&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz02ODImaD03MyZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)
- **IMPORTANT** To ensure efficient organization of your dataset, it is essential to compress multiple files associated with a single dataset before uploading. Please use common compression formats like .zip or .tar.gz (tarball).
    - Exmample: Compressing files associated with a Shapefile
    - Compress shapefile with auxilary and metadata files needed to read/access the shapefile (CPG, DBF, PRJ, LOCK, SHX)
- You do not need to compress a dataset if it is only a single file

### 4. Type a description of the dataset
![Step 4 screenshot](https://images.tango.us/workflows/e2aed1bc-5fb3-4842-8746-1fa30482f3e8/steps/cc3b9f9a-51d1-4396-9acd-5a06e63443f0/c6855df7-2cde-4988-9a59-429c656e6bd5.png?crop=focalpoint&fit=crop&fp-x=0.4666&fp-y=0.3920&fp-z=1.4386&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=259&mark-y=390&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz02ODImaD0xMzYmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)
- The description will hold additional metadata to hold more information about the dataset. Please enter a couple of sentences about the dataset. 

### 5. Type in keywords to describe the subject/topic of the dataset
![Step 5 screenshot](https://images.tango.us/workflows/e2aed1bc-5fb3-4842-8746-1fa30482f3e8/steps/e7f77c31-562e-4749-8c01-470bf986b90f/775d691e-c310-4f1e-adb8-c3b056637c9d.png?crop=focalpoint&fit=crop&fp-x=0.4666&fp-y=0.5154&fp-z=1.4386&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=259&mark-y=421&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz02ODImaD03MyZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)


### 6. (If applicable) Select a date associated with the dataset
![Step 6 screenshot](https://images.tango.us/workflows/e2aed1bc-5fb3-4842-8746-1fa30482f3e8/steps/e2166b68-0b03-40f9-bfbc-24c557bf2df7/d8f962c1-0364-4a3b-a32f-e4f8325ee25a.png?crop=focalpoint&fit=crop&fp-x=0.4666&fp-y=0.6308&fp-z=1.4386&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=259&mark-y=421&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz02ODImaD03MyZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)
- If there is no explicit date that is associated with the dataset or if the date is unknown, please select the date of the record creation.


### 7. Select a Primary Project for the dataset
![Step 7 screenshot](https://images.tango.us/workflows/e2aed1bc-5fb3-4842-8746-1fa30482f3e8/steps/dd9ea111-53f7-4a7d-a520-37b87847134d/3f61109d-0f78-4477-8a0d-1b2cbafd2fac.png?crop=focalpoint&fit=crop&fp-x=0.4666&fp-y=0.7144&fp-z=1.4386&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=259&mark-y=503&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz02ODImaD03MyZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)
- The project 1 dropdown will be populated by the projects that you are assigned
- To see the list of all projects, you can view the projects [here](projects/)
- If you need to access to another project, please email skyler8@hawaii.edu or mbarbee@hawaii.edu
- Dataset needs to have at least one associated project. If there's not a specific project associated to the dataset, choose General Data.


### 8. Select a Secondary Project for dataset
![Step 8 screenshot](https://images.tango.us/workflows/e2aed1bc-5fb3-4842-8746-1fa30482f3e8/steps/b72af29d-9dd1-4189-9ab7-a45e935710dc/ffa0d6bf-378c-4fd3-a146-29e8ef131e04.png?crop=focalpoint&fit=crop&fp-x=0.4666&fp-y=0.4925&fp-z=1.4386&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=259&mark-y=421&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz02ODImaD03MyZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)
- The project 2 dropdown will be also populated by the projects that you are assigned
- Please be sure to select a different project from project 1, or this field will default to a blank "N/A" project
- Data may be associated to two project. If not, please leave project 2 as the first option "Pick one" this will default to a blank "N/A" project


### 9. Select a Location Type (Preferably KoaCloud)
![Step 9 screenshot](https://images.tango.us/workflows/e2aed1bc-5fb3-4842-8746-1fa30482f3e8/steps/84b3407a-e150-4d12-b7c9-2bfc5da0978d/aaad624e-5f80-4ed5-8bca-dea92fc22dcf.png?crop=focalpoint&fit=crop&fp-x=0.4666&fp-y=0.5920&fp-z=1.4386&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=259&mark-y=421&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz02ODImaD03MyZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)
![Storage Type Dropdown](../../../../../assets/metadata-tool/metadata-tool-03.png)
Note: This field is only a note for the location of your dataset that will be stored in a database. It is preferrable to store data on KoaCloud and keep any copy or backup in local storage and/or coastal6 (More backups the better)
- KoaCloud
    - Storing data 
- Coastal6
    - Storing datasets on coastal6 network drive is a good temporary storage medium for sharing big files. Storing datasets in CRC network drive, coastal6, requires user to be connected to the SOEST network. 
- Locally Stored
    - Locally storing datasets includes storing on computer hard drive, external hard drive, or USB drive. Anything that doesn't require network access.
- Other
    - Other storage methods includes, but not limited to Google Drive, FTP, imina, and koa long term storage.
    - Any online storage


### 10. Type in the location path for the dataset
![Step 10 screenshot](https://images.tango.us/workflows/e2aed1bc-5fb3-4842-8746-1fa30482f3e8/steps/0c057f7c-775b-4d64-8fe1-f637e2fcb2d1/257ac6b0-ce98-4bec-b49a-2257064be0c1.png?crop=focalpoint&fit=crop&fp-x=0.4666&fp-y=0.6915&fp-z=1.4386&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=259&mark-y=473&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz02ODImaD03MyZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)
- For each storage medium, type in the **FULL** location of the dataset in a readable format. Below are examples of the format depending on the storage medium
- Coastal6/KoaCloud
    - Format: /Data/example/
- Other/Local Storage
    - Format: Device-Name:/path-name/
        - skyler-laptop:/home/skyler/
        - Google-Drive:/Data/Example/
        - koa:/Shared-Storage/skyler/
        - imina.soest.hawaii.edu:/htdocs/
- Note: Type out explicitly the device name to fully describe where the dataset is stored. This information will help you and other identify where the datasets are stored.



### 12. Check Do you plan on uploading to Zenodo?
![Step 12 screenshot](https://images.tango.us/workflows/e2aed1bc-5fb3-4842-8746-1fa30482f3e8/steps/3a03f5af-7b24-45e5-9c4d-7eb8c28ba12a/59701ffd-0332-4c20-a995-7b1b77c73e3b.png?crop=focalpoint&fit=crop&fp-x=0.6489&fp-y=0.8587&fp-z=3.0834&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=555&mark-y=472&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz05MCZoPTkwJmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D)
- Check yes if...
    - The dataset is already published on Zenodo
    - You plan on publishing on to Zenodo
- Don't check yes if...
    - The dataset will not be published on Zenodo


### 13. Click on SUBMIT
![Step 13 screenshot](https://images.tango.us/workflows/e2aed1bc-5fb3-4842-8746-1fa30482f3e8/steps/0d1fcf8e-ddf5-4010-8f8e-0005370ddf40/8673e820-0266-4e2f-9cb8-4cad26ae274f.png?crop=focalpoint&fit=crop&fp-x=0.6288&fp-y=0.9114&fp-z=2.6978&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=486&mark-y=646&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0yMjkmaD0xMDMmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)
- When information in the form is ready to be submitted, click the submit button. 
- Make sure all of the fields are filled out with information. Otherwise, you will not be able to submit the form
- Red text will appear underneath the field if there are any issues with the inputs after submitting
- Contact skyler8@hawaii.edu if you have any questions

<br/>

***
Created with [Tango.us](https://tango.us?utm_source=markdown&utm_medium=markdown&utm_campaign=workflow%20export%20links)
<br/>