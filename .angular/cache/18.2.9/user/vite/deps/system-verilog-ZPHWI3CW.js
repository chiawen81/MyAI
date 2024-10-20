import "./chunk-WDMUDEB6.js";

// node_modules/shiki/dist/langs/system-verilog.mjs
var lang = Object.freeze({
  "displayName": "SystemVerilog",
  "fileTypes": ["v", "vh", "sv", "svh"],
  "name": "system-verilog",
  "patterns": [{
    "include": "#comments"
  }, {
    "include": "#strings"
  }, {
    "include": "#typedef-enum-struct-union"
  }, {
    "include": "#typedef"
  }, {
    "include": "#functions"
  }, {
    "include": "#keywords"
  }, {
    "include": "#tables"
  }, {
    "include": "#function-task"
  }, {
    "include": "#module-declaration"
  }, {
    "include": "#class-declaration"
  }, {
    "include": "#enum-struct-union"
  }, {
    "include": "#sequence"
  }, {
    "include": "#all-types"
  }, {
    "include": "#module-parameters"
  }, {
    "include": "#module-no-parameters"
  }, {
    "include": "#port-net-parameter"
  }, {
    "include": "#system-tf"
  }, {
    "include": "#assertion"
  }, {
    "include": "#bind-directive"
  }, {
    "include": "#cast-operator"
  }, {
    "include": "#storage-scope"
  }, {
    "include": "#attributes"
  }, {
    "include": "#imports"
  }, {
    "include": "#operators"
  }, {
    "include": "#constants"
  }, {
    "include": "#identifiers"
  }, {
    "include": "#selects"
  }],
  "repository": {
    "all-types": {
      "patterns": [{
        "include": "#built-ins"
      }, {
        "include": "#modifiers"
      }]
    },
    "assertion": {
      "captures": {
        "1": {
          "name": "entity.name.goto-label.php"
        },
        "2": {
          "name": "keyword.operator.systemverilog"
        },
        "3": {
          "name": "keyword.sva.systemverilog"
        }
      },
      "match": "\\b([a-zA-Z_][a-zA-Z0-9_$]*)[ \\t\\r\\n]*(:)[ \\t\\r\\n]*(assert|assume|cover|restrict)\\b"
    },
    "attributes": {
      "begin": "(?<!@[ \\t\\r\\n]?)\\(\\*",
      "beginCaptures": {
        "0": {
          "name": "punctuation.attribute.rounds.begin"
        }
      },
      "end": "\\*\\)",
      "endCaptures": {
        "0": {
          "name": "punctuation.attribute.rounds.end"
        }
      },
      "name": "meta.attribute.systemverilog",
      "patterns": [{
        "captures": {
          "1": {
            "name": "keyword.control.systemverilog"
          },
          "2": {
            "name": "keyword.operator.assignment.systemverilog"
          }
        },
        "match": "([a-zA-Z_][a-zA-Z0-9_$]*)(?:[ \\t\\r\\n]*(=)[ \\t\\r\\n]*)?"
      }, {
        "include": "#constants"
      }, {
        "include": "#strings"
      }]
    },
    "base-grammar": {
      "patterns": [{
        "include": "#all-types"
      }, {
        "include": "#comments"
      }, {
        "include": "#operators"
      }, {
        "include": "#constants"
      }, {
        "include": "#strings"
      }, {
        "captures": {
          "1": {
            "name": "storage.type.interface.systemverilog"
          }
        },
        "match": "[ \\t\\r\\n]*\\b([a-zA-Z_][a-zA-Z0-9_$]*)[ \\t\\r\\n]+[a-zA-Z_][a-zA-Z0-9_,= \\t\\n]*"
      }, {
        "include": "#storage-scope"
      }]
    },
    "bind-directive": {
      "captures": {
        "1": {
          "name": "keyword.control.systemverilog"
        },
        "2": {
          "name": "entity.name.type.module.systemverilog"
        }
      },
      "match": "[ \\t\\r\\n]*\\b(bind)[ \\t\\r\\n]+([a-zA-Z_][a-zA-Z0-9_$\\.]*)\\b",
      "name": "meta.definition.systemverilog"
    },
    "built-ins": {
      "patterns": [{
        "match": "[ \\t\\r\\n]*\\b(bit|logic|reg)\\b",
        "name": "storage.type.vector.systemverilog"
      }, {
        "match": "[ \\t\\r\\n]*\\b(byte|shortint|int|longint|integer|time|genvar)\\b",
        "name": "storage.type.atom.systemverilog"
      }, {
        "match": "[ \\t\\r\\n]*\\b(shortreal|real|realtime)\\b",
        "name": "storage.type.notint.systemverilog"
      }, {
        "match": "[ \\t\\r\\n]*\\b(supply[01]|tri|triand|trior|trireg|tri[01]|uwire|wire|wand|wor)\\b",
        "name": "storage.type.net.systemverilog"
      }, {
        "match": "[ \\t\\r\\n]*\\b(genvar|var|void|signed|unsigned|string|const|process)\\b",
        "name": "storage.type.built-in.systemverilog"
      }, {
        "match": "[ \\t\\r\\n]*\\b(uvm_(?:root|transaction|component|monitor|driver|test|env|object|agent|sequence_base|sequence_item|sequence_state|sequencer|sequencer_base|sequence|component_registry|analysis_imp|analysis_port|analysis_export|config_db|active_passive_enum|phase|verbosity|tlm_analysis_fifo|tlm_fifo|report_server|objection|recorder|domain|reg_field|reg_block|reg|bitstream_t|radix_enum|printer|packer|comparer|scope_stack))\\b",
        "name": "storage.type.uvm.systemverilog"
      }]
    },
    "cast-operator": {
      "captures": {
        "1": {
          "patterns": [{
            "include": "#built-ins"
          }, {
            "include": "#constants"
          }, {
            "match": "[a-zA-Z_][a-zA-Z0-9_$]*",
            "name": "storage.type.user-defined.systemverilog"
          }]
        },
        "2": {
          "name": "keyword.operator.cast.systemverilog"
        }
      },
      "match": "[ \\t\\r\\n]*([0-9]+|[a-zA-Z_][a-zA-Z0-9_$]*)(')(?=\\()",
      "name": "meta.cast.systemverilog"
    },
    "class-declaration": {
      "begin": "[ \\t\\r\\n]*\\b(virtual[ \\t\\r\\n]+)?(class)(?:[ \\t\\r\\n]+(static|automatic))?[ \\t\\r\\n]+([a-zA-Z_][a-zA-Z0-9_$:]*)(?:[ \\t\\r\\n]+(extends|implements)[ \\t\\r\\n]+([a-zA-Z_][a-zA-Z0-9_$:]*))?",
      "beginCaptures": {
        "1": {
          "name": "storage.modifier.systemverilog"
        },
        "2": {
          "name": "storage.type.class.systemverilog"
        },
        "3": {
          "name": "storage.modifier.systemverilog"
        },
        "4": {
          "name": "entity.name.type.class.systemverilog"
        },
        "5": {
          "name": "keyword.control.systemverilog"
        },
        "6": {
          "name": "entity.name.type.class.systemverilog"
        }
      },
      "end": ";",
      "endCaptures": {
        "0": {
          "name": "punctuation.definition.class.end.systemverilog"
        }
      },
      "name": "meta.class.systemverilog",
      "patterns": [{
        "captures": {
          "1": {
            "name": "keyword.control.systemverilog"
          },
          "2": {
            "name": "entity.name.type.class.systemverilog"
          },
          "3": {
            "name": "entity.name.type.class.systemverilog"
          }
        },
        "match": "[ \\t\\r\\n]+\\b(extends|implements)[ \\t\\r\\n]+([a-zA-Z_][a-zA-Z0-9_$:]*)(?:[ \\t\\r\\n]*,[ \\t\\r\\n]*([a-zA-Z_][a-zA-Z0-9_$:]*))*"
      }, {
        "captures": {
          "1": {
            "name": "storage.type.userdefined.systemverilog"
          },
          "2": {
            "name": "keyword.operator.param.systemverilog"
          }
        },
        "match": "[ \\t\\r\\n]+\\b([a-zA-Z_][a-zA-Z0-9_$]*)[ \\t\\r\\n]*(#)\\(",
        "name": "meta.typedef.class.systemverilog"
      }, {
        "include": "#port-net-parameter"
      }, {
        "include": "#base-grammar"
      }, {
        "include": "#module-binding"
      }, {
        "include": "#identifiers"
      }]
    },
    "comments": {
      "patterns": [{
        "begin": "/\\*",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.comment.systemverilog"
          }
        },
        "end": "\\*/",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.comment.systemverilog"
          }
        },
        "name": "comment.block.systemverilog",
        "patterns": [{
          "include": "#fixme-todo"
        }]
      }, {
        "begin": "//",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.comment.systemverilog"
          }
        },
        "end": "$\\n?",
        "name": "comment.line.double-slash.systemverilog",
        "patterns": [{
          "include": "#fixme-todo"
        }]
      }]
    },
    "compiler-directives": {
      "name": "meta.preprocessor.systemverilog",
      "patterns": [{
        "captures": {
          "1": {
            "name": "punctuation.definition.directive.systemverilog"
          },
          "2": {
            "name": "string.regexp.systemverilog"
          }
        },
        "match": "(`)(else|endif|endcelldefine|celldefine|nounconnected_drive|resetall|undefineall|end_keywords|__FILE__|__LINE__)\\b"
      }, {
        "captures": {
          "1": {
            "name": "punctuation.definition.directive.systemverilog"
          },
          "2": {
            "name": "string.regexp.systemverilog"
          },
          "3": {
            "name": "variable.other.constant.preprocessor.systemverilog"
          }
        },
        "match": "(`)(ifdef|ifndef|elsif|define|undef|pragma)[ \\t\\r\\n]+([a-zA-Z_][a-zA-Z0-9_$]*)\\b"
      }, {
        "captures": {
          "1": {
            "name": "punctuation.definition.directive.systemverilog"
          },
          "2": {
            "name": "string.regexp.systemverilog"
          }
        },
        "match": "(`)(include|timescale|default_nettype|unconnected_drive|line|begin_keywords)\\b"
      }, {
        "begin": "(`)(protected)\\b",
        "beginCaptures": {
          "1": {
            "name": "punctuation.definition.directive.systemverilog"
          },
          "2": {
            "name": "string.regexp.systemverilog"
          }
        },
        "end": "(`)(endprotected)\\b",
        "endCaptures": {
          "1": {
            "name": "punctuation.definition.directive.systemverilog"
          },
          "2": {
            "name": "string.regexp.systemverilog"
          }
        },
        "name": "meta.crypto.systemverilog"
      }, {
        "captures": {
          "1": {
            "name": "punctuation.definition.directive.systemverilog"
          },
          "2": {
            "name": "variable.other.constant.preprocessor.systemverilog"
          }
        },
        "match": "(`)([a-zA-Z_][a-zA-Z0-9_$]*)\\b"
      }]
    },
    "constants": {
      "patterns": [{
        "match": "(\\b[1-9][0-9_]*)?'([sS]?[bB][ \\t\\r\\n]*[0-1xXzZ?][0-1_xXzZ?]*|[sS]?[oO][ \\t\\r\\n]*[0-7xXzZ?][0-7_xXzZ?]*|[sS]?[dD][ \\t\\r\\n]*[0-9xXzZ?][0-9_xXzZ?]*|[sS]?[hH][ \\t\\r\\n]*[0-9a-fA-FxXzZ?][0-9a-fA-F_xXzZ?]*)((e|E)(\\+|-)?[0-9]+)?(?!'|\\w)",
        "name": "constant.numeric.systemverilog"
      }, {
        "match": "'[01xXzZ]",
        "name": "constant.numeric.bit.systemverilog"
      }, {
        "match": "\\b(?:\\d[\\d_\\.]*(?<!\\.)(?:e|E)(?:\\+|-)?[0-9]+)\\b",
        "name": "constant.numeric.exp.systemverilog"
      }, {
        "match": "\\b(?:\\d[\\d_\\.]*(?!(?:[\\d\\.]|[ \\t\\r\\n]*(?:e|E|fs|ps|ns|us|ms|s))))\\b",
        "name": "constant.numeric.decimal.systemverilog"
      }, {
        "match": "\\b(?:\\d[\\d\\.]*[ \\t\\r\\n]*(?:fs|ps|ns|us|ms|s))\\b",
        "name": "constant.numeric.time.systemverilog"
      }, {
        "include": "#compiler-directives"
      }, {
        "match": "\\b(?:this|super|null)\\b",
        "name": "constant.language.systemverilog"
      }, {
        "match": "\\b([A-Z][A-Z0-9_]*)\\b",
        "name": "constant.other.net.systemverilog"
      }, {
        "match": "\\b(?<!\\.)([A-Z0-9_]+)(?!\\.)\\b",
        "name": "constant.numeric.parameter.uppercase.systemverilog"
      }, {
        "match": "\\.\\*",
        "name": "keyword.operator.quantifier.regexp"
      }]
    },
    "enum-struct-union": {
      "begin": "[ \\t\\r\\n]*\\b(enum|struct|union(?:[ \\t\\r\\n]+tagged)?|class|interface[ \\t\\r\\n]+class)(?:[ \\t\\r\\n]+(?!packed|signed|unsigned)([a-zA-Z_][a-zA-Z0-9_$]*)?(?:[ \\t\\r\\n]*(\\[[a-zA-Z0-9_:$\\.\\-\\+\\*/%`' \\t\\r\\n\\[\\]\\(\\)]*\\])?))?(?:[ \\t\\r\\n]+(packed))?(?:[ \\t\\r\\n]+(signed|unsigned))?(?=[ \\t\\r\\n]*(?:{|$))",
      "beginCaptures": {
        "1": {
          "name": "keyword.control.systemverilog"
        },
        "2": {
          "patterns": [{
            "include": "#built-ins"
          }]
        },
        "3": {
          "patterns": [{
            "include": "#selects"
          }]
        },
        "4": {
          "name": "storage.modifier.systemverilog"
        },
        "5": {
          "name": "storage.modifier.systemverilog"
        }
      },
      "end": "(?<=})[ \\t\\r\\n]*([a-zA-Z_][a-zA-Z0-9_$]*|(?<=^|[ \\t\\r\\n])\\\\[!-~]+(?=$|[ \\t\\r\\n]))(?:[ \\t\\r\\n]*(\\[[a-zA-Z0-9_:$\\.\\-\\+\\*/%`' \\t\\r\\n\\[\\]\\(\\)]*\\])?)[ \\t\\r\\n]*[,;]",
      "endCaptures": {
        "1": {
          "patterns": [{
            "include": "#identifiers"
          }]
        },
        "2": {
          "patterns": [{
            "include": "#selects"
          }]
        }
      },
      "name": "meta.enum-struct-union.systemverilog",
      "patterns": [{
        "include": "#keywords"
      }, {
        "include": "#base-grammar"
      }, {
        "include": "#identifiers"
      }]
    },
    "fixme-todo": {
      "patterns": [{
        "match": "(?i:fixme)",
        "name": "invalid.broken.fixme.systemverilog"
      }, {
        "match": "(?i:todo)",
        "name": "invalid.unimplemented.todo.systemverilog"
      }]
    },
    "function-task": {
      "begin": "[ \\t\\r\\n]*(?:\\b(virtual)[ \\t\\r\\n]+)?(?:\\b(function|task)\\b)(?:[ \\t\\r\\n]+\\b(static|automatic)\\b)?",
      "beginCaptures": {
        "1": {
          "name": "storage.modifier.systemverilog"
        },
        "2": {
          "name": "storage.type.function.systemverilog"
        },
        "3": {
          "name": "storage.modifier.systemverilog"
        }
      },
      "end": ";",
      "endCaptures": {
        "0": {
          "name": "punctuation.definition.function.end.systemverilog"
        }
      },
      "name": "meta.function.systemverilog",
      "patterns": [{
        "captures": {
          "1": {
            "name": "support.type.scope.systemverilog"
          },
          "2": {
            "name": "keyword.operator.scope.systemverilog"
          },
          "3": {
            "patterns": [{
              "include": "#built-ins"
            }, {
              "match": "[a-zA-Z_][a-zA-Z0-9_$]*",
              "name": "storage.type.user-defined.systemverilog"
            }]
          },
          "4": {
            "patterns": [{
              "include": "#modifiers"
            }]
          },
          "5": {
            "patterns": [{
              "include": "#selects"
            }]
          },
          "6": {
            "name": "entity.name.function.systemverilog"
          }
        },
        "match": "[ \\t\\r\\n]*(?:\\b([a-zA-Z_][a-zA-Z0-9_$]*)(::))?([a-zA-Z_][a-zA-Z0-9_$]*\\b[ \\t\\r\\n]+)?(?:\\b(signed|unsigned)\\b[ \\t\\r\\n]*)?(?:(\\[[a-zA-Z0-9_:$\\.\\-\\+\\*/%`' \\t\\r\\n\\[\\]\\(\\)]*\\])[ \\t\\r\\n]*)?(?:\\b([a-zA-Z_][a-zA-Z0-9_$]*)\\b[ \\t\\r\\n]*)(?=\\(|;)"
      }, {
        "include": "#keywords"
      }, {
        "include": "#port-net-parameter"
      }, {
        "include": "#base-grammar"
      }, {
        "include": "#identifiers"
      }]
    },
    "functions": {
      "match": "[ \\t\\r\\n]*\\b(?!while|for|if|iff|else|case|casex|casez)([a-zA-Z_][a-zA-Z0-9_$]*)(?=[ \\t\\r\\n]*\\()",
      "name": "entity.name.function.systemverilog"
    },
    "identifiers": {
      "patterns": [{
        "match": "\\b[a-zA-Z_][a-zA-Z0-9_$]*\\b",
        "name": "variable.other.identifier.systemverilog"
      }, {
        "match": "(?<=^|[ \\t\\r\\n])\\\\[!-~]+(?=$|[ \\t\\r\\n])",
        "name": "string.regexp.identifier.systemverilog"
      }]
    },
    "imports": {
      "captures": {
        "1": {
          "name": "keyword.control.systemverilog"
        },
        "2": {
          "name": "support.type.scope.systemverilog"
        },
        "3": {
          "name": "keyword.operator.scope.systemverilog"
        },
        "4": {
          "patterns": [{
            "include": "#operators"
          }, {
            "include": "#identifiers"
          }]
        }
      },
      "match": "[ \\t\\r\\n]*\\b(import|export)[ \\t\\r\\n]+([a-zA-Z_][a-zA-Z0-9_$]*|\\*)[ \\t\\r\\n]*(::)[ \\t\\r\\n]*([a-zA-Z_][a-zA-Z0-9_$]*|\\*)[ \\t\\r\\n]*(,|;)",
      "name": "meta.import.systemverilog"
    },
    "keywords": {
      "patterns": [{
        "captures": {
          "1": {
            "name": "keyword.other.systemverilog"
          }
        },
        "match": "[ \\t\\r\\n]*\\b(edge|negedge|posedge|cell|config|defparam|design|disable|endgenerate|endspecify|event|generate|ifnone|incdir|instance|liblist|library|noshowcancelled|pulsestyle_onevent|pulsestyle_ondetect|scalared|showcancelled|specify|specparam|use|vectored)\\b"
      }, {
        "include": "#sv-control"
      }, {
        "include": "#sv-control-begin"
      }, {
        "include": "#sv-control-end"
      }, {
        "include": "#sv-definition"
      }, {
        "include": "#sv-cover-cross"
      }, {
        "include": "#sv-std"
      }, {
        "include": "#sv-option"
      }, {
        "include": "#sv-local"
      }, {
        "include": "#sv-rand"
      }]
    },
    "modifiers": {
      "match": "[ \\t\\r\\n]*\\b(?:(?:un)?signed|packed|small|medium|large|supply[01]|strong[01]|pull[01]|weak[01]|highz[01])\\b",
      "name": "storage.modifier.systemverilog"
    },
    "module-binding": {
      "begin": "\\.([a-zA-Z_][a-zA-Z0-9_$]*)[ \\t\\r\\n]*\\(",
      "beginCaptures": {
        "1": {
          "name": "support.function.port.systemverilog"
        }
      },
      "end": "\\),?",
      "name": "meta.port.binding.systemverilog",
      "patterns": [{
        "include": "#constants"
      }, {
        "include": "#comments"
      }, {
        "include": "#operators"
      }, {
        "include": "#strings"
      }, {
        "include": "#constants"
      }, {
        "include": "#storage-scope"
      }, {
        "include": "#cast-operator"
      }, {
        "include": "#system-tf"
      }, {
        "match": "\\bvirtual\\b",
        "name": "storage.modifier.systemverilog"
      }, {
        "include": "#identifiers"
      }]
    },
    "module-declaration": {
      "begin": "[ \\t\\r\\n]*\\b((?:macro)?module|interface|program|package|modport)[ \\t\\r\\n]+(?:(static|automatic)[ \\t\\r\\n]+)?([a-zA-Z_][a-zA-Z0-9_$]*)\\b",
      "beginCaptures": {
        "1": {
          "name": "keyword.control.systemverilog"
        },
        "2": {
          "name": "storage.modifier.systemverilog"
        },
        "3": {
          "name": "entity.name.type.module.systemverilog"
        }
      },
      "end": ";",
      "endCaptures": {
        "0": {
          "name": "punctuation.definition.module.end.systemverilog"
        }
      },
      "name": "meta.module.systemverilog",
      "patterns": [{
        "include": "#parameters"
      }, {
        "include": "#port-net-parameter"
      }, {
        "include": "#imports"
      }, {
        "include": "#base-grammar"
      }, {
        "include": "#system-tf"
      }, {
        "include": "#identifiers"
      }]
    },
    "module-no-parameters": {
      "begin": "[ \\t\\r\\n]*\\b(?:(bind|pullup|pulldown)[ \\t\\r\\n]+(?:([a-zA-Z_][a-zA-Z0-9_$\\.]*)[ \\t\\r\\n]+)?)?((?:\\b(?:and|nand|or|nor|xor|xnor|buf|not|bufif[01]|notif[01]|r?[npc]mos|r?tran|r?tranif[01])\\b|[a-zA-Z_][a-zA-Z0-9_$]*))[ \\t\\r\\n]+(?!intersect|and|or|throughout|within)([a-zA-Z_][a-zA-Z0-9_$]*)(?:[ \\t\\r\\n]*(\\[[a-zA-Z0-9_:$\\.\\-\\+\\*/%`' \\t\\r\\n\\[\\]\\(\\)]*\\])?)[ \\t\\r\\n]*(?=\\(|$)(?!;)",
      "beginCaptures": {
        "1": {
          "name": "keyword.control.systemverilog"
        },
        "2": {
          "name": "entity.name.type.module.systemverilog"
        },
        "3": {
          "name": "entity.name.type.module.systemverilog"
        },
        "4": {
          "name": "variable.other.module.systemverilog"
        },
        "5": {
          "patterns": [{
            "include": "#selects"
          }]
        }
      },
      "end": "\\)(?:[ \\t\\r\\n]*(;))?",
      "endCaptures": {
        "1": {
          "name": "punctuation.module.instantiation.end.systemverilog"
        }
      },
      "name": "meta.module.no_parameters.systemverilog",
      "patterns": [{
        "include": "#module-binding"
      }, {
        "include": "#comments"
      }, {
        "include": "#operators"
      }, {
        "include": "#constants"
      }, {
        "include": "#strings"
      }, {
        "include": "#port-net-parameter"
      }, {
        "match": "\\b([a-zA-Z_][a-zA-Z0-9_$]*)\\b(?=[ \\t\\r\\n]*(\\(|$))",
        "name": "variable.other.module.systemverilog"
      }, {
        "include": "#identifiers"
      }]
    },
    "module-parameters": {
      "begin": "[ \\t\\r\\n]*\\b(?:(bind)[ \\t\\r\\n]+([a-zA-Z_][a-zA-Z0-9_$\\.]*)[ \\t\\r\\n]+)?([a-zA-Z_][a-zA-Z0-9_$]*)[ \\t\\r\\n]+(?!intersect|and|or|throughout|within)(?=#[^#])",
      "beginCaptures": {
        "1": {
          "name": "keyword.control.systemverilog"
        },
        "2": {
          "name": "entity.name.type.module.systemverilog"
        },
        "3": {
          "name": "entity.name.type.module.systemverilog"
        }
      },
      "end": "\\)(?:[ \\t\\r\\n]*(;))?",
      "endCaptures": {
        "1": {
          "name": "punctuation.module.instantiation.end.systemverilog"
        }
      },
      "name": "meta.module.parameters.systemverilog",
      "patterns": [{
        "match": "\\b([a-zA-Z_][a-zA-Z0-9_$]*)\\b(?=[ \\t\\r\\n]*\\()",
        "name": "variable.other.module.systemverilog"
      }, {
        "include": "#module-binding"
      }, {
        "include": "#parameters"
      }, {
        "include": "#comments"
      }, {
        "include": "#operators"
      }, {
        "include": "#constants"
      }, {
        "include": "#strings"
      }, {
        "include": "#port-net-parameter"
      }, {
        "match": "\\b([a-zA-Z_][a-zA-Z0-9_$]*)\\b(?=[ \\t\\r\\n]*$)",
        "name": "variable.other.module.systemverilog"
      }, {
        "include": "#identifiers"
      }]
    },
    "operators": {
      "patterns": [{
        "match": "\\+=|-=|/=|\\*=|%=|&=|\\|=|\\^=|>>>=|>>=|<<<=|<<=|<=|=",
        "name": "keyword.operator.assignment.systemverilog"
      }, {
        "match": "\\+\\+",
        "name": "keyword.operator.increment.systemverilog"
      }, {
        "match": "--",
        "name": "keyword.operator.decrement.systemverilog"
      }, {
        "match": "\\+|-|\\*\\*|\\*|/|%",
        "name": "keyword.operator.arithmetic.systemverilog"
      }, {
        "match": "!|&&|\\|\\|",
        "name": "keyword.operator.logical.systemverilog"
      }, {
        "match": "<<<|<<|>>>|>>",
        "name": "keyword.operator.bitwise.shift.systemverilog"
      }, {
        "match": "~&|~\\||~|\\^~|~\\^|&|\\||\\^|{|'{|}|:|\\?",
        "name": "keyword.operator.bitwise.systemverilog"
      }, {
        "match": "<=|<|>=|>|==\\?|!=\\?|===|!==|==|!=",
        "name": "keyword.operator.comparison.systemverilog"
      }, {
        "match": "@|##|#|->|<->",
        "name": "keyword.operator.channel.systemverilog"
      }, {
        "match": "\\b(?:dist|inside|with|intersect|and|or|throughout|within|first_match)\\b|:=|:/|\\|->|\\|=>|->>|\\*>|#-#|#=#|&&&",
        "name": "keyword.operator.logical.systemverilog"
      }]
    },
    "parameters": {
      "begin": "[ \\t\\r\\n]*(#)[ \\t\\r\\n]*(\\()",
      "beginCaptures": {
        "1": {
          "name": "keyword.operator.channel.systemverilog"
        },
        "2": {
          "name": "punctuation.section.parameters.begin"
        }
      },
      "end": "(\\))[ \\t\\r\\n]*(?=;|\\(|[a-zA-Z_]|\\\\|$)",
      "endCaptures": {
        "1": {
          "name": "punctuation.section.parameters.end"
        }
      },
      "name": "meta.parameters.systemverilog",
      "patterns": [{
        "include": "#port-net-parameter"
      }, {
        "include": "#comments"
      }, {
        "include": "#constants"
      }, {
        "include": "#operators"
      }, {
        "include": "#strings"
      }, {
        "include": "#system-tf"
      }, {
        "include": "#functions"
      }, {
        "match": "\\bvirtual\\b",
        "name": "storage.modifier.systemverilog"
      }, {
        "include": "#module-binding"
      }]
    },
    "port-net-parameter": {
      "patterns": [{
        "captures": {
          "1": {
            "name": "support.type.direction.systemverilog"
          },
          "2": {
            "name": "storage.type.net.systemverilog"
          },
          "3": {
            "name": "support.type.scope.systemverilog"
          },
          "4": {
            "name": "keyword.operator.scope.systemverilog"
          },
          "5": {
            "patterns": [{
              "include": "#built-ins"
            }, {
              "match": "[a-zA-Z_][a-zA-Z0-9_$]*",
              "name": "storage.type.user-defined.systemverilog"
            }]
          },
          "6": {
            "patterns": [{
              "include": "#modifiers"
            }]
          },
          "7": {
            "patterns": [{
              "include": "#selects"
            }]
          },
          "8": {
            "patterns": [{
              "include": "#constants"
            }, {
              "include": "#identifiers"
            }]
          },
          "9": {
            "patterns": [{
              "include": "#selects"
            }]
          }
        },
        "match": ",?[ \\t\\r\\n]*(?:\\b(output|input|inout|ref)\\b[ \\t\\r\\n]*)?(?:\\b(localparam|parameter|var|supply[01]|tri|triand|trior|trireg|tri[01]|uwire|wire|wand|wor)\\b[ \\t\\r\\n]*)?(?:\\b([a-zA-Z_][a-zA-Z0-9_$]*)(::))?(?:([a-zA-Z_][a-zA-Z0-9_$]*)\\b[ \\t\\r\\n]*)?(?:\\b(signed|unsigned)\\b[ \\t\\r\\n]*)?(?:(\\[[a-zA-Z0-9_:$\\.\\-\\+\\*/%`' \\t\\r\\n\\[\\]\\(\\)]*\\])[ \\t\\r\\n]*)?(?<!(?<!#)[:&|=+\\-*/%?><^!~\\(][ \\t\\r\\n]*)\\b([a-zA-Z_][a-zA-Z0-9_$]*)\\b[ \\t\\r\\n]*(\\[[a-zA-Z0-9_:$\\.\\-\\+\\*/%`' \\t\\r\\n\\[\\]\\(\\)]*\\])?[ \\t\\r\\n]*(?=,|;|=|\\)|/|$)",
        "name": "meta.port-net-parameter.declaration.systemverilog"
      }]
    },
    "selects": {
      "begin": "\\[",
      "beginCaptures": {
        "0": {
          "name": "punctuation.slice.brackets.begin"
        }
      },
      "end": "\\]",
      "endCaptures": {
        "0": {
          "name": "punctuation.slice.brackets.end"
        }
      },
      "name": "meta.brackets.select.systemverilog",
      "patterns": [{
        "match": "\\$(?![a-z])",
        "name": "constant.language.systemverilog"
      }, {
        "include": "#system-tf"
      }, {
        "include": "#constants"
      }, {
        "include": "#operators"
      }, {
        "include": "#cast-operator"
      }, {
        "include": "#storage-scope"
      }, {
        "match": "[a-zA-Z_][a-zA-Z0-9_$]*",
        "name": "variable.other.identifier.systemverilog"
      }]
    },
    "sequence": {
      "captures": {
        "1": {
          "name": "keyword.control.systemverilog"
        },
        "2": {
          "name": "entity.name.function.systemverilog"
        }
      },
      "match": "[ \\t\\r\\n]*\\b(sequence)[ \\t\\r\\n]+([a-zA-Z_][a-zA-Z0-9_$]*)\\b",
      "name": "meta.sequence.systemverilog"
    },
    "storage-scope": {
      "captures": {
        "1": {
          "name": "support.type.scope.systemverilog"
        },
        "2": {
          "name": "keyword.operator.scope.systemverilog"
        }
      },
      "match": "\\b([a-zA-Z_][a-zA-Z0-9_$]*)(::)",
      "name": "meta.scope.systemverilog"
    },
    "strings": {
      "patterns": [{
        "begin": '`?"',
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.string.begin.systemverilog"
          }
        },
        "end": '"`?',
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.string.end.systemverilog"
          }
        },
        "name": "string.quoted.double.systemverilog",
        "patterns": [{
          "match": '\\\\(?:[nt\\\\"vfa]|[0-7]{3}|x[0-9a-fA-F]{2})',
          "name": "constant.character.escape.systemverilog"
        }, {
          "match": "(?x)%\n(\\d+\\$)?\n['\\-+0\n[,;:_]?\n((-?\\d+)|\\*(-?\\d+\\$)?)?\n(\\.((-?\\d+)|\\*(-?\\d+\\$)?)?)?\n(hh|h|ll|l|j|z|t|L)?\n[xXhHdDoObBcClLvVmMpPsStTuUzZeEfFgG%]",
          "name": "constant.character.format.placeholder.systemverilog"
        }, {
          "match": "%",
          "name": "invalid.illegal.placeholder.systemverilog"
        }, {
          "include": "#fixme-todo"
        }]
      }, {
        "begin": "(?<=include)[ \\t\\r\\n]*(<)",
        "beginCaptures": {
          "1": {
            "name": "punctuation.definition.string.begin.systemverilog"
          }
        },
        "end": ">",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.string.end.systemverilog"
          }
        },
        "name": "string.quoted.other.lt-gt.include.systemverilog"
      }]
    },
    "sv-control": {
      "captures": {
        "1": {
          "name": "keyword.control.systemverilog"
        }
      },
      "match": "[ \\t\\r\\n]*\\b(initial|always|always_comb|always_ff|always_latch|final|assign|deassign|force|release|wait|forever|repeat|alias|while|for|if|iff|else|case|casex|casez|default|endcase|return|break|continue|do|foreach|clocking|coverpoint|property|bins|binsof|illegal_bins|ignore_bins|randcase|matches|solve|before|expect|cross|ref|srandom|struct|chandle|tagged|extern|throughout|timeprecision|timeunit|priority|type|union|wait_order|triggered|randsequence|context|pure|wildcard|new|forkjoin|unique|unique0|priority)\\b"
    },
    "sv-control-begin": {
      "captures": {
        "1": {
          "name": "keyword.control.systemverilog"
        },
        "2": {
          "name": "punctuation.definition.label.systemverilog"
        },
        "3": {
          "name": "entity.name.section.systemverilog"
        }
      },
      "match": "[ \\t\\r\\n]*\\b(begin|fork)\\b(?:[ \\t\\r\\n]*(:)[ \\t\\r\\n]*([a-zA-Z_][a-zA-Z0-9_$]*))?",
      "name": "meta.item.begin.systemverilog"
    },
    "sv-control-end": {
      "captures": {
        "1": {
          "name": "keyword.control.systemverilog"
        },
        "2": {
          "name": "punctuation.definition.label.systemverilog"
        },
        "3": {
          "name": "entity.name.section.systemverilog"
        }
      },
      "match": "[ \\t\\r\\n]*\\b(end|endmodule|endinterface|endprogram|endchecker|endclass|endpackage|endconfig|endfunction|endtask|endproperty|endsequence|endgroup|endprimitive|endclocking|endgenerate|join|join_any|join_none)\\b(?:[ \\t\\r\\n]*(:)[ \\t\\r\\n]*([a-zA-Z_][a-zA-Z0-9_$]*))?",
      "name": "meta.item.end.systemverilog"
    },
    "sv-cover-cross": {
      "captures": {
        "2": {
          "name": "entity.name.type.class.systemverilog"
        },
        "3": {
          "name": "keyword.operator.other.systemverilog"
        },
        "4": {
          "name": "keyword.control.systemverilog"
        }
      },
      "match": "(([a-zA-Z_][a-zA-Z0-9_$]*)[ \\t\\r\\n]*(:))?[ \\t\\r\\n]*(coverpoint|cross)[ \\t\\r\\n]+([a-zA-Z_][a-zA-Z0-9_$]*)",
      "name": "meta.definition.systemverilog"
    },
    "sv-definition": {
      "captures": {
        "1": {
          "name": "keyword.control.systemverilog"
        },
        "2": {
          "name": "entity.name.type.class.systemverilog"
        }
      },
      "match": "[ \\t\\r\\n]*\\b(primitive|package|constraint|interface|covergroup|program)[ \\t\\r\\n]+\\b([a-zA-Z_][a-zA-Z0-9_$]*)\\b",
      "name": "meta.definition.systemverilog"
    },
    "sv-local": {
      "captures": {
        "1": {
          "name": "keyword.other.systemverilog"
        }
      },
      "match": "[ \\t\\r\\n]*\\b(const|static|protected|virtual|localparam|parameter|local)\\b"
    },
    "sv-option": {
      "captures": {
        "1": {
          "name": "keyword.cover.systemverilog"
        }
      },
      "match": "[ \\t\\r\\n]*\\b(option)\\."
    },
    "sv-rand": {
      "match": "[ \\t\\r\\n]*\\b(?:rand|randc)\\b",
      "name": "storage.type.rand.systemverilog"
    },
    "sv-std": {
      "match": "\\b(std)\\b::",
      "name": "support.class.systemverilog"
    },
    "system-tf": {
      "match": "\\$[a-zA-Z0-9_$][a-zA-Z0-9_$]*\\b",
      "name": "support.function.systemverilog"
    },
    "tables": {
      "begin": "[ \\t\\r\\n]*\\b(table)\\b",
      "beginCaptures": {
        "1": {
          "name": "keyword.table.systemverilog.begin"
        }
      },
      "end": "[ \\t\\r\\n]*\\b(endtable)\\b",
      "endCaptures": {
        "1": {
          "name": "keyword.table.systemverilog.end"
        }
      },
      "name": "meta.table.systemverilog",
      "patterns": [{
        "include": "#comments"
      }, {
        "match": "\\b[01xXbBrRfFpPnN]\\b",
        "name": "constant.language.systemverilog"
      }, {
        "match": "[-*?]",
        "name": "constant.language.systemverilog"
      }, {
        "captures": {
          "1": {
            "name": "constant.language.systemverilog"
          }
        },
        "match": "\\(([01xX?]{2})\\)"
      }, {
        "match": ":",
        "name": "punctuation.definition.label.systemverilog"
      }, {
        "include": "#operators"
      }, {
        "include": "#constants"
      }, {
        "include": "#strings"
      }, {
        "include": "#identifiers"
      }]
    },
    "typedef": {
      "begin": "[ \\t\\r\\n]*\\b(?:(typedef)[ \\t\\r\\n]+)(?:([a-zA-Z_][a-zA-Z0-9_$]*)(?:[ \\t\\r\\n]+\\b(signed|unsigned)\\b)?(?:[ \\t\\r\\n]*(\\[[a-zA-Z0-9_:$\\.\\-\\+\\*/%`' \\t\\r\\n\\[\\]\\(\\)]*\\])?))?(?=[ \\t\\r\\n]*[a-zA-Z_\\\\])",
      "beginCaptures": {
        "1": {
          "name": "keyword.control.systemverilog"
        },
        "2": {
          "patterns": [{
            "include": "#built-ins"
          }, {
            "match": "\\bvirtual\\b",
            "name": "storage.modifier.systemverilog"
          }]
        },
        "3": {
          "patterns": [{
            "include": "#modifiers"
          }]
        },
        "4": {
          "patterns": [{
            "include": "#selects"
          }]
        }
      },
      "end": ";",
      "endCaptures": {
        "0": {
          "name": "punctuation.definition.typedef.end.systemverilog"
        }
      },
      "name": "meta.typedef.systemverilog",
      "patterns": [{
        "include": "#identifiers"
      }, {
        "include": "#selects"
      }]
    },
    "typedef-enum-struct-union": {
      "begin": "[ \\t\\r\\n]*\\b(typedef)[ \\t\\r\\n]+(enum|struct|union(?:[ \\t\\r\\n]+tagged)?|class|interface[ \\t\\r\\n]+class)(?:[ \\t\\r\\n]+(?!packed|signed|unsigned)([a-zA-Z_][a-zA-Z0-9_$]*)?(?:[ \\t\\r\\n]*(\\[[a-zA-Z0-9_:$\\.\\-\\+\\*/%`' \\t\\r\\n\\[\\]\\(\\)]*\\])?))?(?:[ \\t\\r\\n]+(packed))?(?:[ \\t\\r\\n]+(signed|unsigned))?(?=[ \\t\\r\\n]*(?:{|$))",
      "beginCaptures": {
        "1": {
          "name": "keyword.control.systemverilog"
        },
        "2": {
          "name": "keyword.control.systemverilog"
        },
        "3": {
          "patterns": [{
            "include": "#built-ins"
          }]
        },
        "4": {
          "patterns": [{
            "include": "#selects"
          }]
        },
        "5": {
          "name": "storage.modifier.systemverilog"
        },
        "6": {
          "name": "storage.modifier.systemverilog"
        }
      },
      "end": "(?<=})[ \\t\\r\\n]*([a-zA-Z_][a-zA-Z0-9_$]*|(?<=^|[ \\t\\r\\n])\\\\[!-~]+(?=$|[ \\t\\r\\n]))(?:[ \\t\\r\\n]*(\\[[a-zA-Z0-9_:$\\.\\-\\+\\*/%`' \\t\\r\\n\\[\\]\\(\\)]*\\])?)[ \\t\\r\\n]*[,;]",
      "endCaptures": {
        "1": {
          "name": "storage.type.systemverilog"
        },
        "2": {
          "patterns": [{
            "include": "#selects"
          }]
        }
      },
      "name": "meta.typedef-enum-struct-union.systemverilog",
      "patterns": [{
        "include": "#port-net-parameter"
      }, {
        "include": "#keywords"
      }, {
        "include": "#base-grammar"
      }, {
        "include": "#identifiers"
      }]
    }
  },
  "scopeName": "source.systemverilog"
});
var systemVerilog = [lang];
export {
  systemVerilog as default
};
//# sourceMappingURL=system-verilog-ZPHWI3CW.js.map
