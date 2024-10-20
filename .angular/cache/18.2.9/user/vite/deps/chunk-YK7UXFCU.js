// node_modules/shiki/dist/langs/postcss.mjs
var lang = Object.freeze({
  "displayName": "PostCSS",
  "fileTypes": ["pcss", "postcss"],
  "foldingStartMarker": "/\\*|^#|^\\*|^\\b|^\\.",
  "foldingStopMarker": "\\*/|^\\s*$",
  "name": "postcss",
  "patterns": [{
    "begin": "/\\*",
    "end": "\\*/",
    "name": "comment.block.postcss",
    "patterns": [{
      "include": "#comment-tag"
    }]
  }, {
    "include": "#double-slash"
  }, {
    "include": "#double-quoted"
  }, {
    "include": "#single-quoted"
  }, {
    "include": "#interpolation"
  }, {
    "include": "#placeholder-selector"
  }, {
    "include": "#variable"
  }, {
    "include": "#variable-root-css"
  }, {
    "include": "#numeric"
  }, {
    "include": "#unit"
  }, {
    "include": "#flag"
  }, {
    "include": "#dotdotdot"
  }, {
    "begin": "@include",
    "captures": {
      "0": {
        "name": "keyword.control.at-rule.css.postcss"
      }
    },
    "end": "(?=\\n|\\(|{|;)",
    "name": "support.function.name.postcss.library"
  }, {
    "begin": "@mixin|@function",
    "captures": {
      "0": {
        "name": "keyword.control.at-rule.css.postcss"
      }
    },
    "end": "$\\n?|(?=\\(|{)",
    "name": "support.function.name.postcss.no-completions",
    "patterns": [{
      "match": "[\\w-]+",
      "name": "entity.name.function"
    }]
  }, {
    "match": "(?<=@import)\\s[\\w/.*-]+",
    "name": "string.quoted.double.css.postcss"
  }, {
    "begin": "@",
    "end": "$\\n?|\\s(?!(all|braille|embossed|handheld|print|projection|screen|speech|tty|tv|if|only|not)(\\s|,))|(?=;)",
    "name": "keyword.control.at-rule.css.postcss"
  }, {
    "begin": "#",
    "end": "$\\n?|(?=\\s|,|;|\\(|\\)|\\.|\\[|{|>)",
    "name": "entity.other.attribute-name.id.css.postcss",
    "patterns": [{
      "include": "#interpolation"
    }, {
      "include": "#pseudo-class"
    }]
  }, {
    "begin": "\\.|(?<=&)(-|_)",
    "end": "$\\n?|(?=\\s|,|;|\\(|\\)|\\[|{|>)",
    "name": "entity.other.attribute-name.class.css.postcss",
    "patterns": [{
      "include": "#interpolation"
    }, {
      "include": "#pseudo-class"
    }]
  }, {
    "begin": "\\[",
    "end": "\\]",
    "name": "entity.other.attribute-selector.postcss",
    "patterns": [{
      "include": "#double-quoted"
    }, {
      "include": "#single-quoted"
    }, {
      "match": "\\^|\\$|\\*|~",
      "name": "keyword.other.regex.postcss"
    }]
  }, {
    "match": "(?<=\\]|\\)|not\\(|\\*|>|>\\s):[a-z:-]+|(::|:-)[a-z:-]+",
    "name": "entity.other.attribute-name.pseudo-class.css.postcss"
  }, {
    "begin": ":",
    "end": "$\\n?|(?=;|\\s\\(|and\\(|{|}|\\),)",
    "name": "meta.property-list.css.postcss",
    "patterns": [{
      "include": "#double-slash"
    }, {
      "include": "#double-quoted"
    }, {
      "include": "#single-quoted"
    }, {
      "include": "#interpolation"
    }, {
      "include": "#variable"
    }, {
      "include": "#rgb-value"
    }, {
      "include": "#numeric"
    }, {
      "include": "#unit"
    }, {
      "include": "#flag"
    }, {
      "include": "#function"
    }, {
      "include": "#function-content"
    }, {
      "include": "#function-content-var"
    }, {
      "include": "#operator"
    }, {
      "include": "#parent-selector"
    }, {
      "include": "#property-value"
    }]
  }, {
    "include": "#rgb-value"
  }, {
    "include": "#function"
  }, {
    "include": "#function-content"
  }, {
    "begin": "(?<!\\-|\\()\\b(a|abbr|acronym|address|applet|area|article|aside|audio|b|base|big|blockquote|body|br|button|canvas|caption|cite|code|col|colgroup|datalist|dd|del|details|dfn|dialog|div|dl|dt|em|embed|eventsource|fieldset|figure|figcaption|footer|form|frame|frameset|(h[1-6])|head|header|hgroup|hr|html|i|iframe|img|input|ins|kbd|label|legend|li|link|map|mark|menu|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|picture|pre|progress|q|samp|script|section|select|small|source|span|strike|strong|style|sub|summary|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|tt|ul|var|video|main|svg|rect|ruby|center|circle|ellipse|line|polyline|polygon|path|text|u|x)\\b(?!-|\\)|:\\s)|&",
    "end": "(?=\\s|,|;|\\(|\\)|\\.|\\[|{|>|-|_)",
    "name": "entity.name.tag.css.postcss.symbol",
    "patterns": [{
      "include": "#interpolation"
    }, {
      "include": "#pseudo-class"
    }]
  }, {
    "include": "#operator"
  }, {
    "match": "[a-z-]+((?=:|#{))",
    "name": "support.type.property-name.css.postcss"
  }, {
    "include": "#reserved-words"
  }, {
    "include": "#property-value"
  }],
  "repository": {
    "comment-tag": {
      "begin": "{{",
      "end": "}}",
      "name": "comment.tags.postcss",
      "patterns": [{
        "match": "[\\w-]+",
        "name": "comment.tag.postcss"
      }]
    },
    "dotdotdot": {
      "match": "\\.{3}",
      "name": "variable.other"
    },
    "double-quoted": {
      "begin": '"',
      "end": '"',
      "name": "string.quoted.double.css.postcss",
      "patterns": [{
        "include": "#quoted-interpolation"
      }]
    },
    "double-slash": {
      "begin": "//",
      "end": "$",
      "name": "comment.line.postcss",
      "patterns": [{
        "include": "#comment-tag"
      }]
    },
    "flag": {
      "match": "!(important|default|optional|global)",
      "name": "keyword.other.important.css.postcss"
    },
    "function": {
      "match": "(?<=[\\s|\\(|,|:])(?!url|format|attr)[\\w-][\\w-]*(?=\\()",
      "name": "support.function.name.postcss"
    },
    "function-content": {
      "match": "(?<=url\\(|format\\(|attr\\().+?(?=\\))",
      "name": "string.quoted.double.css.postcss"
    },
    "function-content-var": {
      "match": "(?<=var\\()[\\w-]+(?=\\))",
      "name": "variable.parameter.postcss"
    },
    "interpolation": {
      "begin": "#{",
      "end": "}",
      "name": "support.function.interpolation.postcss",
      "patterns": [{
        "include": "#variable"
      }, {
        "include": "#numeric"
      }, {
        "include": "#operator"
      }, {
        "include": "#unit"
      }, {
        "include": "#double-quoted"
      }, {
        "include": "#single-quoted"
      }]
    },
    "numeric": {
      "match": "(-|\\.)?[0-9]+(\\.[0-9]+)?",
      "name": "constant.numeric.css.postcss"
    },
    "operator": {
      "match": "\\+|\\s-\\s|\\s-(?=\\$)|(?<=\\()-(?=\\$)|\\s-(?=\\()|\\*|/|%|=|!|<|>|~",
      "name": "keyword.operator.postcss"
    },
    "parent-selector": {
      "match": "&",
      "name": "entity.name.tag.css.postcss"
    },
    "placeholder-selector": {
      "begin": "(?<!\\d)%(?!\\d)",
      "end": "$\\n?|\\s|(?=;|{)",
      "name": "entity.other.attribute-name.placeholder-selector.postcss"
    },
    "property-value": {
      "match": "[\\w-]+",
      "name": "meta.property-value.css.postcss, support.constant.property-value.css.postcss"
    },
    "pseudo-class": {
      "match": ":[a-z:-]+",
      "name": "entity.other.attribute-name.pseudo-class.css.postcss"
    },
    "quoted-interpolation": {
      "begin": "#{",
      "end": "}",
      "name": "support.function.interpolation.postcss",
      "patterns": [{
        "include": "#variable"
      }, {
        "include": "#numeric"
      }, {
        "include": "#operator"
      }, {
        "include": "#unit"
      }]
    },
    "reserved-words": {
      "match": "\\b(false|from|in|not|null|through|to|true)\\b",
      "name": "support.type.property-name.css.postcss"
    },
    "rgb-value": {
      "match": "(#)([0-9a-fA-F]{3}|[0-9a-fA-F]{6})\\b",
      "name": "constant.other.color.rgb-value.css.postcss"
    },
    "single-quoted": {
      "begin": "'",
      "end": "'",
      "name": "string.quoted.single.css.postcss",
      "patterns": [{
        "include": "#quoted-interpolation"
      }]
    },
    "unit": {
      "match": "(?<=[\\d]|})(ch|cm|deg|dpcm|dpi|dppx|em|ex|grad|Hz|in|kHz|mm|ms|pc|pt|px|rad|rem|s|turn|vh|vmax|vmin|vw|%)",
      "name": "keyword.other.unit.css.postcss"
    },
    "variable": {
      "match": "\\$[\\w-]+",
      "name": "variable.parameter.postcss"
    },
    "variable-root-css": {
      "match": "(?<!&)--[\\w-]+",
      "name": "variable.parameter.postcss"
    }
  },
  "scopeName": "source.css.postcss"
});
var postcss = [lang];

export {
  postcss
};
//# sourceMappingURL=chunk-YK7UXFCU.js.map
