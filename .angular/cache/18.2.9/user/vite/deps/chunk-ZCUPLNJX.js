import {
  html
} from "./chunk-QDO4ZXC2.js";

// node_modules/shiki/dist/langs/angular-expression.mjs
var lang = Object.freeze({
  "injectionSelector": "L:text.html -comment",
  "name": "angular-expression",
  "patterns": [{
    "include": "#ngExpression"
  }],
  "repository": {
    "arrayLiteral": {
      "begin": "\\[",
      "beginCaptures": {
        "0": {
          "name": "meta.brace.square.ts"
        }
      },
      "end": "\\]",
      "endCaptures": {
        "0": {
          "name": "meta.brace.square.ts"
        }
      },
      "name": "meta.array.literal.ts",
      "patterns": [{
        "include": "#ngExpression"
      }, {
        "include": "#punctuationComma"
      }]
    },
    "booleanLiteral": {
      "patterns": [{
        "match": "(?<!\\.|\\$)\\btrue\\b(?!\\$)",
        "name": "constant.language.boolean.true.ts"
      }, {
        "match": "(?<!\\.|\\$)\\bfalse\\b(?!\\$)",
        "name": "constant.language.boolean.false.ts"
      }]
    },
    "expressionOperator": {
      "patterns": [{
        "captures": {
          "1": {
            "name": "keyword.operator.logical.ts"
          },
          "2": {
            "name": "entity.name.function.pipe.ng"
          }
        },
        "match": "((?<!\\|)\\|(?!\\|))\\s?([a-zA-Z0-9\\-\\_\\$]*)"
      }, {
        "match": "(?<!\\.|\\$)\\b(let)\\b(?!\\$)",
        "name": "storage.type.ts"
      }, {
        "match": "(?<!\\.|\\$)\\b(await)\\b(?!\\$)",
        "name": "keyword.control.flow.ts"
      }, {
        "match": "(?<!\\.|\\$)\\bdelete\\b(?!\\$)",
        "name": "keyword.operator.expression.delete.ts"
      }, {
        "match": "(?<!\\.|\\$)\\bin\\b(?!\\$)",
        "name": "keyword.operator.expression.in.ts"
      }, {
        "match": "(?<!\\.|\\$)\\bof\\b(?!\\$)",
        "name": "keyword.operator.expression.of.ts"
      }, {
        "match": "(?<!\\.|\\$)\\bif\\b(?!\\$)",
        "name": "keyword.control.if.ts"
      }, {
        "match": "(?<!\\.|\\$)\\belse\\b(?!\\$)",
        "name": "keyword.control.else.ts"
      }, {
        "match": "(?<!\\.|\\$)\\bthen\\b(?!\\$)",
        "name": "keyword.control.then.ts"
      }, {
        "match": "(?<!\\.|\\$)\\binstanceof\\b(?!\\$)",
        "name": "keyword.operator.expression.instanceof.ts"
      }, {
        "match": "(?<!\\.|\\$)\\bnew\\b(?!\\$)",
        "name": "keyword.operator.new.ts"
      }, {
        "match": "(?<!\\.|\\$)\\bvoid\\b(?!\\$)",
        "name": "keyword.operator.expression.void.ts"
      }, {
        "begin": "(?<!\\.|\\$)\\bas\\b(?!\\$)",
        "beginCaptures": {
          "0": {
            "name": "storage.type.as.ts"
          }
        },
        "end": `(?=$|"|'|[;,:})\\]])`,
        "patterns": [{
          "include": "#type"
        }]
      }, {
        "match": "\\*=|(?<!\\()\\/=|%=|\\+=|\\-=",
        "name": "keyword.operator.assignment.compound.ts"
      }, {
        "match": "\\&=|\\^=|<<=|>>=|>>>=|\\|=",
        "name": "keyword.operator.assignment.compound.bitwise.ts"
      }, {
        "match": "<<|>>>|>>",
        "name": "keyword.operator.bitwise.shift.ts"
      }, {
        "match": "===|!==|==|!=",
        "name": "keyword.operator.comparison.ts"
      }, {
        "match": "<=|>=|<>|<|>",
        "name": "keyword.operator.relational.ts"
      }, {
        "match": "\\!|&&|\\?\\?|\\|\\|",
        "name": "keyword.operator.logical.ts"
      }, {
        "match": "\\&|~|\\^|\\|",
        "name": "keyword.operator.bitwise.ts"
      }, {
        "match": "\\=",
        "name": "keyword.operator.assignment.ts"
      }, {
        "match": "--",
        "name": "keyword.operator.decrement.ts"
      }, {
        "match": "\\+\\+",
        "name": "keyword.operator.increment.ts"
      }, {
        "match": "\\%|\\*|\\/|-|\\+",
        "name": "keyword.operator.arithmetic.ts"
      }, {
        "captures": {
          "1": {
            "name": "keyword.operator.arithmetic.ts"
          }
        },
        "match": "(?<=[_$[:alnum:]])\\s*(\\/)(?![\\/*])"
      }, {
        "include": "#typeofOperator"
      }]
    },
    "functionCall": {
      "begin": "(?=(\\??\\.\\s*)?([_$[:alpha:]][_$[:alnum:]]*)\\s*(<([^<>]|\\<[^<>]+\\>)+>\\s*)?\\()",
      "end": "(?<=\\))(?!(\\??\\.\\s*)?([_$[:alpha:]][_$[:alnum:]]*)\\s*(<([^<>]|\\<[^<>]+\\>)+>\\s*)?\\()",
      "patterns": [{
        "match": "\\?",
        "name": "punctuation.accessor.ts"
      }, {
        "match": "\\.",
        "name": "punctuation.accessor.ts"
      }, {
        "match": "([_$[:alpha:]][_$[:alnum:]]*)",
        "name": "entity.name.function.ts"
      }, {
        "begin": "\\<",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.typeparameters.begin.ts"
          }
        },
        "end": "\\>",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.typeparameters.end.ts"
          }
        },
        "name": "meta.type.parameters.ts",
        "patterns": [{
          "include": "#type"
        }, {
          "include": "#punctuationComma"
        }]
      }, {
        "include": "#parenExpression"
      }]
    },
    "functionParameters": {
      "begin": "\\(",
      "beginCaptures": {
        "0": {
          "name": "punctuation.definition.parameters.begin.ts"
        }
      },
      "end": "\\)",
      "endCaptures": {
        "0": {
          "name": "punctuation.definition.parameters.end.ts"
        }
      },
      "name": "meta.parameters.ts",
      "patterns": [{
        "include": "#decorator"
      }, {
        "include": "#parameterName"
      }, {
        "include": "#variableInitializer"
      }, {
        "match": ",",
        "name": "punctuation.separator.parameter.ts"
      }]
    },
    "identifiers": {
      "patterns": [{
        "match": "([_$[:alpha:]][_$[:alnum:]]*)(?=\\s*\\.\\s*prototype\\b(?!\\$))",
        "name": "support.class.ts"
      }, {
        "captures": {
          "1": {
            "name": "punctuation.accessor.ts"
          },
          "2": {
            "name": "constant.other.object.property.ts"
          },
          "3": {
            "name": "variable.other.object.property.ts"
          }
        },
        "match": "(?x)([?!]?\\.)\\s*(?:\n([[:upper:]][_$[:digit:][:upper:]]*)|\n([_$[:alpha:]][_$[:alnum:]]*)\n)(?=\\s*\\.\\s*[_$[:alpha:]][_$[:alnum:]]*)"
      }, {
        "captures": {
          "1": {
            "name": "punctuation.accessor.ts"
          },
          "2": {
            "name": "entity.name.function.ts"
          }
        },
        "match": "(?x)(?:([?!]?\\.)\\s*)?([_$[:alpha:]][_$[:alnum:]]*)(?=\\s*=\\s*((async\\s+)|(function\\s*[(<])|(function\\s+)|([_$[:alpha:]][_$[:alnum:]]*\\s*=>)|((<([^<>]|\\<[^<>]+\\>)+>\\s*)?\\(([^()]|\\([^()]*\\))*\\)(\\s*:\\s*(.)*)?\\s*=>)))"
      }, {
        "captures": {
          "1": {
            "name": "punctuation.accessor.ts"
          },
          "2": {
            "name": "constant.other.property.ts"
          }
        },
        "match": "([?!]?\\.)\\s*([[:upper:]][_$[:digit:][:upper:]]*)(?![_$[:alnum:]])"
      }, {
        "captures": {
          "1": {
            "name": "punctuation.accessor.ts"
          },
          "2": {
            "name": "variable.other.property.ts"
          }
        },
        "match": "([?!]?\\.)\\s*([_$[:alpha:]][_$[:alnum:]]*)"
      }, {
        "captures": {
          "1": {
            "name": "constant.other.object.ts"
          },
          "2": {
            "name": "variable.other.object.ts"
          }
        },
        "match": "(?x)(?:\n([[:upper:]][_$[:digit:][:upper:]]*)|\n([_$[:alpha:]][_$[:alnum:]]*)\n)(?=\\s*\\.\\s*[_$[:alpha:]][_$[:alnum:]]*)"
      }, {
        "match": "([[:upper:]][_$[:digit:][:upper:]]*)(?![_$[:alnum:]])",
        "name": "constant.character.other"
      }, {
        "match": "[_$[:alpha:]][_$[:alnum:]]*",
        "name": "variable.other.readwrite.ts"
      }]
    },
    "literal": {
      "name": "literal.ts",
      "patterns": [{
        "include": "#numericLiteral"
      }, {
        "include": "#booleanLiteral"
      }, {
        "include": "#nullLiteral"
      }, {
        "include": "#undefinedLiteral"
      }, {
        "include": "#numericConstantLiteral"
      }, {
        "include": "#arrayLiteral"
      }, {
        "include": "#thisLiteral"
      }]
    },
    "ngExpression": {
      "name": "meta.expression.ng",
      "patterns": [{
        "include": "#string"
      }, {
        "include": "#literal"
      }, {
        "include": "#ternaryExpression"
      }, {
        "include": "#expressionOperator"
      }, {
        "include": "#functionCall"
      }, {
        "include": "#identifiers"
      }, {
        "include": "#parenExpression"
      }, {
        "include": "#punctuationComma"
      }, {
        "include": "#punctuationAccessor"
      }]
    },
    "nullLiteral": {
      "match": "(?<!\\.|\\$)\\bnull\\b(?!\\$)",
      "name": "constant.language.null.ts"
    },
    "numericConstantLiteral": {
      "patterns": [{
        "match": "(?<!\\.|\\$)\\bNaN\\b(?!\\$)",
        "name": "constant.language.nan.ts"
      }, {
        "match": "(?<!\\.|\\$)\\bInfinity\\b(?!\\$)",
        "name": "constant.language.infinity.ts"
      }]
    },
    "numericLiteral": {
      "patterns": [{
        "match": "\\b(?<!\\$)0(x|X)[0-9a-fA-F]+\\b(?!\\$)",
        "name": "constant.numeric.hex.ts"
      }, {
        "match": "\\b(?<!\\$)0(b|B)[01]+\\b(?!\\$)",
        "name": "constant.numeric.binary.ts"
      }, {
        "match": "\\\\b(?<!\\$)0(o|O)?[0-7]+\\b(?!\\$)",
        "name": "constant.numeric.octal.ts"
      }, {
        "captures": {
          "0": {
            "name": "constant.numeric.decimal.ts"
          },
          "1": {
            "name": "meta.delimiter.decimal.period.ts"
          },
          "2": {
            "name": "meta.delimiter.decimal.period.ts"
          },
          "3": {
            "name": "meta.delimiter.decimal.period.ts"
          },
          "4": {
            "name": "meta.delimiter.decimal.period.ts"
          },
          "5": {
            "name": "meta.delimiter.decimal.period.ts"
          },
          "6": {
            "name": "meta.delimiter.decimal.period.ts"
          }
        },
        "match": "(?x)\n(?<!\\$)(?:\n(?:\\b[0-9]+(\\.)[0-9]+[eE][+-]?[0-9]+\\b)|#1.1E+3\n(?:\\b[0-9]+(\\.)[eE][+-]?[0-9]+\\b)|#1.E+3\n(?:\\B(\\.)[0-9]+[eE][+-]?[0-9]+\\b)|#.1E+3\n(?:\\b[0-9]+[eE][+-]?[0-9]+\\b)|#1E+3(?:\\b[0-9]+(\\.)[0-9]+\\b)|#1.1\n(?:\\b[0-9]+(\\.)\\B)|#1.\n(?:\\B(\\.)[0-9]+\\b)|#.1\n(?:\\b[0-9]+\\b(?!\\.))#1\n)(?!\\$)"
      }]
    },
    "parameterName": {
      "patterns": [{
        "captures": {
          "1": {
            "name": "storage.modifier.ts"
          },
          "2": {
            "name": "storage.modifier.ts"
          },
          "3": {
            "name": "keyword.operator.rest.ts"
          },
          "4": {
            "name": "entity.name.function.ts"
          },
          "5": {
            "name": "keyword.operator.optional.ts"
          }
        },
        "match": "(?x)(?:\\s*\\b(readonly)\\s+)?(?:\\s*\\b(public|private|protected)\\s+)?(\\.\\.\\.)?\\s*(?<!=|:)([_$[:alpha:]][_$[:alnum:]]*)\\s*(\\??)(?=\\s* (=\\s*( (async\\s+) | (function\\s*[(<]) | (function\\s+) | ([_$[:alpha:]][_$[:alnum:]]*\\s*=>) | ((<([^<>]|\\<[^<>]+\\>)+>\\s*)?\\(([^()]|\\([^()]*\\))*\\)(\\s*:\\s*(.)*)?\\s*=>)) ) | (:\\s*( (<) | ([(]\\s*( ([)]) | (\\.\\.\\.) | ([_$[:alnum:]]+\\s*( ([:,?=])| ([)]\\s*=>) )) ))) ))"
      }, {
        "captures": {
          "1": {
            "name": "storage.modifier.ts"
          },
          "2": {
            "name": "storage.modifier.ts"
          },
          "3": {
            "name": "keyword.operator.rest.ts"
          },
          "4": {
            "name": "variable.parameter.ts"
          },
          "5": {
            "name": "keyword.operator.optional.ts"
          }
        },
        "match": "(?:\\s*\\b(readonly)\\s+)?(?:\\s*\\b(public|private|protected)\\s+)?(\\.\\.\\.)?\\s*(?<!=|:)([_$[:alpha:]][_$[:alnum:]]*)\\s*(\\??)"
      }]
    },
    "parenExpression": {
      "begin": "\\(",
      "beginCaptures": {
        "0": {
          "name": "meta.brace.round.ts"
        }
      },
      "end": "\\)",
      "endCaptures": {
        "0": {
          "name": "meta.brace.round.ts"
        }
      },
      "patterns": [{
        "include": "#ngExpression"
      }, {
        "include": "#punctuationComma"
      }]
    },
    "punctuationAccessor": {
      "match": "\\?\\.|\\!\\.|\\.",
      "name": "punctuation.accessor.ts"
    },
    "punctuationComma": {
      "match": ",",
      "name": "punctuation.separator.comma.ts"
    },
    "punctuationSemicolon": {
      "match": ";",
      "name": "punctuation.terminator.statement.ts"
    },
    "qstringDouble": {
      "begin": '"',
      "beginCaptures": {
        "0": {
          "name": "punctuation.definition.string.begin.ts"
        }
      },
      "end": '(")|((?:[^\\\\\\n])$)',
      "endCaptures": {
        "1": {
          "name": "punctuation.definition.string.end.ts"
        },
        "2": {
          "name": "invalid.illegal.newline.ts"
        }
      },
      "name": "string.quoted.double.ts",
      "patterns": [{
        "include": "#stringCharacterEscape"
      }]
    },
    "qstringSingle": {
      "begin": "'",
      "beginCaptures": {
        "0": {
          "name": "punctuation.definition.string.begin.ts"
        }
      },
      "end": "(\\')|((?:[^\\\\\\n])$)",
      "endCaptures": {
        "1": {
          "name": "punctuation.definition.string.end.ts"
        },
        "2": {
          "name": "invalid.illegal.newline.ts"
        }
      },
      "name": "string.quoted.single.ts",
      "patterns": [{
        "include": "#stringCharacterEscape"
      }]
    },
    "string": {
      "patterns": [{
        "include": "#qstringSingle"
      }, {
        "include": "#qstringDouble"
      }]
    },
    "stringCharacterEscape": {
      "match": "\\\\(x\\h{2}|[0-2][0-7]{0,2}|3[0-6][0-7]?|37[0-7]?|[4-7][0-7]?|.|$)",
      "name": "constant.character.escape.ts"
    },
    "ternaryExpression": {
      "begin": "(?!\\?\\.\\s*[^[:digit:]])(\\?)(?!\\?)",
      "beginCaptures": {
        "1": {
          "name": "keyword.operator.ternary.ts"
        }
      },
      "end": "\\s*(:)",
      "endCaptures": {
        "1": {
          "name": "keyword.operator.ternary.ts"
        }
      },
      "patterns": [{
        "include": "#ngExpression"
      }]
    },
    "thisLiteral": {
      "match": "(?<!\\.|\\$)\\bthis\\b(?!\\$)",
      "name": "variable.language.this.ts"
    },
    "type": {
      "name": "meta.type.ts",
      "patterns": [{
        "include": "#string"
      }, {
        "include": "#numericLiteral"
      }, {
        "include": "#typeBuiltinLiterals"
      }, {
        "include": "#typeTuple"
      }, {
        "include": "#typeObject"
      }, {
        "include": "#typeOperators"
      }, {
        "include": "#typeFnTypeParameters"
      }, {
        "include": "#typeParenOrFunctionParameters"
      }, {
        "include": "#typeName"
      }]
    },
    "typeAnnotation": {
      "begin": ":",
      "beginCaptures": {
        "0": {
          "name": "keyword.operator.type.annotation.ts"
        }
      },
      "end": '(?=$|[,);\\}\\]]|\\/\\/|")|(?==[^>])|(?<=[\\}>\\]\\)]|[_$[:alpha:]])\\s*(?=\\{)',
      "name": "meta.type.annotation.ts",
      "patterns": [{
        "include": "#type"
      }]
    },
    "typeBuiltinLiterals": {
      "match": "(?<!\\.|\\$)\\b(this|true|false|undefined|null)\\b(?!\\$)",
      "name": "support.type.builtin.ts"
    },
    "typeFnTypeParameters": {
      "patterns": [{
        "captures": {
          "1": {
            "name": "keyword.control.new.ts"
          }
        },
        "match": "(?<!\\.|\\$)\\b(new)\\b(?=\\s*\\<)",
        "name": "meta.type.constructor.ts"
      }, {
        "begin": "(?<!\\.|\\$)\\b(new)\\b\\s*(?=\\()",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.new.ts"
          }
        },
        "end": "(?<=\\))",
        "name": "meta.type.constructor.ts",
        "patterns": [{
          "include": "#functionParameters"
        }]
      }, {
        "begin": "(?<=\\>)\\s*(?=\\()",
        "end": "(?<=\\))",
        "include": "#typeofOperator",
        "name": "meta.type.function.ts",
        "patterns": [{
          "include": "#functionParameters"
        }]
      }, {
        "begin": "(?x)((?=[(]\\s*(([)])|(\\.\\.\\.)|([_$[:alnum:]]+\\s*(([:,?=])|([)]\\s*=>))))))",
        "end": "(?<=\\))",
        "name": "meta.type.function.ts",
        "patterns": [{
          "include": "#functionParameters"
        }]
      }]
    },
    "typeName": {
      "patterns": [{
        "captures": {
          "1": {
            "name": "entity.name.type.module.ts"
          },
          "2": {
            "name": "punctuation.accessor.ts"
          }
        },
        "match": "([_$[:alpha:]][_$[:alnum:]]*)\\s*([?!]?\\.)"
      }, {
        "match": "[_$[:alpha:]][_$[:alnum:]]*",
        "name": "entity.name.type.ts"
      }]
    },
    "typeObject": {
      "begin": "\\{",
      "beginCaptures": {
        "0": {
          "name": "punctuation.definition.block.ts"
        }
      },
      "end": "\\}",
      "endCaptures": {
        "0": {
          "name": "punctuation.definition.block.ts"
        }
      },
      "name": "meta.object.type.ts",
      "patterns": [{
        "include": "#typeObjectMembers"
      }]
    },
    "typeObjectMembers": {
      "patterns": [{
        "include": "#typeAnnotation"
      }, {
        "include": "#punctuationComma"
      }, {
        "include": "#punctuationSemicolon"
      }]
    },
    "typeOperators": {
      "patterns": [{
        "include": "#typeofOperator"
      }, {
        "match": "[&|]",
        "name": "keyword.operator.type.ts"
      }, {
        "match": "(?<!\\.|\\$)\\bkeyof\\b(?!\\$)",
        "name": "keyword.operator.expression.keyof.ts"
      }]
    },
    "typeParenOrFunctionParameters": {
      "begin": "\\(",
      "beginCaptures": {
        "0": {
          "name": "meta.brace.round.ts"
        }
      },
      "end": "\\)",
      "endCaptures": {
        "0": {
          "name": "meta.brace.round.ts"
        }
      },
      "name": "meta.type.paren.cover.ts",
      "patterns": [{
        "include": "#type"
      }, {
        "include": "#functionParameters"
      }]
    },
    "typeTuple": {
      "begin": "\\[",
      "beginCaptures": {
        "0": {
          "name": "meta.brace.square.ts"
        }
      },
      "end": "\\]",
      "endCaptures": {
        "0": {
          "name": "meta.brace.square.ts"
        }
      },
      "name": "meta.type.tuple.ts",
      "patterns": [{
        "include": "#type"
      }, {
        "include": "#punctuationComma"
      }]
    },
    "typeofOperator": {
      "match": "(?<!\\.|\\$)\\btypeof\\b(?!\\$)",
      "name": "keyword.operator.expression.typeof.ts"
    },
    "undefinedLiteral": {
      "match": "(?<!\\.|\\$)\\bundefined\\b(?!\\$)",
      "name": "constant.language.undefined.ts"
    },
    "variableInitializer": {
      "begin": "(?<!=|!)(=)(?!=)",
      "beginCaptures": {
        "1": {
          "name": "keyword.operator.assignment.ts"
        }
      },
      "end": "(?=$|[,);}\\]])",
      "patterns": [{
        "include": "#ngExpression"
      }]
    }
  },
  "scopeName": "expression.ng"
});
var angular_expression = [lang];

