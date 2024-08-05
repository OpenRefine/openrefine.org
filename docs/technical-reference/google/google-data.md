---
id: google-data
title: Google Data extension
sidebar_label: Google Data extension
---

# Google Data extension (technical)

## Steps to obtain OAuth credentials

:::info
For the development version of OpenRefine only.  For usage, see [Starting - Create a project by importing data - Google data](manual/starting.md#google-data)
:::

To obtain data from [Google Drive](https://www.google.com/drive/) or [Google Sheets](https://www.google.com/sheets/about/) for OpenRefine requires OAuth credentials.

## Google API Console 
For obtaining the OAuth credentials follow these steps:

1. Go to the [Google API Console](https://console.developers.google.com/)
2. Click on **Create Project**.
3. Pick a project name such as **My OpenRefine Dev Project**.
4. Fill the required fields.
5. Hit **Create** for creating the project. 
6. Pick **Enable APIs and Services**.

## Enable the services
* Google Sheets API
* Google Drive API

## OAuth consent screen pane
1. Go to the **OAuth consent screen pane**.
2. As user type, pick **External**. 
3. Fill the form for the OAuth credentials. 
4. For the OAuth scopes, pick ../auth/drive/ which will give you write access to your Google Drive.
5. For the domain (and other URLs), you can pick anything (since the localhost will be allowed anyway). 
6. Hit **Save** to save the consent screen.

## Credentials pane
1. Go to the **Credentials pane**.
2. Create new OAuth credentials, adding as allowed origin `http://127.0.0.1:3333`, and as allowed callback URL: `http://127.0.0.1:3333/extension/gdata/authorized`
3. Copy your **client id**, **client secret key**
4. Go back to the **Credentials Pane**, and create a new **API key**. Copy its value.
5. Backup and save the **client id** and **secret key** in a file __outside__ your git clone of OpenRefine.
    :::warning
    Never publish secret keys to public git repos.
    ::: 

6. Add Java property definitions for your client id and secret key by adding

    ```
    -Dext.gdata.clientid=<yourid> -Dext.gdata.clientsecret=... -Dext.gdata.apikey=...
    ```
    
    to your JVM arguments. This can be done by editing the `refine.ini` file at the root of the code base.