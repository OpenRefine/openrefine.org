---
id: version-release-process
title: How to do an OpenRefine version release
sidebar_label: How to do an OpenRefine version release
---

OpenRefine release process
==================

Major or minor version release
==================

When releasing a new major or minor version of Refine, the following steps should be followed:

1. Make sure the `master` branch is stable and nothing has broken since the previous version. We need developers to stabilize the trunk and some volunteers to try out `master` for a few days.
2. Create a new branch with the expected major and minor version, without a patch number (e.g. `3.0`, `3.8`, `3.9`, etc.)
3. Change the version number in [RefineServlet.java](http://github.com/OpenRefine/OpenRefine/blob/master/main/src/com/google/refine/RefineServlet.java#L62) by editing it manually and in the POM files by using `mvn versions:set -DgenerateBackupPoms=false -DnewVersion=3.9-beta`. Commit the changes.
4. Prepare a changelog in Markdown format, to be added to the release description. If the issues have been updated with the appropriate milestone, the Github issue tracker should be able to provide a good starting point for this.
5. Tag the release candidate in git and push the tag to Github. For example:
```shell
git tag -a -m "Second beta" 2.6-beta.2
git push origin --tags
```
6. Create a GitHub release based on that tag, with a summary of the changes as description of the release. Publishing the GitHub release will trigger the generation of the packaged artifacts, which will be added to the release on GitHub.
7. Once the artifacts are ready, update the [`releases.json`](https://github.com/OpenRefine/openrefine.org/blob/master/releases.json) file in the openrefine.org repository to reflect this new version. Verify that the correct versions are shown at [http://openrefine.org/download](http://openrefine.org/download)
8. Announce on the [announcements section of the OpenRefine forum](https://forum.openrefine.org/c/news/13), or even on the [blog](https://openrefine.org/blog) if this is a major release (the blog is imported automatically into the announcements category
    of the forum)
9. Update the version in master to the next version number with `-SNAPSHOT` (such as `4.3-SNAPSHOT`), in the same places as in step 2.

Patch version release
==================

Unlike major and minor versions, patch releases of OpenRefine do not happen from the `master` branch. Instead, they build off of the latest release for a specific minor version. When performing a patch release you will need a list of pull requests to be included in the release. Once you have a complete list of changes, please use the following steps:

1. Check out the branch for the minor version to which this release belongs (e.g. check out `3.9` if releasing `3.9.3`).
2. Change the version number in [RefineServlet.java](http://github.com/OpenRefine/OpenRefine/blob/master/main/src/com/google/refine/RefineServlet.java#L62) by editing it manually and in the POM files by using `mvn versions:set -DgenerateBackupPoms=false -DnewVersion=3.9.3`. Commit the changes.
3. For each pull request to be included in the release, find the commit created when the PR was squashed and merged. Cherry pick that commit into the release branch using `git cherry-pick <commit hash>`. Manually resolve any merge conflicts if they exist.
4. Once all pull requests are merged, tag the release candidate in git and push the tag to GitHub. For example:
```shell
git tag -a -m "Version 3.9.3" 3.9.3
git push origin --tags
```
5. Create a GitHub release based on that tag, with a summary of the changes as description of the release. Publishing the GitHub release will trigger the generation of the packaged artifacts, which will be added to the release on GitHub. 
6. Once the artifacts are ready, update the [`releases.json`](https://github.com/OpenRefine/openrefine.org/blob/master/releases.json) file in the openrefine.org repository to reflect this new version. Verify that the correct versions are shown at [http://openrefine.org/download](http://openrefine.org/download)
7. Announce on the [announcements section of the OpenRefine forum](https://forum.openrefine.org/c/news/13), or even on the [blog](https://openrefine.org/blog) if this is a major release (the blog is imported automatically into the announcements category
    of the forum)
8. Update the version in the minor version branch to the minor version number with `-SNAPSHOT` (such as `3.9-SNAPSHOT`), in the same places as in step 2.

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

Maven artifact publishing
========================

Maven artifacts are published to [the `org.openrefine` namespace in Maven Central](https://central.sonatype.com/artifact/org.openrefine/openrefine/overview) by a small set of approved release managers. Access to the namespace is managed by emailing Sonatype support (only). Core developer group members and community members with access to the `openrefinedev@gmail.com` account can contact Sonatype support to manage access to the namespace.
