---
id: developer-guide-to-localization
title: Developer guide to localization
sidebar_label: Localizing OpenRefine
---

This page explains how developers should handle localization when writing or modifying OpenRefine's front end and back end. For information on contributing translations, see [Translate OpenRefine's interface](translating-ui).

## Translation format {#translation-format}

Localized strings are entered in a `.json` file, one per language. They are located in the folder `main/webapp/modules/core/langs/` in a file named `translation-xx.json`, where `xx` is the language code (i.e. `fr` for French).

### Simple case of localized string {#simple-case-of-localized-string}
This is an example of a simple string, with the start of the JSON file. This example is for French.
```
{
    "name": "Français",
    "core-index/help": "Aide",
    (… more lines)
}
```

So the key `core-index/help` will render as `"Aide"` in French.

### Localization with a parameterized value {#localization-with-a-parameterized-value}
In this example, the name of the column (represented by `$1` in this example), will be substituted with the string of the name of the column.

`"core-facets/edit-facet-title": "Cliquez ici pour éditer le nom de la facette\nColonne : $1",`

### Localization with a singular/plural value {#localization-with-a-singularplural-value}

In this example, one of the parameters will have a different string depending on whether the value is 1 or another value. The string for page, the second parameter `$2`, will have an « s » or not depending on the value of `$2`.

`"core-views/goto-page": "$1 de $2 {{plural:$2|page|pages}}"`

#### Languages with more than two plural forms {#languages-with-more-plural-forms}

Some languages have more than two plural forms. For example, Russian has three forms (one, few, many) and Arabic has six (zero, one, two, few, many, other). The `{{plural:$n|...}}` syntax supports these through [CLDR plural rules](https://cldr.unicode.org/index/cldr-spec/plural-rules).

You can specify named CLDR keyword forms:

```
{{plural:$1|one=singular form|few=few form|many=many form|other=default form}}
```

The English default strings should use the simple `one|other` positional syntax. Translators for languages with more complex plural rules should use the named keyword syntax in their translation files.

## Front-end development {#front-end-development}

The OpenRefine front end has been localized using the [Wikimedia jquery.i18n library](https://github.com/wikimedia/jquery.i18n). The localized text is stored in a JSON dictionary on the server and retrieved with a new OpenRefine command.

### Adding a new string {#adding-a-new-string}

There should be no hard-coded language strings in the HTML or JSON used for the front end.  If you need a new string, first check the existing strings to make sure there isn't an equivalent string, **in an equivalent context**, that you can reuse.  Context is important because it can affect how the same literal English text is translated. This cuts down on the amount of text which needs to be translated.

Strings should be entire sentences or phrases and should include substitution variables for any parameters. Do not concatenate strings in either Java or JavaScript (or implicitly by laying them out in a specific order in the HTML). So, instead of `"You have " + count + " row(s)"` (or worse `count != 1 ? " rows" : " row"`), internationalize everything together so that it can be translated taking into account word ordering and plurals for different languages, ie `"You have $1 {{plural:$1|row|rows}}"`, passing the parameter(s) into the `$.i18n` call.

This is especially important for non-Indo-European languages, where word order, agreement, and grammatical structure can differ greatly from English. Concatenating fragments, or composing a sentence by positioning elements with CSS or HTML layout, makes it impossible for translators to produce natural-sounding results.

If there's no string you can reuse, allocate an available key in the appropriate translation dictionary and add the default string, e.g.

```json
...,
"section/newkey": "new default string for this key",
...
```

and then set the text (or HTML) of your HTML element using i18n helper method. So given an HTML fragment like:
```html
<label id="new-element-id">[untranslated text would have appeared here before]</label>
```
we could set its text using:
```javascript
$('#new-html-element-id').text($.i18n('section/newkey'));
```
or, if you need to embed HTML tags:
```javascript
$('#new-html-element-id').html($.i18n('section/newkey'));
```

HTML should be avoided as it can enable [cross-scripting attacks](https://owasp.org/www-community/attacks/xss/).

### Adding a new language {#adding-a-new-language}

The language dictionaries are stored in the `langs` subdirectory for the module e.g.

* https://github.com/OpenRefine/OpenRefine/tree/master/main/webapp/modules/core/langs for the main interface
* https://github.com/OpenRefine/OpenRefine/tree/master/extensions/database/module/langs for database via JDBC
* https://github.com/OpenRefine/OpenRefine/tree/master/extensions/wikibase/module/langs for the Wikibase extension

To add support for a new language, the easiest way is to do it directly in Weblate. To do it manually, copy `translation-en.json` to `translation-<locale>.json` and have your translator translate all the value strings (ie right hand side).

Once the translation file is in place, register the language in the dropdown menu in `/OpenRefine/main/webapp/modules/core/scripts/index/lang-settings-ui.html`. The entry should look like:
```html
<option value="<locale>">[Language Label]</option>
```

By default, the system tries to load the language file corresponding to the currently in-use browser language. The "Language Settings" menu item on the index page allows users to override this setting.

## Server-side localisation {#server-side-localisation}

Certain areas of the back-end can also be localized, also via Weblate.
The translated strings are stored in `.properties` file, from which Java classes are generated at compilation time.
For instance, operation descriptions are stored under [`main/resources/com/google/refine/operations`](https://github.com/OpenRefine/OpenRefine/tree/master/main/resources/com/google/refine/operations/).
