import { createRequire } from 'module';const require = createRequire(import.meta.url);
import "./chunk-NQ4HTGF6.js";

// node_modules/shiki/dist/themes/snazzy-light.mjs
var snazzyLight = Object.freeze({
  "colors": {
    "activityBar.background": "#E7E8E6",
    "activityBar.foreground": "#2DAE58",
    "activityBar.inactiveForeground": "#68696888",
    "activityBarBadge.background": "#09A1ED",
    "badge.background": "#09A1ED",
    "badge.foreground": "#ffffff",
    "button.background": "#2DAE58",
    "debugExceptionWidget.background": "#FFAEAC33",
    "debugExceptionWidget.border": "#FF5C57",
    "debugToolBar.border": "#E9EAEB",
    "diffEditor.insertedTextBackground": "#2DAE5824",
    "diffEditor.removedTextBackground": "#FFAEAC44",
    "dropdown.border": "#E9EAEB",
    "editor.background": "#FAFBFC",
    "editor.findMatchBackground": "#00E6E06A",
    "editor.findMatchHighlightBackground": "#00E6E02A",
    "editor.findRangeHighlightBackground": "#F5B90011",
    "editor.focusedStackFrameHighlightBackground": "#2DAE5822",
    "editor.foreground": "#565869",
    "editor.hoverHighlightBackground": "#00E6E018",
    "editor.rangeHighlightBackground": "#F5B90033",
    "editor.selectionBackground": "#2DAE5822",
    "editor.snippetTabstopHighlightBackground": "#ADB1C23A",
    "editor.stackFrameHighlightBackground": "#F5B90033",
    "editor.wordHighlightBackground": "#ADB1C23A",
    "editorError.foreground": "#FF5C56",
    "editorGroup.emptyBackground": "#F3F4F5",
    "editorGutter.addedBackground": "#2DAE58",
    "editorGutter.deletedBackground": "#FF5C57",
    "editorGutter.modifiedBackground": "#00A39FAA",
    "editorInlayHint.background": "#E9EAEB",
    "editorInlayHint.foreground": "#565869",
    "editorLineNumber.activeForeground": "#35CF68",
    "editorLineNumber.foreground": "#9194A2aa",
    "editorLink.activeForeground": "#35CF68",
    "editorOverviewRuler.addedForeground": "#2DAE58",
    "editorOverviewRuler.deletedForeground": "#FF5C57",
    "editorOverviewRuler.errorForeground": "#FF5C56",
    "editorOverviewRuler.findMatchForeground": "#13BBB7AA",
    "editorOverviewRuler.modifiedForeground": "#00A39FAA",
    "editorOverviewRuler.warningForeground": "#CF9C00",
    "editorOverviewRuler.wordHighlightForeground": "#ADB1C288",
    "editorOverviewRuler.wordHighlightStrongForeground": "#35CF68",
    "editorWarning.foreground": "#CF9C00",
    "editorWhitespace.foreground": "#ADB1C255",
    "extensionButton.prominentBackground": "#2DAE58",
    "extensionButton.prominentHoverBackground": "#238744",
    "focusBorder": "#09A1ED",
    "foreground": "#686968",
    "gitDecoration.modifiedResourceForeground": "#00A39F",
    "gitDecoration.untrackedResourceForeground": "#2DAE58",
    "input.border": "#E9EAEB",
    "list.activeSelectionBackground": "#09A1ED",
    "list.activeSelectionForeground": "#ffffff",
    "list.errorForeground": "#FF5C56",
    "list.focusBackground": "#BCE7FC99",
    "list.focusForeground": "#11658F",
    "list.hoverBackground": "#E9EAEB",
    "list.inactiveSelectionBackground": "#89B5CB33",
    "list.warningForeground": "#B38700",
    "menu.background": "#FAFBFC",
    "menu.selectionBackground": "#E9EAEB",
    "menu.selectionForeground": "#686968",
    "menubar.selectionBackground": "#E9EAEB",
    "menubar.selectionForeground": "#686968",
    "merge.currentContentBackground": "#35CF6833",
    "merge.currentHeaderBackground": "#35CF6866",
    "merge.incomingContentBackground": "#14B1FF33",
    "merge.incomingHeaderBackground": "#14B1FF77",
    "peekView.border": "#09A1ED",
    "peekViewEditor.background": "#14B1FF08",
    "peekViewEditor.matchHighlightBackground": "#F5B90088",
    "peekViewEditor.matchHighlightBorder": "#F5B900",
    "peekViewEditorStickyScroll.background": "#EDF4FB",
    "peekViewResult.matchHighlightBackground": "#F5B90088",
    "peekViewResult.selectionBackground": "#09A1ED",
    "peekViewResult.selectionForeground": "#FFFFFF",
    "peekViewTitle.background": "#09A1ED11",
    "selection.background": "#2DAE5844",
    "settings.modifiedItemIndicator": "#13BBB7",
    "sideBar.background": "#F3F4F5",
    "sideBar.border": "#DEDFE0",
    "sideBarSectionHeader.background": "#E9EAEB",
    "sideBarSectionHeader.border": "#DEDFE0",
    "statusBar.background": "#2DAE58",
    "statusBar.debuggingBackground": "#13BBB7",
    "statusBar.debuggingBorder": "#00A39F",
    "statusBar.noFolderBackground": "#565869",
    "statusBarItem.remoteBackground": "#238744",
    "tab.activeBorderTop": "#2DAE58",
    "terminal.ansiBlack": "#565869",
    "terminal.ansiBlue": "#09A1ED",
    "terminal.ansiBrightBlack": "#75798F",
    "terminal.ansiBrightBlue": "#14B1FF",
    "terminal.ansiBrightCyan": "#13BBB7",
    "terminal.ansiBrightGreen": "#35CF68",
    "terminal.ansiBrightMagenta": "#FF94D2",
    "terminal.ansiBrightRed": "#FFAEAC",
    "terminal.ansiBrightWhite": "#FFFFFF",
    "terminal.ansiBrightYellow": "#F5B900",
    "terminal.ansiCyan": "#13BBB7",
    "terminal.ansiGreen": "#2DAE58",
    "terminal.ansiMagenta": "#F767BB",
    "terminal.ansiRed": "#FF5C57",
    "terminal.ansiWhite": "#FAFBF9",
    "terminal.ansiYellow": "#CF9C00",
    "titleBar.activeBackground": "#F3F4F5"
  },
  "displayName": "Snazzy Light",
  "name": "snazzy-light",
  "tokenColors": [{
    "scope": "invalid.illegal",
    "settings": {
      "foreground": "#FF5C56"
    }
  }, {
    "scope": ["meta.object-literal.key", "meta.object-literal.key constant.character.escape", "meta.object-literal string", "meta.object-literal string constant.character.escape", "support.type.property-name", "support.type.property-name constant.character.escape"],
    "settings": {
      "foreground": "#11658F"
    }
  }, {
    "scope": ["keyword", "storage", "meta.class storage.type", "keyword.operator.expression.import", "keyword.operator.new", "keyword.operator.expression.delete"],
    "settings": {
      "foreground": "#F767BB"
    }
  }, {
    "scope": ["support.type", "meta.type.annotation entity.name.type", "new.expr meta.type.parameters entity.name.type", "storage.type.primitive", "storage.type.built-in.primitive", "meta.function.parameter storage.type"],
    "settings": {
      "foreground": "#2DAE58"
    }
  }, {
    "scope": ["storage.type.annotation"],
    "settings": {
      "foreground": "#C25193"
    }
  }, {
    "scope": "keyword.other.unit",
    "settings": {
      "foreground": "#FF5C57CC"
    }
  }, {
    "scope": ["constant.language", "support.constant", "variable.language"],
    "settings": {
      "foreground": "#2DAE58"
    }
  }, {
    "scope": ["variable", "support.variable"],
    "settings": {
      "foreground": "#565869"
    }
  }, {
    "scope": "variable.language.this",
    "settings": {
      "foreground": "#13BBB7"
    }
  }, {
    "scope": ["entity.name.function", "support.function"],
    "settings": {
      "foreground": "#09A1ED"
    }
  }, {
    "scope": ["entity.name.function.decorator"],
    "settings": {
      "foreground": "#11658F"
    }
  }, {
    "scope": ["meta.class entity.name.type", "new.expr entity.name.type", "entity.other.inherited-class", "support.class"],
    "settings": {
      "foreground": "#13BBB7"
    }
  }, {
    "scope": ["keyword.preprocessor.pragma", "keyword.control.directive.include", "keyword.other.preprocessor"],
    "settings": {
      "foreground": "#11658F"
    }
  }, {
    "scope": "entity.name.exception",
    "settings": {
      "foreground": "#FF5C56"
    }
  }, {
    "scope": "entity.name.section",
    "settings": {}
  }, {
    "scope": ["constant.numeric"],
    "settings": {
      "foreground": "#FF5C57"
    }
  }, {
    "scope": ["constant", "constant.character"],
    "settings": {
      "foreground": "#2DAE58"
    }
  }, {
    "scope": "string",
    "settings": {
      "foreground": "#CF9C00"
    }
  }, {
    "scope": "string",
    "settings": {
      "foreground": "#CF9C00"
    }
  }, {
    "scope": "constant.character.escape",
    "settings": {
      "foreground": "#F5B900"
    }
  }, {
    "scope": ["string.regexp", "string.regexp constant.character.escape"],
    "settings": {
      "foreground": "#13BBB7"
    }
  }, {
    "scope": ["keyword.operator.quantifier.regexp", "keyword.operator.negation.regexp", "keyword.operator.or.regexp", "string.regexp punctuation", "string.regexp keyword", "string.regexp keyword.control", "string.regexp constant", "variable.other.regexp"],
    "settings": {
      "foreground": "#00A39F"
    }
  }, {
    "scope": ["string.regexp keyword.other"],
    "settings": {
      "foreground": "#00A39F88"
    }
  }, {
    "scope": "constant.other.symbol",
    "settings": {
      "foreground": "#CF9C00"
    }
  }, {
    "scope": ["comment", "punctuation.definition.comment"],
    "settings": {
      "foreground": "#ADB1C2"
    }
  }, {
    "scope": "comment.block.preprocessor",
    "settings": {
      "fontStyle": "",
      "foreground": "#9194A2"
    }
  }, {
    "scope": "comment.block.documentation entity.name.type",
    "settings": {
      "foreground": "#2DAE58"
    }
  }, {
    "scope": ["comment.block.documentation storage", "comment.block.documentation keyword.other", "meta.class comment.block.documentation storage.type"],
    "settings": {
      "foreground": "#9194A2"
    }
  }, {
    "scope": ["comment.block.documentation variable"],
    "settings": {
      "foreground": "#C25193"
    }
  }, {
    "scope": ["punctuation"],
    "settings": {
      "foreground": "#ADB1C2"
    }
  }, {
    "scope": ["keyword.operator", "keyword.other.arrow", "keyword.control.@"],
    "settings": {
      "foreground": "#ADB1C2"
    }
  }, {
    "scope": ["meta.tag.metadata.doctype.html entity.name.tag", "meta.tag.metadata.doctype.html entity.other.attribute-name.html", "meta.tag.sgml.doctype", "meta.tag.sgml.doctype string", "meta.tag.sgml.doctype entity.name.tag", "meta.tag.sgml punctuation.definition.tag.html"],
    "settings": {
      "foreground": "#9194A2"
    }
  }, {
    "scope": ["meta.tag", "punctuation.definition.tag.html", "punctuation.definition.tag.begin.html", "punctuation.definition.tag.end.html"],
    "settings": {
      "foreground": "#ADB1C2"
    }
  }, {
    "scope": ["entity.name.tag"],
    "settings": {
      "foreground": "#13BBB7"
    }
  }, {
    "scope": ["meta.tag entity.other.attribute-name", "entity.other.attribute-name.html"],
    "settings": {
      "foreground": "#FF8380"
    }
  }, {
    "scope": ["constant.character.entity", "punctuation.definition.entity"],
    "settings": {
      "foreground": "#CF9C00"
    }
  }, {
    "scope": ["source.css"],
    "settings": {
      "foreground": "#ADB1C2"
    }
  }, {
    "scope": ["meta.selector", "meta.selector entity", "meta.selector entity punctuation", "source.css entity.name.tag"],
    "settings": {
      "foreground": "#F767BB"
    }
  }, {
    "scope": ["keyword.control.at-rule", "keyword.control.at-rule punctuation.definition.keyword"],
    "settings": {
      "foreground": "#C25193"
    }
  }, {
    "scope": "source.css variable",
    "settings": {
      "foreground": "#11658F"
    }
  }, {
    "scope": ["source.css meta.property-name", "source.css support.type.property-name"],
    "settings": {
      "foreground": "#565869"
    }
  }, {
    "scope": ["source.css support.type.vendored.property-name"],
    "settings": {
      "foreground": "#565869AA"
    }
  }, {
    "scope": ["meta.property-value", "support.constant.property-value"],
    "settings": {
      "foreground": "#13BBB7"
    }
  }, {
    "scope": ["source.css support.constant"],
    "settings": {
      "foreground": "#2DAE58"
    }
  }, {
    "scope": ["punctuation.definition.entity.css", "keyword.operator.combinator.css"],
    "settings": {
      "foreground": "#FF82CBBB"
    }
  }, {
    "scope": ["source.css support.function"],
    "settings": {
      "foreground": "#09A1ED"
    }
  }, {
    "scope": "keyword.other.important",
    "settings": {
      "foreground": "#238744"
    }
  }, {
    "scope": ["source.css.scss"],
    "settings": {
      "foreground": "#F767BB"
    }
  }, {
    "scope": ["source.css.scss entity.other.attribute-name.class.css", "source.css.scss entity.other.attribute-name.id.css"],
    "settings": {
      "foreground": "#F767BB"
    }
  }, {
    "scope": ["entity.name.tag.reference.scss"],
    "settings": {
      "foreground": "#C25193"
    }
  }, {
    "scope": ["source.css.scss meta.at-rule keyword", "source.css.scss meta.at-rule keyword punctuation", "source.css.scss meta.at-rule operator.logical", "keyword.control.content.scss", "keyword.control.return.scss", "keyword.control.return.scss punctuation.definition.keyword"],
    "settings": {
      "foreground": "#C25193"
    }
  }, {
    "scope": ["meta.at-rule.mixin.scss", "meta.at-rule.include.scss", "source.css.scss meta.at-rule.if", "source.css.scss meta.at-rule.else", "source.css.scss meta.at-rule.each", "source.css.scss meta.at-rule variable.parameter"],
    "settings": {
      "foreground": "#ADB1C2"
    }
  }, {
    "scope": ["source.css.less entity.other.attribute-name.class.css"],
    "settings": {
      "foreground": "#F767BB"
    }
  }, {
    "scope": "source.stylus meta.brace.curly.css",
    "settings": {
      "foreground": "#ADB1C2"
    }
  }, {
    "scope": ["source.stylus entity.other.attribute-name.class", "source.stylus entity.other.attribute-name.id", "source.stylus entity.name.tag"],
    "settings": {
      "foreground": "#F767BB"
    }
  }, {
    "scope": ["source.stylus support.type.property-name"],
    "settings": {
      "foreground": "#565869"
    }
  }, {
    "scope": ["source.stylus variable"],
    "settings": {
      "foreground": "#11658F"
    }
  }, {
    "scope": "markup.changed",
    "settings": {
      "foreground": "#888888"
    }
  }, {
    "scope": "markup.deleted",
    "settings": {
      "foreground": "#888888"
    }
  }, {
    "scope": "markup.italic",
    "settings": {
      "fontStyle": "italic"
    }
  }, {
    "scope": "markup.error",
    "settings": {
      "foreground": "#FF5C56"
    }
  }, {
    "scope": "markup.inserted",
    "settings": {
      "foreground": "#888888"
    }
  }, {
    "scope": "meta.link",
    "settings": {
      "foreground": "#CF9C00"
    }
  }, {
    "scope": "string.other.link.title.markdown",
    "settings": {
      "foreground": "#09A1ED"
    }
  }, {
    "scope": ["markup.output", "markup.raw"],
    "settings": {
      "foreground": "#999999"
    }
  }, {
    "scope": "markup.prompt",
    "settings": {
      "foreground": "#999999"
    }
  }, {
    "scope": "markup.heading",
    "settings": {
      "foreground": "#2DAE58"
    }
  }, {
    "scope": "markup.bold",
    "settings": {
      "fontStyle": "bold"
    }
  }, {
    "scope": "markup.traceback",
    "settings": {
      "foreground": "#FF5C56"
    }
  }, {
    "scope": "markup.underline",
    "settings": {
      "fontStyle": "underline"
    }
  }, {
    "scope": "markup.quote",
    "settings": {
      "foreground": "#777985"
    }
  }, {
    "scope": ["markup.bold", "markup.italic"],
    "settings": {
      "foreground": "#13BBB7"
    }
  }, {
    "scope": "markup.inline.raw",
    "settings": {
      "fontStyle": "",
      "foreground": "#F767BB"
    }
  }, {
    "scope": ["meta.brace.round", "meta.brace.square", "storage.type.function.arrow"],
    "settings": {
      "foreground": "#ADB1C2"
    }
  }, {
    "scope": ["constant.language.import-export-all", "meta.import keyword.control.default"],
    "settings": {
      "foreground": "#C25193"
    }
  }, {
    "scope": ["support.function.js"],
    "settings": {
      "foreground": "#11658F"
    }
  }, {
    "scope": "string.regexp.js",
    "settings": {
      "foreground": "#13BBB7"
    }
  }, {
    "scope": ["variable.language.super", "support.type.object.module.js"],
    "settings": {
      "foreground": "#F767BB"
    }
  }, {
    "scope": "meta.jsx.children",
    "settings": {
      "foreground": "#686968"
    }
  }, {
    "scope": "entity.name.tag.yaml",
    "settings": {
      "foreground": "#11658F"
    }
  }, {
    "scope": "variable.other.alias.yaml",
    "settings": {
      "foreground": "#2DAE58"
    }
  }, {
    "scope": ["punctuation.section.embedded.begin.php", "punctuation.section.embedded.end.php"],
    "settings": {
      "foreground": "#75798F"
    }
  }, {
    "scope": ["meta.use.php entity.other.alias.php"],
    "settings": {
      "foreground": "#13BBB7"
    }
  }, {
    "scope": ["source.php support.function.construct", "source.php support.function.var"],
    "settings": {
      "foreground": "#11658F"
    }
  }, {
    "scope": ["storage.modifier.extends.php", "source.php keyword.other", "storage.modifier.php"],
    "settings": {
      "foreground": "#F767BB"
    }
  }, {
    "scope": ["meta.class.body.php storage.type.php"],
    "settings": {
      "foreground": "#F767BB"
    }
  }, {
    "scope": ["storage.type.php", "meta.class.body.php meta.function-call.php storage.type.php", "meta.class.body.php meta.function.php storage.type.php"],
    "settings": {
      "foreground": "#2DAE58"
    }
  }, {
    "scope": ["source.php keyword.other.DML"],
    "settings": {
      "foreground": "#D94E4A"
    }
  }, {
    "scope": ["source.sql.embedded.php keyword.operator"],
    "settings": {
      "foreground": "#2DAE58"
    }
  }, {
    "scope": ["source.ini keyword", "source.toml keyword", "source.env variable"],
    "settings": {
      "foreground": "#11658F"
    }
  }, {
    "scope": ["source.ini entity.name.section", "source.toml entity.other.attribute-name"],
    "settings": {
      "foreground": "#F767BB"
    }
  }, {
    "scope": ["source.go storage.type"],
    "settings": {
      "foreground": "#2DAE58"
    }
  }, {
    "scope": ["keyword.import.go", "keyword.package.go"],
    "settings": {
      "foreground": "#FF5C56"
    }
  }, {
    "scope": ["source.reason variable.language string"],
    "settings": {
      "foreground": "#565869"
    }
  }, {
    "scope": ["source.reason support.type", "source.reason constant.language", "source.reason constant.language constant.numeric", "source.reason support.type string.regexp"],
    "settings": {
      "foreground": "#2DAE58"
    }
  }, {
    "scope": ["source.reason keyword.operator keyword.control", "source.reason keyword.control.less", "source.reason keyword.control.flow"],
    "settings": {
      "foreground": "#ADB1C2"
    }
  }, {
    "scope": ["source.reason string.regexp"],
    "settings": {
      "foreground": "#CF9C00"
    }
  }, {
    "scope": ["source.reason support.property-value"],
    "settings": {
      "foreground": "#11658F"
    }
  }, {
    "scope": ["source.rust support.function.core.rust"],
    "settings": {
      "foreground": "#11658F"
    }
  }, {
    "scope": ["source.rust storage.type.core.rust", "source.rust storage.class.std"],
    "settings": {
      "foreground": "#2DAE58"
    }
  }, {
    "scope": ["source.rust entity.name.type.rust"],
    "settings": {
      "foreground": "#13BBB7"
    }
  }, {
    "scope": ["storage.type.function.coffee"],
    "settings": {
      "foreground": "#ADB1C2"
    }
  }, {
    "scope": ["keyword.type.cs", "storage.type.cs"],
    "settings": {
      "foreground": "#2DAE58"
    }
  }, {
    "scope": ["entity.name.type.namespace.cs"],
    "settings": {
      "foreground": "#13BBB7"
    }
  }, {
    "scope": "meta.diff.header",
    "settings": {
      "foreground": "#11658F"
    }
  }, {
    "scope": ["markup.inserted.diff"],
    "settings": {
      "foreground": "#2DAE58"
    }
  }, {
    "scope": ["markup.deleted.diff"],
    "settings": {
      "foreground": "#FF5C56"
    }
  }, {
    "scope": ["meta.diff.range", "meta.diff.index", "meta.separator"],
    "settings": {
      "foreground": "#09A1ED"
    }
  }, {
    "scope": "source.makefile variable",
    "settings": {
      "foreground": "#11658F"
    }
  }, {
    "scope": ["keyword.control.protocol-specification.objc"],
    "settings": {
      "foreground": "#F767BB"
    }
  }, {
    "scope": ["meta.parens storage.type.objc", "meta.return-type.objc support.class", "meta.return-type.objc storage.type.objc"],
    "settings": {
      "foreground": "#2DAE58"
    }
  }, {
    "scope": ["source.sql keyword"],
    "settings": {
      "foreground": "#11658F"
    }
  }, {
    "scope": ["keyword.other.special-method.dockerfile"],
    "settings": {
      "foreground": "#09A1ED"
    }
  }, {
    "scope": "constant.other.symbol.elixir",
    "settings": {
      "foreground": "#11658F"
    }
  }, {
    "scope": ["storage.type.elm", "support.module.elm"],
    "settings": {
      "foreground": "#13BBB7"
    }
  }, {
    "scope": ["source.elm keyword.other"],
    "settings": {
      "foreground": "#ADB1C2"
    }
  }, {
    "scope": ["source.erlang entity.name.type.class"],
    "settings": {
      "foreground": "#13BBB7"
    }
  }, {
    "scope": ["variable.other.field.erlang"],
    "settings": {
      "foreground": "#11658F"
    }
  }, {
    "scope": ["source.erlang constant.other.symbol"],
    "settings": {
      "foreground": "#2DAE58"
    }
  }, {
    "scope": ["storage.type.haskell"],
    "settings": {
      "foreground": "#2DAE58"
    }
  }, {
    "scope": ["meta.declaration.class.haskell storage.type.haskell", "meta.declaration.instance.haskell storage.type.haskell"],
    "settings": {
      "foreground": "#13BBB7"
    }
  }, {
    "scope": ["meta.preprocessor.haskell"],
    "settings": {
      "foreground": "#75798F"
    }
  }, {
    "scope": ["source.haskell keyword.control"],
    "settings": {
      "foreground": "#F767BB"
    }
  }, {
    "scope": ["tag.end.latte", "tag.begin.latte"],
    "settings": {
      "foreground": "#ADB1C2"
    }
  }, {
    "scope": "source.po keyword.control",
    "settings": {
      "foreground": "#11658F"
    }
  }, {
    "scope": "source.po storage.type",
    "settings": {
      "foreground": "#9194A2"
    }
  }, {
    "scope": "constant.language.po",
    "settings": {
      "foreground": "#13BBB7"
    }
  }, {
    "scope": "meta.header.po string",
    "settings": {
      "foreground": "#FF8380"
    }
  }, {
    "scope": "source.po meta.header.po",
    "settings": {
      "foreground": "#ADB1C2"
    }
  }, {
    "scope": ["source.ocaml markup.underline"],
    "settings": {
      "fontStyle": ""
    }
  }, {
    "scope": ["source.ocaml punctuation.definition.tag emphasis", "source.ocaml entity.name.class constant.numeric", "source.ocaml support.type"],
    "settings": {
      "foreground": "#F767BB"
    }
  }, {
    "scope": ["source.ocaml constant.numeric entity.other.attribute-name"],
    "settings": {
      "foreground": "#13BBB7"
    }
  }, {
    "scope": ["source.ocaml comment meta.separator"],
    "settings": {
      "foreground": "#ADB1C2"
    }
  }, {
    "scope": ["source.ocaml support.type strong", "source.ocaml keyword.control strong"],
    "settings": {
      "foreground": "#ADB1C2"
    }
  }, {
    "scope": ["source.ocaml support.constant.property-value"],
    "settings": {
      "foreground": "#11658F"
    }
  }, {
    "scope": ["source.scala entity.name.class"],
    "settings": {
      "foreground": "#13BBB7"
    }
  }, {
    "scope": ["storage.type.scala"],
    "settings": {
      "foreground": "#2DAE58"
    }
  }, {
    "scope": ["variable.parameter.scala"],
    "settings": {
      "foreground": "#11658F"
    }
  }, {
    "scope": ["meta.bracket.scala", "meta.colon.scala"],
    "settings": {
      "foreground": "#ADB1C2"
    }
  }, {
    "scope": ["meta.metadata.simple.clojure"],
    "settings": {
      "foreground": "#ADB1C2"
    }
  }, {
    "scope": ["meta.metadata.simple.clojure meta.symbol"],
    "settings": {
      "foreground": "#13BBB7"
    }
  }, {
    "scope": ["source.r keyword.other"],
    "settings": {
      "foreground": "#ADB1C2"
    }
  }, {
    "scope": ["source.svelte meta.block.ts entity.name.label"],
    "settings": {
      "foreground": "#11658F"
    }
  }, {
    "scope": ["keyword.operator.word.applescript"],
    "settings": {
      "foreground": "#F767BB"
    }
  }, {
    "scope": ["meta.function-call.livescript"],
    "settings": {
      "foreground": "#09A1ED"
    }
  }, {
    "scope": ["variable.language.self.lua"],
    "settings": {
      "foreground": "#13BBB7"
    }
  }, {
    "scope": ["entity.name.type.class.swift", "meta.inheritance-clause.swift", "meta.import.swift entity.name.type"],
    "settings": {
      "foreground": "#13BBB7"
    }
  }, {
    "scope": ["source.swift punctuation.section.embedded"],
    "settings": {
      "foreground": "#B38700"
    }
  }, {
    "scope": ["variable.parameter.function.swift entity.name.function.swift"],
    "settings": {
      "foreground": "#565869"
    }
  }, {
    "scope": "meta.function-call.twig",
    "settings": {
      "foreground": "#565869"
    }
  }, {
    "scope": "string.unquoted.tag-string.django",
    "settings": {
      "foreground": "#565869"
    }
  }, {
    "scope": ["entity.tag.tagbraces.django", "entity.tag.filter-pipe.django"],
    "settings": {
      "foreground": "#ADB1C2"
    }
  }, {
    "scope": ["meta.section.attributes.haml constant.language", "meta.section.attributes.plain.haml constant.other.symbol"],
    "settings": {
      "foreground": "#FF8380"
    }
  }, {
    "scope": ["meta.prolog.haml"],
    "settings": {
      "foreground": "#9194A2"
    }
  }, {
    "scope": ["support.constant.handlebars"],
    "settings": {
      "foreground": "#ADB1C2"
    }
  }, {
    "scope": "text.log log.constant",
    "settings": {
      "foreground": "#C25193"
    }
  }, {
    "scope": ["source.c string constant.other.placeholder", "source.cpp string constant.other.placeholder"],
    "settings": {
      "foreground": "#B38700"
    }
  }, {
    "scope": "constant.other.key.groovy",
    "settings": {
      "foreground": "#11658F"
    }
  }, {
    "scope": "storage.type.groovy",
    "settings": {
      "foreground": "#13BBB7"
    }
  }, {
    "scope": "meta.definition.variable.groovy storage.type.groovy",
    "settings": {
      "foreground": "#2DAE58"
    }
  }, {
    "scope": "storage.modifier.import.groovy",
    "settings": {
      "foreground": "#CF9C00"
    }
  }, {
    "scope": ["entity.other.attribute-name.class.pug", "entity.other.attribute-name.id.pug"],
    "settings": {
      "foreground": "#13BBB7"
    }
  }, {
    "scope": ["constant.name.attribute.tag.pug"],
    "settings": {
      "foreground": "#ADB1C2"
    }
  }, {
    "scope": "entity.name.tag.style.html",
    "settings": {
      "foreground": "#13BBB7"
    }
  }, {
    "scope": "entity.name.type.wasm",
    "settings": {
      "foreground": "#2DAE58"
    }
  }],
  "type": "light"
});
export {
  snazzyLight as default
};
//# sourceMappingURL=snazzy-light-3UF2HJ2C.js.map