// node_modules/shiki/dist/langs/angular-let-declaration.mjs
var lang2 = Object.freeze({
  "injectTo": ["text.html.derivative", "text.html.derivative.ng", "source.ts.ng"],
  "injectionSelector": "L:text.html -comment -expression.ng -meta.tag -source.css -source.js",
  "name": "angular-let-declaration",
  "patterns": [{
    "include": "#letDeclaration"
  }],
  "repository": {
    "letDeclaration": {
      "begin": "(@let)\\s+([_$[:alpha:]][_$[:alnum:]]*)\\s*(=)?",
      "beginCaptures": {
        "1": {
          "name": "storage.type.ng"
        },
        "2": {
          "name": "meta.definition.variable.ng"
        },
        "3": {
          "name": "keyword.operator.assignment.ng"
        }
      },
      "contentName": "meta.definition.variable.ng",
      "end": "(?<=;)",
      "patterns": [{
        "include": "#letInitializer"
      }]
    },
    "letInitializer": {
      "begin": "\\s*",
      "beginCaptures": {
        "0": {
          "name": "keyword.operator.assignment.ng"
        }
      },
      "contentName": "meta.definition.variable.initializer.ng",
      "end": ";",
      "endCaptures": {
        "0": {
          "name": "punctuation.terminator.statement.ng"
        }
      },
      "patterns": [{
        "include": "expression.ng"
      }]
    }
  },
  "scopeName": "template.let.ng",
  "embeddedLangs": ["angular-expression"]
});
var angular_let_declaration = [...angular_expression, lang2];

