---
id: extension-dev-playbook
title: So you want to write an extension?
sidebar_label: Extension developer playbook
---

Extensions are a great way to provide additional functionality to OpenRefine. Prior contribution experience is helpful but not necessary to start. While each extension is different, they usually follow the same set of milestones. This page provides suggestions for how to use those milestones to help structure the development of your extension. If you have any additional questions, feel free to ask them in [the forum](#join-our-community).

## Before getting started {#before-getting-started}
Every extension should follow OpenRefine’s [mission](/mission_vision), which is to build a more informed world where working with data is easy and engaging. Our vision is empowering everyone to meaningfully engage with data by providing an accessible open source tool and nurturing a diverse, supportive community.

To achieve this mission, [project faculty and volunteers](https://github.com/OpenRefine/OpenRefine/blob/master/GOVERNANCE.md#roles-and-responsibilities) have formed community groups to address the various needs of the project. Community groups include the core developer group and the committer group on GitHub. There is also an informal community of extension developers on GitHub and the forum. The extension contributor community functions in synergy with the OpenRefine core developer group. It is closer to a [do-ocracy](https://communityrule.info/templates/do-ocracy.html) in that whoever has the time and resources to work on a project can do so without the explicit approval of the entire community. For you, this means that you can start working on any extension you like without any prior approval from the core developer group, but this also means that you should follow this guide to ensure a smooth integration of your extension to the OpenRefine ecosystem.

### Do your homework {#do-your-homework}
Anyone with some experience with programming and git should be able to get started writing an extension. Make sure you have a good grasp of OpenRefine’s basics as a [user](/docs). Also, take some time to make sure you have a sufficient understanding of the [codebase](https://github.com/openrefine/openrefine) for your needs. The [architecture documentation](/docs/technical-reference/architecture-before-4) can help identify and explain relevant sections of the software.

### Join our community {#join-our-community}
OpenRefine's [forum](https://forum.openrefine.org/) is at the heart of our collaboration. In it, discussions, announcements, and design-related topics are shared. It is a great place to ask questions, get help, and meet other OpenRefine users and developers.

Once you've joined the forum, take a moment to introduce yourself in the [introduction thread](https://forum.openrefine.org/t/introductions-thread/69/). Let us know about your background, interests, and what aspects of design and coding you're passionate about. This is a great way for us to get to know you better and for you to connect with fellow community members.

Engage in discussions on the project's forum to share more general insights, seek guidance, and collaborate with fellow contributors. Your active involvement helps foster a supportive community and enables valuable knowledge exchange, contributing to the collective growth of the OpenRefine project.

All technical work happens on [GitHub](/docs/technical-reference/github). Even though extensions are separate from the main OpenRefine codebase, the discussions on issues and pull requests can provide valuable insight.

## Ideation {#ideation}
You now have an idea and you’re ready to start coding? Great! One of your first steps should be to start a discussion about your extension idea in the forum. This will help bring awareness to your project and signal that the community should keep an eye out for your extension. Other people might already be working on a similar project and could offer some help. At this point, you should also evaluate your ability to commit to maintaining and communicating about your extension. Extension contributors come and go, sometimes resulting in outdated extensions that become incompatible with the new codebase releases. If you feel like you might not be able to commit a lot of time to the maintenance of your extension, read along, as there may be options to keep your extension available to OpenRefine’s users with minimal involvement from you!

If you would like to contribute to OpenRefine but aren’t sure where to start, have a look at [the goalpost page](/docs/technical-reference/goal-posts) for a list of current needs. You could also check out the [extension directory](/extensions) for existing extensions. For example, if an extension is incompatible with the latest version of OpenRefine, updating the extension could be a welcome contribution.

## Development {#development}
Extension development should start by creating a new repository based on the [sample extension template](https://github.com/OpenRefine/sample-extension/). Extension developers work on their own timeline, outside of the core contributor schedule. However, you should make sure that you are working with the latest version of OpenRefine and that you keep track of [releases](https://github.com/OpenRefine/OpenRefine/releases).

One of the most important parts of development is feedback, which you should seek through the forum. This [blog post on asking questions](https://jvns.ca/blog/good-questions/) can help you structure your thoughts to get the most helpful response from other forum users.

When engaging in discussions and reviews, share your work on a public platform such as GitHub to gather feedback on usability, aesthetics, and project alignment. Refine your designs to incorporate the feedback while ensuring that they still meet the goals identified in the original  issue.

Collaborate with maintainers and contributors to prioritize the order of addressing and implementing tasks, considering the community's size and potential competing responsibilities. Be aware that feedback from project maintainers and experienced contributors might take time due to the community's small scale and other ongoing tasks.

The [community page](/community) has more information on how to reach other OpenRefine community members.

### When your extension clashes with the codebase {#when-your-extension-clashes}
Extension creators commit to their own extension and define their own level of commitment. However, your project might hit an issue related to the core codebase, which is mostly maintained by volunteers. If and when this happens, please follow the general procedure for [reporting and tracking issues](/docs/technical-reference/contributing#reporting-and-tracking-issues).

## Testing your prototype {#testing-your-prototype}
When your extension has progressed enough that there is something concrete for users to test and review, announce your prototype in a forum post. You should not expect immediate feedback, as most contributors are volunteers. However, if you are not receiving any feedback after one week, you should reach out to a member of the [project faculty](https://github.com/OpenRefine/OpenRefine/blob/master/GOVERNANCE.md#roles-and-responsibilities) for suggestions.

## General release {#general-release}
Once your extension is tested and ready for a general release, you should announce it in a forum post. Please ensure that your repository contains the following information for your extension to be added to the OpenRefine [extension directory](/extensions):

- **Link to the repository**: or URI to download the extension
- **License**: under which license the extension is released. 
- **A link to forum threads discussing it**: this should already be available if you have followed this guide. Otherwise, create a post to announce your extension.
- **Description of the extension**: input, expected behavior, output
- **Compatible OpenRefine version**: currently compatible version
- **Commitment statement**: how much support you’re willing to provide (no wrong answers)
- **Maintenance statement**: compatibility updates (again, no wrong answers), how much you’re willing to maintain that extension (good for us to know if that extension becomes popular)
- **Contact Method**: it could be an issue tracker, an email, or any way for the community to communicate with you 
- **AI statement**: whether or not your extension has been created using AI, whether or not you understand the behavior of that extension and could help debugging it.
- **Estimated end-of-life date for the extension**: no wrong answer, could be never if you fully commit to supporting and maintaining it, could also be vague like “as long as it’s compatible without any action from me”
- **Community achievements**: how you want your extension to be cited, any DOI or permanent reference

## Maintenance {#maintenance}
Maintaining your mature extension should be fairly uninvolved, aside from any major refactorings of OpenRefine that would render your extension incompatible. There are two main steps that will ensure that your extension remains up to date:
- Compatibility checks (we’re currently looking for beta testers)
- Open a pull request to the [extensions list](https://github.com/OpenRefine/openrefine.org/blob/master/src/pages/extensions.md) to update the maximum supported version

It is expected that extension authors respond to basic communication through GitHub (like responding to new issues and pull requests). This is an important method of communication between extension authors and the core OpenRefine project (i.e. this is how core developers can reach out to extension authors re: breaking changes or other project discussions).

You should regularly assess how much time and resources you can commit to maintaining your extension. Should you realize that you do not have the capacity to maintain that extension, move to offboarding.

## Offboarding {#offboarding}
Volunteering as an extension contributor can be very rewarding but also demanding. If you cannot meet the maintenance requirements for your project, it does not mean that your extension is doomed to obsolescence. Your first step should be to write a forum post about your desire to offboard your project. If other volunteers are willing to take over your project, it is your responsibility to ensure that the respective commitments are clearly communicated and understood by all involved parties. It is also up to you to decide who takes the ownership of the repository. If you find that no one is willing to get involved in maintaining the project, reach out to the [project faculty](https://github.com/OpenRefine/OpenRefine/blob/master/GOVERNANCE.md#roles-and-responsibilities) to let them know of the end of life of your project. Then, post on the forum that the currently supported version will be the last tested version, and that the extension will not be maintained from now on. Please also open a pull request to update the extension directory to reflect this.

