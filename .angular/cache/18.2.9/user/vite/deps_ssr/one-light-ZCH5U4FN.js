import { createRequire } from 'module';const require = createRequire(import.meta.url);
import "./chunk-NQ4HTGF6.js";

// node_modules/shiki/dist/themes/one-light.mjs
var oneLight = Object.freeze({
  "colors": {
    "activityBar.background": "#FAFAFA",
    "activityBar.foreground": "#121417",
    "activityBarBadge.background": "#526FFF",
    "activityBarBadge.foreground": "#FFFFFF",
    "badge.background": "#526FFF",
    "badge.foreground": "#FFFFFF",
    "button.background": "#5871EF",
    "button.foreground": "#FFFFFF",
    "button.hoverBackground": "#6B83ED",
    "diffEditor.insertedTextBackground": "#00809B33",
    "dropdown.background": "#FFFFFF",
    "dropdown.border": "#DBDBDC",
    "editor.background": "#FAFAFA",
    "editor.findMatchHighlightBackground": "#526FFF33",
    "editor.foreground": "#383A42",
    "editor.lineHighlightBackground": "#383A420C",
    "editor.selectionBackground": "#E5E5E6",
    "editorCursor.foreground": "#526FFF",
    "editorGroup.background": "#EAEAEB",
    "editorGroup.border": "#DBDBDC",
    "editorGroupHeader.tabsBackground": "#EAEAEB",
    "editorHoverWidget.background": "#EAEAEB",
    "editorHoverWidget.border": "#DBDBDC",
    "editorIndentGuide.activeBackground": "#626772",
    "editorIndentGuide.background": "#383A4233",
    "editorInlayHint.background": "#F5F5F5",
    "editorInlayHint.foreground": "#AFB2BB",
    "editorLineNumber.activeForeground": "#383A42",
    "editorLineNumber.foreground": "#9D9D9F",
    "editorRuler.foreground": "#383A4233",
    "editorSuggestWidget.background": "#EAEAEB",
    "editorSuggestWidget.border": "#DBDBDC",
    "editorSuggestWidget.selectedBackground": "#FFFFFF",
    "editorWhitespace.foreground": "#383A4233",
    "editorWidget.background": "#EAEAEB",
    "editorWidget.border": "#E5E5E6",
    "extensionButton.prominentBackground": "#3BBA54",
    "extensionButton.prominentHoverBackground": "#4CC263",
    "focusBorder": "#526FFF",
    "input.background": "#FFFFFF",
    "input.border": "#DBDBDC",
    "list.activeSelectionBackground": "#DBDBDC",
    "list.activeSelectionForeground": "#232324",
    "list.focusBackground": "#DBDBDC",
    "list.highlightForeground": "#121417",
    "list.hoverBackground": "#DBDBDC66",
    "list.inactiveSelectionBackground": "#DBDBDC",
    "list.inactiveSelectionForeground": "#232324",
    "notebook.cellEditorBackground": "#F5F5F5",
    "notification.background": "#333333",
    "peekView.border": "#526FFF",
    "peekViewEditor.background": "#FFFFFF",
    "peekViewResult.background": "#EAEAEB",
    "peekViewResult.selectionBackground": "#DBDBDC",
    "peekViewTitle.background": "#FFFFFF",
    "pickerGroup.border": "#526FFF",
    "scrollbarSlider.activeBackground": "#747D9180",
    "scrollbarSlider.background": "#4E566680",
    "scrollbarSlider.hoverBackground": "#5A637580",
    "sideBar.background": "#EAEAEB",
    "sideBarSectionHeader.background": "#FAFAFA",
    "statusBar.background": "#EAEAEB",
    "statusBar.debuggingForeground": "#FFFFFF",
    "statusBar.foreground": "#424243",
    "statusBar.noFolderBackground": "#EAEAEB",
    "statusBarItem.hoverBackground": "#DBDBDC",
    "tab.activeBackground": "#FAFAFA",
    "tab.activeForeground": "#121417",
    "tab.border": "#DBDBDC",
    "tab.inactiveBackground": "#EAEAEB",
    "titleBar.activeBackground": "#EAEAEB",
    "titleBar.activeForeground": "#424243",
    "titleBar.inactiveBackground": "#EAEAEB",
    "titleBar.inactiveForeground": "#424243"
  },
  "displayName": "One Light",
  "name": "one-light",
  "tokenColors": [{
    "scope": ["comment"],
    "settings": {
      "fontStyle": "italic",
      "foreground": "#A0A1A7"
    }
  }, {
    "scope": ["comment markup.link"],
    "settings": {
      "foreground": "#A0A1A7"
    }
  }, {
    "scope": ["entity.name.type"],
    "settings": {
      "foreground": "#C18401"
    }
  }, {
    "scope": ["entity.other.inherited-class"],
    "settings": {
      "foreground": "#C18401"
    }
  }, {
    "scope": ["keyword"],
    "settings": {
      "foreground": "#A626A4"
    }
  }, {
    "scope": ["keyword.control"],
    "settings": {
      "foreground": "#A626A4"
    }
  }, {
    "scope": ["keyword.operator"],
    "settings": {
      "foreground": "#383A42"
    }
  }, {
    "scope": ["keyword.other.special-method"],
    "settings": {
      "foreground": "#4078F2"
    }
  }, {
    "scope": ["keyword.other.unit"],
    "settings": {
      "foreground": "#986801"
    }
  }, {
    "scope": ["storage"],
    "settings": {
      "foreground": "#A626A4"
    }
  }, {
    "scope": ["storage.type.annotation", "storage.type.primitive"],
    "settings": {
      "foreground": "#A626A4"
    }
  }, {
    "scope": ["storage.modifier.package", "storage.modifier.import"],
    "settings": {
      "foreground": "#383A42"
    }
  }, {
    "scope": ["constant"],
    "settings": {
      "foreground": "#986801"
    }
  }, {
    "scope": ["constant.variable"],
    "settings": {
      "foreground": "#986801"
    }
  }, {
    "scope": ["constant.character.escape"],
    "settings": {
      "foreground": "#0184BC"
    }
  }, {
    "scope": ["constant.numeric"],
    "settings": {
      "foreground": "#986801"
    }
  }, {
    "scope": ["constant.other.color"],
    "settings": {
      "foreground": "#0184BC"
    }
  }, {
    "scope": ["constant.other.symbol"],
    "settings": {
      "foreground": "#0184BC"
    }
  }, {
    "scope": ["variable"],
    "settings": {
      "foreground": "#E45649"
    }
  }, {
    "scope": ["variable.interpolation"],
    "settings": {
      "foreground": "#CA1243"
    }
  }, {
    "scope": ["variable.parameter"],
    "settings": {
      "foreground": "#383A42"
    }
  }, {
    "scope": ["string"],
    "settings": {
      "foreground": "#50A14F"
    }
  }, {
    "scope": ["string > source", "string embedded"],
    "settings": {
      "foreground": "#383A42"
    }
  }, {
    "scope": ["string.regexp"],
    "settings": {
      "foreground": "#0184BC"
    }
  }, {
    "scope": ["string.regexp source.ruby.embedded"],
    "settings": {
      "foreground": "#C18401"
    }
  }, {
    "scope": ["string.other.link"],
    "settings": {
      "foreground": "#E45649"
    }
  }, {
    "scope": ["punctuation.definition.comment"],
    "settings": {
      "foreground": "#A0A1A7"
    }
  }, {
    "scope": ["punctuation.definition.method-parameters", "punctuation.definition.function-parameters", "punctuation.definition.parameters", "punctuation.definition.separator", "punctuation.definition.seperator", "punctuation.definition.array"],
    "settings": {
      "foreground": "#383A42"
    }
  }, {
    "scope": ["punctuation.definition.heading", "punctuation.definition.identity"],
    "settings": {
      "foreground": "#4078F2"
    }
  }, {
    "scope": ["punctuation.definition.bold"],
    "settings": {
      "fontStyle": "bold",
      "foreground": "#C18401"
    }
  }, {
    "scope": ["punctuation.definition.italic"],
    "settings": {
      "fontStyle": "italic",
      "foreground": "#A626A4"
    }
  }, {
    "scope": ["punctuation.section.embedded"],
    "settings": {
      "foreground": "#CA1243"
    }
  }, {
    "scope": ["punctuation.section.method", "punctuation.section.class", "punctuation.section.inner-class"],
    "settings": {
      "foreground": "#383A42"
    }
  }, {
    "scope": ["support.class"],
    "settings": {
      "foreground": "#C18401"
    }
  }, {
    "scope": ["support.type"],
    "settings": {
      "foreground": "#0184BC"
    }
  }, {
    "scope": ["support.function"],
    "settings": {
      "foreground": "#0184BC"
    }
  }, {
    "scope": ["support.function.any-method"],
    "settings": {
      "foreground": "#4078F2"
    }
  }, {
    "scope": ["entity.name.function"],
    "settings": {
      "foreground": "#4078F2"
    }
  }, {
    "scope": ["entity.name.class", "entity.name.type.class"],
    "settings": {
      "foreground": "#C18401"
    }
  }, {
    "scope": ["entity.name.section"],
    "settings": {
      "foreground": "#4078F2"
    }
  }, {
    "scope": ["entity.name.tag"],
    "settings": {
      "foreground": "#E45649"
    }
  }, {
    "scope": ["entity.other.attribute-name"],
    "settings": {
      "foreground": "#986801"
    }
  }, {
    "scope": ["entity.other.attribute-name.id"],
    "settings": {
      "foreground": "#4078F2"
    }
  }, {
    "scope": ["meta.class"],
    "settings": {
      "foreground": "#C18401"
    }
  }, {
    "scope": ["meta.class.body"],
    "settings": {
      "foreground": "#383A42"
    }
  }, {
    "scope": ["meta.method-call", "meta.method"],
    "settings": {
      "foreground": "#383A42"
    }
  }, {
    "scope": ["meta.definition.variable"],
    "settings": {
      "foreground": "#E45649"
    }
  }, {
    "scope": ["meta.link"],
    "settings": {
      "foreground": "#986801"
    }
  }, {
    "scope": ["meta.require"],
    "settings": {
      "foreground": "#4078F2"
    }
  }, {
    "scope": ["meta.selector"],
    "settings": {
      "foreground": "#A626A4"
    }
  }, {
    "scope": ["meta.separator"],
    "settings": {
      "foreground": "#383A42"
    }
  }, {
    "scope": ["meta.tag"],
    "settings": {
      "foreground": "#383A42"
    }
  }, {
    "scope": ["underline"],
    "settings": {
      "text-decoration": "underline"
    }
  }, {
    "scope": ["none"],
    "settings": {
      "foreground": "#383A42"
    }
  }, {
    "scope": ["invalid.deprecated"],
    "settings": {
      "background": "#F2A60D",
      "foreground": "#000000"
    }
  }, {
    "scope": ["invalid.illegal"],
    "settings": {
      "background": "#FF1414",
      "foreground": "white"
    }
  }, {
    "scope": ["markup.bold"],
    "settings": {
      "fontStyle": "bold",
      "foreground": "#986801"
    }
  }, {
    "scope": ["markup.changed"],
    "settings": {
      "foreground": "#A626A4"
    }
  }, {
    "scope": ["markup.deleted"],
    "settings": {
      "foreground": "#E45649"
    }
  }, {
    "scope": ["markup.italic"],
    "settings": {
      "fontStyle": "italic",
      "foreground": "#A626A4"
    }
  }, {
    "scope": ["markup.heading"],
    "settings": {
      "foreground": "#E45649"
    }
  }, {
    "scope": ["markup.heading punctuation.definition.heading"],
    "settings": {
      "foreground": "#4078F2"
    }
  }, {
    "scope": ["markup.link"],
    "settings": {
      "foreground": "#0184BC"
    }
  }, {
    "scope": ["markup.inserted"],
    "settings": {
      "foreground": "#50A14F"
    }
  }, {
    "scope": ["markup.quote"],
    "settings": {
      "foreground": "#986801"
    }
  }, {
    "scope": ["markup.raw"],
    "settings": {
      "foreground": "#50A14F"
    }
  }, {
    "scope": ["source.c keyword.operator"],
    "settings": {
      "foreground": "#A626A4"
    }
  }, {
    "scope": ["source.cpp keyword.operator"],
    "settings": {
      "foreground": "#A626A4"
    }
  }, {
    "scope": ["source.cs keyword.operator"],
    "settings": {
      "foreground": "#A626A4"
    }
  }, {
    "scope": ["source.css property-name", "source.css property-value"],
    "settings": {
      "foreground": "#696C77"
    }
  }, {
    "scope": ["source.css property-name.support", "source.css property-value.support"],
    "settings": {
      "foreground": "#383A42"
    }
  }, {
    "scope": ["source.elixir source.embedded.source"],
    "settings": {
      "foreground": "#383A42"
    }
  }, {
    "scope": ["source.elixir constant.language", "source.elixir constant.numeric", "source.elixir constant.definition"],
    "settings": {
      "foreground": "#4078F2"
    }
  }, {
    "scope": ["source.elixir variable.definition", "source.elixir variable.anonymous"],
    "settings": {
      "foreground": "#A626A4"
    }
  }, {
    "scope": ["source.elixir parameter.variable.function"],
    "settings": {
      "fontStyle": "italic",
      "foreground": "#986801"
    }
  }, {
    "scope": ["source.elixir quoted"],
    "settings": {
      "foreground": "#50A14F"
    }
  }, {
    "scope": ["source.elixir keyword.special-method", "source.elixir embedded.section", "source.elixir embedded.source.empty"],
    "settings": {
      "foreground": "#E45649"
    }
  }, {
    "scope": ["source.elixir readwrite.module punctuation"],
    "settings": {
      "foreground": "#E45649"
    }
  }, {
    "scope": ["source.elixir regexp.section", "source.elixir regexp.string"],
    "settings": {
      "foreground": "#CA1243"
    }
  }, {
    "scope": ["source.elixir separator", "source.elixir keyword.operator"],
    "settings": {
      "foreground": "#986801"
    }
  }, {
    "scope": ["source.elixir variable.constant"],
    "settings": {
      "foreground": "#C18401"
    }
  }, {
    "scope": ["source.elixir array", "source.elixir scope", "source.elixir section"],
    "settings": {
      "foreground": "#696C77"
    }
  }, {
    "scope": ["source.gfm markup"],
    "settings": {
      "-webkit-font-smoothing": "auto"
    }
  }, {
    "scope": ["source.gfm link entity"],
    "settings": {
      "foreground": "#4078F2"
    }
  }, {
    "scope": ["source.go storage.type.string"],
    "settings": {
      "foreground": "#A626A4"
    }
  }, {
    "scope": ["source.ini keyword.other.definition.ini"],
    "settings": {
      "foreground": "#E45649"
    }
  }, {
    "scope": ["source.java storage.modifier.import"],
    "settings": {
      "foreground": "#C18401"
    }
  }, {
    "scope": ["source.java storage.type"],
    "settings": {
      "foreground": "#C18401"
    }
  }, {
    "scope": ["source.java keyword.operator.instanceof"],
    "settings": {
      "foreground": "#A626A4"
    }
  }, {
    "scope": ["source.java-properties meta.key-pair"],
    "settings": {
      "foreground": "#E45649"
    }
  }, {
    "scope": ["source.java-properties meta.key-pair > punctuation"],
    "settings": {
      "foreground": "#383A42"
    }
  }, {
    "scope": ["source.js keyword.operator"],
    "settings": {
      "foreground": "#0184BC"
    }
  }, {
    "scope": ["source.js keyword.operator.delete", "source.js keyword.operator.in", "source.js keyword.operator.of", "source.js keyword.operator.instanceof", "source.js keyword.operator.new", "source.js keyword.operator.typeof", "source.js keyword.operator.void"],
    "settings": {
      "foreground": "#A626A4"
    }
  }, {
    "scope": ["source.ts keyword.operator"],
    "settings": {
      "foreground": "#0184BC"
    }
  }, {
    "scope": ["source.flow keyword.operator"],
    "settings": {
      "foreground": "#0184BC"
    }
  }, {
    "scope": ["source.json meta.structure.dictionary.json > string.quoted.json"],
    "settings": {
      "foreground": "#E45649"
    }
  }, {
    "scope": ["source.json meta.structure.dictionary.json > string.quoted.json > punctuation.string"],
    "settings": {
      "foreground": "#E45649"
    }
  }, {
    "scope": ["source.json meta.structure.dictionary.json > value.json > string.quoted.json", "source.json meta.structure.array.json > value.json > string.quoted.json", "source.json meta.structure.dictionary.json > value.json > string.quoted.json > punctuation", "source.json meta.structure.array.json > value.json > string.quoted.json > punctuation"],
    "settings": {
      "foreground": "#50A14F"
    }
  }, {
    "scope": ["source.json meta.structure.dictionary.json > constant.language.json", "source.json meta.structure.array.json > constant.language.json"],
    "settings": {
      "foreground": "#0184BC"
    }
  }, {
    "scope": ["ng.interpolation"],
    "settings": {
      "foreground": "#E45649"
    }
  }, {
    "scope": ["ng.interpolation.begin", "ng.interpolation.end"],
    "settings": {
      "foreground": "#4078F2"
    }
  }, {
    "scope": ["ng.interpolation function"],
    "settings": {
      "foreground": "#E45649"
    }
  }, {
    "scope": ["ng.interpolation function.begin", "ng.interpolation function.end"],
    "settings": {
      "foreground": "#4078F2"
    }
  }, {
    "scope": ["ng.interpolation bool"],
    "settings": {
      "foreground": "#986801"
    }
  }, {
    "scope": ["ng.interpolation bracket"],
    "settings": {
      "foreground": "#383A42"
    }
  }, {
    "scope": ["ng.pipe", "ng.operator"],
    "settings": {
      "foreground": "#383A42"
    }
  }, {
    "scope": ["ng.tag"],
    "settings": {
      "foreground": "#0184BC"
    }
  }, {
    "scope": ["ng.attribute-with-value attribute-name"],
    "settings": {
      "foreground": "#C18401"
    }
  }, {
    "scope": ["ng.attribute-with-value string"],
    "settings": {
      "foreground": "#A626A4"
    }
  }, {
    "scope": ["ng.attribute-with-value string.begin", "ng.attribute-with-value string.end"],
    "settings": {
      "foreground": "#383A42"
    }
  }, {
    "scope": ["source.ruby constant.other.symbol > punctuation"],
    "settings": {
      "foreground": "inherit"
    }
  }, {
    "scope": ["source.php class.bracket"],
    "settings": {
      "foreground": "#383A42"
    }
  }, {
    "scope": ["source.python keyword.operator.logical.python"],
    "settings": {
      "foreground": "#A626A4"
    }
  }, {
    "scope": ["source.python variable.parameter"],
    "settings": {
      "foreground": "#986801"
    }
  }, {
    "scope": "customrule",
    "settings": {
      "foreground": "#383A42"
    }
  }, {
    "scope": "support.type.property-name",
    "settings": {
      "foreground": "#383A42"
    }
  }, {
    "scope": "string.quoted.double punctuation",
    "settings": {
      "foreground": "#50A14F"
    }
  }, {
    "scope": "support.constant",
    "settings": {
      "foreground": "#986801"
    }
  }, {
    "scope": "support.type.property-name.json",
    "settings": {
      "foreground": "#E45649"
    }
  }, {
    "scope": "support.type.property-name.json punctuation",
    "settings": {
      "foreground": "#E45649"
    }
  }, {
    "scope": ["punctuation.separator.key-value.ts", "punctuation.separator.key-value.js", "punctuation.separator.key-value.tsx"],
    "settings": {
      "foreground": "#0184BC"
    }
  }, {
    "scope": ["source.js.embedded.html keyword.operator", "source.ts.embedded.html keyword.operator"],
    "settings": {
      "foreground": "#0184BC"
    }
  }, {
    "scope": ["variable.other.readwrite.js", "variable.other.readwrite.ts", "variable.other.readwrite.tsx"],
    "settings": {
      "foreground": "#383A42"
    }
  }, {
    "scope": ["support.variable.dom.js", "support.variable.dom.ts"],
    "settings": {
      "foreground": "#E45649"
    }
  }, {
    "scope": ["support.variable.property.dom.js", "support.variable.property.dom.ts"],
    "settings": {
      "foreground": "#E45649"
    }
  }, {
    "scope": ["meta.template.expression.js punctuation.definition", "meta.template.expression.ts punctuation.definition"],
    "settings": {
      "foreground": "#CA1243"
    }
  }, {
    "scope": ["source.ts punctuation.definition.typeparameters", "source.js punctuation.definition.typeparameters", "source.tsx punctuation.definition.typeparameters"],
    "settings": {
      "foreground": "#383A42"
    }
  }, {
    "scope": ["source.ts punctuation.definition.block", "source.js punctuation.definition.block", "source.tsx punctuation.definition.block"],
    "settings": {
      "foreground": "#383A42"
    }
  }, {
    "scope": ["source.ts punctuation.separator.comma", "source.js punctuation.separator.comma", "source.tsx punctuation.separator.comma"],
    "settings": {
      "foreground": "#383A42"
    }
  }, {
    "scope": ["support.variable.property.js", "support.variable.property.ts", "support.variable.property.tsx"],
    "settings": {
      "foreground": "#E45649"
    }
  }, {
    "scope": ["keyword.control.default.js", "keyword.control.default.ts", "keyword.control.default.tsx"],
    "settings": {
      "foreground": "#E45649"
    }
  }, {
    "scope": ["keyword.operator.expression.instanceof.js", "keyword.operator.expression.instanceof.ts", "keyword.operator.expression.instanceof.tsx"],
    "settings": {
      "foreground": "#A626A4"
    }
  }, {
    "scope": ["keyword.operator.expression.of.js", "keyword.operator.expression.of.ts", "keyword.operator.expression.of.tsx"],
    "settings": {
      "foreground": "#A626A4"
    }
  }, {
    "scope": ["meta.brace.round.js", "meta.array-binding-pattern-variable.js", "meta.brace.square.js", "meta.brace.round.ts", "meta.array-binding-pattern-variable.ts", "meta.brace.square.ts", "meta.brace.round.tsx", "meta.array-binding-pattern-variable.tsx", "meta.brace.square.tsx"],
    "settings": {
      "foreground": "#383A42"
    }
  }, {
    "scope": ["source.js punctuation.accessor", "source.ts punctuation.accessor", "source.tsx punctuation.accessor"],
    "settings": {
      "foreground": "#383A42"
    }
  }, {
    "scope": ["punctuation.terminator.statement.js", "punctuation.terminator.statement.ts", "punctuation.terminator.statement.tsx"],
    "settings": {
      "foreground": "#383A42"
    }
  }, {
    "scope": ["meta.array-binding-pattern-variable.js variable.other.readwrite.js", "meta.array-binding-pattern-variable.ts variable.other.readwrite.ts", "meta.array-binding-pattern-variable.tsx variable.other.readwrite.tsx"],
    "settings": {
      "foreground": "#986801"
    }
  }, {
    "scope": ["source.js support.variable", "source.ts support.variable", "source.tsx support.variable"],
    "settings": {
      "foreground": "#E45649"
    }
  }, {
    "scope": ["variable.other.constant.property.js", "variable.other.constant.property.ts", "variable.other.constant.property.tsx"],
    "settings": {
      "foreground": "#986801"
    }
  }, {
    "scope": ["keyword.operator.new.ts", "keyword.operator.new.j", "keyword.operator.new.tsx"],
    "settings": {
      "foreground": "#A626A4"
    }
  }, {
    "scope": ["source.ts keyword.operator", "source.tsx keyword.operator"],
    "settings": {
      "foreground": "#0184BC"
    }
  }, {
    "scope": ["punctuation.separator.parameter.js", "punctuation.separator.parameter.ts", "punctuation.separator.parameter.tsx "],
    "settings": {
      "foreground": "#383A42"
    }
  }, {
    "scope": ["constant.language.import-export-all.js", "constant.language.import-export-all.ts"],
    "settings": {
      "foreground": "#E45649"
    }
  }, {
    "scope": ["constant.language.import-export-all.jsx", "constant.language.import-export-all.tsx"],
    "settings": {
      "foreground": "#0184BC"
    }
  }, {
    "scope": ["keyword.control.as.js", "keyword.control.as.ts", "keyword.control.as.jsx", "keyword.control.as.tsx"],
    "settings": {
      "foreground": "#383A42"
    }
  }, {
    "scope": ["variable.other.readwrite.alias.js", "variable.other.readwrite.alias.ts", "variable.other.readwrite.alias.jsx", "variable.other.readwrite.alias.tsx"],
    "settings": {
      "foreground": "#E45649"
    }
  }, {
    "scope": ["variable.other.constant.js", "variable.other.constant.ts", "variable.other.constant.jsx", "variable.other.constant.tsx"],
    "settings": {
      "foreground": "#986801"
    }
  }, {
    "scope": ["meta.export.default.js variable.other.readwrite.js", "meta.export.default.ts variable.other.readwrite.ts"],
    "settings": {
      "foreground": "#E45649"
    }
  }, {
    "scope": ["source.js meta.template.expression.js punctuation.accessor", "source.ts meta.template.expression.ts punctuation.accessor", "source.tsx meta.template.expression.tsx punctuation.accessor"],
    "settings": {
      "foreground": "#50A14F"
    }
  }, {
    "scope": ["source.js meta.import-equals.external.js keyword.operator", "source.jsx meta.import-equals.external.jsx keyword.operator", "source.ts meta.import-equals.external.ts keyword.operator", "source.tsx meta.import-equals.external.tsx keyword.operator"],
    "settings": {
      "foreground": "#383A42"
    }
  }, {
    "scope": "entity.name.type.module.js,entity.name.type.module.ts,entity.name.type.module.jsx,entity.name.type.module.tsx",
    "settings": {
      "foreground": "#50A14F"
    }
  }, {
    "scope": "meta.class.js,meta.class.ts,meta.class.jsx,meta.class.tsx",
    "settings": {
      "foreground": "#383A42"
    }
  }, {
    "scope": ["meta.definition.property.js variable", "meta.definition.property.ts variable", "meta.definition.property.jsx variable", "meta.definition.property.tsx variable"],
    "settings": {
      "foreground": "#383A42"
    }
  }, {
    "scope": ["meta.type.parameters.js support.type", "meta.type.parameters.jsx support.type", "meta.type.parameters.ts support.type", "meta.type.parameters.tsx support.type"],
    "settings": {
      "foreground": "#383A42"
    }
  }, {
    "scope": ["source.js meta.tag.js keyword.operator", "source.jsx meta.tag.jsx keyword.operator", "source.ts meta.tag.ts keyword.operator", "source.tsx meta.tag.tsx keyword.operator"],
    "settings": {
      "foreground": "#383A42"
    }
  }, {
    "scope": ["meta.tag.js punctuation.section.embedded", "meta.tag.jsx punctuation.section.embedded", "meta.tag.ts punctuation.section.embedded", "meta.tag.tsx punctuation.section.embedded"],
    "settings": {
      "foreground": "#383A42"
    }
  }, {
    "scope": ["meta.array.literal.js variable", "meta.array.literal.jsx variable", "meta.array.literal.ts variable", "meta.array.literal.tsx variable"],
    "settings": {
      "foreground": "#C18401"
    }
  }, {
    "scope": ["support.type.object.module.js", "support.type.object.module.jsx", "support.type.object.module.ts", "support.type.object.module.tsx"],
    "settings": {
      "foreground": "#E45649"
    }
  }, {
    "scope": ["constant.language.json"],
    "settings": {
      "foreground": "#0184BC"
    }
  }, {
    "scope": ["variable.other.constant.object.js", "variable.other.constant.object.jsx", "variable.other.constant.object.ts", "variable.other.constant.object.tsx"],
    "settings": {
      "foreground": "#986801"
    }
  }, {
    "scope": ["storage.type.property.js", "storage.type.property.jsx", "storage.type.property.ts", "storage.type.property.tsx"],
    "settings": {
      "foreground": "#0184BC"
    }
  }, {
    "scope": ["meta.template.expression.js string.quoted punctuation.definition", "meta.template.expression.jsx string.quoted punctuation.definition", "meta.template.expression.ts string.quoted punctuation.definition", "meta.template.expression.tsx string.quoted punctuation.definition"],
    "settings": {
      "foreground": "#50A14F"
    }
  }, {
    "scope": ["meta.template.expression.js string.template punctuation.definition.string.template", "meta.template.expression.jsx string.template punctuation.definition.string.template", "meta.template.expression.ts string.template punctuation.definition.string.template", "meta.template.expression.tsx string.template punctuation.definition.string.template"],
    "settings": {
      "foreground": "#50A14F"
    }
  }, {
    "scope": ["keyword.operator.expression.in.js", "keyword.operator.expression.in.jsx", "keyword.operator.expression.in.ts", "keyword.operator.expression.in.tsx"],
    "settings": {
      "foreground": "#A626A4"
    }
  }, {
    "scope": ["variable.other.object.js", "variable.other.object.ts"],
    "settings": {
      "foreground": "#383A42"
    }
  }, {
    "scope": ["meta.object-literal.key.js", "meta.object-literal.key.ts"],
    "settings": {
      "foreground": "#E45649"
    }
  }, {
    "scope": "source.python constant.other",
    "settings": {
      "foreground": "#383A42"
    }
  }, {
    "scope": "source.python constant",
    "settings": {
      "foreground": "#986801"
    }
  }, {
    "scope": "constant.character.format.placeholder.other.python storage",
    "settings": {
      "foreground": "#986801"
    }
  }, {
    "scope": "support.variable.magic.python",
    "settings": {
      "foreground": "#E45649"
    }
  }, {
    "scope": "meta.function.parameters.python",
    "settings": {
      "foreground": "#986801"
    }
  }, {
    "scope": "punctuation.separator.annotation.python",
    "settings": {
      "foreground": "#383A42"
    }
  }, {
    "scope": "punctuation.separator.parameters.python",
    "settings": {
      "foreground": "#383A42"
    }
  }, {
    "scope": "entity.name.variable.field.cs",
    "settings": {
      "foreground": "#E45649"
    }
  }, {
    "scope": "source.cs keyword.operator",
    "settings": {
      "foreground": "#383A42"
    }
  }, {
    "scope": "variable.other.readwrite.cs",
    "settings": {
      "foreground": "#383A42"
    }
  }, {
    "scope": "variable.other.object.cs",
    "settings": {
      "foreground": "#383A42"
    }
  }, {
    "scope": "variable.other.object.property.cs",
    "settings": {
      "foreground": "#383A42"
    }
  }, {
    "scope": "entity.name.variable.property.cs",
    "settings": {
      "foreground": "#4078F2"
    }
  }, {
    "scope": "storage.type.cs",
    "settings": {
      "foreground": "#C18401"
    }
  }, {
    "scope": "keyword.other.unsafe.rust",
    "settings": {
      "foreground": "#A626A4"
    }
  }, {
    "scope": "entity.name.type.rust",
    "settings": {
      "foreground": "#0184BC"
    }
  }, {
    "scope": "storage.modifier.lifetime.rust",
    "settings": {
      "foreground": "#383A42"
    }
  }, {
    "scope": "entity.name.lifetime.rust",
    "settings": {
      "foreground": "#986801"
    }
  }, {
    "scope": "storage.type.core.rust",
    "settings": {
      "foreground": "#0184BC"
    }
  }, {
    "scope": "meta.attribute.rust",
    "settings": {
      "foreground": "#986801"
    }
  }, {
    "scope": "storage.class.std.rust",
    "settings": {
      "foreground": "#0184BC"
    }
  }, {
    "scope": "markup.raw.block.markdown",
    "settings": {
      "foreground": "#383A42"
    }
  }, {
    "scope": "punctuation.definition.variable.shell",
    "settings": {
      "foreground": "#E45649"
    }
  }, {
    "scope": "support.constant.property-value.css",
    "settings": {
      "foreground": "#383A42"
    }
  }, {
    "scope": "punctuation.definition.constant.css",
    "settings": {
      "foreground": "#986801"
    }
  }, {
    "scope": "punctuation.separator.key-value.scss",
    "settings": {
      "foreground": "#E45649"
    }
  }, {
    "scope": "punctuation.definition.constant.scss",
    "settings": {
      "foreground": "#986801"
    }
  }, {
    "scope": "meta.property-list.scss punctuation.separator.key-value.scss",
    "settings": {
      "foreground": "#383A42"
    }
  }, {
    "scope": "storage.type.primitive.array.java",
    "settings": {
      "foreground": "#C18401"
    }
  }, {
    "scope": "entity.name.section.markdown",
    "settings": {
      "foreground": "#E45649"
    }
  }, {
    "scope": "punctuation.definition.heading.markdown",
    "settings": {
      "foreground": "#E45649"
    }
  }, {
    "scope": "markup.heading.setext",
    "settings": {
      "foreground": "#383A42"
    }
  }, {
    "scope": "punctuation.definition.bold.markdown",
    "settings": {
      "foreground": "#986801"
    }
  }, {
    "scope": "markup.inline.raw.markdown",
    "settings": {
      "foreground": "#50A14F"
    }
  }, {
    "scope": "beginning.punctuation.definition.list.markdown",
    "settings": {
      "foreground": "#E45649"
    }
  }, {
    "scope": "markup.quote.markdown",
    "settings": {
      "fontStyle": "italic",
      "foreground": "#A0A1A7"
    }
  }, {
    "scope": ["punctuation.definition.string.begin.markdown", "punctuation.definition.string.end.markdown", "punctuation.definition.metadata.markdown"],
    "settings": {
      "foreground": "#383A42"
    }
  }, {
    "scope": "punctuation.definition.metadata.markdown",
    "settings": {
      "foreground": "#A626A4"
    }
  }, {
    "scope": ["markup.underline.link.markdown", "markup.underline.link.image.markdown"],
    "settings": {
      "foreground": "#A626A4"
    }
  }, {
    "scope": ["string.other.link.title.markdown", "string.other.link.description.markdown"],
    "settings": {
      "foreground": "#4078F2"
    }
  }, {
    "scope": "punctuation.separator.variable.ruby",
    "settings": {
      "foreground": "#E45649"
    }
  }, {
    "scope": "variable.other.constant.ruby",
    "settings": {
      "foreground": "#986801"
    }
  }, {
    "scope": "keyword.operator.other.ruby",
    "settings": {
      "foreground": "#50A14F"
    }
  }, {
    "scope": "punctuation.definition.variable.php",
    "settings": {
      "foreground": "#E45649"
    }
  }, {
    "scope": "meta.class.php",
    "settings": {
      "foreground": "#383A42"
    }
  }],
  "type": "light"
});
export {
  oneLight as default
};
//# sourceMappingURL=one-light-ZCH5U4FN.js.map
