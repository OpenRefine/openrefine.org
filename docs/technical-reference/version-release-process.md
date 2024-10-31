---
id: version-release-process
title: How to do an OpenRefine version release
sidebar_label: How to do an OpenRefine version release
---

When releasing a new version of Refine, the following steps should be followed:

1. Make sure the `master` branch is stable and nothing has broken since the previous version. We need developers to stabilize the trunk and some volunteers to try out `master` for a few days.
2. Change the version number in [RefineServlet.java](http://github.com/OpenRefine/OpenRefine/blob/master/main/src/com/google/refine/RefineServlet.java#L62) and in the POM files using `mvn versions:set -DgenerateBackupPoms=false -DnewVersion=3.9-beta`. Commit the changes.
3. Compose the list of changes in the code and on the wiki. If the issues have been updated with the appropriate milestone, the Github issue tracker should be able to provide a good starting point for this.
4. Tag the release candidate in git and push the tag to Github. For example:
```shell
git tag -a -m "Second beta" 2.6-beta.2
    git push origin --tags
```
5. Create a GitHub release based on that tag, with a summary of the changes as description of the release. Publishing the GitHub release will trigger the generation of the packaged artifacts, which will be added to the release on GitHub. Note that if you create a draft release and then publish it, it may not trigger the release workflow on Github Actions.
6. Once the artifacts are ready, update the [`releases.json`](https://github.com/OpenRefine/openrefine.org/blob/master/releases.json) file in the openrefine.org repository to reflect this new version. Verify that the correct versions are shown at [http://openrefine.org/download](http://openrefine.org/download)
7. [Update the OpenRefine Homebrew cask](https://openrefine.org/docs/technical-reference/homebrew-cask-process) or coordinate an update via the [developer forum](https://forum.openrefine.org/c/dev/8)
8. Announce on the [announcements section of the OpenRefine forum](https://forum.openrefine.org/c/news/13), or even on the [blog](https://openrefine.org/blog) if this is a major release (the blog is imported automatically into the announcements category
    of the forum)
9. Update the version in master to the next version number with `-SNAPSHOT` (such as `4.3-SNAPSHOT`), in the same places as in step 2.

Apple code signing
==================

We have code signing certificates for our iOS distributions. Those are available in our build environment and you should not need to import them to your own machine to make a release (since you are not building the release yourself). But if the signing process fails, it can be useful to import the certificates on your own machine to debug the process. To do so:
* Request advisory.committee@openrefine.org to be added to the Apple team: you need to provide the email address that corresponds to your AppleID account;
* Create a certificate signing request from your Mac: https://help.apple.com/developer-account/#/devbfa00fef7
* Go to https://developer.apple.com/account/resources/certificates/add and select "Apple Distribution" as certificate type
* Upload the certificate signing request in the form
* Download the generated certificate
* Import this certificate in the "Keychain Access" app on your mac
* The signing workflow can be found in `.github/workflows/snapshot_release.yml`

