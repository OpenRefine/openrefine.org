---
author: Antonin Delpeuch
title: "We're hiring a designer!"
---

OpenRefine is hiring a designer to help shape our improvements to OpenRefine's operation history and test those changes with user panels.
<!--truncate-->

[OpenRefine](https://openrefine.org/) is a power tool for working with messy data, popular in a diverse range of communities. It has been serving the needs of journalists, librarians, Wikipedians, scientists for more than 13 years and is taught in many curricula and workshops around the world. OpenRefine is a fiscally sponsored project of [Code for Science & Society Inc](https://codeforscience.org/), a 501(c)(3) charitable organization in the USA.

OpenRefine has long had an Undo History & Redo capability which users have repurposed to execute operation histories, potentially modified, on the same or different projects. As part of [a project funded by the Essential Open Source Software for Science program](https://chanzuckerberg.com/eoss/proposals/improving-openrefines-reproducibility/), we are working on replacing this by a proper notion of OpenRefine *workflows* (or *macros*, *recipes*…), with a better usability and appropriate reproducibility guarantees.
This consists of improving the user experience around OpenRefine's operation history, which tracks all transformations applied on the original data. This work aims to address a range of long standing issues, such as:
- limitations of the Undo/Redo functionality, such as the lack of ability to undo an operation in the middle of the history list ([#183](https://github.com/OpenRefine/OpenRefine/issues/183)) or unintentional loss of work after using the undo feature and
  applying a new operation ([#369](https://github.com/OpenRefine/OpenRefine/issues/369), [#3184](https://github.com/OpenRefine/OpenRefine/issues/3184))
- the difficulty in reusing and sharing OpenRefine workflows, due to the lack of error handling when applying series of operations and the difficulty to adapt a workflow to a new project (for instance, with different column names)
- the lack of support for running OpenRefine workflows as a part of larger pipelines, without using the web UI interactively. This covers, for instance, the lack of import metadata in the JSON export of the history
  ([#460](https://github.com/OpenRefine/OpenRefine/issues/460)).

See the corresponding [GitHub project](https://github.com/orgs/OpenRefine/projects/6) for more issues in the scope of this project.

We are looking for a part-time designer who will
* design changes to the user interface to support those improvements;
* design the representation of series of operations forming workflows, to make those easier to manipulate by users;
* validate those choices by conducting user testing sessions;
* help prioritize follow-up improvements based on user feedback.

Requirements: 
* Experience with design and usability testing of user application software
* Ability to work in a fully remote environment
* Good communication skills and fluency in English
* Familiarity with OpenRefine or other data cleaning systems

Nice to have:
* Experience with open source development practices and tools (such as the use of GitHub Issues)
* Ability to travel to occasional events related to OpenRefine, to present this work and engage with the broader community

**TODO compensation details**
This role is available immediately for an initial contract duration of 6 months, which can be extended. Beyond the remaining duration of this project around reproducibility (1.5 year), we hope to be able to extend this role to work on other areas of the tool as other opportunities arise.

We invite applicants to send their CV and a short motivation statement at **TODO application email address**. Applications will be reviewed on a rolling basis starting on July 30th until the position is filled.

*OpenRefine is fiscally sponsored by Code for Science and Society (CS&S). CS&S is an equal opportunity employer committed to hiring a diverse workforce at all levels of the organization thereby creating a culture that allows us to better serve our clientele, our employees and our communities. We value and encourage the contributions of our colleagues and strive to create an environment where everyone can reach their full potential and drive outstanding results. All qualified applicants will receive consideration for employment without regard to race, national origin, age, sex, religion, disability, sexual orientation, marital status, veteran status, gender identity or expression, or any other basis protected by local, state, or federal law. This policy applies with regard to all aspects of one's employment, including hiring, transfer, promotion, compensation, eligibility for benefits, and termination.*