// node_modules/shiki/dist/langs/angular-template.mjs
var lang3 = Object.freeze({
  "injectTo": ["text.html.derivative", "text.html.derivative.ng", "source.ts.ng"],
  "injectionSelector": "L:text.html -comment",
  "name": "angular-template",
  "patterns": [{
    "include": "#interpolation"
  }],
  "repository": {
    "interpolation": {
      "begin": "{{",
      "beginCaptures": {
        "0": {
          "name": "punctuation.definition.block.ts"
        }
      },
      "contentName": "expression.ng",
      "end": "}}",
      "endCaptures": {
        "0": {
          "name": "punctuation.definition.block.ts"
        }
      },
      "patterns": [{
        "include": "expression.ng"
      }]
    }
  },
  "scopeName": "template.ng",
  "embeddedLangs": ["angular-expression"]
});
var angular_template = [...angular_expression, lang3];

// node_modules/shiki/dist/langs/angular-template-blocks.mjs
var lang4 = Object.freeze({
  "injectTo": ["text.html.derivative", "text.html.derivative.ng", "source.ts.ng"],
  "injectionSelector": "L:text.html -comment -expression.ng -meta.tag -source.css -source.js",
  "name": "angular-template-blocks",
  "patterns": [{
    "include": "#block"
  }],
  "repository": {
    "block": {
      "begin": "(@)(if|else if|else|defer|placeholder|loading|error|switch|case|default|for|empty)(?:\\s*)",
      "beginCaptures": {
        "1": {
          "patterns": [{
            "include": "#transition"
          }]
        },
        "2": {
          "name": "keyword.control.block.kind.ng"
        }
      },
      "end": "(?<=\\})",
      "name": "control.block.ng",
      "patterns": [{
        "include": "#blockExpression"
      }, {
        "include": "#blockBody"
      }]
    },
    "blockBody": {
      "begin": "\\{",
      "beginCaptures": {
        "0": {
          "name": "punctuation.definition.block.ts"
        }
      },
      "contentName": "control.block.body.ng",
      "end": "\\}",
      "endCaptures": {
        "0": {
          "name": "punctuation.definition.block.ts"
        }
      },
      "patterns": [{
        "include": "text.html.derivative.ng"
      }, {
        "include": "template.ng"
      }]
    },
    "blockExpression": {
      "begin": "\\(",
      "beginCaptures": {
        "0": {
          "name": "meta.brace.round.ts"
        }
      },
      "contentName": "control.block.expression.ng",
      "end": "\\)",
      "endCaptures": {
        "0": {
          "name": "meta.brace.round.ts"
        }
      },
      "patterns": [{
        "include": "expression.ng"
      }]
    },
    "transition": {
      "match": "@",
      "name": "keyword.control.block.transition.ng"
    }
  },
  "scopeName": "template.blocks.ng",
  "embeddedLangs": ["angular-expression", "angular-template"]
});
var angular_template_blocks = [...angular_expression, ...angular_template, lang4];

