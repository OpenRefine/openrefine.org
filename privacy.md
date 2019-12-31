---
layout: default
title: Data privacy
sidebar_link: false

---


<div id="content">

<h2 id="data-location">Where is my data stored?</h2>

<p>
  Data transformed with OpenRefine is stored locally on the computer where OpenRefine is installed.
  This includes your project data, history and preferences.
  This data is not replicated on any server.
</p>

<p>
  The exact location on your computer where data is stored depends on your operating system.
  Our wiki provides
  <a href="https://github.com/OpenRefine/OpenRefine/wiki/FAQ%3A-Where-Is-Data-Stored%3F">instructions
  to locate your workspace directory</a> on your computer.
</p>

<p>
  It is recommended that you back up your workspace directory regularly, in particular before
  upgrading to a newer version.
</p>

<h2 id="developers">Can OpenRefine developers access my data?</h2>

<p>
   No, your data cannot be accessed by OpenRefine developers as it is only stored locally on your
   computer.
</p>
<p>
  It is recommended that you back up your workspace directory regularly, in particular before
  upgrading to a newer version.
</p>

<h2 id="operations">Which OpenRefine operations transmit data to the outside world?</h2>

<p>
  Some operations, importers and exporters involve communicating with external services
  and therefore transmit some information to the outside world.
  We aim to make it obvious from the user interface that these operations rely on online
  services. This includes the following:
  <ul>
     <li>Adding a column by fetching URLs;</li>
     <li>Reconciling a column via a reconciliation service;</li>
     <li>Adding columns from a reconciled column via a reconciliation service;</li>
     <li>Selecting custom reconciliation matches;</li>
     <li>Importing or exporting data to Google Sheets or Google Drive;</li>
     <li>Importing or exporting data to a SQL database;</li>
     <li>Importing a file retrieved from a URL;</li>
     <li>Uploading data to Wikidata.</li>
  </ul>
  If you are unsure whether a particular workflow involves communicating with external
  services, <a href="community.html">just ask</a>.
</p>

<h2 id="encryption">Is my data encrypted?</h2>

<p>
  Data stored by OpenRefine on your computer is not encrypted by default.
  You can make sure data stored by OpenRefine is encrypted by setting up full disk
  encryption in your operating system.
</p>

<h2 id="cookies">Cookie policy</h2>

<p>
  OpenRefine does not store user data in cookies, except for OAuth authentication,
  used when importing or exporting projects to a Google Drive.
</p>

</div>

