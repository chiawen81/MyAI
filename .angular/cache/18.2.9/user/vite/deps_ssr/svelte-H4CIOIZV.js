import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  pug
} from "./chunk-OUZJSLXT.js";
import {
  markdown
} from "./chunk-JL57BWWA.js";
import {
  typescript
} from "./chunk-TSIBLI5C.js";
import {
  stylus
} from "./chunk-QUXXVSA4.js";
import {
  postcss
} from "./chunk-YUHKK5A7.js";
import {
  sass
} from "./chunk-QFWAJXVT.js";
import {
  less
} from "./chunk-BUQ4VAGX.js";
import {
  coffee
} from "./chunk-E7CM3ZIZ.js";
import "./chunk-INHGZOUG.js";
import {
  scss
} from "./chunk-JCIBJMOH.js";
import {
  javascript
} from "./chunk-TZXFUJOZ.js";
import {
  css
} from "./chunk-2SZ5X6K7.js";
import "./chunk-NQ4HTGF6.js";

// node_modules/shiki/dist/langs/svelte.mjs
var lang = Object.freeze({
  "displayName": "Svelte",
  "fileTypes": ["svelte"],
  "injections": {
    "L:(meta.script.svelte | meta.style.svelte) (meta.lang.js | meta.lang.javascript) - (meta source)": {
      "patterns": [{
        "begin": "(?<=>)(?!</)",
        "contentName": "source.js",
        "end": "(?=</)",
        "name": "meta.embedded.block.svelte",
        "patterns": [{
          "include": "source.js"
        }]
      }]
    },
    "L:(meta.script.svelte | meta.style.svelte) (meta.lang.ts | meta.lang.typescript) - (meta source)": {
      "patterns": [{
        "begin": "(?<=>)(?!</)",
        "contentName": "source.ts",
        "end": "(?=</)",
        "name": "meta.embedded.block.svelte",
        "patterns": [{
          "include": "source.ts"
        }]
      }]
    },
    "L:(meta.script.svelte | meta.style.svelte) meta.lang.coffee - (meta source)": {
      "patterns": [{
        "begin": "(?<=>)(?!</)",
        "contentName": "source.coffee",
        "end": "(?=</)",
        "name": "meta.embedded.block.svelte",
        "patterns": [{
          "include": "source.coffee"
        }]
      }]
    },
    "L:(source.ts, source.js, source.coffee)": {
      "patterns": [{
        "match": `(?<![_$./'"[:alnum:]])\\$(?=[_[:alpha:]][_$[:alnum:]]*)`,
        "name": "punctuation.definition.variable.svelte"
      }, {
        "match": `(?<![_$./'"[:alnum:]])(\\$\\$)(?=props|restProps|slots)`,
        "name": "punctuation.definition.variable.svelte"
      }]
    },
    "L:meta.script.svelte - meta.lang - (meta source)": {
      "patterns": [{
        "begin": "(?<=>)(?!</)",
        "contentName": "source.js",
        "end": "(?=</)",
        "name": "meta.embedded.block.svelte",
        "patterns": [{
          "include": "source.js"
        }]
      }]
    },
    "L:meta.style.svelte - meta.lang - (meta source)": {
      "patterns": [{
        "begin": "(?<=>)(?!</)",
        "contentName": "source.css",
        "end": "(?=</)",
        "name": "meta.embedded.block.svelte",
        "patterns": [{
          "include": "source.css"
        }]
      }]
    },
    "L:meta.style.svelte meta.lang.css - (meta source)": {
      "patterns": [{
        "begin": "(?<=>)(?!</)",
        "contentName": "source.css",
        "end": "(?=</)",
        "name": "meta.embedded.block.svelte",
        "patterns": [{
          "include": "source.css"
        }]
      }]
    },
    "L:meta.style.svelte meta.lang.less - (meta source)": {
      "patterns": [{
        "begin": "(?<=>)(?!</)",
        "contentName": "source.css.less",
        "end": "(?=</)",
        "name": "meta.embedded.block.svelte",
        "patterns": [{
          "include": "source.css.less"
        }]
      }]
    },
    "L:meta.style.svelte meta.lang.postcss - (meta source)": {
      "patterns": [{
        "begin": "(?<=>)(?!</)",
        "contentName": "source.css.postcss",
        "end": "(?=</)",
        "name": "meta.embedded.block.svelte",
        "patterns": [{
          "include": "source.css.postcss"
        }]
      }]
    },
    "L:meta.style.svelte meta.lang.sass - (meta source)": {
      "patterns": [{
        "begin": "(?<=>)(?!</)",
        "contentName": "source.sass",
        "end": "(?=</)",
        "name": "meta.embedded.block.svelte",
        "patterns": [{
          "include": "source.sass"
        }]
      }]
    },
    "L:meta.style.svelte meta.lang.scss - (meta source)": {
      "patterns": [{
        "begin": "(?<=>)(?!</)",
        "contentName": "source.css.scss",
        "end": "(?=</)",
        "name": "meta.embedded.block.svelte",
        "patterns": [{
          "include": "source.css.scss"
        }]
      }]
    },
    "L:meta.style.svelte meta.lang.stylus - (meta source)": {
      "patterns": [{
        "begin": "(?<=>)(?!</)",
        "contentName": "source.stylus",
        "end": "(?=</)",
        "name": "meta.embedded.block.svelte",
        "patterns": [{
          "include": "source.stylus"
        }]
      }]
    },
    "L:meta.template.svelte - meta.lang - (meta source)": {
      "patterns": [{
        "begin": "(?<=>)\\s",
        "end": "(?=</template)",
        "patterns": [{
          "include": "#scope"
        }]
      }]
    },
    "L:meta.template.svelte meta.lang.pug - (meta source)": {
      "patterns": [{
        "begin": "(?<=>)(?!</)",
        "contentName": "text.pug",
        "end": "(?=</)",
        "name": "meta.embedded.block.svelte",
        "patterns": [{
          "include": "text.pug"
        }]
      }]
    }
  },
  "name": "svelte",
  "patterns": [{
    "include": "#scope"
  }],
  "repository": {
    "attributes": {
      "patterns": [{
        "include": "#attributes-directives"
      }, {
        "include": "#attributes-keyvalue"
      }, {
        "include": "#attributes-interpolated"
      }]
    },
    "attributes-directives": {
      "begin": "(?<!<)(on|use|bind|transition|in|out|animate|let|class|style)(:)(?:((?:--)?[_$[:alpha:]][_\\-$[:alnum:]]*(?=\\s*=))|((?:--)?[_$[:alpha:]][_\\-$[:alnum:]]*))((\\|\\w+)*)",
      "beginCaptures": {
        "1": {
          "patterns": [{
            "include": "#attributes-directives-keywords"
          }]
        },
        "2": {
          "name": "punctuation.definition.keyword.svelte"
        },
        "3": {
          "patterns": [{
            "include": "#attributes-directives-types-assigned"
          }]
        },
        "4": {
          "patterns": [{
            "include": "#attributes-directives-types"
          }]
        },
        "5": {
          "patterns": [{
            "match": "\\w+",
            "name": "support.function.svelte"
          }, {
            "match": "\\|",
            "name": "punctuation.separator.svelte"
          }]
        }
      },
      "end": "(?=\\s*+[^=\\s])",
      "name": "meta.directive.$1.svelte",
      "patterns": [{
        "begin": "=",
        "beginCaptures": {
          "0": {
            "name": "punctuation.separator.key-value.svelte"
          }
        },
        "end": "(?<=[^\\s=])(?!\\s*=)|(?=/?>)",
        "patterns": [{
          "include": "#attributes-value"
        }]
      }]
    },
    "attributes-directives-keywords": {
      "patterns": [{
        "match": "on|use|bind",
        "name": "keyword.control.svelte"
      }, {
        "match": "transition|in|out|animate",
        "name": "keyword.other.animation.svelte"
      }, {
        "match": "let",
        "name": "storage.type.svelte"
      }, {
        "match": "class|style",
        "name": "entity.other.attribute-name.svelte"
      }]
    },
    "attributes-directives-types": {
      "patterns": [{
        "match": "(?<=(on):).*$",
        "name": "entity.name.type.svelte"
      }, {
        "match": "(?<=(bind):).*$",
        "name": "variable.parameter.svelte"
      }, {
        "match": "(?<=(use|transition|in|out|animate):).*$",
        "name": "variable.function.svelte"
      }, {
        "match": "(?<=(let|class|style):).*$",
        "name": "variable.parameter.svelte"
      }]
    },
    "attributes-directives-types-assigned": {
      "patterns": [{
        "match": "(?<=(bind):)this$",
        "name": "variable.language.svelte"
      }, {
        "match": "(?<=(bind):).*$",
        "name": "entity.name.type.svelte"
      }, {
        "match": "(?<=(class):).*$",
        "name": "entity.other.attribute-name.class.svelte"
      }, {
        "match": "(?<=(style):).*$",
        "name": "support.type.property-name.svelte"
      }, {
        "include": "#attributes-directives-types"
      }]
    },
    "attributes-generics": {
      "begin": `(generics)(=)(["'])`,
      "beginCaptures": {
        "1": {
          "name": "entity.other.attribute-name.svelte"
        },
        "2": {
          "name": "punctuation.separator.key-value.svelte"
        },
        "3": {
          "name": "punctuation.definition.string.begin.svelte"
        }
      },
      "contentName": "meta.embedded.expression.svelte source.ts",
      "end": "(\\3)",
      "endCaptures": {
        "1": {
          "name": "punctuation.definition.string.end.svelte"
        }
      },
      "patterns": [{
        "include": "#type-parameters"
      }]
    },
    "attributes-interpolated": {
      "begin": "(?<!:|=)\\s*({)",
      "captures": {
        "1": {
          "name": "entity.other.attribute-name.svelte"
        }
      },
      "contentName": "meta.embedded.expression.svelte source.ts",
      "end": "(\\})",
      "patterns": [{
        "include": "source.ts"
      }]
    },
    "attributes-keyvalue": {
      "begin": "((?:--)?[_$[:alpha:]][_\\-$[:alnum:]]*)",
      "beginCaptures": {
        "0": {
          "patterns": [{
            "match": "--.*",
            "name": "support.type.property-name.svelte"
          }, {
            "match": ".*",
            "name": "entity.other.attribute-name.svelte"
          }]
        }
      },
      "end": "(?=\\s*+[^=\\s])",
      "name": "meta.attribute.$1.svelte",
      "patterns": [{
        "begin": "=",
        "beginCaptures": {
          "0": {
            "name": "punctuation.separator.key-value.svelte"
          }
        },
        "end": "(?<=[^\\s=])(?!\\s*=)|(?=/?>)",
        "patterns": [{
          "include": "#attributes-value"
        }]
      }]
    },
    "attributes-value": {
      "patterns": [{
        "include": "#interpolation"
      }, {
        "captures": {
          "1": {
            "name": "punctuation.definition.string.begin.svelte"
          },
          "2": {
            "name": "constant.numeric.decimal.svelte"
          },
          "3": {
            "name": "punctuation.definition.string.end.svelte"
          },
          "4": {
            "name": "constant.numeric.decimal.svelte"
          }
        },
        "match": `(?:(['"])([0-9._]+[\\w%]{,4})(\\1))|(?:([0-9._]+[\\w%]{,4})(?=\\s|/?>))`
      }, {
        "match": "([^\\s\"'=<>`/]|/(?!>))+",
        "name": "string.unquoted.svelte",
        "patterns": [{
          "include": "#interpolation"
        }]
      }, {
        "begin": `(['"])`,
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.string.begin.svelte"
          }
        },
        "end": "\\1",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.string.end.svelte"
          }
        },
        "name": "string.quoted.svelte",
        "patterns": [{
          "include": "#interpolation"
        }]
      }]
    },
    "comments": {
      "begin": "<!--",
      "captures": {
        "0": {
          "name": "punctuation.definition.comment.svelte"
        }
      },
      "end": "-->",
      "name": "comment.block.svelte",
      "patterns": [{
        "begin": "(@)(component)",
        "beginCaptures": {
          "1": {
            "name": "punctuation.definition.keyword.svelte"
          },
          "2": {
            "name": "storage.type.class.component.svelte keyword.declaration.class.component.svelte"
          }
        },
        "contentName": "comment.block.documentation.svelte",
        "end": "(?=-->)",
        "patterns": [{
          "captures": {
            "0": {
              "patterns": [{
                "include": "text.html.markdown"
              }]
            }
          },
          "match": ".*?(?=-->)"
        }, {
          "include": "text.html.markdown"
        }]
      }, {
        "match": "\\G-?>|<!--(?!>)|<!-(?=-->)|--!>",
        "name": "invalid.illegal.characters-not-allowed-here.svelte"
      }]
    },
    "destructuring": {
      "patterns": [{
        "begin": "(?={)",
        "end": "(?<=})",
        "name": "meta.embedded.expression.svelte source.ts",
        "patterns": [{
          "include": "source.ts#object-binding-pattern"
        }]
      }, {
        "begin": "(?=\\[)",
        "end": "(?<=\\])",
        "name": "meta.embedded.expression.svelte source.ts",
        "patterns": [{
          "include": "source.ts#array-binding-pattern"
        }]
      }]
    },
    "destructuring-const": {
      "patterns": [{
        "begin": "(?={)",
        "end": "(?<=})",
        "name": "meta.embedded.expression.svelte source.ts",
        "patterns": [{
          "include": "source.ts#object-binding-pattern-const"
        }]
      }, {
        "begin": "(?=\\[)",
        "end": "(?<=\\])",
        "name": "meta.embedded.expression.svelte source.ts",
        "patterns": [{
          "include": "source.ts#array-binding-pattern-const"
        }]
      }]
    },
    "interpolation": {
      "patterns": [{
        "begin": "\\{",
        "beginCaptures": {
          "0": {
            "name": "punctuation.section.embedded.begin.svelte"
          }
        },
        "contentName": "meta.embedded.expression.svelte source.ts",
        "end": "\\}",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.embedded.end.svelte"
          }
        },
        "patterns": [{
          "begin": "\\G\\s*(?={)",
          "end": "(?<=})",
          "patterns": [{
            "include": "source.ts#object-literal"
          }]
        }, {
          "include": "source.ts"
        }]
      }]
    },
    "scope": {
      "patterns": [{
        "include": "#comments"
      }, {
        "include": "#special-tags"
      }, {
        "include": "#tags"
      }, {
        "include": "#interpolation"
      }, {
        "begin": "(?<=>|})",
        "end": "(?=<|{)",
        "name": "text.svelte"
      }]
    },
    "special-tags": {
      "patterns": [{
        "include": "#special-tags-void"
      }, {
        "include": "#special-tags-block-begin"
      }, {
        "include": "#special-tags-block-end"
      }]
    },
    "special-tags-block-begin": {
      "begin": "({)\\s*(#([a-z]*))",
      "beginCaptures": {
        "1": {
          "name": "punctuation.definition.block.begin.svelte"
        },
        "2": {
          "patterns": [{
            "include": "#special-tags-keywords"
          }]
        }
      },
      "end": "(})",
      "endCaptures": {
        "0": {
          "name": "punctuation.definition.block.end.svelte"
        }
      },
      "name": "meta.special.$3.svelte meta.special.start.svelte",
      "patterns": [{
        "include": "#special-tags-modes"
      }]
    },
    "special-tags-block-end": {
      "begin": "({)\\s*(/([a-z]*))",
      "beginCaptures": {
        "1": {
          "name": "punctuation.definition.block.begin.svelte"
        },
        "2": {
          "patterns": [{
            "include": "#special-tags-keywords"
          }]
        }
      },
      "end": "(})",
      "endCaptures": {
        "1": {
          "name": "punctuation.definition.block.end.svelte"
        }
      },
      "name": "meta.special.$3.svelte meta.special.end.svelte"
    },
    "special-tags-keywords": {
      "captures": {
        "1": {
          "name": "punctuation.definition.keyword.svelte"
        },
        "2": {
          "patterns": [{
            "match": "if|else\\s+if|else",
            "name": "keyword.control.conditional.svelte"
          }, {
            "match": "each|key",
            "name": "keyword.control.svelte"
          }, {
            "match": "await|then|catch",
            "name": "keyword.control.flow.svelte"
          }, {
            "match": "snippet",
            "name": "keyword.control.svelte"
          }, {
            "match": "html",
            "name": "keyword.other.svelte"
          }, {
            "match": "render",
            "name": "keyword.other.svelte"
          }, {
            "match": "debug",
            "name": "keyword.other.debugger.svelte"
          }, {
            "match": "const",
            "name": "storage.type.svelte"
          }]
        }
      },
      "match": "([#@/:])(else\\s+if|[a-z]*)"
    },
    "special-tags-modes": {
      "patterns": [{
        "begin": "(?<=(if|key|then|catch|snippet|html|render).*?)\\G",
        "end": "(?=})",
        "name": "meta.embedded.expression.svelte source.ts",
        "patterns": [{
          "include": "source.ts"
        }]
      }, {
        "begin": "(?<=const.*?)\\G",
        "end": "(?=})",
        "patterns": [{
          "include": "#destructuring-const"
        }, {
          "begin": "\\G\\s*([_$[:alpha:]][_$[:alnum:]]+)\\s*",
          "beginCaptures": {
            "1": {
              "name": "variable.other.constant.svelte"
            }
          },
          "end": "(?=\\=)"
        }, {
          "begin": "(?=\\=)",
          "end": "(?=})",
          "name": "meta.embedded.expression.svelte source.ts",
          "patterns": [{
            "include": "source.ts"
          }]
        }]
      }, {
        "begin": "(?<=each.*?)\\G",
        "end": "(?=})",
        "patterns": [{
          "begin": "\\G\\s*?(?=\\S)",
          "contentName": "meta.embedded.expression.svelte source.ts",
          "end": "(?=(?:^\\s*|\\s+)(as))",
          "patterns": [{
            "include": "source.ts"
          }]
        }, {
          "begin": "(as)",
          "beginCaptures": {
            "1": {
              "name": "keyword.control.as.svelte"
            }
          },
          "end": "(?=})",
          "patterns": [{
            "include": "#destructuring"
          }, {
            "begin": "\\(",
            "captures": {
              "0": {
                "name": "meta.brace.round.svelte"
              }
            },
            "contentName": "meta.embedded.expression.svelte source.ts",
            "end": "\\)|(?=})",
            "patterns": [{
              "include": "source.ts"
            }]
          }, {
            "captures": {
              "1": {
                "name": "meta.embedded.expression.svelte source.ts",
                "patterns": [{
                  "include": "source.ts"
                }]
              }
            },
            "match": "(\\s*([_$[:alpha:]][_$[:alnum:]]*)\\s*)"
          }, {
            "match": ",",
            "name": "punctuation.separator.svelte"
          }]
        }]
      }, {
        "begin": "(?<=await.*?)\\G",
        "end": "(?=})",
        "patterns": [{
          "begin": "\\G\\s*?(?=\\S)",
          "contentName": "meta.embedded.expression.svelte source.ts",
          "end": "\\s+(then)|(?=})",
          "endCaptures": {
            "1": {
              "name": "keyword.control.flow.svelte"
            }
          },
          "patterns": [{
            "include": "source.ts"
          }]
        }, {
          "begin": "(?<=then\\b)",
          "contentName": "meta.embedded.expression.svelte source.ts",
          "end": "(?=})",
          "patterns": [{
            "include": "source.ts"
          }]
        }]
      }, {
        "begin": "(?<=debug.*?)\\G",
        "end": "(?=})",
        "patterns": [{
          "captures": {
            "0": {
              "name": "meta.embedded.expression.svelte source.ts",
              "patterns": [{
                "include": "source.ts"
              }]
            }
          },
          "match": "[_$[:alpha:]][_$[:alnum:]]*"
        }, {
          "match": ",",
          "name": "punctuation.separator.svelte"
        }]
      }]
    },
    "special-tags-void": {
      "begin": "({)\\s*((?:[@:])(else\\s+if|[a-z]*))",
      "beginCaptures": {
        "1": {
          "name": "punctuation.definition.block.begin.svelte"
        },
        "2": {
          "patterns": [{
            "include": "#special-tags-keywords"
          }]
        }
      },
      "end": "\\}",
      "endCaptures": {
        "0": {
          "name": "punctuation.definition.block.end.svelte"
        }
      },
      "name": "meta.special.$3.svelte",
      "patterns": [{
        "include": "#special-tags-modes"
      }]
    },
    "tags": {
      "patterns": [{
        "include": "#tags-lang"
      }, {
        "include": "#tags-void"
      }, {
        "include": "#tags-general-end"
      }, {
        "include": "#tags-general-start"
      }]
    },
    "tags-end-node": {
      "captures": {
        "1": {
          "name": "meta.tag.end.svelte punctuation.definition.tag.begin.svelte"
        },
        "2": {
          "name": "meta.tag.end.svelte",
          "patterns": [{
            "include": "#tags-name"
          }]
        },
        "3": {
          "name": "meta.tag.end.svelte punctuation.definition.tag.end.svelte"
        },
        "4": {
          "name": "meta.tag.start.svelte punctuation.definition.tag.end.svelte"
        }
      },
      "match": "(</)(.*?)\\s*(>)|(/>)"
    },
    "tags-general-end": {
      "begin": "(</)([^/\\s>]*)",
      "beginCaptures": {
        "1": {
          "name": "meta.tag.end.svelte punctuation.definition.tag.begin.svelte"
        },
        "2": {
          "name": "meta.tag.end.svelte",
          "patterns": [{
            "include": "#tags-name"
          }]
        }
      },
      "end": "(>)",
      "endCaptures": {
        "1": {
          "name": "meta.tag.end.svelte punctuation.definition.tag.end.svelte"
        }
      },
      "name": "meta.scope.tag.$2.svelte"
    },
    "tags-general-start": {
      "begin": "(<)([^/\\s>/]*)",
      "beginCaptures": {
        "0": {
          "patterns": [{
            "include": "#tags-start-node"
          }]
        }
      },
      "end": "(/?>)",
      "endCaptures": {
        "1": {
          "name": "meta.tag.start.svelte punctuation.definition.tag.end.svelte"
        }
      },
      "name": "meta.scope.tag.$2.svelte",
      "patterns": [{
        "include": "#tags-start-attributes"
      }]
    },
    "tags-lang": {
      "begin": "<(script|style|template)",
      "beginCaptures": {
        "0": {
          "patterns": [{
            "include": "#tags-start-node"
          }]
        }
      },
      "end": "</\\1\\s*>|/>",
      "endCaptures": {
        "0": {
          "patterns": [{
            "include": "#tags-end-node"
          }]
        }
      },
      "name": "meta.$1.svelte",
      "patterns": [{
        "begin": `\\G(?=\\s*[^>]*?(type|lang)\\s*=\\s*(['"]|)(?:text/)?(\\w+)\\2)`,
        "end": "(?=</|/>)",
        "name": "meta.lang.$3.svelte",
        "patterns": [{
          "include": "#tags-lang-start-attributes"
        }]
      }, {
        "include": "#tags-lang-start-attributes"
      }]
    },
    "tags-lang-start-attributes": {
      "begin": "\\G",
      "end": "(?=/>)|>",
      "endCaptures": {
        "0": {
          "name": "punctuation.definition.tag.end.svelte"
        }
      },
      "name": "meta.tag.start.svelte",
      "patterns": [{
        "include": "#attributes-generics"
      }, {
        "include": "#attributes"
      }]
    },
    "tags-name": {
      "patterns": [{
        "captures": {
          "1": {
            "name": "keyword.control.svelte"
          },
          "2": {
            "name": "punctuation.definition.keyword.svelte"
          },
          "3": {
            "name": "entity.name.tag.svelte"
          }
        },
        "match": "(svelte)(:)([a-z][\\w0-9:-]*)"
      }, {
        "match": "slot",
        "name": "keyword.control.svelte"
      }, {
        "match": "[A-Z][a-zA-Z0-9_]*",
        "name": "support.class.component.svelte"
      }, {
        "match": "[a-z][\\w0-9:]*-[\\w0-9:-]*",
        "name": "meta.tag.custom.svelte entity.name.tag.svelte"
      }, {
        "match": "[a-z][\\w0-9:-]*",
        "name": "entity.name.tag.svelte"
      }]
    },
    "tags-start-attributes": {
      "begin": "\\G",
      "end": "(?=/?>)",
      "name": "meta.tag.start.svelte",
      "patterns": [{
        "include": "#attributes"
      }]
    },
    "tags-start-node": {
      "captures": {
        "1": {
          "name": "punctuation.definition.tag.begin.svelte"
        },
        "2": {
          "patterns": [{
            "include": "#tags-name"
          }]
        }
      },
      "match": "(<)([^/\\s>/]*)",
      "name": "meta.tag.start.svelte"
    },
    "tags-void": {
      "begin": "(<)(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)(?=\\s|/?>)",
      "beginCaptures": {
        "1": {
          "name": "punctuation.definition.tag.begin.svelte"
        },
        "2": {
          "name": "entity.name.tag.svelte"
        }
      },
      "end": "/?>",
      "endCaptures": {
        "0": {
          "name": "punctuation.definition.tag.begin.svelte"
        }
      },
      "name": "meta.tag.void.svelte",
      "patterns": [{
        "include": "#attributes"
      }]
    },
    "type-parameters": {
      "name": "meta.type.parameters.ts",
      "patterns": [{
        "include": "source.ts#comment"
      }, {
        "match": "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(extends|in|out|const)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",
        "name": "storage.modifier.ts"
      }, {
        "include": "source.ts#type"
      }, {
        "include": "source.ts#punctuation-comma"
      }, {
        "match": "(=)(?!>)",
        "name": "keyword.operator.assignment.ts"
      }]
    }
  },
  "scopeName": "source.svelte",
  "embeddedLangs": ["javascript", "typescript", "coffee", "stylus", "sass", "css", "scss", "less", "postcss", "pug", "markdown"]
});
var svelte = [...javascript, ...typescript, ...coffee, ...stylus, ...sass, ...css, ...scss, ...less, ...postcss, ...pug, ...markdown, lang];
export {
  svelte as default
};
//# sourceMappingURL=svelte-H4CIOIZV.js.map
