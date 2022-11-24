---
authors:
  - name: Antonin Delpeuch
title: "Looking for help with Windows and MacOS packaging"
slug: windows-macos-packaging
---

OpenRefine's packaging for MacOS and Windows could be improved in many ways, and we are looking for help in this front.
We are looking for proposals from prospective contractors to improve the install experience of OpenRefine on MacOS and/or Windows.
After a similar effort on Ubuntu/Debian packaging, this initiative is meant to improve the user experience on other platforms, to lower the install barrier for a broader audience.
This project is funded by an [EOSS Diversity and Inclusion grant](https://cziscience.medium.com/advancing-diversity-and-inclusion-in-scientific-open-source-eaabe6a5488b) from [CZI](https://chanzuckerberg.com/).

We are hoping that those proposals could solve some of the following issues:
* (MacOS) [Provide an Applications shortcut in the DMG distribution, with a suitable background (#5205)](https://github.com/OpenRefine/OpenRefine/issues/5205)
* (MacOS) [Sign and notarize our DMG distribution (#2191)](https://github.com/OpenRefine/OpenRefine/issues/2191)
* (Windows) [Offer a proper installer / uninstaller on Windows (#3224)](https://github.com/OpenRefine/OpenRefine/issues/3224)
* (Windows) [Give an easier way to start and stop OpenRefine with a system tray integration and log viewer (#3221)](https://github.com/OpenRefine/OpenRefine/issues/3221)
* (Windows) [Configuration for OpenRefine on Windows should use only 1 config file (.ini) (#3057)](https://github.com/OpenRefine/OpenRefine/issues/3057)
* (Windows) [Sign openrefine.exe to eliminate extra security warnings (#3003)](https://github.com/OpenRefine/OpenRefine/issues/3003)

All new packaging steps should be integrated in our Continuous Deployment infrastructure (currently running on GitHub Actions), if not in our Maven packaging configuration itself.

We have funding to contract out this work to freelancers.
To respond to this opportunity, please send the following to advisory.committee@openrefine.org:
* a short description of the changes you propose to introduce and how they relate to the issues above
* your price for this work
* any pointers to some related work in other projects (or anything that can help us assess your ability to carry out the proposed work)

You are encouraged to discuss your proposed changes (such as the packaging tools you intend to use) with the contributor community (such as on the [openrefine-dev](https://groups.google.com/g/openrefine-dev/?pli=1) mailing list or in GitHub issues).

Proposals will be reviewed by our [project director and advisory committee](https://github.com/OpenRefine/OpenRefine/blob/master/GOVERNANCE.md). Feel free to get in touch with us if you have any questions about this call.

*OpenRefine is fiscally sponsored by Code for Science and Society (CS&S). CS&S is an equal opportunity employer committed to hiring a diverse workforce at all levels of the organization thereby creating a culture that allows us to better serve our clientele, our employees and our communities. We value and encourage the contributions of our colleagues and strive to create an environment where everyone can reach their full potential and drive outstanding results. All qualified applicants will receive consideration for employment without regard to race, national origin, age, sex, religion, disability, sexual orientation, marital status, veteran status, gender identity or expression, or any other basis protected by local, state, or federal law. This policy applies with regard to all aspects of one's employment, including hiring, transfer, promotion, compensation, eligibility for benefits, and termination.*
