---
id: translating-ui
title: Translate OpenRefine's interface
sidebar_label: Contributing as a translator
---

You can help translate OpenRefine into your language by visiting [Weblate](https://hosted.weblate.org/engage/openrefine/?utm_source=widget) which provides a web based UI to edit and add translations and sends automatic pull requests back to our project.

![Translation status](https://hosted.weblate.org/widgets/openrefine/-/287x66-grey.png)

Click to help translate --> [Weblate](https://hosted.weblate.org/engage/openrefine/?utm_source=widget)

The translation is best done [with Weblate](https://hosted.weblate.org/engage/openrefine/?utm_source=widget). Changes are pushed to OpenRefine's git repository and are included in the next release.

[Run OpenRefine from the master branch](/docs/technical-reference/build-test-run) and check whether translated words fit to the layout. Not all items can be translated word by word, especially into non-Ìndo-European languages.

If you see any text which remains in English even when you have checked all items, please create a bug report in the issue tracker so that the developers can fix it. Similarly report any cases where the developers have used string concatenation or layout to compose multi-part strings, rather than using the localization facilities.

## Translating extensions {#translating-extensions}

Extensions can be translated via Weblate just like the core software.

The Wikibase extension contains lots of domain-specific concepts, with which you may not be familiar. Wikidata may not have a reconciliation service for your language. We recommend checking the [Wikidata glossary](https://www.wikidata.org/wiki/Wikidata:Glossary) to be consistent.

## Developer documentation {#developer-documentation}

If you are a developer adding new strings or a new language to OpenRefine, see the [developer guide to localization](developer-guide-to-localization).