// node_modules/shiki/dist/langs/angular-html.mjs
var lang5 = Object.freeze({
  "displayName": "Angular HTML",
  "injections": {
    "R:text.html - (comment.block, text.html meta.embedded, meta.tag.*.*.html, meta.tag.*.*.*.html, meta.tag.*.*.*.*.html)": {
      "comment": "Uses R: to ensure this matches after any other injections.",
      "patterns": [{
        "match": "<",
        "name": "invalid.illegal.bad-angle-bracket.html"
      }]
    }
  },
  "name": "angular-html",
  "patterns": [{
    "include": "text.html.basic#core-minus-invalid"
  }, {
    "begin": "(</?)(\\w[^\\s>]*)(?<!/)",
    "beginCaptures": {
      "1": {
        "name": "punctuation.definition.tag.begin.html"
      },
      "2": {
        "name": "entity.name.tag.html"
      }
    },
    "end": "((?: ?/)?>)",
    "endCaptures": {
      "1": {
        "name": "punctuation.definition.tag.end.html"
      }
    },
    "name": "meta.tag.other.unrecognized.html.derivative",
    "patterns": [{
      "include": "text.html.basic#attribute"
    }]
  }],
  "scopeName": "text.html.derivative.ng",
  "embeddedLangs": ["html", "angular-expression", "angular-let-declaration", "angular-template", "angular-template-blocks"]
});
var angular_html = [...html, ...angular_expression, ...angular_let_declaration, ...angular_template, ...angular_template_blocks, lang5];

export {
  angular_expression,
  angular_let_declaration,
  angular_template,
  angular_template_blocks,
  angular_html
};
//# sourceMappingURL=chunk-ZCUPLNJX.js.map
