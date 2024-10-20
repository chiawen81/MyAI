import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  sql
} from "./chunk-6ZZBOZY5.js";
import {
  json
} from "./chunk-K7RVDJWM.js";
import {
  html
} from "./chunk-INHGZOUG.js";
import {
  xml
} from "./chunk-RYDGKIIS.js";
import {
  javascript
} from "./chunk-TZXFUJOZ.js";
import {
  css
} from "./chunk-2SZ5X6K7.js";

// node_modules/shiki/dist/langs/php.mjs
var lang = Object.freeze({
  "displayName": "PHP",
  "name": "php",
  "patterns": [{
    "include": "#attribute"
  }, {
    "include": "#comments"
  }, {
    "captures": {
      "1": {
        "name": "keyword.other.namespace.php"
      },
      "2": {
        "name": "entity.name.type.namespace.php",
        "patterns": [{
          "match": "\\\\",
          "name": "punctuation.separator.inheritance.php"
        }]
      }
    },
    "match": "(?i)(?:^|(?<=<\\?php))\\s*(namespace)\\s+([a-z0-9_\\x{7f}-\\x{10ffff}\\\\]+)(?=\\s*;)",
    "name": "meta.namespace.php"
  }, {
    "begin": "(?i)(?:^|(?<=<\\?php))\\s*(namespace)\\s+",
    "beginCaptures": {
      "1": {
        "name": "keyword.other.namespace.php"
      }
    },
    "end": "(?<=})|(?=\\?>)",
    "name": "meta.namespace.php",
    "patterns": [{
      "include": "#comments"
    }, {
      "captures": {
        "0": {
          "patterns": [{
            "match": "\\\\",
            "name": "punctuation.separator.inheritance.php"
          }]
        }
      },
      "match": "(?i)[a-z0-9_\\x{7f}-\\x{10ffff}\\\\]+",
      "name": "entity.name.type.namespace.php"
    }, {
      "begin": "{",
      "beginCaptures": {
        "0": {
          "name": "punctuation.definition.namespace.begin.bracket.curly.php"
        }
      },
      "end": "}|(?=\\?>)",
      "endCaptures": {
        "0": {
          "name": "punctuation.definition.namespace.end.bracket.curly.php"
        }
      },
      "patterns": [{
        "include": "$self"
      }]
    }, {
      "match": "[^\\s]+",
      "name": "invalid.illegal.identifier.php"
    }]
  }, {
    "match": "\\s+(?=use\\b)"
  }, {
    "begin": "(?i)\\buse\\b",
    "beginCaptures": {
      "0": {
        "name": "keyword.other.use.php"
      }
    },
    "end": "(?<=})|(?=;)|(?=\\?>)",
    "name": "meta.use.php",
    "patterns": [{
      "match": "\\b(const|function)\\b",
      "name": "storage.type.${1:/downcase}.php"
    }, {
      "begin": "{",
      "beginCaptures": {
        "0": {
          "name": "punctuation.definition.use.begin.bracket.curly.php"
        }
      },
      "end": "}",
      "endCaptures": {
        "0": {
          "name": "punctuation.definition.use.end.bracket.curly.php"
        }
      },
      "patterns": [{
        "include": "#scope-resolution"
      }, {
        "captures": {
          "1": {
            "name": "keyword.other.use-as.php"
          },
          "2": {
            "name": "storage.modifier.php"
          },
          "3": {
            "name": "entity.other.alias.php"
          }
        },
        "match": "(?xi)\n\\b(as)\n\\s+(final|abstract|public|private|protected|static)\n\\s+([a-z_\\x{7f}-\\x{10ffff}][a-z0-9_\\x{7f}-\\x{10ffff}]*)"
      }, {
        "captures": {
          "1": {
            "name": "keyword.other.use-as.php"
          },
          "2": {
            "patterns": [{
              "match": "^(?:final|abstract|public|private|protected|static)$",
              "name": "storage.modifier.php"
            }, {
              "match": ".+",
              "name": "entity.other.alias.php"
            }]
          }
        },
        "match": "(?xi)\n\\b(as)\n\\s+([a-z_\\x{7f}-\\x{10ffff}][a-z0-9_\\x{7f}-\\x{10ffff}]*)"
      }, {
        "captures": {
          "1": {
            "name": "keyword.other.use-insteadof.php"
          },
          "2": {
            "name": "support.class.php"
          }
        },
        "match": "(?i)\\b(insteadof)\\s+([a-z_\\x{7f}-\\x{10ffff}][a-z0-9_\\x{7f}-\\x{10ffff}]*)"
      }, {
        "match": ";",
        "name": "punctuation.terminator.expression.php"
      }, {
        "include": "#use-inner"
      }]
    }, {
      "include": "#use-inner"
    }]
  }, {
    "begin": "(?ix)\n\\b(trait)\\s+([a-z_\\x{7f}-\\x{10ffff}][a-z0-9_\\x{7f}-\\x{10ffff}]*)",
    "beginCaptures": {
      "1": {
        "name": "storage.type.trait.php"
      },
      "2": {
        "name": "entity.name.type.trait.php"
      }
    },
    "end": "}|(?=\\?>)",
    "endCaptures": {
      "0": {
        "name": "punctuation.definition.trait.end.bracket.curly.php"
      }
    },
    "name": "meta.trait.php",
    "patterns": [{
      "include": "#comments"
    }, {
      "begin": "{",
      "beginCaptures": {
        "0": {
          "name": "punctuation.definition.trait.begin.bracket.curly.php"
        }
      },
      "contentName": "meta.trait.body.php",
      "end": "(?=}|\\?>)",
      "patterns": [{
        "include": "$self"
      }]
    }]
  }, {
    "begin": "(?ix)\n\\b(interface)\\s+([a-z_\\x{7f}-\\x{10ffff}][a-z0-9_\\x{7f}-\\x{10ffff}]*)",
    "beginCaptures": {
      "1": {
        "name": "storage.type.interface.php"
      },
      "2": {
        "name": "entity.name.type.interface.php"
      }
    },
    "end": "}|(?=\\?>)",
    "endCaptures": {
      "0": {
        "name": "punctuation.definition.interface.end.bracket.curly.php"
      }
    },
    "name": "meta.interface.php",
    "patterns": [{
      "include": "#comments"
    }, {
      "include": "#interface-extends"
    }, {
      "begin": "{",
      "beginCaptures": {
        "0": {
          "name": "punctuation.definition.interface.begin.bracket.curly.php"
        }
      },
      "contentName": "meta.interface.body.php",
      "end": "(?=}|\\?>)",
      "patterns": [{
        "include": "#class-constant"
      }, {
        "include": "$self"
      }]
    }]
  }, {
    "begin": "(?ix)\n\\b(enum)\\s+([a-z_\\x{7f}-\\x{10ffff}][a-z0-9_\\x{7f}-\\x{10ffff}]*)\n(?: \\s* (:) \\s* (int | string) \\b )?",
    "beginCaptures": {
      "1": {
        "name": "storage.type.enum.php"
      },
      "2": {
        "name": "entity.name.type.enum.php"
      },
      "3": {
        "name": "keyword.operator.return-value.php"
      },
      "4": {
        "name": "keyword.other.type.php"
      }
    },
    "end": "}|(?=\\?>)",
    "endCaptures": {
      "0": {
        "name": "punctuation.definition.enum.end.bracket.curly.php"
      }
    },
    "name": "meta.enum.php",
    "patterns": [{
      "include": "#comments"
    }, {
      "include": "#class-implements"
    }, {
      "begin": "{",
      "beginCaptures": {
        "0": {
          "name": "punctuation.definition.enum.begin.bracket.curly.php"
        }
      },
      "contentName": "meta.enum.body.php",
      "end": "(?=}|\\?>)",
      "patterns": [{
        "captures": {
          "1": {
            "name": "storage.modifier.php"
          },
          "2": {
            "name": "constant.enum.php"
          }
        },
        "match": "(?i)\\b(case)\\s*([a-z_\\x{7f}-\\x{10ffff}][a-z0-9_\\x{7f}-\\x{10ffff}]*)"
      }, {
        "include": "#class-constant"
      }, {
        "include": "$self"
      }]
    }]
  }, {
    "begin": "(?ix)\n(?:\n\\b((?:(?:final|abstract|readonly)\\s+)*)(class)\\s+([a-z_\\x{7f}-\\x{10ffff}][a-z0-9_\\x{7f}-\\x{10ffff}]*)\n|\\b(new)\\b\\s*(\\#\\[.*\\])?\\s*(?:(readonly)\\s+)?\\b(class)\\b\n)",
    "beginCaptures": {
      "1": {
        "patterns": [{
          "match": "final|abstract",
          "name": "storage.modifier.${0:/downcase}.php"
        }, {
          "match": "readonly",
          "name": "storage.modifier.php"
        }]
      },
      "2": {
        "name": "storage.type.class.php"
      },
      "3": {
        "name": "entity.name.type.class.php"
      },
      "4": {
        "name": "keyword.other.new.php"
      },
      "5": {
        "patterns": [{
          "include": "#attribute"
        }]
      },
      "6": {
        "name": "storage.modifier.php"
      },
      "7": {
        "name": "storage.type.class.php"
      }
    },
    "end": "}|(?=\\?>)",
    "endCaptures": {
      "0": {
        "name": "punctuation.definition.class.end.bracket.curly.php"
      }
    },
    "name": "meta.class.php",
    "patterns": [{
      "begin": "(?<=class)\\s*(\\()",
      "beginCaptures": {
        "1": {
          "name": "punctuation.definition.arguments.begin.bracket.round.php"
        }
      },
      "end": "\\)|(?=\\?>)",
      "endCaptures": {
        "0": {
          "name": "punctuation.definition.arguments.end.bracket.round.php"
        }
      },
      "name": "meta.function-call.php",
      "patterns": [{
        "include": "#named-arguments"
      }, {
        "include": "$self"
      }]
    }, {
      "include": "#comments"
    }, {
      "include": "#class-extends"
    }, {
      "include": "#class-implements"
    }, {
      "begin": "{",
      "beginCaptures": {
        "0": {
          "name": "punctuation.definition.class.begin.bracket.curly.php"
        }
      },
      "contentName": "meta.class.body.php",
      "end": "(?=}|\\?>)",
      "patterns": [{
        "include": "#class-constant"
      }, {
        "include": "$self"
      }]
    }]
  }, {
    "include": "#match_statement"
  }, {
    "include": "#switch_statement"
  }, {
    "captures": {
      "1": {
        "name": "keyword.control.yield-from.php"
      }
    },
    "match": "\\s*\\b(yield\\s+from)\\b"
  }, {
    "captures": {
      "1": {
        "name": "keyword.control.${1:/downcase}.php"
      }
    },
    "match": "(?x)\n\\b(\nbreak|case|continue|declare|default|die|do|\nelse(if)?|end(declare|for(each)?|if|switch|while)|exit|\nfor(each)?|if|return|switch|use|while|yield\n)\\b"
  }, {
    "begin": "(?i)\\b((?:require|include)(?:_once)?)(\\s+|(?=\\())",
    "beginCaptures": {
      "1": {
        "name": "keyword.control.import.include.php"
      }
    },
    "end": "(?=\\s|;|$|\\?>)",
    "name": "meta.include.php",
    "patterns": [{
      "include": "$self"
    }]
  }, {
    "begin": "\\b(catch)\\s*(\\()",
    "beginCaptures": {
      "1": {
        "name": "keyword.control.exception.catch.php"
      },
      "2": {
        "name": "punctuation.definition.parameters.begin.bracket.round.php"
      }
    },
    "end": "\\)",
    "endCaptures": {
      "0": {
        "name": "punctuation.definition.parameters.end.bracket.round.php"
      }
    },
    "name": "meta.catch.php",
    "patterns": [{
      "captures": {
        "1": {
          "patterns": [{
            "match": "\\|",
            "name": "punctuation.separator.delimiter.php"
          }, {
            "begin": "(?i)(?=[\\\\a-z_\\x{7f}-\\x{10ffff}])",
            "end": "(?xi)\n( [a-z_\\x{7f}-\\x{10ffff}] [a-z0-9_\\x{7f}-\\x{10ffff}]* )\n(?![a-z0-9_\\x{7f}-\\x{10ffff}\\\\])",
            "endCaptures": {
              "1": {
                "name": "support.class.exception.php"
              }
            },
            "patterns": [{
              "include": "#namespace"
            }]
          }]
        },
        "2": {
          "name": "variable.other.php"
        },
        "3": {
          "name": "punctuation.definition.variable.php"
        }
      },
      "match": "(?xi)\n([a-z0-9_\\x{7f}-\\x{10ffff}\\\\]+ (?: \\s*\\|\\s* [a-z0-9_\\x{7f}-\\x{10ffff}\\\\]+)*)\n\\s*\n((\\$+)[a-z_\\x{7f}-\\x{10ffff}][a-z0-9_\\x{7f}-\\x{10ffff}]*)?"
    }]
  }, {
    "match": "\\b(catch|try|throw|exception|finally)\\b",
    "name": "keyword.control.exception.php"
  }, {
    "begin": "(?i)\\b(function)\\s*(?=&?\\s*\\()",
    "beginCaptures": {
      "1": {
        "name": "storage.type.function.php"
      }
    },
    "end": "(?=\\s*{)",
    "name": "meta.function.closure.php",
    "patterns": [{
      "include": "#comments"
    }, {
      "begin": "(&)?\\s*(\\()",
      "beginCaptures": {
        "1": {
          "name": "storage.modifier.reference.php"
        },
        "2": {
          "name": "punctuation.definition.parameters.begin.bracket.round.php"
        }
      },
      "contentName": "meta.function.parameters.php",
      "end": "\\)",
      "endCaptures": {
        "0": {
          "name": "punctuation.definition.parameters.end.bracket.round.php"
        }
      },
      "patterns": [{
        "include": "#function-parameters"
      }]
    }, {
      "begin": "(?i)(use)\\s*(\\()",
      "beginCaptures": {
        "1": {
          "name": "keyword.other.function.use.php"
        },
        "2": {
          "name": "punctuation.definition.parameters.begin.bracket.round.php"
        }
      },
      "end": "\\)",
      "endCaptures": {
        "0": {
          "name": "punctuation.definition.parameters.end.bracket.round.php"
        }
      },
      "name": "meta.function.closure.use.php",
      "patterns": [{
        "match": ",",
        "name": "punctuation.separator.delimiter.php"
      }, {
        "captures": {
          "1": {
            "name": "variable.other.php"
          },
          "2": {
            "name": "storage.modifier.reference.php"
          },
          "3": {
            "name": "punctuation.definition.variable.php"
          }
        },
        "match": "(?i)((?:(&)\\s*)?(\\$+)[a-z_\\x{7f}-\\x{10ffff}][a-z0-9_\\x{7f}-\\x{10ffff}]*)\\s*(?=,|\\))"
      }]
    }, {
      "captures": {
        "1": {
          "name": "keyword.operator.return-value.php"
        },
        "2": {
          "patterns": [{
            "include": "#php-types"
          }]
        }
      },
      "match": "(?xi)\n(:)\\s*\n(\n\n(?:\\?\\s*)? [a-z0-9_\\x{7f}-\\x{10ffff}\\\\]+ |\n\n(?: [a-z0-9_\\x{7f}-\\x{10ffff}\\\\]+ | \\(\\s* [a-z0-9_\\x{7f}-\\x{10ffff}\\\\]+(?:\\s*&\\s*[a-z0-9_\\x{7f}-\\x{10ffff}\\\\]+)+ \\s*\\) )\n(?: \\s*[|&]\\s*\n(?: [a-z0-9_\\x{7f}-\\x{10ffff}\\\\]+ | \\(\\s* [a-z0-9_\\x{7f}-\\x{10ffff}\\\\]+(?:\\s*&\\s*[a-z0-9_\\x{7f}-\\x{10ffff}\\\\]+)+ \\s*\\) )\n)+\n)\n(?=\\s*(?:{|/[/*]|\\#|$))"
    }]
  }, {
    "begin": "(?i)\\b(fn)\\s*(?=&?\\s*\\()",
    "beginCaptures": {
      "1": {
        "name": "storage.type.function.php"
      }
    },
    "end": "=>",
    "endCaptures": {
      "0": {
        "name": "punctuation.definition.arrow.php"
      }
    },
    "name": "meta.function.closure.php",
    "patterns": [{
      "begin": "(?:(&)\\s*)?(\\()",
      "beginCaptures": {
        "1": {
          "name": "storage.modifier.reference.php"
        },
        "2": {
          "name": "punctuation.definition.parameters.begin.bracket.round.php"
        }
      },
      "contentName": "meta.function.parameters.php",
      "end": "\\)",
      "endCaptures": {
        "0": {
          "name": "punctuation.definition.parameters.end.bracket.round.php"
        }
      },
      "patterns": [{
        "include": "#function-parameters"
      }]
    }, {
      "captures": {
        "1": {
          "name": "keyword.operator.return-value.php"
        },
        "2": {
          "patterns": [{
            "include": "#php-types"
          }]
        }
      },
      "match": "(?xi)\n(:)\\s*\n(\n\n(?:\\?\\s*)? [a-z0-9_\\x{7f}-\\x{10ffff}\\\\]+ |\n\n(?: [a-z0-9_\\x{7f}-\\x{10ffff}\\\\]+ | \\(\\s* [a-z0-9_\\x{7f}-\\x{10ffff}\\\\]+(?:\\s*&\\s*[a-z0-9_\\x{7f}-\\x{10ffff}\\\\]+)+ \\s*\\) )\n(?: \\s*[|&]\\s*\n(?: [a-z0-9_\\x{7f}-\\x{10ffff}\\\\]+ | \\(\\s* [a-z0-9_\\x{7f}-\\x{10ffff}\\\\]+(?:\\s*&\\s*[a-z0-9_\\x{7f}-\\x{10ffff}\\\\]+)+ \\s*\\) )\n)+\n)\n(?=\\s*(?:=>|/[/*]|\\#|$))"
    }]
  }, {
    "begin": "(?x)\n((?:(?:final|abstract|public|private|protected)\\s+)*)\n(function)\\s+(__construct)\n\\s*(\\()",
    "beginCaptures": {
      "1": {
        "patterns": [{
          "match": "final|abstract|public|private|protected",
          "name": "storage.modifier.php"
        }]
      },
      "2": {
        "name": "storage.type.function.php"
      },
      "3": {
        "name": "support.function.constructor.php"
      },
      "4": {
        "name": "punctuation.definition.parameters.begin.bracket.round.php"
      }
    },
    "contentName": "meta.function.parameters.php",
    "end": "(?xi)\n(\\)) \\s* ( : \\s*\n(?:\\?\\s*)? (?!\\s) [a-z0-9_\\x{7f}-\\x{10ffff}\\\\\\s\\|&()]+ (?<!\\s)\n)?\n(?=\\s*(?:{|/[/*]|\\#|$|;))",
    "endCaptures": {
      "1": {
        "name": "punctuation.definition.parameters.end.bracket.round.php"
      },
      "2": {
        "name": "invalid.illegal.return-type.php"
      }
    },
    "name": "meta.function.php",
    "patterns": [{
      "include": "#comments"
    }, {
      "match": ",",
      "name": "punctuation.separator.delimiter.php"
    }, {
      "begin": "(?xi)\n((?:(?:public|private|protected|readonly)(?:\\s+|(?=\\?)))++)\n(?: (\n\n(?:\\?\\s*)? [a-z0-9_\\x{7f}-\\x{10ffff}\\\\]+ |\n\n(?: [a-z0-9_\\x{7f}-\\x{10ffff}\\\\]+ | \\(\\s* [a-z0-9_\\x{7f}-\\x{10ffff}\\\\]+(?:\\s*&\\s*[a-z0-9_\\x{7f}-\\x{10ffff}\\\\]+)+ \\s*\\) )\n(?: \\s*[|&]\\s*\n(?: [a-z0-9_\\x{7f}-\\x{10ffff}\\\\]+ | \\(\\s* [a-z0-9_\\x{7f}-\\x{10ffff}\\\\]+(?:\\s*&\\s*[a-z0-9_\\x{7f}-\\x{10ffff}\\\\]+)+ \\s*\\) )\n)+\n) \\s+ )?\n((?:(&)\\s*)?(\\$)[a-z_\\x{7f}-\\x{10ffff}][a-z0-9_\\x{7f}-\\x{10ffff}]*)",
      "beginCaptures": {
        "1": {
          "patterns": [{
            "match": "public|private|protected|readonly",
            "name": "storage.modifier.php"
          }]
        },
        "2": {
          "patterns": [{
            "include": "#php-types"
          }]
        },
        "3": {
          "name": "variable.other.php"
        },
        "4": {
          "name": "storage.modifier.reference.php"
        },
        "5": {
          "name": "punctuation.definition.variable.php"
        }
      },
      "end": "(?=\\s*(?:,|\\)|/[/*]|\\#))",
      "name": "meta.function.parameter.promoted-property.php",
      "patterns": [{
        "begin": "=",
        "beginCaptures": {
          "0": {
            "name": "keyword.operator.assignment.php"
          }
        },
        "end": "(?=\\s*(?:,|\\)|/[/*]|\\#))",
        "patterns": [{
          "include": "#parameter-default-types"
        }]
      }]
    }, {
      "include": "#function-parameters"
    }]
  }, {
    "begin": "(?x)\n((?:(?:final|abstract|public|private|protected|static)\\s+)*)\n(function)\\s+\n(?i:\n(__(?:call|construct|debugInfo|destruct|get|set|isset|unset|toString|\nclone|set_state|sleep|wakeup|autoload|invoke|callStatic|serialize|unserialize))\n|(?:(&)?\\s*([a-zA-Z_\\x{7f}-\\x{10ffff}][a-zA-Z0-9_\\x{7f}-\\x{10ffff}]*))\n)\n\\s*(\\()",
    "beginCaptures": {
      "1": {
        "patterns": [{
          "match": "final|abstract|public|private|protected|static",
          "name": "storage.modifier.php"
        }]
      },
      "2": {
        "name": "storage.type.function.php"
      },
      "3": {
        "name": "support.function.magic.php"
      },
      "4": {
        "name": "storage.modifier.reference.php"
      },
      "5": {
        "name": "entity.name.function.php"
      },
      "6": {
        "name": "punctuation.definition.parameters.begin.bracket.round.php"
      }
    },
    "contentName": "meta.function.parameters.php",
    "end": "(?xi)\n(\\)) (?: \\s* (:) \\s* (\n\n(?:\\?\\s*)? [a-z0-9_\\x{7f}-\\x{10ffff}\\\\]+ |\n\n(?: [a-z0-9_\\x{7f}-\\x{10ffff}\\\\]+ | \\(\\s* [a-z0-9_\\x{7f}-\\x{10ffff}\\\\]+(?:\\s*&\\s*[a-z0-9_\\x{7f}-\\x{10ffff}\\\\]+)+ \\s*\\) )\n(?: \\s*[|&]\\s*\n(?: [a-z0-9_\\x{7f}-\\x{10ffff}\\\\]+ | \\(\\s* [a-z0-9_\\x{7f}-\\x{10ffff}\\\\]+(?:\\s*&\\s*[a-z0-9_\\x{7f}-\\x{10ffff}\\\\]+)+ \\s*\\) )\n)+\n) )?\n(?=\\s*(?:{|/[/*]|\\#|$|;))",
    "endCaptures": {
      "1": {
        "name": "punctuation.definition.parameters.end.bracket.round.php"
      },
      "2": {
        "name": "keyword.operator.return-value.php"
      },
      "3": {
        "patterns": [{
          "match": "\\b(static)\\b",
          "name": "storage.type.php"
        }, {
          "match": "\\b(never)\\b",
          "name": "keyword.other.type.never.php"
        }, {
          "include": "#php-types"
        }]
      }
    },
    "name": "meta.function.php",
    "patterns": [{
      "include": "#function-parameters"
    }]
  }, {
    "captures": {
      "1": {
        "patterns": [{
          "match": "public|private|protected|static|readonly",
          "name": "storage.modifier.php"
        }]
      },
      "2": {
        "patterns": [{
          "include": "#php-types"
        }]
      },
      "3": {
        "name": "variable.other.php"
      },
      "4": {
        "name": "punctuation.definition.variable.php"
      }
    },
    "match": "(?xi)\n((?:(?:public|private|protected|static|readonly)(?:\\s+|(?=\\?)))++)\n(\n\n(?:\\?\\s*)? [a-z0-9_\\x{7f}-\\x{10ffff}\\\\]+ |\n\n(?: [a-z0-9_\\x{7f}-\\x{10ffff}\\\\]+ | \\(\\s* [a-z0-9_\\x{7f}-\\x{10ffff}\\\\]+(?:\\s*&\\s*[a-z0-9_\\x{7f}-\\x{10ffff}\\\\]+)+ \\s*\\) )\n(?: \\s*[|&]\\s*\n(?: [a-z0-9_\\x{7f}-\\x{10ffff}\\\\]+ | \\(\\s* [a-z0-9_\\x{7f}-\\x{10ffff}\\\\]+(?:\\s*&\\s*[a-z0-9_\\x{7f}-\\x{10ffff}\\\\]+)+ \\s*\\) )\n)+\n)?\n\\s+ ((\\$)[a-z_\\x{7f}-\\x{10ffff}][a-z0-9_\\x{7f}-\\x{10ffff}]*)"
  }, {
    "include": "#invoke-call"
  }, {
    "include": "#scope-resolution"
  }, {
    "include": "#variables"
  }, {
    "include": "#strings"
  }, {
    "captures": {
      "1": {
        "name": "support.function.construct.php"
      },
      "2": {
        "name": "punctuation.definition.array.begin.bracket.round.php"
      },
      "3": {
        "name": "punctuation.definition.array.end.bracket.round.php"
      }
    },
    "match": "(array)(\\()(\\))",
    "name": "meta.array.empty.php"
  }, {
    "begin": "(array)\\s*(\\()",
    "beginCaptures": {
      "1": {
        "name": "support.function.construct.php"
      },
      "2": {
        "name": "punctuation.definition.array.begin.bracket.round.php"
      }
    },
    "end": "\\)|(?=\\?>)",
    "endCaptures": {
      "0": {
        "name": "punctuation.definition.array.end.bracket.round.php"
      }
    },
    "name": "meta.array.php",
    "patterns": [{
      "include": "$self"
    }]
  }, {
    "captures": {
      "1": {
        "name": "punctuation.definition.storage-type.begin.bracket.round.php"
      },
      "2": {
        "name": "storage.type.php"
      },
      "3": {
        "name": "punctuation.definition.storage-type.end.bracket.round.php"
      }
    },
    "match": "(?i)(\\()\\s*(array|real|double|float|int(?:eger)?|bool(?:ean)?|string|object|binary|unset)\\s*(\\))"
  }, {
    "match": "(?i)\\b(array|real|double|float|int(eger)?|bool(ean)?|string|class|var|function|interface|trait|parent|self|object|mixed)\\b",
    "name": "storage.type.php"
  }, {
    "match": "(?i)\\b(global|abstract|const|final|private|protected|public|static)\\b",
    "name": "storage.modifier.php"
  }, {
    "include": "#object"
  }, {
    "match": ";",
    "name": "punctuation.terminator.expression.php"
  }, {
    "match": ":",
    "name": "punctuation.terminator.statement.php"
  }, {
    "include": "#heredoc"
  }, {
    "include": "#numbers"
  }, {
    "match": "(?i)\\bclone\\b",
    "name": "keyword.other.clone.php"
  }, {
    "match": "\\.\\.\\.",
    "name": "keyword.operator.spread.php"
  }, {
    "match": "\\.=?",
    "name": "keyword.operator.string.php"
  }, {
    "match": "=>",
    "name": "keyword.operator.key.php"
  }, {
    "captures": {
      "1": {
        "name": "keyword.operator.assignment.php"
      },
      "2": {
        "name": "storage.modifier.reference.php"
      },
      "3": {
        "name": "storage.modifier.reference.php"
      }
    },
    "match": "(?i)(\\=)(&)|(&)(?=[$a-z_])"
  }, {
    "match": "@",
    "name": "keyword.operator.error-control.php"
  }, {
    "match": "===|==|!==|!=|<>",
    "name": "keyword.operator.comparison.php"
  }, {
    "match": "=|\\+=|\\-=|\\*\\*?=|/=|%=|&=|\\|=|\\^=|<<=|>>=|\\?\\?=",
    "name": "keyword.operator.assignment.php"
  }, {
    "match": "<=>|<=|>=|<|>",
    "name": "keyword.operator.comparison.php"
  }, {
    "match": "\\-\\-|\\+\\+",
    "name": "keyword.operator.increment-decrement.php"
  }, {
    "match": "\\-|\\+|\\*\\*?|/|%",
    "name": "keyword.operator.arithmetic.php"
  }, {
    "match": "(?i)(!|&&|\\|\\|)|\\b(and|or|xor|as)\\b",
    "name": "keyword.operator.logical.php"
  }, {
    "include": "#function-call"
  }, {
    "match": "<<|>>|~|\\^|&|\\|",
    "name": "keyword.operator.bitwise.php"
  }, {
    "begin": "(?i)\\b(instanceof)\\s+(?=[\\\\$a-z_])",
    "beginCaptures": {
      "1": {
        "name": "keyword.operator.type.php"
      }
    },
    "end": "(?i)(?=[^\\\\$a-z0-9_\\x{7f}-\\x{10ffff}])",
    "patterns": [{
      "include": "#class-name"
    }, {
      "include": "#variable-name"
    }]
  }, {
    "include": "#instantiation"
  }, {
    "captures": {
      "1": {
        "name": "keyword.control.goto.php"
      },
      "2": {
        "name": "support.other.php"
      }
    },
    "match": "(?i)(goto)\\s+([a-z_\\x{7f}-\\x{10ffff}][a-z0-9_\\x{7f}-\\x{10ffff}]*)"
  }, {
    "captures": {
      "1": {
        "name": "entity.name.goto-label.php"
      }
    },
    "match": "(?i)^\\s*([a-z_\\x{7f}-\\x{10ffff}][a-z0-9_\\x{7f}-\\x{10ffff}]*(?<!default))\\s*:(?!:)"
  }, {
    "include": "#string-backtick"
  }, {
    "include": "#ternary_shorthand"
  }, {
    "include": "#null_coalescing"
  }, {
    "include": "#ternary_expression"
  }, {
    "begin": "{",
    "beginCaptures": {
      "0": {
        "name": "punctuation.definition.begin.bracket.curly.php"
      }
    },
    "end": "}|(?=\\?>)",
    "endCaptures": {
      "0": {
        "name": "punctuation.definition.end.bracket.curly.php"
      }
    },
    "patterns": [{
      "include": "$self"
    }]
  }, {
    "begin": "\\[",
    "beginCaptures": {
      "0": {
        "name": "punctuation.section.array.begin.php"
      }
    },
    "end": "\\]|(?=\\?>)",
    "endCaptures": {
      "0": {
        "name": "punctuation.section.array.end.php"
      }
    },
    "patterns": [{
      "include": "$self"
    }]
  }, {
    "begin": "\\(",
    "beginCaptures": {
      "0": {
        "name": "punctuation.definition.begin.bracket.round.php"
      }
    },
    "end": "\\)|(?=\\?>)",
    "endCaptures": {
      "0": {
        "name": "punctuation.definition.end.bracket.round.php"
      }
    },
    "patterns": [{
      "include": "$self"
    }]
  }, {
    "include": "#constants"
  }, {
    "match": ",",
    "name": "punctuation.separator.delimiter.php"
  }],
  "repository": {
    "attribute": {
      "begin": "\\#\\[",
      "end": "\\]",
      "name": "meta.attribute.php",
      "patterns": [{
        "match": ",",
        "name": "punctuation.separator.delimiter.php"
      }, {
        "begin": "([a-zA-Z0-9_\\x{7f}-\\x{10ffff}\\\\]+)\\s*(\\()",
        "beginCaptures": {
          "1": {
            "patterns": [{
              "include": "#attribute-name"
            }]
          },
          "2": {
            "name": "punctuation.definition.arguments.begin.bracket.round.php"
          }
        },
        "end": "\\)",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.arguments.end.bracket.round.php"
          }
        },
        "patterns": [{
          "include": "#named-arguments"
        }, {
          "include": "$self"
        }]
      }, {
        "include": "#attribute-name"
      }]
    },
    "attribute-name": {
      "patterns": [{
        "begin": "(?i)(?=\\\\?[a-z_\\x{7f}-\\x{10ffff}][a-z0-9_\\x{7f}-\\x{10ffff}]*\\\\)",
        "end": "(?xi)\n( [a-z_\\x{7f}-\\x{10ffff}] [a-z0-9_\\x{7f}-\\x{10ffff}]* )?\n(?![a-z0-9_\\x{7f}-\\x{10ffff}\\\\])",
        "endCaptures": {
          "1": {
            "name": "support.attribute.php"
          }
        },
        "patterns": [{
          "include": "#namespace"
        }]
      }, {
        "captures": {
          "1": {
            "name": "punctuation.separator.inheritance.php"
          }
        },
        "match": "(?xi)\n(\\\\)?\\b(Attribute|SensitiveParameter|AllowDynamicProperties|ReturnTypeWillChange)\\b",
        "name": "support.attribute.builtin.php"
      }, {
        "begin": "(?i)(?=[\\\\a-z_\\x{7f}-\\x{10ffff}])",
        "end": "(?xi)\n( [a-z_\\x{7f}-\\x{10ffff}] [a-z0-9_\\x{7f}-\\x{10ffff}]* )?\n(?![a-z0-9_\\x{7f}-\\x{10ffff}\\\\])",
        "endCaptures": {
          "1": {
            "name": "support.attribute.php"
          }
        },
        "patterns": [{
          "include": "#namespace"
        }]
      }]
    },
    "class-builtin": {
      "patterns": [{
        "captures": {
          "1": {
            "name": "punctuation.separator.inheritance.php"
          }
        },
        "match": "(?xi)\n(\\\\)?\\b\n(Attribute|(APC|Append)Iterator|Array(Access|Iterator|Object)\n|Bad(Function|Method)CallException\n|(Caching|CallbackFilter)Iterator|Collator|Collectable|Cond|Countable|CURLFile\n|Date(Interval|Period|Time(Interface|Immutable|Zone)?)?|Directory(Iterator)?|DomainException\n|DOM(Attr|CdataSection|CharacterData|Comment|Document(Fragment)?|Element|EntityReference\n|Implementation|NamedNodeMap|Node(list)?|ProcessingInstruction|Text|XPath)\n|(Error)?Exception|EmptyIterator\n|finfo\n|Ev(Check|Child|Embed|Fork|Idle|Io|Loop|Periodic|Prepare|Signal|Stat|Timer|Watcher)?\n|Event(Base|Buffer(Event)?|SslContext|Http(Request|Connection)?|Config|DnsBase|Util|Listener)?\n|FANNConnection|(Filter|Filesystem)Iterator\n|Gender\\\\Gender|GlobIterator|Gmagick(Draw|Pixel)?\n|Haru(Annotation|Destination|Doc|Encoder|Font|Image|Outline|Page)\n|Http((Inflate|Deflate)?Stream|Message|Request(Pool)?|Response|QueryString)\n|HRTime\\\\(PerformanceCounter|StopWatch)\n|Intl(Calendar|((CodePoint|RuleBased)?Break|Parts)?Iterator|DateFormatter|TimeZone)\n|Imagick(Draw|Pixel(Iterator)?)?\n|InfiniteIterator|InvalidArgumentException|Iterator(Aggregate|Iterator)?\n|JsonSerializable\n|KTaglib_(MPEG_(File|AudioProperties)|Tag|ID3v2_(Tag|(AttachedPicture)?Frame))\n|Lapack|(Length|Locale|Logic)Exception|LimitIterator|Lua(Closure)?\n|Mongo(BinData|Client|Code|Collection|CommandCursor|Cursor(Exception)?|Date|DB(Ref)?|DeleteBatch\n|Grid(FS(Cursor|File)?)|Id|InsertBatch|Int(32|64)|Log|Pool|Regex|ResultException|Timestamp\n|UpdateBatch|Write(Batch|ConcernException))?\n|Memcache(d)?|MessageFormatter|MultipleIterator|Mutex\n|mysqli(_(driver|stmt|warning|result))?\n|MysqlndUh(Connection|PreparedStatement)\n|NoRewindIterator|Normalizer|NumberFormatter\n|OCI-(Collection|Lob)|OuterIterator|(OutOf(Bounds|Range)|Overflow)Exception\n|ParentIterator|PDO(Statement)?|Phar(Data|FileInfo)?|php_user_filter|Pool\n|QuickHash(Int(Set|StringHash)|StringIntHash)\n|Recursive(Array|Caching|Directory|Fallback|Filter|Iterator|Regex|Tree)?Iterator\n|Reflection(Class|Function(Abstract)?|Method|Object|Parameter|Property|(Zend)?Extension)?\n|RangeException|Reflector|RegexIterator|ResourceBundle|RuntimeException|RRD(Creator|Graph|Updater)\n|SAM(Connection|Message)|SCA(_(SoapProxy|LocalProxy))?\n|SDO_(DAS_(ChangeSummary|Data(Factory|Object)|Relational|Setting|XML(_Document)?)\n|Data(Factory|Object)|Exception|List|Model_(Property|ReflectionDataObject|Type)|Sequence)\n|SeekableIterator|Serializable|SessionHandler(Interface)?|SimpleXML(Iterator|Element)|SNMP\n|Soap(Client|Fault|Header|Param|Server|Var)\n|SphinxClient|Spoofchecker\n|Spl(DoublyLinkedList|Enum|File(Info|Object)|FixedArray|(Max|Min)?Heap|Observer|ObjectStorage\n|(Priority)?Queue|Stack|Subject|Type|TempFileObject)\n|SQLite(3(Result|Stmt)?|Database|Result|Unbuffered)\n|stdClass|streamWrapper|SVM(Model)?|Swish(Result(s)?|Search)?|Sync(Event|Mutex|ReaderWriter|Semaphore)\n|Thread(ed)?|tidy(Node)?|TokyoTyrant(Table|Iterator|Query)?|Transliterator|Traversable\n|UConverter|(Underflow|UnexpectedValue)Exception\n|V8Js(Exception)?|Varnish(Admin|Log|Stat)\n|Worker|Weak(Map|Ref)\n|XML(Diff\\\\(Base|DOM|File|Memory)|Reader|Writer)|XsltProcessor\n|Yaf_(Route_(Interface|Map|Regex|Rewrite|Simple|Supervar)\n|Action_Abstract|Application|Config_(Simple|Ini|Abstract)|Controller_Abstract\n|Dispatcher|Exception|Loader|Plugin_Abstract|Registry|Request_(Abstract|Simple|Http)\n|Response_Abstract|Router|Session|View_(Simple|Interface))\n|Yar_(Client(_Exception)?|Concurrent_Client|Server(_Exception)?)\n|ZipArchive|ZMQ(Context|Device|Poll|Socket)?)\n\\b",
        "name": "support.class.builtin.php"
      }]
    },
    "class-constant": {
      "patterns": [{
        "captures": {
          "1": {
            "name": "storage.modifier.php"
          },
          "2": {
            "name": "constant.other.php"
          }
        },
        "match": "(?i)\\b(const)\\s*([a-z_\\x{7f}-\\x{10ffff}][a-z0-9_\\x{7f}-\\x{10ffff}]*)"
      }]
    },
    "class-extends": {
      "patterns": [{
        "begin": "(?i)(extends)\\s+",
        "beginCaptures": {
          "1": {
            "name": "storage.modifier.extends.php"
          }
        },
        "end": "(?i)(?=[^A-Za-z0-9_\\x{7f}-\\x{10ffff}\\\\])",
        "patterns": [{
          "include": "#comments"
        }, {
          "include": "#inheritance-single"
        }]
      }]
    },
    "class-implements": {
      "patterns": [{
        "begin": "(?i)(implements)\\s+",
        "beginCaptures": {
          "1": {
            "name": "storage.modifier.implements.php"
          }
        },
        "end": "(?i)(?={)",
        "patterns": [{
          "include": "#comments"
        }, {
          "match": ",",
          "name": "punctuation.separator.classes.php"
        }, {
          "include": "#inheritance-single"
        }]
      }]
    },
    "class-name": {
      "patterns": [{
        "begin": "(?i)(?=\\\\?[a-z_\\x{7f}-\\x{10ffff}][a-z0-9_\\x{7f}-\\x{10ffff}]*\\\\)",
        "end": "(?xi)\n( [a-z_\\x{7f}-\\x{10ffff}] [a-z0-9_\\x{7f}-\\x{10ffff}]* )?\n(?![a-z0-9_\\x{7f}-\\x{10ffff}\\\\])",
        "endCaptures": {
          "1": {
            "name": "support.class.php"
          }
        },
        "patterns": [{
          "include": "#namespace"
        }]
      }, {
        "include": "#class-builtin"
      }, {
        "begin": "(?i)(?=[\\\\a-z_\\x{7f}-\\x{10ffff}])",
        "end": "(?xi)\n( [a-z_\\x{7f}-\\x{10ffff}] [a-z0-9_\\x{7f}-\\x{10ffff}]* )?\n(?![a-z0-9_\\x{7f}-\\x{10ffff}\\\\])",
        "endCaptures": {
          "1": {
            "name": "support.class.php"
          }
        },
        "patterns": [{
          "include": "#namespace"
        }]
      }]
    },
    "comments": {
      "patterns": [{
        "begin": "/\\*\\*(?=\\s)",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.comment.php"
          }
        },
        "end": "\\*/",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.comment.php"
          }
        },
        "name": "comment.block.documentation.phpdoc.php",
        "patterns": [{
          "include": "#php_doc"
        }]
      }, {
        "begin": "/\\*",
        "captures": {
          "0": {
            "name": "punctuation.definition.comment.php"
          }
        },
        "end": "\\*/",
        "name": "comment.block.php"
      }, {
        "begin": "(^\\s+)?(?=//)",
        "beginCaptures": {
          "1": {
            "name": "punctuation.whitespace.comment.leading.php"
          }
        },
        "end": "(?!\\G)",
        "patterns": [{
          "begin": "//",
          "beginCaptures": {
            "0": {
              "name": "punctuation.definition.comment.php"
            }
          },
          "end": "\\n|(?=\\?>)",
          "name": "comment.line.double-slash.php"
        }]
      }, {
        "begin": "(^\\s+)?(?=#)(?!#\\[)",
        "beginCaptures": {
          "1": {
            "name": "punctuation.whitespace.comment.leading.php"
          }
        },
        "end": "(?!\\G)",
        "patterns": [{
          "begin": "#",
          "beginCaptures": {
            "0": {
              "name": "punctuation.definition.comment.php"
            }
          },
          "end": "\\n|(?=\\?>)",
          "name": "comment.line.number-sign.php"
        }]
      }]
    },
    "constants": {
      "patterns": [{
        "match": "(?i)\\b(TRUE|FALSE|NULL|__(FILE|DIR|FUNCTION|CLASS|METHOD|LINE|NAMESPACE)__|ON|OFF|YES|NO|NL|BR|TAB)\\b",
        "name": "constant.language.php"
      }, {
        "captures": {
          "1": {
            "name": "punctuation.separator.inheritance.php"
          }
        },
        "match": "(?x)\n(\\\\)?\\b\n(DEFAULT_INCLUDE_PATH\n|EAR_(INSTALL|EXTENSION)_DIR\n|E_(ALL|COMPILE_(ERROR|WARNING)|CORE_(ERROR|WARNING)|DEPRECATED|ERROR|NOTICE\n|PARSE|RECOVERABLE_ERROR|STRICT|USER_(DEPRECATED|ERROR|NOTICE|WARNING)|WARNING)\n|PHP_(ROUND_HALF_(DOWN|EVEN|ODD|UP)|(MAJOR|MINOR|RELEASE)_VERSION|MAXPATHLEN\n|BINDIR|SHLIB_SUFFIX|SYSCONFDIR|SAPI|CONFIG_FILE_(PATH|SCAN_DIR)\n|INT_(MAX|SIZE)|ZTS|OS|OUTPUT_HANDLER_(START|CONT|END)|DEBUG|DATADIR\n|URL_(SCHEME|HOST|USER|PORT|PASS|PATH|QUERY|FRAGMENT)|PREFIX\n|EXTRA_VERSION|EXTENSION_DIR|EOL|VERSION(_ID)?\n|WINDOWS_(NT_(SERVER|DOMAIN_CONTROLLER|WORKSTATION)\n|VERSION_(MAJOR|MINOR)|BUILD|SUITEMASK|SP_(MAJOR|MINOR)\n|PRODUCTTYPE|PLATFORM)\n|LIBDIR|LOCALSTATEDIR)\n|STD(ERR|IN|OUT)|ZEND_(DEBUG_BUILD|THREAD_SAFE))\n\\b",
        "name": "support.constant.core.php"
      }, {
        "captures": {
          "1": {
            "name": "punctuation.separator.inheritance.php"
          }
        },
        "match": "(?x)\n(\\\\)?\\b\n(__COMPILER_HALT_OFFSET__|AB(MON_(1|2|3|4|5|6|7|8|9|10|11|12)|DAY[1-7])\n|AM_STR|ASSERT_(ACTIVE|BAIL|CALLBACK_QUIET_EVAL|WARNING)|ALT_DIGITS\n|CASE_(UPPER|LOWER)|CHAR_MAX|CONNECTION_(ABORTED|NORMAL|TIMEOUT)|CODESET|COUNT_(NORMAL|RECURSIVE)\n|CREDITS_(ALL|DOCS|FULLPAGE|GENERAL|GROUP|MODULES|QA|SAPI)\n|CRYPT_(BLOWFISH|EXT_DES|MD5|SHA(256|512)|SALT_LENGTH|STD_DES)|CURRENCY_SYMBOL\n|D_(T_)?FMT|DATE_(ATOM|COOKIE|ISO8601|RFC(822|850|1036|1123|2822|3339)|RSS|W3C)\n|DAY_[1-7]|DECIMAL_POINT|DIRECTORY_SEPARATOR\n|ENT_(COMPAT|IGNORE|(NO)?QUOTES)|EXTR_(IF_EXISTS|OVERWRITE|PREFIX_(ALL|IF_EXISTS|INVALID|SAME)|REFS|SKIP)\n|ERA(_(D_(T_)?FMT)|T_FMT|YEAR)?|FRAC_DIGITS|GROUPING|HASH_HMAC|HTML_(ENTITIES|SPECIALCHARS)\n|INF|INFO_(ALL|CREDITS|CONFIGURATION|ENVIRONMENT|GENERAL|LICENSEMODULES|VARIABLES)\n|INI_(ALL|CANNER_(NORMAL|RAW)|PERDIR|SYSTEM|USER)|INT_(CURR_SYMBOL|FRAC_DIGITS)\n|LC_(ALL|COLLATE|CTYPE|MESSAGES|MONETARY|NUMERIC|TIME)|LOCK_(EX|NB|SH|UN)\n|LOG_(ALERT|AUTH(PRIV)?|CRIT|CRON|CONS|DAEMON|DEBUG|EMERG|ERR|INFO|LOCAL[1-7]|LPR|KERN|MAIL\n|NEWS|NODELAY|NOTICE|NOWAIT|ODELAY|PID|PERROR|WARNING|SYSLOG|UCP|USER)\n|M_(1_PI|SQRT(1_2|2|3|PI)|2_(SQRT)?PI|PI(_(2|4))?|E(ULER)?|LN(10|2|PI)|LOG(10|2)E)\n|MON_(1|2|3|4|5|6|7|8|9|10|11|12|DECIMAL_POINT|GROUPING|THOUSANDS_SEP)\n|N_(CS_PRECEDES|SEP_BY_SPACE|SIGN_POSN)|NAN|NEGATIVE_SIGN|NO(EXPR|STR)\n|P_(CS_PRECEDES|SEP_BY_SPACE|SIGN_POSN)|PM_STR|POSITIVE_SIGN\n|PATH(_SEPARATOR|INFO_(EXTENSION|(BASE|DIR|FILE)NAME))|RADIXCHAR\n|SEEK_(CUR|END|SET)|SORT_(ASC|DESC|LOCALE_STRING|REGULAR|STRING)|STR_PAD_(BOTH|LEFT|RIGHT)\n|T_FMT(_AMPM)?|THOUSEP|THOUSANDS_SEP\n|UPLOAD_ERR_(CANT_WRITE|EXTENSION|(FORM|INI)_SIZE|NO_(FILE|TMP_DIR)|OK|PARTIAL)\n|YES(EXPR|STR))\n\\b",
        "name": "support.constant.std.php"
      }, {
        "captures": {
          "1": {
            "name": "punctuation.separator.inheritance.php"
          }
        },
        "match": "(?x)\n(\\\\)?\\b\n(GLOB_(MARK|BRACE|NO(SORT|CHECK|ESCAPE)|ONLYDIR|ERR|AVAILABLE_FLAGS)\n|XML_(SAX_IMPL|(DTD|DOCUMENT(_(FRAG|TYPE))?|HTML_DOCUMENT|NOTATION|NAMESPACE_DECL|PI|COMMENT|DATA_SECTION|TEXT)_NODE\n|OPTION_(SKIP_(TAGSTART|WHITE)|CASE_FOLDING|TARGET_ENCODING)\n|ERROR_((BAD_CHAR|(ATTRIBUTE_EXTERNAL|BINARY|PARAM|RECURSIVE)_ENTITY)_REF|MISPLACED_XML_PI|SYNTAX|NONE\n|NO_(MEMORY|ELEMENTS)|TAG_MISMATCH|INCORRECT_ENCODING|INVALID_TOKEN|DUPLICATE_ATTRIBUTE\n|UNCLOSED_(CDATA_SECTION|TOKEN)|UNDEFINED_ENTITY|UNKNOWN_ENCODING|JUNK_AFTER_DOC_ELEMENT\n|PARTIAL_CHAR|EXTERNAL_ENTITY_HANDLING|ASYNC_ENTITY)\n|ENTITY_(((REF|DECL)_)?NODE)|ELEMENT(_DECL)?_NODE|LOCAL_NAMESPACE|ATTRIBUTE_(NMTOKEN(S)?|NOTATION|NODE)\n|CDATA|ID(REF(S)?)?|DECL_NODE|ENTITY|ENUMERATION)\n|MHASH_(RIPEMD(128|160|256|320)|GOST|MD(2|4|5)|SHA(1|224|256|384|512)|SNEFRU256|HAVAL(128|160|192|224|256)\n|CRC23(B)?|TIGER(128|160)?|WHIRLPOOL|ADLER32)\n|MYSQL_(BOTH|NUM|CLIENT_(SSL|COMPRESS|IGNORE_SPACE|INTERACTIVE|ASSOC))\n|MYSQLI_(REPORT_(STRICT|INDEX|OFF|ERROR|ALL)|REFRESH_(GRANT|MASTER|BACKUP_LOG|STATUS|SLAVE|HOSTS|THREADS|TABLES|LOG)\n|READ_DEFAULT_(FILE|GROUP)|(GROUP|MULTIPLE_KEY|BINARY|BLOB)_FLAG|BOTH\n|STMT_ATTR_(CURSOR_TYPE|UPDATE_MAX_LENGTH|PREFETCH_ROWS)|STORE_RESULT\n|SERVER_QUERY_(NO_((GOOD_)?INDEX_USED)|WAS_SLOW)|SET_(CHARSET_NAME|FLAG)\n|NO_(DEFAULT_VALUE_FLAG|DATA)|NOT_NULL_FLAG|NUM(_FLAG)?\n|CURSOR_TYPE_(READ_ONLY|SCROLLABLE|NO_CURSOR|FOR_UPDATE)\n|CLIENT_(SSL|NO_SCHEMA|COMPRESS|IGNORE_SPACE|INTERACTIVE|FOUND_ROWS)\n|TYPE_(GEOMETRY|((MEDIUM|LONG|TINY)_)?BLOB|BIT|SHORT|STRING|SET|YEAR|NULL|NEWDECIMAL|NEWDATE|CHAR\n|TIME(STAMP)?|TINY|INT24|INTERVAL|DOUBLE|DECIMAL|DATE(TIME)?|ENUM|VAR_STRING|FLOAT|LONG(LONG)?)\n|TIME_STAMP_FLAG|INIT_COMMAND|ZEROFILL_FLAG|ON_UPDATE_NOW_FLAG\n|OPT_(NET_((CMD|READ)_BUFFER_SIZE)|CONNECT_TIMEOUT|INT_AND_FLOAT_NATIVE|LOCAL_INFILE)\n|DEBUG_TRACE_ENABLED|DATA_TRUNCATED|USE_RESULT|(ENUM|(PART|PRI|UNIQUE)_KEY|UNSIGNED)_FLAG\n|ASSOC|ASYNC|AUTO_INCREMENT_FLAG)\n|MCRYPT_(RC(2|6)|RIJNDAEL_(128|192|256)|RAND|GOST|XTEA|MODE_(STREAM|NOFB|CBC|CFB|OFB|ECB)|MARS\n|BLOWFISH(_COMPAT)?|SERPENT|SKIPJACK|SAFER(64|128|PLUS)|CRYPT|CAST_(128|256)|TRIPLEDES|THREEWAY\n|TWOFISH|IDEA|(3)?DES|DECRYPT|DEV_(U)?RANDOM|PANAMA|ENCRYPT|ENIGNA|WAKE|LOKI97|ARCFOUR(_IV)?)\n|STREAM_(REPORT_ERRORS|MUST_SEEK|MKDIR_RECURSIVE|BUFFER_(NONE|FULL|LINE)|SHUT_(RD)?WR\n|SOCK_(RDM|RAW|STREAM|SEQPACKET|DGRAM)|SERVER_(BIND|LISTEN)\n|NOTIFY_(REDIRECTED|RESOLVE|MIME_TYPE_IS|SEVERITY_(INFO|ERR|WARN)|COMPLETED|CONNECT|PROGRESS\n|FILE_SIZE_IS|FAILURE|AUTH_(REQUIRED|RESULT))\n|CRYPTO_METHOD_((SSLv2(3)?|SSLv3|TLS)_(CLIENT|SERVER))|CLIENT_((ASYNC_)?CONNECT|PERSISTENT)\n|CAST_(AS_STREAM|FOR_SELECT)|(IGNORE|IS)_URL|IPPROTO_(RAW|TCP|ICMP|IP|UDP)|OOB\n|OPTION_(READ_(BUFFER|TIMEOUT)|BLOCKING|WRITE_BUFFER)|URL_STAT_(LINK|QUIET)|USE_PATH\n|PEEK|PF_(INET(6)?|UNIX)|ENFORCE_SAFE_MODE|FILTER_(ALL|READ|WRITE))\n|SUNFUNCS_RET_(DOUBLE|STRING|TIMESTAMP)\n|SQLITE_(READONLY|ROW|MISMATCH|MISUSE|BOTH|BUSY|SCHEMA|NOMEM|NOTFOUND|NOTADB|NOLFS|NUM|CORRUPT\n|CONSTRAINT|CANTOPEN|TOOBIG|INTERRUPT|INTERNAL|IOERR|OK|DONE|PROTOCOL|PERM|ERROR|EMPTY\n|FORMAT|FULL|LOCKED|ABORT|ASSOC|AUTH)\n|SQLITE3_(BOTH|BLOB|NUM|NULL|TEXT|INTEGER|OPEN_(READ(ONLY|WRITE)|CREATE)|FLOAT_ASSOC)\n|CURL(M_(BAD_((EASY)?HANDLE)|CALL_MULTI_PERFORM|INTERNAL_ERROR|OUT_OF_MEMORY|OK)\n|MSG_DONE|SSH_AUTH_(HOST|NONE|DEFAULT|PUBLICKEY|PASSWORD|KEYBOARD)\n|CLOSEPOLICY_(SLOWEST|CALLBACK|OLDEST|LEAST_(RECENTLY_USED|TRAFFIC)\n|INFO_(REDIRECT_(COUNT|TIME)|REQUEST_SIZE|SSL_VERIFYRESULT|STARTTRANSFER_TIME\n|(SIZE|SPEED)_(DOWNLOAD|UPLOAD)|HTTP_CODE|HEADER_(OUT|SIZE)|NAMELOOKUP_TIME\n|CONNECT_TIME|CONTENT_(TYPE|LENGTH_(DOWNLOAD|UPLOAD))|CERTINFO|TOTAL_TIME\n|PRIVATE|PRETRANSFER_TIME|EFFECTIVE_URL|FILETIME)\n|OPT_(RESUME_FROM|RETURNTRANSFER|REDIR_PROTOCOLS|REFERER|READ(DATA|FUNCTION)|RANGE|RANDOM_FILE\n|MAX(CONNECTS|REDIRS)|BINARYTRANSFER|BUFFERSIZE\n|SSH_(HOST_PUBLIC_KEY_MD5|(PRIVATE|PUBLIC)_KEYFILE)|AUTH_TYPES)\n|SSL(CERT(TYPE|PASSWD)?|ENGINE(_DEFAULT)?|VERSION|KEY(TYPE|PASSWD)?)\n|SSL_(CIPHER_LIST|VERIFY(HOST|PEER))\n|STDERR|HTTP(GET|HEADER|200ALIASES|_VERSION|PROXYTUNNEL|AUTH)\n|HEADER(FUNCTION)?|NO(BODY|SIGNAL|PROGRESS)|NETRC|CRLF|CONNECTTIMEOUT(_MS)?\n|COOKIE(SESSION|JAR|FILE)?|CUSTOMREQUEST|CERTINFO|CLOSEPOLICY|CA(INFO|PATH)|TRANSFERTEXT\n|TCP_NODELAY|TIME(CONDITION|OUT(_MS)?|VALUE)|INTERFACE|INFILE(SIZE)?|IPRESOLVE\n|DNS_(CACHE_TIMEOUT|USE_GLOBAL_CACHE)|URL|USER(AGENT|PWD)|UNRESTRICTED_AUTH|UPLOAD\n|PRIVATE|PROGRESSFUNCTION|PROXY(TYPE|USERPWD|PORT|AUTH)?|PROTOCOLS|PORT\n|POST(REDIR|QUOTE|FIELDS)?|PUT|EGDSOCKET|ENCODING|VERBOSE|KRB4LEVEL|KEYPASSWD|QUOTE|FRESH_CONNECT\n|FTP(APPEND|LISTONLY|PORT|SSLAUTH)\n|FTP_(SSL|SKIP_PASV_IP|CREATE_MISSING_DIRS|USE_EP(RT|SV)|FILEMETHOD)\n|FILE(TIME)?|FORBID_REUSE|FOLLOWLOCATION|FAILONERROR|WRITE(FUNCTION|HEADER)|LOW_SPEED_(LIMIT|TIME)\n|AUTOREFERER)\n|PROXY_(HTTP|SOCKS(4|5))|PROTO_(SCP|SFTP|HTTP(S)?|TELNET|TFTP|DICT|FTP(S)?|FILE|LDAP(S)?|ALL)\n|E_((RECV|READ)_ERROR|GOT_NOTHING|MALFORMAT_USER\n|BAD_(CONTENT_ENCODING|CALLING_ORDER|PASSWORD_ENTERED|FUNCTION_ARGUMENT)\n|SSH|SSL_(CIPHER|CONNECT_ERROR|CERTPROBLEM|CACERT|PEER_CERTIFICATE|ENGINE_(NOTFOUND|SETFAILED))\n|SHARE_IN_USE|SEND_ERROR|HTTP_(RANGE_ERROR|NOT_FOUND|PORT_FAILED|POST_ERROR)\n|COULDNT_(RESOLVE_(HOST|PROXY)|CONNECT)|TOO_MANY_REDIRECTS|TELNET_OPTION_SYNTAX|OBSOLETE\n|OUT_OF_MEMORY|OPERATION|TIMEOUTED|OK|URL_MALFORMAT(_USER)?|UNSUPPORTED_PROTOCOL\n|UNKNOWN_TELNET_OPTION|PARTIAL_FILE\n|FTP_(BAD_DOWNLOAD_RESUME|SSL_FAILED|COULDNT_(RETR_FILE|GET_SIZE|STOR_FILE|SET_(BINARY|ASCII)|USE_REST)\n|CANT_(GET_HOST|RECONNECT)|USER_PASSWORD_INCORRECT|PORT_FAILED|QUOTE_ERROR|WRITE_ERROR\n|WEIRD_((PASS|PASV|SERVER|USER)_REPLY|227_FORMAT)|ACCESS_DENIED)\n|FILESIZE_EXCEEDED|FILE_COULDNT_READ_FILE|FUNCTION_NOT_FOUND|FAILED_INIT|WRITE_ERROR|LIBRARY_NOT_FOUND\n|LDAP_(SEARCH_FAILED|CANNOT_BIND|INVALID_URL)|ABORTED_BY_CALLBACK)\n|VERSION_NOW\n|FTP(METHOD_(MULTI|SINGLE|NO)CWD|SSL_(ALL|NONE|CONTROL|TRY)|AUTH_(DEFAULT|SSL|TLS))\n|AUTH_(ANY(SAFE)?|BASIC|DIGEST|GSSNEGOTIATE|NTLM))\n|CURL_(HTTP_VERSION_(1_(0|1)|NONE)|NETRC_(REQUIRED|IGNORED|OPTIONAL)|TIMECOND_(IF(UN)?MODSINCE|LASTMOD)\n|IPRESOLVE_(V(4|6)|WHATEVER)|VERSION_(SSL|IPV6|KERBEROS4|LIBZ))\n|IMAGETYPE_(GIF|XBM|BMP|SWF|COUNT|TIFF_(MM|II)|ICO|IFF|UNKNOWN|JB2|JPX|JP2|JPC|JPEG(2000)?|PSD|PNG|WBMP)\n|INPUT_(REQUEST|GET|SERVER|SESSION|COOKIE|POST|ENV)|ICONV_(MIME_DECODE_(STRICT|CONTINUE_ON_ERROR)|IMPL|VERSION)\n|DNS_(MX|SRV|SOA|HINFO|NS|NAPTR|CNAME|TXT|PTR|ANY|ALL|AAAA|A(6)?)\n|DOM(STRING_SIZE_ERR)\n|DOM_((SYNTAX|HIERARCHY_REQUEST|NO_(MODIFICATION_ALLOWED|DATA_ALLOWED)|NOT_(FOUND|SUPPORTED)|NAMESPACE\n|INDEX_SIZE|USE_ATTRIBUTE|VALID_(MODIFICATION|STATE|CHARACTER|ACCESS)|PHP|VALIDATION|WRONG_DOCUMENT)_ERR)\n|JSON_(HEX_(TAG|QUOT|AMP|APOS)|NUMERIC_CHECK|ERROR_(SYNTAX|STATE_MISMATCH|NONE|CTRL_CHAR|DEPTH|UTF8)|FORCE_OBJECT)\n|PREG_((D_UTF8(_OFFSET)?|NO|INTERNAL|(BACKTRACK|RECURSION)_LIMIT)_ERROR|GREP_INVERT\n|SPLIT_(NO_EMPTY|(DELIM|OFFSET)_CAPTURE)|SET_ORDER|OFFSET_CAPTURE|PATTERN_ORDER)\n|PSFS_(PASS_ON|ERR_FATAL|FEED_ME|FLAG_(NORMAL|FLUSH_(CLOSE|INC)))\n|PCRE_VERSION|POSIX_((F|R|W|X)_OK|S_IF(REG|BLK|SOCK|CHR|IFO))\n|FNM_(NOESCAPE|CASEFOLD|PERIOD|PATHNAME)\n|FILTER_(REQUIRE_(SCALAR|ARRAY)|NULL_ON_FAILURE|CALLBACK|DEFAULT|UNSAFE_RAW\n|SANITIZE_(MAGIC_QUOTES|STRING|STRIPPED|SPECIAL_CHARS|NUMBER_(INT|FLOAT)|URL\n|EMAIL|ENCODED|FULL_SPCIAL_CHARS)\n|VALIDATE_(REGEXP|BOOLEAN|INT|IP|URL|EMAIL|FLOAT)\n|FORCE_ARRAY\n|FLAG_(SCHEME_REQUIRED|STRIP_(BACKTICK|HIGH|LOW)|HOST_REQUIRED|NONE|NO_(RES|PRIV)_RANGE|ENCODE_QUOTES\n|IPV(4|6)|PATH_REQUIRED|EMPTY_STRING_NULL|ENCODE_(HIGH|LOW|AMP)|QUERY_REQUIRED\n|ALLOW_(SCIENTIFIC|HEX|THOUSAND|OCTAL|FRACTION)))\n|FILE_(BINARY|SKIP_EMPTY_LINES|NO_DEFAULT_CONTEXT|TEXT|IGNORE_NEW_LINES|USE_INCLUDE_PATH|APPEND)\n|FILEINFO_(RAW|MIME(_(ENCODING|TYPE))?|SYMLINK|NONE|CONTINUE|DEVICES|PRESERVE_ATIME)\n|FORCE_(DEFLATE|GZIP)\n|LIBXML_(XINCLUDE|NSCLEAN|NO(XMLDECL|BLANKS|NET|CDATA|ERROR|EMPTYTAG|ENT|WARNING)\n|COMPACT|DTD(VALID|LOAD|ATTR)|((DOTTED|LOADED)_)?VERSION|PARSEHUGE|ERR_(NONE|ERROR|FATAL|WARNING)))\n\\b",
        "name": "support.constant.ext.php"
      }, {
        "captures": {
          "1": {
            "name": "punctuation.separator.inheritance.php"
          }
        },
        "match": "(?x)\n(\\\\)?\\b\n(T_(RETURN|REQUIRE(_ONCE)?|GOTO|GLOBAL|(MINUS|MOD|MUL|XOR)_EQUAL|METHOD_C|ML_COMMENT|BREAK\n|BOOL_CAST|BOOLEAN_(AND|OR)|BAD_CHARACTER|SR(_EQUAL)?|STRING(_CAST|VARNAME)?|START_HEREDOC|STATIC\n|SWITCH|SL(_EQUAL)?|HALT_COMPILER|NS_(C|SEPARATOR)|NUM_STRING|NEW|NAMESPACE|CHARACTER|COMMENT\n|CONSTANT(_ENCAPSED_STRING)?|CONCAT_EQUAL|CONTINUE|CURLY_OPEN|CLOSE_TAG|CLONE|CLASS(_C)?\n|CASE|CATCH|TRY|THROW|IMPLEMENTS|ISSET|IS_((GREATER|SMALLER)_OR_EQUAL|(NOT_)?(IDENTICAL|EQUAL))\n|INSTANCEOF|INCLUDE(_ONCE)?|INC|INT_CAST|INTERFACE|INLINE_HTML|IF|OR_EQUAL|OBJECT_(CAST|OPERATOR)\n|OPEN_TAG(_WITH_ECHO)?|OLD_FUNCTION|DNUMBER|DIR|DIV_EQUAL|DOC_COMMENT|DOUBLE_(ARROW|CAST|COLON)\n|DOLLAR_OPEN_CURLY_BRACES|DO|DEC|DECLARE|DEFAULT|USE|UNSET(_CAST)?|PRINT|PRIVATE|PROTECTED|PUBLIC\n|PLUS_EQUAL|PAAMAYIM_NEKUDOTAYIM|EXTENDS|EXIT|EMPTY|ENCAPSED_AND_WHITESPACE\n|END(SWITCH|IF|DECLARE|FOR(EACH)?|WHILE)|END_HEREDOC|ECHO|EVAL|ELSE(IF)?|VAR(IABLE)?|FINAL|FILE\n|FOR(EACH)?|FUNC_C|FUNCTION|WHITESPACE|WHILE|LNUMBER|LIST|LINE|LOGICAL_(AND|OR|XOR)\n|ARRAY_(CAST)?|ABSTRACT|AS|AND_EQUAL))\n\\b",
        "name": "support.constant.parser-token.php"
      }, {
        "match": "(?i)[a-z_\\x{7f}-\\x{10ffff}][a-z0-9_\\x{7f}-\\x{10ffff}]*",
        "name": "constant.other.php"
      }]
    },
    "function-call": {
      "patterns": [{
        "begin": "(?x)\n(\n\\\\?(?<![a-zA-Z0-9_\\x{7f}-\\x{10ffff}])\n[a-zA-Z_\\x{7f}-\\x{10ffff}][a-zA-Z0-9_\\x{7f}-\\x{10ffff}]*\n(?:\\\\[a-zA-Z_\\x{7f}-\\x{10ffff}][a-zA-Z0-9_\\x{7f}-\\x{10ffff}]*)+\n)\\s*(\\()",
        "beginCaptures": {
          "1": {
            "patterns": [{
              "include": "#namespace"
            }, {
              "match": "(?i)[a-z_\\x{7f}-\\x{10ffff}][a-z0-9_\\x{7f}-\\x{10ffff}]*",
              "name": "entity.name.function.php"
            }]
          },
          "2": {
            "name": "punctuation.definition.arguments.begin.bracket.round.php"
          }
        },
        "end": "\\)|(?=\\?>)",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.arguments.end.bracket.round.php"
          }
        },
        "name": "meta.function-call.php",
        "patterns": [{
          "include": "#named-arguments"
        }, {
          "include": "$self"
        }]
      }, {
        "begin": "(\\\\)?(?<![a-zA-Z0-9_\\x{7f}-\\x{10ffff}])([a-zA-Z_\\x{7f}-\\x{10ffff}][a-zA-Z0-9_\\x{7f}-\\x{10ffff}]*)\\s*(\\()",
        "beginCaptures": {
          "1": {
            "patterns": [{
              "include": "#namespace"
            }]
          },
          "2": {
            "patterns": [{
              "include": "#support"
            }, {
              "match": "(?i)[a-z_\\x{7f}-\\x{10ffff}][a-z0-9_\\x{7f}-\\x{10ffff}]*",
              "name": "entity.name.function.php"
            }]
          },
          "3": {
            "name": "punctuation.definition.arguments.begin.bracket.round.php"
          }
        },
        "end": "\\)|(?=\\?>)",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.arguments.end.bracket.round.php"
          }
        },
        "name": "meta.function-call.php",
        "patterns": [{
          "include": "#named-arguments"
        }, {
          "include": "$self"
        }]
      }, {
        "match": "(?i)\\b(print|echo)\\b",
        "name": "support.function.construct.output.php"
      }]
    },
    "function-parameters": {
      "patterns": [{
        "include": "#attribute"
      }, {
        "include": "#comments"
      }, {
        "match": ",",
        "name": "punctuation.separator.delimiter.php"
      }, {
        "captures": {
          "1": {
            "patterns": [{
              "include": "#php-types"
            }]
          },
          "2": {
            "name": "variable.other.php"
          },
          "3": {
            "name": "storage.modifier.reference.php"
          },
          "4": {
            "name": "keyword.operator.variadic.php"
          },
          "5": {
            "name": "punctuation.definition.variable.php"
          }
        },
        "match": "(?xi)\n(?: (\n\n(?:\\?\\s*)? [a-z0-9_\\x{7f}-\\x{10ffff}\\\\]+ |\n\n(?: [a-z0-9_\\x{7f}-\\x{10ffff}\\\\]+ | \\(\\s* [a-z0-9_\\x{7f}-\\x{10ffff}\\\\]+(?:\\s*&\\s*[a-z0-9_\\x{7f}-\\x{10ffff}\\\\]+)+ \\s*\\) )\n(?: \\s*[|&]\\s*\n(?: [a-z0-9_\\x{7f}-\\x{10ffff}\\\\]+ | \\(\\s* [a-z0-9_\\x{7f}-\\x{10ffff}\\\\]+(?:\\s*&\\s*[a-z0-9_\\x{7f}-\\x{10ffff}\\\\]+)+ \\s*\\) )\n)+\n) \\s+ )?\n((?:(&)\\s*)?(\\.\\.\\.)(\\$)[a-z_\\x{7f}-\\x{10ffff}][a-z0-9_\\x{7f}-\\x{10ffff}]*)\n(?=\\s*(?:,|\\)|/[/*]|\\#|$))",
        "name": "meta.function.parameter.variadic.php"
      }, {
        "begin": "(?xi)\n(\n\n(?:\\?\\s*)? [a-z0-9_\\x{7f}-\\x{10ffff}\\\\]+ |\n\n(?: [a-z0-9_\\x{7f}-\\x{10ffff}\\\\]+ | \\(\\s* [a-z0-9_\\x{7f}-\\x{10ffff}\\\\]+(?:\\s*&\\s*[a-z0-9_\\x{7f}-\\x{10ffff}\\\\]+)+ \\s*\\) )\n(?: \\s*[|&]\\s*\n(?: [a-z0-9_\\x{7f}-\\x{10ffff}\\\\]+ | \\(\\s* [a-z0-9_\\x{7f}-\\x{10ffff}\\\\]+(?:\\s*&\\s*[a-z0-9_\\x{7f}-\\x{10ffff}\\\\]+)+ \\s*\\) )\n)+\n)\n\\s+ ((?:(&)\\s*)?(\\$)[a-z_\\x{7f}-\\x{10ffff}][a-z0-9_\\x{7f}-\\x{10ffff}]*)",
        "beginCaptures": {
          "1": {
            "patterns": [{
              "include": "#php-types"
            }]
          },
          "2": {
            "name": "variable.other.php"
          },
          "3": {
            "name": "storage.modifier.reference.php"
          },
          "4": {
            "name": "punctuation.definition.variable.php"
          }
        },
        "end": "(?=\\s*(?:,|\\)|/[/*]|\\#))",
        "name": "meta.function.parameter.typehinted.php",
        "patterns": [{
          "begin": "=",
          "beginCaptures": {
            "0": {
              "name": "keyword.operator.assignment.php"
            }
          },
          "end": "(?=\\s*(?:,|\\)|/[/*]|\\#))",
          "patterns": [{
            "include": "#parameter-default-types"
          }]
        }]
      }, {
        "captures": {
          "1": {
            "name": "variable.other.php"
          },
          "2": {
            "name": "storage.modifier.reference.php"
          },
          "3": {
            "name": "punctuation.definition.variable.php"
          }
        },
        "match": "(?xi)\n((?:(&)\\s*)?(\\$)[a-z_\\x{7f}-\\x{10ffff}][a-z0-9_\\x{7f}-\\x{10ffff}]*)\n(?=\\s*(?:,|\\)|/[/*]|\\#|$))",
        "name": "meta.function.parameter.no-default.php"
      }, {
        "begin": "(?xi)\n((?:(&)\\s*)?(\\$)[a-z_\\x{7f}-\\x{10ffff}][a-z0-9_\\x{7f}-\\x{10ffff}]*)\n\\s*(=)\\s*",
        "beginCaptures": {
          "1": {
            "name": "variable.other.php"
          },
          "2": {
            "name": "storage.modifier.reference.php"
          },
          "3": {
            "name": "punctuation.definition.variable.php"
          },
          "4": {
            "name": "keyword.operator.assignment.php"
          }
        },
        "end": "(?=\\s*(?:,|\\)|/[/*]|\\#))",
        "name": "meta.function.parameter.default.php",
        "patterns": [{
          "include": "#parameter-default-types"
        }]
      }]
    },
    "heredoc": {
      "patterns": [{
        "begin": '(?i)(?=<<<\\s*("?)([a-z_\\x{7f}-\\x{10ffff}][a-z0-9_\\x{7f}-\\x{10ffff}]*)(\\1)\\s*$)',
        "end": "(?!\\G)",
        "name": "string.unquoted.heredoc.php",
        "patterns": [{
          "include": "#heredoc_interior"
        }]
      }, {
        "begin": "(?=<<<\\s*'([a-zA-Z_]+[a-zA-Z0-9_]*)'\\s*$)",
        "end": "(?!\\G)",
        "name": "string.unquoted.nowdoc.php",
        "patterns": [{
          "include": "#nowdoc_interior"
        }]
      }]
    },
    "heredoc_interior": {
      "patterns": [{
        "begin": '(<<<)\\s*("?)(HTML)(\\2)(\\s*)$',
        "beginCaptures": {
          "0": {
            "name": "punctuation.section.embedded.begin.php"
          },
          "1": {
            "name": "punctuation.definition.string.php"
          },
          "3": {
            "name": "keyword.operator.heredoc.php"
          },
          "5": {
            "name": "invalid.illegal.trailing-whitespace.php"
          }
        },
        "contentName": "text.html",
        "end": "^\\s*(\\3)(?![A-Za-z0-9_\\x{7f}-\\x{10ffff}])",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.embedded.end.php"
          },
          "1": {
            "name": "keyword.operator.heredoc.php"
          }
        },
        "name": "meta.embedded.html",
        "patterns": [{
          "include": "#interpolation"
        }, {
          "include": "text.html.basic"
        }]
      }, {
        "begin": '(<<<)\\s*("?)(XML)(\\2)(\\s*)$',
        "beginCaptures": {
          "0": {
            "name": "punctuation.section.embedded.begin.php"
          },
          "1": {
            "name": "punctuation.definition.string.php"
          },
          "3": {
            "name": "keyword.operator.heredoc.php"
          },
          "5": {
            "name": "invalid.illegal.trailing-whitespace.php"
          }
        },
        "contentName": "text.xml",
        "end": "^\\s*(\\3)(?![A-Za-z0-9_\\x{7f}-\\x{10ffff}])",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.embedded.end.php"
          },
          "1": {
            "name": "keyword.operator.heredoc.php"
          }
        },
        "name": "meta.embedded.xml",
        "patterns": [{
          "include": "#interpolation"
        }, {
          "include": "text.xml"
        }]
      }, {
        "begin": '(<<<)\\s*("?)([DS]QL)(\\2)(\\s*)$',
        "beginCaptures": {
          "0": {
            "name": "punctuation.section.embedded.begin.php"
          },
          "1": {
            "name": "punctuation.definition.string.php"
          },
          "3": {
            "name": "keyword.operator.heredoc.php"
          },
          "5": {
            "name": "invalid.illegal.trailing-whitespace.php"
          }
        },
        "contentName": "source.sql",
        "end": "^\\s*(\\3)(?![A-Za-z0-9_\\x{7f}-\\x{10ffff}])",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.embedded.end.php"
          },
          "1": {
            "name": "keyword.operator.heredoc.php"
          }
        },
        "name": "meta.embedded.sql",
        "patterns": [{
          "include": "#interpolation"
        }, {
          "include": "source.sql"
        }]
      }, {
        "begin": '(<<<)\\s*("?)(JAVASCRIPT|JS)(\\2)(\\s*)$',
        "beginCaptures": {
          "0": {
            "name": "punctuation.section.embedded.begin.php"
          },
          "1": {
            "name": "punctuation.definition.string.php"
          },
          "3": {
            "name": "keyword.operator.heredoc.php"
          },
          "5": {
            "name": "invalid.illegal.trailing-whitespace.php"
          }
        },
        "contentName": "source.js",
        "end": "^\\s*(\\3)(?![A-Za-z0-9_\\x{7f}-\\x{10ffff}])",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.embedded.end.php"
          },
          "1": {
            "name": "keyword.operator.heredoc.php"
          }
        },
        "name": "meta.embedded.js",
        "patterns": [{
          "include": "#interpolation"
        }, {
          "include": "source.js"
        }]
      }, {
        "begin": '(<<<)\\s*("?)(JSON)(\\2)(\\s*)$',
        "beginCaptures": {
          "0": {
            "name": "punctuation.section.embedded.begin.php"
          },
          "1": {
            "name": "punctuation.definition.string.php"
          },
          "3": {
            "name": "keyword.operator.heredoc.php"
          },
          "5": {
            "name": "invalid.illegal.trailing-whitespace.php"
          }
        },
        "contentName": "source.json",
        "end": "^\\s*(\\3)(?![A-Za-z0-9_\\x{7f}-\\x{10ffff}])",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.embedded.end.php"
          },
          "1": {
            "name": "keyword.operator.heredoc.php"
          }
        },
        "name": "meta.embedded.json",
        "patterns": [{
          "include": "#interpolation"
        }, {
          "include": "source.json"
        }]
      }, {
        "begin": '(<<<)\\s*("?)(CSS)(\\2)(\\s*)$',
        "beginCaptures": {
          "0": {
            "name": "punctuation.section.embedded.begin.php"
          },
          "1": {
            "name": "punctuation.definition.string.php"
          },
          "3": {
            "name": "keyword.operator.heredoc.php"
          },
          "5": {
            "name": "invalid.illegal.trailing-whitespace.php"
          }
        },
        "contentName": "source.css",
        "end": "^\\s*(\\3)(?![A-Za-z0-9_\\x{7f}-\\x{10ffff}])",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.embedded.end.php"
          },
          "1": {
            "name": "keyword.operator.heredoc.php"
          }
        },
        "name": "meta.embedded.css",
        "patterns": [{
          "include": "#interpolation"
        }, {
          "include": "source.css"
        }]
      }, {
        "begin": '(<<<)\\s*("?)(REGEXP?)(\\2)(\\s*)$',
        "beginCaptures": {
          "0": {
            "name": "punctuation.section.embedded.begin.php"
          },
          "1": {
            "name": "punctuation.definition.string.php"
          },
          "3": {
            "name": "keyword.operator.heredoc.php"
          },
          "5": {
            "name": "invalid.illegal.trailing-whitespace.php"
          }
        },
        "contentName": "string.regexp.heredoc.php",
        "end": "^\\s*(\\3)(?![A-Za-z0-9_\\x{7f}-\\x{10ffff}])",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.embedded.end.php"
          },
          "1": {
            "name": "keyword.operator.heredoc.php"
          }
        },
        "patterns": [{
          "include": "#interpolation"
        }, {
          "match": "(\\\\){1,2}[.$^\\[\\]{}]",
          "name": "constant.character.escape.regex.php"
        }, {
          "captures": {
            "1": {
              "name": "punctuation.definition.arbitrary-repitition.php"
            },
            "3": {
              "name": "punctuation.definition.arbitrary-repitition.php"
            }
          },
          "match": "({)\\d+(,\\d+)?(})",
          "name": "string.regexp.arbitrary-repitition.php"
        }, {
          "begin": "\\[(?:\\^?\\])?",
          "captures": {
            "0": {
              "name": "punctuation.definition.character-class.php"
            }
          },
          "end": "\\]",
          "name": "string.regexp.character-class.php",
          "patterns": [{
            "match": "\\\\[\\\\'\\[\\]]",
            "name": "constant.character.escape.php"
          }]
        }, {
          "match": "[$^+*]",
          "name": "keyword.operator.regexp.php"
        }, {
          "begin": "(?i)(?<=^|\\s)(#)\\s(?=[[a-z0-9_\\x{7f}-\\x{10ffff},. \\t?!-][^\\x{00}-\\x{7f}]]*$)",
          "beginCaptures": {
            "1": {
              "name": "punctuation.definition.comment.php"
            }
          },
          "end": "$",
          "endCaptures": {
            "0": {
              "name": "punctuation.definition.comment.php"
            }
          },
          "name": "comment.line.number-sign.php"
        }]
      }, {
        "begin": '(<<<)\\s*("?)(BLADE)(\\2)(\\s*)$',
        "beginCaptures": {
          "0": {
            "name": "punctuation.section.embedded.begin.php"
          },
          "1": {
            "name": "punctuation.definition.string.php"
          },
          "3": {
            "name": "keyword.operator.heredoc.php"
          },
          "5": {
            "name": "invalid.illegal.trailing-whitespace.php"
          }
        },
        "contentName": "text.html.php.blade",
        "end": "^\\s*(\\3)(?![A-Za-z0-9_\\x{7f}-\\x{10ffff}])",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.embedded.end.php"
          },
          "1": {
            "name": "keyword.operator.heredoc.php"
          }
        },
        "name": "meta.embedded.php.blade",
        "patterns": [{
          "include": "#interpolation"
        }]
      }, {
        "begin": '(?i)(<<<)\\s*("?)([a-z_\\x{7f}-\\x{10ffff}]+[a-z0-9_\\x{7f}-\\x{10ffff}]*)(\\2)(\\s*)',
        "beginCaptures": {
          "1": {
            "name": "punctuation.definition.string.php"
          },
          "3": {
            "name": "keyword.operator.heredoc.php"
          },
          "5": {
            "name": "invalid.illegal.trailing-whitespace.php"
          }
        },
        "end": "^\\s*(\\3)(?![A-Za-z0-9_\\x{7f}-\\x{10ffff}])",
        "endCaptures": {
          "1": {
            "name": "keyword.operator.heredoc.php"
          }
        },
        "patterns": [{
          "include": "#interpolation"
        }]
      }]
    },
    "inheritance-single": {
      "patterns": [{
        "begin": "(?i)(?=\\\\?[a-z_\\x{7f}-\\x{10ffff}][a-z0-9_\\x{7f}-\\x{10ffff}]*\\\\)",
        "end": "(?i)([a-z_\\x{7f}-\\x{10ffff}][a-z0-9_\\x{7f}-\\x{10ffff}]*)?(?=[^a-z0-9_\\x{7f}-\\x{10ffff}\\\\])",
        "endCaptures": {
          "1": {
            "name": "entity.other.inherited-class.php"
          }
        },
        "patterns": [{
          "include": "#namespace"
        }]
      }, {
        "include": "#class-builtin"
      }, {
        "include": "#namespace"
      }, {
        "match": "(?i)[a-z_\\x{7f}-\\x{10ffff}][a-z0-9_\\x{7f}-\\x{10ffff}]*",
        "name": "entity.other.inherited-class.php"
      }]
    },
    "instantiation": {
      "begin": "(?i)(new)\\s+(?!class\\b)",
      "beginCaptures": {
        "1": {
          "name": "keyword.other.new.php"
        }
      },
      "end": "(?i)(?=[^a-z0-9_\\x{7f}-\\x{10ffff}\\\\])",
      "patterns": [{
        "match": "(?i)(parent|static|self)(?![a-z0-9_\\x{7f}-\\x{10ffff}])",
        "name": "storage.type.php"
      }, {
        "include": "#class-name"
      }, {
        "include": "#variable-name"
      }]
    },
    "interface-extends": {
      "patterns": [{
        "begin": "(?i)(extends)\\s+",
        "beginCaptures": {
          "1": {
            "name": "storage.modifier.extends.php"
          }
        },
        "end": "(?i)(?={)",
        "patterns": [{
          "include": "#comments"
        }, {
          "match": ",",
          "name": "punctuation.separator.classes.php"
        }, {
          "include": "#inheritance-single"
        }]
      }]
    },
    "interpolation": {
      "patterns": [{
        "match": "\\\\[0-7]{1,3}",
        "name": "constant.character.escape.octal.php"
      }, {
        "match": "\\\\x[0-9A-Fa-f]{1,2}",
        "name": "constant.character.escape.hex.php"
      }, {
        "match": "\\\\u{[0-9A-Fa-f]+}",
        "name": "constant.character.escape.unicode.php"
      }, {
        "match": "\\\\[nrtvef$\\\\]",
        "name": "constant.character.escape.php"
      }, {
        "begin": "{(?=\\$.*?})",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.variable.php"
          }
        },
        "end": "}",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.variable.php"
          }
        },
        "patterns": [{
          "include": "$self"
        }]
      }, {
        "include": "#variable-name"
      }]
    },
    "interpolation_double_quoted": {
      "patterns": [{
        "match": '\\\\"',
        "name": "constant.character.escape.php"
      }, {
        "include": "#interpolation"
      }]
    },
    "invoke-call": {
      "captures": {
        "1": {
          "name": "variable.other.php"
        },
        "2": {
          "name": "punctuation.definition.variable.php"
        }
      },
      "match": "(?i)((\\$+)[a-z_\\x{7f}-\\x{10ffff}][a-z0-9_\\x{7f}-\\x{10ffff}]*)(?=\\s*\\()",
      "name": "meta.function-call.invoke.php"
    },
    "match_statement": {
      "patterns": [{
        "match": "\\s+(?=match\\b)"
      }, {
        "begin": "\\bmatch\\b",
        "beginCaptures": {
          "0": {
            "name": "keyword.control.match.php"
          }
        },
        "end": "}|(?=\\?>)",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.section.match-block.end.bracket.curly.php"
          }
        },
        "name": "meta.match-statement.php",
        "patterns": [{
          "begin": "\\(",
          "beginCaptures": {
            "0": {
              "name": "punctuation.definition.match-expression.begin.bracket.round.php"
            }
          },
          "end": "\\)|(?=\\?>)",
          "endCaptures": {
            "0": {
              "name": "punctuation.definition.match-expression.end.bracket.round.php"
            }
          },
          "patterns": [{
            "include": "$self"
          }]
        }, {
          "begin": "{",
          "beginCaptures": {
            "0": {
              "name": "punctuation.definition.section.match-block.begin.bracket.curly.php"
            }
          },
          "end": "(?=}|\\?>)",
          "patterns": [{
            "match": "=>",
            "name": "keyword.definition.arrow.php"
          }, {
            "include": "$self"
          }]
        }]
      }]
    },
    "named-arguments": {
      "captures": {
        "1": {
          "name": "entity.name.variable.parameter.php"
        },
        "2": {
          "name": "punctuation.separator.colon.php"
        }
      },
      "match": "(?i)(?<=^|\\(|,)\\s*([a-z_\\x{7f}-\\x{10ffff}][a-z0-9_\\x{7f}-\\x{10ffff}]*)\\s*(:)(?!:)"
    },
    "namespace": {
      "begin": "(?i)(?:(namespace)|[a-z_\\x{7f}-\\x{10ffff}][a-z0-9_\\x{7f}-\\x{10ffff}]*)?(\\\\)",
      "beginCaptures": {
        "1": {
          "name": "variable.language.namespace.php"
        },
        "2": {
          "name": "punctuation.separator.inheritance.php"
        }
      },
      "end": "(?i)(?![a-z0-9_\\x{7f}-\\x{10ffff}]*\\\\)",
      "name": "support.other.namespace.php",
      "patterns": [{
        "match": "\\\\",
        "name": "punctuation.separator.inheritance.php"
      }]
    },
    "nowdoc_interior": {
      "patterns": [{
        "begin": "(<<<)\\s*'(HTML)'(\\s*)$",
        "beginCaptures": {
          "0": {
            "name": "punctuation.section.embedded.begin.php"
          },
          "1": {
            "name": "punctuation.definition.string.php"
          },
          "2": {
            "name": "keyword.operator.nowdoc.php"
          },
          "3": {
            "name": "invalid.illegal.trailing-whitespace.php"
          }
        },
        "contentName": "text.html",
        "end": "^\\s*(\\2)(?![A-Za-z0-9_\\x{7f}-\\x{10ffff}])",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.embedded.end.php"
          },
          "1": {
            "name": "keyword.operator.nowdoc.php"
          }
        },
        "name": "meta.embedded.html",
        "patterns": [{
          "include": "text.html.basic"
        }]
      }, {
        "begin": "(<<<)\\s*'(XML)'(\\s*)$",
        "beginCaptures": {
          "0": {
            "name": "punctuation.section.embedded.begin.php"
          },
          "1": {
            "name": "punctuation.definition.string.php"
          },
          "2": {
            "name": "keyword.operator.nowdoc.php"
          },
          "3": {
            "name": "invalid.illegal.trailing-whitespace.php"
          }
        },
        "contentName": "text.xml",
        "end": "^\\s*(\\2)(?![A-Za-z0-9_\\x{7f}-\\x{10ffff}])",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.embedded.end.php"
          },
          "1": {
            "name": "keyword.operator.nowdoc.php"
          }
        },
        "name": "meta.embedded.xml",
        "patterns": [{
          "include": "text.xml"
        }]
      }, {
        "begin": "(<<<)\\s*'([DS]QL)'(\\s*)$",
        "beginCaptures": {
          "0": {
            "name": "punctuation.section.embedded.begin.php"
          },
          "1": {
            "name": "punctuation.definition.string.php"
          },
          "2": {
            "name": "keyword.operator.nowdoc.php"
          },
          "3": {
            "name": "invalid.illegal.trailing-whitespace.php"
          }
        },
        "contentName": "source.sql",
        "end": "^\\s*(\\2)(?![A-Za-z0-9_\\x{7f}-\\x{10ffff}])",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.embedded.end.php"
          },
          "1": {
            "name": "keyword.operator.nowdoc.php"
          }
        },
        "name": "meta.embedded.sql",
        "patterns": [{
          "include": "source.sql"
        }]
      }, {
        "begin": "(<<<)\\s*'(JAVASCRIPT|JS)'(\\s*)$",
        "beginCaptures": {
          "0": {
            "name": "punctuation.section.embedded.begin.php"
          },
          "1": {
            "name": "punctuation.definition.string.php"
          },
          "2": {
            "name": "keyword.operator.nowdoc.php"
          },
          "3": {
            "name": "invalid.illegal.trailing-whitespace.php"
          }
        },
        "contentName": "source.js",
        "end": "^\\s*(\\2)(?![A-Za-z0-9_\\x{7f}-\\x{10ffff}])",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.embedded.end.php"
          },
          "1": {
            "name": "keyword.operator.nowdoc.php"
          }
        },
        "name": "meta.embedded.js",
        "patterns": [{
          "include": "source.js"
        }]
      }, {
        "begin": "(<<<)\\s*'(JSON)'(\\s*)$",
        "beginCaptures": {
          "0": {
            "name": "punctuation.section.embedded.begin.php"
          },
          "1": {
            "name": "punctuation.definition.string.php"
          },
          "2": {
            "name": "keyword.operator.nowdoc.php"
          },
          "3": {
            "name": "invalid.illegal.trailing-whitespace.php"
          }
        },
        "contentName": "source.json",
        "end": "^\\s*(\\2)(?![A-Za-z0-9_\\x{7f}-\\x{10ffff}])",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.embedded.end.php"
          },
          "1": {
            "name": "keyword.operator.nowdoc.php"
          }
        },
        "name": "meta.embedded.json",
        "patterns": [{
          "include": "source.json"
        }]
      }, {
        "begin": "(<<<)\\s*'(CSS)'(\\s*)$",
        "beginCaptures": {
          "0": {
            "name": "punctuation.section.embedded.begin.php"
          },
          "1": {
            "name": "punctuation.definition.string.php"
          },
          "2": {
            "name": "keyword.operator.nowdoc.php"
          },
          "3": {
            "name": "invalid.illegal.trailing-whitespace.php"
          }
        },
        "contentName": "source.css",
        "end": "^\\s*(\\2)(?![A-Za-z0-9_\\x{7f}-\\x{10ffff}])",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.embedded.end.php"
          },
          "1": {
            "name": "keyword.operator.nowdoc.php"
          }
        },
        "name": "meta.embedded.css",
        "patterns": [{
          "include": "source.css"
        }]
      }, {
        "begin": "(<<<)\\s*'(REGEXP?)'(\\s*)$",
        "beginCaptures": {
          "0": {
            "name": "punctuation.section.embedded.begin.php"
          },
          "1": {
            "name": "punctuation.definition.string.php"
          },
          "2": {
            "name": "keyword.operator.nowdoc.php"
          },
          "3": {
            "name": "invalid.illegal.trailing-whitespace.php"
          }
        },
        "contentName": "string.regexp.nowdoc.php",
        "end": "^\\s*(\\2)(?![A-Za-z0-9_\\x{7f}-\\x{10ffff}])",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.embedded.end.php"
          },
          "1": {
            "name": "keyword.operator.nowdoc.php"
          }
        },
        "patterns": [{
          "match": "(\\\\){1,2}[.$^\\[\\]{}]",
          "name": "constant.character.escape.regex.php"
        }, {
          "captures": {
            "1": {
              "name": "punctuation.definition.arbitrary-repitition.php"
            },
            "3": {
              "name": "punctuation.definition.arbitrary-repitition.php"
            }
          },
          "match": "({)\\d+(,\\d+)?(})",
          "name": "string.regexp.arbitrary-repitition.php"
        }, {
          "begin": "\\[(?:\\^?\\])?",
          "captures": {
            "0": {
              "name": "punctuation.definition.character-class.php"
            }
          },
          "end": "\\]",
          "name": "string.regexp.character-class.php",
          "patterns": [{
            "match": "\\\\[\\\\'\\[\\]]",
            "name": "constant.character.escape.php"
          }]
        }, {
          "match": "[$^+*]",
          "name": "keyword.operator.regexp.php"
        }, {
          "begin": "(?i)(?<=^|\\s)(#)\\s(?=[[a-z0-9_\\x{7f}-\\x{10ffff},. \\t?!-][^\\x{00}-\\x{7f}]]*$)",
          "beginCaptures": {
            "1": {
              "name": "punctuation.definition.comment.php"
            }
          },
          "end": "$",
          "endCaptures": {
            "0": {
              "name": "punctuation.definition.comment.php"
            }
          },
          "name": "comment.line.number-sign.php"
        }]
      }, {
        "begin": "(<<<)\\s*'(BLADE)'(\\s*)$",
        "beginCaptures": {
          "0": {
            "name": "punctuation.section.embedded.begin.php"
          },
          "1": {
            "name": "punctuation.definition.string.php"
          },
          "2": {
            "name": "keyword.operator.nowdoc.php"
          },
          "3": {
            "name": "invalid.illegal.trailing-whitespace.php"
          }
        },
        "contentName": "text.html.php.blade",
        "end": "^\\s*(\\2)(?![A-Za-z0-9_\\x{7f}-\\x{10ffff}])",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.embedded.end.php"
          },
          "1": {
            "name": "keyword.operator.nowdoc.php"
          }
        },
        "name": "meta.embedded.php.blade"
      }, {
        "begin": "(?i)(<<<)\\s*'([a-z_\\x{7f}-\\x{10ffff}]+[a-z0-9_\\x{7f}-\\x{10ffff}]*)'(\\s*)",
        "beginCaptures": {
          "1": {
            "name": "punctuation.definition.string.php"
          },
          "2": {
            "name": "keyword.operator.nowdoc.php"
          },
          "3": {
            "name": "invalid.illegal.trailing-whitespace.php"
          }
        },
        "end": "^\\s*(\\2)(?![A-Za-z0-9_\\x{7f}-\\x{10ffff}])",
        "endCaptures": {
          "1": {
            "name": "keyword.operator.nowdoc.php"
          }
        }
      }]
    },
    "null_coalescing": {
      "match": "\\?\\?",
      "name": "keyword.operator.null-coalescing.php"
    },
    "numbers": {
      "patterns": [{
        "match": "0[xX][0-9a-fA-F]+(?:_[0-9a-fA-F]+)*",
        "name": "constant.numeric.hex.php"
      }, {
        "match": "0[bB][01]+(?:_[01]+)*",
        "name": "constant.numeric.binary.php"
      }, {
        "match": "0[oO][0-7]+(?:_[0-7]+)*",
        "name": "constant.numeric.octal.php"
      }, {
        "match": "0(?:_?[0-7]+)+",
        "name": "constant.numeric.octal.php"
      }, {
        "captures": {
          "1": {
            "name": "punctuation.separator.decimal.period.php"
          },
          "2": {
            "name": "punctuation.separator.decimal.period.php"
          }
        },
        "match": "(?x)\n(?:\n(?:[0-9]+(?:_[0-9]+)*)?(\\.)[0-9]+(?:_[0-9]+)*(?:[eE][+-]?[0-9]+(?:_[0-9]+)*)?|\n[0-9]+(?:_[0-9]+)*(\\.)(?:[0-9]+(?:_[0-9]+)*)?(?:[eE][+-]?[0-9]+(?:_[0-9]+)*)?|\n[0-9]+(?:_[0-9]+)*[eE][+-]?[0-9]+(?:_[0-9]+)*\n)",
        "name": "constant.numeric.decimal.php"
      }, {
        "match": "0|[1-9](?:_?[0-9]+)*",
        "name": "constant.numeric.decimal.php"
      }]
    },
    "object": {
      "patterns": [{
        "begin": "(\\??->)\\s*(\\$?{)",
        "beginCaptures": {
          "1": {
            "name": "keyword.operator.class.php"
          },
          "2": {
            "name": "punctuation.definition.variable.php"
          }
        },
        "end": "}",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.variable.php"
          }
        },
        "patterns": [{
          "include": "$self"
        }]
      }, {
        "begin": "(?i)(\\??->)\\s*([a-z_\\x{7f}-\\x{10ffff}][a-z0-9_\\x{7f}-\\x{10ffff}]*)\\s*(\\()",
        "beginCaptures": {
          "1": {
            "name": "keyword.operator.class.php"
          },
          "2": {
            "name": "entity.name.function.php"
          },
          "3": {
            "name": "punctuation.definition.arguments.begin.bracket.round.php"
          }
        },
        "end": "\\)|(?=\\?>)",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.arguments.end.bracket.round.php"
          }
        },
        "name": "meta.method-call.php",
        "patterns": [{
          "include": "#named-arguments"
        }, {
          "include": "$self"
        }]
      }, {
        "captures": {
          "1": {
            "name": "keyword.operator.class.php"
          },
          "2": {
            "name": "variable.other.property.php"
          },
          "3": {
            "name": "punctuation.definition.variable.php"
          }
        },
        "match": "(?i)(\\??->)\\s*((\\$+)?[a-z_\\x{7f}-\\x{10ffff}][a-z0-9_\\x{7f}-\\x{10ffff}]*)?"
      }]
    },
    "parameter-default-types": {
      "patterns": [{
        "include": "#strings"
      }, {
        "include": "#numbers"
      }, {
        "include": "#string-backtick"
      }, {
        "include": "#variables"
      }, {
        "match": "=>",
        "name": "keyword.operator.key.php"
      }, {
        "match": "=",
        "name": "keyword.operator.assignment.php"
      }, {
        "match": "&(?=\\s*\\$)",
        "name": "storage.modifier.reference.php"
      }, {
        "begin": "(array)\\s*(\\()",
        "beginCaptures": {
          "1": {
            "name": "support.function.construct.php"
          },
          "2": {
            "name": "punctuation.definition.array.begin.bracket.round.php"
          }
        },
        "end": "\\)",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.array.end.bracket.round.php"
          }
        },
        "name": "meta.array.php",
        "patterns": [{
          "include": "#parameter-default-types"
        }]
      }, {
        "begin": "\\[",
        "beginCaptures": {
          "0": {
            "name": "punctuation.section.array.begin.php"
          }
        },
        "end": "\\]|(?=\\?>)",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.array.end.php"
          }
        },
        "patterns": [{
          "include": "$self"
        }]
      }, {
        "include": "#instantiation"
      }, {
        "begin": "(?xi)\n(?=[a-z0-9_\\x{7f}-\\x{10ffff}\\\\]+\n(::)\\s*([a-z_\\x{7f}-\\x{10ffff}][a-z0-9_\\x{7f}-\\x{10ffff}]*)?\n)",
        "end": "(?i)(::)\\s*([a-z_\\x{7f}-\\x{10ffff}][a-z0-9_\\x{7f}-\\x{10ffff}]*)?",
        "endCaptures": {
          "1": {
            "name": "keyword.operator.class.php"
          },
          "2": {
            "name": "constant.other.class.php"
          }
        },
        "patterns": [{
          "include": "#class-name"
        }]
      }, {
        "include": "#constants"
      }]
    },
    "php-types": {
      "patterns": [{
        "match": "\\?",
        "name": "keyword.operator.nullable-type.php"
      }, {
        "match": "[|&]",
        "name": "punctuation.separator.delimiter.php"
      }, {
        "match": "(?i)\\b(null|int|float|bool|string|array|object|callable|iterable|true|false|mixed|void)\\b",
        "name": "keyword.other.type.php"
      }, {
        "match": "(?i)\\b(parent|self)\\b",
        "name": "storage.type.php"
      }, {
        "match": "\\(",
        "name": "punctuation.definition.type.begin.bracket.round.php"
      }, {
        "match": "\\)",
        "name": "punctuation.definition.type.end.bracket.round.php"
      }, {
        "include": "#class-name"
      }]
    },
    "php_doc": {
      "patterns": [{
        "match": "^(?!\\s*\\*).*?(?:(?=\\*\\/)|$\\n?)",
        "name": "invalid.illegal.missing-asterisk.phpdoc.php"
      }, {
        "captures": {
          "1": {
            "name": "keyword.other.phpdoc.php"
          },
          "3": {
            "name": "storage.modifier.php"
          },
          "4": {
            "name": "invalid.illegal.wrong-access-type.phpdoc.php"
          }
        },
        "match": "^\\s*\\*\\s*(@access)\\s+((public|private|protected)|(.+))\\s*$"
      }, {
        "captures": {
          "1": {
            "name": "keyword.other.phpdoc.php"
          },
          "2": {
            "name": "markup.underline.link.php"
          }
        },
        "match": "(@xlink)\\s+(.+)\\s*$"
      }, {
        "begin": "(@(?:global|param|property(-(read|write))?|return|throws|var))\\s+(?=[?A-Za-z_\\x{7f}-\\x{10ffff}\\\\]|\\()",
        "beginCaptures": {
          "1": {
            "name": "keyword.other.phpdoc.php"
          }
        },
        "contentName": "meta.other.type.phpdoc.php",
        "end": "(?=\\s|\\*/)",
        "patterns": [{
          "include": "#php_doc_types_array_multiple"
        }, {
          "include": "#php_doc_types_array_single"
        }, {
          "include": "#php_doc_types"
        }]
      }, {
        "match": "(?x)\n@\n(\napi|abstract|author|category|copyright|example|global|inherit[Dd]oc|internal|\nlicense|link|method|property(-(read|write))?|package|param|return|see|since|source|\nstatic|subpackage|throws|todo|var|version|uses|deprecated|final|ignore\n)\\b",
        "name": "keyword.other.phpdoc.php"
      }, {
        "captures": {
          "1": {
            "name": "keyword.other.phpdoc.php"
          }
        },
        "match": "{(@(link|inherit[Dd]oc)).+?}",
        "name": "meta.tag.inline.phpdoc.php"
      }]
    },
    "php_doc_types": {
      "captures": {
        "0": {
          "patterns": [{
            "match": "\\?",
            "name": "keyword.operator.nullable-type.php"
          }, {
            "match": "(?x)\\b\n(string|integer|int|boolean|bool|float|double|object|mixed\n|array|resource|void|null|callback|false|true|self|static)\\b",
            "name": "keyword.other.type.php"
          }, {
            "include": "#class-name"
          }, {
            "match": "[|&]",
            "name": "punctuation.separator.delimiter.php"
          }, {
            "match": "\\(",
            "name": "punctuation.definition.type.begin.bracket.round.php"
          }, {
            "match": "\\)",
            "name": "punctuation.definition.type.end.bracket.round.php"
          }]
        }
      },
      "match": "(?i)\\??[a-z_\\x{7f}-\\x{10ffff}\\\\][a-z0-9_\\x{7f}-\\x{10ffff}\\\\]*([|&]\\??[a-z_\\x{7f}-\\x{10ffff}\\\\][a-z0-9_\\x{7f}-\\x{10ffff}\\\\]*)*"
    },
    "php_doc_types_array_multiple": {
      "begin": "\\(",
      "beginCaptures": {
        "0": {
          "name": "punctuation.definition.type.begin.bracket.round.phpdoc.php"
        }
      },
      "end": "(\\))(\\[\\])|(?=\\*/)",
      "endCaptures": {
        "1": {
          "name": "punctuation.definition.type.end.bracket.round.phpdoc.php"
        },
        "2": {
          "name": "keyword.other.array.phpdoc.php"
        }
      },
      "patterns": [{
        "include": "#php_doc_types_array_multiple"
      }, {
        "include": "#php_doc_types_array_single"
      }, {
        "include": "#php_doc_types"
      }, {
        "match": "[|&]",
        "name": "punctuation.separator.delimiter.php"
      }]
    },
    "php_doc_types_array_single": {
      "captures": {
        "1": {
          "patterns": [{
            "include": "#php_doc_types"
          }]
        },
        "2": {
          "name": "keyword.other.array.phpdoc.php"
        }
      },
      "match": "(?i)([a-z_\\x{7f}-\\x{10ffff}\\\\][a-z0-9_\\x{7f}-\\x{10ffff}\\\\]*)(\\[\\])"
    },
    "regex-double-quoted": {
      "begin": '"/(?=(\\\\.|[^"/])++/[imsxeADSUXu]*")',
      "beginCaptures": {
        "0": {
          "name": "punctuation.definition.string.begin.php"
        }
      },
      "end": '(/)([imsxeADSUXu]*)(")',
      "endCaptures": {
        "0": {
          "name": "punctuation.definition.string.end.php"
        }
      },
      "name": "string.regexp.double-quoted.php",
      "patterns": [{
        "match": "(\\\\){1,2}[.$^\\[\\]{}]",
        "name": "constant.character.escape.regex.php"
      }, {
        "include": "#interpolation_double_quoted"
      }, {
        "captures": {
          "1": {
            "name": "punctuation.definition.arbitrary-repetition.php"
          },
          "3": {
            "name": "punctuation.definition.arbitrary-repetition.php"
          }
        },
        "match": "({)\\d+(,\\d+)?(})",
        "name": "string.regexp.arbitrary-repetition.php"
      }, {
        "begin": "\\[(?:\\^?\\])?",
        "captures": {
          "0": {
            "name": "punctuation.definition.character-class.php"
          }
        },
        "end": "\\]",
        "name": "string.regexp.character-class.php",
        "patterns": [{
          "include": "#interpolation_double_quoted"
        }]
      }, {
        "match": "[$^+*]",
        "name": "keyword.operator.regexp.php"
      }]
    },
    "regex-single-quoted": {
      "begin": "'/(?=(\\\\(?:\\\\(?:\\\\[\\\\']?|[^'])|.)|[^'/])++/[imsxeADSUXu]*')",
      "beginCaptures": {
        "0": {
          "name": "punctuation.definition.string.begin.php"
        }
      },
      "end": "(/)([imsxeADSUXu]*)(')",
      "endCaptures": {
        "0": {
          "name": "punctuation.definition.string.end.php"
        }
      },
      "name": "string.regexp.single-quoted.php",
      "patterns": [{
        "include": "#single_quote_regex_escape"
      }, {
        "captures": {
          "1": {
            "name": "punctuation.definition.arbitrary-repetition.php"
          },
          "3": {
            "name": "punctuation.definition.arbitrary-repetition.php"
          }
        },
        "match": "({)\\d+(,\\d+)?(})",
        "name": "string.regexp.arbitrary-repetition.php"
      }, {
        "begin": "\\[(?:\\^?\\])?",
        "captures": {
          "0": {
            "name": "punctuation.definition.character-class.php"
          }
        },
        "end": "\\]",
        "name": "string.regexp.character-class.php"
      }, {
        "match": "[$^+*]",
        "name": "keyword.operator.regexp.php"
      }]
    },
    "scope-resolution": {
      "patterns": [{
        "captures": {
          "1": {
            "patterns": [{
              "match": "\\b(self|static|parent)\\b",
              "name": "storage.type.php"
            }, {
              "include": "#class-name"
            }, {
              "include": "#variable-name"
            }]
          }
        },
        "match": "([A-Za-z_\\x{7f}-\\x{10ffff}\\\\][A-Za-z0-9_\\x{7f}-\\x{10ffff}\\\\]*)(?=\\s*::)"
      }, {
        "begin": "(?i)(::)\\s*([a-z_\\x{7f}-\\x{10ffff}][a-z0-9_\\x{7f}-\\x{10ffff}]*)\\s*(\\()",
        "beginCaptures": {
          "1": {
            "name": "keyword.operator.class.php"
          },
          "2": {
            "name": "entity.name.function.php"
          },
          "3": {
            "name": "punctuation.definition.arguments.begin.bracket.round.php"
          }
        },
        "end": "\\)|(?=\\?>)",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.arguments.end.bracket.round.php"
          }
        },
        "name": "meta.method-call.static.php",
        "patterns": [{
          "include": "#named-arguments"
        }, {
          "include": "$self"
        }]
      }, {
        "captures": {
          "1": {
            "name": "keyword.operator.class.php"
          },
          "2": {
            "name": "keyword.other.class.php"
          }
        },
        "match": "(?i)(::)\\s*(class)\\b"
      }, {
        "captures": {
          "1": {
            "name": "keyword.operator.class.php"
          },
          "2": {
            "name": "variable.other.class.php"
          },
          "3": {
            "name": "punctuation.definition.variable.php"
          },
          "4": {
            "name": "constant.other.class.php"
          }
        },
        "match": "(?xi)\n(::)\\s*\n(?:\n((\\$+)[a-z_\\x{7f}-\\x{10ffff}][a-z0-9_\\x{7f}-\\x{10ffff}]*)\n|\n([a-z_\\x{7f}-\\x{10ffff}][a-z0-9_\\x{7f}-\\x{10ffff}]*)\n)?"
      }]
    },
    "single_quote_regex_escape": {
      "match": "\\\\(?:\\\\(?:\\\\[\\\\']?|[^'])|.)",
      "name": "constant.character.escape.php"
    },
    "sql-string-double-quoted": {
      "begin": '"\\s*(?=(SELECT|INSERT|UPDATE|DELETE|CREATE|REPLACE|ALTER|AND|WITH)\\b)',
      "beginCaptures": {
        "0": {
          "name": "punctuation.definition.string.begin.php"
        }
      },
      "contentName": "source.sql.embedded.php",
      "end": '"',
      "endCaptures": {
        "0": {
          "name": "punctuation.definition.string.end.php"
        }
      },
      "name": "string.quoted.double.sql.php",
      "patterns": [{
        "captures": {
          "1": {
            "name": "punctuation.definition.comment.sql"
          }
        },
        "match": '(#)(\\\\"|[^"])*(?="|$)',
        "name": "comment.line.number-sign.sql"
      }, {
        "captures": {
          "1": {
            "name": "punctuation.definition.comment.sql"
          }
        },
        "match": '(--)(\\\\"|[^"])*(?="|$)',
        "name": "comment.line.double-dash.sql"
      }, {
        "match": "\\\\[\\\\\"`']",
        "name": "constant.character.escape.php"
      }, {
        "match": `'(?=((\\\\')|[^'"])*("|$))`,
        "name": "string.quoted.single.unclosed.sql"
      }, {
        "match": '`(?=((\\\\`)|[^`"])*("|$))',
        "name": "string.quoted.other.backtick.unclosed.sql"
      }, {
        "begin": "'",
        "end": "'",
        "name": "string.quoted.single.sql",
        "patterns": [{
          "include": "#interpolation_double_quoted"
        }]
      }, {
        "begin": "`",
        "end": "`",
        "name": "string.quoted.other.backtick.sql",
        "patterns": [{
          "include": "#interpolation_double_quoted"
        }]
      }, {
        "include": "#interpolation_double_quoted"
      }, {
        "include": "source.sql"
      }]
    },
    "sql-string-single-quoted": {
      "begin": "'\\s*(?=(SELECT|INSERT|UPDATE|DELETE|CREATE|REPLACE|ALTER|AND|WITH)\\b)",
      "beginCaptures": {
        "0": {
          "name": "punctuation.definition.string.begin.php"
        }
      },
      "contentName": "source.sql.embedded.php",
      "end": "'",
      "endCaptures": {
        "0": {
          "name": "punctuation.definition.string.end.php"
        }
      },
      "name": "string.quoted.single.sql.php",
      "patterns": [{
        "captures": {
          "1": {
            "name": "punctuation.definition.comment.sql"
          }
        },
        "match": "(#)(\\\\'|[^'])*(?='|$)",
        "name": "comment.line.number-sign.sql"
      }, {
        "captures": {
          "1": {
            "name": "punctuation.definition.comment.sql"
          }
        },
        "match": "(--)(\\\\'|[^'])*(?='|$)",
        "name": "comment.line.double-dash.sql"
      }, {
        "match": "\\\\[\\\\'`\"]",
        "name": "constant.character.escape.php"
      }, {
        "match": "`(?=((\\\\`)|[^`'])*('|$))",
        "name": "string.quoted.other.backtick.unclosed.sql"
      }, {
        "match": `"(?=((\\\\")|[^"'])*('|$))`,
        "name": "string.quoted.double.unclosed.sql"
      }, {
        "include": "source.sql"
      }]
    },
    "string-backtick": {
      "begin": "`",
      "beginCaptures": {
        "0": {
          "name": "punctuation.definition.string.begin.php"
        }
      },
      "end": "`",
      "endCaptures": {
        "0": {
          "name": "punctuation.definition.string.end.php"
        }
      },
      "name": "string.interpolated.php",
      "patterns": [{
        "match": "\\\\`",
        "name": "constant.character.escape.php"
      }, {
        "include": "#interpolation"
      }]
    },
    "string-double-quoted": {
      "begin": '"',
      "beginCaptures": {
        "0": {
          "name": "punctuation.definition.string.begin.php"
        }
      },
      "end": '"',
      "endCaptures": {
        "0": {
          "name": "punctuation.definition.string.end.php"
        }
      },
      "name": "string.quoted.double.php",
      "patterns": [{
        "include": "#interpolation_double_quoted"
      }]
    },
    "string-single-quoted": {
      "begin": "'",
      "beginCaptures": {
        "0": {
          "name": "punctuation.definition.string.begin.php"
        }
      },
      "end": "'",
      "endCaptures": {
        "0": {
          "name": "punctuation.definition.string.end.php"
        }
      },
      "name": "string.quoted.single.php",
      "patterns": [{
        "match": "\\\\[\\\\']",
        "name": "constant.character.escape.php"
      }]
    },
    "strings": {
      "patterns": [{
        "include": "#regex-double-quoted"
      }, {
        "include": "#sql-string-double-quoted"
      }, {
        "include": "#string-double-quoted"
      }, {
        "include": "#regex-single-quoted"
      }, {
        "include": "#sql-string-single-quoted"
      }, {
        "include": "#string-single-quoted"
      }]
    },
    "support": {
      "patterns": [{
        "match": "(?xi)\n\\b\napc_(\nstore|sma_info|compile_file|clear_cache|cas|cache_info|inc|dec|define_constants|delete(_file)?|\nexists|fetch|load_constants|add|bin_(dump|load)(file)?\n)\\b",
        "name": "support.function.apc.php"
      }, {
        "match": "(?xi)\\b\n(\nshuffle|sizeof|sort|next|nat(case)?sort|count|compact|current|in_array|usort|uksort|uasort|\npos|prev|end|each|extract|ksort|key(_exists)?|krsort|list|asort|arsort|rsort|reset|range|\narray(_(shift|sum|splice|search|slice|chunk|change_key_case|count_values|column|combine|\n(diff|intersect)(_(u)?(key|assoc))?|u(diff|intersect)(_(u)?assoc)?|unshift|unique|\npop|push|pad|product|values|keys|key_exists|filter|fill(_keys)?|flip|walk(_recursive)?|\nreduce|replace(_recursive)?|reverse|rand|multisort|merge(_recursive)?|map)?)\n)\\b",
        "name": "support.function.array.php"
      }, {
        "match": "(?xi)\\b\n(\nshow_source|sys_getloadavg|sleep|highlight_(file|string)|constant|connection_(aborted|status)|\ntime_(nanosleep|sleep_until)|ignore_user_abort|die|define(d)?|usleep|uniqid|unpack|__halt_compiler|\nphp_(check_syntax|strip_whitespace)|pack|eval|exit|get_browser\n)\\b",
        "name": "support.function.basic_functions.php"
      }, {
        "match": "(?i)\\bbc(scale|sub|sqrt|comp|div|pow(mod)?|add|mod|mul)\\b",
        "name": "support.function.bcmath.php"
      }, {
        "match": "(?i)\\bblenc_encrypt\\b",
        "name": "support.function.blenc.php"
      }, {
        "match": "(?i)\\bbz(compress|close|open|decompress|errstr|errno|error|flush|write|read)\\b",
        "name": "support.function.bz2.php"
      }, {
        "match": "(?xi)\\b\n(\n(French|Gregorian|Jewish|Julian)ToJD|cal_(to_jd|info|days_in_month|from_jd)|unixtojd|\njdto(unix|jewish)|easter_(date|days)|JD(MonthName|To(Gregorian|Julian|French)|DayOfWeek)\n)\\b",
        "name": "support.function.calendar.php"
      }, {
        "match": "(?xi)\\b\n(\nclass_alias|all_user_method(_array)?|is_(a|subclass_of)|__autoload|(class|interface|method|property|trait)_exists|\nget_(class(_(vars|methods))?|(called|parent)_class|object_vars|declared_(classes|interfaces|traits))\n)\\b",
        "name": "support.function.classobj.php"
      }, {
        "match": "(?xi)\\b\n(\ncom_(create_guid|print_typeinfo|event_sink|load_typelib|get_active_object|message_pump)|\nvariant_(sub|set(_type)?|not|neg|cast|cat|cmp|int|idiv|imp|or|div|date_(from|to)_timestamp|\npow|eqv|fix|and|add|abs|round|get_type|xor|mod|mul)\n)\\b",
        "name": "support.function.com.php"
      }, {
        "match": "(?i)\\b(isset|unset|eval|empty|list)\\b",
        "name": "support.function.construct.php"
      }, {
        "match": "(?i)\\b(print|echo)\\b",
        "name": "support.function.construct.output.php"
      }, {
        "match": "(?i)\\bctype_(space|cntrl|digit|upper|punct|print|lower|alnum|alpha|graph|xdigit)\\b",
        "name": "support.function.ctype.php"
      }, {
        "match": "(?xi)\\b\ncurl_(\nshare_(close|init|setopt)|strerror|setopt(_array)?|copy_handle|close|init|unescape|pause|escape|\nerrno|error|exec|version|file_create|reset|getinfo|\nmulti_(strerror|setopt|select|close|init|info_read|(add|remove)_handle|getcontent|exec)\n)\\b",
        "name": "support.function.curl.php"
      }, {
        "match": "(?xi)\\b\n(\nstrtotime|str[fp]time|checkdate|time|timezone_name_(from_abbr|get)|idate|\ntimezone_((location|offset|transitions|version)_get|(abbreviations|identifiers)_list|open)|\ndate(_(sun(rise|set)|sun_info|sub|create(_(immutable_)?from_format)?|timestamp_(get|set)|timezone_(get|set)|time_set|\nisodate_set|interval_(create_from_date_string|format)|offset_get|diff|default_timezone_(get|set)|date_set|\nparse(_from_format)?|format|add|get_last_errors|modify))?|\nlocaltime|get(date|timeofday)|gm(strftime|date|mktime)|microtime|mktime\n)\\b",
        "name": "support.function.datetime.php"
      }, {
        "match": "(?i)\\bdba_(sync|handlers|nextkey|close|insert|optimize|open|delete|popen|exists|key_split|firstkey|fetch|list|replace)\\b",
        "name": "support.function.dba.php"
      }, {
        "match": "(?i)\\bdbx_(sort|connect|compare|close|escape_string|error|query|fetch_row)\\b",
        "name": "support.function.dbx.php"
      }, {
        "match": "(?i)\\b(scandir|chdir|chroot|closedir|opendir|dir|rewinddir|readdir|getcwd)\\b",
        "name": "support.function.dir.php"
      }, {
        "match": "(?xi)\\b\neio_(\nsync(fs)?|sync_file_range|symlink|stat(vfs)?|sendfile|set_min_parallel|set_max_(idle|poll_(reqs|time)|parallel)|\nseek|n(threads|op|pending|reqs|ready)|chown|chmod|custom|close|cancel|truncate|init|open|dup2|unlink|utime|poll|\nevent_loop|f(sync|stat(vfs)?|chown|chmod|truncate|datasync|utime|allocate)|write|lstat|link|rename|realpath|\nread(ahead|dir|link)?|rmdir|get_(event_stream|last_error)|grp(_(add|cancel|limit))?|mknod|mkdir|busy\n)\\b",
        "name": "support.function.eio.php"
      }, {
        "match": "(?xi)\\b\nenchant_(\ndict_(store_replacement|suggest|check|is_in_session|describe|quick_check|add_to_(personal|session)|get_error)|\nbroker_(set_ordering|init|dict_exists|describe|free(_dict)?|list_dicts|request_(pwl_)?dict|get_error)\n)\\b",
        "name": "support.function.enchant.php"
      }, {
        "match": "(?i)\\b(split(i)?|sql_regcase|ereg(i)?(_replace)?)\\b",
        "name": "support.function.ereg.php"
      }, {
        "match": "(?i)\\b((restore|set)_(error_handler|exception_handler)|trigger_error|debug_(print_)?backtrace|user_error|error_(log|reporting|get_last))\\b",
        "name": "support.function.errorfunc.php"
      }, {
        "match": "(?i)\\b(shell_exec|system|passthru|proc_(nice|close|terminate|open|get_status)|escapeshell(arg|cmd)|exec)\\b",
        "name": "support.function.exec.php"
      }, {
        "match": "(?i)\\b(exif_(thumbnail|tagname|imagetype|read_data)|read_exif_data)\\b",
        "name": "support.function.exif.php"
      }, {
        "match": "(?xi)\\b\nfann_(\n(duplicate|length|merge|shuffle|subset)_train_data|scale_(train(_data)?|(input|output)(_train_data)?)|\nset_(scaling_params|sarprop_(step_error_(shift|threshold_factor)|temperature|weight_decay_shift)|\ncascade_(num_candidate_groups|candidate_(change_fraction|limit|stagnation_epochs)|\noutput_(change_fraction|stagnation_epochs)|weight_multiplier|activation_(functions|steepnesses)|\n(max|min)_(cand|out)_epochs)|\ncallback|training_algorithm|train_(error|stop)_function|(input|output)_scaling_params|error_log|\nquickprop_(decay|mu)|weight(_array)?|learning_(momentum|rate)|bit_fail_limit|\nactivation_(function|steepness)(_(hidden|layer|output))?|\nrprop_((decrease|increase)_factor|delta_(max|min|zero)))|\nsave(_train)?|num_(input|output)_train_data|copy|clear_scaling_params|cascadetrain_on_(file|data)|\ncreate_((sparse|shortcut|standard)(_array)?|train(_from_callback)?|from_file)|\ntest(_data)?|train(_(on_(file|data)|epoch))?|init_weights|descale_(input|output|train)|destroy(_train)?|\nprint_error|run|reset_(MSE|err(no|str))|read_train_from_file|randomize_weights|\nget_(sarprop_(step_error_(shift|threshold_factor)|temperature|weight_decay_shift)|num_(input|output|layers)|\nnetwork_type|MSE|connection_(array|rate)|bias_array|bit_fail(_limit)?|\ncascade_(num_(candidates|candidate_groups)|(candidate|output)_(change_fraction|limit|stagnation_epochs)|\nweight_multiplier|activation_(functions|steepnesses)(_count)?|(max|min)_(cand|out)_epochs)|\ntotal_(connections|neurons)|training_algorithm|train_(error|stop)_function|err(no|str)|\nquickprop_(decay|mu)|learning_(momentum|rate)|layer_array|activation_(function|steepness)|\nrprop_((decrease|increase)_factor|delta_(max|min|zero)))\n)\\b",
        "name": "support.function.fann.php"
      }, {
        "match": "(?xi)\\b\n(\nsymlink|stat|set_file_buffer|chown|chgrp|chmod|copy|clearstatcache|touch|tempnam|tmpfile|\nis_(dir|(uploaded_)?file|executable|link|readable|writ(e)?able)|disk_(free|total)_space|diskfreespace|\ndirname|delete|unlink|umask|pclose|popen|pathinfo|parse_ini_(file|string)|fscanf|fstat|fseek|fnmatch|\nfclose|ftell|ftruncate|file(size|[acm]time|type|inode|owner|perms|group)?|file_(exists|(get|put)_contents)|\nf(open|puts|putcsv|passthru|eof|flush|write|lock|read|gets(s)?|getc(sv)?)|lstat|lchown|lchgrp|link(info)?|\nrename|rewind|read(file|link)|realpath(_cache_(get|size))?|rmdir|glob|move_uploaded_file|mkdir|basename\n)\\b",
        "name": "support.function.file.php"
      }, {
        "match": "(?i)\\b(finfo_(set_flags|close|open|file|buffer)|mime_content_type)\\b",
        "name": "support.function.fileinfo.php"
      }, {
        "match": "(?i)\\bfilter_(has_var|input(_array)?|id|var(_array)?|list)\\b",
        "name": "support.function.filter.php"
      }, {
        "match": "(?i)\\bfastcgi_finish_request\\b",
        "name": "support.function.fpm.php"
      }, {
        "match": "(?i)\\b(call_user_(func|method)(_array)?|create_function|unregister_tick_function|forward_static_call(_array)?|function_exists|func_(num_args|get_arg(s)?)|register_(shutdown|tick)_function|get_defined_functions)\\b",
        "name": "support.function.funchand.php"
      }, {
        "match": "(?i)\\b((n)?gettext|textdomain|d((n)?gettext|c(n)?gettext)|bind(textdomain|_textdomain_codeset))\\b",
        "name": "support.function.gettext.php"
      }, {
        "match": "(?xi)\\b\ngmp_(\nscan[01]|strval|sign|sub|setbit|sqrt(rem)?|hamdist|neg|nextprime|com|clrbit|cmp|testbit|\nintval|init|invert|import|or|div(exact)?|div_(q|qr|r)|jacobi|popcount|pow(m)?|perfect_square|\nprob_prime|export|fact|legendre|and|add|abs|root(rem)?|random(_(bits|range))?|gcd(ext)?|xor|mod|mul\n)\\b",
        "name": "support.function.gmp.php"
      }, {
        "match": "(?i)\\bhash(_(hmac(_file)?|copy|init|update(_(file|stream))?|pbkdf2|equals|file|final|algos))?\\b",
        "name": "support.function.hash.php"
      }, {
        "match": "(?xi)\\b\n(\nhttp_(support|send_(status|stream|content_(disposition|type)|data|file|last_modified)|head|\nnegotiate_(charset|content_type|language)|chunked_decode|cache_(etag|last_modified)|throttle|\ninflate|deflate|date|post_(data|fields)|put_(data|file|stream)|persistent_handles_(count|clean|ident)|\nparse_(cookie|headers|message|params)|redirect|request(_(method_(exists|name|(un)?register)|body_encode))?|\nget(_request_(headers|body(_stream)?))?|match_(etag|modified|request_header)|build_(cookie|str|url))|\nob_(etag|deflate|inflate)handler\n)\\b",
        "name": "support.function.http.php"
      }, {
        "match": "(?i)\\b(iconv(_(str(pos|len|rpos)|substr|(get|set)_encoding|mime_(decode(_headers)?|encode)))?|ob_iconv_handler)\\b",
        "name": "support.function.iconv.php"
      }, {
        "match": "(?i)\\biis_((start|stop)_(service|server)|set_(script_map|server_rights|dir_security|app_settings)|(add|remove)_server|get_(script_map|service_state|server_(rights|by_(comment|path))|dir_security))\\b",
        "name": "support.function.iisfunc.php"
      }, {
        "match": "(?xi)\\b\n(\niptc(embed|parse)|(jpeg|png)2wbmp|gd_info|getimagesize(fromstring)?|\nimage(s[xy]|scale|(char|string)(up)?|set(style|thickness|tile|interpolation|pixel|brush)|savealpha|\nconvolution|copy(resampled|resized|merge(gray)?)?|colors(forindex|total)|\ncolor(set|closest(alpha|hwb)?|transparent|deallocate|(allocate|exact|resolve)(alpha)?|at|match)|\ncrop(auto)?|create(truecolor|from(string|jpeg|png|wbmp|webp|gif|gd(2(part)?)?|xpm|xbm))?|\ntypes|ttf(bbox|text)|truecolortopalette|istruecolor|interlace|2wbmp|destroy|dashedline|jpeg|\n_type_to_(extension|mime_type)|ps(slantfont|text|(encode|extend|free|load)font|bbox)|png|polygon|\npalette(copy|totruecolor)|ellipse|ft(text|bbox)|filter|fill|filltoborder|\nfilled(arc|ellipse|polygon|rectangle)|font(height|width)|flip|webp|wbmp|line|loadfont|layereffect|\nantialias|affine(matrix(concat|get))?|alphablending|arc|rotate|rectangle|gif|gd(2)?|gammacorrect|\ngrab(screen|window)|xbm)\n)\\b",
        "name": "support.function.image.php"
      }, {
        "match": "(?xi)\\b\n(\nsys_get_temp_dir|set_(time_limit|include_path|magic_quotes_runtime)|cli_(get|set)_process_title|\nini_(alter|get(_all)?|restore|set)|zend_(thread_id|version|logo_guid)|dl|php(credits|info|version)|\nphp_(sapi_name|ini_(scanned_files|loaded_file)|uname|logo_guid)|putenv|extension_loaded|version_compare|\nassert(_options)?|restore_include_path|gc_(collect_cycles|disable|enable(d)?)|getopt|\nget_(cfg_var|current_user|defined_constants|extension_funcs|include_path|included_files|loaded_extensions|\nmagic_quotes_(gpc|runtime)|required_files|resources)|\nget(env|lastmod|rusage|my(inode|[gup]id))|\nmemory_get_(peak_)?usage|main|magic_quotes_runtime\n)\\b",
        "name": "support.function.info.php"
      }, {
        "match": "(?xi)\\b\nibase_(\nset_event_handler|service_(attach|detach)|server_info|num_(fields|params)|name_result|connect|\ncommit(_ret)?|close|trans|delete_user|drop_db|db_info|pconnect|param_info|prepare|err(code|msg)|\nexecute|query|field_info|fetch_(assoc|object|row)|free_(event_handler|query|result)|wait_event|\nadd_user|affected_rows|rollback(_ret)?|restore|gen_id|modify_user|maintain_db|backup|\nblob_(cancel|close|create|import|info|open|echo|add|get)\n)\\b",
        "name": "support.function.interbase.php"
      }, {
        "match": "(?xi)\\b\n(\nnormalizer_(normalize|is_normalized)|idn_to_(unicode|utf8|ascii)|\nnumfmt_(set_(symbol|(text_)?attribute|pattern)|create|(parse|format)(_currency)?|\nget_(symbol|(text_)?attribute|pattern|error_(code|message)|locale))|\ncollator_(sort(_with_sort_keys)?|set_(attribute|strength)|compare|create|asort|\nget_(strength|sort_key|error_(code|message)|locale|attribute))|\ntransliterator_(create(_(inverse|from_rules))?|transliterate|list_ids|get_error_(code|message))|\nintl(cal|tz)_get_error_(code|message)|intl_(is_failure|error_name|get_error_(code|message))|\ndatefmt_(set_(calendar|lenient|pattern|timezone(_id)?)|create|is_lenient|parse|format(_object)?|localtime|\nget_(calendar(_object)?|time(type|zone(_id)?)|datetype|pattern|error_(code|message)|locale))|\nlocale_(set_default|compose|canonicalize|parse|filter_matches|lookup|accept_from_http|\nget_(script|display_(script|name|variant|language|region)|default|primary_language|keywords|all_variants|region))|\nresourcebundle_(create|count|locales|get(_(error_(code|message)))?)|\ngrapheme_(str(i?str|r?i?pos|len)|substr|extract)|\nmsgfmt_(set_pattern|create|(format|parse)(_message)?|get_(pattern|error_(code|message)|locale))\n)\\b",
        "name": "support.function.intl.php"
      }, {
        "match": "(?i)\\bjson_(decode|encode|last_error(_msg)?)\\b",
        "name": "support.function.json.php"
      }, {
        "match": "(?xi)\\b\nldap_(\nstart|tls|sort|search|sasl_bind|set_(option|rebind_proc)|(first|next)_(attribute|entry|reference)|\nconnect|control_paged_result(_response)?|count_entries|compare|close|t61_to_8859|8859_to_t61|\ndn2ufn|delete|unbind|parse_(reference|result)|escape|errno|err2str|error|explode_dn|bind|\nfree_result|list|add|rename|read|get_(option|dn|entries|values(_len)?|attributes)|modify(_batch)?|\nmod_(add|del|replace)\n)\\b",
        "name": "support.function.ldap.php"
      }, {
        "match": "(?i)\\blibxml_(set_(streams_context|external_entity_loader)|clear_errors|disable_entity_loader|use_internal_errors|get_(errors|last_error))\\b",
        "name": "support.function.libxml.php"
      }, {
        "match": "(?i)\\b(ezmlm_hash|mail)\\b",
        "name": "support.function.mail.php"
      }, {
        "match": "(?xi)\\b\n(\n(a)?(cos|sin|tan)(h)?|sqrt|srand|hypot|hexdec|ceil|is_(nan|(in)?finite)|octdec|dec(hex|oct|bin)|deg2rad|\npi|pow|exp(m1)?|floor|fmod|lcg_value|log(1(p|0))?|atan2|abs|round|rand|rad2deg|getrandmax|\nmt_(srand|rand|getrandmax)|max|min|bindec|base_convert\n)\\b",
        "name": "support.function.math.php"
      }, {
        "match": "(?xi)\\b\nmb_(\nstr(cut|str|to(lower|upper)|istr|ipos|imwidth|pos|width|len|rchr|richr|ripos|rpos)|\nsubstitute_character|substr(_count)?|split|send_mail|http_(input|output)|check_encoding|\nconvert_(case|encoding|kana|variables)|internal_encoding|output_handler|decode_(numericentity|mimeheader)|\ndetect_(encoding|order)|parse_str|preferred_mime_name|encoding_aliases|encode_(numericentity|mimeheader)|\nereg(i(_replace)?)?|ereg_(search(_(get(pos|regs)|init|regs|(set)?pos))?|replace(_callback)?|match)|\nlist_encodings|language|regex_(set_options|encoding)|get_info\n)\\b",
        "name": "support.function.mbstring.php"
      }, {
        "match": "(?xi)\\b\n(\nmcrypt_(\ncfb|create_iv|cbc|ofb|decrypt|encrypt|ecb|list_(algorithms|modes)|generic(_((de)?init|end))?|\nenc_(self_test|is_block_(algorithm|algorithm_mode|mode)|\nget_(supported_key_sizes|(block|iv|key)_size|(algorithms|modes)_name))|\nget_(cipher_name|(block|iv|key)_size)|\nmodule_(close|self_test|is_block_(algorithm|algorithm_mode|mode)|open|\nget_(supported_key_sizes|algo_(block|key)_size)))|\nmdecrypt_generic\n)\\b",
        "name": "support.function.mcrypt.php"
      }, {
        "match": "(?i)\\bmemcache_debug\\b",
        "name": "support.function.memcache.php"
      }, {
        "match": "(?i)\\bmhash(_(count|keygen_s2k|get_(hash_name|block_size)))?\\b",
        "name": "support.function.mhash.php"
      }, {
        "match": "(?i)\\b(log_(cmd_(insert|delete|update)|killcursor|write_batch|reply|getmore)|bson_(decode|encode))\\b",
        "name": "support.function.mongo.php"
      }, {
        "match": "(?xi)\\b\nmysql_(\nstat|set_charset|select_db|num_(fields|rows)|connect|client_encoding|close|create_db|escape_string|\nthread_id|tablename|insert_id|info|data_seek|drop_db|db_(name|query)|unbuffered_query|pconnect|ping|\nerrno|error|query|field_(seek|name|type|table|flags|len)|fetch_(object|field|lengths|assoc|array|row)|\nfree_result|list_(tables|dbs|processes|fields)|affected_rows|result|real_escape_string|\nget_(client|host|proto|server)_info\n)\\b",
        "name": "support.function.mysql.php"
      }, {
        "match": "(?xi)\\b\nmysqli_(\nssl_set|store_result|stat|send_(query|long_data)|set_(charset|opt|local_infile_(default|handler))|\nstmt_(store_result|send_long_data|next_result|close|init|data_seek|prepare|execute|fetch|free_result|\nattr_(get|set)|result_metadata|reset|get_(result|warnings)|more_results|bind_(param|result))|\nselect_db|slave_query|savepoint|next_result|change_user|character_set_name|connect|commit|\nclient_encoding|close|thread_safe|init|options|(enable|disable)_(reads_from_master|rpl_parse)|\ndump_debug_info|debug|data_seek|use_result|ping|poll|param_count|prepare|escape_string|execute|\nembedded_server_(start|end)|kill|query|field_seek|free_result|autocommit|rollback|report|refresh|\nfetch(_(object|fields|field(_direct)?|assoc|all|array|row))?|rpl_(parse_enabled|probe|query_type)|\nrelease_savepoint|reap_async_query|real_(connect|escape_string|query)|more_results|multi_query|\nget_(charset|connection_stats|client_(stats|info|version)|cache_stats|warnings|links_stats|metadata)|\nmaster_query|bind_(param|result)|begin_transaction\n)\\b",
        "name": "support.function.mysqli.php"
      }, {
        "match": "(?i)\\bmysqlnd_memcache_(set|get_config)\\b",
        "name": "support.function.mysqlnd-memcache.php"
      }, {
        "match": "(?i)\\bmysqlnd_ms_(set_(user_pick_server|qos)|dump_servers|query_is_select|fabric_select_(shard|global)|get_(stats|last_(used_connection|gtid))|xa_(commit|rollback|gc|begin)|match_wild)\\b",
        "name": "support.function.mysqlnd-ms.php"
      }, {
        "match": "(?i)\\bmysqlnd_qc_(set_(storage_handler|cache_condition|is_select|user_handlers)|clear_cache|get_(normalized_query_trace_log|core_stats|cache_info|query_trace_log|available_handlers))\\b",
        "name": "support.function.mysqlnd-qc.php"
      }, {
        "match": "(?i)\\bmysqlnd_uh_(set_(statement|connection)_proxy|convert_to_mysqlnd)\\b",
        "name": "support.function.mysqlnd-uh.php"
      }, {
        "match": "(?xi)\\b\n(\nsyslog|socket_(set_(blocking|timeout)|get_status)|set(raw)?cookie|http_response_code|openlog|\nheaders_(list|sent)|header(_(register_callback|remove))?|checkdnsrr|closelog|inet_(ntop|pton)|ip2long|\nopenlog|dns_(check_record|get_(record|mx))|define_syslog_variables|(p)?fsockopen|long2ip|\nget(servby(name|port)|host(name|by(name(l)?|addr))|protoby(name|number)|mxrr)\n)\\b",
        "name": "support.function.network.php"
      }, {
        "match": "(?i)\\bnsapi_(virtual|response_headers|request_headers)\\b",
        "name": "support.function.nsapi.php"
      }, {
        "match": "(?xi)\\b\n(\noci(statementtype|setprefetch|serverversion|savelob(file)?|numcols|new(collection|cursor|descriptor)|nlogon|\ncolumn(scale|size|name|type(raw)?|isnull|precision)|coll(size|trim|assign(elem)?|append|getelem|max)|commit|\ncloselob|cancel|internaldebug|definebyname|plogon|parse|error|execute|fetch(statement|into)?|\nfree(statement|collection|cursor|desc)|write(temporarylob|lobtofile)|loadlob|log(on|off)|rowcount|rollback|\nresult|bindbyname)|\noci_(statement_type|set_(client_(info|identifier)|prefetch|edition|action|module_name)|server_version|\nnum_(fields|rows)|new_(connect|collection|cursor|descriptor)|connect|commit|client_version|close|cancel|\ninternal_debug|define_by_name|pconnect|password_change|parse|error|execute|bind_(array_)?by_name|\nfield_(scale|size|name|type(_raw)?|is_null|precision)|fetch(_(object|assoc|all|array|row))?|\nfree_(statement|descriptor)|lob_(copy|is_equal)|rollback|result|get_implicit_resultset)\n)\\b",
        "name": "support.function.oci8.php"
      }, {
        "match": "(?i)\\bopcache_(compile_file|invalidate|reset|get_(status|configuration))\\b",
        "name": "support.function.opcache.php"
      }, {
        "match": "(?xi)\\b\nopenssl_(\nsign|spki_(new|export(_challenge)?|verify)|seal|csr_(sign|new|export(_to_file)?|get_(subject|public_key))|\ncipher_iv_length|open|dh_compute_key|digest|decrypt|public_(decrypt|encrypt)|encrypt|error_string|\npkcs12_(export(_to_file)?|read)|pkcs7_(sign|decrypt|encrypt|verify)|verify|free_key|random_pseudo_bytes|\npkey_(new|export(_to_file)?|free|get_(details|public|private))|private_(decrypt|encrypt)|pbkdf2|\nget_((cipher|md)_methods|cert_locations|(public|private)key)|\nx509_(check_private_key|checkpurpose|parse|export(_to_file)?|fingerprint|free|read)\n)\\b",
        "name": "support.function.openssl.php"
      }, {
        "match": "(?xi)\\b\n(\noutput_(add_rewrite_var|reset_rewrite_vars)|flush|\nob_(start|clean|implicit_flush|end_(clean|flush)|flush|list_handlers|gzhandler|\nget_(status|contents|clean|flush|length|level))\n)\\b",
        "name": "support.function.output.php"
      }, {
        "match": "(?i)\\bpassword_(hash|needs_rehash|verify|get_info)\\b",
        "name": "support.function.password.php"
      }, {
        "match": "(?xi)\\b\npcntl_(\nstrerror|signal(_dispatch)?|sig(timedwait|procmask|waitinfo)|setpriority|errno|exec|fork|\nw(stopsig|termsig|if(stopped|signaled|exited))|wait(pid)?|alarm|getpriority|get_last_error\n)\\b",
        "name": "support.function.pcntl.php"
      }, {
        "match": "(?xi)\\b\npg_(\nsocket|send_(prepare|execute|query(_params)?)|set_(client_encoding|error_verbosity)|select|host|\nnum_(fields|rows)|consume_input|connection_(status|reset|busy)|connect(_poll)?|convert|copy_(from|to)|\nclient_encoding|close|cancel_query|tty|transaction_status|trace|insert|options|delete|dbname|untrace|\nunescape_bytea|update|pconnect|ping|port|put_line|parameter_status|prepare|version|query(_params)?|\nescape_(string|identifier|literal|bytea)|end_copy|execute|flush|free_result|last_(notice|error|oid)|\nfield_(size|num|name|type(_oid)?|table|is_null|prtlen)|affected_rows|result_(status|seek|error(_field)?)|\nfetch_(object|assoc|all(_columns)?|array|row|result)|get_(notify|pid|result)|meta_data|\nlo_(seek|close|create|tell|truncate|import|open|unlink|export|write|read(_all)?)|\n)\\b",
        "name": "support.function.pgsql.php"
      }, {
        "match": "(?i)\\b(virtual|getallheaders|apache_((get|set)env|note|child_terminate|lookup_uri|response_headers|reset_timeout|request_headers|get_(version|modules)))\\b",
        "name": "support.function.php_apache.php"
      }, {
        "match": "(?i)\\bdom_import_simplexml\\b",
        "name": "support.function.php_dom.php"
      }, {
        "match": "(?xi)\\b\nftp_(\nssl_connect|systype|site|size|set_option|nlist|nb_(continue|f?(put|get))|ch(dir|mod)|connect|cdup|close|\ndelete|put|pwd|pasv|exec|quit|f(put|get)|login|alloc|rename|raw(list)?|rmdir|get(_option)?|mdtm|mkdir\n)\\b",
        "name": "support.function.php_ftp.php"
      }, {
        "match": "(?xi)\\b\nimap_(\n(create|delete|list|rename|scan)(mailbox)?|status|sort|subscribe|set_quota|set(flag_full|acl)|search|savebody|\nnum_(recent|msg)|check|close|clearflag_full|thread|timeout|open|header(info)?|headers|append|alerts|reopen|\n8bit|unsubscribe|undelete|utf7_(decode|encode)|utf8|uid|ping|errors|expunge|qprint|gc|\nfetch(structure|header|text|mime|body)|fetch_overview|lsub|list(scan|subscribed)|last_error|\nrfc822_(parse_(headers|adrlist)|write_address)|get(subscribed|acl|mailboxes)|get_quota(root)?|\nmsgno|mime_header_decode|mail_(copy|compose|move)|mail|mailboxmsginfo|binary|body(struct)?|base64\n)\\b",
        "name": "support.function.php_imap.php"
      }, {
        "match": "(?xi)\\b\nmssql_(\nselect_db|num_(fields|rows)|next_result|connect|close|init|data_seek|pconnect|execute|query|\nfield_(seek|name|type|length)|fetch_(object|field|assoc|array|row|batch)|free_(statement|result)|\nrows_affected|result|guid_string|get_last_message|min_(error|message)_severity|bind\n)\\b",
        "name": "support.function.php_mssql.php"
      }, {
        "match": "(?xi)\\b\nodbc_(\nstatistics|specialcolumns|setoption|num_(fields|rows)|next_result|connect|columns|columnprivileges|commit|\ncursor|close(_all)?|tables|tableprivileges|do|data_source|pconnect|primarykeys|procedures|procedurecolumns|\nprepare|error(msg)?|exec(ute)?|field_(scale|num|name|type|precision|len)|foreignkeys|free_result|\nfetch_(into|object|array|row)|longreadlen|autocommit|rollback|result(_all)?|gettypeinfo|binmode\n)\\b",
        "name": "support.function.php_odbc.php"
      }, {
        "match": "(?i)\\bpreg_(split|quote|filter|last_error|replace(_callback)?|grep|match(_all)?)\\b",
        "name": "support.function.php_pcre.php"
      }, {
        "match": "(?i)\\b(spl_(classes|object_hash|autoload(_(call|unregister|extensions|functions|register))?)|class_(implements|uses|parents)|iterator_(count|to_array|apply))\\b",
        "name": "support.function.php_spl.php"
      }, {
        "match": "(?i)\\bzip_(close|open|entry_(name|compressionmethod|compressedsize|close|open|filesize|read)|read)\\b",
        "name": "support.function.php_zip.php"
      }, {
        "match": "(?xi)\\b\nposix_(\nstrerror|set(s|e?u|[ep]?g)id|ctermid|ttyname|times|isatty|initgroups|uname|errno|kill|access|\nget(sid|cwd|uid|pid|ppid|pwnam|pwuid|pgid|pgrp|euid|egid|login|rlimit|gid|grnam|groups|grgid)|\nget_last_error|mknod|mkfifo\n)\\b",
        "name": "support.function.posix.php"
      }, {
        "match": "(?i)\\bset(thread|proc)title\\b",
        "name": "support.function.proctitle.php"
      }, {
        "match": "(?xi)\\b\npspell_(\nstore_replacement|suggest|save_wordlist|new(_(config|personal))?|check|clear_session|\nconfig_(save_repl|create|ignore|(data|dict)_dir|personal|runtogether|repl|mode)|add_to_(session|personal)\n)\\b",
        "name": "support.function.pspell.php"
      }, {
        "match": "(?i)\\breadline(_(completion_function|clear_history|callback_(handler_(install|remove)|read_char)|info|on_new_line|write_history|list_history|add_history|redisplay|read_history))?\\b",
        "name": "support.function.readline.php"
      }, {
        "match": "(?i)\\brecode(_(string|file))?\\b",
        "name": "support.function.recode.php"
      }, {
        "match": "(?i)\\brrd(c_disconnect|_(create|tune|info|update|error|version|first|fetch|last(update)?|restore|graph|xport))\\b",
        "name": "support.function.rrd.php"
      }, {
        "match": "(?xi)\\b\n(\nshm_((get|has|remove|put)_var|detach|attach|remove)|sem_(acquire|release|remove|get)|ftok|\nmsg_((get|remove|set|stat)_queue|send|queue_exists|receive)\n)\\b",
        "name": "support.function.sem.php"
      }, {
        "match": "(?xi)\\b\nsession_(\nstatus|start|set_(save_handler|cookie_params)|save_path|name|commit|cache_(expire|limiter)|\nis_registered|id|destroy|decode|unset|unregister|encode|write_close|abort|reset|register(_shutdown)?|\nregenerate_id|get_cookie_params|module_name\n)\\b",
        "name": "support.function.session.php"
      }, {
        "match": "(?i)\\bshmop_(size|close|open|delete|write|read)\\b",
        "name": "support.function.shmop.php"
      }, {
        "match": "(?i)\\bsimplexml_(import_dom|load_(string|file))\\b",
        "name": "support.function.simplexml.php"
      }, {
        "match": "(?xi)\\b\n(\nsnmp(walk(oid)?|realwalk|get(next)?|set)|\nsnmp_(set_(valueretrieval|quick_print|enum_print|oid_(numeric_print|output_format))|read_mib|\nget_(valueretrieval|quick_print))|\nsnmp[23]_(set|walk|real_walk|get(next)?)\n)\\b",
        "name": "support.function.snmp.php"
      }, {
        "match": "(?i)\\b(is_soap_fault|use_soap_error_handler)\\b",
        "name": "support.function.soap.php"
      }, {
        "match": "(?xi)\\b\nsocket_(\nshutdown|strerror|send(to|msg)?|set_((non)?block|option)|select|connect|close|clear_error|bind|\ncreate(_(pair|listen))?|cmsg_space|import_stream|write|listen|last_error|accept|recv(from|msg)?|\nread|get(peer|sock)name|get_option\n)\\b",
        "name": "support.function.sockets.php"
      }, {
        "match": "(?xi)\\b\nsqlite_(\nsingle_query|seek|has_(more|prev)|num_(fields|rows)|next|changes|column|current|close|\ncreate_(aggregate|function)|open|unbuffered_query|udf_(decode|encode)_binary|popen|prev|\nescape_string|error_string|exec|valid|key|query|field_name|factory|\nfetch_(string|single|column_types|object|all|array)|lib(encoding|version)|\nlast_(insert_rowid|error)|array_query|rewind|busy_timeout\n)\\b",
        "name": "support.function.sqlite.php"
      }, {
        "match": "(?xi)\\b\nsqlsrv_(\nsend_stream_data|server_info|has_rows|num_(fields|rows)|next_result|connect|configure|commit|\nclient_info|close|cancel|prepare|errors|execute|query|field_metadata|fetch(_(array|object))?|\nfree_stmt|rows_affected|rollback|get_(config|field)|begin_transaction\n)\\b",
        "name": "support.function.sqlsrv.php"
      }, {
        "match": "(?xi)\\b\nstats_(\nharmonic_mean|covariance|standard_deviation|skew|\ncdf_(noncentral_(chisquare|f)|negative_binomial|chisquare|cauchy|t|uniform|poisson|exponential|f|weibull|\nlogistic|laplace|gamma|binomial|beta)|\nstat_(noncentral_t|correlation|innerproduct|independent_t|powersum|percentile|paired_t|gennch|binomial_coef)|\ndens_(normal|negative_binomial|chisquare|cauchy|t|pmf_(hypergeometric|poisson|binomial)|exponential|f|\nweibull|logistic|laplace|gamma|beta)|\nden_uniform|variance|kurtosis|absolute_deviation|\nrand_(setall|phrase_to_seeds|ranf|get_seeds|\ngen_(noncentral_[ft]|noncenral_chisquare|normal|chisquare|t|int|\ni(uniform|poisson|binomial(_negative)?)|exponential|f(uniform)?|gamma|beta))\n)\\b",
        "name": "support.function.stats.php"
      }, {
        "match": "(?xi)\\b\n(\nset_socket_blocking|\nstream_(socket_(shutdown|sendto|server|client|pair|enable_crypto|accept|recvfrom|get_name)|\nset_(chunk_size|timeout|(read|write)_buffer|blocking)|select|notification_callback|supports_lock|\ncontext_(set_(option|default|params)|create|get_(options|default|params))|copy_to_stream|is_local|\nencoding|filter_(append|prepend|register|remove)|wrapper_((un)?register|restore)|\nresolve_include_path|register_wrapper|get_(contents|transports|filters|wrappers|line|meta_data)|\nbucket_(new|prepend|append|make_writeable)\n)\n)\\b",
        "name": "support.function.streamsfuncs.php"
      }, {
        "match": "(?xi)\\b\n(\nmoney_format|md5(_file)?|metaphone|bin2hex|sscanf|sha1(_file)?|\nstr(str|c?spn|n(at)?(case)?cmp|chr|coll|(case)?cmp|to(upper|lower)|tok|tr|istr|pos|pbrk|len|rchr|ri?pos|rev)|\nstr_(getcsv|ireplace|pad|repeat|replace|rot13|shuffle|split|word_count)|\nstrip(c?slashes|os)|strip_tags|similar_text|soundex|substr(_(count|compare|replace))?|setlocale|\nhtml(specialchars(_decode)?|entities)|html_entity_decode|hex2bin|hebrev(c)?|number_format|nl2br|nl_langinfo|\nchop|chunk_split|chr|convert_(cyr_string|uu(decode|encode))|count_chars|crypt|crc32|trim|implode|ord|\nuc(first|words)|join|parse_str|print(f)?|echo|explode|v?[fs]?printf|quoted_printable_(decode|encode)|\nquotemeta|wordwrap|lcfirst|[lr]trim|localeconv|levenshtein|addc?slashes|get_html_translation_table\n)\\b",
        "name": "support.function.string.php"
      }, {
        "match": "(?xi)\\b\nsybase_(\nset_message_handler|select_db|num_(fields|rows)|connect|close|deadlock_retry_count|data_seek|\nunbuffered_query|pconnect|query|field_seek|fetch_(object|field|assoc|array|row)|free_result|\naffected_rows|result|get_last_message|min_(client|error|message|server)_severity\n)\\b",
        "name": "support.function.sybase.php"
      }, {
        "match": "(?i)\\b(taint|is_tainted|untaint)\\b",
        "name": "support.function.taint.php"
      }, {
        "match": "(?xi)\\b\n(\ntidy_((get|set)opt|set_encoding|save_config|config_count|clean_repair|is_(xhtml|xml)|diagnose|\n(access|error|warning)_count|load_config|reset_config|(parse|repair)_(string|file)|\nget_(status|html(_ver)?|head|config|output|opt_doc|root|release|body))|\nob_tidyhandler\n)\\b",
        "name": "support.function.tidy.php"
      }, {
        "match": "(?i)\\btoken_(name|get_all)\\b",
        "name": "support.function.tokenizer.php"
      }, {
        "match": "(?xi)\\b\ntrader_(\nstoch(f|r|rsi)?|stddev|sin(h)?|sum|sub|set_(compat|unstable_period)|sqrt|sar(ext)?|sma|\nht_(sine|trend(line|mode)|dc(period|phase)|phasor)|natr|cci|cos(h)?|correl|\ncdl(shootingstar|shortline|sticksandwich|stalledpattern|spinningtop|separatinglines|\nhikkake(mod)?|highwave|homingpigeon|hangingman|harami(cross)?|hammer|concealbabyswall|\ncounterattack|closingmarubozu|thrusting|tasukigap|takuri|tristar|inneck|invertedhammer|\nidentical3crows|2crows|onneck|doji(star)?|darkcloudcover|dragonflydoji|unique3river|\nupsidegap2crows|3(starsinsouth|inside|outside|whitesoldiers|linestrike|blackcrows)|\npiercing|engulfing|evening(doji)?star|kicking(bylength)?|longline|longleggeddoji|\nladderbottom|advanceblock|abandonedbaby|risefall3methods|rickshawman|gapsidesidewhite|\ngravestonedoji|xsidegap3methods|morning(doji)?star|mathold|matchinglow|marubozu|\nbelthold|breakaway)|\nceil|cmo|tsf|typprice|t3|tema|tan(h)?|trix|trima|trange|obv|div|dema|dx|ultosc|ppo|\nplus_d[im]|errno|exp|ema|var|kama|floor|wclprice|willr|wma|ln|log10|bop|beta|bbands|\nlinearreg(_(slope|intercept|angle))?|asin|acos|atan|atr|adosc|ad|add|adx(r)?|apo|avgprice|\naroon(osc)?|rsi|roc|rocp|rocr(100)?|get_(compat|unstable_period)|min(index)?|minus_d[im]|\nminmax(index)?|mid(point|price)|mom|mult|medprice|mfi|macd(ext|fix)?|mavp|max(index)?|ma(ma)?\n)\\b",
        "name": "support.function.trader.php"
      }, {
        "match": "(?i)\\buopz_(copy|compose|implement|overload|delete|undefine|extend|function|flags|restore|rename|redefine|backup)\\b",
        "name": "support.function.uopz.php"
      }, {
        "match": "(?i)\\b(http_build_query|(raw)?url(decode|encode)|parse_url|get_(headers|meta_tags)|base64_(decode|encode))\\b",
        "name": "support.function.url.php"
      }, {
        "match": "(?xi)\\b\n(\nstrval|settype|serialize|(bool|double|float)val|debug_zval_dump|intval|import_request_variables|isset|\nis_(scalar|string|null|numeric|callable|int(eger)?|object|double|float|long|array|resource|real|bool)|\nunset|unserialize|print_r|empty|var_(dump|export)|gettype|get_(defined_vars|resource_type)\n)\\b",
        "name": "support.function.var.php"
      }, {
        "match": "(?i)\\bwddx_(serialize_(value|vars)|deserialize|packet_(start|end)|add_vars)\\b",
        "name": "support.function.wddx.php"
      }, {
        "match": "(?i)\\bxhprof_(sample_)?(disable|enable)\\b",
        "name": "support.function.xhprof.php"
      }, {
        "match": "(?xi)\n\\b\n(\nutf8_(decode|encode)|\nxml_(set_((notation|(end|start)_namespace|unparsed_entity)_decl_handler|\n(character_data|default|element|external_entity_ref|processing_instruction)_handler|object)|\nparse(_into_struct)?|parser_((get|set)_option|create(_ns)?|free)|error_string|\nget_(current_((column|line)_number|byte_index)|error_code))\n)\\b",
        "name": "support.function.xml.php"
      }, {
        "match": "(?xi)\\b\nxmlrpc_(\nserver_(call_method|create|destroy|add_introspection_data|register_(introspection_callback|method))|\nis_fault|decode(_request)?|parse_method_descriptions|encode(_request)?|(get|set)_type\n)\\b",
        "name": "support.function.xmlrpc.php"
      }, {
        "match": "(?xi)\\b\nxmlwriter_(\n(end|start|write)_(comment|cdata|dtd(_(attlist|entity|element))?|document|pi|attribute|element)|\n(start|write)_(attribute|element)_ns|write_raw|set_indent(_string)?|text|output_memory|open_(memory|uri)|\nfull_end_element|flush|\n)\\b",
        "name": "support.function.xmlwriter.php"
      }, {
        "match": "(?xi)\\b\n(\nzlib_(decode|encode|get_coding_type)|readgzfile|\ngz(seek|compress|close|tell|inflate|open|decode|deflate|uncompress|puts|passthru|encode|eof|file|\nwrite|rewind|read|getc|getss?)\n)\\b",
        "name": "support.function.zlib.php"
      }, {
        "match": "(?i)\\bis_int(eger)?\\b",
        "name": "support.function.alias.php"
      }]
    },
    "switch_statement": {
      "patterns": [{
        "match": "\\s+(?=switch\\b)"
      }, {
        "begin": "\\bswitch\\b(?!\\s*\\(.*\\)\\s*:)",
        "beginCaptures": {
          "0": {
            "name": "keyword.control.switch.php"
          }
        },
        "end": "}|(?=\\?>)",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.section.switch-block.end.bracket.curly.php"
          }
        },
        "name": "meta.switch-statement.php",
        "patterns": [{
          "begin": "\\(",
          "beginCaptures": {
            "0": {
              "name": "punctuation.definition.switch-expression.begin.bracket.round.php"
            }
          },
          "end": "\\)|(?=\\?>)",
          "endCaptures": {
            "0": {
              "name": "punctuation.definition.switch-expression.end.bracket.round.php"
            }
          },
          "patterns": [{
            "include": "$self"
          }]
        }, {
          "begin": "{",
          "beginCaptures": {
            "0": {
              "name": "punctuation.definition.section.switch-block.begin.bracket.curly.php"
            }
          },
          "end": "(?=}|\\?>)",
          "patterns": [{
            "include": "$self"
          }]
        }]
      }]
    },
    "ternary_expression": {
      "begin": "\\?",
      "beginCaptures": {
        "0": {
          "name": "keyword.operator.ternary.php"
        }
      },
      "end": "(?<!:):(?!:)",
      "endCaptures": {
        "0": {
          "name": "keyword.operator.ternary.php"
        }
      },
      "patterns": [{
        "captures": {
          "1": {
            "patterns": [{
              "include": "$self"
            }]
          }
        },
        "match": "(?i)^\\s*([a-z_\\x{7f}-\\x{10ffff}][a-z0-9_\\x{7f}-\\x{10ffff}]*)\\s*(?=:(?!:))"
      }, {
        "include": "$self"
      }]
    },
    "ternary_shorthand": {
      "match": "\\?:",
      "name": "keyword.operator.ternary.php"
    },
    "use-inner": {
      "patterns": [{
        "include": "#comments"
      }, {
        "begin": "(?i)\\b(as)\\s+",
        "beginCaptures": {
          "1": {
            "name": "keyword.other.use-as.php"
          }
        },
        "end": "(?i)[a-z_\\x{7f}-\\x{10ffff}][a-z0-9_\\x{7f}-\\x{10ffff}]*",
        "endCaptures": {
          "0": {
            "name": "entity.other.alias.php"
          }
        }
      }, {
        "include": "#class-name"
      }, {
        "match": ",",
        "name": "punctuation.separator.delimiter.php"
      }]
    },
    "var_basic": {
      "patterns": [{
        "captures": {
          "1": {
            "name": "punctuation.definition.variable.php"
          }
        },
        "match": "(?i)(\\$+)[a-z_\\x{7f}-\\x{10ffff}][a-z0-9_\\x{7f}-\\x{10ffff}]*",
        "name": "variable.other.php"
      }]
    },
    "var_global": {
      "captures": {
        "1": {
          "name": "punctuation.definition.variable.php"
        }
      },
      "match": "(\\$)((_(COOKIE|FILES|GET|POST|REQUEST))|arg(v|c))\\b",
      "name": "variable.other.global.php"
    },
    "var_global_safer": {
      "captures": {
        "1": {
          "name": "punctuation.definition.variable.php"
        }
      },
      "match": "(\\$)((GLOBALS|_(ENV|SERVER|SESSION)))",
      "name": "variable.other.global.safer.php"
    },
    "var_language": {
      "captures": {
        "1": {
          "name": "punctuation.definition.variable.php"
        }
      },
      "match": "(\\$)this\\b",
      "name": "variable.language.this.php"
    },
    "variable-name": {
      "patterns": [{
        "include": "#var_global"
      }, {
        "include": "#var_global_safer"
      }, {
        "captures": {
          "1": {
            "name": "variable.other.php"
          },
          "2": {
            "name": "punctuation.definition.variable.php"
          },
          "4": {
            "name": "keyword.operator.class.php"
          },
          "5": {
            "name": "variable.other.property.php"
          },
          "6": {
            "name": "punctuation.section.array.begin.php"
          },
          "7": {
            "name": "constant.numeric.index.php"
          },
          "8": {
            "name": "variable.other.index.php"
          },
          "9": {
            "name": "punctuation.definition.variable.php"
          },
          "10": {
            "name": "string.unquoted.index.php"
          },
          "11": {
            "name": "punctuation.section.array.end.php"
          }
        },
        "match": "(?xi)\n((\\$)(?<name>[a-z_\\x{7f}-\\x{10ffff}][a-z0-9_\\x{7f}-\\x{10ffff}]*))\\s*\n(?:\n(\\??->)\\s*(\\g<name>)\n|\n(\\[)(?:(\\d+)|((\\$)\\g<name>)|([a-z_\\x{7f}-\\x{10ffff}][a-z0-9_\\x{7f}-\\x{10ffff}]*))(\\])\n)?"
      }, {
        "captures": {
          "1": {
            "name": "variable.other.php"
          },
          "2": {
            "name": "punctuation.definition.variable.php"
          },
          "4": {
            "name": "punctuation.definition.variable.php"
          }
        },
        "match": "(?i)((\\${)(?<name>[a-z_\\x{7f}-\\x{10ffff}][a-z0-9_\\x{7f}-\\x{10ffff}]*)(}))"
      }]
    },
    "variables": {
      "patterns": [{
        "include": "#var_language"
      }, {
        "include": "#var_global"
      }, {
        "include": "#var_global_safer"
      }, {
        "include": "#var_basic"
      }, {
        "begin": "\\${(?=.*?})",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.variable.php"
          }
        },
        "end": "}",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.variable.php"
          }
        },
        "patterns": [{
          "include": "$self"
        }]
      }]
    }
  },
  "scopeName": "source.php",
  "embeddedLangs": ["html", "xml", "sql", "javascript", "json", "css"]
});
var php = [...html, ...xml, ...sql, ...javascript, ...json, ...css, lang];

export {
  php
};
//# sourceMappingURL=chunk-KY4TFME2.js.map
