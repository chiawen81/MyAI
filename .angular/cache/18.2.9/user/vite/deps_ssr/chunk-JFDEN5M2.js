import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  regexp
} from "./chunk-XBSJNNYU.js";
import {
  glsl
} from "./chunk-UXBYIOCN.js";
import {
  sql
} from "./chunk-6ZZBOZY5.js";

// node_modules/shiki/dist/langs/cpp-macro.mjs
var lang = Object.freeze({
  "displayName": "C++",
  "name": "cpp-macro",
  "patterns": [{
    "include": "#ever_present_context"
  }, {
    "include": "#constructor_root"
  }, {
    "include": "#destructor_root"
  }, {
    "include": "#function_definition"
  }, {
    "include": "#operator_overload"
  }, {
    "include": "#using_namespace"
  }, {
    "include": "source.cpp#type_alias"
  }, {
    "include": "source.cpp#using_name"
  }, {
    "include": "source.cpp#namespace_alias"
  }, {
    "include": "#namespace_block"
  }, {
    "include": "#extern_block"
  }, {
    "include": "#typedef_class"
  }, {
    "include": "#typedef_struct"
  }, {
    "include": "#typedef_union"
  }, {
    "include": "source.cpp#misc_keywords"
  }, {
    "include": "source.cpp#standard_declares"
  }, {
    "include": "#class_block"
  }, {
    "include": "#struct_block"
  }, {
    "include": "#union_block"
  }, {
    "include": "#enum_block"
  }, {
    "include": "source.cpp#template_isolated_definition"
  }, {
    "include": "#template_definition"
  }, {
    "include": "source.cpp#template_explicit_instantiation"
  }, {
    "include": "source.cpp#access_control_keywords"
  }, {
    "include": "#block"
  }, {
    "include": "#static_assert"
  }, {
    "include": "#assembly"
  }, {
    "include": "#function_pointer"
  }, {
    "include": "#evaluation_context"
  }],
  "repository": {
    "alignas_attribute": {
      "begin": "alignas\\(",
      "beginCaptures": {
        "0": {
          "name": "punctuation.section.attribute.begin.cpp"
        }
      },
      "end": "\\)|(?=(?<!\\\\)\n)",
      "endCaptures": {
        "0": {
          "name": "punctuation.section.attribute.end.cpp"
        }
      },
      "name": "support.other.attribute.cpp",
      "patterns": [{
        "include": "#attributes_context"
      }, {
        "begin": "\\(",
        "beginCaptures": {},
        "end": "\\)|(?=(?<!\\\\)\n)",
        "endCaptures": {},
        "patterns": [{
          "include": "#attributes_context"
        }, {
          "include": "#string_context"
        }, {
          "include": "#ever_present_context"
        }]
      }, {
        "captures": {
          "1": {
            "name": "keyword.other.using.directive.cpp"
          },
          "2": {
            "name": "entity.name.namespace.cpp"
          }
        },
        "match": "(using)\\s+((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))"
      }, {
        "match": ",",
        "name": "punctuation.separator.attribute.cpp"
      }, {
        "match": ":",
        "name": "punctuation.accessor.attribute.cpp"
      }, {
        "match": "(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)(?=::)",
        "name": "entity.name.namespace.cpp"
      }, {
        "match": "(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)",
        "name": "entity.other.attribute.$0.cpp"
      }, {
        "include": "source.cpp#number_literal"
      }, {
        "include": "#ever_present_context"
      }]
    },
    "alignas_operator": {
      "begin": "((?<!\\w)alignas(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(\\()",
      "beginCaptures": {
        "1": {
          "name": "keyword.operator.functionlike.cpp keyword.operator.alignas.cpp"
        },
        "2": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "3": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "4": {
          "name": "comment.block.cpp"
        },
        "5": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "6": {
          "name": "punctuation.section.arguments.begin.bracket.round.operator.alignas.cpp"
        }
      },
      "contentName": "meta.arguments.operator.alignas",
      "end": "\\)|(?=(?<!\\\\)\n)",
      "endCaptures": {
        "0": {
          "name": "punctuation.section.arguments.end.bracket.round.operator.alignas.cpp"
        }
      },
      "patterns": [{
        "include": "#evaluation_context"
      }]
    },
    "alignof_operator": {
      "begin": "((?<!\\w)alignof(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(\\()",
      "beginCaptures": {
        "1": {
          "name": "keyword.operator.functionlike.cpp keyword.operator.alignof.cpp"
        },
        "2": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "3": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "4": {
          "name": "comment.block.cpp"
        },
        "5": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "6": {
          "name": "punctuation.section.arguments.begin.bracket.round.operator.alignof.cpp"
        }
      },
      "contentName": "meta.arguments.operator.alignof",
      "end": "\\)|(?=(?<!\\\\)\n)",
      "endCaptures": {
        "0": {
          "name": "punctuation.section.arguments.end.bracket.round.operator.alignof.cpp"
        }
      },
      "patterns": [{
        "include": "#evaluation_context"
      }]
    },
    "assembly": {
      "begin": "(\\b(?:__asm__|asm)\\b)(?:\\s+)?((?:volatile)?)",
      "beginCaptures": {
        "1": {
          "name": "storage.type.asm.cpp"
        },
        "2": {
          "name": "storage.modifier.cpp"
        }
      },
      "end": "(?!\\G)|(?=(?<!\\\\)\n)",
      "endCaptures": {},
      "name": "meta.asm.cpp",
      "patterns": [{
        "captures": {
          "1": {
            "patterns": [{
              "include": "source.cpp#inline_comment"
            }]
          },
          "2": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "3": {
            "name": "comment.block.cpp"
          },
          "4": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          }
        },
        "match": "^((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:\\n|$)"
      }, {
        "include": "#comments"
      }, {
        "begin": "((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))\\(",
        "beginCaptures": {
          "0": {
            "name": "punctuation.section.parens.begin.bracket.round.assembly.cpp"
          },
          "1": {
            "patterns": [{
              "include": "source.cpp#inline_comment"
            }]
          },
          "2": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "3": {
            "name": "comment.block.cpp"
          },
          "4": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          }
        },
        "end": "\\)|(?=(?<!\\\\)\n)",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.parens.end.bracket.round.assembly.cpp"
          }
        },
        "patterns": [{
          "begin": '(R?)(")',
          "beginCaptures": {
            "1": {
              "name": "meta.encoding.cpp"
            },
            "2": {
              "name": "punctuation.definition.string.begin.assembly.cpp"
            }
          },
          "contentName": "meta.embedded.assembly",
          "end": '"|(?=(?<!\\\\)\n)',
          "endCaptures": {
            "0": {
              "name": "punctuation.definition.string.end.assembly.cpp"
            }
          },
          "name": "string.quoted.double.cpp",
          "patterns": [{
            "include": "source.asm"
          }, {
            "include": "source.x86"
          }, {
            "include": "source.x86_64"
          }, {
            "include": "source.arm"
          }, {
            "include": "source.cpp#backslash_escapes"
          }, {
            "include": "#string_escaped_char"
          }]
        }, {
          "begin": "\\(",
          "beginCaptures": {
            "0": {
              "name": "punctuation.section.parens.begin.bracket.round.assembly.inner.cpp"
            }
          },
          "end": "\\)|(?=(?<!\\\\)\n)",
          "endCaptures": {
            "0": {
              "name": "punctuation.section.parens.end.bracket.round.assembly.inner.cpp"
            }
          },
          "patterns": [{
            "include": "#evaluation_context"
          }]
        }, {
          "captures": {
            "1": {
              "patterns": [{
                "include": "source.cpp#inline_comment"
              }]
            },
            "2": {
              "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
            },
            "3": {
              "name": "comment.block.cpp"
            },
            "4": {
              "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
            },
            "5": {
              "name": "variable.other.asm.label.cpp"
            },
            "6": {
              "patterns": [{
                "include": "source.cpp#inline_comment"
              }]
            },
            "7": {
              "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
            },
            "8": {
              "name": "comment.block.cpp"
            },
            "9": {
              "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
            }
          },
          "match": "\\[((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))\\]"
        }, {
          "match": ":",
          "name": "punctuation.separator.delimiter.colon.assembly.cpp"
        }, {
          "include": "#comments"
        }]
      }]
    },
    "attributes_context": {
      "patterns": [{
        "include": "#cpp_attributes"
      }, {
        "include": "#gcc_attributes"
      }, {
        "include": "#ms_attributes"
      }, {
        "include": "#alignas_attribute"
      }]
    },
    "block": {
      "begin": "{",
      "beginCaptures": {
        "0": {
          "name": "punctuation.section.block.begin.bracket.curly.cpp"
        }
      },
      "end": "}|(?=(?<!\\\\)\n)",
      "endCaptures": {
        "0": {
          "name": "punctuation.section.block.end.bracket.curly.cpp"
        }
      },
      "name": "meta.block.cpp",
      "patterns": [{
        "include": "#function_body_context"
      }]
    },
    "block_comment": {
      "begin": "\\s*+(\\/\\*)",
      "beginCaptures": {
        "1": {
          "name": "punctuation.definition.comment.begin.cpp"
        }
      },
      "end": "\\*\\/|(?=(?<!\\\\)\n)",
      "endCaptures": {
        "0": {
          "name": "punctuation.definition.comment.end.cpp"
        }
      },
      "name": "comment.block.cpp"
    },
    "builtin_storage_type_initilizer": {
      "begin": "\\s*+(?<!\\w)(?:(?:(?:((?:(?:unsigned)|(?:wchar_t)|(?:double)|(?:signed)|(?:short)|(?:float)|(?:auto)|(?:void)|(?:long)|(?:char)|(?:bool)|(?:int)))|((?:(?:uint_least32_t)|(?:uint_least64_t)|(?:uint_least16_t)|(?:uint_fast64_t)|(?:uint_least8_t)|(?:int_least64_t)|(?:int_least32_t)|(?:int_least16_t)|(?:uint_fast16_t)|(?:uint_fast32_t)|(?:int_least8_t)|(?:int_fast16_t)|(?:int_fast32_t)|(?:int_fast64_t)|(?:uint_fast8_t)|(?:int_fast8_t)|(?:suseconds_t)|(?:useconds_t)|(?:uintmax_t)|(?:uintmax_t)|(?:in_port_t)|(?:uintmax_t)|(?:in_addr_t)|(?:blksize_t)|(?:uintptr_t)|(?:intmax_t)|(?:intptr_t)|(?:blkcnt_t)|(?:intmax_t)|(?:u_quad_t)|(?:uint16_t)|(?:uint32_t)|(?:uint64_t)|(?:ssize_t)|(?:fixpt_t)|(?:qaddr_t)|(?:u_short)|(?:int16_t)|(?:int32_t)|(?:int64_t)|(?:uint8_t)|(?:daddr_t)|(?:caddr_t)|(?:swblk_t)|(?:clock_t)|(?:segsz_t)|(?:nlink_t)|(?:time_t)|(?:u_long)|(?:ushort)|(?:quad_t)|(?:mode_t)|(?:size_t)|(?:u_char)|(?:int8_t)|(?:u_int)|(?:uid_t)|(?:off_t)|(?:pid_t)|(?:gid_t)|(?:dev_t)|(?:div_t)|(?:key_t)|(?:ino_t)|(?:id_t)|(?:id_t)|(?:uint))))|((?:(?:pthread_rwlockattr_t)|(?:pthread_mutexattr_t)|(?:pthread_condattr_t)|(?:pthread_rwlock_t)|(?:pthread_mutex_t)|(?:pthread_cond_t)|(?:pthread_attr_t)|(?:pthread_once_t)|(?:pthread_key_t)|(?:pthread_t))))|([a-zA-Z_]\\w*_t))(?!\\w)\\s*+(?<!\\w)(\\()",
      "beginCaptures": {
        "1": {
          "name": "storage.type.primitive.cpp storage.type.built-in.primitive.cpp"
        },
        "2": {
          "name": "storage.type.cpp storage.type.built-in.cpp"
        },
        "3": {
          "name": "support.type.posix-reserved.pthread.cpp support.type.built-in.posix-reserved.pthread.cpp"
        },
        "4": {
          "name": "support.type.posix-reserved.cpp support.type.built-in.posix-reserved.cpp"
        },
        "5": {
          "name": "punctuation.section.arguments.begin.bracket.round.initializer.cpp"
        }
      },
      "end": "\\)|(?=(?<!\\\\)\n)",
      "endCaptures": {
        "0": {
          "name": "punctuation.section.arguments.end.bracket.round.initializer.cpp"
        }
      },
      "patterns": [{
        "include": "#evaluation_context"
      }]
    },
    "case_statement": {
      "begin": "((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?<!\\w)case(?!\\w))",
      "beginCaptures": {
        "1": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "2": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "3": {
          "name": "comment.block.cpp"
        },
        "4": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "5": {
          "name": "keyword.control.case.cpp"
        }
      },
      "end": ":|(?=(?<!\\\\)\n)",
      "endCaptures": {
        "0": {
          "name": "punctuation.separator.colon.case.cpp"
        }
      },
      "name": "meta.conditional.case.cpp",
      "patterns": [{
        "include": "#evaluation_context"
      }]
    },
    "class_block": {
      "begin": "((?<!\\w)class(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:(?={)|(?:((?:(?:(?:\\[\\[.*?\\]\\]|__attribute(?:__)?\\s*\\(\\s*\\(.*?\\)\\s*\\))|__declspec\\(.*?\\))|alignas\\(.*?\\))(?!\\)))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))?((?:(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*+)?(?:((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(:(?!:)))?)",
      "beginCaptures": {
        "0": {
          "name": "meta.head.class.cpp"
        },
        "1": {
          "name": "storage.type.$1.cpp"
        },
        "2": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "3": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "4": {
          "name": "comment.block.cpp"
        },
        "5": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "6": {
          "patterns": [{
            "include": "#attributes_context"
          }, {
            "include": "source.cpp#number_literal"
          }]
        },
        "7": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "8": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "9": {
          "name": "comment.block.cpp"
        },
        "10": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "11": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "storage.type.modifier.final.cpp"
              },
              "2": {
                "patterns": [{
                  "include": "source.cpp#inline_comment"
                }]
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "4": {
                "name": "comment.block.cpp"
              },
              "5": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "((?<!\\w)final(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))"
          }, {
            "captures": {
              "1": {
                "name": "entity.name.type.class.cpp"
              },
              "2": {
                "patterns": [{
                  "include": "source.cpp#inline_comment"
                }]
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "4": {
                "name": "comment.block.cpp"
              },
              "5": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              },
              "6": {
                "name": "storage.type.modifier.final.cpp"
              },
              "7": {
                "patterns": [{
                  "include": "source.cpp#inline_comment"
                }]
              },
              "8": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "9": {
                "name": "comment.block.cpp"
              },
              "10": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:((?<!\\w)final(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))?(?=:|{|$)"
          }, {
            "match": "DLLEXPORT",
            "name": "entity.name.other.preprocessor.macro.predefined.DLLEXPORT.cpp"
          }, {
            "match": "(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*",
            "name": "entity.name.other.preprocessor.macro.predefined.probably.$0.cpp"
          }]
        },
        "12": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "13": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "14": {
          "name": "comment.block.cpp"
        },
        "15": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "16": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "17": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "18": {
          "name": "comment.block.cpp"
        },
        "19": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "20": {
          "name": "punctuation.separator.colon.inheritance.cpp"
        }
      },
      "end": "(?:(?:(?<=\\}|%>|\\?\\?>)(?:\\s+)?(;)|(;))|(?=[;>\\[\\]=]))|(?=(?<!\\\\)\n)",
      "endCaptures": {
        "1": {
          "name": "punctuation.terminator.statement.cpp"
        },
        "2": {
          "name": "punctuation.terminator.statement.cpp"
        }
      },
      "name": "meta.block.class.cpp",
      "patterns": [{
        "begin": "\\G ?",
        "beginCaptures": {},
        "end": "(?:\\{|<%|\\?\\?<|(?=;))|(?=(?<!\\\\)\n)",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.block.begin.bracket.curly.class.cpp"
          }
        },
        "name": "meta.head.class.cpp",
        "patterns": [{
          "include": "#ever_present_context"
        }, {
          "include": "#inheritance_context"
        }, {
          "include": "#template_call_range"
        }]
      }, {
        "begin": "(?<=\\{|<%|\\?\\?<)",
        "beginCaptures": {},
        "end": "\\}|%>|\\?\\?>|(?=(?<!\\\\)\n)",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.block.end.bracket.curly.class.cpp"
          }
        },
        "name": "meta.body.class.cpp",
        "patterns": [{
          "include": "#function_pointer"
        }, {
          "include": "#static_assert"
        }, {
          "include": "#constructor_inline"
        }, {
          "include": "#destructor_inline"
        }, {
          "include": "$self"
        }]
      }, {
        "begin": "(?<=\\}|%>|\\?\\?>)[\\s]*",
        "beginCaptures": {},
        "end": "[\\s]*(?=;)|(?=(?<!\\\\)\n)",
        "endCaptures": {},
        "name": "meta.tail.class.cpp",
        "patterns": [{
          "include": "$self"
        }]
      }]
    },
    "comments": {
      "patterns": [{
        "begin": "^(?:\\s+)?+(\\/\\/[!\\/]+)",
        "beginCaptures": {
          "1": {
            "name": "punctuation.definition.comment.documentation.cpp"
          }
        },
        "end": "(?<=\\n)(?<!\\\\\\n)|(?=(?<!\\\\)\n)",
        "endCaptures": {},
        "name": "comment.line.double-slash.documentation.cpp",
        "patterns": [{
          "include": "source.cpp#line_continuation_character"
        }, {
          "match": '(?<=[\\s*!\\/])[\\\\@](?:callergraph|callgraph|else|endif|f\\$|f\\[|f\\]|hidecallergraph|hidecallgraph|hiderefby|hiderefs|hideinitializer|htmlinclude|n|nosubgrouping|private|privatesection|protected|protectedsection|public|publicsection|pure|showinitializer|showrefby|showrefs|tableofcontents|\\$|\\#|<|>|%|"|\\.|=|::|\\||\\-\\-|\\-\\-\\-)\\b(?:\\{[^}]*\\})?',
          "name": "storage.type.class.doxygen.cpp"
        }, {
          "captures": {
            "1": {
              "name": "storage.type.class.doxygen.cpp"
            },
            "2": {
              "name": "markup.italic.doxygen.cpp"
            }
          },
          "match": "((?<=[\\s*!\\/])[\\\\@](?:a|em|e))\\s+(\\S+)"
        }, {
          "captures": {
            "1": {
              "name": "storage.type.class.doxygen.cpp"
            },
            "2": {
              "name": "markup.bold.doxygen.cpp"
            }
          },
          "match": "((?<=[\\s*!\\/])[\\\\@]b)\\s+(\\S+)"
        }, {
          "captures": {
            "1": {
              "name": "storage.type.class.doxygen.cpp"
            },
            "2": {
              "name": "markup.inline.raw.string.cpp"
            }
          },
          "match": "((?<=[\\s*!\\/])[\\\\@](?:c|p))\\s+(\\S+)"
        }, {
          "match": "(?<=[\\s*!\\/])[\\\\@](?:a|anchor|b|c|cite|copybrief|copydetail|copydoc|def|dir|dontinclude|e|em|emoji|enum|example|extends|file|idlexcept|implements|include|includedoc|includelineno|latexinclude|link|memberof|namespace|p|package|ref|refitem|related|relates|relatedalso|relatesalso|verbinclude)\\b(?:\\{[^}]*\\})?",
          "name": "storage.type.class.doxygen.cpp"
        }, {
          "match": "(?<=[\\s*!\\/])[\\\\@](?:addindex|addtogroup|category|class|defgroup|diafile|dotfile|elseif|fn|headerfile|if|ifnot|image|ingroup|interface|line|mainpage|mscfile|name|overload|page|property|protocol|section|skip|skipline|snippet|snippetdoc|snippetlineno|struct|subpage|subsection|subsubsection|typedef|union|until|vhdlflow|weakgroup)\\b(?:\\{[^}]*\\})?",
          "name": "storage.type.class.doxygen.cpp"
        }, {
          "captures": {
            "1": {
              "name": "storage.type.class.doxygen.cpp"
            },
            "2": {
              "patterns": [{
                "match": "in|out",
                "name": "keyword.other.parameter.direction.$0.cpp"
              }]
            },
            "3": {
              "patterns": [{
                "match": "(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)",
                "name": "variable.parameter.cpp"
              }, {
                "match": ",",
                "name": "punctuation.cpp"
              }]
            },
            "4": {
              "name": "variable.parameter.cpp"
            },
            "5": {
              "name": "punctuation.cpp"
            },
            "6": {
              "name": "variable.parameter.cpp"
            }
          },
          "match": "((?<=[\\s*!\\/])[\\\\@]param)(?:\\s*\\[((?:,?(?:\\s+)?(?:in|out)(?:\\s+)?)+)\\])?(\\s+((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))(?:(,)(?:\\s+)?((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)))*)"
        }, {
          "match": "(?<=[\\s*!\\/])[\\\\@](?:arg|attention|author|authors|brief|bug|copyright|date|deprecated|details|exception|invariant|li|note|par|paragraph|param|post|pre|remark|remarks|result|return|returns|retval|sa|see|short|since|test|throw|throws|todo|tparam|version|warning|xrefitem)\\b(?:\\{[^}]*\\})?",
          "name": "storage.type.class.doxygen.cpp"
        }, {
          "match": "(?<=[\\s*!\\/])[\\\\@](?:code|cond|docbookonly|dot|htmlonly|internal|latexonly|link|manonly|msc|parblock|rtfonly|secreflist|startuml|verbatim|xmlonly|endcode|endcond|enddocbookonly|enddot|endhtmlonly|endinternal|endlatexonly|endlink|endmanonly|endmsc|endparblock|endrtfonly|endsecreflist|enduml|endverbatim|endxmlonly)\\b(?:\\{[^}]*\\})?",
          "name": "storage.type.class.doxygen.cpp"
        }, {
          "match": "(?:\\b[A-Z]+:|@[a-z_]+:)",
          "name": "storage.type.class.gtkdoc.cpp"
        }]
      }, {
        "captures": {
          "1": {
            "name": "punctuation.definition.comment.begin.documentation.cpp"
          },
          "2": {
            "patterns": [{
              "match": '(?<=[\\s*!\\/])[\\\\@](?:callergraph|callgraph|else|endif|f\\$|f\\[|f\\]|hidecallergraph|hidecallgraph|hiderefby|hiderefs|hideinitializer|htmlinclude|n|nosubgrouping|private|privatesection|protected|protectedsection|public|publicsection|pure|showinitializer|showrefby|showrefs|tableofcontents|\\$|\\#|<|>|%|"|\\.|=|::|\\||\\-\\-|\\-\\-\\-)\\b(?:\\{[^}]*\\})?',
              "name": "storage.type.class.doxygen.cpp"
            }, {
              "captures": {
                "1": {
                  "name": "storage.type.class.doxygen.cpp"
                },
                "2": {
                  "name": "markup.italic.doxygen.cpp"
                }
              },
              "match": "((?<=[\\s*!\\/])[\\\\@](?:a|em|e))\\s+(\\S+)"
            }, {
              "captures": {
                "1": {
                  "name": "storage.type.class.doxygen.cpp"
                },
                "2": {
                  "name": "markup.bold.doxygen.cpp"
                }
              },
              "match": "((?<=[\\s*!\\/])[\\\\@]b)\\s+(\\S+)"
            }, {
              "captures": {
                "1": {
                  "name": "storage.type.class.doxygen.cpp"
                },
                "2": {
                  "name": "markup.inline.raw.string.cpp"
                }
              },
              "match": "((?<=[\\s*!\\/])[\\\\@](?:c|p))\\s+(\\S+)"
            }, {
              "match": "(?<=[\\s*!\\/])[\\\\@](?:a|anchor|b|c|cite|copybrief|copydetail|copydoc|def|dir|dontinclude|e|em|emoji|enum|example|extends|file|idlexcept|implements|include|includedoc|includelineno|latexinclude|link|memberof|namespace|p|package|ref|refitem|related|relates|relatedalso|relatesalso|verbinclude)\\b(?:\\{[^}]*\\})?",
              "name": "storage.type.class.doxygen.cpp"
            }, {
              "match": "(?<=[\\s*!\\/])[\\\\@](?:addindex|addtogroup|category|class|defgroup|diafile|dotfile|elseif|fn|headerfile|if|ifnot|image|ingroup|interface|line|mainpage|mscfile|name|overload|page|property|protocol|section|skip|skipline|snippet|snippetdoc|snippetlineno|struct|subpage|subsection|subsubsection|typedef|union|until|vhdlflow|weakgroup)\\b(?:\\{[^}]*\\})?",
              "name": "storage.type.class.doxygen.cpp"
            }, {
              "captures": {
                "1": {
                  "name": "storage.type.class.doxygen.cpp"
                },
                "2": {
                  "patterns": [{
                    "match": "in|out",
                    "name": "keyword.other.parameter.direction.$0.cpp"
                  }]
                },
                "3": {
                  "patterns": [{
                    "match": "(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)",
                    "name": "variable.parameter.cpp"
                  }, {
                    "match": ",",
                    "name": "punctuation.cpp"
                  }]
                },
                "4": {
                  "name": "variable.parameter.cpp"
                },
                "5": {
                  "name": "punctuation.cpp"
                },
                "6": {
                  "name": "variable.parameter.cpp"
                }
              },
              "match": "((?<=[\\s*!\\/])[\\\\@]param)(?:\\s*\\[((?:,?(?:\\s+)?(?:in|out)(?:\\s+)?)+)\\])?(\\s+((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))(?:(,)(?:\\s+)?((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)))*)"
            }, {
              "match": "(?<=[\\s*!\\/])[\\\\@](?:arg|attention|author|authors|brief|bug|copyright|date|deprecated|details|exception|invariant|li|note|par|paragraph|param|post|pre|remark|remarks|result|return|returns|retval|sa|see|short|since|test|throw|throws|todo|tparam|version|warning|xrefitem)\\b(?:\\{[^}]*\\})?",
              "name": "storage.type.class.doxygen.cpp"
            }, {
              "match": "(?<=[\\s*!\\/])[\\\\@](?:code|cond|docbookonly|dot|htmlonly|internal|latexonly|link|manonly|msc|parblock|rtfonly|secreflist|startuml|verbatim|xmlonly|endcode|endcond|enddocbookonly|enddot|endhtmlonly|endinternal|endlatexonly|endlink|endmanonly|endmsc|endparblock|endrtfonly|endsecreflist|enduml|endverbatim|endxmlonly)\\b(?:\\{[^}]*\\})?",
              "name": "storage.type.class.doxygen.cpp"
            }, {
              "match": "(?:\\b[A-Z]+:|@[a-z_]+:)",
              "name": "storage.type.class.gtkdoc.cpp"
            }]
          },
          "3": {
            "name": "punctuation.definition.comment.end.documentation.cpp"
          }
        },
        "match": "(\\/\\*[!*]+(?=\\s))(.+)([!*]*\\*\\/)",
        "name": "comment.block.documentation.cpp"
      }, {
        "begin": "(?:\\s+)?+\\/\\*[!*]+(?:(?:\\n|$)|(?=\\s))",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.comment.begin.documentation.cpp"
          }
        },
        "end": "[!*]*\\*\\/|(?=(?<!\\\\)\n)",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.comment.end.documentation.cpp"
          }
        },
        "name": "comment.block.documentation.cpp",
        "patterns": [{
          "match": '(?<=[\\s*!\\/])[\\\\@](?:callergraph|callgraph|else|endif|f\\$|f\\[|f\\]|hidecallergraph|hidecallgraph|hiderefby|hiderefs|hideinitializer|htmlinclude|n|nosubgrouping|private|privatesection|protected|protectedsection|public|publicsection|pure|showinitializer|showrefby|showrefs|tableofcontents|\\$|\\#|<|>|%|"|\\.|=|::|\\||\\-\\-|\\-\\-\\-)\\b(?:\\{[^}]*\\})?',
          "name": "storage.type.class.doxygen.cpp"
        }, {
          "captures": {
            "1": {
              "name": "storage.type.class.doxygen.cpp"
            },
            "2": {
              "name": "markup.italic.doxygen.cpp"
            }
          },
          "match": "((?<=[\\s*!\\/])[\\\\@](?:a|em|e))\\s+(\\S+)"
        }, {
          "captures": {
            "1": {
              "name": "storage.type.class.doxygen.cpp"
            },
            "2": {
              "name": "markup.bold.doxygen.cpp"
            }
          },
          "match": "((?<=[\\s*!\\/])[\\\\@]b)\\s+(\\S+)"
        }, {
          "captures": {
            "1": {
              "name": "storage.type.class.doxygen.cpp"
            },
            "2": {
              "name": "markup.inline.raw.string.cpp"
            }
          },
          "match": "((?<=[\\s*!\\/])[\\\\@](?:c|p))\\s+(\\S+)"
        }, {
          "match": "(?<=[\\s*!\\/])[\\\\@](?:a|anchor|b|c|cite|copybrief|copydetail|copydoc|def|dir|dontinclude|e|em|emoji|enum|example|extends|file|idlexcept|implements|include|includedoc|includelineno|latexinclude|link|memberof|namespace|p|package|ref|refitem|related|relates|relatedalso|relatesalso|verbinclude)\\b(?:\\{[^}]*\\})?",
          "name": "storage.type.class.doxygen.cpp"
        }, {
          "match": "(?<=[\\s*!\\/])[\\\\@](?:addindex|addtogroup|category|class|defgroup|diafile|dotfile|elseif|fn|headerfile|if|ifnot|image|ingroup|interface|line|mainpage|mscfile|name|overload|page|property|protocol|section|skip|skipline|snippet|snippetdoc|snippetlineno|struct|subpage|subsection|subsubsection|typedef|union|until|vhdlflow|weakgroup)\\b(?:\\{[^}]*\\})?",
          "name": "storage.type.class.doxygen.cpp"
        }, {
          "captures": {
            "1": {
              "name": "storage.type.class.doxygen.cpp"
            },
            "2": {
              "patterns": [{
                "match": "in|out",
                "name": "keyword.other.parameter.direction.$0.cpp"
              }]
            },
            "3": {
              "patterns": [{
                "match": "(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)",
                "name": "variable.parameter.cpp"
              }, {
                "match": ",",
                "name": "punctuation.cpp"
              }]
            },
            "4": {
              "name": "variable.parameter.cpp"
            },
            "5": {
              "name": "punctuation.cpp"
            },
            "6": {
              "name": "variable.parameter.cpp"
            }
          },
          "match": "((?<=[\\s*!\\/])[\\\\@]param)(?:\\s*\\[((?:,?(?:\\s+)?(?:in|out)(?:\\s+)?)+)\\])?(\\s+((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))(?:(,)(?:\\s+)?((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)))*)"
        }, {
          "match": "(?<=[\\s*!\\/])[\\\\@](?:arg|attention|author|authors|brief|bug|copyright|date|deprecated|details|exception|invariant|li|note|par|paragraph|param|post|pre|remark|remarks|result|return|returns|retval|sa|see|short|since|test|throw|throws|todo|tparam|version|warning|xrefitem)\\b(?:\\{[^}]*\\})?",
          "name": "storage.type.class.doxygen.cpp"
        }, {
          "match": "(?<=[\\s*!\\/])[\\\\@](?:code|cond|docbookonly|dot|htmlonly|internal|latexonly|link|manonly|msc|parblock|rtfonly|secreflist|startuml|verbatim|xmlonly|endcode|endcond|enddocbookonly|enddot|endhtmlonly|endinternal|endlatexonly|endlink|endmanonly|endmsc|endparblock|endrtfonly|endsecreflist|enduml|endverbatim|endxmlonly)\\b(?:\\{[^}]*\\})?",
          "name": "storage.type.class.doxygen.cpp"
        }, {
          "match": "(?:\\b[A-Z]+:|@[a-z_]+:)",
          "name": "storage.type.class.gtkdoc.cpp"
        }]
      }, {
        "include": "source.cpp#emacs_file_banner"
      }, {
        "include": "#block_comment"
      }, {
        "include": "#line_comment"
      }, {
        "include": "source.cpp#invalid_comment_end"
      }]
    },
    "constructor_inline": {
      "begin": "^((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?:(?:(?:constexpr)|(?:consteval)|(?:explicit)|(?:mutable)|(?:virtual)|(?:inline)|(?:friend))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*)((?:__cdecl|__clrcall|__stdcall|__fastcall|__thiscall|__vectorcall)?)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)(?=\\())",
      "beginCaptures": {
        "0": {
          "name": "meta.head.function.definition.special.constructor.cpp"
        },
        "1": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "2": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "3": {
          "name": "comment.block.cpp"
        },
        "4": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "5": {
          "patterns": [{
            "include": "source.cpp#functional_specifiers_pre_parameters"
          }]
        },
        "6": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "7": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "8": {
          "name": "comment.block.cpp"
        },
        "9": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "10": {
          "name": "storage.type.modifier.calling-convention.cpp"
        },
        "11": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "12": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "13": {
          "name": "comment.block.cpp"
        },
        "14": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "15": {
          "name": "entity.name.function.constructor.cpp entity.name.function.definition.special.constructor.cpp"
        }
      },
      "end": "(?:(?<=\\}|%>|\\?\\?>)|(?=[;>\\[\\]=]))|(?=(?<!\\\\)\n)",
      "endCaptures": {},
      "name": "meta.function.definition.special.constructor.cpp",
      "patterns": [{
        "begin": "\\G ?",
        "beginCaptures": {},
        "end": "(?:\\{|<%|\\?\\?<|(?=;))|(?=(?<!\\\\)\n)",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.block.begin.bracket.curly.function.definition.special.constructor.cpp"
          }
        },
        "name": "meta.head.function.definition.special.constructor.cpp",
        "patterns": [{
          "include": "#ever_present_context"
        }, {
          "captures": {
            "1": {
              "name": "keyword.operator.assignment.cpp"
            },
            "2": {
              "patterns": [{
                "include": "source.cpp#inline_comment"
              }]
            },
            "3": {
              "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
            },
            "4": {
              "name": "comment.block.cpp"
            },
            "5": {
              "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
            },
            "6": {
              "name": "keyword.other.default.function.cpp keyword.other.default.constructor.cpp"
            },
            "7": {
              "name": "keyword.other.delete.function.cpp keyword.other.delete.constructor.cpp"
            }
          },
          "match": "(\\=)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:(default)|(delete))"
        }, {
          "include": "source.cpp#functional_specifiers_pre_parameters"
        }, {
          "begin": ":",
          "beginCaptures": {
            "0": {
              "name": "punctuation.separator.initializers.cpp"
            }
          },
          "end": "(?=\\{)|(?=(?<!\\\\)\n)",
          "endCaptures": {},
          "patterns": [{
            "begin": `((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))(((?<!<)<(?!<)(?:(?:(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/)))|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<3>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)\\s*+)?(\\()`,
            "beginCaptures": {
              "1": {
                "name": "entity.name.function.call.initializer.cpp"
              },
              "2": {
                "name": "meta.template.call.cpp",
                "patterns": [{
                  "include": "#template_call_range"
                }]
              },
              "3": {},
              "4": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "5": {
                "name": "comment.block.cpp"
              },
              "6": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              },
              "7": {
                "name": "punctuation.section.arguments.begin.bracket.round.function.call.initializer.cpp"
              }
            },
            "contentName": "meta.parameter.initialization",
            "end": "\\)|(?=(?<!\\\\)\n)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.arguments.end.bracket.round.function.call.initializer.cpp"
              }
            },
            "patterns": [{
              "include": "#evaluation_context"
            }]
          }, {
            "begin": "((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))(\\{)",
            "beginCaptures": {
              "1": {
                "name": "entity.name.function.call.initializer.cpp"
              },
              "2": {
                "name": "punctuation.section.arguments.begin.bracket.round.function.call.initializer.cpp"
              }
            },
            "contentName": "meta.parameter.initialization",
            "end": "\\}|(?=(?<!\\\\)\n)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.arguments.end.bracket.round.function.call.initializer.cpp"
              }
            },
            "patterns": [{
              "include": "#evaluation_context"
            }]
          }, {
            "match": ",",
            "name": "punctuation.separator.delimiter.comma.cpp"
          }, {
            "include": "#comments"
          }]
        }, {
          "begin": "\\(",
          "beginCaptures": {
            "0": {
              "name": "punctuation.section.parameters.begin.bracket.round.special.constructor.cpp"
            }
          },
          "contentName": "meta.function.definition.parameters.special.constructor",
          "end": "\\)|(?=(?<!\\\\)\n)",
          "endCaptures": {
            "0": {
              "name": "punctuation.section.parameters.end.bracket.round.special.constructor.cpp"
            }
          },
          "patterns": [{
            "include": "#function_parameter_context"
          }, {
            "include": "#evaluation_context"
          }]
        }, {
          "include": "source.cpp#qualifiers_and_specifiers_post_parameters"
        }, {
          "include": "$self"
        }]
      }, {
        "begin": "(?<=\\{|<%|\\?\\?<)",
        "beginCaptures": {},
        "end": "\\}|%>|\\?\\?>|(?=(?<!\\\\)\n)",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.block.end.bracket.curly.function.definition.special.constructor.cpp"
          }
        },
        "name": "meta.body.function.definition.special.constructor.cpp",
        "patterns": [{
          "include": "#function_body_context"
        }]
      }, {
        "begin": "(?<=\\}|%>|\\?\\?>)[\\s]*",
        "beginCaptures": {},
        "end": "[\\s]*(?=;)|(?=(?<!\\\\)\n)",
        "endCaptures": {},
        "name": "meta.tail.function.definition.special.constructor.cpp",
        "patterns": [{
          "include": "$self"
        }]
      }]
    },
    "constructor_root": {
      "begin": `\\s*+((?:__cdecl|__clrcall|__stdcall|__fastcall|__thiscall|__vectorcall)?)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?:::)?(?:(?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)\\s*+(((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<8>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)\\s*+)?::)*+)(((?>(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))::((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:\\10)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?=\\())`,
      "beginCaptures": {
        "0": {
          "name": "meta.head.function.definition.special.constructor.cpp"
        },
        "1": {
          "name": "storage.type.modifier.calling-convention.cpp"
        },
        "2": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "3": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "4": {
          "name": "comment.block.cpp"
        },
        "5": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "6": {
          "patterns": [{
            "match": "::",
            "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.constructor.cpp"
          }, {
            "match": "(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)",
            "name": "entity.name.scope-resolution.constructor.cpp"
          }, {
            "include": "#template_call_range"
          }]
        },
        "7": {
          "patterns": [{
            "include": "#template_call_range"
          }]
        },
        "8": {},
        "9": {
          "patterns": [{
            "match": "(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?=:)",
            "name": "entity.name.type.constructor.cpp"
          }, {
            "match": "(?<=:)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*",
            "name": "entity.name.function.definition.special.constructor.cpp"
          }, {
            "match": "::",
            "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.constructor.cpp"
          }]
        },
        "10": {},
        "11": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "12": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "13": {
          "name": "comment.block.cpp"
        },
        "14": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "15": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "16": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "17": {
          "name": "comment.block.cpp"
        },
        "18": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "19": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "20": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "21": {
          "name": "comment.block.cpp"
        },
        "22": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        }
      },
      "end": "(?:(?<=\\}|%>|\\?\\?>)|(?=[;>\\[\\]=]))|(?=(?<!\\\\)\n)",
      "endCaptures": {},
      "name": "meta.function.definition.special.constructor.cpp",
      "patterns": [{
        "begin": "\\G ?",
        "beginCaptures": {},
        "end": "(?:\\{|<%|\\?\\?<|(?=;))|(?=(?<!\\\\)\n)",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.block.begin.bracket.curly.function.definition.special.constructor.cpp"
          }
        },
        "name": "meta.head.function.definition.special.constructor.cpp",
        "patterns": [{
          "include": "#ever_present_context"
        }, {
          "captures": {
            "1": {
              "name": "keyword.operator.assignment.cpp"
            },
            "2": {
              "patterns": [{
                "include": "source.cpp#inline_comment"
              }]
            },
            "3": {
              "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
            },
            "4": {
              "name": "comment.block.cpp"
            },
            "5": {
              "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
            },
            "6": {
              "name": "keyword.other.default.function.cpp keyword.other.default.constructor.cpp"
            },
            "7": {
              "name": "keyword.other.delete.function.cpp keyword.other.delete.constructor.cpp"
            }
          },
          "match": "(\\=)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:(default)|(delete))"
        }, {
          "include": "source.cpp#functional_specifiers_pre_parameters"
        }, {
          "begin": ":",
          "beginCaptures": {
            "0": {
              "name": "punctuation.separator.initializers.cpp"
            }
          },
          "end": "(?=\\{)|(?=(?<!\\\\)\n)",
          "endCaptures": {},
          "patterns": [{
            "begin": `((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))(((?<!<)<(?!<)(?:(?:(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/)))|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<3>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)\\s*+)?(\\()`,
            "beginCaptures": {
              "1": {
                "name": "entity.name.function.call.initializer.cpp"
              },
              "2": {
                "name": "meta.template.call.cpp",
                "patterns": [{
                  "include": "#template_call_range"
                }]
              },
              "3": {},
              "4": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "5": {
                "name": "comment.block.cpp"
              },
              "6": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              },
              "7": {
                "name": "punctuation.section.arguments.begin.bracket.round.function.call.initializer.cpp"
              }
            },
            "contentName": "meta.parameter.initialization",
            "end": "\\)|(?=(?<!\\\\)\n)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.arguments.end.bracket.round.function.call.initializer.cpp"
              }
            },
            "patterns": [{
              "include": "#evaluation_context"
            }]
          }, {
            "begin": "((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))(\\{)",
            "beginCaptures": {
              "1": {
                "name": "entity.name.function.call.initializer.cpp"
              },
              "2": {
                "name": "punctuation.section.arguments.begin.bracket.round.function.call.initializer.cpp"
              }
            },
            "contentName": "meta.parameter.initialization",
            "end": "\\}|(?=(?<!\\\\)\n)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.arguments.end.bracket.round.function.call.initializer.cpp"
              }
            },
            "patterns": [{
              "include": "#evaluation_context"
            }]
          }, {
            "match": ",",
            "name": "punctuation.separator.delimiter.comma.cpp"
          }, {
            "include": "#comments"
          }]
        }, {
          "begin": "\\(",
          "beginCaptures": {
            "0": {
              "name": "punctuation.section.parameters.begin.bracket.round.special.constructor.cpp"
            }
          },
          "contentName": "meta.function.definition.parameters.special.constructor",
          "end": "\\)|(?=(?<!\\\\)\n)",
          "endCaptures": {
            "0": {
              "name": "punctuation.section.parameters.end.bracket.round.special.constructor.cpp"
            }
          },
          "patterns": [{
            "include": "#function_parameter_context"
          }, {
            "include": "#evaluation_context"
          }]
        }, {
          "include": "source.cpp#qualifiers_and_specifiers_post_parameters"
        }, {
          "include": "$self"
        }]
      }, {
        "begin": "(?<=\\{|<%|\\?\\?<)",
        "beginCaptures": {},
        "end": "\\}|%>|\\?\\?>|(?=(?<!\\\\)\n)",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.block.end.bracket.curly.function.definition.special.constructor.cpp"
          }
        },
        "name": "meta.body.function.definition.special.constructor.cpp",
        "patterns": [{
          "include": "#function_body_context"
        }]
      }, {
        "begin": "(?<=\\}|%>|\\?\\?>)[\\s]*",
        "beginCaptures": {},
        "end": "[\\s]*(?=;)|(?=(?<!\\\\)\n)",
        "endCaptures": {},
        "name": "meta.tail.function.definition.special.constructor.cpp",
        "patterns": [{
          "include": "$self"
        }]
      }]
    },
    "cpp_attributes": {
      "begin": "\\[\\[",
      "beginCaptures": {
        "0": {
          "name": "punctuation.section.attribute.begin.cpp"
        }
      },
      "end": "\\]\\]|(?=(?<!\\\\)\n)",
      "endCaptures": {
        "0": {
          "name": "punctuation.section.attribute.end.cpp"
        }
      },
      "name": "support.other.attribute.cpp",
      "patterns": [{
        "include": "#attributes_context"
      }, {
        "begin": "\\(",
        "beginCaptures": {},
        "end": "\\)|(?=(?<!\\\\)\n)",
        "endCaptures": {},
        "patterns": [{
          "include": "#attributes_context"
        }, {
          "include": "#string_context"
        }, {
          "include": "#ever_present_context"
        }]
      }, {
        "captures": {
          "1": {
            "name": "keyword.other.using.directive.cpp"
          },
          "2": {
            "name": "entity.name.namespace.cpp"
          }
        },
        "match": "(using)\\s+((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))"
      }, {
        "match": ",",
        "name": "punctuation.separator.attribute.cpp"
      }, {
        "match": ":",
        "name": "punctuation.accessor.attribute.cpp"
      }, {
        "match": "(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)(?=::)",
        "name": "entity.name.namespace.cpp"
      }, {
        "match": "(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)",
        "name": "entity.other.attribute.$0.cpp"
      }, {
        "include": "source.cpp#number_literal"
      }, {
        "include": "#ever_present_context"
      }]
    },
    "curly_initializer": {
      "begin": `(\\s*+((?:(?:(?:\\[\\[.*?\\]\\]|__attribute(?:__)?\\s*\\(\\s*\\(.*?\\)\\s*\\))|__declspec\\(.*?\\))|alignas\\(.*?\\))(?!\\)))?((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:(?:(?:(?:unsigned)|(?:signed)|(?:short)|(?:long))|(?:(?:struct)|(?:class)|(?:union)|(?:enum)))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*(?:((?:::)?(?:(?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)\\s*+(((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<18>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)\\s*+)?::)*+)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))?(?!(?:(?:transaction_safe_dynamic)|(?:__has_cpp_attribute)|(?:reinterpret_cast)|(?:transaction_safe)|(?:atomic_noexcept)|(?:atomic_commit)|(?:__has_include)|(?:atomic_cancel)|(?:synchronized)|(?:thread_local)|(?:dynamic_cast)|(?:static_cast)|(?:const_cast)|(?:constexpr)|(?:co_return)|(?:constinit)|(?:namespace)|(?:protected)|(?:consteval)|(?:constexpr)|(?:constexpr)|(?:co_return)|(?:consteval)|(?:co_await)|(?:continue)|(?:template)|(?:reflexpr)|(?:volatile)|(?:register)|(?:co_await)|(?:co_yield)|(?:restrict)|(?:noexcept)|(?:volatile)|(?:override)|(?:explicit)|(?:decltype)|(?:operator)|(?:noexcept)|(?:noexcept)|(?:typename)|(?:requires)|(?:co_yield)|(?:nullptr)|(?:alignof)|(?:alignas)|(?:default)|(?:mutable)|(?:virtual)|(?:mutable)|(?:private)|(?:include)|(?:warning)|(?:_Pragma)|(?:defined)|(?:typedef)|(?:__asm__)|(?:concept)|(?:define)|(?:module)|(?:sizeof)|(?:switch)|(?:delete)|(?:pragma)|(?:and_eq)|(?:inline)|(?:xor_eq)|(?:typeid)|(?:import)|(?:extern)|(?:public)|(?:bitand)|(?:static)|(?:export)|(?:return)|(?:friend)|(?:ifndef)|(?:not_eq)|(?:false)|(?:final)|(?:break)|(?:const)|(?:catch)|(?:endif)|(?:ifdef)|(?:undef)|(?:error)|(?:audit)|(?:while)|(?:using)|(?:axiom)|(?:or_eq)|(?:compl)|(?:throw)|(?:bitor)|(?:const)|(?:line)|(?:case)|(?:else)|(?:this)|(?:true)|(?:goto)|(?:else)|(?:NULL)|(?:elif)|(?:new)|(?:asm)|(?:xor)|(?:and)|(?:try)|(?:not)|(?:for)|(?:do)|(?:if)|(?:or)|(?:if))\\b)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*\\b((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<18>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)?(?![\\w<:.]))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(\\{)`,
      "beginCaptures": {
        "1": {
          "name": "meta.qualified_type.cpp",
          "patterns": [{
            "match": "::",
            "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.cpp"
          }, {
            "match": "(?<!\\w)(?:(?:struct)|(?:class)|(?:union)|(?:enum))(?!\\w)",
            "name": "storage.type.$0.cpp"
          }, {
            "include": "#attributes_context"
          }, {
            "include": "#storage_types"
          }, {
            "include": "source.cpp#number_literal"
          }, {
            "include": "#string_context"
          }, {
            "include": "source.cpp#comma"
          }, {
            "include": "source.cpp#scope_resolution_inner_generated"
          }, {
            "begin": "<",
            "beginCaptures": {
              "0": {
                "name": "punctuation.section.angle-brackets.begin.template.call.cpp"
              }
            },
            "end": ">|(?=(?<!\\\\)\n)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.angle-brackets.end.template.call.cpp"
              }
            },
            "name": "meta.template.call.cpp",
            "patterns": [{
              "include": "#template_call_context"
            }]
          }, {
            "match": "(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*",
            "name": "entity.name.type.cpp"
          }]
        },
        "2": {
          "patterns": [{
            "include": "#attributes_context"
          }, {
            "include": "source.cpp#number_literal"
          }]
        },
        "3": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "4": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "5": {
          "name": "comment.block.cpp"
        },
        "6": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "7": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "8": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "9": {
          "name": "comment.block.cpp"
        },
        "10": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "11": {
          "patterns": [{
            "match": "::",
            "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.type.cpp"
          }, {
            "match": "(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)",
            "name": "entity.name.scope-resolution.type.cpp"
          }, {
            "include": "#template_call_range"
          }]
        },
        "12": {
          "patterns": [{
            "include": "#template_call_range"
          }]
        },
        "13": {},
        "14": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "15": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "16": {
          "name": "comment.block.cpp"
        },
        "17": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "18": {},
        "19": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "20": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "21": {
          "name": "comment.block.cpp"
        },
        "22": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "23": {
          "name": "punctuation.section.arguments.begin.bracket.curly.initializer.cpp"
        }
      },
      "end": "\\}|(?=(?<!\\\\)\n)",
      "endCaptures": {
        "0": {
          "name": "punctuation.section.arguments.end.bracket.curly.initializer.cpp"
        }
      },
      "name": "meta.initialization.cpp",
      "patterns": [{
        "include": "#evaluation_context"
      }, {
        "include": "source.cpp#comma"
      }]
    },
    "decltype": {
      "begin": "((?<!\\w)decltype(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(\\()",
      "beginCaptures": {
        "1": {
          "name": "keyword.operator.functionlike.cpp keyword.other.decltype.cpp storage.type.decltype.cpp"
        },
        "2": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "3": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "4": {
          "name": "comment.block.cpp"
        },
        "5": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "6": {
          "name": "punctuation.section.arguments.begin.bracket.round.decltype.cpp"
        }
      },
      "contentName": "meta.arguments.decltype",
      "end": "\\)|(?=(?<!\\\\)\n)",
      "endCaptures": {
        "0": {
          "name": "punctuation.section.arguments.end.bracket.round.decltype.cpp"
        }
      },
      "patterns": [{
        "include": "#evaluation_context"
      }]
    },
    "decltype_specifier": {
      "begin": "((?<!\\w)decltype(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(\\()",
      "beginCaptures": {
        "1": {
          "name": "keyword.operator.functionlike.cpp keyword.other.decltype.cpp storage.type.decltype.cpp"
        },
        "2": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "3": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "4": {
          "name": "comment.block.cpp"
        },
        "5": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "6": {
          "name": "punctuation.section.arguments.begin.bracket.round.decltype.cpp"
        }
      },
      "contentName": "meta.arguments.decltype",
      "end": "\\)|(?=(?<!\\\\)\n)",
      "endCaptures": {
        "0": {
          "name": "punctuation.section.arguments.end.bracket.round.decltype.cpp"
        }
      },
      "patterns": [{
        "include": "#evaluation_context"
      }]
    },
    "default_statement": {
      "begin": "((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?<!\\w)default(?!\\w))",
      "beginCaptures": {
        "1": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "2": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "3": {
          "name": "comment.block.cpp"
        },
        "4": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "5": {
          "name": "keyword.control.default.cpp"
        }
      },
      "end": ":|(?=(?<!\\\\)\n)",
      "endCaptures": {
        "0": {
          "name": "punctuation.separator.colon.case.default.cpp"
        }
      },
      "name": "meta.conditional.case.cpp",
      "patterns": [{
        "include": "#evaluation_context"
      }]
    },
    "destructor_inline": {
      "begin": "^((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?:__cdecl|__clrcall|__stdcall|__fastcall|__thiscall|__vectorcall)?)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?:(?:(?:constexpr)|(?:consteval)|(?:explicit)|(?:mutable)|(?:virtual)|(?:inline)|(?:friend))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*)(~(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)(?=\\())",
      "beginCaptures": {
        "0": {
          "name": "meta.head.function.definition.special.member.destructor.cpp"
        },
        "1": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "2": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "3": {
          "name": "comment.block.cpp"
        },
        "4": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "5": {
          "name": "storage.type.modifier.calling-convention.cpp"
        },
        "6": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "7": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "8": {
          "name": "comment.block.cpp"
        },
        "9": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "10": {
          "patterns": [{
            "include": "source.cpp#functional_specifiers_pre_parameters"
          }]
        },
        "11": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "12": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "13": {
          "name": "comment.block.cpp"
        },
        "14": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "15": {
          "name": "entity.name.function.destructor.cpp entity.name.function.definition.special.member.destructor.cpp"
        }
      },
      "end": "(?:(?<=\\}|%>|\\?\\?>)|(?=[;>\\[\\]=]))|(?=(?<!\\\\)\n)",
      "endCaptures": {},
      "name": "meta.function.definition.special.member.destructor.cpp",
      "patterns": [{
        "begin": "\\G ?",
        "beginCaptures": {},
        "end": "(?:\\{|<%|\\?\\?<|(?=;))|(?=(?<!\\\\)\n)",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.block.begin.bracket.curly.function.definition.special.member.destructor.cpp"
          }
        },
        "name": "meta.head.function.definition.special.member.destructor.cpp",
        "patterns": [{
          "include": "#ever_present_context"
        }, {
          "captures": {
            "1": {
              "name": "keyword.operator.assignment.cpp"
            },
            "2": {
              "patterns": [{
                "include": "source.cpp#inline_comment"
              }]
            },
            "3": {
              "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
            },
            "4": {
              "name": "comment.block.cpp"
            },
            "5": {
              "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
            },
            "6": {
              "name": "keyword.other.default.function.cpp keyword.other.default.constructor.cpp keyword.other.default.destructor.cpp"
            },
            "7": {
              "name": "keyword.other.delete.function.cpp keyword.other.delete.constructor.cpp keyword.other.delete.destructor.cpp"
            }
          },
          "match": "(\\=)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:(default)|(delete))"
        }, {
          "begin": "\\(",
          "beginCaptures": {
            "0": {
              "name": "punctuation.section.parameters.begin.bracket.round.special.member.destructor.cpp"
            }
          },
          "contentName": "meta.function.definition.parameters.special.member.destructor",
          "end": "\\)|(?=(?<!\\\\)\n)",
          "endCaptures": {
            "0": {
              "name": "punctuation.section.parameters.end.bracket.round.special.member.destructor.cpp"
            }
          },
          "patterns": []
        }, {
          "include": "source.cpp#qualifiers_and_specifiers_post_parameters"
        }, {
          "include": "$self"
        }]
      }, {
        "begin": "(?<=\\{|<%|\\?\\?<)",
        "beginCaptures": {},
        "end": "\\}|%>|\\?\\?>|(?=(?<!\\\\)\n)",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.block.end.bracket.curly.function.definition.special.member.destructor.cpp"
          }
        },
        "name": "meta.body.function.definition.special.member.destructor.cpp",
        "patterns": [{
          "include": "#function_body_context"
        }]
      }, {
        "begin": "(?<=\\}|%>|\\?\\?>)[\\s]*",
        "beginCaptures": {},
        "end": "[\\s]*(?=;)|(?=(?<!\\\\)\n)",
        "endCaptures": {},
        "name": "meta.tail.function.definition.special.member.destructor.cpp",
        "patterns": [{
          "include": "$self"
        }]
      }]
    },
    "destructor_root": {
      "begin": `((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?:__cdecl|__clrcall|__stdcall|__fastcall|__thiscall|__vectorcall)?)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?:::)?(?:(?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)\\s*+(((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<12>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)\\s*+)?::)*+)(((?>(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))::((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))~(?:\\14)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?=\\())`,
      "beginCaptures": {
        "0": {
          "name": "meta.head.function.definition.special.member.destructor.cpp"
        },
        "1": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "2": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "3": {
          "name": "comment.block.cpp"
        },
        "4": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "5": {
          "name": "storage.type.modifier.calling-convention.cpp"
        },
        "6": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "7": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "8": {
          "name": "comment.block.cpp"
        },
        "9": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "10": {
          "patterns": [{
            "match": "::",
            "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.destructor.cpp"
          }, {
            "match": "(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)",
            "name": "entity.name.scope-resolution.destructor.cpp"
          }, {
            "include": "#template_call_range"
          }]
        },
        "11": {
          "patterns": [{
            "include": "#template_call_range"
          }]
        },
        "12": {},
        "13": {
          "patterns": [{
            "match": "(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?=:)",
            "name": "entity.name.type.destructor.cpp"
          }, {
            "match": "(?<=:)~(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*",
            "name": "entity.name.function.definition.special.member.destructor.cpp"
          }, {
            "match": "::",
            "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.destructor.cpp"
          }]
        },
        "14": {},
        "15": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "16": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "17": {
          "name": "comment.block.cpp"
        },
        "18": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "19": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "20": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "21": {
          "name": "comment.block.cpp"
        },
        "22": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "23": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "24": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "25": {
          "name": "comment.block.cpp"
        },
        "26": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        }
      },
      "end": "(?:(?<=\\}|%>|\\?\\?>)|(?=[;>\\[\\]=]))|(?=(?<!\\\\)\n)",
      "endCaptures": {},
      "name": "meta.function.definition.special.member.destructor.cpp",
      "patterns": [{
        "begin": "\\G ?",
        "beginCaptures": {},
        "end": "(?:\\{|<%|\\?\\?<|(?=;))|(?=(?<!\\\\)\n)",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.block.begin.bracket.curly.function.definition.special.member.destructor.cpp"
          }
        },
        "name": "meta.head.function.definition.special.member.destructor.cpp",
        "patterns": [{
          "include": "#ever_present_context"
        }, {
          "captures": {
            "1": {
              "name": "keyword.operator.assignment.cpp"
            },
            "2": {
              "patterns": [{
                "include": "source.cpp#inline_comment"
              }]
            },
            "3": {
              "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
            },
            "4": {
              "name": "comment.block.cpp"
            },
            "5": {
              "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
            },
            "6": {
              "name": "keyword.other.default.function.cpp keyword.other.default.constructor.cpp keyword.other.default.destructor.cpp"
            },
            "7": {
              "name": "keyword.other.delete.function.cpp keyword.other.delete.constructor.cpp keyword.other.delete.destructor.cpp"
            }
          },
          "match": "(\\=)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:(default)|(delete))"
        }, {
          "begin": "\\(",
          "beginCaptures": {
            "0": {
              "name": "punctuation.section.parameters.begin.bracket.round.special.member.destructor.cpp"
            }
          },
          "contentName": "meta.function.definition.parameters.special.member.destructor",
          "end": "\\)|(?=(?<!\\\\)\n)",
          "endCaptures": {
            "0": {
              "name": "punctuation.section.parameters.end.bracket.round.special.member.destructor.cpp"
            }
          },
          "patterns": []
        }, {
          "include": "source.cpp#qualifiers_and_specifiers_post_parameters"
        }, {
          "include": "$self"
        }]
      }, {
        "begin": "(?<=\\{|<%|\\?\\?<)",
        "beginCaptures": {},
        "end": "\\}|%>|\\?\\?>|(?=(?<!\\\\)\n)",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.block.end.bracket.curly.function.definition.special.member.destructor.cpp"
          }
        },
        "name": "meta.body.function.definition.special.member.destructor.cpp",
        "patterns": [{
          "include": "#function_body_context"
        }]
      }, {
        "begin": "(?<=\\}|%>|\\?\\?>)[\\s]*",
        "beginCaptures": {},
        "end": "[\\s]*(?=;)|(?=(?<!\\\\)\n)",
        "endCaptures": {},
        "name": "meta.tail.function.definition.special.member.destructor.cpp",
        "patterns": [{
          "include": "$self"
        }]
      }]
    },
    "diagnostic": {
      "begin": "(^((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(#)(?:\\s+)?((?:error|warning)))\\b(?:\\s+)?",
      "beginCaptures": {
        "1": {
          "name": "keyword.control.directive.diagnostic.$7.cpp"
        },
        "2": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "3": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "4": {
          "name": "comment.block.cpp"
        },
        "5": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "6": {
          "name": "punctuation.definition.directive.cpp"
        },
        "7": {}
      },
      "end": "(?<!\\\\)(?:(?=\\n)|(?<=^\\n|[^\\\\]\\n)(?=$))|(?=(?<!\\\\)\n)",
      "endCaptures": {},
      "name": "meta.preprocessor.diagnostic.$reference(directive).cpp",
      "patterns": [{
        "include": "#comments"
      }, {
        "begin": '"',
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.string.begin.cpp"
          }
        },
        "end": '(?:(")|(?<!\\\\)(?:(?=\\n)|(?<=^\\n|[^\\\\]\\n)(?=$)))|(?=(?<!\\\\)\n)',
        "endCaptures": {
          "1": {
            "name": "punctuation.definition.string.end.cpp"
          }
        },
        "name": "string.quoted.double.cpp",
        "patterns": [{
          "include": "source.cpp#line_continuation_character"
        }]
      }, {
        "begin": "'",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.string.begin.cpp"
          }
        },
        "end": "(?:(')|(?<!\\\\)(?:(?=\\n)|(?<=^\\n|[^\\\\]\\n)(?=$)))|(?=(?<!\\\\)\n)",
        "endCaptures": {
          "1": {
            "name": "punctuation.definition.string.end.cpp"
          }
        },
        "name": "string.quoted.single.cpp",
        "patterns": [{
          "include": "source.cpp#line_continuation_character"
        }]
      }, {
        "begin": `[^'"]`,
        "beginCaptures": {},
        "end": "(?<!\\\\)(?:(?=\\n)|(?<=^\\n|[^\\\\]\\n)(?=$))|(?=(?<!\\\\)\n)",
        "endCaptures": {},
        "name": "string.unquoted.cpp",
        "patterns": [{
          "include": "source.cpp#line_continuation_character"
        }, {
          "include": "#comments"
        }]
      }]
    },
    "enum_block": {
      "begin": `((?<!\\w)enum(?!\\w))(?:\\s+(class|struct))?(?:(?:\\s+|((?:(?:(?:\\[\\[.*?\\]\\]|__attribute(?:__)?\\s*\\(\\s*\\(.*?\\)\\s*\\))|__declspec\\(.*?\\))|alignas\\(.*?\\))(?!\\))))|(?={))(?:\\s+)?((?:(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))?)(?:(?:\\s+)?(:)(?:\\s+)?(?:((::)?(?:(?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)\\s*+(((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<12>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)\\s*+)?::)*\\s*+)((?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))\\s*+(((?<!<)<(?!<)(?:(?:(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/)))|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<12>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)\\s*+)?(::))?(?:\\s+)?((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)))?`,
      "beginCaptures": {
        "0": {
          "name": "meta.head.enum.cpp"
        },
        "1": {
          "name": "storage.type.enum.cpp"
        },
        "2": {
          "name": "storage.type.enum.enum-key.$2.cpp"
        },
        "3": {
          "patterns": [{
            "include": "#attributes_context"
          }, {
            "include": "source.cpp#number_literal"
          }]
        },
        "4": {
          "name": "entity.name.type.enum.cpp"
        },
        "5": {
          "name": "punctuation.separator.colon.type-specifier.cpp"
        },
        "6": {
          "patterns": [{
            "include": "source.cpp#scope_resolution_inner_generated"
          }]
        },
        "7": {
          "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.cpp"
        },
        "8": {
          "patterns": [{
            "include": "#template_call_range"
          }]
        },
        "9": {},
        "10": {
          "name": "entity.name.scope-resolution.cpp"
        },
        "11": {
          "name": "meta.template.call.cpp",
          "patterns": [{
            "include": "#template_call_range"
          }]
        },
        "12": {},
        "13": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "14": {
          "name": "comment.block.cpp"
        },
        "15": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "16": {
          "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.cpp"
        },
        "17": {
          "name": "storage.type.integral.$17.cpp"
        }
      },
      "end": "(?:(?:(?<=\\}|%>|\\?\\?>)(?:\\s+)?(;)|(;))|(?=[;>\\[\\]=]))|(?=(?<!\\\\)\n)",
      "endCaptures": {
        "1": {
          "name": "punctuation.terminator.statement.cpp"
        },
        "2": {
          "name": "punctuation.terminator.statement.cpp"
        }
      },
      "name": "meta.block.enum.cpp",
      "patterns": [{
        "begin": "\\G ?",
        "beginCaptures": {},
        "end": "(?:\\{|<%|\\?\\?<|(?=;))|(?=(?<!\\\\)\n)",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.block.begin.bracket.curly.enum.cpp"
          }
        },
        "name": "meta.head.enum.cpp",
        "patterns": [{
          "include": "$self"
        }]
      }, {
        "begin": "(?<=\\{|<%|\\?\\?<)",
        "beginCaptures": {},
        "end": "\\}|%>|\\?\\?>|(?=(?<!\\\\)\n)",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.block.end.bracket.curly.enum.cpp"
          }
        },
        "name": "meta.body.enum.cpp",
        "patterns": [{
          "include": "#ever_present_context"
        }, {
          "include": "source.cpp#enumerator_list"
        }, {
          "include": "#comments"
        }, {
          "include": "source.cpp#comma"
        }, {
          "include": "source.cpp#semicolon"
        }]
      }, {
        "begin": "(?<=\\}|%>|\\?\\?>)[\\s]*",
        "beginCaptures": {},
        "end": "[\\s]*(?=;)|(?=(?<!\\\\)\n)",
        "endCaptures": {},
        "name": "meta.tail.enum.cpp",
        "patterns": [{
          "include": "$self"
        }]
      }]
    },
    "evaluation_context": {
      "patterns": [{
        "include": "#ever_present_context"
      }, {
        "include": "#string_context"
      }, {
        "include": "source.cpp#number_literal"
      }, {
        "include": "#method_access"
      }, {
        "include": "source.cpp#member_access"
      }, {
        "include": "source.cpp#predefined_macros"
      }, {
        "include": "#operators"
      }, {
        "include": "source.cpp#memory_operators"
      }, {
        "include": "source.cpp#wordlike_operators"
      }, {
        "include": "source.cpp#type_casting_operators"
      }, {
        "include": "source.cpp#control_flow_keywords"
      }, {
        "include": "source.cpp#exception_keywords"
      }, {
        "include": "source.cpp#the_this_keyword"
      }, {
        "include": "source.cpp#language_constants"
      }, {
        "include": "#builtin_storage_type_initilizer"
      }, {
        "include": "source.cpp#qualifiers_and_specifiers_post_parameters"
      }, {
        "include": "source.cpp#functional_specifiers_pre_parameters"
      }, {
        "include": "#storage_types"
      }, {
        "include": "#lambdas"
      }, {
        "include": "#attributes_context"
      }, {
        "include": "#parentheses"
      }, {
        "include": "#function_call"
      }, {
        "include": "source.cpp#scope_resolution_inner_generated"
      }, {
        "include": "#square_brackets"
      }, {
        "include": "source.cpp#semicolon"
      }, {
        "include": "source.cpp#comma"
      }]
    },
    "ever_present_context": {
      "patterns": [{
        "include": "source.cpp#pragma_mark"
      }, {
        "include": "#pragma"
      }, {
        "include": "source.cpp#include"
      }, {
        "include": "#line"
      }, {
        "include": "#diagnostic"
      }, {
        "include": "source.cpp#undef"
      }, {
        "include": "#preprocessor_conditional_range"
      }, {
        "include": "source.cpp#single_line_macro"
      }, {
        "include": "#macro"
      }, {
        "include": "source.cpp#preprocessor_conditional_standalone"
      }, {
        "include": "source.cpp#macro_argument"
      }, {
        "include": "#comments"
      }, {
        "include": "source.cpp#line_continuation_character"
      }]
    },
    "extern_block": {
      "begin": '((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(extern)(?=\\s*\\")',
      "beginCaptures": {
        "0": {
          "name": "meta.head.extern.cpp"
        },
        "1": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "2": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "3": {
          "name": "comment.block.cpp"
        },
        "4": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "5": {
          "name": "storage.type.extern.cpp"
        }
      },
      "end": "(?:(?:(?<=\\}|%>|\\?\\?>)(?:\\s+)?(;)|(;))|(?=[;>\\[\\]=]))|(?=(?<!\\\\)\n)",
      "endCaptures": {
        "1": {
          "name": "punctuation.terminator.statement.cpp"
        },
        "2": {
          "name": "punctuation.terminator.statement.cpp"
        }
      },
      "name": "meta.block.extern.cpp",
      "patterns": [{
        "begin": "\\G ?",
        "beginCaptures": {},
        "end": "(?:\\{|<%|\\?\\?<|(?=;))|(?=(?<!\\\\)\n)",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.block.begin.bracket.curly.extern.cpp"
          }
        },
        "name": "meta.head.extern.cpp",
        "patterns": [{
          "include": "$self"
        }]
      }, {
        "begin": "(?<=\\{|<%|\\?\\?<)",
        "beginCaptures": {},
        "end": "\\}|%>|\\?\\?>|(?=(?<!\\\\)\n)",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.block.end.bracket.curly.extern.cpp"
          }
        },
        "name": "meta.body.extern.cpp",
        "patterns": [{
          "include": "$self"
        }]
      }, {
        "begin": "(?<=\\}|%>|\\?\\?>)[\\s]*",
        "beginCaptures": {},
        "end": "[\\s]*(?=;)|(?=(?<!\\\\)\n)",
        "endCaptures": {},
        "name": "meta.tail.extern.cpp",
        "patterns": [{
          "include": "$self"
        }]
      }, {
        "include": "$self"
      }]
    },
    "function_body_context": {
      "patterns": [{
        "include": "#ever_present_context"
      }, {
        "include": "#using_namespace"
      }, {
        "include": "source.cpp#type_alias"
      }, {
        "include": "source.cpp#using_name"
      }, {
        "include": "source.cpp#namespace_alias"
      }, {
        "include": "#typedef_class"
      }, {
        "include": "#typedef_struct"
      }, {
        "include": "#typedef_union"
      }, {
        "include": "source.cpp#misc_keywords"
      }, {
        "include": "source.cpp#standard_declares"
      }, {
        "include": "#class_block"
      }, {
        "include": "#struct_block"
      }, {
        "include": "#union_block"
      }, {
        "include": "#enum_block"
      }, {
        "include": "source.cpp#access_control_keywords"
      }, {
        "include": "#block"
      }, {
        "include": "#static_assert"
      }, {
        "include": "#assembly"
      }, {
        "include": "#function_pointer"
      }, {
        "include": "#switch_statement"
      }, {
        "include": "source.cpp#goto_statement"
      }, {
        "include": "#evaluation_context"
      }, {
        "include": "source.cpp#label"
      }]
    },
    "function_call": {
      "begin": `((::)?(?:(?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)\\s*+(((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<11>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)\\s*+)?::)*\\s*+)((?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*)\\b(?<!\\Wreinterpret_cast|^reinterpret_cast|\\Watomic_noexcept|^atomic_noexcept|\\Wuint_least16_t|^uint_least16_t|\\Wuint_least32_t|^uint_least32_t|\\Wuint_least64_t|^uint_least64_t|\\Watomic_cancel|^atomic_cancel|\\Watomic_commit|^atomic_commit|\\Wuint_least8_t|^uint_least8_t|\\Wuint_fast16_t|^uint_fast16_t|\\Wuint_fast32_t|^uint_fast32_t|\\Wint_least16_t|^int_least16_t|\\Wint_least32_t|^int_least32_t|\\Wint_least64_t|^int_least64_t|\\Wuint_fast64_t|^uint_fast64_t|\\Wthread_local|^thread_local|\\Wint_fast16_t|^int_fast16_t|\\Wint_fast32_t|^int_fast32_t|\\Wint_fast64_t|^int_fast64_t|\\Wsynchronized|^synchronized|\\Wuint_fast8_t|^uint_fast8_t|\\Wdynamic_cast|^dynamic_cast|\\Wint_least8_t|^int_least8_t|\\Wint_fast8_t|^int_fast8_t|\\Wstatic_cast|^static_cast|\\Wsuseconds_t|^suseconds_t|\\Wconst_cast|^const_cast|\\Wuseconds_t|^useconds_t|\\Wconstinit|^constinit|\\Wco_return|^co_return|\\Wuintmax_t|^uintmax_t|\\Wuintmax_t|^uintmax_t|\\Wuintmax_t|^uintmax_t|\\Wconstexpr|^constexpr|\\Wconsteval|^consteval|\\Wconstexpr|^constexpr|\\Wconstexpr|^constexpr|\\Wconsteval|^consteval|\\Wprotected|^protected|\\Wnamespace|^namespace|\\Wblksize_t|^blksize_t|\\Wco_return|^co_return|\\Win_addr_t|^in_addr_t|\\Win_port_t|^in_port_t|\\Wuintptr_t|^uintptr_t|\\Wtemplate|^template|\\Wnoexcept|^noexcept|\\Wnoexcept|^noexcept|\\Wcontinue|^continue|\\Wco_await|^co_await|\\Wco_yield|^co_yield|\\Wunsigned|^unsigned|\\Wu_quad_t|^u_quad_t|\\Wblkcnt_t|^blkcnt_t|\\Wuint16_t|^uint16_t|\\Wuint32_t|^uint32_t|\\Wuint64_t|^uint64_t|\\Wintptr_t|^intptr_t|\\Wintmax_t|^intmax_t|\\Wintmax_t|^intmax_t|\\Wvolatile|^volatile|\\Wregister|^register|\\Wrestrict|^restrict|\\Wexplicit|^explicit|\\Wvolatile|^volatile|\\Wnoexcept|^noexcept|\\Woperator|^operator|\\Wdecltype|^decltype|\\Wtypename|^typename|\\Wrequires|^requires|\\Wco_await|^co_await|\\Wco_yield|^co_yield|\\Wreflexpr|^reflexpr|\\Wswblk_t|^swblk_t|\\Wvirtual|^virtual|\\Wssize_t|^ssize_t|\\Wconcept|^concept|\\Wmutable|^mutable|\\Wfixpt_t|^fixpt_t|\\Wint16_t|^int16_t|\\Wint32_t|^int32_t|\\Wint64_t|^int64_t|\\Wuint8_t|^uint8_t|\\Wtypedef|^typedef|\\Wdaddr_t|^daddr_t|\\Wcaddr_t|^caddr_t|\\Wqaddr_t|^qaddr_t|\\Wdefault|^default|\\Wnlink_t|^nlink_t|\\Wsegsz_t|^segsz_t|\\Wu_short|^u_short|\\Wwchar_t|^wchar_t|\\Wprivate|^private|\\W__asm__|^__asm__|\\Walignas|^alignas|\\Walignof|^alignof|\\Wmutable|^mutable|\\Wnullptr|^nullptr|\\Wclock_t|^clock_t|\\Wmode_t|^mode_t|\\Wpublic|^public|\\Wsize_t|^size_t|\\Wdouble|^double|\\Wquad_t|^quad_t|\\Wstatic|^static|\\Wtime_t|^time_t|\\Wmodule|^module|\\Wimport|^import|\\Wexport|^export|\\Wextern|^extern|\\Winline|^inline|\\Wxor_eq|^xor_eq|\\Wand_eq|^and_eq|\\Wreturn|^return|\\Wfriend|^friend|\\Wnot_eq|^not_eq|\\Wsigned|^signed|\\Wstruct|^struct|\\Wint8_t|^int8_t|\\Wushort|^ushort|\\Wswitch|^switch|\\Wu_long|^u_long|\\Wtypeid|^typeid|\\Wu_char|^u_char|\\Wsizeof|^sizeof|\\Wbitand|^bitand|\\Wdelete|^delete|\\Wino_t|^ino_t|\\Wkey_t|^key_t|\\Wpid_t|^pid_t|\\Woff_t|^off_t|\\Wuid_t|^uid_t|\\Wshort|^short|\\Wbreak|^break|\\Wcatch|^catch|\\Wcompl|^compl|\\Wwhile|^while|\\Wfalse|^false|\\Wclass|^class|\\Wunion|^union|\\Wconst|^const|\\Wor_eq|^or_eq|\\Wconst|^const|\\Wthrow|^throw|\\Wbitor|^bitor|\\Wu_int|^u_int|\\Wusing|^using|\\Wdiv_t|^div_t|\\Wdev_t|^dev_t|\\Wgid_t|^gid_t|\\Wfloat|^float|\\Wlong|^long|\\Wgoto|^goto|\\Wuint|^uint|\\Wid_t|^id_t|\\Wcase|^case|\\Wauto|^auto|\\Wvoid|^void|\\Wenum|^enum|\\Wtrue|^true|\\Wchar|^char|\\Wid_t|^id_t|\\WNULL|^NULL|\\Wthis|^this|\\Wbool|^bool|\\Welse|^else|\\Wfor|^for|\\Wnew|^new|\\Wnot|^not|\\Wxor|^xor|\\Wand|^and|\\Wasm|^asm|\\Wint|^int|\\Wtry|^try|\\Wdo|^do|\\Wif|^if|\\Wor|^or)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(((?<!<)<(?!<)(?:(?:(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/)))|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<11>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)\\s*+)?(\\()`,
      "beginCaptures": {
        "1": {
          "patterns": [{
            "include": "source.cpp#scope_resolution_function_call_inner_generated"
          }]
        },
        "2": {
          "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.function.call.cpp"
        },
        "3": {
          "patterns": [{
            "include": "#template_call_range"
          }]
        },
        "4": {},
        "5": {
          "name": "entity.name.function.call.cpp"
        },
        "6": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "7": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "8": {
          "name": "comment.block.cpp"
        },
        "9": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "10": {
          "name": "meta.template.call.cpp",
          "patterns": [{
            "include": "#template_call_range"
          }]
        },
        "11": {},
        "12": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "13": {
          "name": "comment.block.cpp"
        },
        "14": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "15": {
          "name": "punctuation.section.arguments.begin.bracket.round.function.call.cpp"
        }
      },
      "end": "\\)|(?=(?<!\\\\)\n)",
      "endCaptures": {
        "0": {
          "name": "punctuation.section.arguments.end.bracket.round.function.call.cpp"
        }
      },
      "patterns": [{
        "include": "#evaluation_context"
      }]
    },
    "function_definition": {
      "begin": `(?:(?:^|\\G|(?<=;|\\}))|(?<=>|\\*\\/))\\s*+(?:((?<!\\w)template(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))?((?:(?:(?:\\[\\[.*?\\]\\]|__attribute(?:__)?\\s*\\(\\s*\\(.*?\\)\\s*\\))|__declspec\\(.*?\\))|alignas\\(.*?\\))(?!\\)))?((?:((?<!\\w)(?:(?:(?:constexpr)|(?:consteval)|(?:explicit)|(?:mutable)|(?:virtual)|(?:inline)|(?:friend))|(?:(?:thread_local)|(?:volatile)|(?:register)|(?:restrict)|(?:static)|(?:extern)|(?:const)))(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*)(\\s*+((?:(?:(?:\\[\\[.*?\\]\\]|__attribute(?:__)?\\s*\\(\\s*\\(.*?\\)\\s*\\))|__declspec\\(.*?\\))|alignas\\(.*?\\))(?!\\)))?((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:(?:(?:(?:unsigned)|(?:signed)|(?:short)|(?:long))|(?:(?:struct)|(?:class)|(?:union)|(?:enum)))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*(?:((?:::)?(?:(?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)\\s*+(((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<52>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)\\s*+)?::)*+)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))?(?!(?:(?:transaction_safe_dynamic)|(?:__has_cpp_attribute)|(?:reinterpret_cast)|(?:transaction_safe)|(?:atomic_noexcept)|(?:atomic_commit)|(?:__has_include)|(?:atomic_cancel)|(?:synchronized)|(?:thread_local)|(?:dynamic_cast)|(?:static_cast)|(?:const_cast)|(?:constexpr)|(?:co_return)|(?:constinit)|(?:namespace)|(?:protected)|(?:consteval)|(?:constexpr)|(?:constexpr)|(?:co_return)|(?:consteval)|(?:co_await)|(?:continue)|(?:template)|(?:reflexpr)|(?:volatile)|(?:register)|(?:co_await)|(?:co_yield)|(?:restrict)|(?:noexcept)|(?:volatile)|(?:override)|(?:explicit)|(?:decltype)|(?:operator)|(?:noexcept)|(?:noexcept)|(?:typename)|(?:requires)|(?:co_yield)|(?:nullptr)|(?:alignof)|(?:alignas)|(?:default)|(?:mutable)|(?:virtual)|(?:mutable)|(?:private)|(?:include)|(?:warning)|(?:_Pragma)|(?:defined)|(?:typedef)|(?:__asm__)|(?:concept)|(?:define)|(?:module)|(?:sizeof)|(?:switch)|(?:delete)|(?:pragma)|(?:and_eq)|(?:inline)|(?:xor_eq)|(?:typeid)|(?:import)|(?:extern)|(?:public)|(?:bitand)|(?:static)|(?:export)|(?:return)|(?:friend)|(?:ifndef)|(?:not_eq)|(?:false)|(?:final)|(?:break)|(?:const)|(?:catch)|(?:endif)|(?:ifdef)|(?:undef)|(?:error)|(?:audit)|(?:while)|(?:using)|(?:axiom)|(?:or_eq)|(?:compl)|(?:throw)|(?:bitor)|(?:const)|(?:line)|(?:case)|(?:else)|(?:this)|(?:true)|(?:goto)|(?:else)|(?:NULL)|(?:elif)|(?:new)|(?:asm)|(?:xor)|(?:and)|(?:try)|(?:not)|(?:for)|(?:do)|(?:if)|(?:or)|(?:if))\\b)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*\\b((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<52>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)?(?![\\w<:.]))(((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))?(?:(?:&|\\*)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*(?:&|\\*))?((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?:__cdecl|__clrcall|__stdcall|__fastcall|__thiscall|__vectorcall)?)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((::)?(?:(?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)\\s*+(((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<52>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)\\s*+)?::)*\\s*+)((?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*)\\b(?<!\\Wreinterpret_cast|^reinterpret_cast|\\Watomic_noexcept|^atomic_noexcept|\\Wuint_least16_t|^uint_least16_t|\\Wuint_least32_t|^uint_least32_t|\\Wuint_least64_t|^uint_least64_t|\\Watomic_cancel|^atomic_cancel|\\Watomic_commit|^atomic_commit|\\Wuint_least8_t|^uint_least8_t|\\Wuint_fast16_t|^uint_fast16_t|\\Wuint_fast32_t|^uint_fast32_t|\\Wint_least16_t|^int_least16_t|\\Wint_least32_t|^int_least32_t|\\Wint_least64_t|^int_least64_t|\\Wuint_fast64_t|^uint_fast64_t|\\Wthread_local|^thread_local|\\Wint_fast16_t|^int_fast16_t|\\Wint_fast32_t|^int_fast32_t|\\Wint_fast64_t|^int_fast64_t|\\Wsynchronized|^synchronized|\\Wuint_fast8_t|^uint_fast8_t|\\Wdynamic_cast|^dynamic_cast|\\Wint_least8_t|^int_least8_t|\\Wint_fast8_t|^int_fast8_t|\\Wstatic_cast|^static_cast|\\Wsuseconds_t|^suseconds_t|\\Wconst_cast|^const_cast|\\Wuseconds_t|^useconds_t|\\Wconstinit|^constinit|\\Wco_return|^co_return|\\Wuintmax_t|^uintmax_t|\\Wuintmax_t|^uintmax_t|\\Wuintmax_t|^uintmax_t|\\Wconstexpr|^constexpr|\\Wconsteval|^consteval|\\Wconstexpr|^constexpr|\\Wconstexpr|^constexpr|\\Wconsteval|^consteval|\\Wprotected|^protected|\\Wnamespace|^namespace|\\Wblksize_t|^blksize_t|\\Wco_return|^co_return|\\Win_addr_t|^in_addr_t|\\Win_port_t|^in_port_t|\\Wuintptr_t|^uintptr_t|\\Wtemplate|^template|\\Wnoexcept|^noexcept|\\Wnoexcept|^noexcept|\\Wcontinue|^continue|\\Wco_await|^co_await|\\Wco_yield|^co_yield|\\Wunsigned|^unsigned|\\Wu_quad_t|^u_quad_t|\\Wblkcnt_t|^blkcnt_t|\\Wuint16_t|^uint16_t|\\Wuint32_t|^uint32_t|\\Wuint64_t|^uint64_t|\\Wintptr_t|^intptr_t|\\Wintmax_t|^intmax_t|\\Wintmax_t|^intmax_t|\\Wvolatile|^volatile|\\Wregister|^register|\\Wrestrict|^restrict|\\Wexplicit|^explicit|\\Wvolatile|^volatile|\\Wnoexcept|^noexcept|\\Woperator|^operator|\\Wdecltype|^decltype|\\Wtypename|^typename|\\Wrequires|^requires|\\Wco_await|^co_await|\\Wco_yield|^co_yield|\\Wreflexpr|^reflexpr|\\Wswblk_t|^swblk_t|\\Wvirtual|^virtual|\\Wssize_t|^ssize_t|\\Wconcept|^concept|\\Wmutable|^mutable|\\Wfixpt_t|^fixpt_t|\\Wint16_t|^int16_t|\\Wint32_t|^int32_t|\\Wint64_t|^int64_t|\\Wuint8_t|^uint8_t|\\Wtypedef|^typedef|\\Wdaddr_t|^daddr_t|\\Wcaddr_t|^caddr_t|\\Wqaddr_t|^qaddr_t|\\Wdefault|^default|\\Wnlink_t|^nlink_t|\\Wsegsz_t|^segsz_t|\\Wu_short|^u_short|\\Wwchar_t|^wchar_t|\\Wprivate|^private|\\W__asm__|^__asm__|\\Walignas|^alignas|\\Walignof|^alignof|\\Wmutable|^mutable|\\Wnullptr|^nullptr|\\Wclock_t|^clock_t|\\Wmode_t|^mode_t|\\Wpublic|^public|\\Wsize_t|^size_t|\\Wdouble|^double|\\Wquad_t|^quad_t|\\Wstatic|^static|\\Wtime_t|^time_t|\\Wmodule|^module|\\Wimport|^import|\\Wexport|^export|\\Wextern|^extern|\\Winline|^inline|\\Wxor_eq|^xor_eq|\\Wand_eq|^and_eq|\\Wreturn|^return|\\Wfriend|^friend|\\Wnot_eq|^not_eq|\\Wsigned|^signed|\\Wstruct|^struct|\\Wint8_t|^int8_t|\\Wushort|^ushort|\\Wswitch|^switch|\\Wu_long|^u_long|\\Wtypeid|^typeid|\\Wu_char|^u_char|\\Wsizeof|^sizeof|\\Wbitand|^bitand|\\Wdelete|^delete|\\Wino_t|^ino_t|\\Wkey_t|^key_t|\\Wpid_t|^pid_t|\\Woff_t|^off_t|\\Wuid_t|^uid_t|\\Wshort|^short|\\Wbreak|^break|\\Wcatch|^catch|\\Wcompl|^compl|\\Wwhile|^while|\\Wfalse|^false|\\Wclass|^class|\\Wunion|^union|\\Wconst|^const|\\Wor_eq|^or_eq|\\Wconst|^const|\\Wthrow|^throw|\\Wbitor|^bitor|\\Wu_int|^u_int|\\Wusing|^using|\\Wdiv_t|^div_t|\\Wdev_t|^dev_t|\\Wgid_t|^gid_t|\\Wfloat|^float|\\Wlong|^long|\\Wgoto|^goto|\\Wuint|^uint|\\Wid_t|^id_t|\\Wcase|^case|\\Wauto|^auto|\\Wvoid|^void|\\Wenum|^enum|\\Wtrue|^true|\\Wchar|^char|\\Wid_t|^id_t|\\WNULL|^NULL|\\Wthis|^this|\\Wbool|^bool|\\Welse|^else|\\Wfor|^for|\\Wnew|^new|\\Wnot|^not|\\Wxor|^xor|\\Wand|^and|\\Wasm|^asm|\\Wint|^int|\\Wtry|^try|\\Wdo|^do|\\Wif|^if|\\Wor|^or)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?=\\()`,
      "beginCaptures": {
        "0": {
          "name": "meta.head.function.definition.cpp"
        },
        "1": {
          "name": "storage.type.template.cpp"
        },
        "2": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "3": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "4": {
          "name": "comment.block.cpp"
        },
        "5": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "6": {
          "patterns": [{
            "include": "#attributes_context"
          }, {
            "include": "source.cpp#number_literal"
          }]
        },
        "7": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "storage.modifier.$1.cpp"
              },
              "2": {
                "patterns": [{
                  "include": "source.cpp#inline_comment"
                }]
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "4": {
                "name": "comment.block.cpp"
              },
              "5": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "((?<!\\w)(?:(?:(?:constexpr)|(?:consteval)|(?:explicit)|(?:mutable)|(?:virtual)|(?:inline)|(?:friend))|(?:(?:thread_local)|(?:volatile)|(?:register)|(?:restrict)|(?:static)|(?:extern)|(?:const)))(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))"
          }]
        },
        "8": {
          "name": "storage.modifier.$8.cpp"
        },
        "9": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "10": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "11": {
          "name": "comment.block.cpp"
        },
        "12": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "13": {
          "name": "meta.qualified_type.cpp",
          "patterns": [{
            "match": "::",
            "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.cpp"
          }, {
            "match": "(?<!\\w)(?:(?:struct)|(?:class)|(?:union)|(?:enum))(?!\\w)",
            "name": "storage.type.$0.cpp"
          }, {
            "include": "#attributes_context"
          }, {
            "include": "#storage_types"
          }, {
            "include": "source.cpp#number_literal"
          }, {
            "include": "#string_context"
          }, {
            "include": "source.cpp#comma"
          }, {
            "include": "source.cpp#scope_resolution_inner_generated"
          }, {
            "begin": "<",
            "beginCaptures": {
              "0": {
                "name": "punctuation.section.angle-brackets.begin.template.call.cpp"
              }
            },
            "end": ">|(?=(?<!\\\\)\n)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.angle-brackets.end.template.call.cpp"
              }
            },
            "name": "meta.template.call.cpp",
            "patterns": [{
              "include": "#template_call_context"
            }]
          }, {
            "match": "(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*",
            "name": "entity.name.type.cpp"
          }]
        },
        "14": {
          "patterns": [{
            "include": "#attributes_context"
          }, {
            "include": "source.cpp#number_literal"
          }]
        },
        "15": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "16": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "17": {
          "name": "comment.block.cpp"
        },
        "18": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "19": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "20": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "21": {
          "name": "comment.block.cpp"
        },
        "22": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "23": {
          "patterns": [{
            "match": "::",
            "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.type.cpp"
          }, {
            "match": "(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)",
            "name": "entity.name.scope-resolution.type.cpp"
          }, {
            "include": "#template_call_range"
          }]
        },
        "24": {
          "patterns": [{
            "include": "#template_call_range"
          }]
        },
        "25": {},
        "26": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "27": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "28": {
          "name": "comment.block.cpp"
        },
        "29": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "30": {},
        "31": {
          "patterns": [{
            "match": "\\*",
            "name": "storage.modifier.pointer.cpp"
          }, {
            "captures": {
              "1": {
                "patterns": [{
                  "include": "source.cpp#inline_comment"
                }]
              },
              "2": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "3": {
                "name": "comment.block.cpp"
              },
              "4": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "(?:\\&((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))){2,}\\&",
            "name": "invalid.illegal.reference-type.cpp"
          }, {
            "match": "\\&",
            "name": "storage.modifier.reference.cpp"
          }]
        },
        "32": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "33": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "34": {
          "name": "comment.block.cpp"
        },
        "35": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "36": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "37": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "38": {
          "name": "comment.block.cpp"
        },
        "39": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "40": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "41": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "42": {
          "name": "comment.block.cpp"
        },
        "43": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "44": {
          "name": "storage.type.modifier.calling-convention.cpp"
        },
        "45": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "46": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "47": {
          "name": "comment.block.cpp"
        },
        "48": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "49": {
          "patterns": [{
            "include": "source.cpp#scope_resolution_function_definition_inner_generated"
          }]
        },
        "50": {
          "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.function.definition.cpp"
        },
        "51": {
          "patterns": [{
            "include": "#template_call_range"
          }]
        },
        "52": {},
        "53": {
          "name": "entity.name.function.definition.cpp"
        },
        "54": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "55": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "56": {
          "name": "comment.block.cpp"
        },
        "57": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        }
      },
      "end": "(?:(?<=\\}|%>|\\?\\?>)|(?=[;>\\[\\]=]))|(?=(?<!\\\\)\n)",
      "endCaptures": {},
      "name": "meta.function.definition.cpp",
      "patterns": [{
        "begin": "\\G ?",
        "beginCaptures": {},
        "end": "(?:\\{|<%|\\?\\?<|(?=;))|(?=(?<!\\\\)\n)",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.block.begin.bracket.curly.function.definition.cpp"
          }
        },
        "name": "meta.head.function.definition.cpp",
        "patterns": [{
          "include": "#ever_present_context"
        }, {
          "begin": "\\(",
          "beginCaptures": {
            "0": {
              "name": "punctuation.section.parameters.begin.bracket.round.cpp"
            }
          },
          "contentName": "meta.function.definition.parameters",
          "end": "\\)|(?=(?<!\\\\)\n)",
          "endCaptures": {
            "0": {
              "name": "punctuation.section.parameters.end.bracket.round.cpp"
            }
          },
          "patterns": [{
            "include": "#ever_present_context"
          }, {
            "include": "#parameter_or_maybe_value"
          }, {
            "include": "source.cpp#comma"
          }, {
            "include": "#evaluation_context"
          }]
        }, {
          "captures": {
            "1": {
              "name": "punctuation.definition.function.return-type.cpp"
            },
            "2": {
              "patterns": [{
                "include": "source.cpp#inline_comment"
              }]
            },
            "3": {
              "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
            },
            "4": {
              "name": "comment.block.cpp"
            },
            "5": {
              "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
            },
            "6": {
              "name": "meta.qualified_type.cpp",
              "patterns": [{
                "match": "::",
                "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.cpp"
              }, {
                "match": "(?<!\\w)(?:(?:struct)|(?:class)|(?:union)|(?:enum))(?!\\w)",
                "name": "storage.type.$0.cpp"
              }, {
                "include": "#attributes_context"
              }, {
                "include": "#storage_types"
              }, {
                "include": "source.cpp#number_literal"
              }, {
                "include": "#string_context"
              }, {
                "include": "source.cpp#comma"
              }, {
                "include": "source.cpp#scope_resolution_inner_generated"
              }, {
                "begin": "<",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.section.angle-brackets.begin.template.call.cpp"
                  }
                },
                "end": ">|(?=(?<!\\\\)\n)",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.section.angle-brackets.end.template.call.cpp"
                  }
                },
                "name": "meta.template.call.cpp",
                "patterns": [{
                  "include": "#template_call_context"
                }]
              }, {
                "match": "(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*",
                "name": "entity.name.type.cpp"
              }]
            },
            "7": {
              "patterns": [{
                "include": "#attributes_context"
              }, {
                "include": "source.cpp#number_literal"
              }]
            },
            "8": {
              "patterns": [{
                "include": "source.cpp#inline_comment"
              }]
            },
            "9": {
              "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
            },
            "10": {
              "name": "comment.block.cpp"
            },
            "11": {
              "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
            },
            "12": {
              "patterns": [{
                "include": "source.cpp#inline_comment"
              }]
            },
            "13": {
              "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
            },
            "14": {
              "name": "comment.block.cpp"
            },
            "15": {
              "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
            },
            "16": {
              "patterns": [{
                "match": "::",
                "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.type.cpp"
              }, {
                "match": "(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)",
                "name": "entity.name.scope-resolution.type.cpp"
              }, {
                "include": "#template_call_range"
              }]
            },
            "17": {
              "patterns": [{
                "include": "#template_call_range"
              }]
            },
            "18": {},
            "19": {
              "patterns": [{
                "include": "source.cpp#inline_comment"
              }]
            },
            "20": {
              "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
            },
            "21": {
              "name": "comment.block.cpp"
            },
            "22": {
              "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
            },
            "23": {}
          },
          "match": `(?<=^|\\))(?:\\s+)?(->)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(\\s*+((?:(?:(?:\\[\\[.*?\\]\\]|__attribute(?:__)?\\s*\\(\\s*\\(.*?\\)\\s*\\))|__declspec\\(.*?\\))|alignas\\(.*?\\))(?!\\)))?((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:(?:(?:(?:unsigned)|(?:signed)|(?:short)|(?:long))|(?:(?:struct)|(?:class)|(?:union)|(?:enum)))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*(?:((?:::)?(?:(?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)\\s*+(((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<23>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)\\s*+)?::)*+)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))?(?!(?:(?:transaction_safe_dynamic)|(?:__has_cpp_attribute)|(?:reinterpret_cast)|(?:transaction_safe)|(?:atomic_noexcept)|(?:atomic_commit)|(?:__has_include)|(?:atomic_cancel)|(?:synchronized)|(?:thread_local)|(?:dynamic_cast)|(?:static_cast)|(?:const_cast)|(?:constexpr)|(?:co_return)|(?:constinit)|(?:namespace)|(?:protected)|(?:consteval)|(?:constexpr)|(?:constexpr)|(?:co_return)|(?:consteval)|(?:co_await)|(?:continue)|(?:template)|(?:reflexpr)|(?:volatile)|(?:register)|(?:co_await)|(?:co_yield)|(?:restrict)|(?:noexcept)|(?:volatile)|(?:override)|(?:explicit)|(?:decltype)|(?:operator)|(?:noexcept)|(?:noexcept)|(?:typename)|(?:requires)|(?:co_yield)|(?:nullptr)|(?:alignof)|(?:alignas)|(?:default)|(?:mutable)|(?:virtual)|(?:mutable)|(?:private)|(?:include)|(?:warning)|(?:_Pragma)|(?:defined)|(?:typedef)|(?:__asm__)|(?:concept)|(?:define)|(?:module)|(?:sizeof)|(?:switch)|(?:delete)|(?:pragma)|(?:and_eq)|(?:inline)|(?:xor_eq)|(?:typeid)|(?:import)|(?:extern)|(?:public)|(?:bitand)|(?:static)|(?:export)|(?:return)|(?:friend)|(?:ifndef)|(?:not_eq)|(?:false)|(?:final)|(?:break)|(?:const)|(?:catch)|(?:endif)|(?:ifdef)|(?:undef)|(?:error)|(?:audit)|(?:while)|(?:using)|(?:axiom)|(?:or_eq)|(?:compl)|(?:throw)|(?:bitor)|(?:const)|(?:line)|(?:case)|(?:else)|(?:this)|(?:true)|(?:goto)|(?:else)|(?:NULL)|(?:elif)|(?:new)|(?:asm)|(?:xor)|(?:and)|(?:try)|(?:not)|(?:for)|(?:do)|(?:if)|(?:or)|(?:if))\\b)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*\\b((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<23>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)?(?![\\w<:.]))`
        }, {
          "include": "$self"
        }]
      }, {
        "begin": "(?<=\\{|<%|\\?\\?<)",
        "beginCaptures": {},
        "end": "\\}|%>|\\?\\?>|(?=(?<!\\\\)\n)",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.block.end.bracket.curly.function.definition.cpp"
          }
        },
        "name": "meta.body.function.definition.cpp",
        "patterns": [{
          "include": "#function_body_context"
        }]
      }, {
        "begin": "(?<=\\}|%>|\\?\\?>)[\\s]*",
        "beginCaptures": {},
        "end": "[\\s]*(?=;)|(?=(?<!\\\\)\n)",
        "endCaptures": {},
        "name": "meta.tail.function.definition.cpp",
        "patterns": [{
          "include": "$self"
        }]
      }]
    },
    "function_parameter_context": {
      "patterns": [{
        "include": "#ever_present_context"
      }, {
        "include": "#parameter"
      }, {
        "include": "source.cpp#comma"
      }]
    },
    "function_pointer": {
      "begin": `(\\s*+((?:(?:(?:\\[\\[.*?\\]\\]|__attribute(?:__)?\\s*\\(\\s*\\(.*?\\)\\s*\\))|__declspec\\(.*?\\))|alignas\\(.*?\\))(?!\\)))?((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:(?:(?:(?:unsigned)|(?:signed)|(?:short)|(?:long))|(?:(?:struct)|(?:class)|(?:union)|(?:enum)))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*(?:((?:::)?(?:(?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)\\s*+(((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<18>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)\\s*+)?::)*+)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))?(?!(?:(?:transaction_safe_dynamic)|(?:__has_cpp_attribute)|(?:reinterpret_cast)|(?:transaction_safe)|(?:atomic_noexcept)|(?:atomic_commit)|(?:__has_include)|(?:atomic_cancel)|(?:synchronized)|(?:thread_local)|(?:dynamic_cast)|(?:static_cast)|(?:const_cast)|(?:constexpr)|(?:co_return)|(?:constinit)|(?:namespace)|(?:protected)|(?:consteval)|(?:constexpr)|(?:constexpr)|(?:co_return)|(?:consteval)|(?:co_await)|(?:continue)|(?:template)|(?:reflexpr)|(?:volatile)|(?:register)|(?:co_await)|(?:co_yield)|(?:restrict)|(?:noexcept)|(?:volatile)|(?:override)|(?:explicit)|(?:decltype)|(?:operator)|(?:noexcept)|(?:noexcept)|(?:typename)|(?:requires)|(?:co_yield)|(?:nullptr)|(?:alignof)|(?:alignas)|(?:default)|(?:mutable)|(?:virtual)|(?:mutable)|(?:private)|(?:include)|(?:warning)|(?:_Pragma)|(?:defined)|(?:typedef)|(?:__asm__)|(?:concept)|(?:define)|(?:module)|(?:sizeof)|(?:switch)|(?:delete)|(?:pragma)|(?:and_eq)|(?:inline)|(?:xor_eq)|(?:typeid)|(?:import)|(?:extern)|(?:public)|(?:bitand)|(?:static)|(?:export)|(?:return)|(?:friend)|(?:ifndef)|(?:not_eq)|(?:false)|(?:final)|(?:break)|(?:const)|(?:catch)|(?:endif)|(?:ifdef)|(?:undef)|(?:error)|(?:audit)|(?:while)|(?:using)|(?:axiom)|(?:or_eq)|(?:compl)|(?:throw)|(?:bitor)|(?:const)|(?:line)|(?:case)|(?:else)|(?:this)|(?:true)|(?:goto)|(?:else)|(?:NULL)|(?:elif)|(?:new)|(?:asm)|(?:xor)|(?:and)|(?:try)|(?:not)|(?:for)|(?:do)|(?:if)|(?:or)|(?:if))\\b)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*\\b((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<18>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)?(?![\\w<:.]))(((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))?(?:(?:&|\\*)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*(?:&|\\*))?((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(\\()(\\*)(?:\\s+)?((?:(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*)?)(?:\\s+)?(?:(\\[)(\\w*)(\\])(?:\\s+)?)*(\\))(?:\\s+)?(\\()`,
      "beginCaptures": {
        "1": {
          "name": "meta.qualified_type.cpp",
          "patterns": [{
            "match": "::",
            "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.cpp"
          }, {
            "match": "(?<!\\w)(?:(?:struct)|(?:class)|(?:union)|(?:enum))(?!\\w)",
            "name": "storage.type.$0.cpp"
          }, {
            "include": "#attributes_context"
          }, {
            "include": "#storage_types"
          }, {
            "include": "source.cpp#number_literal"
          }, {
            "include": "#string_context"
          }, {
            "include": "source.cpp#comma"
          }, {
            "include": "source.cpp#scope_resolution_inner_generated"
          }, {
            "begin": "<",
            "beginCaptures": {
              "0": {
                "name": "punctuation.section.angle-brackets.begin.template.call.cpp"
              }
            },
            "end": ">|(?=(?<!\\\\)\n)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.angle-brackets.end.template.call.cpp"
              }
            },
            "name": "meta.template.call.cpp",
            "patterns": [{
              "include": "#template_call_context"
            }]
          }, {
            "match": "(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*",
            "name": "entity.name.type.cpp"
          }]
        },
        "2": {
          "patterns": [{
            "include": "#attributes_context"
          }, {
            "include": "source.cpp#number_literal"
          }]
        },
        "3": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "4": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "5": {
          "name": "comment.block.cpp"
        },
        "6": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "7": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "8": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "9": {
          "name": "comment.block.cpp"
        },
        "10": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "11": {
          "patterns": [{
            "match": "::",
            "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.type.cpp"
          }, {
            "match": "(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)",
            "name": "entity.name.scope-resolution.type.cpp"
          }, {
            "include": "#template_call_range"
          }]
        },
        "12": {
          "patterns": [{
            "include": "#template_call_range"
          }]
        },
        "13": {},
        "14": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "15": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "16": {
          "name": "comment.block.cpp"
        },
        "17": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "18": {},
        "19": {
          "patterns": [{
            "match": "\\*",
            "name": "storage.modifier.pointer.cpp"
          }, {
            "captures": {
              "1": {
                "patterns": [{
                  "include": "source.cpp#inline_comment"
                }]
              },
              "2": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "3": {
                "name": "comment.block.cpp"
              },
              "4": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "(?:\\&((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))){2,}\\&",
            "name": "invalid.illegal.reference-type.cpp"
          }, {
            "match": "\\&",
            "name": "storage.modifier.reference.cpp"
          }]
        },
        "20": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "21": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "22": {
          "name": "comment.block.cpp"
        },
        "23": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "24": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "25": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "26": {
          "name": "comment.block.cpp"
        },
        "27": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "28": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "29": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "30": {
          "name": "comment.block.cpp"
        },
        "31": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "32": {
          "name": "punctuation.section.parens.begin.bracket.round.function.pointer.cpp"
        },
        "33": {
          "name": "punctuation.definition.function.pointer.dereference.cpp"
        },
        "34": {
          "name": "variable.other.definition.pointer.function.cpp"
        },
        "35": {
          "name": "punctuation.definition.begin.bracket.square.cpp"
        },
        "36": {
          "patterns": [{
            "include": "#evaluation_context"
          }]
        },
        "37": {
          "name": "punctuation.definition.end.bracket.square.cpp"
        },
        "38": {
          "name": "punctuation.section.parens.end.bracket.round.function.pointer.cpp"
        },
        "39": {
          "name": "punctuation.section.parameters.begin.bracket.round.function.pointer.cpp"
        }
      },
      "end": "(\\))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?=[{=,);>]|\\n)(?!\\()|(?=(?<!\\\\)\n)",
      "endCaptures": {
        "1": {
          "name": "punctuation.section.parameters.end.bracket.round.function.pointer.cpp"
        },
        "2": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "3": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "4": {
          "name": "comment.block.cpp"
        },
        "5": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        }
      },
      "patterns": [{
        "include": "#function_parameter_context"
      }]
    },
    "function_pointer_parameter": {
      "begin": `(\\s*+((?:(?:(?:\\[\\[.*?\\]\\]|__attribute(?:__)?\\s*\\(\\s*\\(.*?\\)\\s*\\))|__declspec\\(.*?\\))|alignas\\(.*?\\))(?!\\)))?((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:(?:(?:(?:unsigned)|(?:signed)|(?:short)|(?:long))|(?:(?:struct)|(?:class)|(?:union)|(?:enum)))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*(?:((?:::)?(?:(?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)\\s*+(((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<18>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)\\s*+)?::)*+)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))?(?!(?:(?:transaction_safe_dynamic)|(?:__has_cpp_attribute)|(?:reinterpret_cast)|(?:transaction_safe)|(?:atomic_noexcept)|(?:atomic_commit)|(?:__has_include)|(?:atomic_cancel)|(?:synchronized)|(?:thread_local)|(?:dynamic_cast)|(?:static_cast)|(?:const_cast)|(?:constexpr)|(?:co_return)|(?:constinit)|(?:namespace)|(?:protected)|(?:consteval)|(?:constexpr)|(?:constexpr)|(?:co_return)|(?:consteval)|(?:co_await)|(?:continue)|(?:template)|(?:reflexpr)|(?:volatile)|(?:register)|(?:co_await)|(?:co_yield)|(?:restrict)|(?:noexcept)|(?:volatile)|(?:override)|(?:explicit)|(?:decltype)|(?:operator)|(?:noexcept)|(?:noexcept)|(?:typename)|(?:requires)|(?:co_yield)|(?:nullptr)|(?:alignof)|(?:alignas)|(?:default)|(?:mutable)|(?:virtual)|(?:mutable)|(?:private)|(?:include)|(?:warning)|(?:_Pragma)|(?:defined)|(?:typedef)|(?:__asm__)|(?:concept)|(?:define)|(?:module)|(?:sizeof)|(?:switch)|(?:delete)|(?:pragma)|(?:and_eq)|(?:inline)|(?:xor_eq)|(?:typeid)|(?:import)|(?:extern)|(?:public)|(?:bitand)|(?:static)|(?:export)|(?:return)|(?:friend)|(?:ifndef)|(?:not_eq)|(?:false)|(?:final)|(?:break)|(?:const)|(?:catch)|(?:endif)|(?:ifdef)|(?:undef)|(?:error)|(?:audit)|(?:while)|(?:using)|(?:axiom)|(?:or_eq)|(?:compl)|(?:throw)|(?:bitor)|(?:const)|(?:line)|(?:case)|(?:else)|(?:this)|(?:true)|(?:goto)|(?:else)|(?:NULL)|(?:elif)|(?:new)|(?:asm)|(?:xor)|(?:and)|(?:try)|(?:not)|(?:for)|(?:do)|(?:if)|(?:or)|(?:if))\\b)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*\\b((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<18>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)?(?![\\w<:.]))(((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))?(?:(?:&|\\*)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*(?:&|\\*))?((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(\\()(\\*)(?:\\s+)?((?:(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*)?)(?:\\s+)?(?:(\\[)(\\w*)(\\])(?:\\s+)?)*(\\))(?:\\s+)?(\\()`,
      "beginCaptures": {
        "1": {
          "name": "meta.qualified_type.cpp",
          "patterns": [{
            "match": "::",
            "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.cpp"
          }, {
            "match": "(?<!\\w)(?:(?:struct)|(?:class)|(?:union)|(?:enum))(?!\\w)",
            "name": "storage.type.$0.cpp"
          }, {
            "include": "#attributes_context"
          }, {
            "include": "#storage_types"
          }, {
            "include": "source.cpp#number_literal"
          }, {
            "include": "#string_context"
          }, {
            "include": "source.cpp#comma"
          }, {
            "include": "source.cpp#scope_resolution_inner_generated"
          }, {
            "begin": "<",
            "beginCaptures": {
              "0": {
                "name": "punctuation.section.angle-brackets.begin.template.call.cpp"
              }
            },
            "end": ">|(?=(?<!\\\\)\n)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.angle-brackets.end.template.call.cpp"
              }
            },
            "name": "meta.template.call.cpp",
            "patterns": [{
              "include": "#template_call_context"
            }]
          }, {
            "match": "(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*",
            "name": "entity.name.type.cpp"
          }]
        },
        "2": {
          "patterns": [{
            "include": "#attributes_context"
          }, {
            "include": "source.cpp#number_literal"
          }]
        },
        "3": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "4": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "5": {
          "name": "comment.block.cpp"
        },
        "6": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "7": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "8": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "9": {
          "name": "comment.block.cpp"
        },
        "10": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "11": {
          "patterns": [{
            "match": "::",
            "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.type.cpp"
          }, {
            "match": "(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)",
            "name": "entity.name.scope-resolution.type.cpp"
          }, {
            "include": "#template_call_range"
          }]
        },
        "12": {
          "patterns": [{
            "include": "#template_call_range"
          }]
        },
        "13": {},
        "14": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "15": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "16": {
          "name": "comment.block.cpp"
        },
        "17": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "18": {},
        "19": {
          "patterns": [{
            "match": "\\*",
            "name": "storage.modifier.pointer.cpp"
          }, {
            "captures": {
              "1": {
                "patterns": [{
                  "include": "source.cpp#inline_comment"
                }]
              },
              "2": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "3": {
                "name": "comment.block.cpp"
              },
              "4": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "(?:\\&((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))){2,}\\&",
            "name": "invalid.illegal.reference-type.cpp"
          }, {
            "match": "\\&",
            "name": "storage.modifier.reference.cpp"
          }]
        },
        "20": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "21": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "22": {
          "name": "comment.block.cpp"
        },
        "23": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "24": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "25": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "26": {
          "name": "comment.block.cpp"
        },
        "27": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "28": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "29": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "30": {
          "name": "comment.block.cpp"
        },
        "31": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "32": {
          "name": "punctuation.section.parens.begin.bracket.round.function.pointer.cpp"
        },
        "33": {
          "name": "punctuation.definition.function.pointer.dereference.cpp"
        },
        "34": {
          "name": "variable.parameter.pointer.function.cpp"
        },
        "35": {
          "name": "punctuation.definition.begin.bracket.square.cpp"
        },
        "36": {
          "patterns": [{
            "include": "#evaluation_context"
          }]
        },
        "37": {
          "name": "punctuation.definition.end.bracket.square.cpp"
        },
        "38": {
          "name": "punctuation.section.parens.end.bracket.round.function.pointer.cpp"
        },
        "39": {
          "name": "punctuation.section.parameters.begin.bracket.round.function.pointer.cpp"
        }
      },
      "end": "(\\))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?=[{=,);>]|\\n)(?!\\()|(?=(?<!\\\\)\n)",
      "endCaptures": {
        "1": {
          "name": "punctuation.section.parameters.end.bracket.round.function.pointer.cpp"
        },
        "2": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "3": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "4": {
          "name": "comment.block.cpp"
        },
        "5": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        }
      },
      "patterns": [{
        "include": "#function_parameter_context"
      }]
    },
    "gcc_attributes": {
      "begin": "__attribute(?:__)?\\s*\\(\\s*\\(",
      "beginCaptures": {
        "0": {
          "name": "punctuation.section.attribute.begin.cpp"
        }
      },
      "end": "\\)\\s*\\)|(?=(?<!\\\\)\n)",
      "endCaptures": {
        "0": {
          "name": "punctuation.section.attribute.end.cpp"
        }
      },
      "name": "support.other.attribute.cpp",
      "patterns": [{
        "include": "#attributes_context"
      }, {
        "begin": "\\(",
        "beginCaptures": {},
        "end": "\\)|(?=(?<!\\\\)\n)",
        "endCaptures": {},
        "patterns": [{
          "include": "#attributes_context"
        }, {
          "include": "#string_context"
        }, {
          "include": "#ever_present_context"
        }]
      }, {
        "captures": {
          "1": {
            "name": "keyword.other.using.directive.cpp"
          },
          "2": {
            "name": "entity.name.namespace.cpp"
          }
        },
        "match": "(using)\\s+((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))"
      }, {
        "match": ",",
        "name": "punctuation.separator.attribute.cpp"
      }, {
        "match": ":",
        "name": "punctuation.accessor.attribute.cpp"
      }, {
        "match": "(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)(?=::)",
        "name": "entity.name.namespace.cpp"
      }, {
        "match": "(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)",
        "name": "entity.other.attribute.$0.cpp"
      }, {
        "include": "source.cpp#number_literal"
      }, {
        "include": "#ever_present_context"
      }]
    },
    "inheritance_context": {
      "patterns": [{
        "include": "#ever_present_context"
      }, {
        "match": ",",
        "name": "punctuation.separator.delimiter.comma.inheritance.cpp"
      }, {
        "match": "(?<!\\w)(?:(?:protected)|(?:private)|(?:public))(?!\\w)",
        "name": "storage.type.modifier.access.$0.cpp"
      }, {
        "match": "(?<!\\w)virtual(?!\\w)",
        "name": "storage.type.modifier.virtual.cpp"
      }, {
        "captures": {
          "1": {
            "name": "meta.qualified_type.cpp",
            "patterns": [{
              "match": "::",
              "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.cpp"
            }, {
              "match": "(?<!\\w)(?:(?:struct)|(?:class)|(?:union)|(?:enum))(?!\\w)",
              "name": "storage.type.$0.cpp"
            }, {
              "include": "#attributes_context"
            }, {
              "include": "#storage_types"
            }, {
              "include": "source.cpp#number_literal"
            }, {
              "include": "#string_context"
            }, {
              "include": "source.cpp#comma"
            }, {
              "include": "source.cpp#scope_resolution_inner_generated"
            }, {
              "begin": "<",
              "beginCaptures": {
                "0": {
                  "name": "punctuation.section.angle-brackets.begin.template.call.cpp"
                }
              },
              "end": ">|(?=(?<!\\\\)\n)",
              "endCaptures": {
                "0": {
                  "name": "punctuation.section.angle-brackets.end.template.call.cpp"
                }
              },
              "name": "meta.template.call.cpp",
              "patterns": [{
                "include": "#template_call_context"
              }]
            }, {
              "match": "(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*",
              "name": "entity.name.type.cpp"
            }]
          },
          "2": {
            "patterns": [{
              "include": "#attributes_context"
            }, {
              "include": "source.cpp#number_literal"
            }]
          },
          "3": {
            "patterns": [{
              "include": "source.cpp#inline_comment"
            }]
          },
          "4": {
            "patterns": [{
              "captures": {
                "1": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "2": {
                  "name": "comment.block.cpp"
                },
                "3": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                }
              },
              "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
            }]
          },
          "5": {
            "patterns": [{
              "include": "source.cpp#inline_comment"
            }]
          },
          "6": {
            "patterns": [{
              "captures": {
                "1": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "2": {
                  "name": "comment.block.cpp"
                },
                "3": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                }
              },
              "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
            }]
          },
          "7": {
            "patterns": [{
              "match": "::",
              "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.type.cpp"
            }, {
              "match": "(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)",
              "name": "entity.name.scope-resolution.type.cpp"
            }, {
              "include": "#template_call_range"
            }]
          },
          "8": {
            "patterns": [{
              "include": "#template_call_range"
            }]
          },
          "9": {},
          "10": {
            "patterns": [{
              "include": "source.cpp#inline_comment"
            }]
          },
          "11": {
            "patterns": [{
              "captures": {
                "1": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "2": {
                  "name": "comment.block.cpp"
                },
                "3": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                }
              },
              "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
            }]
          },
          "12": {}
        },
        "match": `(?<=protected|virtual|private|public|,|:)(?:\\s+)?(?!(?:(?:(?:protected)|(?:private)|(?:public))|virtual))(\\s*+((?:(?:(?:\\[\\[.*?\\]\\]|__attribute(?:__)?\\s*\\(\\s*\\(.*?\\)\\s*\\))|__declspec\\(.*?\\))|alignas\\(.*?\\))(?!\\)))?((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:(?:(?:(?:unsigned)|(?:signed)|(?:short)|(?:long))|(?:(?:struct)|(?:class)|(?:union)|(?:enum)))((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*(?:((?:::)?(?:(?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)\\s*+(((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<12>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)\\s*+)?::)*+)((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))?(?!(?:(?:transaction_safe_dynamic)|(?:__has_cpp_attribute)|(?:reinterpret_cast)|(?:transaction_safe)|(?:atomic_noexcept)|(?:atomic_commit)|(?:__has_include)|(?:atomic_cancel)|(?:synchronized)|(?:thread_local)|(?:dynamic_cast)|(?:static_cast)|(?:const_cast)|(?:constexpr)|(?:co_return)|(?:constinit)|(?:namespace)|(?:protected)|(?:consteval)|(?:constexpr)|(?:constexpr)|(?:co_return)|(?:consteval)|(?:co_await)|(?:continue)|(?:template)|(?:reflexpr)|(?:volatile)|(?:register)|(?:co_await)|(?:co_yield)|(?:restrict)|(?:noexcept)|(?:volatile)|(?:override)|(?:explicit)|(?:decltype)|(?:operator)|(?:noexcept)|(?:noexcept)|(?:typename)|(?:requires)|(?:co_yield)|(?:nullptr)|(?:alignof)|(?:alignas)|(?:default)|(?:mutable)|(?:virtual)|(?:mutable)|(?:private)|(?:include)|(?:warning)|(?:_Pragma)|(?:defined)|(?:typedef)|(?:__asm__)|(?:concept)|(?:define)|(?:module)|(?:sizeof)|(?:switch)|(?:delete)|(?:pragma)|(?:and_eq)|(?:inline)|(?:xor_eq)|(?:typeid)|(?:import)|(?:extern)|(?:public)|(?:bitand)|(?:static)|(?:export)|(?:return)|(?:friend)|(?:ifndef)|(?:not_eq)|(?:false)|(?:final)|(?:break)|(?:const)|(?:catch)|(?:endif)|(?:ifdef)|(?:undef)|(?:error)|(?:audit)|(?:while)|(?:using)|(?:axiom)|(?:or_eq)|(?:compl)|(?:throw)|(?:bitor)|(?:const)|(?:line)|(?:case)|(?:else)|(?:this)|(?:true)|(?:goto)|(?:else)|(?:NULL)|(?:elif)|(?:new)|(?:asm)|(?:xor)|(?:and)|(?:try)|(?:not)|(?:for)|(?:do)|(?:if)|(?:or)|(?:if))\\b)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*\\b((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<12>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)?(?![\\w<:.]))`
      }]
    },
    "lambdas": {
      "begin": '(?:(?<=[^\\s]|^)(?<![\\w\\]\\)\\[\\*&">])|(?<=\\Wreturn|^return))(?:\\s+)?(\\[(?!\\[| *+"| *+\\d))((?:[^\\[\\]]|((?<!\\[)\\[(?!\\[)(?:[^\\[\\]]*+\\g<3>?)++\\]))*+)(\\](?!((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))[\\[\\];=]))',
      "beginCaptures": {
        "1": {
          "name": "punctuation.definition.capture.begin.lambda.cpp"
        },
        "2": {
          "name": "meta.lambda.capture.cpp",
          "patterns": [{
            "include": "source.cpp#the_this_keyword"
          }, {
            "captures": {
              "1": {
                "name": "variable.parameter.capture.cpp"
              },
              "2": {
                "patterns": [{
                  "include": "source.cpp#inline_comment"
                }]
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "4": {
                "name": "comment.block.cpp"
              },
              "5": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              },
              "6": {
                "name": "punctuation.separator.delimiter.comma.cpp"
              },
              "7": {
                "name": "keyword.operator.assignment.cpp"
              }
            },
            "match": "((?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:(?:(?=\\]|\\z|$)|(,))|(\\=))"
          }, {
            "include": "#evaluation_context"
          }]
        },
        "3": {},
        "4": {
          "name": "punctuation.definition.capture.end.lambda.cpp"
        },
        "5": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "6": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "7": {
          "name": "comment.block.cpp"
        },
        "8": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        }
      },
      "end": "(?<=[;}])|(?=(?<!\\\\)\n)",
      "endCaptures": {},
      "patterns": [{
        "begin": "\\(",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.parameters.begin.lambda.cpp"
          }
        },
        "end": "\\)|(?=(?<!\\\\)\n)",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.parameters.end.lambda.cpp"
          }
        },
        "name": "meta.function.definition.parameters.lambda.cpp",
        "patterns": [{
          "include": "#function_parameter_context"
        }]
      }, {
        "match": "(?<!\\w)(?:(?:constexpr)|(?:consteval)|(?:mutable))(?!\\w)",
        "name": "storage.modifier.lambda.$0.cpp"
      }, {
        "begin": "->",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.lambda.return-type.cpp"
          }
        },
        "end": "(?=\\{)|(?=(?<!\\\\)\n)",
        "endCaptures": {},
        "patterns": [{
          "include": "#comments"
        }, {
          "match": "\\S+",
          "name": "storage.type.return-type.lambda.cpp"
        }]
      }, {
        "begin": "\\{",
        "beginCaptures": {
          "0": {
            "name": "punctuation.section.block.begin.bracket.curly.lambda.cpp"
          }
        },
        "end": "\\}|(?=(?<!\\\\)\n)",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.block.end.bracket.curly.lambda.cpp"
          }
        },
        "name": "meta.function.definition.body.lambda.cpp",
        "patterns": [{
          "include": "$self"
        }]
      }]
    },
    "line": {
      "begin": "^((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(#)(?:\\s+)?line\\b",
      "beginCaptures": {
        "0": {
          "name": "keyword.control.directive.line.cpp"
        },
        "1": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "2": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "3": {
          "name": "comment.block.cpp"
        },
        "4": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "5": {
          "name": "punctuation.definition.directive.cpp"
        }
      },
      "end": "(?<!\\\\)(?:(?=\\n)|(?<=^\\n|[^\\\\]\\n)(?=$))|(?=(?<!\\\\)\n)",
      "endCaptures": {},
      "name": "meta.preprocessor.line.cpp",
      "patterns": [{
        "include": "#string_context"
      }, {
        "include": "#preprocessor_number_literal"
      }, {
        "include": "source.cpp#line_continuation_character"
      }]
    },
    "line_comment": {
      "begin": "\\s*+(\\/\\/)",
      "beginCaptures": {
        "1": {
          "name": "punctuation.definition.comment.cpp"
        }
      },
      "end": "(?<!\\\\)(?:(?=\\n)|(?<=^\\n|[^\\\\]\\n)(?=$))|(?=(?<!\\\\)\n)",
      "endCaptures": {},
      "name": "comment.line.double-slash.cpp",
      "patterns": [{
        "include": "source.cpp#line_continuation_character"
      }]
    },
    "macro": {
      "begin": "(^((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(#)(?:\\s+)?define\\b)(?:\\s+)?((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))",
      "beginCaptures": {
        "1": {
          "name": "keyword.control.directive.define.cpp"
        },
        "2": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "3": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "4": {
          "name": "comment.block.cpp"
        },
        "5": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "6": {
          "name": "punctuation.definition.directive.cpp"
        },
        "7": {
          "name": "entity.name.function.preprocessor.cpp"
        }
      },
      "end": "(?<!\\\\)(?:(?=\\n)|(?<=^\\n|[^\\\\]\\n)(?=$))|(?=(?<!\\\\)\n)",
      "endCaptures": {},
      "name": "meta.preprocessor.macro.cpp",
      "patterns": [{
        "captures": {
          "1": {
            "name": "punctuation.definition.parameters.begin.preprocessor.cpp"
          },
          "2": {
            "name": "meta.function.preprocessor.parameters.cpp",
            "patterns": [{
              "captures": {
                "1": {
                  "name": "variable.parameter.preprocessor.cpp"
                }
              },
              "match": "(?<=[(,])(?:\\s+)?((?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*)(?:\\s+)?"
            }, {
              "match": ",",
              "name": "punctuation.separator.parameters.cpp"
            }, {
              "match": "\\.\\.\\.",
              "name": "punctuation.vararg-ellipses.variable.parameter.preprocessor.cpp"
            }]
          },
          "3": {
            "name": "punctuation.definition.parameters.end.preprocessor.cpp"
          }
        },
        "match": "\\G(?:\\s+)?(\\()([^\\(]*)(\\))"
      }, {
        "include": "#macro_context"
      }, {
        "include": "source.cpp#macro_argument"
      }]
    },
    "macro_context": {
      "patterns": [{
        "include": "source.cpp.embedded.macro"
      }]
    },
    "method_access": {
      "begin": "(?:((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?<!\\w)this(?!\\w))|((?:(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*|(?<=\\]|\\)))(?:\\s+)?))(?:((?:\\.\\*|\\.))|((?:->\\*|->)))((?:(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?:\\s+)?(?:(?:\\.\\*|\\.)|(?:->\\*|->))(?:\\s+)?)*)(?:\\s+)?(~?(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*)(?:\\s+)?(\\()",
      "beginCaptures": {
        "1": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "2": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "3": {
          "name": "comment.block.cpp"
        },
        "4": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "5": {
          "name": "variable.language.this.cpp"
        },
        "6": {
          "name": "variable.other.object.access.cpp"
        },
        "7": {
          "name": "punctuation.separator.dot-access.cpp"
        },
        "8": {
          "name": "punctuation.separator.pointer-access.cpp"
        },
        "9": {
          "patterns": [{
            "captures": {
              "1": {
                "patterns": [{
                  "include": "source.cpp#inline_comment"
                }]
              },
              "2": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "3": {
                "name": "comment.block.cpp"
              },
              "4": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              },
              "5": {
                "name": "variable.language.this.cpp"
              },
              "6": {
                "name": "variable.other.object.property.cpp"
              },
              "7": {
                "name": "punctuation.separator.dot-access.cpp"
              },
              "8": {
                "name": "punctuation.separator.pointer-access.cpp"
              }
            },
            "match": "(?<=(?:\\.\\*|\\.|->|->\\*))(?:\\s+)?(?:((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?<!\\w)this(?!\\w))|((?:(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*|(?<=\\]|\\)))(?:\\s+)?))(?:((?:\\.\\*|\\.))|((?:->\\*|->)))"
          }, {
            "captures": {
              "1": {
                "patterns": [{
                  "include": "source.cpp#inline_comment"
                }]
              },
              "2": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "3": {
                "name": "comment.block.cpp"
              },
              "4": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              },
              "5": {
                "name": "variable.language.this.cpp"
              },
              "6": {
                "name": "variable.other.object.access.cpp"
              },
              "7": {
                "name": "punctuation.separator.dot-access.cpp"
              },
              "8": {
                "name": "punctuation.separator.pointer-access.cpp"
              }
            },
            "match": "(?:((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?<!\\w)this(?!\\w))|((?:(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*|(?<=\\]|\\)))(?:\\s+)?))(?:((?:\\.\\*|\\.))|((?:->\\*|->)))"
          }, {
            "include": "source.cpp#member_access"
          }, {
            "include": "#method_access"
          }]
        },
        "10": {
          "name": "entity.name.function.member.cpp"
        },
        "11": {
          "name": "punctuation.section.arguments.begin.bracket.round.function.member.cpp"
        }
      },
      "end": "\\)|(?=(?<!\\\\)\n)",
      "endCaptures": {
        "0": {
          "name": "punctuation.section.arguments.end.bracket.round.function.member.cpp"
        }
      },
      "patterns": [{
        "include": "#evaluation_context"
      }]
    },
    "ms_attributes": {
      "begin": "__declspec\\(",
      "beginCaptures": {
        "0": {
          "name": "punctuation.section.attribute.begin.cpp"
        }
      },
      "end": "\\)|(?=(?<!\\\\)\n)",
      "endCaptures": {
        "0": {
          "name": "punctuation.section.attribute.end.cpp"
        }
      },
      "name": "support.other.attribute.cpp",
      "patterns": [{
        "include": "#attributes_context"
      }, {
        "begin": "\\(",
        "beginCaptures": {},
        "end": "\\)|(?=(?<!\\\\)\n)",
        "endCaptures": {},
        "patterns": [{
          "include": "#attributes_context"
        }, {
          "include": "#string_context"
        }, {
          "include": "#ever_present_context"
        }]
      }, {
        "captures": {
          "1": {
            "name": "keyword.other.using.directive.cpp"
          },
          "2": {
            "name": "entity.name.namespace.cpp"
          }
        },
        "match": "(using)\\s+((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))"
      }, {
        "match": ",",
        "name": "punctuation.separator.attribute.cpp"
      }, {
        "match": ":",
        "name": "punctuation.accessor.attribute.cpp"
      }, {
        "match": "(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)(?=::)",
        "name": "entity.name.namespace.cpp"
      }, {
        "match": "(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)",
        "name": "entity.other.attribute.$0.cpp"
      }, {
        "include": "source.cpp#number_literal"
      }, {
        "include": "#ever_present_context"
      }]
    },
    "namespace_block": {
      "begin": "((?<!\\w)namespace(?!\\w))",
      "beginCaptures": {
        "0": {
          "name": "meta.head.namespace.cpp"
        },
        "1": {
          "name": "keyword.other.namespace.definition.cpp storage.type.namespace.definition.cpp"
        }
      },
      "end": "(?:(?<=\\}|%>|\\?\\?>)|(?=[;>\\[\\]=]))|(?=(?<!\\\\)\n)",
      "endCaptures": {},
      "name": "meta.block.namespace.cpp",
      "patterns": [{
        "begin": "\\G ?",
        "beginCaptures": {},
        "end": "(?:\\{|<%|\\?\\?<|(?=;))|(?=(?<!\\\\)\n)",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.block.begin.bracket.curly.namespace.cpp"
          }
        },
        "name": "meta.head.namespace.cpp",
        "patterns": [{
          "include": "#ever_present_context"
        }, {
          "include": "#attributes_context"
        }, {
          "captures": {
            "1": {
              "patterns": [{
                "include": "source.cpp#scope_resolution_namespace_block_inner_generated"
              }]
            },
            "2": {
              "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.namespace.block.cpp"
            },
            "3": {
              "patterns": [{
                "include": "#template_call_range"
              }]
            },
            "4": {},
            "5": {
              "name": "entity.name.namespace.cpp"
            },
            "6": {
              "name": "punctuation.separator.scope-resolution.namespace.block.cpp"
            },
            "7": {
              "name": "storage.modifier.inline.cpp"
            }
          },
          "match": `((::)?(?:(?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)\\s*+(((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<4>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)\\s*+)?::)*\\s*+)(?:\\s+)?((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))(?:\\s+)?(?:(::)(?:\\s+)?(inline))?`
        }]
      }, {
        "begin": "(?<=\\{|<%|\\?\\?<)",
        "beginCaptures": {},
        "end": "\\}|%>|\\?\\?>|(?=(?<!\\\\)\n)",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.block.end.bracket.curly.namespace.cpp"
          }
        },
        "name": "meta.body.namespace.cpp",
        "patterns": [{
          "include": "$self"
        }]
      }, {
        "begin": "(?<=\\}|%>|\\?\\?>)[\\s]*",
        "beginCaptures": {},
        "end": "[\\s]*(?=;)|(?=(?<!\\\\)\n)",
        "endCaptures": {},
        "name": "meta.tail.namespace.cpp",
        "patterns": [{
          "include": "$self"
        }]
      }]
    },
    "noexcept_operator": {
      "begin": "((?<!\\w)noexcept(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(\\()",
      "beginCaptures": {
        "1": {
          "name": "keyword.operator.functionlike.cpp keyword.operator.noexcept.cpp"
        },
        "2": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "3": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "4": {
          "name": "comment.block.cpp"
        },
        "5": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "6": {
          "name": "punctuation.section.arguments.begin.bracket.round.operator.noexcept.cpp"
        }
      },
      "contentName": "meta.arguments.operator.noexcept",
      "end": "\\)|(?=(?<!\\\\)\n)",
      "endCaptures": {
        "0": {
          "name": "punctuation.section.arguments.end.bracket.round.operator.noexcept.cpp"
        }
      },
      "patterns": [{
        "include": "#evaluation_context"
      }]
    },
    "operator_overload": {
      "begin": `((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:(\\s*+((?:(?:(?:\\[\\[.*?\\]\\]|__attribute(?:__)?\\s*\\(\\s*\\(.*?\\)\\s*\\))|__declspec\\(.*?\\))|alignas\\(.*?\\))(?!\\)))?((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:(?:(?:(?:unsigned)|(?:signed)|(?:short)|(?:long))|(?:(?:struct)|(?:class)|(?:union)|(?:enum)))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*(?:((?:::)?(?:(?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)\\s*+(((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<55>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)\\s*+)?::)*+)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))?(?!(?:(?:transaction_safe_dynamic)|(?:__has_cpp_attribute)|(?:reinterpret_cast)|(?:transaction_safe)|(?:atomic_noexcept)|(?:atomic_commit)|(?:__has_include)|(?:atomic_cancel)|(?:synchronized)|(?:thread_local)|(?:dynamic_cast)|(?:static_cast)|(?:const_cast)|(?:constexpr)|(?:co_return)|(?:constinit)|(?:namespace)|(?:protected)|(?:consteval)|(?:constexpr)|(?:constexpr)|(?:co_return)|(?:consteval)|(?:co_await)|(?:continue)|(?:template)|(?:reflexpr)|(?:volatile)|(?:register)|(?:co_await)|(?:co_yield)|(?:restrict)|(?:noexcept)|(?:volatile)|(?:override)|(?:explicit)|(?:decltype)|(?:operator)|(?:noexcept)|(?:noexcept)|(?:typename)|(?:requires)|(?:co_yield)|(?:nullptr)|(?:alignof)|(?:alignas)|(?:default)|(?:mutable)|(?:virtual)|(?:mutable)|(?:private)|(?:include)|(?:warning)|(?:_Pragma)|(?:defined)|(?:typedef)|(?:__asm__)|(?:concept)|(?:define)|(?:module)|(?:sizeof)|(?:switch)|(?:delete)|(?:pragma)|(?:and_eq)|(?:inline)|(?:xor_eq)|(?:typeid)|(?:import)|(?:extern)|(?:public)|(?:bitand)|(?:static)|(?:export)|(?:return)|(?:friend)|(?:ifndef)|(?:not_eq)|(?:false)|(?:final)|(?:break)|(?:const)|(?:catch)|(?:endif)|(?:ifdef)|(?:undef)|(?:error)|(?:audit)|(?:while)|(?:using)|(?:axiom)|(?:or_eq)|(?:compl)|(?:throw)|(?:bitor)|(?:const)|(?:line)|(?:case)|(?:else)|(?:this)|(?:true)|(?:goto)|(?:else)|(?:NULL)|(?:elif)|(?:new)|(?:asm)|(?:xor)|(?:and)|(?:try)|(?:not)|(?:for)|(?:do)|(?:if)|(?:or)|(?:if))\\b)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*\\b((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<55>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)?(?![\\w<:.]))(((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))?(?:(?:&|\\*)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*(?:&|\\*))?((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))?((?:__cdecl|__clrcall|__stdcall|__fastcall|__thiscall|__vectorcall)?)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?:::)?(?:(?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)\\s*+(((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<55>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)\\s*+)?::)*+)(operator)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?:::)?(?:(?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)\\s*+(((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<55>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)\\s*+)?::)*+)(?:(?:((?:(?:delete\\[\\])|(?:delete)|(?:new\\[\\])|(?:<=>)|(?:<<=)|(?:new)|(?:>>=)|(?:\\->\\*)|(?:\\/=)|(?:%=)|(?:&=)|(?:>=)|(?:\\|=)|(?:\\+\\+)|(?:\\-\\-)|(?:\\(\\))|(?:\\[\\])|(?:\\->)|(?:\\+\\+)|(?:<<)|(?:>>)|(?:\\-\\-)|(?:<=)|(?:\\^=)|(?:==)|(?:!=)|(?:&&)|(?:\\|\\|)|(?:\\+=)|(?:\\-=)|(?:\\*=)|,|\\+|\\-|!|~|\\*|&|\\*|\\/|%|\\+|\\-|<|>|&|\\^|\\||=))|((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)(((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))?(?:(?:&|\\*)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*(?:&|\\*))?((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?:\\[\\])?)))|("")((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?=\\<|\\()`,
      "beginCaptures": {
        "0": {
          "name": "meta.head.function.definition.special.operator-overload.cpp"
        },
        "1": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "2": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "3": {
          "name": "comment.block.cpp"
        },
        "4": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "5": {
          "name": "meta.qualified_type.cpp",
          "patterns": [{
            "match": "::",
            "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.cpp"
          }, {
            "match": "(?<!\\w)(?:(?:struct)|(?:class)|(?:union)|(?:enum))(?!\\w)",
            "name": "storage.type.$0.cpp"
          }, {
            "include": "#attributes_context"
          }, {
            "include": "#storage_types"
          }, {
            "include": "source.cpp#number_literal"
          }, {
            "include": "#string_context"
          }, {
            "include": "source.cpp#comma"
          }, {
            "include": "source.cpp#scope_resolution_inner_generated"
          }, {
            "begin": "<",
            "beginCaptures": {
              "0": {
                "name": "punctuation.section.angle-brackets.begin.template.call.cpp"
              }
            },
            "end": ">|(?=(?<!\\\\)\n)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.angle-brackets.end.template.call.cpp"
              }
            },
            "name": "meta.template.call.cpp",
            "patterns": [{
              "include": "#template_call_context"
            }]
          }, {
            "match": "(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*",
            "name": "entity.name.type.cpp"
          }]
        },
        "6": {
          "patterns": [{
            "include": "#attributes_context"
          }, {
            "include": "source.cpp#number_literal"
          }]
        },
        "7": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "8": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "9": {
          "name": "comment.block.cpp"
        },
        "10": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "11": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "12": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "13": {
          "name": "comment.block.cpp"
        },
        "14": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "15": {
          "patterns": [{
            "match": "::",
            "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.type.cpp"
          }, {
            "match": "(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)",
            "name": "entity.name.scope-resolution.type.cpp"
          }, {
            "include": "#template_call_range"
          }]
        },
        "16": {
          "patterns": [{
            "include": "#template_call_range"
          }]
        },
        "17": {},
        "18": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "19": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "20": {
          "name": "comment.block.cpp"
        },
        "21": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "22": {},
        "23": {
          "patterns": [{
            "match": "\\*",
            "name": "storage.modifier.pointer.cpp"
          }, {
            "captures": {
              "1": {
                "patterns": [{
                  "include": "source.cpp#inline_comment"
                }]
              },
              "2": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "3": {
                "name": "comment.block.cpp"
              },
              "4": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "(?:\\&((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))){2,}\\&",
            "name": "invalid.illegal.reference-type.cpp"
          }, {
            "match": "\\&",
            "name": "storage.modifier.reference.cpp"
          }]
        },
        "24": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "25": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "26": {
          "name": "comment.block.cpp"
        },
        "27": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "28": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "29": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "30": {
          "name": "comment.block.cpp"
        },
        "31": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "32": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "33": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "34": {
          "name": "comment.block.cpp"
        },
        "35": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "36": {
          "name": "storage.type.modifier.calling-convention.cpp"
        },
        "37": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "38": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "39": {
          "name": "comment.block.cpp"
        },
        "40": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "41": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "42": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "43": {
          "name": "comment.block.cpp"
        },
        "44": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "45": {
          "patterns": [{
            "match": "::",
            "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.operator.cpp"
          }, {
            "match": "(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)",
            "name": "entity.name.scope-resolution.operator.cpp"
          }, {
            "include": "#template_call_range"
          }]
        },
        "46": {
          "patterns": [{
            "include": "#template_call_range"
          }]
        },
        "47": {},
        "48": {
          "name": "keyword.other.operator.overload.cpp"
        },
        "49": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "50": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "51": {
          "name": "comment.block.cpp"
        },
        "52": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "53": {
          "patterns": [{
            "match": "::",
            "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.operator-overload.cpp"
          }, {
            "match": "(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)",
            "name": "entity.name.scope-resolution.operator-overload.cpp"
          }, {
            "include": "#template_call_range"
          }]
        },
        "54": {
          "patterns": [{
            "include": "#template_call_range"
          }]
        },
        "55": {},
        "56": {
          "name": "entity.name.operator.cpp"
        },
        "57": {
          "name": "entity.name.operator.type.cpp"
        },
        "58": {
          "patterns": [{
            "match": "\\*",
            "name": "entity.name.operator.type.pointer.cpp"
          }, {
            "captures": {
              "1": {
                "patterns": [{
                  "include": "source.cpp#inline_comment"
                }]
              },
              "2": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "3": {
                "name": "comment.block.cpp"
              },
              "4": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "(?:\\&((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))){2,}\\&",
            "name": "invalid.illegal.reference-type.cpp"
          }, {
            "match": "\\&",
            "name": "entity.name.operator.type.reference.cpp"
          }]
        },
        "59": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "60": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "61": {
          "name": "comment.block.cpp"
        },
        "62": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "63": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "64": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "65": {
          "name": "comment.block.cpp"
        },
        "66": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "67": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "68": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "69": {
          "name": "comment.block.cpp"
        },
        "70": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "71": {
          "name": "entity.name.operator.type.array.cpp"
        },
        "72": {
          "name": "entity.name.operator.custom-literal.cpp"
        },
        "73": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "74": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "75": {
          "name": "comment.block.cpp"
        },
        "76": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "77": {
          "name": "entity.name.operator.custom-literal.cpp"
        },
        "78": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "79": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "80": {
          "name": "comment.block.cpp"
        },
        "81": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        }
      },
      "end": "(?:(?<=\\}|%>|\\?\\?>)|(?=[;>\\[\\]=]))|(?=(?<!\\\\)\n)",
      "endCaptures": {},
      "name": "meta.function.definition.special.operator-overload.cpp",
      "patterns": [{
        "begin": "\\G ?",
        "beginCaptures": {},
        "end": "(?:\\{|<%|\\?\\?<|(?=;))|(?=(?<!\\\\)\n)",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.block.begin.bracket.curly.function.definition.special.operator-overload.cpp"
          }
        },
        "name": "meta.head.function.definition.special.operator-overload.cpp",
        "patterns": [{
          "include": "#ever_present_context"
        }, {
          "include": "#template_call_range"
        }, {
          "begin": "\\(",
          "beginCaptures": {
            "0": {
              "name": "punctuation.section.parameters.begin.bracket.round.special.operator-overload.cpp"
            }
          },
          "contentName": "meta.function.definition.parameters.special.operator-overload",
          "end": "\\)|(?=(?<!\\\\)\n)",
          "endCaptures": {
            "0": {
              "name": "punctuation.section.parameters.end.bracket.round.special.operator-overload.cpp"
            }
          },
          "patterns": [{
            "include": "#function_parameter_context"
          }, {
            "include": "#evaluation_context"
          }]
        }, {
          "include": "source.cpp#qualifiers_and_specifiers_post_parameters"
        }, {
          "captures": {
            "1": {
              "name": "keyword.operator.assignment.cpp"
            },
            "2": {
              "patterns": [{
                "include": "source.cpp#inline_comment"
              }]
            },
            "3": {
              "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
            },
            "4": {
              "name": "comment.block.cpp"
            },
            "5": {
              "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
            },
            "6": {
              "name": "keyword.other.default.function.cpp"
            },
            "7": {
              "name": "keyword.other.delete.function.cpp"
            }
          },
          "match": "(\\=)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:(default)|(delete))"
        }, {
          "include": "$self"
        }]
      }, {
        "begin": "(?<=\\{|<%|\\?\\?<)",
        "beginCaptures": {},
        "end": "\\}|%>|\\?\\?>|(?=(?<!\\\\)\n)",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.block.end.bracket.curly.function.definition.special.operator-overload.cpp"
          }
        },
        "name": "meta.body.function.definition.special.operator-overload.cpp",
        "patterns": [{
          "include": "#function_body_context"
        }]
      }, {
        "begin": "(?<=\\}|%>|\\?\\?>)[\\s]*",
        "beginCaptures": {},
        "end": "[\\s]*(?=;)|(?=(?<!\\\\)\n)",
        "endCaptures": {},
        "name": "meta.tail.function.definition.special.operator-overload.cpp",
        "patterns": [{
          "include": "$self"
        }]
      }]
    },
    "operators": {
      "patterns": [{
        "begin": "((?<!\\w)sizeof(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(\\()",
        "beginCaptures": {
          "1": {
            "name": "keyword.operator.functionlike.cpp keyword.operator.sizeof.cpp"
          },
          "2": {
            "patterns": [{
              "include": "source.cpp#inline_comment"
            }]
          },
          "3": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "4": {
            "name": "comment.block.cpp"
          },
          "5": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "6": {
            "name": "punctuation.section.arguments.begin.bracket.round.operator.sizeof.cpp"
          }
        },
        "contentName": "meta.arguments.operator.sizeof",
        "end": "\\)|(?=(?<!\\\\)\n)",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.arguments.end.bracket.round.operator.sizeof.cpp"
          }
        },
        "patterns": [{
          "include": "#evaluation_context"
        }]
      }, {
        "begin": "((?<!\\w)alignof(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(\\()",
        "beginCaptures": {
          "1": {
            "name": "keyword.operator.functionlike.cpp keyword.operator.alignof.cpp"
          },
          "2": {
            "patterns": [{
              "include": "source.cpp#inline_comment"
            }]
          },
          "3": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "4": {
            "name": "comment.block.cpp"
          },
          "5": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "6": {
            "name": "punctuation.section.arguments.begin.bracket.round.operator.alignof.cpp"
          }
        },
        "contentName": "meta.arguments.operator.alignof",
        "end": "\\)|(?=(?<!\\\\)\n)",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.arguments.end.bracket.round.operator.alignof.cpp"
          }
        },
        "patterns": [{
          "include": "#evaluation_context"
        }]
      }, {
        "begin": "((?<!\\w)alignas(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(\\()",
        "beginCaptures": {
          "1": {
            "name": "keyword.operator.functionlike.cpp keyword.operator.alignas.cpp"
          },
          "2": {
            "patterns": [{
              "include": "source.cpp#inline_comment"
            }]
          },
          "3": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "4": {
            "name": "comment.block.cpp"
          },
          "5": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "6": {
            "name": "punctuation.section.arguments.begin.bracket.round.operator.alignas.cpp"
          }
        },
        "contentName": "meta.arguments.operator.alignas",
        "end": "\\)|(?=(?<!\\\\)\n)",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.arguments.end.bracket.round.operator.alignas.cpp"
          }
        },
        "patterns": [{
          "include": "#evaluation_context"
        }]
      }, {
        "begin": "((?<!\\w)typeid(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(\\()",
        "beginCaptures": {
          "1": {
            "name": "keyword.operator.functionlike.cpp keyword.operator.typeid.cpp"
          },
          "2": {
            "patterns": [{
              "include": "source.cpp#inline_comment"
            }]
          },
          "3": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "4": {
            "name": "comment.block.cpp"
          },
          "5": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "6": {
            "name": "punctuation.section.arguments.begin.bracket.round.operator.typeid.cpp"
          }
        },
        "contentName": "meta.arguments.operator.typeid",
        "end": "\\)|(?=(?<!\\\\)\n)",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.arguments.end.bracket.round.operator.typeid.cpp"
          }
        },
        "patterns": [{
          "include": "#evaluation_context"
        }]
      }, {
        "begin": "((?<!\\w)noexcept(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(\\()",
        "beginCaptures": {
          "1": {
            "name": "keyword.operator.functionlike.cpp keyword.operator.noexcept.cpp"
          },
          "2": {
            "patterns": [{
              "include": "source.cpp#inline_comment"
            }]
          },
          "3": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "4": {
            "name": "comment.block.cpp"
          },
          "5": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "6": {
            "name": "punctuation.section.arguments.begin.bracket.round.operator.noexcept.cpp"
          }
        },
        "contentName": "meta.arguments.operator.noexcept",
        "end": "\\)|(?=(?<!\\\\)\n)",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.arguments.end.bracket.round.operator.noexcept.cpp"
          }
        },
        "patterns": [{
          "include": "#evaluation_context"
        }]
      }, {
        "begin": "(\\bsizeof\\.\\.\\.)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(\\()",
        "beginCaptures": {
          "1": {
            "name": "keyword.operator.functionlike.cpp keyword.operator.sizeof.variadic.cpp"
          },
          "2": {
            "patterns": [{
              "include": "source.cpp#inline_comment"
            }]
          },
          "3": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "4": {
            "name": "comment.block.cpp"
          },
          "5": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "6": {
            "name": "punctuation.section.arguments.begin.bracket.round.operator.sizeof.variadic.cpp"
          }
        },
        "contentName": "meta.arguments.operator.sizeof.variadic",
        "end": "\\)|(?=(?<!\\\\)\n)",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.arguments.end.bracket.round.operator.sizeof.variadic.cpp"
          }
        },
        "patterns": [{
          "include": "#evaluation_context"
        }]
      }, {
        "match": "--",
        "name": "keyword.operator.decrement.cpp"
      }, {
        "match": "\\+\\+",
        "name": "keyword.operator.increment.cpp"
      }, {
        "match": "%=|\\+=|-=|\\*=|(?<!\\()\\/=",
        "name": "keyword.operator.assignment.compound.cpp"
      }, {
        "match": "&=|\\^=|<<=|>>=|\\|=",
        "name": "keyword.operator.assignment.compound.bitwise.cpp"
      }, {
        "match": "<<|>>",
        "name": "keyword.operator.bitwise.shift.cpp"
      }, {
        "match": "!=|<=|>=|==|<|>",
        "name": "keyword.operator.comparison.cpp"
      }, {
        "match": "&&|!|\\|\\|",
        "name": "keyword.operator.logical.cpp"
      }, {
        "match": "&|\\||\\^|~",
        "name": "keyword.operator.bitwise.cpp"
      }, {
        "include": "source.cpp#assignment_operator"
      }, {
        "match": "%|\\*|\\/|-|\\+",
        "name": "keyword.operator.arithmetic.cpp"
      }, {
        "include": "#ternary_operator"
      }]
    },
    "parameter": {
      "begin": "((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?=\\w)",
      "beginCaptures": {
        "1": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "2": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "3": {
          "name": "comment.block.cpp"
        },
        "4": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        }
      },
      "end": "(?:(?=\\))|(,))|(?=(?<!\\\\)\n)",
      "endCaptures": {
        "1": {
          "name": "punctuation.separator.delimiter.comma.cpp"
        }
      },
      "name": "meta.parameter.cpp",
      "patterns": [{
        "include": "#ever_present_context"
      }, {
        "include": "#string_context"
      }, {
        "include": "#function_pointer_parameter"
      }, {
        "include": "#decltype"
      }, {
        "include": "source.cpp#vararg_ellipses"
      }, {
        "captures": {
          "1": {
            "patterns": [{
              "include": "#storage_types"
            }]
          },
          "2": {
            "name": "storage.modifier.specifier.parameter.cpp"
          },
          "3": {
            "patterns": [{
              "include": "source.cpp#inline_comment"
            }]
          },
          "4": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "5": {
            "name": "comment.block.cpp"
          },
          "6": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "7": {
            "patterns": [{
              "include": "source.cpp#inline_comment"
            }]
          },
          "8": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "9": {
            "name": "comment.block.cpp"
          },
          "10": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "11": {
            "name": "storage.type.primitive.cpp storage.type.built-in.primitive.cpp"
          },
          "12": {
            "name": "storage.type.cpp storage.type.built-in.cpp"
          },
          "13": {
            "name": "support.type.posix-reserved.pthread.cpp support.type.built-in.posix-reserved.pthread.cpp"
          },
          "14": {
            "name": "support.type.posix-reserved.cpp support.type.built-in.posix-reserved.cpp"
          },
          "15": {
            "name": "entity.name.type.parameter.cpp"
          },
          "16": {
            "patterns": [{
              "include": "source.cpp#inline_comment"
            }]
          },
          "17": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "18": {
            "name": "comment.block.cpp"
          },
          "19": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          }
        },
        "match": "((?:((?:(?:thread_local)|(?:volatile)|(?:register)|(?:restrict)|(?:static)|(?:extern)|(?:const)))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))+)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:\\s*+(?<!\\w)(?:(?:(?:((?:(?:unsigned)|(?:wchar_t)|(?:double)|(?:signed)|(?:short)|(?:float)|(?:auto)|(?:void)|(?:long)|(?:char)|(?:bool)|(?:int)))|((?:(?:uint_least32_t)|(?:uint_least64_t)|(?:uint_least16_t)|(?:uint_fast64_t)|(?:uint_least8_t)|(?:int_least64_t)|(?:int_least32_t)|(?:int_least16_t)|(?:uint_fast16_t)|(?:uint_fast32_t)|(?:int_least8_t)|(?:int_fast16_t)|(?:int_fast32_t)|(?:int_fast64_t)|(?:uint_fast8_t)|(?:int_fast8_t)|(?:suseconds_t)|(?:useconds_t)|(?:uintmax_t)|(?:uintmax_t)|(?:in_port_t)|(?:uintmax_t)|(?:in_addr_t)|(?:blksize_t)|(?:uintptr_t)|(?:intmax_t)|(?:intptr_t)|(?:blkcnt_t)|(?:intmax_t)|(?:u_quad_t)|(?:uint16_t)|(?:uint32_t)|(?:uint64_t)|(?:ssize_t)|(?:fixpt_t)|(?:qaddr_t)|(?:u_short)|(?:int16_t)|(?:int32_t)|(?:int64_t)|(?:uint8_t)|(?:daddr_t)|(?:caddr_t)|(?:swblk_t)|(?:clock_t)|(?:segsz_t)|(?:nlink_t)|(?:time_t)|(?:u_long)|(?:ushort)|(?:quad_t)|(?:mode_t)|(?:size_t)|(?:u_char)|(?:int8_t)|(?:u_int)|(?:uid_t)|(?:off_t)|(?:pid_t)|(?:gid_t)|(?:dev_t)|(?:div_t)|(?:key_t)|(?:ino_t)|(?:id_t)|(?:id_t)|(?:uint))))|((?:(?:pthread_rwlockattr_t)|(?:pthread_mutexattr_t)|(?:pthread_condattr_t)|(?:pthread_rwlock_t)|(?:pthread_mutex_t)|(?:pthread_cond_t)|(?:pthread_attr_t)|(?:pthread_once_t)|(?:pthread_key_t)|(?:pthread_t))))|([a-zA-Z_]\\w*_t))(?!\\w)|((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)\\b\\b(?<!\\Wthread_local|^thread_local|\\Wvolatile|^volatile|\\Wregister|^register|\\Wrestrict|^restrict|\\Wstatic|^static|\\Wextern|^extern|\\Wconst|^const)))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?=,|\\)|=)"
      }, {
        "include": "#storage_types"
      }, {
        "include": "source.cpp#scope_resolution_parameter_inner_generated"
      }, {
        "match": "(?:(?:struct)|(?:class)|(?:union)|(?:enum))",
        "name": "storage.type.$0.cpp"
      }, {
        "begin": "(?<==)",
        "beginCaptures": {},
        "end": "(?:(?=\\))|(,))|(?=(?<!\\\\)\n)",
        "endCaptures": {
          "1": {
            "name": "punctuation.separator.delimiter.comma.cpp"
          }
        },
        "patterns": [{
          "include": "#evaluation_context"
        }]
      }, {
        "match": "\\=",
        "name": "keyword.operator.assignment.cpp"
      }, {
        "captures": {
          "1": {
            "patterns": [{
              "include": "source.cpp#inline_comment"
            }]
          },
          "2": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "3": {
            "name": "comment.block.cpp"
          },
          "4": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "5": {
            "name": "variable.parameter.cpp"
          },
          "6": {
            "patterns": [{
              "include": "source.cpp#inline_comment"
            }]
          },
          "7": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "8": {
            "name": "comment.block.cpp"
          },
          "9": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          }
        },
        "match": "(?<!\\s|\\(|,|:)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?=\\)|,|\\[|=|\\n)"
      }, {
        "include": "#attributes_context"
      }, {
        "begin": "\\[",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.begin.bracket.square.array.type.cpp"
          }
        },
        "end": "\\]|(?=(?<!\\\\)\n)",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.end.bracket.square.array.type.cpp"
          }
        },
        "name": "meta.bracket.square.array.cpp",
        "patterns": [{
          "include": "#evaluation_context"
        }]
      }, {
        "match": "(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*\\b(?<!\\Wstruct|^struct|\\Wclass|^class|\\Wunion|^union|\\Wenum|^enum)",
        "name": "entity.name.type.parameter.cpp"
      }, {
        "include": "#template_call_range"
      }, {
        "captures": {
          "0": {
            "patterns": [{
              "match": "\\*",
              "name": "storage.modifier.pointer.cpp"
            }, {
              "captures": {
                "1": {
                  "patterns": [{
                    "include": "source.cpp#inline_comment"
                  }]
                },
                "2": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "3": {
                  "name": "comment.block.cpp"
                },
                "4": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                }
              },
              "match": "(?:\\&((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))){2,}\\&",
              "name": "invalid.illegal.reference-type.cpp"
            }, {
              "match": "\\&",
              "name": "storage.modifier.reference.cpp"
            }]
          },
          "1": {
            "patterns": [{
              "include": "source.cpp#inline_comment"
            }]
          },
          "2": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "3": {
            "name": "comment.block.cpp"
          },
          "4": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "5": {
            "patterns": [{
              "include": "source.cpp#inline_comment"
            }]
          },
          "6": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "7": {
            "name": "comment.block.cpp"
          },
          "8": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          }
        },
        "match": "((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))?(?:(?:&|\\*)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*(?:&|\\*)"
      }, {
        "include": "#ever_present_context"
      }]
    },
    "parameter_or_maybe_value": {
      "begin": "((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?=\\w)",
      "beginCaptures": {
        "1": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "2": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "3": {
          "name": "comment.block.cpp"
        },
        "4": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        }
      },
      "end": "(?:(?=\\))|(,))|(?=(?<!\\\\)\n)",
      "endCaptures": {
        "1": {
          "name": "punctuation.separator.delimiter.comma.cpp"
        }
      },
      "name": "meta.parameter.cpp",
      "patterns": [{
        "include": "#ever_present_context"
      }, {
        "include": "#function_pointer_parameter"
      }, {
        "include": "source.cpp#memory_operators"
      }, {
        "include": "#builtin_storage_type_initilizer"
      }, {
        "include": "#curly_initializer"
      }, {
        "include": "#decltype"
      }, {
        "include": "source.cpp#vararg_ellipses"
      }, {
        "captures": {
          "1": {
            "patterns": [{
              "include": "#storage_types"
            }]
          },
          "2": {
            "name": "storage.modifier.specifier.parameter.cpp"
          },
          "3": {
            "patterns": [{
              "include": "source.cpp#inline_comment"
            }]
          },
          "4": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "5": {
            "name": "comment.block.cpp"
          },
          "6": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "7": {
            "patterns": [{
              "include": "source.cpp#inline_comment"
            }]
          },
          "8": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "9": {
            "name": "comment.block.cpp"
          },
          "10": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "11": {
            "name": "storage.type.primitive.cpp storage.type.built-in.primitive.cpp"
          },
          "12": {
            "name": "storage.type.cpp storage.type.built-in.cpp"
          },
          "13": {
            "name": "support.type.posix-reserved.pthread.cpp support.type.built-in.posix-reserved.pthread.cpp"
          },
          "14": {
            "name": "support.type.posix-reserved.cpp support.type.built-in.posix-reserved.cpp"
          },
          "15": {
            "name": "entity.name.type.parameter.cpp"
          },
          "16": {
            "patterns": [{
              "include": "source.cpp#inline_comment"
            }]
          },
          "17": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "18": {
            "name": "comment.block.cpp"
          },
          "19": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          }
        },
        "match": "((?:((?:(?:thread_local)|(?:volatile)|(?:register)|(?:restrict)|(?:static)|(?:extern)|(?:const)))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))+)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:\\s*+(?<!\\w)(?:(?:(?:((?:(?:unsigned)|(?:wchar_t)|(?:double)|(?:signed)|(?:short)|(?:float)|(?:auto)|(?:void)|(?:long)|(?:char)|(?:bool)|(?:int)))|((?:(?:uint_least32_t)|(?:uint_least64_t)|(?:uint_least16_t)|(?:uint_fast64_t)|(?:uint_least8_t)|(?:int_least64_t)|(?:int_least32_t)|(?:int_least16_t)|(?:uint_fast16_t)|(?:uint_fast32_t)|(?:int_least8_t)|(?:int_fast16_t)|(?:int_fast32_t)|(?:int_fast64_t)|(?:uint_fast8_t)|(?:int_fast8_t)|(?:suseconds_t)|(?:useconds_t)|(?:uintmax_t)|(?:uintmax_t)|(?:in_port_t)|(?:uintmax_t)|(?:in_addr_t)|(?:blksize_t)|(?:uintptr_t)|(?:intmax_t)|(?:intptr_t)|(?:blkcnt_t)|(?:intmax_t)|(?:u_quad_t)|(?:uint16_t)|(?:uint32_t)|(?:uint64_t)|(?:ssize_t)|(?:fixpt_t)|(?:qaddr_t)|(?:u_short)|(?:int16_t)|(?:int32_t)|(?:int64_t)|(?:uint8_t)|(?:daddr_t)|(?:caddr_t)|(?:swblk_t)|(?:clock_t)|(?:segsz_t)|(?:nlink_t)|(?:time_t)|(?:u_long)|(?:ushort)|(?:quad_t)|(?:mode_t)|(?:size_t)|(?:u_char)|(?:int8_t)|(?:u_int)|(?:uid_t)|(?:off_t)|(?:pid_t)|(?:gid_t)|(?:dev_t)|(?:div_t)|(?:key_t)|(?:ino_t)|(?:id_t)|(?:id_t)|(?:uint))))|((?:(?:pthread_rwlockattr_t)|(?:pthread_mutexattr_t)|(?:pthread_condattr_t)|(?:pthread_rwlock_t)|(?:pthread_mutex_t)|(?:pthread_cond_t)|(?:pthread_attr_t)|(?:pthread_once_t)|(?:pthread_key_t)|(?:pthread_t))))|([a-zA-Z_]\\w*_t))(?!\\w)|((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)\\b\\b(?<!\\Wthread_local|^thread_local|\\Wvolatile|^volatile|\\Wregister|^register|\\Wrestrict|^restrict|\\Wstatic|^static|\\Wextern|^extern|\\Wconst|^const)))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?=,|\\)|=)"
      }, {
        "include": "#storage_types"
      }, {
        "include": "#function_call"
      }, {
        "include": "source.cpp#scope_resolution_parameter_inner_generated"
      }, {
        "match": "(?:(?:struct)|(?:class)|(?:union)|(?:enum))",
        "name": "storage.type.$0.cpp"
      }, {
        "begin": "(?<==)",
        "beginCaptures": {},
        "end": "(?:(?=\\))|(,))|(?=(?<!\\\\)\n)",
        "endCaptures": {
          "1": {
            "name": "punctuation.separator.delimiter.comma.cpp"
          }
        },
        "patterns": [{
          "include": "#evaluation_context"
        }]
      }, {
        "captures": {
          "1": {
            "patterns": [{
              "include": "source.cpp#inline_comment"
            }]
          },
          "2": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "3": {
            "name": "comment.block.cpp"
          },
          "4": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "5": {
            "name": "variable.parameter.cpp"
          },
          "6": {
            "patterns": [{
              "include": "source.cpp#inline_comment"
            }]
          },
          "7": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "8": {
            "name": "comment.block.cpp"
          },
          "9": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          }
        },
        "match": "(?<!\\s|\\(|,|:)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?=(?:\\)|,|\\[|=|\\/\\/|(?:\\n|$)))"
      }, {
        "include": "#attributes_context"
      }, {
        "begin": "\\[",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.begin.bracket.square.array.type.cpp"
          }
        },
        "end": "\\]|(?=(?<!\\\\)\n)",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.end.bracket.square.array.type.cpp"
          }
        },
        "name": "meta.bracket.square.array.cpp",
        "patterns": [{
          "include": "#evaluation_context"
        }]
      }, {
        "match": "(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*\\b(?<!\\Wstruct|^struct|\\Wclass|^class|\\Wunion|^union|\\Wenum|^enum)",
        "name": "entity.name.type.parameter.cpp"
      }, {
        "include": "#template_call_range"
      }, {
        "captures": {
          "0": {
            "patterns": [{
              "match": "\\*",
              "name": "storage.modifier.pointer.cpp"
            }, {
              "captures": {
                "1": {
                  "patterns": [{
                    "include": "source.cpp#inline_comment"
                  }]
                },
                "2": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "3": {
                  "name": "comment.block.cpp"
                },
                "4": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                }
              },
              "match": "(?:\\&((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))){2,}\\&",
              "name": "invalid.illegal.reference-type.cpp"
            }, {
              "match": "\\&",
              "name": "storage.modifier.reference.cpp"
            }]
          },
          "1": {
            "patterns": [{
              "include": "source.cpp#inline_comment"
            }]
          },
          "2": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "3": {
            "name": "comment.block.cpp"
          },
          "4": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "5": {
            "patterns": [{
              "include": "source.cpp#inline_comment"
            }]
          },
          "6": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "7": {
            "name": "comment.block.cpp"
          },
          "8": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          }
        },
        "match": "((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))?(?:(?:&|\\*)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*(?:&|\\*)"
      }, {
        "include": "#evaluation_context"
      }, {
        "include": "#ever_present_context"
      }]
    },
    "parentheses": {
      "begin": "\\(",
      "beginCaptures": {
        "0": {
          "name": "punctuation.section.parens.begin.bracket.round.cpp"
        }
      },
      "end": "\\)|(?=(?<!\\\\)\n)",
      "endCaptures": {
        "0": {
          "name": "punctuation.section.parens.end.bracket.round.cpp"
        }
      },
      "name": "meta.parens.cpp",
      "patterns": [{
        "include": "source.cpp#over_qualified_types"
      }, {
        "match": "(?<!:):(?!:)",
        "name": "punctuation.separator.colon.range-based.cpp"
      }, {
        "include": "#evaluation_context"
      }]
    },
    "pragma": {
      "begin": "^((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(#)(?:\\s+)?pragma\\b",
      "beginCaptures": {
        "0": {
          "name": "keyword.control.directive.pragma.cpp"
        },
        "1": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "2": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "3": {
          "name": "comment.block.cpp"
        },
        "4": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "5": {
          "name": "punctuation.definition.directive.cpp"
        }
      },
      "end": "(?<!\\\\)(?:(?=\\n)|(?<=^\\n|[^\\\\]\\n)(?=$))|(?=(?<!\\\\)\n)",
      "endCaptures": {},
      "name": "meta.preprocessor.pragma.cpp",
      "patterns": [{
        "include": "#comments"
      }, {
        "include": "#string_context"
      }, {
        "match": "[a-zA-Z_$][\\w\\-$]*",
        "name": "entity.other.attribute-name.pragma.preprocessor.cpp"
      }, {
        "include": "#preprocessor_number_literal"
      }, {
        "include": "source.cpp#line_continuation_character"
      }]
    },
    "preprocessor_conditional_context": {
      "patterns": [{
        "include": "#preprocessor_conditional_defined"
      }, {
        "include": "#comments"
      }, {
        "include": "source.cpp#language_constants"
      }, {
        "include": "#string_context"
      }, {
        "include": "source.cpp#d9bc4796b0b_preprocessor_number_literal"
      }, {
        "include": "#operators"
      }, {
        "include": "source.cpp#predefined_macros"
      }, {
        "include": "source.cpp#macro_name"
      }, {
        "include": "source.cpp#line_continuation_character"
      }]
    },
    "preprocessor_conditional_defined": {
      "begin": "((?<!\\w)defined(?!\\w))(\\()",
      "beginCaptures": {
        "1": {
          "name": "keyword.control.directive.conditional.defined.cpp"
        },
        "2": {
          "name": "punctuation.section.parens.control.defined.cpp"
        }
      },
      "end": "(?:\\)|(?<!\\\\)(?:(?=\\n)|(?<=^\\n|[^\\\\]\\n)(?=$)))|(?=(?<!\\\\)\n)",
      "endCaptures": {
        "0": {
          "name": "punctuation.section.parens.control.defined.cpp"
        }
      },
      "patterns": [{
        "include": "source.cpp#macro_name"
      }]
    },
    "preprocessor_conditional_parentheses": {
      "begin": "\\(",
      "beginCaptures": {
        "0": {
          "name": "punctuation.section.parens.begin.bracket.round.cpp"
        }
      },
      "end": "\\)|(?=(?<!\\\\)\n)",
      "endCaptures": {
        "0": {
          "name": "punctuation.section.parens.end.bracket.round.cpp"
        }
      },
      "name": "meta.parens.preprocessor.conditional.cpp"
    },
    "preprocessor_conditional_range": {
      "begin": "^((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(#)(?:\\s+)?((?:(?:ifndef|ifdef)|if))",
      "beginCaptures": {
        "0": {
          "name": "keyword.control.directive.conditional.$6.cpp"
        },
        "1": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "2": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "3": {
          "name": "comment.block.cpp"
        },
        "4": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "5": {
          "name": "punctuation.definition.directive.cpp"
        },
        "6": {}
      },
      "contentName": "meta.preprocessor.conditional",
      "end": "(?<!\\\\)(?:(?=\\n)|(?<=^\\n|[^\\\\]\\n)(?=$))|(?=(?<!\\\\)\n)",
      "endCaptures": {},
      "patterns": [{
        "include": "#preprocessor_conditional_context"
      }]
    },
    "preprocessor_context": {
      "patterns": [{
        "include": "source.cpp#pragma_mark"
      }, {
        "include": "#pragma"
      }, {
        "include": "source.cpp#include"
      }, {
        "include": "#line"
      }, {
        "include": "#diagnostic"
      }, {
        "include": "source.cpp#undef"
      }, {
        "include": "#preprocessor_conditional_range"
      }, {
        "include": "source.cpp#single_line_macro"
      }, {
        "include": "#macro"
      }, {
        "include": "source.cpp#preprocessor_conditional_standalone"
      }, {
        "include": "source.cpp#macro_argument"
      }]
    },
    "sizeof_operator": {
      "begin": "((?<!\\w)sizeof(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(\\()",
      "beginCaptures": {
        "1": {
          "name": "keyword.operator.functionlike.cpp keyword.operator.sizeof.cpp"
        },
        "2": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "3": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "4": {
          "name": "comment.block.cpp"
        },
        "5": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "6": {
          "name": "punctuation.section.arguments.begin.bracket.round.operator.sizeof.cpp"
        }
      },
      "contentName": "meta.arguments.operator.sizeof",
      "end": "\\)|(?=(?<!\\\\)\n)",
      "endCaptures": {
        "0": {
          "name": "punctuation.section.arguments.end.bracket.round.operator.sizeof.cpp"
        }
      },
      "patterns": [{
        "include": "#evaluation_context"
      }]
    },
    "sizeof_variadic_operator": {
      "begin": "(\\bsizeof\\.\\.\\.)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(\\()",
      "beginCaptures": {
        "1": {
          "name": "keyword.operator.functionlike.cpp keyword.operator.sizeof.variadic.cpp"
        },
        "2": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "3": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "4": {
          "name": "comment.block.cpp"
        },
        "5": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "6": {
          "name": "punctuation.section.arguments.begin.bracket.round.operator.sizeof.variadic.cpp"
        }
      },
      "contentName": "meta.arguments.operator.sizeof.variadic",
      "end": "\\)|(?=(?<!\\\\)\n)",
      "endCaptures": {
        "0": {
          "name": "punctuation.section.arguments.end.bracket.round.operator.sizeof.variadic.cpp"
        }
      },
      "patterns": [{
        "include": "#evaluation_context"
      }]
    },
    "square_brackets": {
      "begin": "([a-zA-Z_][a-zA-Z_0-9]*|(?<=[\\]\\)]))?(\\[)(?!\\])",
      "beginCaptures": {
        "1": {
          "name": "variable.other.object"
        },
        "2": {
          "name": "punctuation.definition.begin.bracket.square"
        }
      },
      "end": "\\]|(?=(?<!\\\\)\n)",
      "endCaptures": {
        "0": {
          "name": "punctuation.definition.end.bracket.square"
        }
      },
      "name": "meta.bracket.square.access",
      "patterns": [{
        "include": "#evaluation_context"
      }]
    },
    "static_assert": {
      "begin": "((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?<!\\w)static_assert|_Static_assert(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(\\()",
      "beginCaptures": {
        "1": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "2": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "3": {
          "name": "comment.block.cpp"
        },
        "4": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "5": {
          "name": "keyword.other.static_assert.cpp"
        },
        "6": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "7": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "8": {
          "name": "comment.block.cpp"
        },
        "9": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "10": {
          "name": "punctuation.section.arguments.begin.bracket.round.static_assert.cpp"
        }
      },
      "end": "\\)|(?=(?<!\\\\)\n)",
      "endCaptures": {
        "0": {
          "name": "punctuation.section.arguments.end.bracket.round.static_assert.cpp"
        }
      },
      "patterns": [{
        "begin": '(,)(?:\\s+)?(?=(?:L|u8|u|U(?:\\s+)?\\")?)',
        "beginCaptures": {
          "1": {
            "name": "punctuation.separator.delimiter.comma.cpp"
          }
        },
        "end": "(?=\\))|(?=(?<!\\\\)\n)",
        "endCaptures": {},
        "name": "meta.static_assert.message.cpp",
        "patterns": [{
          "include": "#string_context"
        }]
      }, {
        "include": "#evaluation_context"
      }]
    },
    "storage_types": {
      "patterns": [{
        "include": "source.cpp#storage_specifiers"
      }, {
        "include": "source.cpp#inline_builtin_storage_type"
      }, {
        "include": "#decltype"
      }, {
        "include": "source.cpp#typename"
      }]
    },
    "string_context": {
      "patterns": [{
        "begin": '((?:u|u8|U|L)?)"',
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.string.begin.cpp"
          },
          "1": {
            "name": "meta.encoding.cpp"
          }
        },
        "end": '(")(?:((?:[a-zA-Z]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*)|(_(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*))?|(?=(?<!\\\\)\n)',
        "endCaptures": {
          "1": {
            "name": "punctuation.definition.string.end.cpp"
          },
          "2": {
            "name": "keyword.other.suffix.literal.user-defined.reserved.string.cpp"
          },
          "3": {
            "name": "keyword.other.suffix.literal.user-defined.string.cpp"
          }
        },
        "name": "string.quoted.double.cpp",
        "patterns": [{
          "match": "(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8})",
          "name": "constant.character.escape.cpp"
        }, {
          "match": `\\\\['"?\\\\abfnrtv]`,
          "name": "constant.character.escape.cpp"
        }, {
          "match": "\\\\[0-7]{1,3}",
          "name": "constant.character.escape.cpp"
        }, {
          "captures": {
            "1": {
              "name": "constant.character.escape.cpp"
            },
            "2": {
              "name": "invalid.illegal.unknown-escape.cpp"
            }
          },
          "match": "(?:(\\\\x0*[0-9a-fA-F]{2}(?![0-9a-fA-F]))|((?:\\\\x[0-9a-fA-F]*|\\\\x)))"
        }, {
          "include": "source.cpp#string_escapes_context_c"
        }]
      }, {
        "begin": "(?<![0-9A-Fa-f])((?:u|u8|U|L)?)'",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.string.begin.cpp"
          },
          "1": {
            "name": "meta.encoding.cpp"
          }
        },
        "end": "(')(?:((?:[a-zA-Z]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*)|(_(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*))?|(?=(?<!\\\\)\n)",
        "endCaptures": {
          "1": {
            "name": "punctuation.definition.string.end.cpp"
          },
          "2": {
            "name": "keyword.other.suffix.literal.user-defined.reserved.character.cpp"
          },
          "3": {
            "name": "keyword.other.suffix.literal.user-defined.character.cpp"
          }
        },
        "name": "string.quoted.single.cpp",
        "patterns": [{
          "captures": {
            "1": {
              "name": "constant.character.escape.cpp"
            },
            "2": {
              "name": "invalid.illegal.unknown-escape.cpp"
            }
          },
          "match": "(?:(\\\\x0*[0-9a-fA-F]{2}(?![0-9a-fA-F]))|((?:\\\\x[0-9a-fA-F]*|\\\\x)))"
        }, {
          "include": "source.cpp#string_escapes_context_c"
        }, {
          "include": "source.cpp#line_continuation_character"
        }]
      }, {
        "begin": '((?:[uUL]8?)?R)\\"(?:(?:_r|re)|regex)\\(',
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.string.begin.cpp"
          },
          "1": {
            "name": "meta.encoding.cpp"
          }
        },
        "end": '\\)(?:(?:_r|re)|regex)\\"|(?=(?<!\\\\)\n)',
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.string.end.cpp"
          }
        },
        "name": "string.quoted.double.raw.regex.cpp",
        "patterns": [{
          "include": "source.regexp.python"
        }]
      }, {
        "begin": '((?:[uUL]8?)?R)\\"(?:glsl|GLSL)\\(',
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.string.begin.cpp"
          },
          "1": {
            "name": "meta.encoding.cpp"
          }
        },
        "end": '\\)(?:glsl|GLSL)\\"|(?=(?<!\\\\)\n)',
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.string.end.cpp"
          }
        },
        "name": "meta.string.quoted.double.raw.glsl.cpp",
        "patterns": [{
          "include": "source.glsl"
        }]
      }, {
        "begin": '((?:[uUL]8?)?R)\\"(?:[pP]?(?:sql|SQL)|d[dm]l)\\(',
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.string.begin.cpp"
          },
          "1": {
            "name": "meta.encoding.cpp"
          }
        },
        "end": '\\)(?:[pP]?(?:sql|SQL)|d[dm]l)\\"|(?=(?<!\\\\)\n)',
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.string.end.cpp"
          }
        },
        "name": "meta.string.quoted.double.raw.sql.cpp",
        "patterns": [{
          "include": "source.sql"
        }]
      }, {
        "begin": '((?:u|u8|U|L)?R)"(?:([^ ()\\\\\\t]{0,16})|([^ ()\\\\\\t]*))\\(',
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.string.begin"
          },
          "1": {
            "name": "meta.encoding"
          },
          "3": {
            "name": "invalid.illegal.delimiter-too-long"
          }
        },
        "end": '(\\)\\2(\\3)")(?:((?:[a-zA-Z]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*)|(_(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*))?|(?=(?<!\\\\)\n)',
        "endCaptures": {
          "1": {
            "name": "punctuation.definition.string.end"
          },
          "2": {
            "name": "invalid.illegal.delimiter-too-long"
          },
          "3": {
            "name": "keyword.other.suffix.literal.user-defined.reserved.string.cpp"
          },
          "4": {
            "name": "keyword.other.suffix.literal.user-defined.string.cpp"
          }
        },
        "name": "string.quoted.double.raw"
      }]
    },
    "struct_block": {
      "begin": "((?<!\\w)struct(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:(?={)|(?:((?:(?:(?:\\[\\[.*?\\]\\]|__attribute(?:__)?\\s*\\(\\s*\\(.*?\\)\\s*\\))|__declspec\\(.*?\\))|alignas\\(.*?\\))(?!\\)))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))?((?:(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*+)?(?:((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(:(?!:)))?)",
      "beginCaptures": {
        "0": {
          "name": "meta.head.struct.cpp"
        },
        "1": {
          "name": "storage.type.$1.cpp"
        },
        "2": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "3": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "4": {
          "name": "comment.block.cpp"
        },
        "5": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "6": {
          "patterns": [{
            "include": "#attributes_context"
          }, {
            "include": "source.cpp#number_literal"
          }]
        },
        "7": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "8": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "9": {
          "name": "comment.block.cpp"
        },
        "10": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "11": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "storage.type.modifier.final.cpp"
              },
              "2": {
                "patterns": [{
                  "include": "source.cpp#inline_comment"
                }]
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "4": {
                "name": "comment.block.cpp"
              },
              "5": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "((?<!\\w)final(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))"
          }, {
            "captures": {
              "1": {
                "name": "entity.name.type.struct.cpp"
              },
              "2": {
                "patterns": [{
                  "include": "source.cpp#inline_comment"
                }]
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "4": {
                "name": "comment.block.cpp"
              },
              "5": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              },
              "6": {
                "name": "storage.type.modifier.final.cpp"
              },
              "7": {
                "patterns": [{
                  "include": "source.cpp#inline_comment"
                }]
              },
              "8": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "9": {
                "name": "comment.block.cpp"
              },
              "10": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:((?<!\\w)final(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))?(?=:|{|$)"
          }, {
            "match": "DLLEXPORT",
            "name": "entity.name.other.preprocessor.macro.predefined.DLLEXPORT.cpp"
          }, {
            "match": "(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*",
            "name": "entity.name.other.preprocessor.macro.predefined.probably.$0.cpp"
          }]
        },
        "12": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "13": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "14": {
          "name": "comment.block.cpp"
        },
        "15": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "16": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "17": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "18": {
          "name": "comment.block.cpp"
        },
        "19": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "20": {
          "name": "punctuation.separator.colon.inheritance.cpp"
        }
      },
      "end": "(?:(?:(?<=\\}|%>|\\?\\?>)(?:\\s+)?(;)|(;))|(?=[;>\\[\\]=]))|(?=(?<!\\\\)\n)",
      "endCaptures": {
        "1": {
          "name": "punctuation.terminator.statement.cpp"
        },
        "2": {
          "name": "punctuation.terminator.statement.cpp"
        }
      },
      "name": "meta.block.struct.cpp",
      "patterns": [{
        "begin": "\\G ?",
        "beginCaptures": {},
        "end": "(?:\\{|<%|\\?\\?<|(?=;))|(?=(?<!\\\\)\n)",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.block.begin.bracket.curly.struct.cpp"
          }
        },
        "name": "meta.head.struct.cpp",
        "patterns": [{
          "include": "#ever_present_context"
        }, {
          "include": "#inheritance_context"
        }, {
          "include": "#template_call_range"
        }]
      }, {
        "begin": "(?<=\\{|<%|\\?\\?<)",
        "beginCaptures": {},
        "end": "\\}|%>|\\?\\?>|(?=(?<!\\\\)\n)",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.block.end.bracket.curly.struct.cpp"
          }
        },
        "name": "meta.body.struct.cpp",
        "patterns": [{
          "include": "#function_pointer"
        }, {
          "include": "#static_assert"
        }, {
          "include": "#constructor_inline"
        }, {
          "include": "#destructor_inline"
        }, {
          "include": "$self"
        }]
      }, {
        "begin": "(?<=\\}|%>|\\?\\?>)[\\s]*",
        "beginCaptures": {},
        "end": "[\\s]*(?=;)|(?=(?<!\\\\)\n)",
        "endCaptures": {},
        "name": "meta.tail.struct.cpp",
        "patterns": [{
          "include": "$self"
        }]
      }]
    },
    "switch_conditional_parentheses": {
      "begin": "((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(\\()",
      "beginCaptures": {
        "1": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "2": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "3": {
          "name": "comment.block.cpp"
        },
        "4": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "5": {
          "name": "punctuation.section.parens.begin.bracket.round.conditional.switch.cpp"
        }
      },
      "end": "\\)|(?=(?<!\\\\)\n)",
      "endCaptures": {
        "0": {
          "name": "punctuation.section.parens.end.bracket.round.conditional.switch.cpp"
        }
      },
      "name": "meta.conditional.switch.cpp",
      "patterns": [{
        "include": "#evaluation_context"
      }]
    },
    "switch_statement": {
      "begin": "((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?<!\\w)switch(?!\\w))",
      "beginCaptures": {
        "0": {
          "name": "meta.head.switch.cpp"
        },
        "1": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "2": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "3": {
          "name": "comment.block.cpp"
        },
        "4": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "5": {
          "name": "keyword.control.switch.cpp"
        }
      },
      "end": "(?:(?<=\\}|%>|\\?\\?>)|(?=[;>\\[\\]=]))|(?=(?<!\\\\)\n)",
      "endCaptures": {},
      "name": "meta.block.switch.cpp",
      "patterns": [{
        "begin": "\\G ?",
        "beginCaptures": {},
        "end": "(?:\\{|<%|\\?\\?<|(?=;))|(?=(?<!\\\\)\n)",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.block.begin.bracket.curly.switch.cpp"
          }
        },
        "name": "meta.head.switch.cpp",
        "patterns": [{
          "include": "#switch_conditional_parentheses"
        }, {
          "include": "$self"
        }]
      }, {
        "begin": "(?<=\\{|<%|\\?\\?<)",
        "beginCaptures": {},
        "end": "\\}|%>|\\?\\?>|(?=(?<!\\\\)\n)",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.block.end.bracket.curly.switch.cpp"
          }
        },
        "name": "meta.body.switch.cpp",
        "patterns": [{
          "include": "#default_statement"
        }, {
          "include": "#case_statement"
        }, {
          "include": "$self"
        }]
      }, {
        "begin": "(?<=\\}|%>|\\?\\?>)[\\s]*",
        "beginCaptures": {},
        "end": "[\\s]*(?=;)|(?=(?<!\\\\)\n)",
        "endCaptures": {},
        "name": "meta.tail.switch.cpp",
        "patterns": [{
          "include": "$self"
        }]
      }]
    },
    "template_call_context": {
      "patterns": [{
        "include": "#ever_present_context"
      }, {
        "include": "#template_call_range"
      }, {
        "include": "#storage_types"
      }, {
        "include": "source.cpp#language_constants"
      }, {
        "include": "source.cpp#scope_resolution_template_call_inner_generated"
      }, {
        "include": "#operators"
      }, {
        "include": "source.cpp#number_literal"
      }, {
        "include": "#string_context"
      }, {
        "include": "source.cpp#comma_in_template_argument"
      }, {
        "include": "source.cpp#qualified_type"
      }]
    },
    "template_call_range": {
      "begin": "<",
      "beginCaptures": {
        "0": {
          "name": "punctuation.section.angle-brackets.begin.template.call.cpp"
        }
      },
      "end": ">|(?=(?<!\\\\)\n)",
      "endCaptures": {
        "0": {
          "name": "punctuation.section.angle-brackets.end.template.call.cpp"
        }
      },
      "name": "meta.template.call.cpp",
      "patterns": [{
        "include": "#template_call_context"
      }]
    },
    "template_definition": {
      "begin": "(?<!\\w)(template)(?:\\s+)?(<)",
      "beginCaptures": {
        "1": {
          "name": "storage.type.template.cpp"
        },
        "2": {
          "name": "punctuation.section.angle-brackets.begin.template.definition.cpp"
        }
      },
      "end": ">|(?=(?<!\\\\)\n)",
      "endCaptures": {
        "0": {
          "name": "punctuation.section.angle-brackets.end.template.definition.cpp"
        }
      },
      "name": "meta.template.definition.cpp",
      "patterns": [{
        "begin": "(?<=\\w)(?:\\s+)?<",
        "beginCaptures": {
          "0": {
            "name": "punctuation.section.angle-brackets.begin.template.call.cpp"
          }
        },
        "end": ">|(?=(?<!\\\\)\n)",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.angle-brackets.end.template.call.cpp"
          }
        },
        "patterns": [{
          "include": "#template_call_context"
        }]
      }, {
        "include": "#template_definition_context"
      }]
    },
    "template_definition_context": {
      "patterns": [{
        "include": "source.cpp#scope_resolution_template_definition_inner_generated"
      }, {
        "include": "source.cpp#template_definition_argument"
      }, {
        "include": "source.cpp#template_argument_defaulted"
      }, {
        "include": "source.cpp#template_call_innards"
      }, {
        "include": "#evaluation_context"
      }]
    },
    "ternary_operator": {
      "applyEndPatternLast": 1,
      "begin": "\\?",
      "beginCaptures": {
        "0": {
          "name": "keyword.operator.ternary.cpp"
        }
      },
      "end": ":|(?=(?<!\\\\)\n)",
      "endCaptures": {
        "0": {
          "name": "keyword.operator.ternary.cpp"
        }
      },
      "patterns": [{
        "include": "#ever_present_context"
      }, {
        "include": "#string_context"
      }, {
        "include": "source.cpp#number_literal"
      }, {
        "include": "#method_access"
      }, {
        "include": "source.cpp#member_access"
      }, {
        "include": "source.cpp#predefined_macros"
      }, {
        "include": "#operators"
      }, {
        "include": "source.cpp#memory_operators"
      }, {
        "include": "source.cpp#wordlike_operators"
      }, {
        "include": "source.cpp#type_casting_operators"
      }, {
        "include": "source.cpp#control_flow_keywords"
      }, {
        "include": "source.cpp#exception_keywords"
      }, {
        "include": "source.cpp#the_this_keyword"
      }, {
        "include": "source.cpp#language_constants"
      }, {
        "include": "#builtin_storage_type_initilizer"
      }, {
        "include": "source.cpp#qualifiers_and_specifiers_post_parameters"
      }, {
        "include": "source.cpp#functional_specifiers_pre_parameters"
      }, {
        "include": "#storage_types"
      }, {
        "include": "#lambdas"
      }, {
        "include": "#attributes_context"
      }, {
        "include": "#parentheses"
      }, {
        "include": "#function_call"
      }, {
        "include": "source.cpp#scope_resolution_inner_generated"
      }, {
        "include": "#square_brackets"
      }, {
        "include": "source.cpp#semicolon"
      }, {
        "include": "source.cpp#comma"
      }]
    },
    "typedef_class": {
      "begin": "((?<!\\w)typedef(?!\\w))(?:\\s+)?(?=(?<!\\w)class(?!\\w))",
      "beginCaptures": {
        "1": {
          "name": "keyword.other.typedef.cpp"
        }
      },
      "end": "(?<=;)|(?=(?<!\\\\)\n)",
      "endCaptures": {},
      "patterns": [{
        "begin": "((?<!\\w)class(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:(?={)|(?:((?:(?:(?:\\[\\[.*?\\]\\]|__attribute(?:__)?\\s*\\(\\s*\\(.*?\\)\\s*\\))|__declspec\\(.*?\\))|alignas\\(.*?\\))(?!\\)))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))?((?:(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*+)?(?:((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(:(?!:)))?)",
        "beginCaptures": {
          "0": {
            "name": "meta.head.class.cpp"
          },
          "1": {
            "name": "storage.type.$1.cpp"
          },
          "2": {
            "patterns": [{
              "include": "source.cpp#inline_comment"
            }]
          },
          "3": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "4": {
            "name": "comment.block.cpp"
          },
          "5": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "6": {
            "patterns": [{
              "include": "#attributes_context"
            }, {
              "include": "source.cpp#number_literal"
            }]
          },
          "7": {
            "patterns": [{
              "include": "source.cpp#inline_comment"
            }]
          },
          "8": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "9": {
            "name": "comment.block.cpp"
          },
          "10": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "11": {
            "patterns": [{
              "captures": {
                "1": {
                  "name": "storage.type.modifier.final.cpp"
                },
                "2": {
                  "patterns": [{
                    "include": "source.cpp#inline_comment"
                  }]
                },
                "3": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "4": {
                  "name": "comment.block.cpp"
                },
                "5": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                }
              },
              "match": "((?<!\\w)final(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))"
            }, {
              "captures": {
                "1": {
                  "name": "entity.name.type.class.cpp"
                },
                "2": {
                  "patterns": [{
                    "include": "source.cpp#inline_comment"
                  }]
                },
                "3": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "4": {
                  "name": "comment.block.cpp"
                },
                "5": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                },
                "6": {
                  "name": "storage.type.modifier.final.cpp"
                },
                "7": {
                  "patterns": [{
                    "include": "source.cpp#inline_comment"
                  }]
                },
                "8": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "9": {
                  "name": "comment.block.cpp"
                },
                "10": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                }
              },
              "match": "((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:((?<!\\w)final(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))?(?=:|{|$)"
            }, {
              "match": "DLLEXPORT",
              "name": "entity.name.other.preprocessor.macro.predefined.DLLEXPORT.cpp"
            }, {
              "match": "(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*",
              "name": "entity.name.other.preprocessor.macro.predefined.probably.$0.cpp"
            }]
          },
          "12": {
            "patterns": [{
              "include": "source.cpp#inline_comment"
            }]
          },
          "13": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "14": {
            "name": "comment.block.cpp"
          },
          "15": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "16": {
            "patterns": [{
              "include": "source.cpp#inline_comment"
            }]
          },
          "17": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "18": {
            "name": "comment.block.cpp"
          },
          "19": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "20": {
            "name": "punctuation.separator.colon.inheritance.cpp"
          }
        },
        "end": "(?:(?:(?<=\\}|%>|\\?\\?>)(?:\\s+)?(;)|(;))|(?=[;>\\[\\]=]))|(?=(?<!\\\\)\n)",
        "endCaptures": {
          "1": {
            "name": "punctuation.terminator.statement.cpp"
          },
          "2": {
            "name": "punctuation.terminator.statement.cpp"
          }
        },
        "name": "meta.block.class.cpp",
        "patterns": [{
          "begin": "\\G ?",
          "beginCaptures": {},
          "end": "(?:\\{|<%|\\?\\?<|(?=;))|(?=(?<!\\\\)\n)",
          "endCaptures": {
            "0": {
              "name": "punctuation.section.block.begin.bracket.curly.class.cpp"
            }
          },
          "name": "meta.head.class.cpp",
          "patterns": [{
            "include": "#ever_present_context"
          }, {
            "include": "#inheritance_context"
          }, {
            "include": "#template_call_range"
          }]
        }, {
          "begin": "(?<=\\{|<%|\\?\\?<)",
          "beginCaptures": {},
          "end": "\\}|%>|\\?\\?>|(?=(?<!\\\\)\n)",
          "endCaptures": {
            "0": {
              "name": "punctuation.section.block.end.bracket.curly.class.cpp"
            }
          },
          "name": "meta.body.class.cpp",
          "patterns": [{
            "include": "#function_pointer"
          }, {
            "include": "#static_assert"
          }, {
            "include": "#constructor_inline"
          }, {
            "include": "#destructor_inline"
          }, {
            "include": "$self"
          }]
        }, {
          "begin": "(?<=\\}|%>|\\?\\?>)[\\s]*",
          "beginCaptures": {},
          "end": "[\\s]*(?=;)|(?=(?<!\\\\)\n)",
          "endCaptures": {},
          "name": "meta.tail.class.cpp",
          "patterns": [{
            "captures": {
              "1": {
                "patterns": [{
                  "match": "\\*",
                  "name": "storage.modifier.pointer.cpp"
                }, {
                  "captures": {
                    "1": {
                      "patterns": [{
                        "include": "source.cpp#inline_comment"
                      }]
                    },
                    "2": {
                      "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                    },
                    "3": {
                      "name": "comment.block.cpp"
                    },
                    "4": {
                      "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                    }
                  },
                  "match": "(?:\\&((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))){2,}\\&",
                  "name": "invalid.illegal.reference-type.cpp"
                }, {
                  "match": "\\&",
                  "name": "storage.modifier.reference.cpp"
                }]
              },
              "2": {
                "patterns": [{
                  "include": "source.cpp#inline_comment"
                }]
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "4": {
                "name": "comment.block.cpp"
              },
              "5": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              },
              "6": {
                "patterns": [{
                  "include": "source.cpp#inline_comment"
                }]
              },
              "7": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "8": {
                "name": "comment.block.cpp"
              },
              "9": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              },
              "10": {
                "patterns": [{
                  "include": "source.cpp#inline_comment"
                }]
              },
              "11": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "12": {
                "name": "comment.block.cpp"
              },
              "13": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              },
              "14": {
                "name": "entity.name.type.alias.cpp"
              }
            },
            "match": "(((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))?(?:(?:&|\\*)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*(?:&|\\*))?((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))"
          }, {
            "match": ","
          }]
        }]
      }]
    },
    "typedef_function_pointer": {
      "begin": "((?<!\\w)typedef(?!\\w))(?:\\s+)?(?=.*\\(\\*\\s*(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*\\s*\\))",
      "beginCaptures": {
        "1": {
          "name": "keyword.other.typedef.cpp"
        }
      },
      "end": "(?<=;)|(?=(?<!\\\\)\n)",
      "endCaptures": {},
      "patterns": [{
        "begin": `(\\s*+((?:(?:(?:\\[\\[.*?\\]\\]|__attribute(?:__)?\\s*\\(\\s*\\(.*?\\)\\s*\\))|__declspec\\(.*?\\))|alignas\\(.*?\\))(?!\\)))?((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:(?:(?:(?:unsigned)|(?:signed)|(?:short)|(?:long))|(?:(?:struct)|(?:class)|(?:union)|(?:enum)))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*(?:((?:::)?(?:(?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)\\s*+(((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<18>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)\\s*+)?::)*+)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))?(?!(?:(?:transaction_safe_dynamic)|(?:__has_cpp_attribute)|(?:reinterpret_cast)|(?:transaction_safe)|(?:atomic_noexcept)|(?:atomic_commit)|(?:__has_include)|(?:atomic_cancel)|(?:synchronized)|(?:thread_local)|(?:dynamic_cast)|(?:static_cast)|(?:const_cast)|(?:constexpr)|(?:co_return)|(?:constinit)|(?:namespace)|(?:protected)|(?:consteval)|(?:constexpr)|(?:constexpr)|(?:co_return)|(?:consteval)|(?:co_await)|(?:continue)|(?:template)|(?:reflexpr)|(?:volatile)|(?:register)|(?:co_await)|(?:co_yield)|(?:restrict)|(?:noexcept)|(?:volatile)|(?:override)|(?:explicit)|(?:decltype)|(?:operator)|(?:noexcept)|(?:noexcept)|(?:typename)|(?:requires)|(?:co_yield)|(?:nullptr)|(?:alignof)|(?:alignas)|(?:default)|(?:mutable)|(?:virtual)|(?:mutable)|(?:private)|(?:include)|(?:warning)|(?:_Pragma)|(?:defined)|(?:typedef)|(?:__asm__)|(?:concept)|(?:define)|(?:module)|(?:sizeof)|(?:switch)|(?:delete)|(?:pragma)|(?:and_eq)|(?:inline)|(?:xor_eq)|(?:typeid)|(?:import)|(?:extern)|(?:public)|(?:bitand)|(?:static)|(?:export)|(?:return)|(?:friend)|(?:ifndef)|(?:not_eq)|(?:false)|(?:final)|(?:break)|(?:const)|(?:catch)|(?:endif)|(?:ifdef)|(?:undef)|(?:error)|(?:audit)|(?:while)|(?:using)|(?:axiom)|(?:or_eq)|(?:compl)|(?:throw)|(?:bitor)|(?:const)|(?:line)|(?:case)|(?:else)|(?:this)|(?:true)|(?:goto)|(?:else)|(?:NULL)|(?:elif)|(?:new)|(?:asm)|(?:xor)|(?:and)|(?:try)|(?:not)|(?:for)|(?:do)|(?:if)|(?:or)|(?:if))\\b)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*\\b((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<18>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)?(?![\\w<:.]))(((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))?(?:(?:&|\\*)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*(?:&|\\*))?((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(\\()(\\*)(?:\\s+)?((?:(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*)?)(?:\\s+)?(?:(\\[)(\\w*)(\\])(?:\\s+)?)*(\\))(?:\\s+)?(\\()`,
        "beginCaptures": {
          "1": {
            "name": "meta.qualified_type.cpp",
            "patterns": [{
              "match": "::",
              "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.cpp"
            }, {
              "match": "(?<!\\w)(?:(?:struct)|(?:class)|(?:union)|(?:enum))(?!\\w)",
              "name": "storage.type.$0.cpp"
            }, {
              "include": "#attributes_context"
            }, {
              "include": "#storage_types"
            }, {
              "include": "source.cpp#number_literal"
            }, {
              "include": "#string_context"
            }, {
              "include": "source.cpp#comma"
            }, {
              "include": "source.cpp#scope_resolution_inner_generated"
            }, {
              "begin": "<",
              "beginCaptures": {
                "0": {
                  "name": "punctuation.section.angle-brackets.begin.template.call.cpp"
                }
              },
              "end": ">|(?=(?<!\\\\)\n)",
              "endCaptures": {
                "0": {
                  "name": "punctuation.section.angle-brackets.end.template.call.cpp"
                }
              },
              "name": "meta.template.call.cpp",
              "patterns": [{
                "include": "#template_call_context"
              }]
            }, {
              "match": "(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*",
              "name": "entity.name.type.cpp"
            }]
          },
          "2": {
            "patterns": [{
              "include": "#attributes_context"
            }, {
              "include": "source.cpp#number_literal"
            }]
          },
          "3": {
            "patterns": [{
              "include": "source.cpp#inline_comment"
            }]
          },
          "4": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "5": {
            "name": "comment.block.cpp"
          },
          "6": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "7": {
            "patterns": [{
              "include": "source.cpp#inline_comment"
            }]
          },
          "8": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "9": {
            "name": "comment.block.cpp"
          },
          "10": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "11": {
            "patterns": [{
              "match": "::",
              "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.type.cpp"
            }, {
              "match": "(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)",
              "name": "entity.name.scope-resolution.type.cpp"
            }, {
              "include": "#template_call_range"
            }]
          },
          "12": {
            "patterns": [{
              "include": "#template_call_range"
            }]
          },
          "13": {},
          "14": {
            "patterns": [{
              "include": "source.cpp#inline_comment"
            }]
          },
          "15": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "16": {
            "name": "comment.block.cpp"
          },
          "17": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "18": {},
          "19": {
            "patterns": [{
              "match": "\\*",
              "name": "storage.modifier.pointer.cpp"
            }, {
              "captures": {
                "1": {
                  "patterns": [{
                    "include": "source.cpp#inline_comment"
                  }]
                },
                "2": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "3": {
                  "name": "comment.block.cpp"
                },
                "4": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                }
              },
              "match": "(?:\\&((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))){2,}\\&",
              "name": "invalid.illegal.reference-type.cpp"
            }, {
              "match": "\\&",
              "name": "storage.modifier.reference.cpp"
            }]
          },
          "20": {
            "patterns": [{
              "include": "source.cpp#inline_comment"
            }]
          },
          "21": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "22": {
            "name": "comment.block.cpp"
          },
          "23": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "24": {
            "patterns": [{
              "include": "source.cpp#inline_comment"
            }]
          },
          "25": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "26": {
            "name": "comment.block.cpp"
          },
          "27": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "28": {
            "patterns": [{
              "include": "source.cpp#inline_comment"
            }]
          },
          "29": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "30": {
            "name": "comment.block.cpp"
          },
          "31": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "32": {
            "name": "punctuation.section.parens.begin.bracket.round.function.pointer.cpp"
          },
          "33": {
            "name": "punctuation.definition.function.pointer.dereference.cpp"
          },
          "34": {
            "name": "entity.name.type.alias.cpp entity.name.type.pointer.function.cpp"
          },
          "35": {
            "name": "punctuation.definition.begin.bracket.square.cpp"
          },
          "36": {
            "patterns": [{
              "include": "#evaluation_context"
            }]
          },
          "37": {
            "name": "punctuation.definition.end.bracket.square.cpp"
          },
          "38": {
            "name": "punctuation.section.parens.end.bracket.round.function.pointer.cpp"
          },
          "39": {
            "name": "punctuation.section.parameters.begin.bracket.round.function.pointer.cpp"
          }
        },
        "end": "(\\))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?=[{=,);>]|\\n)(?!\\()|(?=(?<!\\\\)\n)",
        "endCaptures": {
          "1": {
            "name": "punctuation.section.parameters.end.bracket.round.function.pointer.cpp"
          },
          "2": {
            "patterns": [{
              "include": "source.cpp#inline_comment"
            }]
          },
          "3": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "4": {
            "name": "comment.block.cpp"
          },
          "5": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          }
        },
        "patterns": [{
          "include": "#function_parameter_context"
        }]
      }]
    },
    "typedef_struct": {
      "begin": "((?<!\\w)typedef(?!\\w))(?:\\s+)?(?=(?<!\\w)struct(?!\\w))",
      "beginCaptures": {
        "1": {
          "name": "keyword.other.typedef.cpp"
        }
      },
      "end": "(?<=;)|(?=(?<!\\\\)\n)",
      "endCaptures": {},
      "patterns": [{
        "begin": "((?<!\\w)struct(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:(?={)|(?:((?:(?:(?:\\[\\[.*?\\]\\]|__attribute(?:__)?\\s*\\(\\s*\\(.*?\\)\\s*\\))|__declspec\\(.*?\\))|alignas\\(.*?\\))(?!\\)))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))?((?:(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*+)?(?:((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(:(?!:)))?)",
        "beginCaptures": {
          "0": {
            "name": "meta.head.struct.cpp"
          },
          "1": {
            "name": "storage.type.$1.cpp"
          },
          "2": {
            "patterns": [{
              "include": "source.cpp#inline_comment"
            }]
          },
          "3": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "4": {
            "name": "comment.block.cpp"
          },
          "5": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "6": {
            "patterns": [{
              "include": "#attributes_context"
            }, {
              "include": "source.cpp#number_literal"
            }]
          },
          "7": {
            "patterns": [{
              "include": "source.cpp#inline_comment"
            }]
          },
          "8": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "9": {
            "name": "comment.block.cpp"
          },
          "10": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "11": {
            "patterns": [{
              "captures": {
                "1": {
                  "name": "storage.type.modifier.final.cpp"
                },
                "2": {
                  "patterns": [{
                    "include": "source.cpp#inline_comment"
                  }]
                },
                "3": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "4": {
                  "name": "comment.block.cpp"
                },
                "5": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                }
              },
              "match": "((?<!\\w)final(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))"
            }, {
              "captures": {
                "1": {
                  "name": "entity.name.type.struct.cpp"
                },
                "2": {
                  "patterns": [{
                    "include": "source.cpp#inline_comment"
                  }]
                },
                "3": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "4": {
                  "name": "comment.block.cpp"
                },
                "5": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                },
                "6": {
                  "name": "storage.type.modifier.final.cpp"
                },
                "7": {
                  "patterns": [{
                    "include": "source.cpp#inline_comment"
                  }]
                },
                "8": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "9": {
                  "name": "comment.block.cpp"
                },
                "10": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                }
              },
              "match": "((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:((?<!\\w)final(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))?(?=:|{|$)"
            }, {
              "match": "DLLEXPORT",
              "name": "entity.name.other.preprocessor.macro.predefined.DLLEXPORT.cpp"
            }, {
              "match": "(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*",
              "name": "entity.name.other.preprocessor.macro.predefined.probably.$0.cpp"
            }]
          },
          "12": {
            "patterns": [{
              "include": "source.cpp#inline_comment"
            }]
          },
          "13": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "14": {
            "name": "comment.block.cpp"
          },
          "15": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "16": {
            "patterns": [{
              "include": "source.cpp#inline_comment"
            }]
          },
          "17": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "18": {
            "name": "comment.block.cpp"
          },
          "19": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "20": {
            "name": "punctuation.separator.colon.inheritance.cpp"
          }
        },
        "end": "(?:(?:(?<=\\}|%>|\\?\\?>)(?:\\s+)?(;)|(;))|(?=[;>\\[\\]=]))|(?=(?<!\\\\)\n)",
        "endCaptures": {
          "1": {
            "name": "punctuation.terminator.statement.cpp"
          },
          "2": {
            "name": "punctuation.terminator.statement.cpp"
          }
        },
        "name": "meta.block.struct.cpp",
        "patterns": [{
          "begin": "\\G ?",
          "beginCaptures": {},
          "end": "(?:\\{|<%|\\?\\?<|(?=;))|(?=(?<!\\\\)\n)",
          "endCaptures": {
            "0": {
              "name": "punctuation.section.block.begin.bracket.curly.struct.cpp"
            }
          },
          "name": "meta.head.struct.cpp",
          "patterns": [{
            "include": "#ever_present_context"
          }, {
            "include": "#inheritance_context"
          }, {
            "include": "#template_call_range"
          }]
        }, {
          "begin": "(?<=\\{|<%|\\?\\?<)",
          "beginCaptures": {},
          "end": "\\}|%>|\\?\\?>|(?=(?<!\\\\)\n)",
          "endCaptures": {
            "0": {
              "name": "punctuation.section.block.end.bracket.curly.struct.cpp"
            }
          },
          "name": "meta.body.struct.cpp",
          "patterns": [{
            "include": "#function_pointer"
          }, {
            "include": "#static_assert"
          }, {
            "include": "#constructor_inline"
          }, {
            "include": "#destructor_inline"
          }, {
            "include": "$self"
          }]
        }, {
          "begin": "(?<=\\}|%>|\\?\\?>)[\\s]*",
          "beginCaptures": {},
          "end": "[\\s]*(?=;)|(?=(?<!\\\\)\n)",
          "endCaptures": {},
          "name": "meta.tail.struct.cpp",
          "patterns": [{
            "captures": {
              "1": {
                "patterns": [{
                  "match": "\\*",
                  "name": "storage.modifier.pointer.cpp"
                }, {
                  "captures": {
                    "1": {
                      "patterns": [{
                        "include": "source.cpp#inline_comment"
                      }]
                    },
                    "2": {
                      "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                    },
                    "3": {
                      "name": "comment.block.cpp"
                    },
                    "4": {
                      "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                    }
                  },
                  "match": "(?:\\&((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))){2,}\\&",
                  "name": "invalid.illegal.reference-type.cpp"
                }, {
                  "match": "\\&",
                  "name": "storage.modifier.reference.cpp"
                }]
              },
              "2": {
                "patterns": [{
                  "include": "source.cpp#inline_comment"
                }]
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "4": {
                "name": "comment.block.cpp"
              },
              "5": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              },
              "6": {
                "patterns": [{
                  "include": "source.cpp#inline_comment"
                }]
              },
              "7": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "8": {
                "name": "comment.block.cpp"
              },
              "9": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              },
              "10": {
                "patterns": [{
                  "include": "source.cpp#inline_comment"
                }]
              },
              "11": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "12": {
                "name": "comment.block.cpp"
              },
              "13": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              },
              "14": {
                "name": "entity.name.type.alias.cpp"
              }
            },
            "match": "(((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))?(?:(?:&|\\*)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*(?:&|\\*))?((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))"
          }, {
            "match": ","
          }]
        }]
      }]
    },
    "typedef_union": {
      "begin": "((?<!\\w)typedef(?!\\w))(?:\\s+)?(?=(?<!\\w)union(?!\\w))",
      "beginCaptures": {
        "1": {
          "name": "keyword.other.typedef.cpp"
        }
      },
      "end": "(?<=;)|(?=(?<!\\\\)\n)",
      "endCaptures": {},
      "patterns": [{
        "begin": "((?<!\\w)union(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:(?={)|(?:((?:(?:(?:\\[\\[.*?\\]\\]|__attribute(?:__)?\\s*\\(\\s*\\(.*?\\)\\s*\\))|__declspec\\(.*?\\))|alignas\\(.*?\\))(?!\\)))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))?((?:(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*+)?(?:((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(:(?!:)))?)",
        "beginCaptures": {
          "0": {
            "name": "meta.head.union.cpp"
          },
          "1": {
            "name": "storage.type.$1.cpp"
          },
          "2": {
            "patterns": [{
              "include": "source.cpp#inline_comment"
            }]
          },
          "3": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "4": {
            "name": "comment.block.cpp"
          },
          "5": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "6": {
            "patterns": [{
              "include": "#attributes_context"
            }, {
              "include": "source.cpp#number_literal"
            }]
          },
          "7": {
            "patterns": [{
              "include": "source.cpp#inline_comment"
            }]
          },
          "8": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "9": {
            "name": "comment.block.cpp"
          },
          "10": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "11": {
            "patterns": [{
              "captures": {
                "1": {
                  "name": "storage.type.modifier.final.cpp"
                },
                "2": {
                  "patterns": [{
                    "include": "source.cpp#inline_comment"
                  }]
                },
                "3": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "4": {
                  "name": "comment.block.cpp"
                },
                "5": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                }
              },
              "match": "((?<!\\w)final(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))"
            }, {
              "captures": {
                "1": {
                  "name": "entity.name.type.union.cpp"
                },
                "2": {
                  "patterns": [{
                    "include": "source.cpp#inline_comment"
                  }]
                },
                "3": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "4": {
                  "name": "comment.block.cpp"
                },
                "5": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                },
                "6": {
                  "name": "storage.type.modifier.final.cpp"
                },
                "7": {
                  "patterns": [{
                    "include": "source.cpp#inline_comment"
                  }]
                },
                "8": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "9": {
                  "name": "comment.block.cpp"
                },
                "10": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                }
              },
              "match": "((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:((?<!\\w)final(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))?(?=:|{|$)"
            }, {
              "match": "DLLEXPORT",
              "name": "entity.name.other.preprocessor.macro.predefined.DLLEXPORT.cpp"
            }, {
              "match": "(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*",
              "name": "entity.name.other.preprocessor.macro.predefined.probably.$0.cpp"
            }]
          },
          "12": {
            "patterns": [{
              "include": "source.cpp#inline_comment"
            }]
          },
          "13": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "14": {
            "name": "comment.block.cpp"
          },
          "15": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "16": {
            "patterns": [{
              "include": "source.cpp#inline_comment"
            }]
          },
          "17": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "18": {
            "name": "comment.block.cpp"
          },
          "19": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "20": {
            "name": "punctuation.separator.colon.inheritance.cpp"
          }
        },
        "end": "(?:(?:(?<=\\}|%>|\\?\\?>)(?:\\s+)?(;)|(;))|(?=[;>\\[\\]=]))|(?=(?<!\\\\)\n)",
        "endCaptures": {
          "1": {
            "name": "punctuation.terminator.statement.cpp"
          },
          "2": {
            "name": "punctuation.terminator.statement.cpp"
          }
        },
        "name": "meta.block.union.cpp",
        "patterns": [{
          "begin": "\\G ?",
          "beginCaptures": {},
          "end": "(?:\\{|<%|\\?\\?<|(?=;))|(?=(?<!\\\\)\n)",
          "endCaptures": {
            "0": {
              "name": "punctuation.section.block.begin.bracket.curly.union.cpp"
            }
          },
          "name": "meta.head.union.cpp",
          "patterns": [{
            "include": "#ever_present_context"
          }, {
            "include": "#inheritance_context"
          }, {
            "include": "#template_call_range"
          }]
        }, {
          "begin": "(?<=\\{|<%|\\?\\?<)",
          "beginCaptures": {},
          "end": "\\}|%>|\\?\\?>|(?=(?<!\\\\)\n)",
          "endCaptures": {
            "0": {
              "name": "punctuation.section.block.end.bracket.curly.union.cpp"
            }
          },
          "name": "meta.body.union.cpp",
          "patterns": [{
            "include": "#function_pointer"
          }, {
            "include": "#static_assert"
          }, {
            "include": "#constructor_inline"
          }, {
            "include": "#destructor_inline"
          }, {
            "include": "$self"
          }]
        }, {
          "begin": "(?<=\\}|%>|\\?\\?>)[\\s]*",
          "beginCaptures": {},
          "end": "[\\s]*(?=;)|(?=(?<!\\\\)\n)",
          "endCaptures": {},
          "name": "meta.tail.union.cpp",
          "patterns": [{
            "captures": {
              "1": {
                "patterns": [{
                  "match": "\\*",
                  "name": "storage.modifier.pointer.cpp"
                }, {
                  "captures": {
                    "1": {
                      "patterns": [{
                        "include": "source.cpp#inline_comment"
                      }]
                    },
                    "2": {
                      "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                    },
                    "3": {
                      "name": "comment.block.cpp"
                    },
                    "4": {
                      "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                    }
                  },
                  "match": "(?:\\&((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))){2,}\\&",
                  "name": "invalid.illegal.reference-type.cpp"
                }, {
                  "match": "\\&",
                  "name": "storage.modifier.reference.cpp"
                }]
              },
              "2": {
                "patterns": [{
                  "include": "source.cpp#inline_comment"
                }]
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "4": {
                "name": "comment.block.cpp"
              },
              "5": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              },
              "6": {
                "patterns": [{
                  "include": "source.cpp#inline_comment"
                }]
              },
              "7": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "8": {
                "name": "comment.block.cpp"
              },
              "9": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              },
              "10": {
                "patterns": [{
                  "include": "source.cpp#inline_comment"
                }]
              },
              "11": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "12": {
                "name": "comment.block.cpp"
              },
              "13": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              },
              "14": {
                "name": "entity.name.type.alias.cpp"
              }
            },
            "match": "(((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))?(?:(?:&|\\*)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*(?:&|\\*))?((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))"
          }, {
            "match": ","
          }]
        }]
      }]
    },
    "typeid_operator": {
      "begin": "((?<!\\w)typeid(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(\\()",
      "beginCaptures": {
        "1": {
          "name": "keyword.operator.functionlike.cpp keyword.operator.typeid.cpp"
        },
        "2": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "3": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "4": {
          "name": "comment.block.cpp"
        },
        "5": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "6": {
          "name": "punctuation.section.arguments.begin.bracket.round.operator.typeid.cpp"
        }
      },
      "contentName": "meta.arguments.operator.typeid",
      "end": "\\)|(?=(?<!\\\\)\n)",
      "endCaptures": {
        "0": {
          "name": "punctuation.section.arguments.end.bracket.round.operator.typeid.cpp"
        }
      },
      "patterns": [{
        "include": "#evaluation_context"
      }]
    },
    "union_block": {
      "begin": "((?<!\\w)union(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:(?={)|(?:((?:(?:(?:\\[\\[.*?\\]\\]|__attribute(?:__)?\\s*\\(\\s*\\(.*?\\)\\s*\\))|__declspec\\(.*?\\))|alignas\\(.*?\\))(?!\\)))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))?((?:(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*+)?(?:((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(:(?!:)))?)",
      "beginCaptures": {
        "0": {
          "name": "meta.head.union.cpp"
        },
        "1": {
          "name": "storage.type.$1.cpp"
        },
        "2": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "3": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "4": {
          "name": "comment.block.cpp"
        },
        "5": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "6": {
          "patterns": [{
            "include": "#attributes_context"
          }, {
            "include": "source.cpp#number_literal"
          }]
        },
        "7": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "8": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "9": {
          "name": "comment.block.cpp"
        },
        "10": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "11": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "storage.type.modifier.final.cpp"
              },
              "2": {
                "patterns": [{
                  "include": "source.cpp#inline_comment"
                }]
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "4": {
                "name": "comment.block.cpp"
              },
              "5": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "((?<!\\w)final(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))"
          }, {
            "captures": {
              "1": {
                "name": "entity.name.type.union.cpp"
              },
              "2": {
                "patterns": [{
                  "include": "source.cpp#inline_comment"
                }]
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "4": {
                "name": "comment.block.cpp"
              },
              "5": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              },
              "6": {
                "name": "storage.type.modifier.final.cpp"
              },
              "7": {
                "patterns": [{
                  "include": "source.cpp#inline_comment"
                }]
              },
              "8": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "9": {
                "name": "comment.block.cpp"
              },
              "10": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:((?<!\\w)final(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))?(?=:|{|$)"
          }, {
            "match": "DLLEXPORT",
            "name": "entity.name.other.preprocessor.macro.predefined.DLLEXPORT.cpp"
          }, {
            "match": "(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*",
            "name": "entity.name.other.preprocessor.macro.predefined.probably.$0.cpp"
          }]
        },
        "12": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "13": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "14": {
          "name": "comment.block.cpp"
        },
        "15": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "16": {
          "patterns": [{
            "include": "source.cpp#inline_comment"
          }]
        },
        "17": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "18": {
          "name": "comment.block.cpp"
        },
        "19": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "20": {
          "name": "punctuation.separator.colon.inheritance.cpp"
        }
      },
      "end": "(?:(?:(?<=\\}|%>|\\?\\?>)(?:\\s+)?(;)|(;))|(?=[;>\\[\\]=]))|(?=(?<!\\\\)\n)",
      "endCaptures": {
        "1": {
          "name": "punctuation.terminator.statement.cpp"
        },
        "2": {
          "name": "punctuation.terminator.statement.cpp"
        }
      },
      "name": "meta.block.union.cpp",
      "patterns": [{
        "begin": "\\G ?",
        "beginCaptures": {},
        "end": "(?:\\{|<%|\\?\\?<|(?=;))|(?=(?<!\\\\)\n)",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.block.begin.bracket.curly.union.cpp"
          }
        },
        "name": "meta.head.union.cpp",
        "patterns": [{
          "include": "#ever_present_context"
        }, {
          "include": "#inheritance_context"
        }, {
          "include": "#template_call_range"
        }]
      }, {
        "begin": "(?<=\\{|<%|\\?\\?<)",
        "beginCaptures": {},
        "end": "\\}|%>|\\?\\?>|(?=(?<!\\\\)\n)",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.block.end.bracket.curly.union.cpp"
          }
        },
        "name": "meta.body.union.cpp",
        "patterns": [{
          "include": "#function_pointer"
        }, {
          "include": "#static_assert"
        }, {
          "include": "#constructor_inline"
        }, {
          "include": "#destructor_inline"
        }, {
          "include": "$self"
        }]
      }, {
        "begin": "(?<=\\}|%>|\\?\\?>)[\\s]*",
        "beginCaptures": {},
        "end": "[\\s]*(?=;)|(?=(?<!\\\\)\n)",
        "endCaptures": {},
        "name": "meta.tail.union.cpp",
        "patterns": [{
          "include": "$self"
        }]
      }]
    },
    "using_namespace": {
      "begin": `(?<!\\w)(using)\\s+(namespace)\\s+((::)?(?:(?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)\\s*+(((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<6>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)\\s*+)?::)*\\s*+)?((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))(?=;|\\n)`,
      "beginCaptures": {
        "1": {
          "name": "keyword.other.using.directive.cpp"
        },
        "2": {
          "name": "keyword.other.namespace.directive.cpp storage.type.namespace.directive.cpp"
        },
        "3": {
          "patterns": [{
            "include": "source.cpp#scope_resolution_namespace_using_inner_generated"
          }]
        },
        "4": {
          "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.namespace.using.cpp"
        },
        "5": {
          "patterns": [{
            "include": "#template_call_range"
          }]
        },
        "6": {},
        "7": {
          "name": "entity.name.namespace.cpp"
        }
      },
      "end": ";|(?=(?<!\\\\)\n)",
      "endCaptures": {
        "0": {
          "name": "punctuation.terminator.statement.cpp"
        }
      },
      "name": "meta.using-namespace.cpp"
    }
  },
  "scopeName": "source.cpp.embedded.macro",
  "embeddedLangs": ["regexp", "glsl", "sql"]
});
var cpp_macro = [...regexp, ...glsl, ...sql, lang];

// node_modules/shiki/dist/langs/cpp.mjs
var lang2 = Object.freeze({
  "displayName": "C++",
  "name": "cpp",
  "patterns": [{
    "include": "#ever_present_context"
  }, {
    "include": "#constructor_root"
  }, {
    "include": "#destructor_root"
  }, {
    "include": "#function_definition"
  }, {
    "include": "#operator_overload"
  }, {
    "include": "#using_namespace"
  }, {
    "include": "#type_alias"
  }, {
    "include": "#using_name"
  }, {
    "include": "#namespace_alias"
  }, {
    "include": "#namespace_block"
  }, {
    "include": "#extern_block"
  }, {
    "include": "#typedef_class"
  }, {
    "include": "#typedef_struct"
  }, {
    "include": "#typedef_union"
  }, {
    "include": "#misc_keywords"
  }, {
    "include": "#standard_declares"
  }, {
    "include": "#class_block"
  }, {
    "include": "#struct_block"
  }, {
    "include": "#union_block"
  }, {
    "include": "#enum_block"
  }, {
    "include": "#template_isolated_definition"
  }, {
    "include": "#template_definition"
  }, {
    "include": "#template_explicit_instantiation"
  }, {
    "include": "#access_control_keywords"
  }, {
    "include": "#block"
  }, {
    "include": "#static_assert"
  }, {
    "include": "#assembly"
  }, {
    "include": "#function_pointer"
  }, {
    "include": "#evaluation_context"
  }],
  "repository": {
    "access_control_keywords": {
      "captures": {
        "1": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "2": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "3": {
          "name": "storage.type.modifier.access.control.$4.cpp"
        },
        "4": {},
        "5": {
          "name": "punctuation.separator.colon.access.control.cpp"
        }
      },
      "match": "((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(((?:(?:protected)|(?:private)|(?:public)))(?:\\s+)?(:))"
    },
    "alignas_attribute": {
      "begin": "alignas\\(",
      "beginCaptures": {
        "0": {
          "name": "punctuation.section.attribute.begin.cpp"
        }
      },
      "end": "\\)",
      "endCaptures": {
        "0": {
          "name": "punctuation.section.attribute.end.cpp"
        }
      },
      "name": "support.other.attribute.cpp",
      "patterns": [{
        "include": "#attributes_context"
      }, {
        "begin": "\\(",
        "beginCaptures": {},
        "end": "\\)",
        "endCaptures": {},
        "patterns": [{
          "include": "#attributes_context"
        }, {
          "include": "#string_context"
        }, {
          "include": "#ever_present_context"
        }]
      }, {
        "captures": {
          "1": {
            "name": "keyword.other.using.directive.cpp"
          },
          "2": {
            "name": "entity.name.namespace.cpp"
          }
        },
        "match": "(using)\\s+((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))"
      }, {
        "match": ",",
        "name": "punctuation.separator.attribute.cpp"
      }, {
        "match": ":",
        "name": "punctuation.accessor.attribute.cpp"
      }, {
        "match": "(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)(?=::)",
        "name": "entity.name.namespace.cpp"
      }, {
        "match": "(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)",
        "name": "entity.other.attribute.$0.cpp"
      }, {
        "include": "#number_literal"
      }, {
        "include": "#ever_present_context"
      }]
    },
    "alignas_operator": {
      "begin": "((?<!\\w)alignas(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(\\()",
      "beginCaptures": {
        "1": {
          "name": "keyword.operator.functionlike.cpp keyword.operator.alignas.cpp"
        },
        "2": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "3": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "4": {
          "name": "comment.block.cpp"
        },
        "5": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "6": {
          "name": "punctuation.section.arguments.begin.bracket.round.operator.alignas.cpp"
        }
      },
      "contentName": "meta.arguments.operator.alignas",
      "end": "\\)",
      "endCaptures": {
        "0": {
          "name": "punctuation.section.arguments.end.bracket.round.operator.alignas.cpp"
        }
      },
      "patterns": [{
        "include": "#evaluation_context"
      }]
    },
    "alignof_operator": {
      "begin": "((?<!\\w)alignof(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(\\()",
      "beginCaptures": {
        "1": {
          "name": "keyword.operator.functionlike.cpp keyword.operator.alignof.cpp"
        },
        "2": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "3": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "4": {
          "name": "comment.block.cpp"
        },
        "5": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "6": {
          "name": "punctuation.section.arguments.begin.bracket.round.operator.alignof.cpp"
        }
      },
      "contentName": "meta.arguments.operator.alignof",
      "end": "\\)",
      "endCaptures": {
        "0": {
          "name": "punctuation.section.arguments.end.bracket.round.operator.alignof.cpp"
        }
      },
      "patterns": [{
        "include": "#evaluation_context"
      }]
    },
    "assembly": {
      "begin": "(\\b(?:__asm__|asm)\\b)(?:\\s+)?((?:volatile)?)",
      "beginCaptures": {
        "1": {
          "name": "storage.type.asm.cpp"
        },
        "2": {
          "name": "storage.modifier.cpp"
        }
      },
      "end": "(?!\\G)",
      "endCaptures": {},
      "name": "meta.asm.cpp",
      "patterns": [{
        "captures": {
          "1": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "2": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "3": {
            "name": "comment.block.cpp"
          },
          "4": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          }
        },
        "match": "^((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:\\n|$)"
      }, {
        "include": "#comments"
      }, {
        "begin": "((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))\\(",
        "beginCaptures": {
          "0": {
            "name": "punctuation.section.parens.begin.bracket.round.assembly.cpp"
          },
          "1": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "2": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "3": {
            "name": "comment.block.cpp"
          },
          "4": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          }
        },
        "end": "\\)",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.parens.end.bracket.round.assembly.cpp"
          }
        },
        "patterns": [{
          "begin": '(R?)(")',
          "beginCaptures": {
            "1": {
              "name": "meta.encoding.cpp"
            },
            "2": {
              "name": "punctuation.definition.string.begin.assembly.cpp"
            }
          },
          "contentName": "meta.embedded.assembly",
          "end": '"',
          "endCaptures": {
            "0": {
              "name": "punctuation.definition.string.end.assembly.cpp"
            }
          },
          "name": "string.quoted.double.cpp",
          "patterns": [{
            "include": "source.asm"
          }, {
            "include": "source.x86"
          }, {
            "include": "source.x86_64"
          }, {
            "include": "source.arm"
          }, {
            "include": "#backslash_escapes"
          }, {
            "include": "#string_escaped_char"
          }]
        }, {
          "begin": "\\(",
          "beginCaptures": {
            "0": {
              "name": "punctuation.section.parens.begin.bracket.round.assembly.inner.cpp"
            }
          },
          "end": "\\)",
          "endCaptures": {
            "0": {
              "name": "punctuation.section.parens.end.bracket.round.assembly.inner.cpp"
            }
          },
          "patterns": [{
            "include": "#evaluation_context"
          }]
        }, {
          "captures": {
            "1": {
              "patterns": [{
                "include": "#inline_comment"
              }]
            },
            "2": {
              "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
            },
            "3": {
              "name": "comment.block.cpp"
            },
            "4": {
              "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
            },
            "5": {
              "name": "variable.other.asm.label.cpp"
            },
            "6": {
              "patterns": [{
                "include": "#inline_comment"
              }]
            },
            "7": {
              "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
            },
            "8": {
              "name": "comment.block.cpp"
            },
            "9": {
              "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
            }
          },
          "match": "\\[((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))\\]"
        }, {
          "match": ":",
          "name": "punctuation.separator.delimiter.colon.assembly.cpp"
        }, {
          "include": "#comments"
        }]
      }]
    },
    "assignment_operator": {
      "match": "\\=",
      "name": "keyword.operator.assignment.cpp"
    },
    "attributes_context": {
      "patterns": [{
        "include": "#cpp_attributes"
      }, {
        "include": "#gcc_attributes"
      }, {
        "include": "#ms_attributes"
      }, {
        "include": "#alignas_attribute"
      }]
    },
    "backslash_escapes": {
      "match": `(?x)\\\\ (
\\\\			 |
[abefnprtv'"?]   |
[0-3][0-7]{,2}	 |
[4-7]\\d?		|
x[a-fA-F0-9]{,2} |
u[a-fA-F0-9]{,4} |
U[a-fA-F0-9]{,8} )`,
      "name": "constant.character.escape"
    },
    "block": {
      "begin": "{",
      "beginCaptures": {
        "0": {
          "name": "punctuation.section.block.begin.bracket.curly.cpp"
        }
      },
      "end": "}",
      "endCaptures": {
        "0": {
          "name": "punctuation.section.block.end.bracket.curly.cpp"
        }
      },
      "name": "meta.block.cpp",
      "patterns": [{
        "include": "#function_body_context"
      }]
    },
    "block_comment": {
      "begin": "\\s*+(\\/\\*)",
      "beginCaptures": {
        "1": {
          "name": "punctuation.definition.comment.begin.cpp"
        }
      },
      "end": "\\*\\/",
      "endCaptures": {
        "0": {
          "name": "punctuation.definition.comment.end.cpp"
        }
      },
      "name": "comment.block.cpp"
    },
    "builtin_storage_type_initilizer": {
      "begin": "\\s*+(?<!\\w)(?:(?:(?:((?:(?:unsigned)|(?:wchar_t)|(?:double)|(?:signed)|(?:short)|(?:float)|(?:auto)|(?:void)|(?:long)|(?:char)|(?:bool)|(?:int)))|((?:(?:uint_least32_t)|(?:uint_least64_t)|(?:uint_least16_t)|(?:uint_fast64_t)|(?:uint_least8_t)|(?:int_least64_t)|(?:int_least32_t)|(?:int_least16_t)|(?:uint_fast16_t)|(?:uint_fast32_t)|(?:int_least8_t)|(?:int_fast16_t)|(?:int_fast32_t)|(?:int_fast64_t)|(?:uint_fast8_t)|(?:int_fast8_t)|(?:suseconds_t)|(?:useconds_t)|(?:uintmax_t)|(?:uintmax_t)|(?:in_port_t)|(?:uintmax_t)|(?:in_addr_t)|(?:blksize_t)|(?:uintptr_t)|(?:intmax_t)|(?:intptr_t)|(?:blkcnt_t)|(?:intmax_t)|(?:u_quad_t)|(?:uint16_t)|(?:uint32_t)|(?:uint64_t)|(?:ssize_t)|(?:fixpt_t)|(?:qaddr_t)|(?:u_short)|(?:int16_t)|(?:int32_t)|(?:int64_t)|(?:uint8_t)|(?:daddr_t)|(?:caddr_t)|(?:swblk_t)|(?:clock_t)|(?:segsz_t)|(?:nlink_t)|(?:time_t)|(?:u_long)|(?:ushort)|(?:quad_t)|(?:mode_t)|(?:size_t)|(?:u_char)|(?:int8_t)|(?:u_int)|(?:uid_t)|(?:off_t)|(?:pid_t)|(?:gid_t)|(?:dev_t)|(?:div_t)|(?:key_t)|(?:ino_t)|(?:id_t)|(?:id_t)|(?:uint))))|((?:(?:pthread_rwlockattr_t)|(?:pthread_mutexattr_t)|(?:pthread_condattr_t)|(?:pthread_rwlock_t)|(?:pthread_mutex_t)|(?:pthread_cond_t)|(?:pthread_attr_t)|(?:pthread_once_t)|(?:pthread_key_t)|(?:pthread_t))))|([a-zA-Z_]\\w*_t))(?!\\w)\\s*+(?<!\\w)(\\()",
      "beginCaptures": {
        "1": {
          "name": "storage.type.primitive.cpp storage.type.built-in.primitive.cpp"
        },
        "2": {
          "name": "storage.type.cpp storage.type.built-in.cpp"
        },
        "3": {
          "name": "support.type.posix-reserved.pthread.cpp support.type.built-in.posix-reserved.pthread.cpp"
        },
        "4": {
          "name": "support.type.posix-reserved.cpp support.type.built-in.posix-reserved.cpp"
        },
        "5": {
          "name": "punctuation.section.arguments.begin.bracket.round.initializer.cpp"
        }
      },
      "end": "\\)",
      "endCaptures": {
        "0": {
          "name": "punctuation.section.arguments.end.bracket.round.initializer.cpp"
        }
      },
      "patterns": [{
        "include": "#evaluation_context"
      }]
    },
    "case_statement": {
      "begin": "((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?<!\\w)case(?!\\w))",
      "beginCaptures": {
        "1": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "2": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "3": {
          "name": "comment.block.cpp"
        },
        "4": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "5": {
          "name": "keyword.control.case.cpp"
        }
      },
      "end": ":",
      "endCaptures": {
        "0": {
          "name": "punctuation.separator.colon.case.cpp"
        }
      },
      "name": "meta.conditional.case.cpp",
      "patterns": [{
        "include": "#evaluation_context"
      }]
    },
    "class_block": {
      "begin": "((?<!\\w)class(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:(?={)|(?:((?:(?:(?:\\[\\[.*?\\]\\]|__attribute(?:__)?\\s*\\(\\s*\\(.*?\\)\\s*\\))|__declspec\\(.*?\\))|alignas\\(.*?\\))(?!\\)))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))?((?:(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*+)?(?:((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(:(?!:)))?)",
      "beginCaptures": {
        "0": {
          "name": "meta.head.class.cpp"
        },
        "1": {
          "name": "storage.type.$1.cpp"
        },
        "2": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "3": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "4": {
          "name": "comment.block.cpp"
        },
        "5": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "6": {
          "patterns": [{
            "include": "#attributes_context"
          }, {
            "include": "#number_literal"
          }]
        },
        "7": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "8": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "9": {
          "name": "comment.block.cpp"
        },
        "10": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "11": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "storage.type.modifier.final.cpp"
              },
              "2": {
                "patterns": [{
                  "include": "#inline_comment"
                }]
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "4": {
                "name": "comment.block.cpp"
              },
              "5": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "((?<!\\w)final(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))"
          }, {
            "captures": {
              "1": {
                "name": "entity.name.type.class.cpp"
              },
              "2": {
                "patterns": [{
                  "include": "#inline_comment"
                }]
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "4": {
                "name": "comment.block.cpp"
              },
              "5": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              },
              "6": {
                "name": "storage.type.modifier.final.cpp"
              },
              "7": {
                "patterns": [{
                  "include": "#inline_comment"
                }]
              },
              "8": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "9": {
                "name": "comment.block.cpp"
              },
              "10": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:((?<!\\w)final(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))?(?=:|{|$)"
          }, {
            "match": "DLLEXPORT",
            "name": "entity.name.other.preprocessor.macro.predefined.DLLEXPORT.cpp"
          }, {
            "match": "(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*",
            "name": "entity.name.other.preprocessor.macro.predefined.probably.$0.cpp"
          }]
        },
        "12": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "13": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "14": {
          "name": "comment.block.cpp"
        },
        "15": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "16": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "17": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "18": {
          "name": "comment.block.cpp"
        },
        "19": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "20": {
          "name": "punctuation.separator.colon.inheritance.cpp"
        }
      },
      "end": "(?:(?:(?<=\\}|%>|\\?\\?>)(?:\\s+)?(;)|(;))|(?=[;>\\[\\]=]))",
      "endCaptures": {
        "1": {
          "name": "punctuation.terminator.statement.cpp"
        },
        "2": {
          "name": "punctuation.terminator.statement.cpp"
        }
      },
      "name": "meta.block.class.cpp",
      "patterns": [{
        "begin": "\\G ?",
        "beginCaptures": {},
        "end": "(?:\\{|<%|\\?\\?<|(?=;))",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.block.begin.bracket.curly.class.cpp"
          }
        },
        "name": "meta.head.class.cpp",
        "patterns": [{
          "include": "#ever_present_context"
        }, {
          "include": "#inheritance_context"
        }, {
          "include": "#template_call_range"
        }]
      }, {
        "begin": "(?<=\\{|<%|\\?\\?<)",
        "beginCaptures": {},
        "end": "\\}|%>|\\?\\?>",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.block.end.bracket.curly.class.cpp"
          }
        },
        "name": "meta.body.class.cpp",
        "patterns": [{
          "include": "#function_pointer"
        }, {
          "include": "#static_assert"
        }, {
          "include": "#constructor_inline"
        }, {
          "include": "#destructor_inline"
        }, {
          "include": "$self"
        }]
      }, {
        "begin": "(?<=\\}|%>|\\?\\?>)[\\s]*",
        "beginCaptures": {},
        "end": "[\\s]*(?=;)",
        "endCaptures": {},
        "name": "meta.tail.class.cpp",
        "patterns": [{
          "include": "$self"
        }]
      }]
    },
    "class_declare": {
      "captures": {
        "1": {
          "name": "storage.type.class.declare.cpp"
        },
        "2": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "3": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "4": {
          "name": "entity.name.type.class.cpp"
        },
        "5": {
          "patterns": [{
            "match": "\\*",
            "name": "storage.modifier.pointer.cpp"
          }, {
            "captures": {
              "1": {
                "patterns": [{
                  "include": "#inline_comment"
                }]
              },
              "2": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "3": {
                "name": "comment.block.cpp"
              },
              "4": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "(?:\\&((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))){2,}\\&",
            "name": "invalid.illegal.reference-type.cpp"
          }, {
            "match": "\\&",
            "name": "storage.modifier.reference.cpp"
          }]
        },
        "6": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "7": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "8": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "9": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "10": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "11": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "12": {
          "name": "variable.other.object.declare.cpp"
        },
        "13": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "14": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        }
      },
      "match": "((?<!\\w)class(?!\\w))((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))(((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))?(?:(?:&|\\*)((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*(?:&|\\*))?((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))\\b(?!override\\W|override\\$|final\\W|final\\$)((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?=\\S)(?![:{a-zA-Z])"
    },
    "comma": {
      "match": ",",
      "name": "punctuation.separator.delimiter.comma.cpp"
    },
    "comma_in_template_argument": {
      "match": ",",
      "name": "punctuation.separator.delimiter.comma.template.argument.cpp"
    },
    "comments": {
      "patterns": [{
        "begin": "^(?:\\s+)?+(\\/\\/[!\\/]+)",
        "beginCaptures": {
          "1": {
            "name": "punctuation.definition.comment.documentation.cpp"
          }
        },
        "end": "(?<=\\n)(?<!\\\\\\n)",
        "endCaptures": {},
        "name": "comment.line.double-slash.documentation.cpp",
        "patterns": [{
          "include": "#line_continuation_character"
        }, {
          "match": '(?<=[\\s*!\\/])[\\\\@](?:callergraph|callgraph|else|endif|f\\$|f\\[|f\\]|hidecallergraph|hidecallgraph|hiderefby|hiderefs|hideinitializer|htmlinclude|n|nosubgrouping|private|privatesection|protected|protectedsection|public|publicsection|pure|showinitializer|showrefby|showrefs|tableofcontents|\\$|\\#|<|>|%|"|\\.|=|::|\\||\\-\\-|\\-\\-\\-)\\b(?:\\{[^}]*\\})?',
          "name": "storage.type.class.doxygen.cpp"
        }, {
          "captures": {
            "1": {
              "name": "storage.type.class.doxygen.cpp"
            },
            "2": {
              "name": "markup.italic.doxygen.cpp"
            }
          },
          "match": "((?<=[\\s*!\\/])[\\\\@](?:a|em|e))\\s+(\\S+)"
        }, {
          "captures": {
            "1": {
              "name": "storage.type.class.doxygen.cpp"
            },
            "2": {
              "name": "markup.bold.doxygen.cpp"
            }
          },
          "match": "((?<=[\\s*!\\/])[\\\\@]b)\\s+(\\S+)"
        }, {
          "captures": {
            "1": {
              "name": "storage.type.class.doxygen.cpp"
            },
            "2": {
              "name": "markup.inline.raw.string.cpp"
            }
          },
          "match": "((?<=[\\s*!\\/])[\\\\@](?:c|p))\\s+(\\S+)"
        }, {
          "match": "(?<=[\\s*!\\/])[\\\\@](?:a|anchor|b|c|cite|copybrief|copydetail|copydoc|def|dir|dontinclude|e|em|emoji|enum|example|extends|file|idlexcept|implements|include|includedoc|includelineno|latexinclude|link|memberof|namespace|p|package|ref|refitem|related|relates|relatedalso|relatesalso|verbinclude)\\b(?:\\{[^}]*\\})?",
          "name": "storage.type.class.doxygen.cpp"
        }, {
          "match": "(?<=[\\s*!\\/])[\\\\@](?:addindex|addtogroup|category|class|defgroup|diafile|dotfile|elseif|fn|headerfile|if|ifnot|image|ingroup|interface|line|mainpage|mscfile|name|overload|page|property|protocol|section|skip|skipline|snippet|snippetdoc|snippetlineno|struct|subpage|subsection|subsubsection|typedef|union|until|vhdlflow|weakgroup)\\b(?:\\{[^}]*\\})?",
          "name": "storage.type.class.doxygen.cpp"
        }, {
          "captures": {
            "1": {
              "name": "storage.type.class.doxygen.cpp"
            },
            "2": {
              "patterns": [{
                "match": "in|out",
                "name": "keyword.other.parameter.direction.$0.cpp"
              }]
            },
            "3": {
              "patterns": [{
                "match": "(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)",
                "name": "variable.parameter.cpp"
              }, {
                "match": ",",
                "name": "punctuation.cpp"
              }]
            },
            "4": {
              "name": "variable.parameter.cpp"
            },
            "5": {
              "name": "punctuation.cpp"
            },
            "6": {
              "name": "variable.parameter.cpp"
            }
          },
          "match": "((?<=[\\s*!\\/])[\\\\@]param)(?:\\s*\\[((?:,?(?:\\s+)?(?:in|out)(?:\\s+)?)+)\\])?(\\s+((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))(?:(,)(?:\\s+)?((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)))*)"
        }, {
          "match": "(?<=[\\s*!\\/])[\\\\@](?:arg|attention|author|authors|brief|bug|copyright|date|deprecated|details|exception|invariant|li|note|par|paragraph|param|post|pre|remark|remarks|result|return|returns|retval|sa|see|short|since|test|throw|throws|todo|tparam|version|warning|xrefitem)\\b(?:\\{[^}]*\\})?",
          "name": "storage.type.class.doxygen.cpp"
        }, {
          "match": "(?<=[\\s*!\\/])[\\\\@](?:code|cond|docbookonly|dot|htmlonly|internal|latexonly|link|manonly|msc|parblock|rtfonly|secreflist|startuml|verbatim|xmlonly|endcode|endcond|enddocbookonly|enddot|endhtmlonly|endinternal|endlatexonly|endlink|endmanonly|endmsc|endparblock|endrtfonly|endsecreflist|enduml|endverbatim|endxmlonly)\\b(?:\\{[^}]*\\})?",
          "name": "storage.type.class.doxygen.cpp"
        }, {
          "match": "(?:\\b[A-Z]+:|@[a-z_]+:)",
          "name": "storage.type.class.gtkdoc.cpp"
        }]
      }, {
        "captures": {
          "1": {
            "name": "punctuation.definition.comment.begin.documentation.cpp"
          },
          "2": {
            "patterns": [{
              "match": '(?<=[\\s*!\\/])[\\\\@](?:callergraph|callgraph|else|endif|f\\$|f\\[|f\\]|hidecallergraph|hidecallgraph|hiderefby|hiderefs|hideinitializer|htmlinclude|n|nosubgrouping|private|privatesection|protected|protectedsection|public|publicsection|pure|showinitializer|showrefby|showrefs|tableofcontents|\\$|\\#|<|>|%|"|\\.|=|::|\\||\\-\\-|\\-\\-\\-)\\b(?:\\{[^}]*\\})?',
              "name": "storage.type.class.doxygen.cpp"
            }, {
              "captures": {
                "1": {
                  "name": "storage.type.class.doxygen.cpp"
                },
                "2": {
                  "name": "markup.italic.doxygen.cpp"
                }
              },
              "match": "((?<=[\\s*!\\/])[\\\\@](?:a|em|e))\\s+(\\S+)"
            }, {
              "captures": {
                "1": {
                  "name": "storage.type.class.doxygen.cpp"
                },
                "2": {
                  "name": "markup.bold.doxygen.cpp"
                }
              },
              "match": "((?<=[\\s*!\\/])[\\\\@]b)\\s+(\\S+)"
            }, {
              "captures": {
                "1": {
                  "name": "storage.type.class.doxygen.cpp"
                },
                "2": {
                  "name": "markup.inline.raw.string.cpp"
                }
              },
              "match": "((?<=[\\s*!\\/])[\\\\@](?:c|p))\\s+(\\S+)"
            }, {
              "match": "(?<=[\\s*!\\/])[\\\\@](?:a|anchor|b|c|cite|copybrief|copydetail|copydoc|def|dir|dontinclude|e|em|emoji|enum|example|extends|file|idlexcept|implements|include|includedoc|includelineno|latexinclude|link|memberof|namespace|p|package|ref|refitem|related|relates|relatedalso|relatesalso|verbinclude)\\b(?:\\{[^}]*\\})?",
              "name": "storage.type.class.doxygen.cpp"
            }, {
              "match": "(?<=[\\s*!\\/])[\\\\@](?:addindex|addtogroup|category|class|defgroup|diafile|dotfile|elseif|fn|headerfile|if|ifnot|image|ingroup|interface|line|mainpage|mscfile|name|overload|page|property|protocol|section|skip|skipline|snippet|snippetdoc|snippetlineno|struct|subpage|subsection|subsubsection|typedef|union|until|vhdlflow|weakgroup)\\b(?:\\{[^}]*\\})?",
              "name": "storage.type.class.doxygen.cpp"
            }, {
              "captures": {
                "1": {
                  "name": "storage.type.class.doxygen.cpp"
                },
                "2": {
                  "patterns": [{
                    "match": "in|out",
                    "name": "keyword.other.parameter.direction.$0.cpp"
                  }]
                },
                "3": {
                  "patterns": [{
                    "match": "(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)",
                    "name": "variable.parameter.cpp"
                  }, {
                    "match": ",",
                    "name": "punctuation.cpp"
                  }]
                },
                "4": {
                  "name": "variable.parameter.cpp"
                },
                "5": {
                  "name": "punctuation.cpp"
                },
                "6": {
                  "name": "variable.parameter.cpp"
                }
              },
              "match": "((?<=[\\s*!\\/])[\\\\@]param)(?:\\s*\\[((?:,?(?:\\s+)?(?:in|out)(?:\\s+)?)+)\\])?(\\s+((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))(?:(,)(?:\\s+)?((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)))*)"
            }, {
              "match": "(?<=[\\s*!\\/])[\\\\@](?:arg|attention|author|authors|brief|bug|copyright|date|deprecated|details|exception|invariant|li|note|par|paragraph|param|post|pre|remark|remarks|result|return|returns|retval|sa|see|short|since|test|throw|throws|todo|tparam|version|warning|xrefitem)\\b(?:\\{[^}]*\\})?",
              "name": "storage.type.class.doxygen.cpp"
            }, {
              "match": "(?<=[\\s*!\\/])[\\\\@](?:code|cond|docbookonly|dot|htmlonly|internal|latexonly|link|manonly|msc|parblock|rtfonly|secreflist|startuml|verbatim|xmlonly|endcode|endcond|enddocbookonly|enddot|endhtmlonly|endinternal|endlatexonly|endlink|endmanonly|endmsc|endparblock|endrtfonly|endsecreflist|enduml|endverbatim|endxmlonly)\\b(?:\\{[^}]*\\})?",
              "name": "storage.type.class.doxygen.cpp"
            }, {
              "match": "(?:\\b[A-Z]+:|@[a-z_]+:)",
              "name": "storage.type.class.gtkdoc.cpp"
            }]
          },
          "3": {
            "name": "punctuation.definition.comment.end.documentation.cpp"
          }
        },
        "match": "(\\/\\*[!*]+(?=\\s))(.+)([!*]*\\*\\/)",
        "name": "comment.block.documentation.cpp"
      }, {
        "begin": "(?:\\s+)?+\\/\\*[!*]+(?:(?:\\n|$)|(?=\\s))",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.comment.begin.documentation.cpp"
          }
        },
        "end": "[!*]*\\*\\/",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.comment.end.documentation.cpp"
          }
        },
        "name": "comment.block.documentation.cpp",
        "patterns": [{
          "match": '(?<=[\\s*!\\/])[\\\\@](?:callergraph|callgraph|else|endif|f\\$|f\\[|f\\]|hidecallergraph|hidecallgraph|hiderefby|hiderefs|hideinitializer|htmlinclude|n|nosubgrouping|private|privatesection|protected|protectedsection|public|publicsection|pure|showinitializer|showrefby|showrefs|tableofcontents|\\$|\\#|<|>|%|"|\\.|=|::|\\||\\-\\-|\\-\\-\\-)\\b(?:\\{[^}]*\\})?',
          "name": "storage.type.class.doxygen.cpp"
        }, {
          "captures": {
            "1": {
              "name": "storage.type.class.doxygen.cpp"
            },
            "2": {
              "name": "markup.italic.doxygen.cpp"
            }
          },
          "match": "((?<=[\\s*!\\/])[\\\\@](?:a|em|e))\\s+(\\S+)"
        }, {
          "captures": {
            "1": {
              "name": "storage.type.class.doxygen.cpp"
            },
            "2": {
              "name": "markup.bold.doxygen.cpp"
            }
          },
          "match": "((?<=[\\s*!\\/])[\\\\@]b)\\s+(\\S+)"
        }, {
          "captures": {
            "1": {
              "name": "storage.type.class.doxygen.cpp"
            },
            "2": {
              "name": "markup.inline.raw.string.cpp"
            }
          },
          "match": "((?<=[\\s*!\\/])[\\\\@](?:c|p))\\s+(\\S+)"
        }, {
          "match": "(?<=[\\s*!\\/])[\\\\@](?:a|anchor|b|c|cite|copybrief|copydetail|copydoc|def|dir|dontinclude|e|em|emoji|enum|example|extends|file|idlexcept|implements|include|includedoc|includelineno|latexinclude|link|memberof|namespace|p|package|ref|refitem|related|relates|relatedalso|relatesalso|verbinclude)\\b(?:\\{[^}]*\\})?",
          "name": "storage.type.class.doxygen.cpp"
        }, {
          "match": "(?<=[\\s*!\\/])[\\\\@](?:addindex|addtogroup|category|class|defgroup|diafile|dotfile|elseif|fn|headerfile|if|ifnot|image|ingroup|interface|line|mainpage|mscfile|name|overload|page|property|protocol|section|skip|skipline|snippet|snippetdoc|snippetlineno|struct|subpage|subsection|subsubsection|typedef|union|until|vhdlflow|weakgroup)\\b(?:\\{[^}]*\\})?",
          "name": "storage.type.class.doxygen.cpp"
        }, {
          "captures": {
            "1": {
              "name": "storage.type.class.doxygen.cpp"
            },
            "2": {
              "patterns": [{
                "match": "in|out",
                "name": "keyword.other.parameter.direction.$0.cpp"
              }]
            },
            "3": {
              "patterns": [{
                "match": "(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)",
                "name": "variable.parameter.cpp"
              }, {
                "match": ",",
                "name": "punctuation.cpp"
              }]
            },
            "4": {
              "name": "variable.parameter.cpp"
            },
            "5": {
              "name": "punctuation.cpp"
            },
            "6": {
              "name": "variable.parameter.cpp"
            }
          },
          "match": "((?<=[\\s*!\\/])[\\\\@]param)(?:\\s*\\[((?:,?(?:\\s+)?(?:in|out)(?:\\s+)?)+)\\])?(\\s+((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))(?:(,)(?:\\s+)?((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)))*)"
        }, {
          "match": "(?<=[\\s*!\\/])[\\\\@](?:arg|attention|author|authors|brief|bug|copyright|date|deprecated|details|exception|invariant|li|note|par|paragraph|param|post|pre|remark|remarks|result|return|returns|retval|sa|see|short|since|test|throw|throws|todo|tparam|version|warning|xrefitem)\\b(?:\\{[^}]*\\})?",
          "name": "storage.type.class.doxygen.cpp"
        }, {
          "match": "(?<=[\\s*!\\/])[\\\\@](?:code|cond|docbookonly|dot|htmlonly|internal|latexonly|link|manonly|msc|parblock|rtfonly|secreflist|startuml|verbatim|xmlonly|endcode|endcond|enddocbookonly|enddot|endhtmlonly|endinternal|endlatexonly|endlink|endmanonly|endmsc|endparblock|endrtfonly|endsecreflist|enduml|endverbatim|endxmlonly)\\b(?:\\{[^}]*\\})?",
          "name": "storage.type.class.doxygen.cpp"
        }, {
          "match": "(?:\\b[A-Z]+:|@[a-z_]+:)",
          "name": "storage.type.class.gtkdoc.cpp"
        }]
      }, {
        "include": "#emacs_file_banner"
      }, {
        "include": "#block_comment"
      }, {
        "include": "#line_comment"
      }, {
        "include": "#invalid_comment_end"
      }]
    },
    "constructor_inline": {
      "begin": "^((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?:(?:(?:constexpr)|(?:consteval)|(?:explicit)|(?:mutable)|(?:virtual)|(?:inline)|(?:friend))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*)((?:__cdecl|__clrcall|__stdcall|__fastcall|__thiscall|__vectorcall)?)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)(?=\\())",
      "beginCaptures": {
        "0": {
          "name": "meta.head.function.definition.special.constructor.cpp"
        },
        "1": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "2": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "3": {
          "name": "comment.block.cpp"
        },
        "4": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "5": {
          "patterns": [{
            "include": "#functional_specifiers_pre_parameters"
          }]
        },
        "6": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "7": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "8": {
          "name": "comment.block.cpp"
        },
        "9": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "10": {
          "name": "storage.type.modifier.calling-convention.cpp"
        },
        "11": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "12": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "13": {
          "name": "comment.block.cpp"
        },
        "14": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "15": {
          "name": "entity.name.function.constructor.cpp entity.name.function.definition.special.constructor.cpp"
        }
      },
      "end": "(?:(?<=\\}|%>|\\?\\?>)|(?=[;>\\[\\]=]))",
      "endCaptures": {},
      "name": "meta.function.definition.special.constructor.cpp",
      "patterns": [{
        "begin": "\\G ?",
        "beginCaptures": {},
        "end": "(?:\\{|<%|\\?\\?<|(?=;))",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.block.begin.bracket.curly.function.definition.special.constructor.cpp"
          }
        },
        "name": "meta.head.function.definition.special.constructor.cpp",
        "patterns": [{
          "include": "#ever_present_context"
        }, {
          "captures": {
            "1": {
              "name": "keyword.operator.assignment.cpp"
            },
            "2": {
              "patterns": [{
                "include": "#inline_comment"
              }]
            },
            "3": {
              "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
            },
            "4": {
              "name": "comment.block.cpp"
            },
            "5": {
              "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
            },
            "6": {
              "name": "keyword.other.default.function.cpp keyword.other.default.constructor.cpp"
            },
            "7": {
              "name": "keyword.other.delete.function.cpp keyword.other.delete.constructor.cpp"
            }
          },
          "match": "(\\=)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:(default)|(delete))"
        }, {
          "include": "#functional_specifiers_pre_parameters"
        }, {
          "begin": ":",
          "beginCaptures": {
            "0": {
              "name": "punctuation.separator.initializers.cpp"
            }
          },
          "end": "(?=\\{)",
          "endCaptures": {},
          "patterns": [{
            "begin": `((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))(((?<!<)<(?!<)(?:(?:(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/)))|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<3>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)\\s*+)?(\\()`,
            "beginCaptures": {
              "1": {
                "name": "entity.name.function.call.initializer.cpp"
              },
              "2": {
                "name": "meta.template.call.cpp",
                "patterns": [{
                  "include": "#template_call_range"
                }]
              },
              "3": {},
              "4": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "5": {
                "name": "comment.block.cpp"
              },
              "6": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              },
              "7": {
                "name": "punctuation.section.arguments.begin.bracket.round.function.call.initializer.cpp"
              }
            },
            "contentName": "meta.parameter.initialization",
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.arguments.end.bracket.round.function.call.initializer.cpp"
              }
            },
            "patterns": [{
              "include": "#evaluation_context"
            }]
          }, {
            "begin": "((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))(\\{)",
            "beginCaptures": {
              "1": {
                "name": "entity.name.function.call.initializer.cpp"
              },
              "2": {
                "name": "punctuation.section.arguments.begin.bracket.round.function.call.initializer.cpp"
              }
            },
            "contentName": "meta.parameter.initialization",
            "end": "\\}",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.arguments.end.bracket.round.function.call.initializer.cpp"
              }
            },
            "patterns": [{
              "include": "#evaluation_context"
            }]
          }, {
            "match": ",",
            "name": "punctuation.separator.delimiter.comma.cpp"
          }, {
            "include": "#comments"
          }]
        }, {
          "begin": "\\(",
          "beginCaptures": {
            "0": {
              "name": "punctuation.section.parameters.begin.bracket.round.special.constructor.cpp"
            }
          },
          "contentName": "meta.function.definition.parameters.special.constructor",
          "end": "\\)",
          "endCaptures": {
            "0": {
              "name": "punctuation.section.parameters.end.bracket.round.special.constructor.cpp"
            }
          },
          "patterns": [{
            "include": "#function_parameter_context"
          }, {
            "include": "#evaluation_context"
          }]
        }, {
          "include": "#qualifiers_and_specifiers_post_parameters"
        }, {
          "include": "$self"
        }]
      }, {
        "begin": "(?<=\\{|<%|\\?\\?<)",
        "beginCaptures": {},
        "end": "\\}|%>|\\?\\?>",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.block.end.bracket.curly.function.definition.special.constructor.cpp"
          }
        },
        "name": "meta.body.function.definition.special.constructor.cpp",
        "patterns": [{
          "include": "#function_body_context"
        }]
      }, {
        "begin": "(?<=\\}|%>|\\?\\?>)[\\s]*",
        "beginCaptures": {},
        "end": "[\\s]*(?=;)",
        "endCaptures": {},
        "name": "meta.tail.function.definition.special.constructor.cpp",
        "patterns": [{
          "include": "$self"
        }]
      }]
    },
    "constructor_root": {
      "begin": `\\s*+((?:__cdecl|__clrcall|__stdcall|__fastcall|__thiscall|__vectorcall)?)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?:::)?(?:(?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)\\s*+(((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<8>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)\\s*+)?::)*+)(((?>(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))::((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:\\10)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?=\\())`,
      "beginCaptures": {
        "0": {
          "name": "meta.head.function.definition.special.constructor.cpp"
        },
        "1": {
          "name": "storage.type.modifier.calling-convention.cpp"
        },
        "2": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "3": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "4": {
          "name": "comment.block.cpp"
        },
        "5": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "6": {
          "patterns": [{
            "match": "::",
            "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.constructor.cpp"
          }, {
            "match": "(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)",
            "name": "entity.name.scope-resolution.constructor.cpp"
          }, {
            "include": "#template_call_range"
          }]
        },
        "7": {
          "patterns": [{
            "include": "#template_call_range"
          }]
        },
        "8": {},
        "9": {
          "patterns": [{
            "match": "(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?=:)",
            "name": "entity.name.type.constructor.cpp"
          }, {
            "match": "(?<=:)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*",
            "name": "entity.name.function.definition.special.constructor.cpp"
          }, {
            "match": "::",
            "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.constructor.cpp"
          }]
        },
        "10": {},
        "11": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "12": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "13": {
          "name": "comment.block.cpp"
        },
        "14": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "15": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "16": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "17": {
          "name": "comment.block.cpp"
        },
        "18": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "19": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "20": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "21": {
          "name": "comment.block.cpp"
        },
        "22": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        }
      },
      "end": "(?:(?<=\\}|%>|\\?\\?>)|(?=[;>\\[\\]=]))",
      "endCaptures": {},
      "name": "meta.function.definition.special.constructor.cpp",
      "patterns": [{
        "begin": "\\G ?",
        "beginCaptures": {},
        "end": "(?:\\{|<%|\\?\\?<|(?=;))",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.block.begin.bracket.curly.function.definition.special.constructor.cpp"
          }
        },
        "name": "meta.head.function.definition.special.constructor.cpp",
        "patterns": [{
          "include": "#ever_present_context"
        }, {
          "captures": {
            "1": {
              "name": "keyword.operator.assignment.cpp"
            },
            "2": {
              "patterns": [{
                "include": "#inline_comment"
              }]
            },
            "3": {
              "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
            },
            "4": {
              "name": "comment.block.cpp"
            },
            "5": {
              "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
            },
            "6": {
              "name": "keyword.other.default.function.cpp keyword.other.default.constructor.cpp"
            },
            "7": {
              "name": "keyword.other.delete.function.cpp keyword.other.delete.constructor.cpp"
            }
          },
          "match": "(\\=)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:(default)|(delete))"
        }, {
          "include": "#functional_specifiers_pre_parameters"
        }, {
          "begin": ":",
          "beginCaptures": {
            "0": {
              "name": "punctuation.separator.initializers.cpp"
            }
          },
          "end": "(?=\\{)",
          "endCaptures": {},
          "patterns": [{
            "begin": `((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))(((?<!<)<(?!<)(?:(?:(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/)))|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<3>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)\\s*+)?(\\()`,
            "beginCaptures": {
              "1": {
                "name": "entity.name.function.call.initializer.cpp"
              },
              "2": {
                "name": "meta.template.call.cpp",
                "patterns": [{
                  "include": "#template_call_range"
                }]
              },
              "3": {},
              "4": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "5": {
                "name": "comment.block.cpp"
              },
              "6": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              },
              "7": {
                "name": "punctuation.section.arguments.begin.bracket.round.function.call.initializer.cpp"
              }
            },
            "contentName": "meta.parameter.initialization",
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.arguments.end.bracket.round.function.call.initializer.cpp"
              }
            },
            "patterns": [{
              "include": "#evaluation_context"
            }]
          }, {
            "begin": "((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))(\\{)",
            "beginCaptures": {
              "1": {
                "name": "entity.name.function.call.initializer.cpp"
              },
              "2": {
                "name": "punctuation.section.arguments.begin.bracket.round.function.call.initializer.cpp"
              }
            },
            "contentName": "meta.parameter.initialization",
            "end": "\\}",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.arguments.end.bracket.round.function.call.initializer.cpp"
              }
            },
            "patterns": [{
              "include": "#evaluation_context"
            }]
          }, {
            "match": ",",
            "name": "punctuation.separator.delimiter.comma.cpp"
          }, {
            "include": "#comments"
          }]
        }, {
          "begin": "\\(",
          "beginCaptures": {
            "0": {
              "name": "punctuation.section.parameters.begin.bracket.round.special.constructor.cpp"
            }
          },
          "contentName": "meta.function.definition.parameters.special.constructor",
          "end": "\\)",
          "endCaptures": {
            "0": {
              "name": "punctuation.section.parameters.end.bracket.round.special.constructor.cpp"
            }
          },
          "patterns": [{
            "include": "#function_parameter_context"
          }, {
            "include": "#evaluation_context"
          }]
        }, {
          "include": "#qualifiers_and_specifiers_post_parameters"
        }, {
          "include": "$self"
        }]
      }, {
        "begin": "(?<=\\{|<%|\\?\\?<)",
        "beginCaptures": {},
        "end": "\\}|%>|\\?\\?>",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.block.end.bracket.curly.function.definition.special.constructor.cpp"
          }
        },
        "name": "meta.body.function.definition.special.constructor.cpp",
        "patterns": [{
          "include": "#function_body_context"
        }]
      }, {
        "begin": "(?<=\\}|%>|\\?\\?>)[\\s]*",
        "beginCaptures": {},
        "end": "[\\s]*(?=;)",
        "endCaptures": {},
        "name": "meta.tail.function.definition.special.constructor.cpp",
        "patterns": [{
          "include": "$self"
        }]
      }]
    },
    "control_flow_keywords": {
      "captures": {
        "1": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "2": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "3": {
          "name": "keyword.control.$3.cpp"
        }
      },
      "match": "((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?<!\\w)(?:(?:co_return)|(?:co_yield)|(?:co_await)|(?:continue)|(?:default)|(?:switch)|(?:return)|(?:catch)|(?:while)|(?:throw)|(?:break)|(?:case)|(?:goto)|(?:else)|(?:for)|(?:try)|(?:if)|(?:do))(?!\\w))"
    },
    "cpp_attributes": {
      "begin": "\\[\\[",
      "beginCaptures": {
        "0": {
          "name": "punctuation.section.attribute.begin.cpp"
        }
      },
      "end": "\\]\\]",
      "endCaptures": {
        "0": {
          "name": "punctuation.section.attribute.end.cpp"
        }
      },
      "name": "support.other.attribute.cpp",
      "patterns": [{
        "include": "#attributes_context"
      }, {
        "begin": "\\(",
        "beginCaptures": {},
        "end": "\\)",
        "endCaptures": {},
        "patterns": [{
          "include": "#attributes_context"
        }, {
          "include": "#string_context"
        }, {
          "include": "#ever_present_context"
        }]
      }, {
        "captures": {
          "1": {
            "name": "keyword.other.using.directive.cpp"
          },
          "2": {
            "name": "entity.name.namespace.cpp"
          }
        },
        "match": "(using)\\s+((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))"
      }, {
        "match": ",",
        "name": "punctuation.separator.attribute.cpp"
      }, {
        "match": ":",
        "name": "punctuation.accessor.attribute.cpp"
      }, {
        "match": "(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)(?=::)",
        "name": "entity.name.namespace.cpp"
      }, {
        "match": "(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)",
        "name": "entity.other.attribute.$0.cpp"
      }, {
        "include": "#number_literal"
      }, {
        "include": "#ever_present_context"
      }]
    },
    "curly_initializer": {
      "begin": `(\\s*+((?:(?:(?:\\[\\[.*?\\]\\]|__attribute(?:__)?\\s*\\(\\s*\\(.*?\\)\\s*\\))|__declspec\\(.*?\\))|alignas\\(.*?\\))(?!\\)))?((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:(?:(?:(?:unsigned)|(?:signed)|(?:short)|(?:long))|(?:(?:struct)|(?:class)|(?:union)|(?:enum)))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*(?:((?:::)?(?:(?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)\\s*+(((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<18>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)\\s*+)?::)*+)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))?(?!(?:(?:transaction_safe_dynamic)|(?:__has_cpp_attribute)|(?:reinterpret_cast)|(?:transaction_safe)|(?:atomic_noexcept)|(?:atomic_commit)|(?:__has_include)|(?:atomic_cancel)|(?:synchronized)|(?:thread_local)|(?:dynamic_cast)|(?:static_cast)|(?:const_cast)|(?:constexpr)|(?:co_return)|(?:constinit)|(?:namespace)|(?:protected)|(?:consteval)|(?:constexpr)|(?:constexpr)|(?:co_return)|(?:consteval)|(?:co_await)|(?:continue)|(?:template)|(?:reflexpr)|(?:volatile)|(?:register)|(?:co_await)|(?:co_yield)|(?:restrict)|(?:noexcept)|(?:volatile)|(?:override)|(?:explicit)|(?:decltype)|(?:operator)|(?:noexcept)|(?:noexcept)|(?:typename)|(?:requires)|(?:co_yield)|(?:nullptr)|(?:alignof)|(?:alignas)|(?:default)|(?:mutable)|(?:virtual)|(?:mutable)|(?:private)|(?:include)|(?:warning)|(?:_Pragma)|(?:defined)|(?:typedef)|(?:__asm__)|(?:concept)|(?:define)|(?:module)|(?:sizeof)|(?:switch)|(?:delete)|(?:pragma)|(?:and_eq)|(?:inline)|(?:xor_eq)|(?:typeid)|(?:import)|(?:extern)|(?:public)|(?:bitand)|(?:static)|(?:export)|(?:return)|(?:friend)|(?:ifndef)|(?:not_eq)|(?:false)|(?:final)|(?:break)|(?:const)|(?:catch)|(?:endif)|(?:ifdef)|(?:undef)|(?:error)|(?:audit)|(?:while)|(?:using)|(?:axiom)|(?:or_eq)|(?:compl)|(?:throw)|(?:bitor)|(?:const)|(?:line)|(?:case)|(?:else)|(?:this)|(?:true)|(?:goto)|(?:else)|(?:NULL)|(?:elif)|(?:new)|(?:asm)|(?:xor)|(?:and)|(?:try)|(?:not)|(?:for)|(?:do)|(?:if)|(?:or)|(?:if))\\b)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*\\b((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<18>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)?(?![\\w<:.]))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(\\{)`,
      "beginCaptures": {
        "1": {
          "name": "meta.qualified_type.cpp",
          "patterns": [{
            "match": "::",
            "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.cpp"
          }, {
            "match": "(?<!\\w)(?:(?:struct)|(?:class)|(?:union)|(?:enum))(?!\\w)",
            "name": "storage.type.$0.cpp"
          }, {
            "include": "#attributes_context"
          }, {
            "include": "#storage_types"
          }, {
            "include": "#number_literal"
          }, {
            "include": "#string_context"
          }, {
            "include": "#comma"
          }, {
            "include": "#scope_resolution_inner_generated"
          }, {
            "begin": "<",
            "beginCaptures": {
              "0": {
                "name": "punctuation.section.angle-brackets.begin.template.call.cpp"
              }
            },
            "end": ">",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.angle-brackets.end.template.call.cpp"
              }
            },
            "name": "meta.template.call.cpp",
            "patterns": [{
              "include": "#template_call_context"
            }]
          }, {
            "match": "(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*",
            "name": "entity.name.type.cpp"
          }]
        },
        "2": {
          "patterns": [{
            "include": "#attributes_context"
          }, {
            "include": "#number_literal"
          }]
        },
        "3": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "4": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "5": {
          "name": "comment.block.cpp"
        },
        "6": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "7": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "8": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "9": {
          "name": "comment.block.cpp"
        },
        "10": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "11": {
          "patterns": [{
            "match": "::",
            "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.type.cpp"
          }, {
            "match": "(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)",
            "name": "entity.name.scope-resolution.type.cpp"
          }, {
            "include": "#template_call_range"
          }]
        },
        "12": {
          "patterns": [{
            "include": "#template_call_range"
          }]
        },
        "13": {},
        "14": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "15": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "16": {
          "name": "comment.block.cpp"
        },
        "17": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "18": {},
        "19": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "20": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "21": {
          "name": "comment.block.cpp"
        },
        "22": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "23": {
          "name": "punctuation.section.arguments.begin.bracket.curly.initializer.cpp"
        }
      },
      "end": "\\}",
      "endCaptures": {
        "0": {
          "name": "punctuation.section.arguments.end.bracket.curly.initializer.cpp"
        }
      },
      "name": "meta.initialization.cpp",
      "patterns": [{
        "include": "#evaluation_context"
      }, {
        "include": "#comma"
      }]
    },
    "d9bc4796b0b_module_import": {
      "captures": {
        "1": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "2": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "3": {
          "name": "keyword.control.directive.import.cpp"
        },
        "5": {
          "name": "string.quoted.other.lt-gt.include.cpp"
        },
        "6": {
          "name": "punctuation.definition.string.begin.cpp"
        },
        "7": {
          "name": "punctuation.definition.string.end.cpp"
        },
        "8": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "9": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "10": {
          "name": "string.quoted.double.include.cpp"
        },
        "11": {
          "name": "punctuation.definition.string.begin.cpp"
        },
        "12": {
          "name": "punctuation.definition.string.end.cpp"
        },
        "13": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "14": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "15": {
          "name": "entity.name.other.preprocessor.macro.include.cpp"
        },
        "16": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "17": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "18": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "19": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "20": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "21": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "22": {
          "name": "punctuation.terminator.statement.cpp"
        }
      },
      "match": '^((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((import))(?:\\s+)?(?:(?:(?:((<)[^>]*(>?)((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:(?:\\n|$)|(?=\\/\\/)))|((\\")[^\\"]*(\\"?)((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:(?:\\n|$)|(?=\\/\\/))))|(((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?:\\.(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*)*((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:(?:\\n|$)|(?=(?:\\/\\/|;)))))|((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:(?:\\n|$)|(?=(?:\\/\\/|;))))(?:\\s+)?(;?)',
      "name": "meta.preprocessor.import.cpp"
    },
    "d9bc4796b0b_preprocessor_number_literal": {
      "captures": {
        "0": {
          "patterns": [{
            "begin": "(?=.)",
            "beginCaptures": {},
            "end": "$",
            "endCaptures": {},
            "patterns": [{
              "captures": {
                "1": {
                  "name": "keyword.other.unit.hexadecimal.cpp"
                },
                "2": {
                  "name": "constant.numeric.hexadecimal.cpp",
                  "patterns": [{
                    "match": "(?<=[0-9a-fA-F])'(?=[0-9a-fA-F])",
                    "name": "punctuation.separator.constant.numeric.cpp"
                  }]
                },
                "3": {
                  "name": "punctuation.separator.constant.numeric.cpp"
                },
                "4": {
                  "name": "constant.numeric.hexadecimal.cpp"
                },
                "5": {
                  "name": "constant.numeric.hexadecimal.cpp",
                  "patterns": [{
                    "match": "(?<=[0-9a-fA-F])'(?=[0-9a-fA-F])",
                    "name": "punctuation.separator.constant.numeric.cpp"
                  }]
                },
                "6": {
                  "name": "punctuation.separator.constant.numeric.cpp"
                },
                "7": {
                  "name": "keyword.other.unit.exponent.hexadecimal.cpp"
                },
                "8": {
                  "name": "keyword.operator.plus.exponent.hexadecimal.cpp"
                },
                "9": {
                  "name": "keyword.operator.minus.exponent.hexadecimal.cpp"
                },
                "10": {
                  "name": "constant.numeric.exponent.hexadecimal.cpp",
                  "patterns": [{
                    "match": "(?<=[0-9a-fA-F])'(?=[0-9a-fA-F])",
                    "name": "punctuation.separator.constant.numeric.cpp"
                  }]
                },
                "11": {
                  "name": "keyword.other.suffix.literal.built-in.floating-point.cpp keyword.other.unit.suffix.floating-point.cpp"
                }
              },
              "match": "(\\G0[xX])([0-9a-fA-F](?:[0-9a-fA-F]|((?<=[0-9a-fA-F])'(?=[0-9a-fA-F])))*)?((?:(?<=[0-9a-fA-F])\\.|\\.(?=[0-9a-fA-F])))([0-9a-fA-F](?:[0-9a-fA-F]|((?<=[0-9a-fA-F])'(?=[0-9a-fA-F])))*)?(?:(?<!')([pP])(\\+?)(\\-?)([0-9](?:[0-9]|(?<=[0-9a-fA-F])'(?=[0-9a-fA-F]))*))?([lLfF](?!\\w))?$"
            }, {
              "captures": {
                "1": {
                  "name": "constant.numeric.decimal.cpp",
                  "patterns": [{
                    "match": "(?<=[0-9a-fA-F])'(?=[0-9a-fA-F])",
                    "name": "punctuation.separator.constant.numeric.cpp"
                  }]
                },
                "2": {
                  "name": "punctuation.separator.constant.numeric.cpp"
                },
                "3": {
                  "name": "constant.numeric.decimal.point.cpp"
                },
                "4": {
                  "name": "constant.numeric.decimal.cpp",
                  "patterns": [{
                    "match": "(?<=[0-9a-fA-F])'(?=[0-9a-fA-F])",
                    "name": "punctuation.separator.constant.numeric.cpp"
                  }]
                },
                "5": {
                  "name": "punctuation.separator.constant.numeric.cpp"
                },
                "6": {
                  "name": "keyword.other.unit.exponent.decimal.cpp"
                },
                "7": {
                  "name": "keyword.operator.plus.exponent.decimal.cpp"
                },
                "8": {
                  "name": "keyword.operator.minus.exponent.decimal.cpp"
                },
                "9": {
                  "name": "constant.numeric.exponent.decimal.cpp",
                  "patterns": [{
                    "match": "(?<=[0-9a-fA-F])'(?=[0-9a-fA-F])",
                    "name": "punctuation.separator.constant.numeric.cpp"
                  }]
                },
                "10": {
                  "name": "keyword.other.suffix.literal.built-in.floating-point.cpp keyword.other.unit.suffix.floating-point.cpp"
                }
              },
              "match": "\\G(?=[0-9.])(?!0[xXbB])([0-9](?:[0-9]|((?<=[0-9a-fA-F])'(?=[0-9a-fA-F])))*)?((?:(?<=[0-9])\\.|\\.(?=[0-9])))([0-9](?:[0-9]|((?<=[0-9a-fA-F])'(?=[0-9a-fA-F])))*)?(?:(?<!')([eE])(\\+?)(\\-?)([0-9](?:[0-9]|(?<=[0-9a-fA-F])'(?=[0-9a-fA-F]))*))?([lLfF](?!\\w))?$"
            }, {
              "captures": {
                "1": {
                  "name": "keyword.other.unit.binary.cpp"
                },
                "2": {
                  "name": "constant.numeric.binary.cpp",
                  "patterns": [{
                    "match": "(?<=[0-9a-fA-F])'(?=[0-9a-fA-F])",
                    "name": "punctuation.separator.constant.numeric.cpp"
                  }]
                },
                "3": {
                  "name": "punctuation.separator.constant.numeric.cpp"
                },
                "4": {
                  "name": "keyword.other.suffix.literal.built-in.integer.cpp keyword.other.unit.suffix.integer.cpp"
                }
              },
              "match": "(\\G0[bB])([01](?:[01]|((?<=[0-9a-fA-F])'(?=[0-9a-fA-F])))*)((?:[uU]|(?:[uU]ll?)|(?:[uU]LL?)|(?:ll?[uU]?)|(?:LL?[uU]?)|[fF])(?!\\w))?$"
            }, {
              "captures": {
                "1": {
                  "name": "keyword.other.unit.octal.cpp"
                },
                "2": {
                  "name": "constant.numeric.octal.cpp",
                  "patterns": [{
                    "match": "(?<=[0-9a-fA-F])'(?=[0-9a-fA-F])",
                    "name": "punctuation.separator.constant.numeric.cpp"
                  }]
                },
                "3": {
                  "name": "punctuation.separator.constant.numeric.cpp"
                },
                "4": {
                  "name": "keyword.other.suffix.literal.built-in.integer.cpp keyword.other.unit.suffix.integer.cpp"
                }
              },
              "match": "(\\G0)((?:[0-7]|((?<=[0-9a-fA-F])'(?=[0-9a-fA-F])))+)((?:[uU]|(?:[uU]ll?)|(?:[uU]LL?)|(?:ll?[uU]?)|(?:LL?[uU]?)|[fF])(?!\\w))?$"
            }, {
              "captures": {
                "1": {
                  "name": "keyword.other.unit.hexadecimal.cpp"
                },
                "2": {
                  "name": "constant.numeric.hexadecimal.cpp",
                  "patterns": [{
                    "match": "(?<=[0-9a-fA-F])'(?=[0-9a-fA-F])",
                    "name": "punctuation.separator.constant.numeric.cpp"
                  }]
                },
                "3": {
                  "name": "punctuation.separator.constant.numeric.cpp"
                },
                "4": {
                  "name": "keyword.other.unit.exponent.hexadecimal.cpp"
                },
                "5": {
                  "name": "keyword.operator.plus.exponent.hexadecimal.cpp"
                },
                "6": {
                  "name": "keyword.operator.minus.exponent.hexadecimal.cpp"
                },
                "7": {
                  "name": "constant.numeric.exponent.hexadecimal.cpp",
                  "patterns": [{
                    "match": "(?<=[0-9a-fA-F])'(?=[0-9a-fA-F])",
                    "name": "punctuation.separator.constant.numeric.cpp"
                  }]
                },
                "8": {
                  "name": "keyword.other.suffix.literal.built-in.integer.cpp keyword.other.unit.suffix.integer.cpp"
                }
              },
              "match": "(\\G0[xX])([0-9a-fA-F](?:[0-9a-fA-F]|((?<=[0-9a-fA-F])'(?=[0-9a-fA-F])))*)(?:(?<!')([pP])(\\+?)(\\-?)([0-9](?:[0-9]|(?<=[0-9a-fA-F])'(?=[0-9a-fA-F]))*))?((?:[uU]|(?:[uU]ll?)|(?:[uU]LL?)|(?:ll?[uU]?)|(?:LL?[uU]?)|[fF])(?!\\w))?$"
            }, {
              "captures": {
                "1": {
                  "name": "constant.numeric.decimal.cpp",
                  "patterns": [{
                    "match": "(?<=[0-9a-fA-F])'(?=[0-9a-fA-F])",
                    "name": "punctuation.separator.constant.numeric.cpp"
                  }]
                },
                "2": {
                  "name": "punctuation.separator.constant.numeric.cpp"
                },
                "3": {
                  "name": "keyword.other.unit.exponent.decimal.cpp"
                },
                "4": {
                  "name": "keyword.operator.plus.exponent.decimal.cpp"
                },
                "5": {
                  "name": "keyword.operator.minus.exponent.decimal.cpp"
                },
                "6": {
                  "name": "constant.numeric.exponent.decimal.cpp",
                  "patterns": [{
                    "match": "(?<=[0-9a-fA-F])'(?=[0-9a-fA-F])",
                    "name": "punctuation.separator.constant.numeric.cpp"
                  }]
                },
                "7": {
                  "name": "keyword.other.suffix.literal.built-in.integer.cpp keyword.other.unit.suffix.integer.cpp"
                }
              },
              "match": "\\G(?=[0-9.])(?!0[xXbB])([0-9](?:[0-9]|((?<=[0-9a-fA-F])'(?=[0-9a-fA-F])))*)(?:(?<!')([eE])(\\+?)(\\-?)([0-9](?:[0-9]|(?<=[0-9a-fA-F])'(?=[0-9a-fA-F]))*))?((?:[uU]|(?:[uU]ll?)|(?:[uU]LL?)|(?:ll?[uU]?)|(?:LL?[uU]?)|[fF])(?!\\w))?$"
            }, {
              "match": "(?:(?:[0-9a-zA-Z_\\.]|')|(?<=[eEpP])[+-])+",
              "name": "invalid.illegal.constant.numeric.cpp"
            }]
          }]
        }
      },
      "match": "(?<!\\w)\\.?\\d(?:(?:[0-9a-zA-Z_\\.]|')|(?<=[eEpP])[+-])*"
    },
    "decltype": {
      "begin": "((?<!\\w)decltype(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(\\()",
      "beginCaptures": {
        "1": {
          "name": "keyword.operator.functionlike.cpp keyword.other.decltype.cpp storage.type.decltype.cpp"
        },
        "2": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "3": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "4": {
          "name": "comment.block.cpp"
        },
        "5": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "6": {
          "name": "punctuation.section.arguments.begin.bracket.round.decltype.cpp"
        }
      },
      "contentName": "meta.arguments.decltype",
      "end": "\\)",
      "endCaptures": {
        "0": {
          "name": "punctuation.section.arguments.end.bracket.round.decltype.cpp"
        }
      },
      "patterns": [{
        "include": "#evaluation_context"
      }]
    },
    "decltype_specifier": {
      "begin": "((?<!\\w)decltype(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(\\()",
      "beginCaptures": {
        "1": {
          "name": "keyword.operator.functionlike.cpp keyword.other.decltype.cpp storage.type.decltype.cpp"
        },
        "2": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "3": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "4": {
          "name": "comment.block.cpp"
        },
        "5": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "6": {
          "name": "punctuation.section.arguments.begin.bracket.round.decltype.cpp"
        }
      },
      "contentName": "meta.arguments.decltype",
      "end": "\\)",
      "endCaptures": {
        "0": {
          "name": "punctuation.section.arguments.end.bracket.round.decltype.cpp"
        }
      },
      "patterns": [{
        "include": "#evaluation_context"
      }]
    },
    "default_statement": {
      "begin": "((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?<!\\w)default(?!\\w))",
      "beginCaptures": {
        "1": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "2": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "3": {
          "name": "comment.block.cpp"
        },
        "4": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "5": {
          "name": "keyword.control.default.cpp"
        }
      },
      "end": ":",
      "endCaptures": {
        "0": {
          "name": "punctuation.separator.colon.case.default.cpp"
        }
      },
      "name": "meta.conditional.case.cpp",
      "patterns": [{
        "include": "#evaluation_context"
      }]
    },
    "destructor_inline": {
      "begin": "^((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?:__cdecl|__clrcall|__stdcall|__fastcall|__thiscall|__vectorcall)?)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?:(?:(?:constexpr)|(?:consteval)|(?:explicit)|(?:mutable)|(?:virtual)|(?:inline)|(?:friend))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*)(~(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)(?=\\())",
      "beginCaptures": {
        "0": {
          "name": "meta.head.function.definition.special.member.destructor.cpp"
        },
        "1": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "2": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "3": {
          "name": "comment.block.cpp"
        },
        "4": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "5": {
          "name": "storage.type.modifier.calling-convention.cpp"
        },
        "6": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "7": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "8": {
          "name": "comment.block.cpp"
        },
        "9": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "10": {
          "patterns": [{
            "include": "#functional_specifiers_pre_parameters"
          }]
        },
        "11": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "12": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "13": {
          "name": "comment.block.cpp"
        },
        "14": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "15": {
          "name": "entity.name.function.destructor.cpp entity.name.function.definition.special.member.destructor.cpp"
        }
      },
      "end": "(?:(?<=\\}|%>|\\?\\?>)|(?=[;>\\[\\]=]))",
      "endCaptures": {},
      "name": "meta.function.definition.special.member.destructor.cpp",
      "patterns": [{
        "begin": "\\G ?",
        "beginCaptures": {},
        "end": "(?:\\{|<%|\\?\\?<|(?=;))",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.block.begin.bracket.curly.function.definition.special.member.destructor.cpp"
          }
        },
        "name": "meta.head.function.definition.special.member.destructor.cpp",
        "patterns": [{
          "include": "#ever_present_context"
        }, {
          "captures": {
            "1": {
              "name": "keyword.operator.assignment.cpp"
            },
            "2": {
              "patterns": [{
                "include": "#inline_comment"
              }]
            },
            "3": {
              "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
            },
            "4": {
              "name": "comment.block.cpp"
            },
            "5": {
              "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
            },
            "6": {
              "name": "keyword.other.default.function.cpp keyword.other.default.constructor.cpp keyword.other.default.destructor.cpp"
            },
            "7": {
              "name": "keyword.other.delete.function.cpp keyword.other.delete.constructor.cpp keyword.other.delete.destructor.cpp"
            }
          },
          "match": "(\\=)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:(default)|(delete))"
        }, {
          "begin": "\\(",
          "beginCaptures": {
            "0": {
              "name": "punctuation.section.parameters.begin.bracket.round.special.member.destructor.cpp"
            }
          },
          "contentName": "meta.function.definition.parameters.special.member.destructor",
          "end": "\\)",
          "endCaptures": {
            "0": {
              "name": "punctuation.section.parameters.end.bracket.round.special.member.destructor.cpp"
            }
          },
          "patterns": []
        }, {
          "include": "#qualifiers_and_specifiers_post_parameters"
        }, {
          "include": "$self"
        }]
      }, {
        "begin": "(?<=\\{|<%|\\?\\?<)",
        "beginCaptures": {},
        "end": "\\}|%>|\\?\\?>",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.block.end.bracket.curly.function.definition.special.member.destructor.cpp"
          }
        },
        "name": "meta.body.function.definition.special.member.destructor.cpp",
        "patterns": [{
          "include": "#function_body_context"
        }]
      }, {
        "begin": "(?<=\\}|%>|\\?\\?>)[\\s]*",
        "beginCaptures": {},
        "end": "[\\s]*(?=;)",
        "endCaptures": {},
        "name": "meta.tail.function.definition.special.member.destructor.cpp",
        "patterns": [{
          "include": "$self"
        }]
      }]
    },
    "destructor_root": {
      "begin": `((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?:__cdecl|__clrcall|__stdcall|__fastcall|__thiscall|__vectorcall)?)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?:::)?(?:(?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)\\s*+(((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<12>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)\\s*+)?::)*+)(((?>(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))::((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))~(?:\\14)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?=\\())`,
      "beginCaptures": {
        "0": {
          "name": "meta.head.function.definition.special.member.destructor.cpp"
        },
        "1": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "2": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "3": {
          "name": "comment.block.cpp"
        },
        "4": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "5": {
          "name": "storage.type.modifier.calling-convention.cpp"
        },
        "6": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "7": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "8": {
          "name": "comment.block.cpp"
        },
        "9": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "10": {
          "patterns": [{
            "match": "::",
            "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.destructor.cpp"
          }, {
            "match": "(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)",
            "name": "entity.name.scope-resolution.destructor.cpp"
          }, {
            "include": "#template_call_range"
          }]
        },
        "11": {
          "patterns": [{
            "include": "#template_call_range"
          }]
        },
        "12": {},
        "13": {
          "patterns": [{
            "match": "(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?=:)",
            "name": "entity.name.type.destructor.cpp"
          }, {
            "match": "(?<=:)~(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*",
            "name": "entity.name.function.definition.special.member.destructor.cpp"
          }, {
            "match": "::",
            "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.destructor.cpp"
          }]
        },
        "14": {},
        "15": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "16": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "17": {
          "name": "comment.block.cpp"
        },
        "18": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "19": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "20": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "21": {
          "name": "comment.block.cpp"
        },
        "22": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "23": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "24": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "25": {
          "name": "comment.block.cpp"
        },
        "26": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        }
      },
      "end": "(?:(?<=\\}|%>|\\?\\?>)|(?=[;>\\[\\]=]))",
      "endCaptures": {},
      "name": "meta.function.definition.special.member.destructor.cpp",
      "patterns": [{
        "begin": "\\G ?",
        "beginCaptures": {},
        "end": "(?:\\{|<%|\\?\\?<|(?=;))",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.block.begin.bracket.curly.function.definition.special.member.destructor.cpp"
          }
        },
        "name": "meta.head.function.definition.special.member.destructor.cpp",
        "patterns": [{
          "include": "#ever_present_context"
        }, {
          "captures": {
            "1": {
              "name": "keyword.operator.assignment.cpp"
            },
            "2": {
              "patterns": [{
                "include": "#inline_comment"
              }]
            },
            "3": {
              "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
            },
            "4": {
              "name": "comment.block.cpp"
            },
            "5": {
              "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
            },
            "6": {
              "name": "keyword.other.default.function.cpp keyword.other.default.constructor.cpp keyword.other.default.destructor.cpp"
            },
            "7": {
              "name": "keyword.other.delete.function.cpp keyword.other.delete.constructor.cpp keyword.other.delete.destructor.cpp"
            }
          },
          "match": "(\\=)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:(default)|(delete))"
        }, {
          "begin": "\\(",
          "beginCaptures": {
            "0": {
              "name": "punctuation.section.parameters.begin.bracket.round.special.member.destructor.cpp"
            }
          },
          "contentName": "meta.function.definition.parameters.special.member.destructor",
          "end": "\\)",
          "endCaptures": {
            "0": {
              "name": "punctuation.section.parameters.end.bracket.round.special.member.destructor.cpp"
            }
          },
          "patterns": []
        }, {
          "include": "#qualifiers_and_specifiers_post_parameters"
        }, {
          "include": "$self"
        }]
      }, {
        "begin": "(?<=\\{|<%|\\?\\?<)",
        "beginCaptures": {},
        "end": "\\}|%>|\\?\\?>",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.block.end.bracket.curly.function.definition.special.member.destructor.cpp"
          }
        },
        "name": "meta.body.function.definition.special.member.destructor.cpp",
        "patterns": [{
          "include": "#function_body_context"
        }]
      }, {
        "begin": "(?<=\\}|%>|\\?\\?>)[\\s]*",
        "beginCaptures": {},
        "end": "[\\s]*(?=;)",
        "endCaptures": {},
        "name": "meta.tail.function.definition.special.member.destructor.cpp",
        "patterns": [{
          "include": "$self"
        }]
      }]
    },
    "diagnostic": {
      "begin": "(^((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(#)(?:\\s+)?((?:error|warning)))\\b(?:\\s+)?",
      "beginCaptures": {
        "1": {
          "name": "keyword.control.directive.diagnostic.$7.cpp"
        },
        "2": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "3": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "4": {
          "name": "comment.block.cpp"
        },
        "5": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "6": {
          "name": "punctuation.definition.directive.cpp"
        },
        "7": {}
      },
      "end": "(?<!\\\\)(?:(?=\\n)|(?<=^\\n|[^\\\\]\\n)(?=$))",
      "endCaptures": {},
      "name": "meta.preprocessor.diagnostic.$reference(directive).cpp",
      "patterns": [{
        "include": "#comments"
      }, {
        "begin": '"',
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.string.begin.cpp"
          }
        },
        "end": '(?:(")|(?<!\\\\)(?:(?=\\n)|(?<=^\\n|[^\\\\]\\n)(?=$)))',
        "endCaptures": {
          "1": {
            "name": "punctuation.definition.string.end.cpp"
          }
        },
        "name": "string.quoted.double.cpp",
        "patterns": [{
          "include": "#line_continuation_character"
        }]
      }, {
        "begin": "'",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.string.begin.cpp"
          }
        },
        "end": "(?:(')|(?<!\\\\)(?:(?=\\n)|(?<=^\\n|[^\\\\]\\n)(?=$)))",
        "endCaptures": {
          "1": {
            "name": "punctuation.definition.string.end.cpp"
          }
        },
        "name": "string.quoted.single.cpp",
        "patterns": [{
          "include": "#line_continuation_character"
        }]
      }, {
        "begin": `[^'"]`,
        "beginCaptures": {},
        "end": "(?<!\\\\)(?:(?=\\n)|(?<=^\\n|[^\\\\]\\n)(?=$))",
        "endCaptures": {},
        "name": "string.unquoted.cpp",
        "patterns": [{
          "include": "#line_continuation_character"
        }, {
          "include": "#comments"
        }]
      }]
    },
    "emacs_file_banner": {
      "captures": {
        "1": {
          "name": "meta.toc-list.banner.double-slash.cpp"
        },
        "2": {
          "name": "comment.line.double-slash.cpp"
        },
        "3": {
          "name": "punctuation.definition.comment.cpp"
        },
        "4": {
          "name": "meta.banner.character.cpp"
        },
        "5": {
          "name": "meta.toc-list.banner.block.cpp"
        },
        "6": {
          "name": "comment.line.banner.cpp"
        },
        "7": {
          "name": "punctuation.definition.comment.cpp"
        },
        "8": {
          "name": "meta.banner.character.cpp"
        }
      },
      "match": "(?:(^(?:\\s+)?((\\/\\/)(?:\\s+)?((?:[#;\\/=*C~]+)++(?![#;\\/=*C~]))(?:\\s+)?.+(?:\\s+)?(?:\\4)(?:\\s+)?(?:\\n|$)))|(^(?:\\s+)?((\\/\\*)(?:\\s+)?((?:[#;\\/=*C~]+)++(?![#;\\/=*C~]))(?:\\s+)?.+(?:\\s+)?(?:\\8)(?:\\s+)?\\*\\/)))"
    },
    "empty_square_brackets": {
      "match": "(?<!delete)\\[(?:\\s+)?\\]",
      "name": "storage.modifier.array.bracket.square"
    },
    "enum_block": {
      "begin": `((?<!\\w)enum(?!\\w))(?:\\s+(class|struct))?(?:(?:\\s+|((?:(?:(?:\\[\\[.*?\\]\\]|__attribute(?:__)?\\s*\\(\\s*\\(.*?\\)\\s*\\))|__declspec\\(.*?\\))|alignas\\(.*?\\))(?!\\))))|(?={))(?:\\s+)?((?:(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))?)(?:(?:\\s+)?(:)(?:\\s+)?(?:((::)?(?:(?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)\\s*+(((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<12>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)\\s*+)?::)*\\s*+)((?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))\\s*+(((?<!<)<(?!<)(?:(?:(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/)))|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<12>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)\\s*+)?(::))?(?:\\s+)?((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)))?`,
      "beginCaptures": {
        "0": {
          "name": "meta.head.enum.cpp"
        },
        "1": {
          "name": "storage.type.enum.cpp"
        },
        "2": {
          "name": "storage.type.enum.enum-key.$2.cpp"
        },
        "3": {
          "patterns": [{
            "include": "#attributes_context"
          }, {
            "include": "#number_literal"
          }]
        },
        "4": {
          "name": "entity.name.type.enum.cpp"
        },
        "5": {
          "name": "punctuation.separator.colon.type-specifier.cpp"
        },
        "6": {
          "patterns": [{
            "include": "#scope_resolution_inner_generated"
          }]
        },
        "7": {
          "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.cpp"
        },
        "8": {
          "patterns": [{
            "include": "#template_call_range"
          }]
        },
        "9": {},
        "10": {
          "name": "entity.name.scope-resolution.cpp"
        },
        "11": {
          "name": "meta.template.call.cpp",
          "patterns": [{
            "include": "#template_call_range"
          }]
        },
        "12": {},
        "13": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "14": {
          "name": "comment.block.cpp"
        },
        "15": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "16": {
          "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.cpp"
        },
        "17": {
          "name": "storage.type.integral.$17.cpp"
        }
      },
      "end": "(?:(?:(?<=\\}|%>|\\?\\?>)(?:\\s+)?(;)|(;))|(?=[;>\\[\\]=]))",
      "endCaptures": {
        "1": {
          "name": "punctuation.terminator.statement.cpp"
        },
        "2": {
          "name": "punctuation.terminator.statement.cpp"
        }
      },
      "name": "meta.block.enum.cpp",
      "patterns": [{
        "begin": "\\G ?",
        "beginCaptures": {},
        "end": "(?:\\{|<%|\\?\\?<|(?=;))",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.block.begin.bracket.curly.enum.cpp"
          }
        },
        "name": "meta.head.enum.cpp",
        "patterns": [{
          "include": "$self"
        }]
      }, {
        "begin": "(?<=\\{|<%|\\?\\?<)",
        "beginCaptures": {},
        "end": "\\}|%>|\\?\\?>",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.block.end.bracket.curly.enum.cpp"
          }
        },
        "name": "meta.body.enum.cpp",
        "patterns": [{
          "include": "#ever_present_context"
        }, {
          "include": "#enumerator_list"
        }, {
          "include": "#comments"
        }, {
          "include": "#comma"
        }, {
          "include": "#semicolon"
        }]
      }, {
        "begin": "(?<=\\}|%>|\\?\\?>)[\\s]*",
        "beginCaptures": {},
        "end": "[\\s]*(?=;)",
        "endCaptures": {},
        "name": "meta.tail.enum.cpp",
        "patterns": [{
          "include": "$self"
        }]
      }]
    },
    "enum_declare": {
      "captures": {
        "1": {
          "name": "storage.type.enum.declare.cpp"
        },
        "2": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "3": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "4": {
          "name": "entity.name.type.enum.cpp"
        },
        "5": {
          "patterns": [{
            "match": "\\*",
            "name": "storage.modifier.pointer.cpp"
          }, {
            "captures": {
              "1": {
                "patterns": [{
                  "include": "#inline_comment"
                }]
              },
              "2": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "3": {
                "name": "comment.block.cpp"
              },
              "4": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "(?:\\&((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))){2,}\\&",
            "name": "invalid.illegal.reference-type.cpp"
          }, {
            "match": "\\&",
            "name": "storage.modifier.reference.cpp"
          }]
        },
        "6": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "7": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "8": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "9": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "10": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "11": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "12": {
          "name": "variable.other.object.declare.cpp"
        },
        "13": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "14": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        }
      },
      "match": "((?<!\\w)enum(?!\\w))((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))(((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))?(?:(?:&|\\*)((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*(?:&|\\*))?((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))\\b(?!override\\W|override\\$|final\\W|final\\$)((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?=\\S)(?![:{a-zA-Z])"
    },
    "enumerator_list": {
      "captures": {
        "1": {
          "name": "variable.other.enummember.cpp"
        },
        "2": {
          "patterns": [{
            "include": "#attributes_context"
          }, {
            "include": "#number_literal"
          }]
        },
        "3": {
          "name": "keyword.operator.assignment.cpp"
        },
        "4": {
          "patterns": [{
            "include": "#evaluation_context"
          }]
        },
        "5": {
          "patterns": [{
            "include": "#comma"
          }, {
            "include": "#semicolon"
          }]
        }
      },
      "match": "((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))(?:\\s+)?((?:(?:(?:\\[\\[.*?\\]\\]|__attribute(?:__)?\\s*\\(\\s*\\(.*?\\)\\s*\\))|__declspec\\(.*?\\))|alignas\\(.*?\\))(?!\\)))?(?:\\s+)?(?:(\\=)(?:\\s+)?(.+?)(?:\\s+)?)?(?:(?:((?:[,;](?!')|\\n))|(?=\\}[^']))|(?=(?:\\/\\/|\\/\\*)))",
      "name": "meta.enum.definition.cpp"
    },
    "evaluation_context": {
      "patterns": [{
        "include": "#ever_present_context"
      }, {
        "include": "#string_context"
      }, {
        "include": "#number_literal"
      }, {
        "include": "#method_access"
      }, {
        "include": "#member_access"
      }, {
        "include": "#predefined_macros"
      }, {
        "include": "#operators"
      }, {
        "include": "#memory_operators"
      }, {
        "include": "#wordlike_operators"
      }, {
        "include": "#type_casting_operators"
      }, {
        "include": "#control_flow_keywords"
      }, {
        "include": "#exception_keywords"
      }, {
        "include": "#the_this_keyword"
      }, {
        "include": "#language_constants"
      }, {
        "include": "#builtin_storage_type_initilizer"
      }, {
        "include": "#qualifiers_and_specifiers_post_parameters"
      }, {
        "include": "#functional_specifiers_pre_parameters"
      }, {
        "include": "#storage_types"
      }, {
        "include": "#lambdas"
      }, {
        "include": "#attributes_context"
      }, {
        "include": "#parentheses"
      }, {
        "include": "#function_call"
      }, {
        "include": "#scope_resolution_inner_generated"
      }, {
        "include": "#square_brackets"
      }, {
        "include": "#semicolon"
      }, {
        "include": "#comma"
      }]
    },
    "ever_present_context": {
      "patterns": [{
        "include": "#pragma_mark"
      }, {
        "include": "#pragma"
      }, {
        "include": "#include"
      }, {
        "include": "#line"
      }, {
        "include": "#diagnostic"
      }, {
        "include": "#undef"
      }, {
        "include": "#preprocessor_conditional_range"
      }, {
        "include": "#single_line_macro"
      }, {
        "include": "#macro"
      }, {
        "include": "#preprocessor_conditional_standalone"
      }, {
        "include": "#macro_argument"
      }, {
        "include": "#comments"
      }, {
        "include": "#line_continuation_character"
      }]
    },
    "exception_keywords": {
      "captures": {
        "1": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "2": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "3": {
          "name": "keyword.control.exception.$3.cpp"
        }
      },
      "match": "((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?<!\\w)(?:(?:throw)|(?:catch)|(?:try))(?!\\w))"
    },
    "extern_block": {
      "begin": '((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(extern)(?=\\s*\\")',
      "beginCaptures": {
        "0": {
          "name": "meta.head.extern.cpp"
        },
        "1": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "2": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "3": {
          "name": "comment.block.cpp"
        },
        "4": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "5": {
          "name": "storage.type.extern.cpp"
        }
      },
      "end": "(?:(?:(?<=\\}|%>|\\?\\?>)(?:\\s+)?(;)|(;))|(?=[;>\\[\\]=]))",
      "endCaptures": {
        "1": {
          "name": "punctuation.terminator.statement.cpp"
        },
        "2": {
          "name": "punctuation.terminator.statement.cpp"
        }
      },
      "name": "meta.block.extern.cpp",
      "patterns": [{
        "begin": "\\G ?",
        "beginCaptures": {},
        "end": "(?:\\{|<%|\\?\\?<|(?=;))",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.block.begin.bracket.curly.extern.cpp"
          }
        },
        "name": "meta.head.extern.cpp",
        "patterns": [{
          "include": "$self"
        }]
      }, {
        "begin": "(?<=\\{|<%|\\?\\?<)",
        "beginCaptures": {},
        "end": "\\}|%>|\\?\\?>",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.block.end.bracket.curly.extern.cpp"
          }
        },
        "name": "meta.body.extern.cpp",
        "patterns": [{
          "include": "$self"
        }]
      }, {
        "begin": "(?<=\\}|%>|\\?\\?>)[\\s]*",
        "beginCaptures": {},
        "end": "[\\s]*(?=;)",
        "endCaptures": {},
        "name": "meta.tail.extern.cpp",
        "patterns": [{
          "include": "$self"
        }]
      }, {
        "include": "$self"
      }]
    },
    "function_body_context": {
      "patterns": [{
        "include": "#ever_present_context"
      }, {
        "include": "#using_namespace"
      }, {
        "include": "#type_alias"
      }, {
        "include": "#using_name"
      }, {
        "include": "#namespace_alias"
      }, {
        "include": "#typedef_class"
      }, {
        "include": "#typedef_struct"
      }, {
        "include": "#typedef_union"
      }, {
        "include": "#misc_keywords"
      }, {
        "include": "#standard_declares"
      }, {
        "include": "#class_block"
      }, {
        "include": "#struct_block"
      }, {
        "include": "#union_block"
      }, {
        "include": "#enum_block"
      }, {
        "include": "#access_control_keywords"
      }, {
        "include": "#block"
      }, {
        "include": "#static_assert"
      }, {
        "include": "#assembly"
      }, {
        "include": "#function_pointer"
      }, {
        "include": "#switch_statement"
      }, {
        "include": "#goto_statement"
      }, {
        "include": "#evaluation_context"
      }, {
        "include": "#label"
      }]
    },
    "function_call": {
      "begin": `((::)?(?:(?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)\\s*+(((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<11>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)\\s*+)?::)*\\s*+)((?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*)\\b(?<!\\Wreinterpret_cast|^reinterpret_cast|\\Watomic_noexcept|^atomic_noexcept|\\Wuint_least16_t|^uint_least16_t|\\Wuint_least32_t|^uint_least32_t|\\Wuint_least64_t|^uint_least64_t|\\Watomic_cancel|^atomic_cancel|\\Watomic_commit|^atomic_commit|\\Wuint_least8_t|^uint_least8_t|\\Wuint_fast16_t|^uint_fast16_t|\\Wuint_fast32_t|^uint_fast32_t|\\Wint_least16_t|^int_least16_t|\\Wint_least32_t|^int_least32_t|\\Wint_least64_t|^int_least64_t|\\Wuint_fast64_t|^uint_fast64_t|\\Wthread_local|^thread_local|\\Wint_fast16_t|^int_fast16_t|\\Wint_fast32_t|^int_fast32_t|\\Wint_fast64_t|^int_fast64_t|\\Wsynchronized|^synchronized|\\Wuint_fast8_t|^uint_fast8_t|\\Wdynamic_cast|^dynamic_cast|\\Wint_least8_t|^int_least8_t|\\Wint_fast8_t|^int_fast8_t|\\Wstatic_cast|^static_cast|\\Wsuseconds_t|^suseconds_t|\\Wconst_cast|^const_cast|\\Wuseconds_t|^useconds_t|\\Wconstinit|^constinit|\\Wco_return|^co_return|\\Wuintmax_t|^uintmax_t|\\Wuintmax_t|^uintmax_t|\\Wuintmax_t|^uintmax_t|\\Wconstexpr|^constexpr|\\Wconsteval|^consteval|\\Wconstexpr|^constexpr|\\Wconstexpr|^constexpr|\\Wconsteval|^consteval|\\Wprotected|^protected|\\Wnamespace|^namespace|\\Wblksize_t|^blksize_t|\\Wco_return|^co_return|\\Win_addr_t|^in_addr_t|\\Win_port_t|^in_port_t|\\Wuintptr_t|^uintptr_t|\\Wtemplate|^template|\\Wnoexcept|^noexcept|\\Wnoexcept|^noexcept|\\Wcontinue|^continue|\\Wco_await|^co_await|\\Wco_yield|^co_yield|\\Wunsigned|^unsigned|\\Wu_quad_t|^u_quad_t|\\Wblkcnt_t|^blkcnt_t|\\Wuint16_t|^uint16_t|\\Wuint32_t|^uint32_t|\\Wuint64_t|^uint64_t|\\Wintptr_t|^intptr_t|\\Wintmax_t|^intmax_t|\\Wintmax_t|^intmax_t|\\Wvolatile|^volatile|\\Wregister|^register|\\Wrestrict|^restrict|\\Wexplicit|^explicit|\\Wvolatile|^volatile|\\Wnoexcept|^noexcept|\\Woperator|^operator|\\Wdecltype|^decltype|\\Wtypename|^typename|\\Wrequires|^requires|\\Wco_await|^co_await|\\Wco_yield|^co_yield|\\Wreflexpr|^reflexpr|\\Wswblk_t|^swblk_t|\\Wvirtual|^virtual|\\Wssize_t|^ssize_t|\\Wconcept|^concept|\\Wmutable|^mutable|\\Wfixpt_t|^fixpt_t|\\Wint16_t|^int16_t|\\Wint32_t|^int32_t|\\Wint64_t|^int64_t|\\Wuint8_t|^uint8_t|\\Wtypedef|^typedef|\\Wdaddr_t|^daddr_t|\\Wcaddr_t|^caddr_t|\\Wqaddr_t|^qaddr_t|\\Wdefault|^default|\\Wnlink_t|^nlink_t|\\Wsegsz_t|^segsz_t|\\Wu_short|^u_short|\\Wwchar_t|^wchar_t|\\Wprivate|^private|\\W__asm__|^__asm__|\\Walignas|^alignas|\\Walignof|^alignof|\\Wmutable|^mutable|\\Wnullptr|^nullptr|\\Wclock_t|^clock_t|\\Wmode_t|^mode_t|\\Wpublic|^public|\\Wsize_t|^size_t|\\Wdouble|^double|\\Wquad_t|^quad_t|\\Wstatic|^static|\\Wtime_t|^time_t|\\Wmodule|^module|\\Wimport|^import|\\Wexport|^export|\\Wextern|^extern|\\Winline|^inline|\\Wxor_eq|^xor_eq|\\Wand_eq|^and_eq|\\Wreturn|^return|\\Wfriend|^friend|\\Wnot_eq|^not_eq|\\Wsigned|^signed|\\Wstruct|^struct|\\Wint8_t|^int8_t|\\Wushort|^ushort|\\Wswitch|^switch|\\Wu_long|^u_long|\\Wtypeid|^typeid|\\Wu_char|^u_char|\\Wsizeof|^sizeof|\\Wbitand|^bitand|\\Wdelete|^delete|\\Wino_t|^ino_t|\\Wkey_t|^key_t|\\Wpid_t|^pid_t|\\Woff_t|^off_t|\\Wuid_t|^uid_t|\\Wshort|^short|\\Wbreak|^break|\\Wcatch|^catch|\\Wcompl|^compl|\\Wwhile|^while|\\Wfalse|^false|\\Wclass|^class|\\Wunion|^union|\\Wconst|^const|\\Wor_eq|^or_eq|\\Wconst|^const|\\Wthrow|^throw|\\Wbitor|^bitor|\\Wu_int|^u_int|\\Wusing|^using|\\Wdiv_t|^div_t|\\Wdev_t|^dev_t|\\Wgid_t|^gid_t|\\Wfloat|^float|\\Wlong|^long|\\Wgoto|^goto|\\Wuint|^uint|\\Wid_t|^id_t|\\Wcase|^case|\\Wauto|^auto|\\Wvoid|^void|\\Wenum|^enum|\\Wtrue|^true|\\Wchar|^char|\\Wid_t|^id_t|\\WNULL|^NULL|\\Wthis|^this|\\Wbool|^bool|\\Welse|^else|\\Wfor|^for|\\Wnew|^new|\\Wnot|^not|\\Wxor|^xor|\\Wand|^and|\\Wasm|^asm|\\Wint|^int|\\Wtry|^try|\\Wdo|^do|\\Wif|^if|\\Wor|^or)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(((?<!<)<(?!<)(?:(?:(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/)))|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<11>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)\\s*+)?(\\()`,
      "beginCaptures": {
        "1": {
          "patterns": [{
            "include": "#scope_resolution_function_call_inner_generated"
          }]
        },
        "2": {
          "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.function.call.cpp"
        },
        "3": {
          "patterns": [{
            "include": "#template_call_range"
          }]
        },
        "4": {},
        "5": {
          "name": "entity.name.function.call.cpp"
        },
        "6": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "7": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "8": {
          "name": "comment.block.cpp"
        },
        "9": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "10": {
          "name": "meta.template.call.cpp",
          "patterns": [{
            "include": "#template_call_range"
          }]
        },
        "11": {},
        "12": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "13": {
          "name": "comment.block.cpp"
        },
        "14": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "15": {
          "name": "punctuation.section.arguments.begin.bracket.round.function.call.cpp"
        }
      },
      "end": "\\)",
      "endCaptures": {
        "0": {
          "name": "punctuation.section.arguments.end.bracket.round.function.call.cpp"
        }
      },
      "patterns": [{
        "include": "#evaluation_context"
      }]
    },
    "function_definition": {
      "begin": `(?:(?:^|\\G|(?<=;|\\}))|(?<=>|\\*\\/))\\s*+(?:((?<!\\w)template(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))?((?:(?:(?:\\[\\[.*?\\]\\]|__attribute(?:__)?\\s*\\(\\s*\\(.*?\\)\\s*\\))|__declspec\\(.*?\\))|alignas\\(.*?\\))(?!\\)))?((?:((?<!\\w)(?:(?:(?:constexpr)|(?:consteval)|(?:explicit)|(?:mutable)|(?:virtual)|(?:inline)|(?:friend))|(?:(?:thread_local)|(?:volatile)|(?:register)|(?:restrict)|(?:static)|(?:extern)|(?:const)))(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*)(\\s*+((?:(?:(?:\\[\\[.*?\\]\\]|__attribute(?:__)?\\s*\\(\\s*\\(.*?\\)\\s*\\))|__declspec\\(.*?\\))|alignas\\(.*?\\))(?!\\)))?((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:(?:(?:(?:unsigned)|(?:signed)|(?:short)|(?:long))|(?:(?:struct)|(?:class)|(?:union)|(?:enum)))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*(?:((?:::)?(?:(?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)\\s*+(((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<52>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)\\s*+)?::)*+)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))?(?!(?:(?:transaction_safe_dynamic)|(?:__has_cpp_attribute)|(?:reinterpret_cast)|(?:transaction_safe)|(?:atomic_noexcept)|(?:atomic_commit)|(?:__has_include)|(?:atomic_cancel)|(?:synchronized)|(?:thread_local)|(?:dynamic_cast)|(?:static_cast)|(?:const_cast)|(?:constexpr)|(?:co_return)|(?:constinit)|(?:namespace)|(?:protected)|(?:consteval)|(?:constexpr)|(?:constexpr)|(?:co_return)|(?:consteval)|(?:co_await)|(?:continue)|(?:template)|(?:reflexpr)|(?:volatile)|(?:register)|(?:co_await)|(?:co_yield)|(?:restrict)|(?:noexcept)|(?:volatile)|(?:override)|(?:explicit)|(?:decltype)|(?:operator)|(?:noexcept)|(?:noexcept)|(?:typename)|(?:requires)|(?:co_yield)|(?:nullptr)|(?:alignof)|(?:alignas)|(?:default)|(?:mutable)|(?:virtual)|(?:mutable)|(?:private)|(?:include)|(?:warning)|(?:_Pragma)|(?:defined)|(?:typedef)|(?:__asm__)|(?:concept)|(?:define)|(?:module)|(?:sizeof)|(?:switch)|(?:delete)|(?:pragma)|(?:and_eq)|(?:inline)|(?:xor_eq)|(?:typeid)|(?:import)|(?:extern)|(?:public)|(?:bitand)|(?:static)|(?:export)|(?:return)|(?:friend)|(?:ifndef)|(?:not_eq)|(?:false)|(?:final)|(?:break)|(?:const)|(?:catch)|(?:endif)|(?:ifdef)|(?:undef)|(?:error)|(?:audit)|(?:while)|(?:using)|(?:axiom)|(?:or_eq)|(?:compl)|(?:throw)|(?:bitor)|(?:const)|(?:line)|(?:case)|(?:else)|(?:this)|(?:true)|(?:goto)|(?:else)|(?:NULL)|(?:elif)|(?:new)|(?:asm)|(?:xor)|(?:and)|(?:try)|(?:not)|(?:for)|(?:do)|(?:if)|(?:or)|(?:if))\\b)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*\\b((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<52>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)?(?![\\w<:.]))(((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))?(?:(?:&|\\*)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*(?:&|\\*))?((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?:__cdecl|__clrcall|__stdcall|__fastcall|__thiscall|__vectorcall)?)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((::)?(?:(?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)\\s*+(((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<52>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)\\s*+)?::)*\\s*+)((?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*)\\b(?<!\\Wreinterpret_cast|^reinterpret_cast|\\Watomic_noexcept|^atomic_noexcept|\\Wuint_least16_t|^uint_least16_t|\\Wuint_least32_t|^uint_least32_t|\\Wuint_least64_t|^uint_least64_t|\\Watomic_cancel|^atomic_cancel|\\Watomic_commit|^atomic_commit|\\Wuint_least8_t|^uint_least8_t|\\Wuint_fast16_t|^uint_fast16_t|\\Wuint_fast32_t|^uint_fast32_t|\\Wint_least16_t|^int_least16_t|\\Wint_least32_t|^int_least32_t|\\Wint_least64_t|^int_least64_t|\\Wuint_fast64_t|^uint_fast64_t|\\Wthread_local|^thread_local|\\Wint_fast16_t|^int_fast16_t|\\Wint_fast32_t|^int_fast32_t|\\Wint_fast64_t|^int_fast64_t|\\Wsynchronized|^synchronized|\\Wuint_fast8_t|^uint_fast8_t|\\Wdynamic_cast|^dynamic_cast|\\Wint_least8_t|^int_least8_t|\\Wint_fast8_t|^int_fast8_t|\\Wstatic_cast|^static_cast|\\Wsuseconds_t|^suseconds_t|\\Wconst_cast|^const_cast|\\Wuseconds_t|^useconds_t|\\Wconstinit|^constinit|\\Wco_return|^co_return|\\Wuintmax_t|^uintmax_t|\\Wuintmax_t|^uintmax_t|\\Wuintmax_t|^uintmax_t|\\Wconstexpr|^constexpr|\\Wconsteval|^consteval|\\Wconstexpr|^constexpr|\\Wconstexpr|^constexpr|\\Wconsteval|^consteval|\\Wprotected|^protected|\\Wnamespace|^namespace|\\Wblksize_t|^blksize_t|\\Wco_return|^co_return|\\Win_addr_t|^in_addr_t|\\Win_port_t|^in_port_t|\\Wuintptr_t|^uintptr_t|\\Wtemplate|^template|\\Wnoexcept|^noexcept|\\Wnoexcept|^noexcept|\\Wcontinue|^continue|\\Wco_await|^co_await|\\Wco_yield|^co_yield|\\Wunsigned|^unsigned|\\Wu_quad_t|^u_quad_t|\\Wblkcnt_t|^blkcnt_t|\\Wuint16_t|^uint16_t|\\Wuint32_t|^uint32_t|\\Wuint64_t|^uint64_t|\\Wintptr_t|^intptr_t|\\Wintmax_t|^intmax_t|\\Wintmax_t|^intmax_t|\\Wvolatile|^volatile|\\Wregister|^register|\\Wrestrict|^restrict|\\Wexplicit|^explicit|\\Wvolatile|^volatile|\\Wnoexcept|^noexcept|\\Woperator|^operator|\\Wdecltype|^decltype|\\Wtypename|^typename|\\Wrequires|^requires|\\Wco_await|^co_await|\\Wco_yield|^co_yield|\\Wreflexpr|^reflexpr|\\Wswblk_t|^swblk_t|\\Wvirtual|^virtual|\\Wssize_t|^ssize_t|\\Wconcept|^concept|\\Wmutable|^mutable|\\Wfixpt_t|^fixpt_t|\\Wint16_t|^int16_t|\\Wint32_t|^int32_t|\\Wint64_t|^int64_t|\\Wuint8_t|^uint8_t|\\Wtypedef|^typedef|\\Wdaddr_t|^daddr_t|\\Wcaddr_t|^caddr_t|\\Wqaddr_t|^qaddr_t|\\Wdefault|^default|\\Wnlink_t|^nlink_t|\\Wsegsz_t|^segsz_t|\\Wu_short|^u_short|\\Wwchar_t|^wchar_t|\\Wprivate|^private|\\W__asm__|^__asm__|\\Walignas|^alignas|\\Walignof|^alignof|\\Wmutable|^mutable|\\Wnullptr|^nullptr|\\Wclock_t|^clock_t|\\Wmode_t|^mode_t|\\Wpublic|^public|\\Wsize_t|^size_t|\\Wdouble|^double|\\Wquad_t|^quad_t|\\Wstatic|^static|\\Wtime_t|^time_t|\\Wmodule|^module|\\Wimport|^import|\\Wexport|^export|\\Wextern|^extern|\\Winline|^inline|\\Wxor_eq|^xor_eq|\\Wand_eq|^and_eq|\\Wreturn|^return|\\Wfriend|^friend|\\Wnot_eq|^not_eq|\\Wsigned|^signed|\\Wstruct|^struct|\\Wint8_t|^int8_t|\\Wushort|^ushort|\\Wswitch|^switch|\\Wu_long|^u_long|\\Wtypeid|^typeid|\\Wu_char|^u_char|\\Wsizeof|^sizeof|\\Wbitand|^bitand|\\Wdelete|^delete|\\Wino_t|^ino_t|\\Wkey_t|^key_t|\\Wpid_t|^pid_t|\\Woff_t|^off_t|\\Wuid_t|^uid_t|\\Wshort|^short|\\Wbreak|^break|\\Wcatch|^catch|\\Wcompl|^compl|\\Wwhile|^while|\\Wfalse|^false|\\Wclass|^class|\\Wunion|^union|\\Wconst|^const|\\Wor_eq|^or_eq|\\Wconst|^const|\\Wthrow|^throw|\\Wbitor|^bitor|\\Wu_int|^u_int|\\Wusing|^using|\\Wdiv_t|^div_t|\\Wdev_t|^dev_t|\\Wgid_t|^gid_t|\\Wfloat|^float|\\Wlong|^long|\\Wgoto|^goto|\\Wuint|^uint|\\Wid_t|^id_t|\\Wcase|^case|\\Wauto|^auto|\\Wvoid|^void|\\Wenum|^enum|\\Wtrue|^true|\\Wchar|^char|\\Wid_t|^id_t|\\WNULL|^NULL|\\Wthis|^this|\\Wbool|^bool|\\Welse|^else|\\Wfor|^for|\\Wnew|^new|\\Wnot|^not|\\Wxor|^xor|\\Wand|^and|\\Wasm|^asm|\\Wint|^int|\\Wtry|^try|\\Wdo|^do|\\Wif|^if|\\Wor|^or)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?=\\()`,
      "beginCaptures": {
        "0": {
          "name": "meta.head.function.definition.cpp"
        },
        "1": {
          "name": "storage.type.template.cpp"
        },
        "2": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "3": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "4": {
          "name": "comment.block.cpp"
        },
        "5": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "6": {
          "patterns": [{
            "include": "#attributes_context"
          }, {
            "include": "#number_literal"
          }]
        },
        "7": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "storage.modifier.$1.cpp"
              },
              "2": {
                "patterns": [{
                  "include": "#inline_comment"
                }]
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "4": {
                "name": "comment.block.cpp"
              },
              "5": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "((?<!\\w)(?:(?:(?:constexpr)|(?:consteval)|(?:explicit)|(?:mutable)|(?:virtual)|(?:inline)|(?:friend))|(?:(?:thread_local)|(?:volatile)|(?:register)|(?:restrict)|(?:static)|(?:extern)|(?:const)))(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))"
          }]
        },
        "8": {
          "name": "storage.modifier.$8.cpp"
        },
        "9": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "10": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "11": {
          "name": "comment.block.cpp"
        },
        "12": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "13": {
          "name": "meta.qualified_type.cpp",
          "patterns": [{
            "match": "::",
            "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.cpp"
          }, {
            "match": "(?<!\\w)(?:(?:struct)|(?:class)|(?:union)|(?:enum))(?!\\w)",
            "name": "storage.type.$0.cpp"
          }, {
            "include": "#attributes_context"
          }, {
            "include": "#storage_types"
          }, {
            "include": "#number_literal"
          }, {
            "include": "#string_context"
          }, {
            "include": "#comma"
          }, {
            "include": "#scope_resolution_inner_generated"
          }, {
            "begin": "<",
            "beginCaptures": {
              "0": {
                "name": "punctuation.section.angle-brackets.begin.template.call.cpp"
              }
            },
            "end": ">",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.angle-brackets.end.template.call.cpp"
              }
            },
            "name": "meta.template.call.cpp",
            "patterns": [{
              "include": "#template_call_context"
            }]
          }, {
            "match": "(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*",
            "name": "entity.name.type.cpp"
          }]
        },
        "14": {
          "patterns": [{
            "include": "#attributes_context"
          }, {
            "include": "#number_literal"
          }]
        },
        "15": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "16": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "17": {
          "name": "comment.block.cpp"
        },
        "18": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "19": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "20": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "21": {
          "name": "comment.block.cpp"
        },
        "22": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "23": {
          "patterns": [{
            "match": "::",
            "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.type.cpp"
          }, {
            "match": "(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)",
            "name": "entity.name.scope-resolution.type.cpp"
          }, {
            "include": "#template_call_range"
          }]
        },
        "24": {
          "patterns": [{
            "include": "#template_call_range"
          }]
        },
        "25": {},
        "26": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "27": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "28": {
          "name": "comment.block.cpp"
        },
        "29": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "30": {},
        "31": {
          "patterns": [{
            "match": "\\*",
            "name": "storage.modifier.pointer.cpp"
          }, {
            "captures": {
              "1": {
                "patterns": [{
                  "include": "#inline_comment"
                }]
              },
              "2": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "3": {
                "name": "comment.block.cpp"
              },
              "4": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "(?:\\&((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))){2,}\\&",
            "name": "invalid.illegal.reference-type.cpp"
          }, {
            "match": "\\&",
            "name": "storage.modifier.reference.cpp"
          }]
        },
        "32": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "33": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "34": {
          "name": "comment.block.cpp"
        },
        "35": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "36": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "37": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "38": {
          "name": "comment.block.cpp"
        },
        "39": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "40": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "41": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "42": {
          "name": "comment.block.cpp"
        },
        "43": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "44": {
          "name": "storage.type.modifier.calling-convention.cpp"
        },
        "45": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "46": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "47": {
          "name": "comment.block.cpp"
        },
        "48": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "49": {
          "patterns": [{
            "include": "#scope_resolution_function_definition_inner_generated"
          }]
        },
        "50": {
          "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.function.definition.cpp"
        },
        "51": {
          "patterns": [{
            "include": "#template_call_range"
          }]
        },
        "52": {},
        "53": {
          "name": "entity.name.function.definition.cpp"
        },
        "54": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "55": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "56": {
          "name": "comment.block.cpp"
        },
        "57": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        }
      },
      "end": "(?:(?<=\\}|%>|\\?\\?>)|(?=[;>\\[\\]=]))",
      "endCaptures": {},
      "name": "meta.function.definition.cpp",
      "patterns": [{
        "begin": "\\G ?",
        "beginCaptures": {},
        "end": "(?:\\{|<%|\\?\\?<|(?=;))",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.block.begin.bracket.curly.function.definition.cpp"
          }
        },
        "name": "meta.head.function.definition.cpp",
        "patterns": [{
          "include": "#ever_present_context"
        }, {
          "begin": "\\(",
          "beginCaptures": {
            "0": {
              "name": "punctuation.section.parameters.begin.bracket.round.cpp"
            }
          },
          "contentName": "meta.function.definition.parameters",
          "end": "\\)",
          "endCaptures": {
            "0": {
              "name": "punctuation.section.parameters.end.bracket.round.cpp"
            }
          },
          "patterns": [{
            "include": "#ever_present_context"
          }, {
            "include": "#parameter_or_maybe_value"
          }, {
            "include": "#comma"
          }, {
            "include": "#evaluation_context"
          }]
        }, {
          "captures": {
            "1": {
              "name": "punctuation.definition.function.return-type.cpp"
            },
            "2": {
              "patterns": [{
                "include": "#inline_comment"
              }]
            },
            "3": {
              "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
            },
            "4": {
              "name": "comment.block.cpp"
            },
            "5": {
              "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
            },
            "6": {
              "name": "meta.qualified_type.cpp",
              "patterns": [{
                "match": "::",
                "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.cpp"
              }, {
                "match": "(?<!\\w)(?:(?:struct)|(?:class)|(?:union)|(?:enum))(?!\\w)",
                "name": "storage.type.$0.cpp"
              }, {
                "include": "#attributes_context"
              }, {
                "include": "#storage_types"
              }, {
                "include": "#number_literal"
              }, {
                "include": "#string_context"
              }, {
                "include": "#comma"
              }, {
                "include": "#scope_resolution_inner_generated"
              }, {
                "begin": "<",
                "beginCaptures": {
                  "0": {
                    "name": "punctuation.section.angle-brackets.begin.template.call.cpp"
                  }
                },
                "end": ">",
                "endCaptures": {
                  "0": {
                    "name": "punctuation.section.angle-brackets.end.template.call.cpp"
                  }
                },
                "name": "meta.template.call.cpp",
                "patterns": [{
                  "include": "#template_call_context"
                }]
              }, {
                "match": "(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*",
                "name": "entity.name.type.cpp"
              }]
            },
            "7": {
              "patterns": [{
                "include": "#attributes_context"
              }, {
                "include": "#number_literal"
              }]
            },
            "8": {
              "patterns": [{
                "include": "#inline_comment"
              }]
            },
            "9": {
              "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
            },
            "10": {
              "name": "comment.block.cpp"
            },
            "11": {
              "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
            },
            "12": {
              "patterns": [{
                "include": "#inline_comment"
              }]
            },
            "13": {
              "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
            },
            "14": {
              "name": "comment.block.cpp"
            },
            "15": {
              "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
            },
            "16": {
              "patterns": [{
                "match": "::",
                "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.type.cpp"
              }, {
                "match": "(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)",
                "name": "entity.name.scope-resolution.type.cpp"
              }, {
                "include": "#template_call_range"
              }]
            },
            "17": {
              "patterns": [{
                "include": "#template_call_range"
              }]
            },
            "18": {},
            "19": {
              "patterns": [{
                "include": "#inline_comment"
              }]
            },
            "20": {
              "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
            },
            "21": {
              "name": "comment.block.cpp"
            },
            "22": {
              "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
            },
            "23": {}
          },
          "match": `(?<=^|\\))(?:\\s+)?(->)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(\\s*+((?:(?:(?:\\[\\[.*?\\]\\]|__attribute(?:__)?\\s*\\(\\s*\\(.*?\\)\\s*\\))|__declspec\\(.*?\\))|alignas\\(.*?\\))(?!\\)))?((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:(?:(?:(?:unsigned)|(?:signed)|(?:short)|(?:long))|(?:(?:struct)|(?:class)|(?:union)|(?:enum)))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*(?:((?:::)?(?:(?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)\\s*+(((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<23>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)\\s*+)?::)*+)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))?(?!(?:(?:transaction_safe_dynamic)|(?:__has_cpp_attribute)|(?:reinterpret_cast)|(?:transaction_safe)|(?:atomic_noexcept)|(?:atomic_commit)|(?:__has_include)|(?:atomic_cancel)|(?:synchronized)|(?:thread_local)|(?:dynamic_cast)|(?:static_cast)|(?:const_cast)|(?:constexpr)|(?:co_return)|(?:constinit)|(?:namespace)|(?:protected)|(?:consteval)|(?:constexpr)|(?:constexpr)|(?:co_return)|(?:consteval)|(?:co_await)|(?:continue)|(?:template)|(?:reflexpr)|(?:volatile)|(?:register)|(?:co_await)|(?:co_yield)|(?:restrict)|(?:noexcept)|(?:volatile)|(?:override)|(?:explicit)|(?:decltype)|(?:operator)|(?:noexcept)|(?:noexcept)|(?:typename)|(?:requires)|(?:co_yield)|(?:nullptr)|(?:alignof)|(?:alignas)|(?:default)|(?:mutable)|(?:virtual)|(?:mutable)|(?:private)|(?:include)|(?:warning)|(?:_Pragma)|(?:defined)|(?:typedef)|(?:__asm__)|(?:concept)|(?:define)|(?:module)|(?:sizeof)|(?:switch)|(?:delete)|(?:pragma)|(?:and_eq)|(?:inline)|(?:xor_eq)|(?:typeid)|(?:import)|(?:extern)|(?:public)|(?:bitand)|(?:static)|(?:export)|(?:return)|(?:friend)|(?:ifndef)|(?:not_eq)|(?:false)|(?:final)|(?:break)|(?:const)|(?:catch)|(?:endif)|(?:ifdef)|(?:undef)|(?:error)|(?:audit)|(?:while)|(?:using)|(?:axiom)|(?:or_eq)|(?:compl)|(?:throw)|(?:bitor)|(?:const)|(?:line)|(?:case)|(?:else)|(?:this)|(?:true)|(?:goto)|(?:else)|(?:NULL)|(?:elif)|(?:new)|(?:asm)|(?:xor)|(?:and)|(?:try)|(?:not)|(?:for)|(?:do)|(?:if)|(?:or)|(?:if))\\b)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*\\b((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<23>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)?(?![\\w<:.]))`
        }, {
          "include": "$self"
        }]
      }, {
        "begin": "(?<=\\{|<%|\\?\\?<)",
        "beginCaptures": {},
        "end": "\\}|%>|\\?\\?>",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.block.end.bracket.curly.function.definition.cpp"
          }
        },
        "name": "meta.body.function.definition.cpp",
        "patterns": [{
          "include": "#function_body_context"
        }]
      }, {
        "begin": "(?<=\\}|%>|\\?\\?>)[\\s]*",
        "beginCaptures": {},
        "end": "[\\s]*(?=;)",
        "endCaptures": {},
        "name": "meta.tail.function.definition.cpp",
        "patterns": [{
          "include": "$self"
        }]
      }]
    },
    "function_parameter_context": {
      "patterns": [{
        "include": "#ever_present_context"
      }, {
        "include": "#parameter"
      }, {
        "include": "#comma"
      }]
    },
    "function_pointer": {
      "begin": `(\\s*+((?:(?:(?:\\[\\[.*?\\]\\]|__attribute(?:__)?\\s*\\(\\s*\\(.*?\\)\\s*\\))|__declspec\\(.*?\\))|alignas\\(.*?\\))(?!\\)))?((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:(?:(?:(?:unsigned)|(?:signed)|(?:short)|(?:long))|(?:(?:struct)|(?:class)|(?:union)|(?:enum)))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*(?:((?:::)?(?:(?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)\\s*+(((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<18>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)\\s*+)?::)*+)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))?(?!(?:(?:transaction_safe_dynamic)|(?:__has_cpp_attribute)|(?:reinterpret_cast)|(?:transaction_safe)|(?:atomic_noexcept)|(?:atomic_commit)|(?:__has_include)|(?:atomic_cancel)|(?:synchronized)|(?:thread_local)|(?:dynamic_cast)|(?:static_cast)|(?:const_cast)|(?:constexpr)|(?:co_return)|(?:constinit)|(?:namespace)|(?:protected)|(?:consteval)|(?:constexpr)|(?:constexpr)|(?:co_return)|(?:consteval)|(?:co_await)|(?:continue)|(?:template)|(?:reflexpr)|(?:volatile)|(?:register)|(?:co_await)|(?:co_yield)|(?:restrict)|(?:noexcept)|(?:volatile)|(?:override)|(?:explicit)|(?:decltype)|(?:operator)|(?:noexcept)|(?:noexcept)|(?:typename)|(?:requires)|(?:co_yield)|(?:nullptr)|(?:alignof)|(?:alignas)|(?:default)|(?:mutable)|(?:virtual)|(?:mutable)|(?:private)|(?:include)|(?:warning)|(?:_Pragma)|(?:defined)|(?:typedef)|(?:__asm__)|(?:concept)|(?:define)|(?:module)|(?:sizeof)|(?:switch)|(?:delete)|(?:pragma)|(?:and_eq)|(?:inline)|(?:xor_eq)|(?:typeid)|(?:import)|(?:extern)|(?:public)|(?:bitand)|(?:static)|(?:export)|(?:return)|(?:friend)|(?:ifndef)|(?:not_eq)|(?:false)|(?:final)|(?:break)|(?:const)|(?:catch)|(?:endif)|(?:ifdef)|(?:undef)|(?:error)|(?:audit)|(?:while)|(?:using)|(?:axiom)|(?:or_eq)|(?:compl)|(?:throw)|(?:bitor)|(?:const)|(?:line)|(?:case)|(?:else)|(?:this)|(?:true)|(?:goto)|(?:else)|(?:NULL)|(?:elif)|(?:new)|(?:asm)|(?:xor)|(?:and)|(?:try)|(?:not)|(?:for)|(?:do)|(?:if)|(?:or)|(?:if))\\b)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*\\b((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<18>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)?(?![\\w<:.]))(((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))?(?:(?:&|\\*)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*(?:&|\\*))?((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(\\()(\\*)(?:\\s+)?((?:(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*)?)(?:\\s+)?(?:(\\[)(\\w*)(\\])(?:\\s+)?)*(\\))(?:\\s+)?(\\()`,
      "beginCaptures": {
        "1": {
          "name": "meta.qualified_type.cpp",
          "patterns": [{
            "match": "::",
            "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.cpp"
          }, {
            "match": "(?<!\\w)(?:(?:struct)|(?:class)|(?:union)|(?:enum))(?!\\w)",
            "name": "storage.type.$0.cpp"
          }, {
            "include": "#attributes_context"
          }, {
            "include": "#storage_types"
          }, {
            "include": "#number_literal"
          }, {
            "include": "#string_context"
          }, {
            "include": "#comma"
          }, {
            "include": "#scope_resolution_inner_generated"
          }, {
            "begin": "<",
            "beginCaptures": {
              "0": {
                "name": "punctuation.section.angle-brackets.begin.template.call.cpp"
              }
            },
            "end": ">",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.angle-brackets.end.template.call.cpp"
              }
            },
            "name": "meta.template.call.cpp",
            "patterns": [{
              "include": "#template_call_context"
            }]
          }, {
            "match": "(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*",
            "name": "entity.name.type.cpp"
          }]
        },
        "2": {
          "patterns": [{
            "include": "#attributes_context"
          }, {
            "include": "#number_literal"
          }]
        },
        "3": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "4": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "5": {
          "name": "comment.block.cpp"
        },
        "6": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "7": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "8": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "9": {
          "name": "comment.block.cpp"
        },
        "10": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "11": {
          "patterns": [{
            "match": "::",
            "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.type.cpp"
          }, {
            "match": "(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)",
            "name": "entity.name.scope-resolution.type.cpp"
          }, {
            "include": "#template_call_range"
          }]
        },
        "12": {
          "patterns": [{
            "include": "#template_call_range"
          }]
        },
        "13": {},
        "14": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "15": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "16": {
          "name": "comment.block.cpp"
        },
        "17": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "18": {},
        "19": {
          "patterns": [{
            "match": "\\*",
            "name": "storage.modifier.pointer.cpp"
          }, {
            "captures": {
              "1": {
                "patterns": [{
                  "include": "#inline_comment"
                }]
              },
              "2": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "3": {
                "name": "comment.block.cpp"
              },
              "4": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "(?:\\&((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))){2,}\\&",
            "name": "invalid.illegal.reference-type.cpp"
          }, {
            "match": "\\&",
            "name": "storage.modifier.reference.cpp"
          }]
        },
        "20": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "21": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "22": {
          "name": "comment.block.cpp"
        },
        "23": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "24": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "25": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "26": {
          "name": "comment.block.cpp"
        },
        "27": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "28": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "29": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "30": {
          "name": "comment.block.cpp"
        },
        "31": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "32": {
          "name": "punctuation.section.parens.begin.bracket.round.function.pointer.cpp"
        },
        "33": {
          "name": "punctuation.definition.function.pointer.dereference.cpp"
        },
        "34": {
          "name": "variable.other.definition.pointer.function.cpp"
        },
        "35": {
          "name": "punctuation.definition.begin.bracket.square.cpp"
        },
        "36": {
          "patterns": [{
            "include": "#evaluation_context"
          }]
        },
        "37": {
          "name": "punctuation.definition.end.bracket.square.cpp"
        },
        "38": {
          "name": "punctuation.section.parens.end.bracket.round.function.pointer.cpp"
        },
        "39": {
          "name": "punctuation.section.parameters.begin.bracket.round.function.pointer.cpp"
        }
      },
      "end": "(\\))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?=[{=,);>]|\\n)(?!\\()",
      "endCaptures": {
        "1": {
          "name": "punctuation.section.parameters.end.bracket.round.function.pointer.cpp"
        },
        "2": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "3": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "4": {
          "name": "comment.block.cpp"
        },
        "5": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        }
      },
      "patterns": [{
        "include": "#function_parameter_context"
      }]
    },
    "function_pointer_parameter": {
      "begin": `(\\s*+((?:(?:(?:\\[\\[.*?\\]\\]|__attribute(?:__)?\\s*\\(\\s*\\(.*?\\)\\s*\\))|__declspec\\(.*?\\))|alignas\\(.*?\\))(?!\\)))?((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:(?:(?:(?:unsigned)|(?:signed)|(?:short)|(?:long))|(?:(?:struct)|(?:class)|(?:union)|(?:enum)))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*(?:((?:::)?(?:(?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)\\s*+(((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<18>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)\\s*+)?::)*+)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))?(?!(?:(?:transaction_safe_dynamic)|(?:__has_cpp_attribute)|(?:reinterpret_cast)|(?:transaction_safe)|(?:atomic_noexcept)|(?:atomic_commit)|(?:__has_include)|(?:atomic_cancel)|(?:synchronized)|(?:thread_local)|(?:dynamic_cast)|(?:static_cast)|(?:const_cast)|(?:constexpr)|(?:co_return)|(?:constinit)|(?:namespace)|(?:protected)|(?:consteval)|(?:constexpr)|(?:constexpr)|(?:co_return)|(?:consteval)|(?:co_await)|(?:continue)|(?:template)|(?:reflexpr)|(?:volatile)|(?:register)|(?:co_await)|(?:co_yield)|(?:restrict)|(?:noexcept)|(?:volatile)|(?:override)|(?:explicit)|(?:decltype)|(?:operator)|(?:noexcept)|(?:noexcept)|(?:typename)|(?:requires)|(?:co_yield)|(?:nullptr)|(?:alignof)|(?:alignas)|(?:default)|(?:mutable)|(?:virtual)|(?:mutable)|(?:private)|(?:include)|(?:warning)|(?:_Pragma)|(?:defined)|(?:typedef)|(?:__asm__)|(?:concept)|(?:define)|(?:module)|(?:sizeof)|(?:switch)|(?:delete)|(?:pragma)|(?:and_eq)|(?:inline)|(?:xor_eq)|(?:typeid)|(?:import)|(?:extern)|(?:public)|(?:bitand)|(?:static)|(?:export)|(?:return)|(?:friend)|(?:ifndef)|(?:not_eq)|(?:false)|(?:final)|(?:break)|(?:const)|(?:catch)|(?:endif)|(?:ifdef)|(?:undef)|(?:error)|(?:audit)|(?:while)|(?:using)|(?:axiom)|(?:or_eq)|(?:compl)|(?:throw)|(?:bitor)|(?:const)|(?:line)|(?:case)|(?:else)|(?:this)|(?:true)|(?:goto)|(?:else)|(?:NULL)|(?:elif)|(?:new)|(?:asm)|(?:xor)|(?:and)|(?:try)|(?:not)|(?:for)|(?:do)|(?:if)|(?:or)|(?:if))\\b)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*\\b((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<18>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)?(?![\\w<:.]))(((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))?(?:(?:&|\\*)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*(?:&|\\*))?((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(\\()(\\*)(?:\\s+)?((?:(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*)?)(?:\\s+)?(?:(\\[)(\\w*)(\\])(?:\\s+)?)*(\\))(?:\\s+)?(\\()`,
      "beginCaptures": {
        "1": {
          "name": "meta.qualified_type.cpp",
          "patterns": [{
            "match": "::",
            "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.cpp"
          }, {
            "match": "(?<!\\w)(?:(?:struct)|(?:class)|(?:union)|(?:enum))(?!\\w)",
            "name": "storage.type.$0.cpp"
          }, {
            "include": "#attributes_context"
          }, {
            "include": "#storage_types"
          }, {
            "include": "#number_literal"
          }, {
            "include": "#string_context"
          }, {
            "include": "#comma"
          }, {
            "include": "#scope_resolution_inner_generated"
          }, {
            "begin": "<",
            "beginCaptures": {
              "0": {
                "name": "punctuation.section.angle-brackets.begin.template.call.cpp"
              }
            },
            "end": ">",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.angle-brackets.end.template.call.cpp"
              }
            },
            "name": "meta.template.call.cpp",
            "patterns": [{
              "include": "#template_call_context"
            }]
          }, {
            "match": "(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*",
            "name": "entity.name.type.cpp"
          }]
        },
        "2": {
          "patterns": [{
            "include": "#attributes_context"
          }, {
            "include": "#number_literal"
          }]
        },
        "3": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "4": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "5": {
          "name": "comment.block.cpp"
        },
        "6": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "7": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "8": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "9": {
          "name": "comment.block.cpp"
        },
        "10": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "11": {
          "patterns": [{
            "match": "::",
            "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.type.cpp"
          }, {
            "match": "(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)",
            "name": "entity.name.scope-resolution.type.cpp"
          }, {
            "include": "#template_call_range"
          }]
        },
        "12": {
          "patterns": [{
            "include": "#template_call_range"
          }]
        },
        "13": {},
        "14": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "15": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "16": {
          "name": "comment.block.cpp"
        },
        "17": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "18": {},
        "19": {
          "patterns": [{
            "match": "\\*",
            "name": "storage.modifier.pointer.cpp"
          }, {
            "captures": {
              "1": {
                "patterns": [{
                  "include": "#inline_comment"
                }]
              },
              "2": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "3": {
                "name": "comment.block.cpp"
              },
              "4": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "(?:\\&((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))){2,}\\&",
            "name": "invalid.illegal.reference-type.cpp"
          }, {
            "match": "\\&",
            "name": "storage.modifier.reference.cpp"
          }]
        },
        "20": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "21": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "22": {
          "name": "comment.block.cpp"
        },
        "23": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "24": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "25": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "26": {
          "name": "comment.block.cpp"
        },
        "27": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "28": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "29": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "30": {
          "name": "comment.block.cpp"
        },
        "31": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "32": {
          "name": "punctuation.section.parens.begin.bracket.round.function.pointer.cpp"
        },
        "33": {
          "name": "punctuation.definition.function.pointer.dereference.cpp"
        },
        "34": {
          "name": "variable.parameter.pointer.function.cpp"
        },
        "35": {
          "name": "punctuation.definition.begin.bracket.square.cpp"
        },
        "36": {
          "patterns": [{
            "include": "#evaluation_context"
          }]
        },
        "37": {
          "name": "punctuation.definition.end.bracket.square.cpp"
        },
        "38": {
          "name": "punctuation.section.parens.end.bracket.round.function.pointer.cpp"
        },
        "39": {
          "name": "punctuation.section.parameters.begin.bracket.round.function.pointer.cpp"
        }
      },
      "end": "(\\))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?=[{=,);>]|\\n)(?!\\()",
      "endCaptures": {
        "1": {
          "name": "punctuation.section.parameters.end.bracket.round.function.pointer.cpp"
        },
        "2": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "3": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "4": {
          "name": "comment.block.cpp"
        },
        "5": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        }
      },
      "patterns": [{
        "include": "#function_parameter_context"
      }]
    },
    "functional_specifiers_pre_parameters": {
      "match": "(?<!\\w)(?:(?:constexpr)|(?:consteval)|(?:explicit)|(?:mutable)|(?:virtual)|(?:inline)|(?:friend))(?!\\w)",
      "name": "storage.modifier.specifier.functional.pre-parameters.$0.cpp"
    },
    "gcc_attributes": {
      "begin": "__attribute(?:__)?\\s*\\(\\s*\\(",
      "beginCaptures": {
        "0": {
          "name": "punctuation.section.attribute.begin.cpp"
        }
      },
      "end": "\\)\\s*\\)",
      "endCaptures": {
        "0": {
          "name": "punctuation.section.attribute.end.cpp"
        }
      },
      "name": "support.other.attribute.cpp",
      "patterns": [{
        "include": "#attributes_context"
      }, {
        "begin": "\\(",
        "beginCaptures": {},
        "end": "\\)",
        "endCaptures": {},
        "patterns": [{
          "include": "#attributes_context"
        }, {
          "include": "#string_context"
        }, {
          "include": "#ever_present_context"
        }]
      }, {
        "captures": {
          "1": {
            "name": "keyword.other.using.directive.cpp"
          },
          "2": {
            "name": "entity.name.namespace.cpp"
          }
        },
        "match": "(using)\\s+((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))"
      }, {
        "match": ",",
        "name": "punctuation.separator.attribute.cpp"
      }, {
        "match": ":",
        "name": "punctuation.accessor.attribute.cpp"
      }, {
        "match": "(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)(?=::)",
        "name": "entity.name.namespace.cpp"
      }, {
        "match": "(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)",
        "name": "entity.other.attribute.$0.cpp"
      }, {
        "include": "#number_literal"
      }, {
        "include": "#ever_present_context"
      }]
    },
    "goto_statement": {
      "captures": {
        "1": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "2": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "3": {
          "name": "keyword.control.goto.cpp"
        },
        "4": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "5": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "6": {
          "name": "entity.name.label.call.cpp"
        }
      },
      "match": "((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?<!\\w)goto(?!\\w))((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*)"
    },
    "identifier": {
      "match": "(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*"
    },
    "include": {
      "captures": {
        "1": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "2": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "3": {
          "name": "keyword.control.directive.$5.cpp"
        },
        "4": {
          "name": "punctuation.definition.directive.cpp"
        },
        "6": {
          "name": "string.quoted.other.lt-gt.include.cpp"
        },
        "7": {
          "name": "punctuation.definition.string.begin.cpp"
        },
        "8": {
          "name": "punctuation.definition.string.end.cpp"
        },
        "9": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "10": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "11": {
          "name": "string.quoted.double.include.cpp"
        },
        "12": {
          "name": "punctuation.definition.string.begin.cpp"
        },
        "13": {
          "name": "punctuation.definition.string.end.cpp"
        },
        "14": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "15": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "16": {
          "name": "entity.name.other.preprocessor.macro.include.cpp"
        },
        "17": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "18": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "19": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "20": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "21": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "22": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        }
      },
      "match": '^((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((#)(?:\\s+)?((?:include|include_next))\\b)(?:\\s+)?(?:(?:(?:((<)[^>]*(>?)((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:(?:\\n|$)|(?=\\/\\/)))|((\\")[^\\"]*(\\"?)((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:(?:\\n|$)|(?=\\/\\/))))|(((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?:\\.(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*)*((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:(?:\\n|$)|(?=(?:\\/\\/|;)))))|((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:(?:\\n|$)|(?=(?:\\/\\/|;))))',
      "name": "meta.preprocessor.include.cpp"
    },
    "inheritance_context": {
      "patterns": [{
        "include": "#ever_present_context"
      }, {
        "match": ",",
        "name": "punctuation.separator.delimiter.comma.inheritance.cpp"
      }, {
        "match": "(?<!\\w)(?:(?:protected)|(?:private)|(?:public))(?!\\w)",
        "name": "storage.type.modifier.access.$0.cpp"
      }, {
        "match": "(?<!\\w)virtual(?!\\w)",
        "name": "storage.type.modifier.virtual.cpp"
      }, {
        "captures": {
          "1": {
            "name": "meta.qualified_type.cpp",
            "patterns": [{
              "match": "::",
              "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.cpp"
            }, {
              "match": "(?<!\\w)(?:(?:struct)|(?:class)|(?:union)|(?:enum))(?!\\w)",
              "name": "storage.type.$0.cpp"
            }, {
              "include": "#attributes_context"
            }, {
              "include": "#storage_types"
            }, {
              "include": "#number_literal"
            }, {
              "include": "#string_context"
            }, {
              "include": "#comma"
            }, {
              "include": "#scope_resolution_inner_generated"
            }, {
              "begin": "<",
              "beginCaptures": {
                "0": {
                  "name": "punctuation.section.angle-brackets.begin.template.call.cpp"
                }
              },
              "end": ">",
              "endCaptures": {
                "0": {
                  "name": "punctuation.section.angle-brackets.end.template.call.cpp"
                }
              },
              "name": "meta.template.call.cpp",
              "patterns": [{
                "include": "#template_call_context"
              }]
            }, {
              "match": "(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*",
              "name": "entity.name.type.cpp"
            }]
          },
          "2": {
            "patterns": [{
              "include": "#attributes_context"
            }, {
              "include": "#number_literal"
            }]
          },
          "3": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "4": {
            "patterns": [{
              "captures": {
                "1": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "2": {
                  "name": "comment.block.cpp"
                },
                "3": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                }
              },
              "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
            }]
          },
          "5": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "6": {
            "patterns": [{
              "captures": {
                "1": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "2": {
                  "name": "comment.block.cpp"
                },
                "3": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                }
              },
              "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
            }]
          },
          "7": {
            "patterns": [{
              "match": "::",
              "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.type.cpp"
            }, {
              "match": "(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)",
              "name": "entity.name.scope-resolution.type.cpp"
            }, {
              "include": "#template_call_range"
            }]
          },
          "8": {
            "patterns": [{
              "include": "#template_call_range"
            }]
          },
          "9": {},
          "10": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "11": {
            "patterns": [{
              "captures": {
                "1": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "2": {
                  "name": "comment.block.cpp"
                },
                "3": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                }
              },
              "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
            }]
          },
          "12": {}
        },
        "match": `(?<=protected|virtual|private|public|,|:)(?:\\s+)?(?!(?:(?:(?:protected)|(?:private)|(?:public))|virtual))(\\s*+((?:(?:(?:\\[\\[.*?\\]\\]|__attribute(?:__)?\\s*\\(\\s*\\(.*?\\)\\s*\\))|__declspec\\(.*?\\))|alignas\\(.*?\\))(?!\\)))?((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:(?:(?:(?:unsigned)|(?:signed)|(?:short)|(?:long))|(?:(?:struct)|(?:class)|(?:union)|(?:enum)))((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*(?:((?:::)?(?:(?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)\\s*+(((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<12>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)\\s*+)?::)*+)((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))?(?!(?:(?:transaction_safe_dynamic)|(?:__has_cpp_attribute)|(?:reinterpret_cast)|(?:transaction_safe)|(?:atomic_noexcept)|(?:atomic_commit)|(?:__has_include)|(?:atomic_cancel)|(?:synchronized)|(?:thread_local)|(?:dynamic_cast)|(?:static_cast)|(?:const_cast)|(?:constexpr)|(?:co_return)|(?:constinit)|(?:namespace)|(?:protected)|(?:consteval)|(?:constexpr)|(?:constexpr)|(?:co_return)|(?:consteval)|(?:co_await)|(?:continue)|(?:template)|(?:reflexpr)|(?:volatile)|(?:register)|(?:co_await)|(?:co_yield)|(?:restrict)|(?:noexcept)|(?:volatile)|(?:override)|(?:explicit)|(?:decltype)|(?:operator)|(?:noexcept)|(?:noexcept)|(?:typename)|(?:requires)|(?:co_yield)|(?:nullptr)|(?:alignof)|(?:alignas)|(?:default)|(?:mutable)|(?:virtual)|(?:mutable)|(?:private)|(?:include)|(?:warning)|(?:_Pragma)|(?:defined)|(?:typedef)|(?:__asm__)|(?:concept)|(?:define)|(?:module)|(?:sizeof)|(?:switch)|(?:delete)|(?:pragma)|(?:and_eq)|(?:inline)|(?:xor_eq)|(?:typeid)|(?:import)|(?:extern)|(?:public)|(?:bitand)|(?:static)|(?:export)|(?:return)|(?:friend)|(?:ifndef)|(?:not_eq)|(?:false)|(?:final)|(?:break)|(?:const)|(?:catch)|(?:endif)|(?:ifdef)|(?:undef)|(?:error)|(?:audit)|(?:while)|(?:using)|(?:axiom)|(?:or_eq)|(?:compl)|(?:throw)|(?:bitor)|(?:const)|(?:line)|(?:case)|(?:else)|(?:this)|(?:true)|(?:goto)|(?:else)|(?:NULL)|(?:elif)|(?:new)|(?:asm)|(?:xor)|(?:and)|(?:try)|(?:not)|(?:for)|(?:do)|(?:if)|(?:or)|(?:if))\\b)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*\\b((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<12>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)?(?![\\w<:.]))`
      }]
    },
    "inline_builtin_storage_type": {
      "captures": {
        "1": {
          "name": "storage.type.primitive.cpp storage.type.built-in.primitive.cpp"
        },
        "2": {
          "name": "storage.type.cpp storage.type.built-in.cpp"
        },
        "3": {
          "name": "support.type.posix-reserved.pthread.cpp support.type.built-in.posix-reserved.pthread.cpp"
        },
        "4": {
          "name": "support.type.posix-reserved.cpp support.type.built-in.posix-reserved.cpp"
        }
      },
      "match": "\\s*+(?<!\\w)(?:(?:(?:((?:(?:unsigned)|(?:wchar_t)|(?:double)|(?:signed)|(?:short)|(?:float)|(?:auto)|(?:void)|(?:long)|(?:char)|(?:bool)|(?:int)))|((?:(?:uint_least32_t)|(?:uint_least64_t)|(?:uint_least16_t)|(?:uint_fast64_t)|(?:uint_least8_t)|(?:int_least64_t)|(?:int_least32_t)|(?:int_least16_t)|(?:uint_fast16_t)|(?:uint_fast32_t)|(?:int_least8_t)|(?:int_fast16_t)|(?:int_fast32_t)|(?:int_fast64_t)|(?:uint_fast8_t)|(?:int_fast8_t)|(?:suseconds_t)|(?:useconds_t)|(?:uintmax_t)|(?:uintmax_t)|(?:in_port_t)|(?:uintmax_t)|(?:in_addr_t)|(?:blksize_t)|(?:uintptr_t)|(?:intmax_t)|(?:intptr_t)|(?:blkcnt_t)|(?:intmax_t)|(?:u_quad_t)|(?:uint16_t)|(?:uint32_t)|(?:uint64_t)|(?:ssize_t)|(?:fixpt_t)|(?:qaddr_t)|(?:u_short)|(?:int16_t)|(?:int32_t)|(?:int64_t)|(?:uint8_t)|(?:daddr_t)|(?:caddr_t)|(?:swblk_t)|(?:clock_t)|(?:segsz_t)|(?:nlink_t)|(?:time_t)|(?:u_long)|(?:ushort)|(?:quad_t)|(?:mode_t)|(?:size_t)|(?:u_char)|(?:int8_t)|(?:u_int)|(?:uid_t)|(?:off_t)|(?:pid_t)|(?:gid_t)|(?:dev_t)|(?:div_t)|(?:key_t)|(?:ino_t)|(?:id_t)|(?:id_t)|(?:uint))))|((?:(?:pthread_rwlockattr_t)|(?:pthread_mutexattr_t)|(?:pthread_condattr_t)|(?:pthread_rwlock_t)|(?:pthread_mutex_t)|(?:pthread_cond_t)|(?:pthread_attr_t)|(?:pthread_once_t)|(?:pthread_key_t)|(?:pthread_t))))|([a-zA-Z_]\\w*_t))(?!\\w)"
    },
    "inline_comment": {
      "captures": {
        "1": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "2": {
          "name": "comment.block.cpp"
        },
        "3": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        }
      },
      "match": "(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))"
    },
    "invalid_comment_end": {
      "match": "\\*\\/",
      "name": "invalid.illegal.unexpected.punctuation.definition.comment.end.cpp"
    },
    "label": {
      "captures": {
        "1": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "2": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "3": {
          "name": "entity.name.label.cpp"
        },
        "4": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "5": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "6": {
          "name": "punctuation.separator.label.cpp"
        }
      },
      "match": "((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))\\b(?<!case|default)((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(:)"
    },
    "lambdas": {
      "begin": '(?:(?<=[^\\s]|^)(?<![\\w\\]\\)\\[\\*&">])|(?<=\\Wreturn|^return))(?:\\s+)?(\\[(?!\\[| *+"| *+\\d))((?:[^\\[\\]]|((?<!\\[)\\[(?!\\[)(?:[^\\[\\]]*+\\g<3>?)++\\]))*+)(\\](?!((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))[\\[\\];=]))',
      "beginCaptures": {
        "1": {
          "name": "punctuation.definition.capture.begin.lambda.cpp"
        },
        "2": {
          "name": "meta.lambda.capture.cpp",
          "patterns": [{
            "include": "#the_this_keyword"
          }, {
            "captures": {
              "1": {
                "name": "variable.parameter.capture.cpp"
              },
              "2": {
                "patterns": [{
                  "include": "#inline_comment"
                }]
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "4": {
                "name": "comment.block.cpp"
              },
              "5": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              },
              "6": {
                "name": "punctuation.separator.delimiter.comma.cpp"
              },
              "7": {
                "name": "keyword.operator.assignment.cpp"
              }
            },
            "match": "((?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:(?:(?=\\]|\\z|$)|(,))|(\\=))"
          }, {
            "include": "#evaluation_context"
          }]
        },
        "3": {},
        "4": {
          "name": "punctuation.definition.capture.end.lambda.cpp"
        },
        "5": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "6": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "7": {
          "name": "comment.block.cpp"
        },
        "8": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        }
      },
      "end": "(?<=[;}])",
      "endCaptures": {},
      "patterns": [{
        "begin": "\\(",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.parameters.begin.lambda.cpp"
          }
        },
        "end": "\\)",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.parameters.end.lambda.cpp"
          }
        },
        "name": "meta.function.definition.parameters.lambda.cpp",
        "patterns": [{
          "include": "#function_parameter_context"
        }]
      }, {
        "match": "(?<!\\w)(?:(?:constexpr)|(?:consteval)|(?:mutable))(?!\\w)",
        "name": "storage.modifier.lambda.$0.cpp"
      }, {
        "begin": "->",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.lambda.return-type.cpp"
          }
        },
        "end": "(?=\\{)",
        "endCaptures": {},
        "patterns": [{
          "include": "#comments"
        }, {
          "match": "\\S+",
          "name": "storage.type.return-type.lambda.cpp"
        }]
      }, {
        "begin": "\\{",
        "beginCaptures": {
          "0": {
            "name": "punctuation.section.block.begin.bracket.curly.lambda.cpp"
          }
        },
        "end": "\\}",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.block.end.bracket.curly.lambda.cpp"
          }
        },
        "name": "meta.function.definition.body.lambda.cpp",
        "patterns": [{
          "include": "$self"
        }]
      }]
    },
    "language_constants": {
      "match": "(?<!\\w)(?:(?:nullptr)|(?:false)|(?:NULL)|(?:true))(?!\\w)",
      "name": "constant.language.$0.cpp"
    },
    "line": {
      "begin": "^((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(#)(?:\\s+)?line\\b",
      "beginCaptures": {
        "0": {
          "name": "keyword.control.directive.line.cpp"
        },
        "1": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "2": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "3": {
          "name": "comment.block.cpp"
        },
        "4": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "5": {
          "name": "punctuation.definition.directive.cpp"
        }
      },
      "end": "(?<!\\\\)(?:(?=\\n)|(?<=^\\n|[^\\\\]\\n)(?=$))",
      "endCaptures": {},
      "name": "meta.preprocessor.line.cpp",
      "patterns": [{
        "include": "#string_context"
      }, {
        "include": "#preprocessor_number_literal"
      }, {
        "include": "#line_continuation_character"
      }]
    },
    "line_comment": {
      "begin": "\\s*+(\\/\\/)",
      "beginCaptures": {
        "1": {
          "name": "punctuation.definition.comment.cpp"
        }
      },
      "end": "(?<!\\\\)(?:(?=\\n)|(?<=^\\n|[^\\\\]\\n)(?=$))",
      "endCaptures": {},
      "name": "comment.line.double-slash.cpp",
      "patterns": [{
        "include": "#line_continuation_character"
      }]
    },
    "line_continuation_character": {
      "match": "\\\\\\n",
      "name": "constant.character.escape.line-continuation.cpp"
    },
    "macro": {
      "begin": "(^((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(#)(?:\\s+)?define\\b)(?:\\s+)?((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))",
      "beginCaptures": {
        "1": {
          "name": "keyword.control.directive.define.cpp"
        },
        "2": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "3": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "4": {
          "name": "comment.block.cpp"
        },
        "5": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "6": {
          "name": "punctuation.definition.directive.cpp"
        },
        "7": {
          "name": "entity.name.function.preprocessor.cpp"
        }
      },
      "end": "(?<!\\\\)(?:(?=\\n)|(?<=^\\n|[^\\\\]\\n)(?=$))",
      "endCaptures": {},
      "name": "meta.preprocessor.macro.cpp",
      "patterns": [{
        "captures": {
          "1": {
            "name": "punctuation.definition.parameters.begin.preprocessor.cpp"
          },
          "2": {
            "name": "meta.function.preprocessor.parameters.cpp",
            "patterns": [{
              "captures": {
                "1": {
                  "name": "variable.parameter.preprocessor.cpp"
                }
              },
              "match": "(?<=[(,])(?:\\s+)?((?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*)(?:\\s+)?"
            }, {
              "match": ",",
              "name": "punctuation.separator.parameters.cpp"
            }, {
              "match": "\\.\\.\\.",
              "name": "punctuation.vararg-ellipses.variable.parameter.preprocessor.cpp"
            }]
          },
          "3": {
            "name": "punctuation.definition.parameters.end.preprocessor.cpp"
          }
        },
        "match": "\\G(?:\\s+)?(\\()([^\\(]*)(\\))"
      }, {
        "include": "#macro_context"
      }, {
        "include": "#macro_argument"
      }]
    },
    "macro_argument": {
      "match": "##?(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)",
      "name": "variable.other.macro.argument.cpp"
    },
    "macro_context": {
      "patterns": [{
        "include": "source.cpp.embedded.macro"
      }]
    },
    "macro_name": {
      "match": "(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)",
      "name": "entity.name.function.preprocessor.cpp"
    },
    "member_access": {
      "captures": {
        "1": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "2": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "3": {
          "name": "variable.language.this.cpp"
        },
        "4": {
          "name": "variable.other.object.access.cpp"
        },
        "5": {
          "name": "punctuation.separator.dot-access.cpp"
        },
        "6": {
          "name": "punctuation.separator.pointer-access.cpp"
        },
        "7": {
          "patterns": [{
            "captures": {
              "1": {
                "patterns": [{
                  "include": "#inline_comment"
                }]
              },
              "2": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "3": {
                "name": "comment.block.cpp"
              },
              "4": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              },
              "5": {
                "name": "variable.language.this.cpp"
              },
              "6": {
                "name": "variable.other.object.property.cpp"
              },
              "7": {
                "name": "punctuation.separator.dot-access.cpp"
              },
              "8": {
                "name": "punctuation.separator.pointer-access.cpp"
              }
            },
            "match": "(?<=(?:\\.\\*|\\.|->|->\\*))(?:\\s+)?(?:((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?<!\\w)this(?!\\w))|((?:(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*|(?<=\\]|\\)))(?:\\s+)?))(?:((?:\\.\\*|\\.))|((?:->\\*|->)))"
          }, {
            "captures": {
              "1": {
                "patterns": [{
                  "include": "#inline_comment"
                }]
              },
              "2": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "3": {
                "name": "comment.block.cpp"
              },
              "4": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              },
              "5": {
                "name": "variable.language.this.cpp"
              },
              "6": {
                "name": "variable.other.object.access.cpp"
              },
              "7": {
                "name": "punctuation.separator.dot-access.cpp"
              },
              "8": {
                "name": "punctuation.separator.pointer-access.cpp"
              }
            },
            "match": "(?:((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?<!\\w)this(?!\\w))|((?:(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*|(?<=\\]|\\)))(?:\\s+)?))(?:((?:\\.\\*|\\.))|((?:->\\*|->)))"
          }, {
            "include": "#member_access"
          }, {
            "include": "#method_access"
          }]
        },
        "8": {
          "name": "variable.other.property.cpp"
        }
      },
      "match": "(?:((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?<!\\w)this(?!\\w))|((?:(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*|(?<=\\]|\\)))(?:\\s+)?))(?:((?:\\.\\*|\\.))|((?:->\\*|->)))((?:(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?:\\s+)?(?:(?:\\.\\*|\\.)|(?:->\\*|->))(?:\\s+)?)*)(?:\\s+)?(\\b(?!uint_least32_t[^\\w]|uint_least16_t[^\\w]|uint_least64_t[^\\w]|int_least32_t[^\\w]|int_least64_t[^\\w]|uint_fast32_t[^\\w]|uint_fast64_t[^\\w]|uint_least8_t[^\\w]|uint_fast16_t[^\\w]|int_least16_t[^\\w]|int_fast16_t[^\\w]|int_least8_t[^\\w]|uint_fast8_t[^\\w]|int_fast64_t[^\\w]|int_fast32_t[^\\w]|int_fast8_t[^\\w]|suseconds_t[^\\w]|useconds_t[^\\w]|in_addr_t[^\\w]|uintmax_t[^\\w]|uintmax_t[^\\w]|uintmax_t[^\\w]|in_port_t[^\\w]|uintptr_t[^\\w]|blksize_t[^\\w]|uint32_t[^\\w]|uint64_t[^\\w]|u_quad_t[^\\w]|intmax_t[^\\w]|intmax_t[^\\w]|unsigned[^\\w]|blkcnt_t[^\\w]|uint16_t[^\\w]|intptr_t[^\\w]|swblk_t[^\\w]|wchar_t[^\\w]|u_short[^\\w]|qaddr_t[^\\w]|caddr_t[^\\w]|daddr_t[^\\w]|fixpt_t[^\\w]|nlink_t[^\\w]|segsz_t[^\\w]|clock_t[^\\w]|ssize_t[^\\w]|int16_t[^\\w]|int32_t[^\\w]|int64_t[^\\w]|uint8_t[^\\w]|int8_t[^\\w]|mode_t[^\\w]|quad_t[^\\w]|ushort[^\\w]|u_long[^\\w]|u_char[^\\w]|double[^\\w]|signed[^\\w]|time_t[^\\w]|size_t[^\\w]|key_t[^\\w]|div_t[^\\w]|ino_t[^\\w]|uid_t[^\\w]|gid_t[^\\w]|off_t[^\\w]|pid_t[^\\w]|float[^\\w]|dev_t[^\\w]|u_int[^\\w]|short[^\\w]|bool[^\\w]|id_t[^\\w]|uint[^\\w]|long[^\\w]|char[^\\w]|void[^\\w]|auto[^\\w]|id_t[^\\w]|int[^\\w])(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*\\b(?!\\())"
    },
    "memory_operators": {
      "captures": {
        "1": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "2": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "3": {
          "name": "keyword.operator.wordlike.cpp"
        },
        "4": {
          "name": "keyword.operator.delete.array.cpp"
        },
        "5": {
          "name": "keyword.operator.delete.array.bracket.cpp"
        },
        "6": {
          "name": "keyword.operator.delete.cpp"
        },
        "7": {
          "name": "keyword.operator.new.cpp"
        }
      },
      "match": "((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?:(?:(delete)(?:\\s+)?(\\[\\])|(delete))|(new))(?!\\w))"
    },
    "method_access": {
      "begin": "(?:((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?<!\\w)this(?!\\w))|((?:(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*|(?<=\\]|\\)))(?:\\s+)?))(?:((?:\\.\\*|\\.))|((?:->\\*|->)))((?:(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?:\\s+)?(?:(?:\\.\\*|\\.)|(?:->\\*|->))(?:\\s+)?)*)(?:\\s+)?(~?(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*)(?:\\s+)?(\\()",
      "beginCaptures": {
        "1": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "2": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "3": {
          "name": "comment.block.cpp"
        },
        "4": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "5": {
          "name": "variable.language.this.cpp"
        },
        "6": {
          "name": "variable.other.object.access.cpp"
        },
        "7": {
          "name": "punctuation.separator.dot-access.cpp"
        },
        "8": {
          "name": "punctuation.separator.pointer-access.cpp"
        },
        "9": {
          "patterns": [{
            "captures": {
              "1": {
                "patterns": [{
                  "include": "#inline_comment"
                }]
              },
              "2": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "3": {
                "name": "comment.block.cpp"
              },
              "4": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              },
              "5": {
                "name": "variable.language.this.cpp"
              },
              "6": {
                "name": "variable.other.object.property.cpp"
              },
              "7": {
                "name": "punctuation.separator.dot-access.cpp"
              },
              "8": {
                "name": "punctuation.separator.pointer-access.cpp"
              }
            },
            "match": "(?<=(?:\\.\\*|\\.|->|->\\*))(?:\\s+)?(?:((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?<!\\w)this(?!\\w))|((?:(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*|(?<=\\]|\\)))(?:\\s+)?))(?:((?:\\.\\*|\\.))|((?:->\\*|->)))"
          }, {
            "captures": {
              "1": {
                "patterns": [{
                  "include": "#inline_comment"
                }]
              },
              "2": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "3": {
                "name": "comment.block.cpp"
              },
              "4": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              },
              "5": {
                "name": "variable.language.this.cpp"
              },
              "6": {
                "name": "variable.other.object.access.cpp"
              },
              "7": {
                "name": "punctuation.separator.dot-access.cpp"
              },
              "8": {
                "name": "punctuation.separator.pointer-access.cpp"
              }
            },
            "match": "(?:((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?<!\\w)this(?!\\w))|((?:(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*|(?<=\\]|\\)))(?:\\s+)?))(?:((?:\\.\\*|\\.))|((?:->\\*|->)))"
          }, {
            "include": "#member_access"
          }, {
            "include": "#method_access"
          }]
        },
        "10": {
          "name": "entity.name.function.member.cpp"
        },
        "11": {
          "name": "punctuation.section.arguments.begin.bracket.round.function.member.cpp"
        }
      },
      "end": "\\)",
      "endCaptures": {
        "0": {
          "name": "punctuation.section.arguments.end.bracket.round.function.member.cpp"
        }
      },
      "patterns": [{
        "include": "#evaluation_context"
      }]
    },
    "misc_keywords": {
      "captures": {
        "1": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "2": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "3": {
          "name": "keyword.other.$3.cpp"
        }
      },
      "match": "((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?<!\\w)(?:(?:constinit)|(?:requires)|(?:typedef)|(?:concept)|(?:export)|(?:module))(?!\\w))"
    },
    "ms_attributes": {
      "begin": "__declspec\\(",
      "beginCaptures": {
        "0": {
          "name": "punctuation.section.attribute.begin.cpp"
        }
      },
      "end": "\\)",
      "endCaptures": {
        "0": {
          "name": "punctuation.section.attribute.end.cpp"
        }
      },
      "name": "support.other.attribute.cpp",
      "patterns": [{
        "include": "#attributes_context"
      }, {
        "begin": "\\(",
        "beginCaptures": {},
        "end": "\\)",
        "endCaptures": {},
        "patterns": [{
          "include": "#attributes_context"
        }, {
          "include": "#string_context"
        }, {
          "include": "#ever_present_context"
        }]
      }, {
        "captures": {
          "1": {
            "name": "keyword.other.using.directive.cpp"
          },
          "2": {
            "name": "entity.name.namespace.cpp"
          }
        },
        "match": "(using)\\s+((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))"
      }, {
        "match": ",",
        "name": "punctuation.separator.attribute.cpp"
      }, {
        "match": ":",
        "name": "punctuation.accessor.attribute.cpp"
      }, {
        "match": "(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)(?=::)",
        "name": "entity.name.namespace.cpp"
      }, {
        "match": "(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)",
        "name": "entity.other.attribute.$0.cpp"
      }, {
        "include": "#number_literal"
      }, {
        "include": "#ever_present_context"
      }]
    },
    "namespace_alias": {
      "captures": {
        "1": {
          "name": "keyword.other.namespace.alias.cpp storage.type.namespace.alias.cpp"
        },
        "2": {
          "name": "entity.name.namespace.alias.cpp"
        },
        "3": {
          "name": "keyword.operator.assignment.cpp"
        },
        "4": {
          "name": "meta.declaration.namespace.alias.value.cpp"
        },
        "5": {
          "patterns": [{
            "include": "#scope_resolution_namespace_alias_inner_generated"
          }]
        },
        "6": {
          "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.namespace.alias.cpp"
        },
        "7": {
          "patterns": [{
            "include": "#template_call_range"
          }]
        },
        "9": {
          "name": "entity.name.namespace.cpp"
        },
        "10": {
          "name": "punctuation.terminator.statement.cpp"
        }
      },
      "match": `(?<!\\w)(namespace)\\s+((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))(?:\\s+)?(\\=)(?:\\s+)?(((::)?(?:(?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)\\s*+(((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<8>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)\\s*+)?::)*\\s*+)(?:\\s+)?((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))(?:\\s+)?(?:(;)|\\n))`,
      "name": "meta.declaration.namespace.alias.cpp"
    },
    "namespace_block": {
      "begin": "((?<!\\w)namespace(?!\\w))",
      "beginCaptures": {
        "0": {
          "name": "meta.head.namespace.cpp"
        },
        "1": {
          "name": "keyword.other.namespace.definition.cpp storage.type.namespace.definition.cpp"
        }
      },
      "end": "(?:(?<=\\}|%>|\\?\\?>)|(?=[;>\\[\\]=]))",
      "endCaptures": {},
      "name": "meta.block.namespace.cpp",
      "patterns": [{
        "begin": "\\G ?",
        "beginCaptures": {},
        "end": "(?:\\{|<%|\\?\\?<|(?=;))",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.block.begin.bracket.curly.namespace.cpp"
          }
        },
        "name": "meta.head.namespace.cpp",
        "patterns": [{
          "include": "#ever_present_context"
        }, {
          "include": "#attributes_context"
        }, {
          "captures": {
            "1": {
              "patterns": [{
                "include": "#scope_resolution_namespace_block_inner_generated"
              }]
            },
            "2": {
              "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.namespace.block.cpp"
            },
            "3": {
              "patterns": [{
                "include": "#template_call_range"
              }]
            },
            "4": {},
            "5": {
              "name": "entity.name.namespace.cpp"
            },
            "6": {
              "name": "punctuation.separator.scope-resolution.namespace.block.cpp"
            },
            "7": {
              "name": "storage.modifier.inline.cpp"
            }
          },
          "match": `((::)?(?:(?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)\\s*+(((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<4>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)\\s*+)?::)*\\s*+)(?:\\s+)?((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))(?:\\s+)?(?:(::)(?:\\s+)?(inline))?`
        }]
      }, {
        "begin": "(?<=\\{|<%|\\?\\?<)",
        "beginCaptures": {},
        "end": "\\}|%>|\\?\\?>",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.block.end.bracket.curly.namespace.cpp"
          }
        },
        "name": "meta.body.namespace.cpp",
        "patterns": [{
          "include": "$self"
        }]
      }, {
        "begin": "(?<=\\}|%>|\\?\\?>)[\\s]*",
        "beginCaptures": {},
        "end": "[\\s]*(?=;)",
        "endCaptures": {},
        "name": "meta.tail.namespace.cpp",
        "patterns": [{
          "include": "$self"
        }]
      }]
    },
    "noexcept_operator": {
      "begin": "((?<!\\w)noexcept(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(\\()",
      "beginCaptures": {
        "1": {
          "name": "keyword.operator.functionlike.cpp keyword.operator.noexcept.cpp"
        },
        "2": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "3": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "4": {
          "name": "comment.block.cpp"
        },
        "5": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "6": {
          "name": "punctuation.section.arguments.begin.bracket.round.operator.noexcept.cpp"
        }
      },
      "contentName": "meta.arguments.operator.noexcept",
      "end": "\\)",
      "endCaptures": {
        "0": {
          "name": "punctuation.section.arguments.end.bracket.round.operator.noexcept.cpp"
        }
      },
      "patterns": [{
        "include": "#evaluation_context"
      }]
    },
    "number_literal": {
      "captures": {
        "0": {
          "patterns": [{
            "begin": "(?=.)",
            "beginCaptures": {},
            "end": "$",
            "endCaptures": {},
            "patterns": [{
              "captures": {
                "1": {
                  "name": "keyword.other.unit.hexadecimal.cpp"
                },
                "2": {
                  "name": "constant.numeric.hexadecimal.cpp",
                  "patterns": [{
                    "match": "(?<=[0-9a-fA-F])'(?=[0-9a-fA-F])",
                    "name": "punctuation.separator.constant.numeric.cpp"
                  }]
                },
                "3": {
                  "name": "punctuation.separator.constant.numeric.cpp"
                },
                "4": {
                  "name": "constant.numeric.hexadecimal.cpp"
                },
                "5": {
                  "name": "constant.numeric.hexadecimal.cpp",
                  "patterns": [{
                    "match": "(?<=[0-9a-fA-F])'(?=[0-9a-fA-F])",
                    "name": "punctuation.separator.constant.numeric.cpp"
                  }]
                },
                "6": {
                  "name": "punctuation.separator.constant.numeric.cpp"
                },
                "7": {
                  "name": "keyword.other.unit.exponent.hexadecimal.cpp"
                },
                "8": {
                  "name": "keyword.operator.plus.exponent.hexadecimal.cpp"
                },
                "9": {
                  "name": "keyword.operator.minus.exponent.hexadecimal.cpp"
                },
                "10": {
                  "name": "constant.numeric.exponent.hexadecimal.cpp",
                  "patterns": [{
                    "match": "(?<=[0-9a-fA-F])'(?=[0-9a-fA-F])",
                    "name": "punctuation.separator.constant.numeric.cpp"
                  }]
                },
                "11": {
                  "name": "keyword.other.suffix.literal.built-in.floating-point.cpp keyword.other.unit.suffix.floating-point.cpp"
                },
                "12": {
                  "name": "keyword.other.suffix.literal.user-defined.integer.cpp keyword.other.unit.user-defined.cpp"
                }
              },
              "match": "(\\G0[xX])([0-9a-fA-F](?:[0-9a-fA-F]|((?<=[0-9a-fA-F])'(?=[0-9a-fA-F])))*)?((?:(?<=[0-9a-fA-F])\\.|\\.(?=[0-9a-fA-F])))([0-9a-fA-F](?:[0-9a-fA-F]|((?<=[0-9a-fA-F])'(?=[0-9a-fA-F])))*)?(?:(?<!')([pP])(\\+?)(\\-?)([0-9](?:[0-9]|(?<=[0-9a-fA-F])'(?=[0-9a-fA-F]))*))?([lLfF](?!\\w))?((?:\\w(?<![0-9a-fA-FpP])\\w*)?$)"
            }, {
              "captures": {
                "1": {
                  "name": "constant.numeric.decimal.cpp",
                  "patterns": [{
                    "match": "(?<=[0-9a-fA-F])'(?=[0-9a-fA-F])",
                    "name": "punctuation.separator.constant.numeric.cpp"
                  }]
                },
                "2": {
                  "name": "punctuation.separator.constant.numeric.cpp"
                },
                "3": {
                  "name": "constant.numeric.decimal.point.cpp"
                },
                "4": {
                  "name": "constant.numeric.decimal.cpp",
                  "patterns": [{
                    "match": "(?<=[0-9a-fA-F])'(?=[0-9a-fA-F])",
                    "name": "punctuation.separator.constant.numeric.cpp"
                  }]
                },
                "5": {
                  "name": "punctuation.separator.constant.numeric.cpp"
                },
                "6": {
                  "name": "keyword.other.unit.exponent.decimal.cpp"
                },
                "7": {
                  "name": "keyword.operator.plus.exponent.decimal.cpp"
                },
                "8": {
                  "name": "keyword.operator.minus.exponent.decimal.cpp"
                },
                "9": {
                  "name": "constant.numeric.exponent.decimal.cpp",
                  "patterns": [{
                    "match": "(?<=[0-9a-fA-F])'(?=[0-9a-fA-F])",
                    "name": "punctuation.separator.constant.numeric.cpp"
                  }]
                },
                "10": {
                  "name": "keyword.other.suffix.literal.built-in.floating-point.cpp keyword.other.unit.suffix.floating-point.cpp"
                },
                "11": {
                  "name": "keyword.other.suffix.literal.user-defined.integer.cpp keyword.other.unit.user-defined.cpp"
                }
              },
              "match": "\\G(?=[0-9.])(?!0[xXbB])([0-9](?:[0-9]|((?<=[0-9a-fA-F])'(?=[0-9a-fA-F])))*)?((?:(?<=[0-9])\\.|\\.(?=[0-9])))([0-9](?:[0-9]|((?<=[0-9a-fA-F])'(?=[0-9a-fA-F])))*)?(?:(?<!')([eE])(\\+?)(\\-?)([0-9](?:[0-9]|(?<=[0-9a-fA-F])'(?=[0-9a-fA-F]))*))?([lLfF](?!\\w))?((?:\\w(?<![0-9eE])\\w*)?$)"
            }, {
              "captures": {
                "1": {
                  "name": "keyword.other.unit.binary.cpp"
                },
                "2": {
                  "name": "constant.numeric.binary.cpp",
                  "patterns": [{
                    "match": "(?<=[0-9a-fA-F])'(?=[0-9a-fA-F])",
                    "name": "punctuation.separator.constant.numeric.cpp"
                  }]
                },
                "3": {
                  "name": "punctuation.separator.constant.numeric.cpp"
                },
                "4": {
                  "name": "keyword.other.suffix.literal.built-in.integer.cpp keyword.other.unit.suffix.integer.cpp"
                },
                "5": {
                  "name": "keyword.other.suffix.literal.user-defined.integer.cpp keyword.other.unit.user-defined.cpp"
                }
              },
              "match": "(\\G0[bB])([01](?:[01]|((?<=[0-9a-fA-F])'(?=[0-9a-fA-F])))*)((?:[uU]|(?:[uU]ll?)|(?:[uU]LL?)|(?:ll?[uU]?)|(?:LL?[uU]?)|[fF])(?!\\w))?((?:\\w(?<![0-9])\\w*)?$)"
            }, {
              "captures": {
                "1": {
                  "name": "keyword.other.unit.octal.cpp"
                },
                "2": {
                  "name": "constant.numeric.octal.cpp",
                  "patterns": [{
                    "match": "(?<=[0-9a-fA-F])'(?=[0-9a-fA-F])",
                    "name": "punctuation.separator.constant.numeric.cpp"
                  }]
                },
                "3": {
                  "name": "punctuation.separator.constant.numeric.cpp"
                },
                "4": {
                  "name": "keyword.other.suffix.literal.built-in.integer.cpp keyword.other.unit.suffix.integer.cpp"
                },
                "5": {
                  "name": "keyword.other.suffix.literal.user-defined.integer.cpp keyword.other.unit.user-defined.cpp"
                }
              },
              "match": "(\\G0)((?:[0-7]|((?<=[0-9a-fA-F])'(?=[0-9a-fA-F])))+)((?:[uU]|(?:[uU]ll?)|(?:[uU]LL?)|(?:ll?[uU]?)|(?:LL?[uU]?)|[fF])(?!\\w))?((?:\\w(?<![0-9])\\w*)?$)"
            }, {
              "captures": {
                "1": {
                  "name": "keyword.other.unit.hexadecimal.cpp"
                },
                "2": {
                  "name": "constant.numeric.hexadecimal.cpp",
                  "patterns": [{
                    "match": "(?<=[0-9a-fA-F])'(?=[0-9a-fA-F])",
                    "name": "punctuation.separator.constant.numeric.cpp"
                  }]
                },
                "3": {
                  "name": "punctuation.separator.constant.numeric.cpp"
                },
                "4": {
                  "name": "keyword.other.unit.exponent.hexadecimal.cpp"
                },
                "5": {
                  "name": "keyword.operator.plus.exponent.hexadecimal.cpp"
                },
                "6": {
                  "name": "keyword.operator.minus.exponent.hexadecimal.cpp"
                },
                "7": {
                  "name": "constant.numeric.exponent.hexadecimal.cpp",
                  "patterns": [{
                    "match": "(?<=[0-9a-fA-F])'(?=[0-9a-fA-F])",
                    "name": "punctuation.separator.constant.numeric.cpp"
                  }]
                },
                "8": {
                  "name": "keyword.other.suffix.literal.built-in.integer.cpp keyword.other.unit.suffix.integer.cpp"
                },
                "9": {
                  "name": "keyword.other.suffix.literal.user-defined.integer.cpp keyword.other.unit.user-defined.cpp"
                }
              },
              "match": "(\\G0[xX])([0-9a-fA-F](?:[0-9a-fA-F]|((?<=[0-9a-fA-F])'(?=[0-9a-fA-F])))*)(?:(?<!')([pP])(\\+?)(\\-?)([0-9](?:[0-9]|(?<=[0-9a-fA-F])'(?=[0-9a-fA-F]))*))?((?:[uU]|(?:[uU]ll?)|(?:[uU]LL?)|(?:ll?[uU]?)|(?:LL?[uU]?)|[fF])(?!\\w))?((?:\\w(?<![0-9a-fA-FpP])\\w*)?$)"
            }, {
              "captures": {
                "1": {
                  "name": "constant.numeric.decimal.cpp",
                  "patterns": [{
                    "match": "(?<=[0-9a-fA-F])'(?=[0-9a-fA-F])",
                    "name": "punctuation.separator.constant.numeric.cpp"
                  }]
                },
                "2": {
                  "name": "punctuation.separator.constant.numeric.cpp"
                },
                "3": {
                  "name": "keyword.other.unit.exponent.decimal.cpp"
                },
                "4": {
                  "name": "keyword.operator.plus.exponent.decimal.cpp"
                },
                "5": {
                  "name": "keyword.operator.minus.exponent.decimal.cpp"
                },
                "6": {
                  "name": "constant.numeric.exponent.decimal.cpp",
                  "patterns": [{
                    "match": "(?<=[0-9a-fA-F])'(?=[0-9a-fA-F])",
                    "name": "punctuation.separator.constant.numeric.cpp"
                  }]
                },
                "7": {
                  "name": "keyword.other.suffix.literal.built-in.integer.cpp keyword.other.unit.suffix.integer.cpp"
                },
                "8": {
                  "name": "keyword.other.suffix.literal.user-defined.integer.cpp keyword.other.unit.user-defined.cpp"
                }
              },
              "match": "\\G(?=[0-9.])(?!0[xXbB])([0-9](?:[0-9]|((?<=[0-9a-fA-F])'(?=[0-9a-fA-F])))*)(?:(?<!')([eE])(\\+?)(\\-?)([0-9](?:[0-9]|(?<=[0-9a-fA-F])'(?=[0-9a-fA-F]))*))?((?:[uU]|(?:[uU]ll?)|(?:[uU]LL?)|(?:ll?[uU]?)|(?:LL?[uU]?)|[fF])(?!\\w))?((?:\\w(?<![0-9eE])\\w*)?$)"
            }, {
              "match": "(?:(?:[0-9a-zA-Z_\\.]|')|(?<=[eEpP])[+-])+",
              "name": "invalid.illegal.constant.numeric.cpp"
            }]
          }]
        }
      },
      "match": "(?<!\\w)\\.?\\d(?:(?:[0-9a-zA-Z_\\.]|')|(?<=[eEpP])[+-])*"
    },
    "operator_overload": {
      "begin": `((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:(\\s*+((?:(?:(?:\\[\\[.*?\\]\\]|__attribute(?:__)?\\s*\\(\\s*\\(.*?\\)\\s*\\))|__declspec\\(.*?\\))|alignas\\(.*?\\))(?!\\)))?((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:(?:(?:(?:unsigned)|(?:signed)|(?:short)|(?:long))|(?:(?:struct)|(?:class)|(?:union)|(?:enum)))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*(?:((?:::)?(?:(?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)\\s*+(((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<55>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)\\s*+)?::)*+)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))?(?!(?:(?:transaction_safe_dynamic)|(?:__has_cpp_attribute)|(?:reinterpret_cast)|(?:transaction_safe)|(?:atomic_noexcept)|(?:atomic_commit)|(?:__has_include)|(?:atomic_cancel)|(?:synchronized)|(?:thread_local)|(?:dynamic_cast)|(?:static_cast)|(?:const_cast)|(?:constexpr)|(?:co_return)|(?:constinit)|(?:namespace)|(?:protected)|(?:consteval)|(?:constexpr)|(?:constexpr)|(?:co_return)|(?:consteval)|(?:co_await)|(?:continue)|(?:template)|(?:reflexpr)|(?:volatile)|(?:register)|(?:co_await)|(?:co_yield)|(?:restrict)|(?:noexcept)|(?:volatile)|(?:override)|(?:explicit)|(?:decltype)|(?:operator)|(?:noexcept)|(?:noexcept)|(?:typename)|(?:requires)|(?:co_yield)|(?:nullptr)|(?:alignof)|(?:alignas)|(?:default)|(?:mutable)|(?:virtual)|(?:mutable)|(?:private)|(?:include)|(?:warning)|(?:_Pragma)|(?:defined)|(?:typedef)|(?:__asm__)|(?:concept)|(?:define)|(?:module)|(?:sizeof)|(?:switch)|(?:delete)|(?:pragma)|(?:and_eq)|(?:inline)|(?:xor_eq)|(?:typeid)|(?:import)|(?:extern)|(?:public)|(?:bitand)|(?:static)|(?:export)|(?:return)|(?:friend)|(?:ifndef)|(?:not_eq)|(?:false)|(?:final)|(?:break)|(?:const)|(?:catch)|(?:endif)|(?:ifdef)|(?:undef)|(?:error)|(?:audit)|(?:while)|(?:using)|(?:axiom)|(?:or_eq)|(?:compl)|(?:throw)|(?:bitor)|(?:const)|(?:line)|(?:case)|(?:else)|(?:this)|(?:true)|(?:goto)|(?:else)|(?:NULL)|(?:elif)|(?:new)|(?:asm)|(?:xor)|(?:and)|(?:try)|(?:not)|(?:for)|(?:do)|(?:if)|(?:or)|(?:if))\\b)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*\\b((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<55>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)?(?![\\w<:.]))(((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))?(?:(?:&|\\*)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*(?:&|\\*))?((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))?((?:__cdecl|__clrcall|__stdcall|__fastcall|__thiscall|__vectorcall)?)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?:::)?(?:(?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)\\s*+(((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<55>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)\\s*+)?::)*+)(operator)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?:::)?(?:(?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)\\s*+(((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<55>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)\\s*+)?::)*+)(?:(?:((?:(?:delete\\[\\])|(?:delete)|(?:new\\[\\])|(?:<=>)|(?:<<=)|(?:new)|(?:>>=)|(?:\\->\\*)|(?:\\/=)|(?:%=)|(?:&=)|(?:>=)|(?:\\|=)|(?:\\+\\+)|(?:\\-\\-)|(?:\\(\\))|(?:\\[\\])|(?:\\->)|(?:\\+\\+)|(?:<<)|(?:>>)|(?:\\-\\-)|(?:<=)|(?:\\^=)|(?:==)|(?:!=)|(?:&&)|(?:\\|\\|)|(?:\\+=)|(?:\\-=)|(?:\\*=)|,|\\+|\\-|!|~|\\*|&|\\*|\\/|%|\\+|\\-|<|>|&|\\^|\\||=))|((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)(((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))?(?:(?:&|\\*)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*(?:&|\\*))?((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?:\\[\\])?)))|("")((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?=\\<|\\()`,
      "beginCaptures": {
        "0": {
          "name": "meta.head.function.definition.special.operator-overload.cpp"
        },
        "1": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "2": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "3": {
          "name": "comment.block.cpp"
        },
        "4": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "5": {
          "name": "meta.qualified_type.cpp",
          "patterns": [{
            "match": "::",
            "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.cpp"
          }, {
            "match": "(?<!\\w)(?:(?:struct)|(?:class)|(?:union)|(?:enum))(?!\\w)",
            "name": "storage.type.$0.cpp"
          }, {
            "include": "#attributes_context"
          }, {
            "include": "#storage_types"
          }, {
            "include": "#number_literal"
          }, {
            "include": "#string_context"
          }, {
            "include": "#comma"
          }, {
            "include": "#scope_resolution_inner_generated"
          }, {
            "begin": "<",
            "beginCaptures": {
              "0": {
                "name": "punctuation.section.angle-brackets.begin.template.call.cpp"
              }
            },
            "end": ">",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.angle-brackets.end.template.call.cpp"
              }
            },
            "name": "meta.template.call.cpp",
            "patterns": [{
              "include": "#template_call_context"
            }]
          }, {
            "match": "(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*",
            "name": "entity.name.type.cpp"
          }]
        },
        "6": {
          "patterns": [{
            "include": "#attributes_context"
          }, {
            "include": "#number_literal"
          }]
        },
        "7": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "8": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "9": {
          "name": "comment.block.cpp"
        },
        "10": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "11": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "12": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "13": {
          "name": "comment.block.cpp"
        },
        "14": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "15": {
          "patterns": [{
            "match": "::",
            "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.type.cpp"
          }, {
            "match": "(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)",
            "name": "entity.name.scope-resolution.type.cpp"
          }, {
            "include": "#template_call_range"
          }]
        },
        "16": {
          "patterns": [{
            "include": "#template_call_range"
          }]
        },
        "17": {},
        "18": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "19": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "20": {
          "name": "comment.block.cpp"
        },
        "21": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "22": {},
        "23": {
          "patterns": [{
            "match": "\\*",
            "name": "storage.modifier.pointer.cpp"
          }, {
            "captures": {
              "1": {
                "patterns": [{
                  "include": "#inline_comment"
                }]
              },
              "2": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "3": {
                "name": "comment.block.cpp"
              },
              "4": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "(?:\\&((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))){2,}\\&",
            "name": "invalid.illegal.reference-type.cpp"
          }, {
            "match": "\\&",
            "name": "storage.modifier.reference.cpp"
          }]
        },
        "24": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "25": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "26": {
          "name": "comment.block.cpp"
        },
        "27": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "28": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "29": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "30": {
          "name": "comment.block.cpp"
        },
        "31": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "32": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "33": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "34": {
          "name": "comment.block.cpp"
        },
        "35": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "36": {
          "name": "storage.type.modifier.calling-convention.cpp"
        },
        "37": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "38": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "39": {
          "name": "comment.block.cpp"
        },
        "40": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "41": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "42": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "43": {
          "name": "comment.block.cpp"
        },
        "44": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "45": {
          "patterns": [{
            "match": "::",
            "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.operator.cpp"
          }, {
            "match": "(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)",
            "name": "entity.name.scope-resolution.operator.cpp"
          }, {
            "include": "#template_call_range"
          }]
        },
        "46": {
          "patterns": [{
            "include": "#template_call_range"
          }]
        },
        "47": {},
        "48": {
          "name": "keyword.other.operator.overload.cpp"
        },
        "49": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "50": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "51": {
          "name": "comment.block.cpp"
        },
        "52": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "53": {
          "patterns": [{
            "match": "::",
            "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.operator-overload.cpp"
          }, {
            "match": "(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)",
            "name": "entity.name.scope-resolution.operator-overload.cpp"
          }, {
            "include": "#template_call_range"
          }]
        },
        "54": {
          "patterns": [{
            "include": "#template_call_range"
          }]
        },
        "55": {},
        "56": {
          "name": "entity.name.operator.cpp"
        },
        "57": {
          "name": "entity.name.operator.type.cpp"
        },
        "58": {
          "patterns": [{
            "match": "\\*",
            "name": "entity.name.operator.type.pointer.cpp"
          }, {
            "captures": {
              "1": {
                "patterns": [{
                  "include": "#inline_comment"
                }]
              },
              "2": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "3": {
                "name": "comment.block.cpp"
              },
              "4": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "(?:\\&((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))){2,}\\&",
            "name": "invalid.illegal.reference-type.cpp"
          }, {
            "match": "\\&",
            "name": "entity.name.operator.type.reference.cpp"
          }]
        },
        "59": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "60": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "61": {
          "name": "comment.block.cpp"
        },
        "62": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "63": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "64": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "65": {
          "name": "comment.block.cpp"
        },
        "66": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "67": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "68": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "69": {
          "name": "comment.block.cpp"
        },
        "70": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "71": {
          "name": "entity.name.operator.type.array.cpp"
        },
        "72": {
          "name": "entity.name.operator.custom-literal.cpp"
        },
        "73": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "74": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "75": {
          "name": "comment.block.cpp"
        },
        "76": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "77": {
          "name": "entity.name.operator.custom-literal.cpp"
        },
        "78": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "79": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "80": {
          "name": "comment.block.cpp"
        },
        "81": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        }
      },
      "end": "(?:(?<=\\}|%>|\\?\\?>)|(?=[;>\\[\\]=]))",
      "endCaptures": {},
      "name": "meta.function.definition.special.operator-overload.cpp",
      "patterns": [{
        "begin": "\\G ?",
        "beginCaptures": {},
        "end": "(?:\\{|<%|\\?\\?<|(?=;))",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.block.begin.bracket.curly.function.definition.special.operator-overload.cpp"
          }
        },
        "name": "meta.head.function.definition.special.operator-overload.cpp",
        "patterns": [{
          "include": "#ever_present_context"
        }, {
          "include": "#template_call_range"
        }, {
          "begin": "\\(",
          "beginCaptures": {
            "0": {
              "name": "punctuation.section.parameters.begin.bracket.round.special.operator-overload.cpp"
            }
          },
          "contentName": "meta.function.definition.parameters.special.operator-overload",
          "end": "\\)",
          "endCaptures": {
            "0": {
              "name": "punctuation.section.parameters.end.bracket.round.special.operator-overload.cpp"
            }
          },
          "patterns": [{
            "include": "#function_parameter_context"
          }, {
            "include": "#evaluation_context"
          }]
        }, {
          "include": "#qualifiers_and_specifiers_post_parameters"
        }, {
          "captures": {
            "1": {
              "name": "keyword.operator.assignment.cpp"
            },
            "2": {
              "patterns": [{
                "include": "#inline_comment"
              }]
            },
            "3": {
              "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
            },
            "4": {
              "name": "comment.block.cpp"
            },
            "5": {
              "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
            },
            "6": {
              "name": "keyword.other.default.function.cpp"
            },
            "7": {
              "name": "keyword.other.delete.function.cpp"
            }
          },
          "match": "(\\=)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:(default)|(delete))"
        }, {
          "include": "$self"
        }]
      }, {
        "begin": "(?<=\\{|<%|\\?\\?<)",
        "beginCaptures": {},
        "end": "\\}|%>|\\?\\?>",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.block.end.bracket.curly.function.definition.special.operator-overload.cpp"
          }
        },
        "name": "meta.body.function.definition.special.operator-overload.cpp",
        "patterns": [{
          "include": "#function_body_context"
        }]
      }, {
        "begin": "(?<=\\}|%>|\\?\\?>)[\\s]*",
        "beginCaptures": {},
        "end": "[\\s]*(?=;)",
        "endCaptures": {},
        "name": "meta.tail.function.definition.special.operator-overload.cpp",
        "patterns": [{
          "include": "$self"
        }]
      }]
    },
    "operators": {
      "patterns": [{
        "begin": "((?<!\\w)sizeof(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(\\()",
        "beginCaptures": {
          "1": {
            "name": "keyword.operator.functionlike.cpp keyword.operator.sizeof.cpp"
          },
          "2": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "3": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "4": {
            "name": "comment.block.cpp"
          },
          "5": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "6": {
            "name": "punctuation.section.arguments.begin.bracket.round.operator.sizeof.cpp"
          }
        },
        "contentName": "meta.arguments.operator.sizeof",
        "end": "\\)",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.arguments.end.bracket.round.operator.sizeof.cpp"
          }
        },
        "patterns": [{
          "include": "#evaluation_context"
        }]
      }, {
        "begin": "((?<!\\w)alignof(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(\\()",
        "beginCaptures": {
          "1": {
            "name": "keyword.operator.functionlike.cpp keyword.operator.alignof.cpp"
          },
          "2": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "3": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "4": {
            "name": "comment.block.cpp"
          },
          "5": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "6": {
            "name": "punctuation.section.arguments.begin.bracket.round.operator.alignof.cpp"
          }
        },
        "contentName": "meta.arguments.operator.alignof",
        "end": "\\)",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.arguments.end.bracket.round.operator.alignof.cpp"
          }
        },
        "patterns": [{
          "include": "#evaluation_context"
        }]
      }, {
        "begin": "((?<!\\w)alignas(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(\\()",
        "beginCaptures": {
          "1": {
            "name": "keyword.operator.functionlike.cpp keyword.operator.alignas.cpp"
          },
          "2": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "3": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "4": {
            "name": "comment.block.cpp"
          },
          "5": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "6": {
            "name": "punctuation.section.arguments.begin.bracket.round.operator.alignas.cpp"
          }
        },
        "contentName": "meta.arguments.operator.alignas",
        "end": "\\)",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.arguments.end.bracket.round.operator.alignas.cpp"
          }
        },
        "patterns": [{
          "include": "#evaluation_context"
        }]
      }, {
        "begin": "((?<!\\w)typeid(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(\\()",
        "beginCaptures": {
          "1": {
            "name": "keyword.operator.functionlike.cpp keyword.operator.typeid.cpp"
          },
          "2": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "3": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "4": {
            "name": "comment.block.cpp"
          },
          "5": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "6": {
            "name": "punctuation.section.arguments.begin.bracket.round.operator.typeid.cpp"
          }
        },
        "contentName": "meta.arguments.operator.typeid",
        "end": "\\)",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.arguments.end.bracket.round.operator.typeid.cpp"
          }
        },
        "patterns": [{
          "include": "#evaluation_context"
        }]
      }, {
        "begin": "((?<!\\w)noexcept(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(\\()",
        "beginCaptures": {
          "1": {
            "name": "keyword.operator.functionlike.cpp keyword.operator.noexcept.cpp"
          },
          "2": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "3": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "4": {
            "name": "comment.block.cpp"
          },
          "5": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "6": {
            "name": "punctuation.section.arguments.begin.bracket.round.operator.noexcept.cpp"
          }
        },
        "contentName": "meta.arguments.operator.noexcept",
        "end": "\\)",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.arguments.end.bracket.round.operator.noexcept.cpp"
          }
        },
        "patterns": [{
          "include": "#evaluation_context"
        }]
      }, {
        "begin": "(\\bsizeof\\.\\.\\.)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(\\()",
        "beginCaptures": {
          "1": {
            "name": "keyword.operator.functionlike.cpp keyword.operator.sizeof.variadic.cpp"
          },
          "2": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "3": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "4": {
            "name": "comment.block.cpp"
          },
          "5": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "6": {
            "name": "punctuation.section.arguments.begin.bracket.round.operator.sizeof.variadic.cpp"
          }
        },
        "contentName": "meta.arguments.operator.sizeof.variadic",
        "end": "\\)",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.arguments.end.bracket.round.operator.sizeof.variadic.cpp"
          }
        },
        "patterns": [{
          "include": "#evaluation_context"
        }]
      }, {
        "match": "--",
        "name": "keyword.operator.decrement.cpp"
      }, {
        "match": "\\+\\+",
        "name": "keyword.operator.increment.cpp"
      }, {
        "match": "%=|\\+=|-=|\\*=|(?<!\\()\\/=",
        "name": "keyword.operator.assignment.compound.cpp"
      }, {
        "match": "&=|\\^=|<<=|>>=|\\|=",
        "name": "keyword.operator.assignment.compound.bitwise.cpp"
      }, {
        "match": "<<|>>",
        "name": "keyword.operator.bitwise.shift.cpp"
      }, {
        "match": "!=|<=|>=|==|<|>",
        "name": "keyword.operator.comparison.cpp"
      }, {
        "match": "&&|!|\\|\\|",
        "name": "keyword.operator.logical.cpp"
      }, {
        "match": "&|\\||\\^|~",
        "name": "keyword.operator.bitwise.cpp"
      }, {
        "include": "#assignment_operator"
      }, {
        "match": "%|\\*|\\/|-|\\+",
        "name": "keyword.operator.arithmetic.cpp"
      }, {
        "include": "#ternary_operator"
      }]
    },
    "over_qualified_types": {
      "patterns": [{
        "captures": {
          "1": {
            "name": "storage.type.struct.parameter.cpp"
          },
          "2": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "3": {
            "patterns": [{
              "captures": {
                "1": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "2": {
                  "name": "comment.block.cpp"
                },
                "3": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                }
              },
              "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
            }]
          },
          "4": {
            "name": "entity.name.type.struct.parameter.cpp"
          },
          "5": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "6": {
            "patterns": [{
              "captures": {
                "1": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "2": {
                  "name": "comment.block.cpp"
                },
                "3": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                }
              },
              "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
            }]
          },
          "7": {
            "patterns": [{
              "match": "\\*",
              "name": "storage.modifier.pointer.cpp"
            }, {
              "captures": {
                "1": {
                  "patterns": [{
                    "include": "#inline_comment"
                  }]
                },
                "2": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "3": {
                  "name": "comment.block.cpp"
                },
                "4": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                }
              },
              "match": "(?:\\&((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))){2,}\\&",
              "name": "invalid.illegal.reference-type.cpp"
            }, {
              "match": "\\&",
              "name": "storage.modifier.reference.cpp"
            }]
          },
          "8": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "9": {
            "patterns": [{
              "captures": {
                "1": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "2": {
                  "name": "comment.block.cpp"
                },
                "3": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                }
              },
              "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
            }]
          },
          "10": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "11": {
            "patterns": [{
              "captures": {
                "1": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "2": {
                  "name": "comment.block.cpp"
                },
                "3": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                }
              },
              "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
            }]
          },
          "12": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "13": {
            "patterns": [{
              "captures": {
                "1": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "2": {
                  "name": "comment.block.cpp"
                },
                "3": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                }
              },
              "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
            }]
          },
          "14": {
            "name": "variable.other.object.declare.cpp"
          },
          "15": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "16": {
            "patterns": [{
              "captures": {
                "1": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "2": {
                  "name": "comment.block.cpp"
                },
                "3": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                }
              },
              "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
            }]
          },
          "17": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "18": {
            "patterns": [{
              "captures": {
                "1": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "2": {
                  "name": "comment.block.cpp"
                },
                "3": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                }
              },
              "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
            }]
          },
          "19": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "20": {
            "patterns": [{
              "captures": {
                "1": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "2": {
                  "name": "comment.block.cpp"
                },
                "3": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                }
              },
              "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
            }]
          }
        },
        "match": "(\\bstruct)((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:(((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))?(?:(?:&|\\*)((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*(?:&|\\*))((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))?((?:(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))?)((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:\\[((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))\\]((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))?(?=,|\\)|\\n)"
      }, {
        "captures": {
          "1": {
            "name": "storage.type.enum.parameter.cpp"
          },
          "2": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "3": {
            "patterns": [{
              "captures": {
                "1": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "2": {
                  "name": "comment.block.cpp"
                },
                "3": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                }
              },
              "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
            }]
          },
          "4": {
            "name": "entity.name.type.enum.parameter.cpp"
          },
          "5": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "6": {
            "patterns": [{
              "captures": {
                "1": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "2": {
                  "name": "comment.block.cpp"
                },
                "3": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                }
              },
              "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
            }]
          },
          "7": {
            "patterns": [{
              "match": "\\*",
              "name": "storage.modifier.pointer.cpp"
            }, {
              "captures": {
                "1": {
                  "patterns": [{
                    "include": "#inline_comment"
                  }]
                },
                "2": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "3": {
                  "name": "comment.block.cpp"
                },
                "4": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                }
              },
              "match": "(?:\\&((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))){2,}\\&",
              "name": "invalid.illegal.reference-type.cpp"
            }, {
              "match": "\\&",
              "name": "storage.modifier.reference.cpp"
            }]
          },
          "8": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "9": {
            "patterns": [{
              "captures": {
                "1": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "2": {
                  "name": "comment.block.cpp"
                },
                "3": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                }
              },
              "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
            }]
          },
          "10": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "11": {
            "patterns": [{
              "captures": {
                "1": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "2": {
                  "name": "comment.block.cpp"
                },
                "3": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                }
              },
              "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
            }]
          },
          "12": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "13": {
            "patterns": [{
              "captures": {
                "1": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "2": {
                  "name": "comment.block.cpp"
                },
                "3": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                }
              },
              "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
            }]
          },
          "14": {
            "name": "variable.other.object.declare.cpp"
          },
          "15": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "16": {
            "patterns": [{
              "captures": {
                "1": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "2": {
                  "name": "comment.block.cpp"
                },
                "3": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                }
              },
              "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
            }]
          },
          "17": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "18": {
            "patterns": [{
              "captures": {
                "1": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "2": {
                  "name": "comment.block.cpp"
                },
                "3": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                }
              },
              "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
            }]
          },
          "19": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "20": {
            "patterns": [{
              "captures": {
                "1": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "2": {
                  "name": "comment.block.cpp"
                },
                "3": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                }
              },
              "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
            }]
          }
        },
        "match": "(\\benum)((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:(((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))?(?:(?:&|\\*)((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*(?:&|\\*))((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))?((?:(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))?)((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:\\[((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))\\]((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))?(?=,|\\)|\\n)"
      }, {
        "captures": {
          "1": {
            "name": "storage.type.union.parameter.cpp"
          },
          "2": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "3": {
            "patterns": [{
              "captures": {
                "1": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "2": {
                  "name": "comment.block.cpp"
                },
                "3": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                }
              },
              "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
            }]
          },
          "4": {
            "name": "entity.name.type.union.parameter.cpp"
          },
          "5": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "6": {
            "patterns": [{
              "captures": {
                "1": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "2": {
                  "name": "comment.block.cpp"
                },
                "3": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                }
              },
              "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
            }]
          },
          "7": {
            "patterns": [{
              "match": "\\*",
              "name": "storage.modifier.pointer.cpp"
            }, {
              "captures": {
                "1": {
                  "patterns": [{
                    "include": "#inline_comment"
                  }]
                },
                "2": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "3": {
                  "name": "comment.block.cpp"
                },
                "4": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                }
              },
              "match": "(?:\\&((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))){2,}\\&",
              "name": "invalid.illegal.reference-type.cpp"
            }, {
              "match": "\\&",
              "name": "storage.modifier.reference.cpp"
            }]
          },
          "8": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "9": {
            "patterns": [{
              "captures": {
                "1": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "2": {
                  "name": "comment.block.cpp"
                },
                "3": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                }
              },
              "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
            }]
          },
          "10": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "11": {
            "patterns": [{
              "captures": {
                "1": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "2": {
                  "name": "comment.block.cpp"
                },
                "3": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                }
              },
              "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
            }]
          },
          "12": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "13": {
            "patterns": [{
              "captures": {
                "1": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "2": {
                  "name": "comment.block.cpp"
                },
                "3": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                }
              },
              "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
            }]
          },
          "14": {
            "name": "variable.other.object.declare.cpp"
          },
          "15": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "16": {
            "patterns": [{
              "captures": {
                "1": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "2": {
                  "name": "comment.block.cpp"
                },
                "3": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                }
              },
              "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
            }]
          },
          "17": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "18": {
            "patterns": [{
              "captures": {
                "1": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "2": {
                  "name": "comment.block.cpp"
                },
                "3": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                }
              },
              "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
            }]
          },
          "19": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "20": {
            "patterns": [{
              "captures": {
                "1": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "2": {
                  "name": "comment.block.cpp"
                },
                "3": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                }
              },
              "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
            }]
          }
        },
        "match": "(\\bunion)((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:(((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))?(?:(?:&|\\*)((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*(?:&|\\*))((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))?((?:(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))?)((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:\\[((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))\\]((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))?(?=,|\\)|\\n)"
      }, {
        "captures": {
          "1": {
            "name": "storage.type.class.parameter.cpp"
          },
          "2": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "3": {
            "patterns": [{
              "captures": {
                "1": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "2": {
                  "name": "comment.block.cpp"
                },
                "3": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                }
              },
              "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
            }]
          },
          "4": {
            "name": "entity.name.type.class.parameter.cpp"
          },
          "5": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "6": {
            "patterns": [{
              "captures": {
                "1": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "2": {
                  "name": "comment.block.cpp"
                },
                "3": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                }
              },
              "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
            }]
          },
          "7": {
            "patterns": [{
              "match": "\\*",
              "name": "storage.modifier.pointer.cpp"
            }, {
              "captures": {
                "1": {
                  "patterns": [{
                    "include": "#inline_comment"
                  }]
                },
                "2": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "3": {
                  "name": "comment.block.cpp"
                },
                "4": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                }
              },
              "match": "(?:\\&((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))){2,}\\&",
              "name": "invalid.illegal.reference-type.cpp"
            }, {
              "match": "\\&",
              "name": "storage.modifier.reference.cpp"
            }]
          },
          "8": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "9": {
            "patterns": [{
              "captures": {
                "1": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "2": {
                  "name": "comment.block.cpp"
                },
                "3": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                }
              },
              "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
            }]
          },
          "10": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "11": {
            "patterns": [{
              "captures": {
                "1": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "2": {
                  "name": "comment.block.cpp"
                },
                "3": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                }
              },
              "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
            }]
          },
          "12": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "13": {
            "patterns": [{
              "captures": {
                "1": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "2": {
                  "name": "comment.block.cpp"
                },
                "3": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                }
              },
              "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
            }]
          },
          "14": {
            "name": "variable.other.object.declare.cpp"
          },
          "15": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "16": {
            "patterns": [{
              "captures": {
                "1": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "2": {
                  "name": "comment.block.cpp"
                },
                "3": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                }
              },
              "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
            }]
          },
          "17": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "18": {
            "patterns": [{
              "captures": {
                "1": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "2": {
                  "name": "comment.block.cpp"
                },
                "3": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                }
              },
              "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
            }]
          },
          "19": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "20": {
            "patterns": [{
              "captures": {
                "1": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "2": {
                  "name": "comment.block.cpp"
                },
                "3": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                }
              },
              "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
            }]
          }
        },
        "match": "(\\bclass)((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:(((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))?(?:(?:&|\\*)((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*(?:&|\\*))((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))?((?:(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))?)((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:\\[((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))\\]((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))?(?=,|\\)|\\n)"
      }]
    },
    "parameter": {
      "begin": "((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?=\\w)",
      "beginCaptures": {
        "1": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "2": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "3": {
          "name": "comment.block.cpp"
        },
        "4": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        }
      },
      "end": "(?:(?=\\))|(,))",
      "endCaptures": {
        "1": {
          "name": "punctuation.separator.delimiter.comma.cpp"
        }
      },
      "name": "meta.parameter.cpp",
      "patterns": [{
        "include": "#ever_present_context"
      }, {
        "include": "#string_context"
      }, {
        "include": "#function_pointer_parameter"
      }, {
        "include": "#decltype"
      }, {
        "include": "#vararg_ellipses"
      }, {
        "captures": {
          "1": {
            "patterns": [{
              "include": "#storage_types"
            }]
          },
          "2": {
            "name": "storage.modifier.specifier.parameter.cpp"
          },
          "3": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "4": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "5": {
            "name": "comment.block.cpp"
          },
          "6": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "7": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "8": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "9": {
            "name": "comment.block.cpp"
          },
          "10": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "11": {
            "name": "storage.type.primitive.cpp storage.type.built-in.primitive.cpp"
          },
          "12": {
            "name": "storage.type.cpp storage.type.built-in.cpp"
          },
          "13": {
            "name": "support.type.posix-reserved.pthread.cpp support.type.built-in.posix-reserved.pthread.cpp"
          },
          "14": {
            "name": "support.type.posix-reserved.cpp support.type.built-in.posix-reserved.cpp"
          },
          "15": {
            "name": "entity.name.type.parameter.cpp"
          },
          "16": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "17": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "18": {
            "name": "comment.block.cpp"
          },
          "19": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          }
        },
        "match": "((?:((?:(?:thread_local)|(?:volatile)|(?:register)|(?:restrict)|(?:static)|(?:extern)|(?:const)))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))+)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:\\s*+(?<!\\w)(?:(?:(?:((?:(?:unsigned)|(?:wchar_t)|(?:double)|(?:signed)|(?:short)|(?:float)|(?:auto)|(?:void)|(?:long)|(?:char)|(?:bool)|(?:int)))|((?:(?:uint_least32_t)|(?:uint_least64_t)|(?:uint_least16_t)|(?:uint_fast64_t)|(?:uint_least8_t)|(?:int_least64_t)|(?:int_least32_t)|(?:int_least16_t)|(?:uint_fast16_t)|(?:uint_fast32_t)|(?:int_least8_t)|(?:int_fast16_t)|(?:int_fast32_t)|(?:int_fast64_t)|(?:uint_fast8_t)|(?:int_fast8_t)|(?:suseconds_t)|(?:useconds_t)|(?:uintmax_t)|(?:uintmax_t)|(?:in_port_t)|(?:uintmax_t)|(?:in_addr_t)|(?:blksize_t)|(?:uintptr_t)|(?:intmax_t)|(?:intptr_t)|(?:blkcnt_t)|(?:intmax_t)|(?:u_quad_t)|(?:uint16_t)|(?:uint32_t)|(?:uint64_t)|(?:ssize_t)|(?:fixpt_t)|(?:qaddr_t)|(?:u_short)|(?:int16_t)|(?:int32_t)|(?:int64_t)|(?:uint8_t)|(?:daddr_t)|(?:caddr_t)|(?:swblk_t)|(?:clock_t)|(?:segsz_t)|(?:nlink_t)|(?:time_t)|(?:u_long)|(?:ushort)|(?:quad_t)|(?:mode_t)|(?:size_t)|(?:u_char)|(?:int8_t)|(?:u_int)|(?:uid_t)|(?:off_t)|(?:pid_t)|(?:gid_t)|(?:dev_t)|(?:div_t)|(?:key_t)|(?:ino_t)|(?:id_t)|(?:id_t)|(?:uint))))|((?:(?:pthread_rwlockattr_t)|(?:pthread_mutexattr_t)|(?:pthread_condattr_t)|(?:pthread_rwlock_t)|(?:pthread_mutex_t)|(?:pthread_cond_t)|(?:pthread_attr_t)|(?:pthread_once_t)|(?:pthread_key_t)|(?:pthread_t))))|([a-zA-Z_]\\w*_t))(?!\\w)|((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)\\b\\b(?<!\\Wthread_local|^thread_local|\\Wvolatile|^volatile|\\Wregister|^register|\\Wrestrict|^restrict|\\Wstatic|^static|\\Wextern|^extern|\\Wconst|^const)))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?=,|\\)|=)"
      }, {
        "include": "#storage_types"
      }, {
        "include": "#scope_resolution_parameter_inner_generated"
      }, {
        "match": "(?:(?:struct)|(?:class)|(?:union)|(?:enum))",
        "name": "storage.type.$0.cpp"
      }, {
        "begin": "(?<==)",
        "beginCaptures": {},
        "end": "(?:(?=\\))|(,))",
        "endCaptures": {
          "1": {
            "name": "punctuation.separator.delimiter.comma.cpp"
          }
        },
        "patterns": [{
          "include": "#evaluation_context"
        }]
      }, {
        "match": "\\=",
        "name": "keyword.operator.assignment.cpp"
      }, {
        "captures": {
          "1": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "2": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "3": {
            "name": "comment.block.cpp"
          },
          "4": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "5": {
            "name": "variable.parameter.cpp"
          },
          "6": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "7": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "8": {
            "name": "comment.block.cpp"
          },
          "9": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          }
        },
        "match": "(?<!\\s|\\(|,|:)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?=\\)|,|\\[|=|\\n)"
      }, {
        "include": "#attributes_context"
      }, {
        "begin": "\\[",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.begin.bracket.square.array.type.cpp"
          }
        },
        "end": "\\]",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.end.bracket.square.array.type.cpp"
          }
        },
        "name": "meta.bracket.square.array.cpp",
        "patterns": [{
          "include": "#evaluation_context"
        }]
      }, {
        "match": "(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*\\b(?<!\\Wstruct|^struct|\\Wclass|^class|\\Wunion|^union|\\Wenum|^enum)",
        "name": "entity.name.type.parameter.cpp"
      }, {
        "include": "#template_call_range"
      }, {
        "captures": {
          "0": {
            "patterns": [{
              "match": "\\*",
              "name": "storage.modifier.pointer.cpp"
            }, {
              "captures": {
                "1": {
                  "patterns": [{
                    "include": "#inline_comment"
                  }]
                },
                "2": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "3": {
                  "name": "comment.block.cpp"
                },
                "4": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                }
              },
              "match": "(?:\\&((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))){2,}\\&",
              "name": "invalid.illegal.reference-type.cpp"
            }, {
              "match": "\\&",
              "name": "storage.modifier.reference.cpp"
            }]
          },
          "1": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "2": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "3": {
            "name": "comment.block.cpp"
          },
          "4": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "5": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "6": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "7": {
            "name": "comment.block.cpp"
          },
          "8": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          }
        },
        "match": "((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))?(?:(?:&|\\*)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*(?:&|\\*)"
      }, {
        "include": "#ever_present_context"
      }]
    },
    "parameter_class": {
      "captures": {
        "1": {
          "name": "storage.type.class.parameter.cpp"
        },
        "2": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "3": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "4": {
          "name": "entity.name.type.class.parameter.cpp"
        },
        "5": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "6": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "7": {
          "patterns": [{
            "match": "\\*",
            "name": "storage.modifier.pointer.cpp"
          }, {
            "captures": {
              "1": {
                "patterns": [{
                  "include": "#inline_comment"
                }]
              },
              "2": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "3": {
                "name": "comment.block.cpp"
              },
              "4": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "(?:\\&((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))){2,}\\&",
            "name": "invalid.illegal.reference-type.cpp"
          }, {
            "match": "\\&",
            "name": "storage.modifier.reference.cpp"
          }]
        },
        "8": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "9": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "10": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "11": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "12": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "13": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "14": {
          "name": "variable.other.object.declare.cpp"
        },
        "15": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "16": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "17": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "18": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "19": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "20": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        }
      },
      "match": "(\\bclass)((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:(((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))?(?:(?:&|\\*)((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*(?:&|\\*))((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))?((?:(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))?)((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:\\[((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))\\]((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))?(?=,|\\)|\\n)"
    },
    "parameter_enum": {
      "captures": {
        "1": {
          "name": "storage.type.enum.parameter.cpp"
        },
        "2": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "3": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "4": {
          "name": "entity.name.type.enum.parameter.cpp"
        },
        "5": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "6": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "7": {
          "patterns": [{
            "match": "\\*",
            "name": "storage.modifier.pointer.cpp"
          }, {
            "captures": {
              "1": {
                "patterns": [{
                  "include": "#inline_comment"
                }]
              },
              "2": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "3": {
                "name": "comment.block.cpp"
              },
              "4": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "(?:\\&((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))){2,}\\&",
            "name": "invalid.illegal.reference-type.cpp"
          }, {
            "match": "\\&",
            "name": "storage.modifier.reference.cpp"
          }]
        },
        "8": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "9": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "10": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "11": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "12": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "13": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "14": {
          "name": "variable.other.object.declare.cpp"
        },
        "15": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "16": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "17": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "18": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "19": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "20": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        }
      },
      "match": "(\\benum)((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:(((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))?(?:(?:&|\\*)((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*(?:&|\\*))((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))?((?:(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))?)((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:\\[((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))\\]((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))?(?=,|\\)|\\n)"
    },
    "parameter_or_maybe_value": {
      "begin": "((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?=\\w)",
      "beginCaptures": {
        "1": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "2": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "3": {
          "name": "comment.block.cpp"
        },
        "4": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        }
      },
      "end": "(?:(?=\\))|(,))",
      "endCaptures": {
        "1": {
          "name": "punctuation.separator.delimiter.comma.cpp"
        }
      },
      "name": "meta.parameter.cpp",
      "patterns": [{
        "include": "#ever_present_context"
      }, {
        "include": "#function_pointer_parameter"
      }, {
        "include": "#memory_operators"
      }, {
        "include": "#builtin_storage_type_initilizer"
      }, {
        "include": "#curly_initializer"
      }, {
        "include": "#decltype"
      }, {
        "include": "#vararg_ellipses"
      }, {
        "captures": {
          "1": {
            "patterns": [{
              "include": "#storage_types"
            }]
          },
          "2": {
            "name": "storage.modifier.specifier.parameter.cpp"
          },
          "3": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "4": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "5": {
            "name": "comment.block.cpp"
          },
          "6": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "7": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "8": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "9": {
            "name": "comment.block.cpp"
          },
          "10": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "11": {
            "name": "storage.type.primitive.cpp storage.type.built-in.primitive.cpp"
          },
          "12": {
            "name": "storage.type.cpp storage.type.built-in.cpp"
          },
          "13": {
            "name": "support.type.posix-reserved.pthread.cpp support.type.built-in.posix-reserved.pthread.cpp"
          },
          "14": {
            "name": "support.type.posix-reserved.cpp support.type.built-in.posix-reserved.cpp"
          },
          "15": {
            "name": "entity.name.type.parameter.cpp"
          },
          "16": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "17": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "18": {
            "name": "comment.block.cpp"
          },
          "19": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          }
        },
        "match": "((?:((?:(?:thread_local)|(?:volatile)|(?:register)|(?:restrict)|(?:static)|(?:extern)|(?:const)))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))+)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:\\s*+(?<!\\w)(?:(?:(?:((?:(?:unsigned)|(?:wchar_t)|(?:double)|(?:signed)|(?:short)|(?:float)|(?:auto)|(?:void)|(?:long)|(?:char)|(?:bool)|(?:int)))|((?:(?:uint_least32_t)|(?:uint_least64_t)|(?:uint_least16_t)|(?:uint_fast64_t)|(?:uint_least8_t)|(?:int_least64_t)|(?:int_least32_t)|(?:int_least16_t)|(?:uint_fast16_t)|(?:uint_fast32_t)|(?:int_least8_t)|(?:int_fast16_t)|(?:int_fast32_t)|(?:int_fast64_t)|(?:uint_fast8_t)|(?:int_fast8_t)|(?:suseconds_t)|(?:useconds_t)|(?:uintmax_t)|(?:uintmax_t)|(?:in_port_t)|(?:uintmax_t)|(?:in_addr_t)|(?:blksize_t)|(?:uintptr_t)|(?:intmax_t)|(?:intptr_t)|(?:blkcnt_t)|(?:intmax_t)|(?:u_quad_t)|(?:uint16_t)|(?:uint32_t)|(?:uint64_t)|(?:ssize_t)|(?:fixpt_t)|(?:qaddr_t)|(?:u_short)|(?:int16_t)|(?:int32_t)|(?:int64_t)|(?:uint8_t)|(?:daddr_t)|(?:caddr_t)|(?:swblk_t)|(?:clock_t)|(?:segsz_t)|(?:nlink_t)|(?:time_t)|(?:u_long)|(?:ushort)|(?:quad_t)|(?:mode_t)|(?:size_t)|(?:u_char)|(?:int8_t)|(?:u_int)|(?:uid_t)|(?:off_t)|(?:pid_t)|(?:gid_t)|(?:dev_t)|(?:div_t)|(?:key_t)|(?:ino_t)|(?:id_t)|(?:id_t)|(?:uint))))|((?:(?:pthread_rwlockattr_t)|(?:pthread_mutexattr_t)|(?:pthread_condattr_t)|(?:pthread_rwlock_t)|(?:pthread_mutex_t)|(?:pthread_cond_t)|(?:pthread_attr_t)|(?:pthread_once_t)|(?:pthread_key_t)|(?:pthread_t))))|([a-zA-Z_]\\w*_t))(?!\\w)|((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)\\b\\b(?<!\\Wthread_local|^thread_local|\\Wvolatile|^volatile|\\Wregister|^register|\\Wrestrict|^restrict|\\Wstatic|^static|\\Wextern|^extern|\\Wconst|^const)))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?=,|\\)|=)"
      }, {
        "include": "#storage_types"
      }, {
        "include": "#function_call"
      }, {
        "include": "#scope_resolution_parameter_inner_generated"
      }, {
        "match": "(?:(?:struct)|(?:class)|(?:union)|(?:enum))",
        "name": "storage.type.$0.cpp"
      }, {
        "begin": "(?<==)",
        "beginCaptures": {},
        "end": "(?:(?=\\))|(,))",
        "endCaptures": {
          "1": {
            "name": "punctuation.separator.delimiter.comma.cpp"
          }
        },
        "patterns": [{
          "include": "#evaluation_context"
        }]
      }, {
        "captures": {
          "1": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "2": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "3": {
            "name": "comment.block.cpp"
          },
          "4": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "5": {
            "name": "variable.parameter.cpp"
          },
          "6": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "7": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "8": {
            "name": "comment.block.cpp"
          },
          "9": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          }
        },
        "match": "(?<!\\s|\\(|,|:)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?=(?:\\)|,|\\[|=|\\/\\/|(?:\\n|$)))"
      }, {
        "include": "#attributes_context"
      }, {
        "begin": "\\[",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.begin.bracket.square.array.type.cpp"
          }
        },
        "end": "\\]",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.end.bracket.square.array.type.cpp"
          }
        },
        "name": "meta.bracket.square.array.cpp",
        "patterns": [{
          "include": "#evaluation_context"
        }]
      }, {
        "match": "(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*\\b(?<!\\Wstruct|^struct|\\Wclass|^class|\\Wunion|^union|\\Wenum|^enum)",
        "name": "entity.name.type.parameter.cpp"
      }, {
        "include": "#template_call_range"
      }, {
        "captures": {
          "0": {
            "patterns": [{
              "match": "\\*",
              "name": "storage.modifier.pointer.cpp"
            }, {
              "captures": {
                "1": {
                  "patterns": [{
                    "include": "#inline_comment"
                  }]
                },
                "2": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "3": {
                  "name": "comment.block.cpp"
                },
                "4": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                }
              },
              "match": "(?:\\&((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))){2,}\\&",
              "name": "invalid.illegal.reference-type.cpp"
            }, {
              "match": "\\&",
              "name": "storage.modifier.reference.cpp"
            }]
          },
          "1": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "2": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "3": {
            "name": "comment.block.cpp"
          },
          "4": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "5": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "6": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "7": {
            "name": "comment.block.cpp"
          },
          "8": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          }
        },
        "match": "((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))?(?:(?:&|\\*)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*(?:&|\\*)"
      }, {
        "include": "#evaluation_context"
      }, {
        "include": "#ever_present_context"
      }]
    },
    "parameter_struct": {
      "captures": {
        "1": {
          "name": "storage.type.struct.parameter.cpp"
        },
        "2": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "3": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "4": {
          "name": "entity.name.type.struct.parameter.cpp"
        },
        "5": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "6": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "7": {
          "patterns": [{
            "match": "\\*",
            "name": "storage.modifier.pointer.cpp"
          }, {
            "captures": {
              "1": {
                "patterns": [{
                  "include": "#inline_comment"
                }]
              },
              "2": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "3": {
                "name": "comment.block.cpp"
              },
              "4": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "(?:\\&((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))){2,}\\&",
            "name": "invalid.illegal.reference-type.cpp"
          }, {
            "match": "\\&",
            "name": "storage.modifier.reference.cpp"
          }]
        },
        "8": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "9": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "10": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "11": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "12": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "13": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "14": {
          "name": "variable.other.object.declare.cpp"
        },
        "15": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "16": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "17": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "18": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "19": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "20": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        }
      },
      "match": "(\\bstruct)((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:(((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))?(?:(?:&|\\*)((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*(?:&|\\*))((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))?((?:(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))?)((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:\\[((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))\\]((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))?(?=,|\\)|\\n)"
    },
    "parameter_union": {
      "captures": {
        "1": {
          "name": "storage.type.union.parameter.cpp"
        },
        "2": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "3": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "4": {
          "name": "entity.name.type.union.parameter.cpp"
        },
        "5": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "6": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "7": {
          "patterns": [{
            "match": "\\*",
            "name": "storage.modifier.pointer.cpp"
          }, {
            "captures": {
              "1": {
                "patterns": [{
                  "include": "#inline_comment"
                }]
              },
              "2": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "3": {
                "name": "comment.block.cpp"
              },
              "4": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "(?:\\&((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))){2,}\\&",
            "name": "invalid.illegal.reference-type.cpp"
          }, {
            "match": "\\&",
            "name": "storage.modifier.reference.cpp"
          }]
        },
        "8": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "9": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "10": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "11": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "12": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "13": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "14": {
          "name": "variable.other.object.declare.cpp"
        },
        "15": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "16": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "17": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "18": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "19": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "20": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        }
      },
      "match": "(\\bunion)((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:(((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))?(?:(?:&|\\*)((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*(?:&|\\*))((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))?((?:(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))?)((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:\\[((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))\\]((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))?(?=,|\\)|\\n)"
    },
    "parentheses": {
      "begin": "\\(",
      "beginCaptures": {
        "0": {
          "name": "punctuation.section.parens.begin.bracket.round.cpp"
        }
      },
      "end": "\\)",
      "endCaptures": {
        "0": {
          "name": "punctuation.section.parens.end.bracket.round.cpp"
        }
      },
      "name": "meta.parens.cpp",
      "patterns": [{
        "include": "#over_qualified_types"
      }, {
        "match": "(?<!:):(?!:)",
        "name": "punctuation.separator.colon.range-based.cpp"
      }, {
        "include": "#evaluation_context"
      }]
    },
    "pragma": {
      "begin": "^((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(#)(?:\\s+)?pragma\\b",
      "beginCaptures": {
        "0": {
          "name": "keyword.control.directive.pragma.cpp"
        },
        "1": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "2": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "3": {
          "name": "comment.block.cpp"
        },
        "4": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "5": {
          "name": "punctuation.definition.directive.cpp"
        }
      },
      "end": "(?<!\\\\)(?:(?=\\n)|(?<=^\\n|[^\\\\]\\n)(?=$))",
      "endCaptures": {},
      "name": "meta.preprocessor.pragma.cpp",
      "patterns": [{
        "include": "#comments"
      }, {
        "include": "#string_context"
      }, {
        "match": "[a-zA-Z_$][\\w\\-$]*",
        "name": "entity.other.attribute-name.pragma.preprocessor.cpp"
      }, {
        "include": "#preprocessor_number_literal"
      }, {
        "include": "#line_continuation_character"
      }]
    },
    "pragma_mark": {
      "captures": {
        "1": {
          "name": "keyword.control.directive.pragma.pragma-mark.cpp"
        },
        "2": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "3": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "4": {
          "name": "punctuation.definition.directive.cpp"
        },
        "5": {
          "name": "entity.name.tag.pragma-mark.cpp"
        }
      },
      "match": "(^((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(#)(?:\\s+)?pragma\\s+mark)\\s+(.*)",
      "name": "meta.preprocessor.pragma.cpp"
    },
    "predefined_macros": {
      "patterns": [{
        "captures": {
          "1": {
            "name": "entity.name.other.preprocessor.macro.predefined.$1.cpp"
          }
        },
        "match": "\\b(__cplusplus|__DATE__|__FILE__|__LINE__|__STDC__|__STDC_HOSTED__|__STDC_NO_COMPLEX__|__STDC_VERSION__|__STDCPP_THREADS__|__TIME__|NDEBUG|__OBJC__|__ASSEMBLER__|__ATOM__|__AVX__|__AVX2__|_CHAR_UNSIGNED|__CLR_VER|_CONTROL_FLOW_GUARD|__COUNTER__|__cplusplus_cli|__cplusplus_winrt|_CPPRTTI|_CPPUNWIND|_DEBUG|_DLL|__FUNCDNAME__|__FUNCSIG__|__FUNCTION__|_INTEGRAL_MAX_BITS|__INTELLISENSE__|_ISO_VOLATILE|_KERNEL_MODE|_M_AMD64|_M_ARM|_M_ARM_ARMV7VE|_M_ARM_FP|_M_ARM64|_M_CEE|_M_CEE_PURE|_M_CEE_SAFE|_M_FP_EXCEPT|_M_FP_FAST|_M_FP_PRECISE|_M_FP_STRICT|_M_IX86|_M_IX86_FP|_M_X64|_MANAGED|_MSC_BUILD|_MSC_EXTENSIONS|_MSC_FULL_VER|_MSC_VER|_MSVC_LANG|__MSVC_RUNTIME_CHECKS|_MT|_NATIVE_WCHAR_T_DEFINED|_OPENMP|_PREFAST|__TIMESTAMP__|_VC_NO_DEFAULTLIB|_WCHAR_T_DEFINED|_WIN32|_WIN64|_WINRT_DLL|_ATL_VER|_MFC_VER|__GFORTRAN__|__GNUC__|__GNUC_MINOR__|__GNUC_PATCHLEVEL__|__GNUG__|__STRICT_ANSI__|__BASE_FILE__|__INCLUDE_LEVEL__|__ELF__|__VERSION__|__OPTIMIZE__|__OPTIMIZE_SIZE__|__NO_INLINE__|__GNUC_STDC_INLINE__|__CHAR_UNSIGNED__|__WCHAR_UNSIGNED__|__REGISTER_PREFIX__|__REGISTER_PREFIX__|__SIZE_TYPE__|__PTRDIFF_TYPE__|__WCHAR_TYPE__|__WINT_TYPE__|__INTMAX_TYPE__|__UINTMAX_TYPE__|__SIG_ATOMIC_TYPE__|__INT8_TYPE__|__INT16_TYPE__|__INT32_TYPE__|__INT64_TYPE__|__UINT8_TYPE__|__UINT16_TYPE__|__UINT32_TYPE__|__UINT64_TYPE__|__INT_LEAST8_TYPE__|__INT_LEAST16_TYPE__|__INT_LEAST32_TYPE__|__INT_LEAST64_TYPE__|__UINT_LEAST8_TYPE__|__UINT_LEAST16_TYPE__|__UINT_LEAST32_TYPE__|__UINT_LEAST64_TYPE__|__INT_FAST8_TYPE__|__INT_FAST16_TYPE__|__INT_FAST32_TYPE__|__INT_FAST64_TYPE__|__UINT_FAST8_TYPE__|__UINT_FAST16_TYPE__|__UINT_FAST32_TYPE__|__UINT_FAST64_TYPE__|__INTPTR_TYPE__|__UINTPTR_TYPE__|__CHAR_BIT__|__SCHAR_MAX__|__WCHAR_MAX__|__SHRT_MAX__|__INT_MAX__|__LONG_MAX__|__LONG_LONG_MAX__|__WINT_MAX__|__SIZE_MAX__|__PTRDIFF_MAX__|__INTMAX_MAX__|__UINTMAX_MAX__|__SIG_ATOMIC_MAX__|__INT8_MAX__|__INT16_MAX__|__INT32_MAX__|__INT64_MAX__|__UINT8_MAX__|__UINT16_MAX__|__UINT32_MAX__|__UINT64_MAX__|__INT_LEAST8_MAX__|__INT_LEAST16_MAX__|__INT_LEAST32_MAX__|__INT_LEAST64_MAX__|__UINT_LEAST8_MAX__|__UINT_LEAST16_MAX__|__UINT_LEAST32_MAX__|__UINT_LEAST64_MAX__|__INT_FAST8_MAX__|__INT_FAST16_MAX__|__INT_FAST32_MAX__|__INT_FAST64_MAX__|__UINT_FAST8_MAX__|__UINT_FAST16_MAX__|__UINT_FAST32_MAX__|__UINT_FAST64_MAX__|__INTPTR_MAX__|__UINTPTR_MAX__|__WCHAR_MIN__|__WINT_MIN__|__SIG_ATOMIC_MIN__|__SCHAR_WIDTH__|__SHRT_WIDTH__|__INT_WIDTH__|__LONG_WIDTH__|__LONG_LONG_WIDTH__|__PTRDIFF_WIDTH__|__SIG_ATOMIC_WIDTH__|__SIZE_WIDTH__|__WCHAR_WIDTH__|__WINT_WIDTH__|__INT_LEAST8_WIDTH__|__INT_LEAST16_WIDTH__|__INT_LEAST32_WIDTH__|__INT_LEAST64_WIDTH__|__INT_FAST8_WIDTH__|__INT_FAST16_WIDTH__|__INT_FAST32_WIDTH__|__INT_FAST64_WIDTH__|__INTPTR_WIDTH__|__INTMAX_WIDTH__|__SIZEOF_INT__|__SIZEOF_LONG__|__SIZEOF_LONG_LONG__|__SIZEOF_SHORT__|__SIZEOF_POINTER__|__SIZEOF_FLOAT__|__SIZEOF_DOUBLE__|__SIZEOF_LONG_DOUBLE__|__SIZEOF_SIZE_T__|__SIZEOF_WCHAR_T__|__SIZEOF_WINT_T__|__SIZEOF_PTRDIFF_T__|__BYTE_ORDER__|__ORDER_LITTLE_ENDIAN__|__ORDER_BIG_ENDIAN__|__ORDER_PDP_ENDIAN__|__FLOAT_WORD_ORDER__|__DEPRECATED|__EXCEPTIONS|__GXX_RTTI|__USING_SJLJ_EXCEPTIONS__|__GXX_EXPERIMENTAL_CXX0X__|__GXX_WEAK__|__NEXT_RUNTIME__|__LP64__|_LP64|__SSP__|__SSP_ALL__|__SSP_STRONG__|__SSP_EXPLICIT__|__SANITIZE_ADDRESS__|__SANITIZE_THREAD__|__GCC_HAVE_SYNC_COMPARE_AND_SWAP_1|__GCC_HAVE_SYNC_COMPARE_AND_SWAP_2|__GCC_HAVE_SYNC_COMPARE_AND_SWAP_4|__GCC_HAVE_SYNC_COMPARE_AND_SWAP_8|__GCC_HAVE_SYNC_COMPARE_AND_SWAP_16|__HAVE_SPECULATION_SAFE_VALUE|__GCC_HAVE_DWARF2_CFI_ASM|__FP_FAST_FMA|__FP_FAST_FMAF|__FP_FAST_FMAL|__FP_FAST_FMAF16|__FP_FAST_FMAF32|__FP_FAST_FMAF64|__FP_FAST_FMAF128|__FP_FAST_FMAF32X|__FP_FAST_FMAF64X|__FP_FAST_FMAF128X|__GCC_IEC_559|__GCC_IEC_559_COMPLEX|__NO_MATH_ERRNO__|__has_builtin|__has_feature|__has_extension|__has_cpp_attribute|__has_c_attribute|__has_attribute|__has_declspec_attribute|__is_identifier|__has_include|__has_include_next|__has_warning|__BASE_FILE__|__FILE_NAME__|__clang__|__clang_major__|__clang_minor__|__clang_patchlevel__|__clang_version__|__fp16|_Float16)\\b"
      }, {
        "match": "\\b__([A-Z_]+)__\\b",
        "name": "entity.name.other.preprocessor.macro.predefined.probably.$1.cpp"
      }]
    },
    "preprocessor_conditional_context": {
      "patterns": [{
        "include": "#preprocessor_conditional_defined"
      }, {
        "include": "#comments"
      }, {
        "include": "#language_constants"
      }, {
        "include": "#string_context"
      }, {
        "include": "#d9bc4796b0b_preprocessor_number_literal"
      }, {
        "include": "#operators"
      }, {
        "include": "#predefined_macros"
      }, {
        "include": "#macro_name"
      }, {
        "include": "#line_continuation_character"
      }]
    },
    "preprocessor_conditional_defined": {
      "begin": "((?<!\\w)defined(?!\\w))(\\()",
      "beginCaptures": {
        "1": {
          "name": "keyword.control.directive.conditional.defined.cpp"
        },
        "2": {
          "name": "punctuation.section.parens.control.defined.cpp"
        }
      },
      "end": "(?:\\)|(?<!\\\\)(?:(?=\\n)|(?<=^\\n|[^\\\\]\\n)(?=$)))",
      "endCaptures": {
        "0": {
          "name": "punctuation.section.parens.control.defined.cpp"
        }
      },
      "patterns": [{
        "include": "#macro_name"
      }]
    },
    "preprocessor_conditional_parentheses": {
      "begin": "\\(",
      "beginCaptures": {
        "0": {
          "name": "punctuation.section.parens.begin.bracket.round.cpp"
        }
      },
      "end": "\\)",
      "endCaptures": {
        "0": {
          "name": "punctuation.section.parens.end.bracket.round.cpp"
        }
      },
      "name": "meta.parens.preprocessor.conditional.cpp"
    },
    "preprocessor_conditional_range": {
      "begin": "^((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(#)(?:\\s+)?((?:(?:ifndef|ifdef)|if))",
      "beginCaptures": {
        "0": {
          "name": "keyword.control.directive.conditional.$6.cpp"
        },
        "1": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "2": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "3": {
          "name": "comment.block.cpp"
        },
        "4": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "5": {
          "name": "punctuation.definition.directive.cpp"
        },
        "6": {}
      },
      "contentName": "meta.preprocessor.conditional",
      "end": "(?<!\\\\)(?:(?=\\n)|(?<=^\\n|[^\\\\]\\n)(?=$))",
      "endCaptures": {},
      "patterns": [{
        "include": "#preprocessor_conditional_context"
      }]
    },
    "preprocessor_conditional_standalone": {
      "captures": {
        "1": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "2": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "3": {
          "name": "punctuation.definition.directive.cpp"
        }
      },
      "match": "^((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(#)(?:\\s+)?((?<!\\w)(?:endif|else|elif)(?!\\w))",
      "name": "keyword.control.directive.$4.cpp"
    },
    "preprocessor_context": {
      "patterns": [{
        "include": "#pragma_mark"
      }, {
        "include": "#pragma"
      }, {
        "include": "#include"
      }, {
        "include": "#line"
      }, {
        "include": "#diagnostic"
      }, {
        "include": "#undef"
      }, {
        "include": "#preprocessor_conditional_range"
      }, {
        "include": "#single_line_macro"
      }, {
        "include": "#macro"
      }, {
        "include": "#preprocessor_conditional_standalone"
      }, {
        "include": "#macro_argument"
      }]
    },
    "qualified_type": {
      "captures": {
        "0": {
          "patterns": [{
            "match": "::",
            "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.cpp"
          }, {
            "match": "(?<!\\w)(?:(?:struct)|(?:class)|(?:union)|(?:enum))(?!\\w)",
            "name": "storage.type.$0.cpp"
          }, {
            "include": "#attributes_context"
          }, {
            "include": "#storage_types"
          }, {
            "include": "#number_literal"
          }, {
            "include": "#string_context"
          }, {
            "include": "#comma"
          }, {
            "include": "#scope_resolution_inner_generated"
          }, {
            "begin": "<",
            "beginCaptures": {
              "0": {
                "name": "punctuation.section.angle-brackets.begin.template.call.cpp"
              }
            },
            "end": ">",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.angle-brackets.end.template.call.cpp"
              }
            },
            "name": "meta.template.call.cpp",
            "patterns": [{
              "include": "#template_call_context"
            }]
          }, {
            "match": "(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*",
            "name": "entity.name.type.cpp"
          }]
        },
        "1": {
          "patterns": [{
            "include": "#attributes_context"
          }, {
            "include": "#number_literal"
          }]
        },
        "2": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "3": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "4": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "5": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "6": {
          "patterns": [{
            "match": "::",
            "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.type.cpp"
          }, {
            "match": "(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)",
            "name": "entity.name.scope-resolution.type.cpp"
          }, {
            "include": "#template_call_range"
          }]
        },
        "7": {
          "patterns": [{
            "include": "#template_call_range"
          }]
        },
        "9": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "10": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        }
      },
      "match": `\\s*+((?:(?:(?:\\[\\[.*?\\]\\]|__attribute(?:__)?\\s*\\(\\s*\\(.*?\\)\\s*\\))|__declspec\\(.*?\\))|alignas\\(.*?\\))(?!\\)))?((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:(?:(?:(?:unsigned)|(?:signed)|(?:short)|(?:long))|(?:(?:struct)|(?:class)|(?:union)|(?:enum)))((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*(?:((?:::)?(?:(?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)\\s*+(((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<11>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)\\s*+)?::)*+)((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))?(?!(?:(?:transaction_safe_dynamic)|(?:__has_cpp_attribute)|(?:reinterpret_cast)|(?:transaction_safe)|(?:atomic_noexcept)|(?:atomic_commit)|(?:__has_include)|(?:atomic_cancel)|(?:synchronized)|(?:thread_local)|(?:dynamic_cast)|(?:static_cast)|(?:const_cast)|(?:constexpr)|(?:co_return)|(?:constinit)|(?:namespace)|(?:protected)|(?:consteval)|(?:constexpr)|(?:constexpr)|(?:co_return)|(?:consteval)|(?:co_await)|(?:continue)|(?:template)|(?:reflexpr)|(?:volatile)|(?:register)|(?:co_await)|(?:co_yield)|(?:restrict)|(?:noexcept)|(?:volatile)|(?:override)|(?:explicit)|(?:decltype)|(?:operator)|(?:noexcept)|(?:noexcept)|(?:typename)|(?:requires)|(?:co_yield)|(?:nullptr)|(?:alignof)|(?:alignas)|(?:default)|(?:mutable)|(?:virtual)|(?:mutable)|(?:private)|(?:include)|(?:warning)|(?:_Pragma)|(?:defined)|(?:typedef)|(?:__asm__)|(?:concept)|(?:define)|(?:module)|(?:sizeof)|(?:switch)|(?:delete)|(?:pragma)|(?:and_eq)|(?:inline)|(?:xor_eq)|(?:typeid)|(?:import)|(?:extern)|(?:public)|(?:bitand)|(?:static)|(?:export)|(?:return)|(?:friend)|(?:ifndef)|(?:not_eq)|(?:false)|(?:final)|(?:break)|(?:const)|(?:catch)|(?:endif)|(?:ifdef)|(?:undef)|(?:error)|(?:audit)|(?:while)|(?:using)|(?:axiom)|(?:or_eq)|(?:compl)|(?:throw)|(?:bitor)|(?:const)|(?:line)|(?:case)|(?:else)|(?:this)|(?:true)|(?:goto)|(?:else)|(?:NULL)|(?:elif)|(?:new)|(?:asm)|(?:xor)|(?:and)|(?:try)|(?:not)|(?:for)|(?:do)|(?:if)|(?:or)|(?:if))\\b)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*\\b((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<11>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)?(?![\\w<:.])`,
      "name": "meta.qualified_type.cpp"
    },
    "qualifiers_and_specifiers_post_parameters": {
      "captures": {
        "1": {
          "patterns": [{
            "captures": {
              "1": {
                "patterns": [{
                  "include": "#inline_comment"
                }]
              },
              "2": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "3": {
                "name": "comment.block.cpp"
              },
              "4": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              },
              "5": {
                "name": "storage.modifier.specifier.functional.post-parameters.$5.cpp"
              }
            },
            "match": "((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?<!\\w)(?:(?:override)|(?:volatile)|(?:noexcept)|(?:final)|(?:const))(?!\\w))"
          }]
        }
      },
      "match": "((?:(?:(?:(?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)(?<!\\w)(?:(?:override)|(?:volatile)|(?:noexcept)|(?:final)|(?:const))(?!\\w))+)(?=\\s*(?:\\{|;|\\n|\\r|=))"
    },
    "scope_resolution": {
      "captures": {
        "0": {
          "patterns": [{
            "include": "#scope_resolution_inner_generated"
          }]
        },
        "1": {
          "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.cpp"
        },
        "2": {
          "patterns": [{
            "include": "#template_call_range"
          }]
        }
      },
      "match": `(::)?(?:(?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)\\s*+(((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<3>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)\\s*+)?::)*\\s*+`
    },
    "scope_resolution_function_call": {
      "captures": {
        "0": {
          "patterns": [{
            "include": "#scope_resolution_function_call_inner_generated"
          }]
        },
        "1": {
          "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.function.call.cpp"
        },
        "2": {
          "patterns": [{
            "include": "#template_call_range"
          }]
        }
      },
      "match": `(::)?(?:(?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)\\s*+(((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<3>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)\\s*+)?::)*\\s*+`
    },
    "scope_resolution_function_call_inner_generated": {
      "captures": {
        "1": {
          "patterns": [{
            "include": "#scope_resolution_function_call_inner_generated"
          }]
        },
        "2": {
          "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.function.call.cpp"
        },
        "3": {
          "patterns": [{
            "include": "#template_call_range"
          }]
        },
        "4": {},
        "5": {
          "name": "entity.name.scope-resolution.function.call.cpp"
        },
        "6": {
          "name": "meta.template.call.cpp",
          "patterns": [{
            "include": "#template_call_range"
          }]
        },
        "7": {},
        "8": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "9": {
          "name": "comment.block.cpp"
        },
        "10": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "11": {
          "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.function.call.cpp"
        }
      },
      "match": `((::)?(?:(?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)\\s*+(((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<7>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)\\s*+)?::)*\\s*+)((?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))\\s*+(((?<!<)<(?!<)(?:(?:(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/)))|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<7>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)\\s*+)?(::)`
    },
    "scope_resolution_function_definition": {
      "captures": {
        "0": {
          "patterns": [{
            "include": "#scope_resolution_function_definition_inner_generated"
          }]
        },
        "1": {
          "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.function.definition.cpp"
        },
        "2": {
          "patterns": [{
            "include": "#template_call_range"
          }]
        }
      },
      "match": `(::)?(?:(?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)\\s*+(((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<3>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)\\s*+)?::)*\\s*+`
    },
    "scope_resolution_function_definition_inner_generated": {
      "captures": {
        "1": {
          "patterns": [{
            "include": "#scope_resolution_function_definition_inner_generated"
          }]
        },
        "2": {
          "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.function.definition.cpp"
        },
        "3": {
          "patterns": [{
            "include": "#template_call_range"
          }]
        },
        "4": {},
        "5": {
          "name": "entity.name.scope-resolution.function.definition.cpp"
        },
        "6": {
          "name": "meta.template.call.cpp",
          "patterns": [{
            "include": "#template_call_range"
          }]
        },
        "7": {},
        "8": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "9": {
          "name": "comment.block.cpp"
        },
        "10": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "11": {
          "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.function.definition.cpp"
        }
      },
      "match": `((::)?(?:(?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)\\s*+(((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<7>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)\\s*+)?::)*\\s*+)((?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))\\s*+(((?<!<)<(?!<)(?:(?:(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/)))|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<7>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)\\s*+)?(::)`
    },
    "scope_resolution_function_definition_operator_overload": {
      "captures": {
        "0": {
          "patterns": [{
            "include": "#scope_resolution_function_definition_operator_overload_inner_generated"
          }]
        },
        "1": {
          "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.function.definition.operator-overload.cpp"
        },
        "2": {
          "patterns": [{
            "include": "#template_call_range"
          }]
        }
      },
      "match": `(::)?(?:(?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)\\s*+(((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<3>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)\\s*+)?::)*\\s*+`
    },
    "scope_resolution_function_definition_operator_overload_inner_generated": {
      "captures": {
        "1": {
          "patterns": [{
            "include": "#scope_resolution_function_definition_operator_overload_inner_generated"
          }]
        },
        "2": {
          "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.function.definition.operator-overload.cpp"
        },
        "3": {
          "patterns": [{
            "include": "#template_call_range"
          }]
        },
        "4": {},
        "5": {
          "name": "entity.name.scope-resolution.function.definition.operator-overload.cpp"
        },
        "6": {
          "name": "meta.template.call.cpp",
          "patterns": [{
            "include": "#template_call_range"
          }]
        },
        "7": {},
        "8": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "9": {
          "name": "comment.block.cpp"
        },
        "10": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "11": {
          "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.function.definition.operator-overload.cpp"
        }
      },
      "match": `((::)?(?:(?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)\\s*+(((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<7>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)\\s*+)?::)*\\s*+)((?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))\\s*+(((?<!<)<(?!<)(?:(?:(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/)))|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<7>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)\\s*+)?(::)`
    },
    "scope_resolution_inner_generated": {
      "captures": {
        "1": {
          "patterns": [{
            "include": "#scope_resolution_inner_generated"
          }]
        },
        "2": {
          "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.cpp"
        },
        "3": {
          "patterns": [{
            "include": "#template_call_range"
          }]
        },
        "4": {},
        "5": {
          "name": "entity.name.scope-resolution.cpp"
        },
        "6": {
          "name": "meta.template.call.cpp",
          "patterns": [{
            "include": "#template_call_range"
          }]
        },
        "7": {},
        "8": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "9": {
          "name": "comment.block.cpp"
        },
        "10": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "11": {
          "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.cpp"
        }
      },
      "match": `((::)?(?:(?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)\\s*+(((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<7>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)\\s*+)?::)*\\s*+)((?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))\\s*+(((?<!<)<(?!<)(?:(?:(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/)))|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<7>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)\\s*+)?(::)`
    },
    "scope_resolution_namespace_alias": {
      "captures": {
        "0": {
          "patterns": [{
            "include": "#scope_resolution_namespace_alias_inner_generated"
          }]
        },
        "1": {
          "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.namespace.alias.cpp"
        },
        "2": {
          "patterns": [{
            "include": "#template_call_range"
          }]
        }
      },
      "match": `(::)?(?:(?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)\\s*+(((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<3>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)\\s*+)?::)*\\s*+`
    },
    "scope_resolution_namespace_alias_inner_generated": {
      "captures": {
        "1": {
          "patterns": [{
            "include": "#scope_resolution_namespace_alias_inner_generated"
          }]
        },
        "2": {
          "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.namespace.alias.cpp"
        },
        "3": {
          "patterns": [{
            "include": "#template_call_range"
          }]
        },
        "4": {},
        "5": {
          "name": "entity.name.scope-resolution.namespace.alias.cpp"
        },
        "6": {
          "name": "meta.template.call.cpp",
          "patterns": [{
            "include": "#template_call_range"
          }]
        },
        "7": {},
        "8": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "9": {
          "name": "comment.block.cpp"
        },
        "10": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "11": {
          "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.namespace.alias.cpp"
        }
      },
      "match": `((::)?(?:(?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)\\s*+(((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<7>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)\\s*+)?::)*\\s*+)((?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))\\s*+(((?<!<)<(?!<)(?:(?:(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/)))|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<7>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)\\s*+)?(::)`
    },
    "scope_resolution_namespace_block": {
      "captures": {
        "0": {
          "patterns": [{
            "include": "#scope_resolution_namespace_block_inner_generated"
          }]
        },
        "1": {
          "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.namespace.block.cpp"
        },
        "2": {
          "patterns": [{
            "include": "#template_call_range"
          }]
        }
      },
      "match": `(::)?(?:(?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)\\s*+(((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<3>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)\\s*+)?::)*\\s*+`
    },
    "scope_resolution_namespace_block_inner_generated": {
      "captures": {
        "1": {
          "patterns": [{
            "include": "#scope_resolution_namespace_block_inner_generated"
          }]
        },
        "2": {
          "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.namespace.block.cpp"
        },
        "3": {
          "patterns": [{
            "include": "#template_call_range"
          }]
        },
        "4": {},
        "5": {
          "name": "entity.name.scope-resolution.namespace.block.cpp"
        },
        "6": {
          "name": "meta.template.call.cpp",
          "patterns": [{
            "include": "#template_call_range"
          }]
        },
        "7": {},
        "8": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "9": {
          "name": "comment.block.cpp"
        },
        "10": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "11": {
          "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.namespace.block.cpp"
        }
      },
      "match": `((::)?(?:(?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)\\s*+(((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<7>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)\\s*+)?::)*\\s*+)((?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))\\s*+(((?<!<)<(?!<)(?:(?:(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/)))|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<7>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)\\s*+)?(::)`
    },
    "scope_resolution_namespace_using": {
      "captures": {
        "0": {
          "patterns": [{
            "include": "#scope_resolution_namespace_using_inner_generated"
          }]
        },
        "1": {
          "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.namespace.using.cpp"
        },
        "2": {
          "patterns": [{
            "include": "#template_call_range"
          }]
        }
      },
      "match": `(::)?(?:(?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)\\s*+(((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<3>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)\\s*+)?::)*\\s*+`
    },
    "scope_resolution_namespace_using_inner_generated": {
      "captures": {
        "1": {
          "patterns": [{
            "include": "#scope_resolution_namespace_using_inner_generated"
          }]
        },
        "2": {
          "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.namespace.using.cpp"
        },
        "3": {
          "patterns": [{
            "include": "#template_call_range"
          }]
        },
        "4": {},
        "5": {
          "name": "entity.name.scope-resolution.namespace.using.cpp"
        },
        "6": {
          "name": "meta.template.call.cpp",
          "patterns": [{
            "include": "#template_call_range"
          }]
        },
        "7": {},
        "8": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "9": {
          "name": "comment.block.cpp"
        },
        "10": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "11": {
          "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.namespace.using.cpp"
        }
      },
      "match": `((::)?(?:(?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)\\s*+(((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<7>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)\\s*+)?::)*\\s*+)((?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))\\s*+(((?<!<)<(?!<)(?:(?:(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/)))|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<7>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)\\s*+)?(::)`
    },
    "scope_resolution_parameter": {
      "captures": {
        "0": {
          "patterns": [{
            "include": "#scope_resolution_parameter_inner_generated"
          }]
        },
        "1": {
          "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.parameter.cpp"
        },
        "2": {
          "patterns": [{
            "include": "#template_call_range"
          }]
        }
      },
      "match": `(::)?(?:(?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)\\s*+(((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<3>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)\\s*+)?::)*\\s*+`
    },
    "scope_resolution_parameter_inner_generated": {
      "captures": {
        "1": {
          "patterns": [{
            "include": "#scope_resolution_parameter_inner_generated"
          }]
        },
        "2": {
          "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.parameter.cpp"
        },
        "3": {
          "patterns": [{
            "include": "#template_call_range"
          }]
        },
        "4": {},
        "5": {
          "name": "entity.name.scope-resolution.parameter.cpp"
        },
        "6": {
          "name": "meta.template.call.cpp",
          "patterns": [{
            "include": "#template_call_range"
          }]
        },
        "7": {},
        "8": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "9": {
          "name": "comment.block.cpp"
        },
        "10": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "11": {
          "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.parameter.cpp"
        }
      },
      "match": `((::)?(?:(?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)\\s*+(((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<7>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)\\s*+)?::)*\\s*+)((?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))\\s*+(((?<!<)<(?!<)(?:(?:(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/)))|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<7>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)\\s*+)?(::)`
    },
    "scope_resolution_template_call": {
      "captures": {
        "0": {
          "patterns": [{
            "include": "#scope_resolution_template_call_inner_generated"
          }]
        },
        "1": {
          "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.template.call.cpp"
        },
        "2": {
          "patterns": [{
            "include": "#template_call_range"
          }]
        }
      },
      "match": `(::)?(?:(?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)\\s*+(((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<3>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)\\s*+)?::)*\\s*+`
    },
    "scope_resolution_template_call_inner_generated": {
      "captures": {
        "1": {
          "patterns": [{
            "include": "#scope_resolution_template_call_inner_generated"
          }]
        },
        "2": {
          "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.template.call.cpp"
        },
        "3": {
          "patterns": [{
            "include": "#template_call_range"
          }]
        },
        "4": {},
        "5": {
          "name": "entity.name.scope-resolution.template.call.cpp"
        },
        "6": {
          "name": "meta.template.call.cpp",
          "patterns": [{
            "include": "#template_call_range"
          }]
        },
        "7": {},
        "8": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "9": {
          "name": "comment.block.cpp"
        },
        "10": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "11": {
          "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.template.call.cpp"
        }
      },
      "match": `((::)?(?:(?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)\\s*+(((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<7>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)\\s*+)?::)*\\s*+)((?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))\\s*+(((?<!<)<(?!<)(?:(?:(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/)))|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<7>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)\\s*+)?(::)`
    },
    "scope_resolution_template_definition": {
      "captures": {
        "0": {
          "patterns": [{
            "include": "#scope_resolution_template_definition_inner_generated"
          }]
        },
        "1": {
          "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.template.definition.cpp"
        },
        "2": {
          "patterns": [{
            "include": "#template_call_range"
          }]
        }
      },
      "match": `(::)?(?:(?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)\\s*+(((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<3>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)\\s*+)?::)*\\s*+`
    },
    "scope_resolution_template_definition_inner_generated": {
      "captures": {
        "1": {
          "patterns": [{
            "include": "#scope_resolution_template_definition_inner_generated"
          }]
        },
        "2": {
          "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.template.definition.cpp"
        },
        "3": {
          "patterns": [{
            "include": "#template_call_range"
          }]
        },
        "4": {},
        "5": {
          "name": "entity.name.scope-resolution.template.definition.cpp"
        },
        "6": {
          "name": "meta.template.call.cpp",
          "patterns": [{
            "include": "#template_call_range"
          }]
        },
        "7": {},
        "8": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "9": {
          "name": "comment.block.cpp"
        },
        "10": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "11": {
          "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.template.definition.cpp"
        }
      },
      "match": `((::)?(?:(?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)\\s*+(((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<7>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)\\s*+)?::)*\\s*+)((?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))\\s*+(((?<!<)<(?!<)(?:(?:(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/)))|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<7>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)\\s*+)?(::)`
    },
    "semicolon": {
      "match": ";",
      "name": "punctuation.terminator.statement.cpp"
    },
    "simple_type": {
      "captures": {
        "1": {
          "name": "meta.qualified_type.cpp",
          "patterns": [{
            "match": "::",
            "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.cpp"
          }, {
            "match": "(?<!\\w)(?:(?:struct)|(?:class)|(?:union)|(?:enum))(?!\\w)",
            "name": "storage.type.$0.cpp"
          }, {
            "include": "#attributes_context"
          }, {
            "include": "#storage_types"
          }, {
            "include": "#number_literal"
          }, {
            "include": "#string_context"
          }, {
            "include": "#comma"
          }, {
            "include": "#scope_resolution_inner_generated"
          }, {
            "begin": "<",
            "beginCaptures": {
              "0": {
                "name": "punctuation.section.angle-brackets.begin.template.call.cpp"
              }
            },
            "end": ">",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.angle-brackets.end.template.call.cpp"
              }
            },
            "name": "meta.template.call.cpp",
            "patterns": [{
              "include": "#template_call_context"
            }]
          }, {
            "match": "(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*",
            "name": "entity.name.type.cpp"
          }]
        },
        "2": {
          "patterns": [{
            "include": "#attributes_context"
          }, {
            "include": "#number_literal"
          }]
        },
        "3": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "4": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "5": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "6": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "7": {
          "patterns": [{
            "match": "::",
            "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.type.cpp"
          }, {
            "match": "(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)",
            "name": "entity.name.scope-resolution.type.cpp"
          }, {
            "include": "#template_call_range"
          }]
        },
        "8": {
          "patterns": [{
            "include": "#template_call_range"
          }]
        },
        "9": {},
        "10": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "11": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "12": {},
        "13": {
          "patterns": [{
            "match": "\\*",
            "name": "storage.modifier.pointer.cpp"
          }, {
            "captures": {
              "1": {
                "patterns": [{
                  "include": "#inline_comment"
                }]
              },
              "2": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "3": {
                "name": "comment.block.cpp"
              },
              "4": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "(?:\\&((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))){2,}\\&",
            "name": "invalid.illegal.reference-type.cpp"
          }, {
            "match": "\\&",
            "name": "storage.modifier.reference.cpp"
          }]
        },
        "14": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "15": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "16": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "17": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        }
      },
      "match": `(\\s*+((?:(?:(?:\\[\\[.*?\\]\\]|__attribute(?:__)?\\s*\\(\\s*\\(.*?\\)\\s*\\))|__declspec\\(.*?\\))|alignas\\(.*?\\))(?!\\)))?((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:(?:(?:(?:unsigned)|(?:signed)|(?:short)|(?:long))|(?:(?:struct)|(?:class)|(?:union)|(?:enum)))((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*(?:((?:::)?(?:(?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)\\s*+(((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<12>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)\\s*+)?::)*+)((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))?(?!(?:(?:transaction_safe_dynamic)|(?:__has_cpp_attribute)|(?:reinterpret_cast)|(?:transaction_safe)|(?:atomic_noexcept)|(?:atomic_commit)|(?:__has_include)|(?:atomic_cancel)|(?:synchronized)|(?:thread_local)|(?:dynamic_cast)|(?:static_cast)|(?:const_cast)|(?:constexpr)|(?:co_return)|(?:constinit)|(?:namespace)|(?:protected)|(?:consteval)|(?:constexpr)|(?:constexpr)|(?:co_return)|(?:consteval)|(?:co_await)|(?:continue)|(?:template)|(?:reflexpr)|(?:volatile)|(?:register)|(?:co_await)|(?:co_yield)|(?:restrict)|(?:noexcept)|(?:volatile)|(?:override)|(?:explicit)|(?:decltype)|(?:operator)|(?:noexcept)|(?:noexcept)|(?:typename)|(?:requires)|(?:co_yield)|(?:nullptr)|(?:alignof)|(?:alignas)|(?:default)|(?:mutable)|(?:virtual)|(?:mutable)|(?:private)|(?:include)|(?:warning)|(?:_Pragma)|(?:defined)|(?:typedef)|(?:__asm__)|(?:concept)|(?:define)|(?:module)|(?:sizeof)|(?:switch)|(?:delete)|(?:pragma)|(?:and_eq)|(?:inline)|(?:xor_eq)|(?:typeid)|(?:import)|(?:extern)|(?:public)|(?:bitand)|(?:static)|(?:export)|(?:return)|(?:friend)|(?:ifndef)|(?:not_eq)|(?:false)|(?:final)|(?:break)|(?:const)|(?:catch)|(?:endif)|(?:ifdef)|(?:undef)|(?:error)|(?:audit)|(?:while)|(?:using)|(?:axiom)|(?:or_eq)|(?:compl)|(?:throw)|(?:bitor)|(?:const)|(?:line)|(?:case)|(?:else)|(?:this)|(?:true)|(?:goto)|(?:else)|(?:NULL)|(?:elif)|(?:new)|(?:asm)|(?:xor)|(?:and)|(?:try)|(?:not)|(?:for)|(?:do)|(?:if)|(?:or)|(?:if))\\b)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*\\b((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<12>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)?(?![\\w<:.]))(((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))?(?:(?:&|\\*)((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*(?:&|\\*))?`
    },
    "single_line_macro": {
      "captures": {
        "0": {
          "patterns": [{
            "include": "#macro"
          }, {
            "include": "#comments"
          }]
        },
        "1": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "2": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        }
      },
      "match": "^((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))#define.*(?<![\\\\])(?:\\n|$)"
    },
    "sizeof_operator": {
      "begin": "((?<!\\w)sizeof(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(\\()",
      "beginCaptures": {
        "1": {
          "name": "keyword.operator.functionlike.cpp keyword.operator.sizeof.cpp"
        },
        "2": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "3": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "4": {
          "name": "comment.block.cpp"
        },
        "5": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "6": {
          "name": "punctuation.section.arguments.begin.bracket.round.operator.sizeof.cpp"
        }
      },
      "contentName": "meta.arguments.operator.sizeof",
      "end": "\\)",
      "endCaptures": {
        "0": {
          "name": "punctuation.section.arguments.end.bracket.round.operator.sizeof.cpp"
        }
      },
      "patterns": [{
        "include": "#evaluation_context"
      }]
    },
    "sizeof_variadic_operator": {
      "begin": "(\\bsizeof\\.\\.\\.)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(\\()",
      "beginCaptures": {
        "1": {
          "name": "keyword.operator.functionlike.cpp keyword.operator.sizeof.variadic.cpp"
        },
        "2": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "3": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "4": {
          "name": "comment.block.cpp"
        },
        "5": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "6": {
          "name": "punctuation.section.arguments.begin.bracket.round.operator.sizeof.variadic.cpp"
        }
      },
      "contentName": "meta.arguments.operator.sizeof.variadic",
      "end": "\\)",
      "endCaptures": {
        "0": {
          "name": "punctuation.section.arguments.end.bracket.round.operator.sizeof.variadic.cpp"
        }
      },
      "patterns": [{
        "include": "#evaluation_context"
      }]
    },
    "square_brackets": {
      "begin": "([a-zA-Z_][a-zA-Z_0-9]*|(?<=[\\]\\)]))?(\\[)(?!\\])",
      "beginCaptures": {
        "1": {
          "name": "variable.other.object"
        },
        "2": {
          "name": "punctuation.definition.begin.bracket.square"
        }
      },
      "end": "\\]",
      "endCaptures": {
        "0": {
          "name": "punctuation.definition.end.bracket.square"
        }
      },
      "name": "meta.bracket.square.access",
      "patterns": [{
        "include": "#evaluation_context"
      }]
    },
    "standard_declares": {
      "patterns": [{
        "captures": {
          "1": {
            "name": "storage.type.struct.declare.cpp"
          },
          "2": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "3": {
            "patterns": [{
              "captures": {
                "1": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "2": {
                  "name": "comment.block.cpp"
                },
                "3": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                }
              },
              "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
            }]
          },
          "4": {
            "name": "entity.name.type.struct.cpp"
          },
          "5": {
            "patterns": [{
              "match": "\\*",
              "name": "storage.modifier.pointer.cpp"
            }, {
              "captures": {
                "1": {
                  "patterns": [{
                    "include": "#inline_comment"
                  }]
                },
                "2": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "3": {
                  "name": "comment.block.cpp"
                },
                "4": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                }
              },
              "match": "(?:\\&((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))){2,}\\&",
              "name": "invalid.illegal.reference-type.cpp"
            }, {
              "match": "\\&",
              "name": "storage.modifier.reference.cpp"
            }]
          },
          "6": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "7": {
            "patterns": [{
              "captures": {
                "1": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "2": {
                  "name": "comment.block.cpp"
                },
                "3": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                }
              },
              "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
            }]
          },
          "8": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "9": {
            "patterns": [{
              "captures": {
                "1": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "2": {
                  "name": "comment.block.cpp"
                },
                "3": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                }
              },
              "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
            }]
          },
          "10": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "11": {
            "patterns": [{
              "captures": {
                "1": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "2": {
                  "name": "comment.block.cpp"
                },
                "3": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                }
              },
              "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
            }]
          },
          "12": {
            "name": "variable.other.object.declare.cpp"
          },
          "13": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "14": {
            "patterns": [{
              "captures": {
                "1": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "2": {
                  "name": "comment.block.cpp"
                },
                "3": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                }
              },
              "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
            }]
          }
        },
        "match": "((?<!\\w)struct(?!\\w))((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))(((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))?(?:(?:&|\\*)((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*(?:&|\\*))?((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))\\b(?!override\\W|override\\$|final\\W|final\\$)((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?=\\S)(?![:{a-zA-Z])"
      }, {
        "captures": {
          "1": {
            "name": "storage.type.union.declare.cpp"
          },
          "2": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "3": {
            "patterns": [{
              "captures": {
                "1": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "2": {
                  "name": "comment.block.cpp"
                },
                "3": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                }
              },
              "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
            }]
          },
          "4": {
            "name": "entity.name.type.union.cpp"
          },
          "5": {
            "patterns": [{
              "match": "\\*",
              "name": "storage.modifier.pointer.cpp"
            }, {
              "captures": {
                "1": {
                  "patterns": [{
                    "include": "#inline_comment"
                  }]
                },
                "2": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "3": {
                  "name": "comment.block.cpp"
                },
                "4": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                }
              },
              "match": "(?:\\&((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))){2,}\\&",
              "name": "invalid.illegal.reference-type.cpp"
            }, {
              "match": "\\&",
              "name": "storage.modifier.reference.cpp"
            }]
          },
          "6": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "7": {
            "patterns": [{
              "captures": {
                "1": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "2": {
                  "name": "comment.block.cpp"
                },
                "3": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                }
              },
              "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
            }]
          },
          "8": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "9": {
            "patterns": [{
              "captures": {
                "1": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "2": {
                  "name": "comment.block.cpp"
                },
                "3": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                }
              },
              "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
            }]
          },
          "10": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "11": {
            "patterns": [{
              "captures": {
                "1": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "2": {
                  "name": "comment.block.cpp"
                },
                "3": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                }
              },
              "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
            }]
          },
          "12": {
            "name": "variable.other.object.declare.cpp"
          },
          "13": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "14": {
            "patterns": [{
              "captures": {
                "1": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "2": {
                  "name": "comment.block.cpp"
                },
                "3": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                }
              },
              "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
            }]
          }
        },
        "match": "((?<!\\w)union(?!\\w))((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))(((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))?(?:(?:&|\\*)((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*(?:&|\\*))?((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))\\b(?!override\\W|override\\$|final\\W|final\\$)((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?=\\S)(?![:{a-zA-Z])"
      }, {
        "captures": {
          "1": {
            "name": "storage.type.enum.declare.cpp"
          },
          "2": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "3": {
            "patterns": [{
              "captures": {
                "1": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "2": {
                  "name": "comment.block.cpp"
                },
                "3": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                }
              },
              "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
            }]
          },
          "4": {
            "name": "entity.name.type.enum.cpp"
          },
          "5": {
            "patterns": [{
              "match": "\\*",
              "name": "storage.modifier.pointer.cpp"
            }, {
              "captures": {
                "1": {
                  "patterns": [{
                    "include": "#inline_comment"
                  }]
                },
                "2": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "3": {
                  "name": "comment.block.cpp"
                },
                "4": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                }
              },
              "match": "(?:\\&((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))){2,}\\&",
              "name": "invalid.illegal.reference-type.cpp"
            }, {
              "match": "\\&",
              "name": "storage.modifier.reference.cpp"
            }]
          },
          "6": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "7": {
            "patterns": [{
              "captures": {
                "1": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "2": {
                  "name": "comment.block.cpp"
                },
                "3": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                }
              },
              "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
            }]
          },
          "8": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "9": {
            "patterns": [{
              "captures": {
                "1": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "2": {
                  "name": "comment.block.cpp"
                },
                "3": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                }
              },
              "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
            }]
          },
          "10": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "11": {
            "patterns": [{
              "captures": {
                "1": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "2": {
                  "name": "comment.block.cpp"
                },
                "3": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                }
              },
              "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
            }]
          },
          "12": {
            "name": "variable.other.object.declare.cpp"
          },
          "13": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "14": {
            "patterns": [{
              "captures": {
                "1": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "2": {
                  "name": "comment.block.cpp"
                },
                "3": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                }
              },
              "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
            }]
          }
        },
        "match": "((?<!\\w)enum(?!\\w))((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))(((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))?(?:(?:&|\\*)((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*(?:&|\\*))?((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))\\b(?!override\\W|override\\$|final\\W|final\\$)((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?=\\S)(?![:{a-zA-Z])"
      }, {
        "captures": {
          "1": {
            "name": "storage.type.class.declare.cpp"
          },
          "2": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "3": {
            "patterns": [{
              "captures": {
                "1": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "2": {
                  "name": "comment.block.cpp"
                },
                "3": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                }
              },
              "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
            }]
          },
          "4": {
            "name": "entity.name.type.class.cpp"
          },
          "5": {
            "patterns": [{
              "match": "\\*",
              "name": "storage.modifier.pointer.cpp"
            }, {
              "captures": {
                "1": {
                  "patterns": [{
                    "include": "#inline_comment"
                  }]
                },
                "2": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "3": {
                  "name": "comment.block.cpp"
                },
                "4": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                }
              },
              "match": "(?:\\&((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))){2,}\\&",
              "name": "invalid.illegal.reference-type.cpp"
            }, {
              "match": "\\&",
              "name": "storage.modifier.reference.cpp"
            }]
          },
          "6": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "7": {
            "patterns": [{
              "captures": {
                "1": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "2": {
                  "name": "comment.block.cpp"
                },
                "3": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                }
              },
              "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
            }]
          },
          "8": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "9": {
            "patterns": [{
              "captures": {
                "1": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "2": {
                  "name": "comment.block.cpp"
                },
                "3": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                }
              },
              "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
            }]
          },
          "10": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "11": {
            "patterns": [{
              "captures": {
                "1": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "2": {
                  "name": "comment.block.cpp"
                },
                "3": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                }
              },
              "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
            }]
          },
          "12": {
            "name": "variable.other.object.declare.cpp"
          },
          "13": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "14": {
            "patterns": [{
              "captures": {
                "1": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "2": {
                  "name": "comment.block.cpp"
                },
                "3": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                }
              },
              "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
            }]
          }
        },
        "match": "((?<!\\w)class(?!\\w))((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))(((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))?(?:(?:&|\\*)((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*(?:&|\\*))?((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))\\b(?!override\\W|override\\$|final\\W|final\\$)((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?=\\S)(?![:{a-zA-Z])"
      }]
    },
    "static_assert": {
      "begin": "((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?<!\\w)static_assert|_Static_assert(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(\\()",
      "beginCaptures": {
        "1": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "2": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "3": {
          "name": "comment.block.cpp"
        },
        "4": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "5": {
          "name": "keyword.other.static_assert.cpp"
        },
        "6": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "7": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "8": {
          "name": "comment.block.cpp"
        },
        "9": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "10": {
          "name": "punctuation.section.arguments.begin.bracket.round.static_assert.cpp"
        }
      },
      "end": "\\)",
      "endCaptures": {
        "0": {
          "name": "punctuation.section.arguments.end.bracket.round.static_assert.cpp"
        }
      },
      "patterns": [{
        "begin": '(,)(?:\\s+)?(?=(?:L|u8|u|U(?:\\s+)?\\")?)',
        "beginCaptures": {
          "1": {
            "name": "punctuation.separator.delimiter.comma.cpp"
          }
        },
        "end": "(?=\\))",
        "endCaptures": {},
        "name": "meta.static_assert.message.cpp",
        "patterns": [{
          "include": "#string_context"
        }]
      }, {
        "include": "#evaluation_context"
      }]
    },
    "std_space": {
      "captures": {
        "0": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "1": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        }
      },
      "match": "(?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)"
    },
    "storage_specifiers": {
      "captures": {
        "1": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "2": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "3": {
          "name": "storage.modifier.specifier.$3.cpp"
        }
      },
      "match": "((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?<!\\w)(?:(?:thread_local)|(?:volatile)|(?:register)|(?:restrict)|(?:static)|(?:extern)|(?:const))(?!\\w))"
    },
    "storage_types": {
      "patterns": [{
        "include": "#storage_specifiers"
      }, {
        "include": "#inline_builtin_storage_type"
      }, {
        "include": "#decltype"
      }, {
        "include": "#typename"
      }]
    },
    "string_context": {
      "patterns": [{
        "begin": '((?:u|u8|U|L)?)"',
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.string.begin.cpp"
          },
          "1": {
            "name": "meta.encoding.cpp"
          }
        },
        "end": '(")(?:((?:[a-zA-Z]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*)|(_(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*))?',
        "endCaptures": {
          "1": {
            "name": "punctuation.definition.string.end.cpp"
          },
          "2": {
            "name": "keyword.other.suffix.literal.user-defined.reserved.string.cpp"
          },
          "3": {
            "name": "keyword.other.suffix.literal.user-defined.string.cpp"
          }
        },
        "name": "string.quoted.double.cpp",
        "patterns": [{
          "match": "(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8})",
          "name": "constant.character.escape.cpp"
        }, {
          "match": `\\\\['"?\\\\abfnrtv]`,
          "name": "constant.character.escape.cpp"
        }, {
          "match": "\\\\[0-7]{1,3}",
          "name": "constant.character.escape.cpp"
        }, {
          "captures": {
            "1": {
              "name": "constant.character.escape.cpp"
            },
            "2": {
              "name": "invalid.illegal.unknown-escape.cpp"
            }
          },
          "match": "(?:(\\\\x0*[0-9a-fA-F]{2}(?![0-9a-fA-F]))|((?:\\\\x[0-9a-fA-F]*|\\\\x)))"
        }, {
          "include": "#string_escapes_context_c"
        }]
      }, {
        "begin": "(?<![0-9A-Fa-f])((?:u|u8|U|L)?)'",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.string.begin.cpp"
          },
          "1": {
            "name": "meta.encoding.cpp"
          }
        },
        "end": "(')(?:((?:[a-zA-Z]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*)|(_(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*))?",
        "endCaptures": {
          "1": {
            "name": "punctuation.definition.string.end.cpp"
          },
          "2": {
            "name": "keyword.other.suffix.literal.user-defined.reserved.character.cpp"
          },
          "3": {
            "name": "keyword.other.suffix.literal.user-defined.character.cpp"
          }
        },
        "name": "string.quoted.single.cpp",
        "patterns": [{
          "captures": {
            "1": {
              "name": "constant.character.escape.cpp"
            },
            "2": {
              "name": "invalid.illegal.unknown-escape.cpp"
            }
          },
          "match": "(?:(\\\\x0*[0-9a-fA-F]{2}(?![0-9a-fA-F]))|((?:\\\\x[0-9a-fA-F]*|\\\\x)))"
        }, {
          "include": "#string_escapes_context_c"
        }, {
          "include": "#line_continuation_character"
        }]
      }, {
        "begin": '((?:[uUL]8?)?R)\\"(?:(?:_r|re)|regex)\\(',
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.string.begin.cpp"
          },
          "1": {
            "name": "meta.encoding.cpp"
          }
        },
        "end": '\\)(?:(?:_r|re)|regex)\\"',
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.string.end.cpp"
          }
        },
        "name": "string.quoted.double.raw.regex.cpp",
        "patterns": [{
          "include": "source.regexp.python"
        }]
      }, {
        "begin": '((?:[uUL]8?)?R)\\"(?:glsl|GLSL)\\(',
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.string.begin.cpp"
          },
          "1": {
            "name": "meta.encoding.cpp"
          }
        },
        "end": '\\)(?:glsl|GLSL)\\"',
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.string.end.cpp"
          }
        },
        "name": "meta.string.quoted.double.raw.glsl.cpp",
        "patterns": [{
          "include": "source.glsl"
        }]
      }, {
        "begin": '((?:[uUL]8?)?R)\\"(?:[pP]?(?:sql|SQL)|d[dm]l)\\(',
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.string.begin.cpp"
          },
          "1": {
            "name": "meta.encoding.cpp"
          }
        },
        "end": '\\)(?:[pP]?(?:sql|SQL)|d[dm]l)\\"',
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.string.end.cpp"
          }
        },
        "name": "meta.string.quoted.double.raw.sql.cpp",
        "patterns": [{
          "include": "source.sql"
        }]
      }, {
        "begin": '((?:u|u8|U|L)?R)"(?:([^ ()\\\\\\t]{0,16})|([^ ()\\\\\\t]*))\\(',
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.string.begin"
          },
          "1": {
            "name": "meta.encoding"
          },
          "3": {
            "name": "invalid.illegal.delimiter-too-long"
          }
        },
        "end": '(\\)\\2(\\3)")(?:((?:[a-zA-Z]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*)|(_(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*))?',
        "endCaptures": {
          "1": {
            "name": "punctuation.definition.string.end"
          },
          "2": {
            "name": "invalid.illegal.delimiter-too-long"
          },
          "3": {
            "name": "keyword.other.suffix.literal.user-defined.reserved.string.cpp"
          },
          "4": {
            "name": "keyword.other.suffix.literal.user-defined.string.cpp"
          }
        },
        "name": "string.quoted.double.raw"
      }]
    },
    "string_escapes_context_c": {
      "patterns": [{
        "match": `(?x)\\\\ (
\\\\			 |
[abefnprtv'"?]   |
[0-3][0-7]{,2}	 |
[4-7]\\d?		|
x[a-fA-F0-9]{,2} |
u[a-fA-F0-9]{,4} |
U[a-fA-F0-9]{,8} )`,
        "name": "constant.character.escape"
      }, {
        "match": "\\\\.",
        "name": "invalid.illegal.unknown-escape"
      }, {
        "match": `(?x) (?!%')(?!%")%
(\\d+\\$)?
[#0\\- +']*
[,;:_]?
((-?\\d+)|\\*(-?\\d+\\$)?)?
(\\.((-?\\d+)|\\*(-?\\d+\\$)?)?)?
(hh|h|ll|l|j|t|z|q|L|vh|vl|v|hv|hl)?
[diouxXDOUeEfFgGaACcSspn%]`,
        "name": "constant.other.placeholder"
      }]
    },
    "struct_block": {
      "begin": "((?<!\\w)struct(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:(?={)|(?:((?:(?:(?:\\[\\[.*?\\]\\]|__attribute(?:__)?\\s*\\(\\s*\\(.*?\\)\\s*\\))|__declspec\\(.*?\\))|alignas\\(.*?\\))(?!\\)))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))?((?:(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*+)?(?:((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(:(?!:)))?)",
      "beginCaptures": {
        "0": {
          "name": "meta.head.struct.cpp"
        },
        "1": {
          "name": "storage.type.$1.cpp"
        },
        "2": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "3": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "4": {
          "name": "comment.block.cpp"
        },
        "5": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "6": {
          "patterns": [{
            "include": "#attributes_context"
          }, {
            "include": "#number_literal"
          }]
        },
        "7": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "8": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "9": {
          "name": "comment.block.cpp"
        },
        "10": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "11": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "storage.type.modifier.final.cpp"
              },
              "2": {
                "patterns": [{
                  "include": "#inline_comment"
                }]
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "4": {
                "name": "comment.block.cpp"
              },
              "5": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "((?<!\\w)final(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))"
          }, {
            "captures": {
              "1": {
                "name": "entity.name.type.struct.cpp"
              },
              "2": {
                "patterns": [{
                  "include": "#inline_comment"
                }]
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "4": {
                "name": "comment.block.cpp"
              },
              "5": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              },
              "6": {
                "name": "storage.type.modifier.final.cpp"
              },
              "7": {
                "patterns": [{
                  "include": "#inline_comment"
                }]
              },
              "8": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "9": {
                "name": "comment.block.cpp"
              },
              "10": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:((?<!\\w)final(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))?(?=:|{|$)"
          }, {
            "match": "DLLEXPORT",
            "name": "entity.name.other.preprocessor.macro.predefined.DLLEXPORT.cpp"
          }, {
            "match": "(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*",
            "name": "entity.name.other.preprocessor.macro.predefined.probably.$0.cpp"
          }]
        },
        "12": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "13": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "14": {
          "name": "comment.block.cpp"
        },
        "15": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "16": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "17": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "18": {
          "name": "comment.block.cpp"
        },
        "19": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "20": {
          "name": "punctuation.separator.colon.inheritance.cpp"
        }
      },
      "end": "(?:(?:(?<=\\}|%>|\\?\\?>)(?:\\s+)?(;)|(;))|(?=[;>\\[\\]=]))",
      "endCaptures": {
        "1": {
          "name": "punctuation.terminator.statement.cpp"
        },
        "2": {
          "name": "punctuation.terminator.statement.cpp"
        }
      },
      "name": "meta.block.struct.cpp",
      "patterns": [{
        "begin": "\\G ?",
        "beginCaptures": {},
        "end": "(?:\\{|<%|\\?\\?<|(?=;))",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.block.begin.bracket.curly.struct.cpp"
          }
        },
        "name": "meta.head.struct.cpp",
        "patterns": [{
          "include": "#ever_present_context"
        }, {
          "include": "#inheritance_context"
        }, {
          "include": "#template_call_range"
        }]
      }, {
        "begin": "(?<=\\{|<%|\\?\\?<)",
        "beginCaptures": {},
        "end": "\\}|%>|\\?\\?>",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.block.end.bracket.curly.struct.cpp"
          }
        },
        "name": "meta.body.struct.cpp",
        "patterns": [{
          "include": "#function_pointer"
        }, {
          "include": "#static_assert"
        }, {
          "include": "#constructor_inline"
        }, {
          "include": "#destructor_inline"
        }, {
          "include": "$self"
        }]
      }, {
        "begin": "(?<=\\}|%>|\\?\\?>)[\\s]*",
        "beginCaptures": {},
        "end": "[\\s]*(?=;)",
        "endCaptures": {},
        "name": "meta.tail.struct.cpp",
        "patterns": [{
          "include": "$self"
        }]
      }]
    },
    "struct_declare": {
      "captures": {
        "1": {
          "name": "storage.type.struct.declare.cpp"
        },
        "2": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "3": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "4": {
          "name": "entity.name.type.struct.cpp"
        },
        "5": {
          "patterns": [{
            "match": "\\*",
            "name": "storage.modifier.pointer.cpp"
          }, {
            "captures": {
              "1": {
                "patterns": [{
                  "include": "#inline_comment"
                }]
              },
              "2": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "3": {
                "name": "comment.block.cpp"
              },
              "4": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "(?:\\&((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))){2,}\\&",
            "name": "invalid.illegal.reference-type.cpp"
          }, {
            "match": "\\&",
            "name": "storage.modifier.reference.cpp"
          }]
        },
        "6": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "7": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "8": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "9": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "10": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "11": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "12": {
          "name": "variable.other.object.declare.cpp"
        },
        "13": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "14": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        }
      },
      "match": "((?<!\\w)struct(?!\\w))((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))(((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))?(?:(?:&|\\*)((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*(?:&|\\*))?((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))\\b(?!override\\W|override\\$|final\\W|final\\$)((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?=\\S)(?![:{a-zA-Z])"
    },
    "switch_conditional_parentheses": {
      "begin": "((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(\\()",
      "beginCaptures": {
        "1": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "2": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "3": {
          "name": "comment.block.cpp"
        },
        "4": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "5": {
          "name": "punctuation.section.parens.begin.bracket.round.conditional.switch.cpp"
        }
      },
      "end": "\\)",
      "endCaptures": {
        "0": {
          "name": "punctuation.section.parens.end.bracket.round.conditional.switch.cpp"
        }
      },
      "name": "meta.conditional.switch.cpp",
      "patterns": [{
        "include": "#evaluation_context"
      }]
    },
    "switch_statement": {
      "begin": "((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?<!\\w)switch(?!\\w))",
      "beginCaptures": {
        "0": {
          "name": "meta.head.switch.cpp"
        },
        "1": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "2": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "3": {
          "name": "comment.block.cpp"
        },
        "4": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "5": {
          "name": "keyword.control.switch.cpp"
        }
      },
      "end": "(?:(?<=\\}|%>|\\?\\?>)|(?=[;>\\[\\]=]))",
      "endCaptures": {},
      "name": "meta.block.switch.cpp",
      "patterns": [{
        "begin": "\\G ?",
        "beginCaptures": {},
        "end": "(?:\\{|<%|\\?\\?<|(?=;))",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.block.begin.bracket.curly.switch.cpp"
          }
        },
        "name": "meta.head.switch.cpp",
        "patterns": [{
          "include": "#switch_conditional_parentheses"
        }, {
          "include": "$self"
        }]
      }, {
        "begin": "(?<=\\{|<%|\\?\\?<)",
        "beginCaptures": {},
        "end": "\\}|%>|\\?\\?>",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.block.end.bracket.curly.switch.cpp"
          }
        },
        "name": "meta.body.switch.cpp",
        "patterns": [{
          "include": "#default_statement"
        }, {
          "include": "#case_statement"
        }, {
          "include": "$self"
        }]
      }, {
        "begin": "(?<=\\}|%>|\\?\\?>)[\\s]*",
        "beginCaptures": {},
        "end": "[\\s]*(?=;)",
        "endCaptures": {},
        "name": "meta.tail.switch.cpp",
        "patterns": [{
          "include": "$self"
        }]
      }]
    },
    "template_argument_defaulted": {
      "captures": {
        "1": {
          "name": "storage.type.template.argument.$1.cpp"
        },
        "2": {
          "name": "entity.name.type.template.cpp"
        },
        "3": {
          "name": "keyword.operator.assignment.cpp"
        }
      },
      "match": "(?<=<|,)(?:\\s+)?((?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*)\\s+((?:(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*)?)(?:\\s+)?(\\=)"
    },
    "template_call_context": {
      "patterns": [{
        "include": "#ever_present_context"
      }, {
        "include": "#template_call_range"
      }, {
        "include": "#storage_types"
      }, {
        "include": "#language_constants"
      }, {
        "include": "#scope_resolution_template_call_inner_generated"
      }, {
        "include": "#operators"
      }, {
        "include": "#number_literal"
      }, {
        "include": "#string_context"
      }, {
        "include": "#comma_in_template_argument"
      }, {
        "include": "#qualified_type"
      }]
    },
    "template_call_innards": {
      "captures": {
        "0": {
          "patterns": [{
            "include": "#template_call_range"
          }]
        },
        "2": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "3": {
          "name": "comment.block.cpp"
        },
        "4": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        }
      },
      "match": `((?<!<)<(?!<)(?:(?:(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/)))|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<1>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)\\s*+`,
      "name": "meta.template.call.cpp"
    },
    "template_call_range": {
      "begin": "<",
      "beginCaptures": {
        "0": {
          "name": "punctuation.section.angle-brackets.begin.template.call.cpp"
        }
      },
      "end": ">",
      "endCaptures": {
        "0": {
          "name": "punctuation.section.angle-brackets.end.template.call.cpp"
        }
      },
      "name": "meta.template.call.cpp",
      "patterns": [{
        "include": "#template_call_context"
      }]
    },
    "template_definition": {
      "begin": "(?<!\\w)(template)(?:\\s+)?(<)",
      "beginCaptures": {
        "1": {
          "name": "storage.type.template.cpp"
        },
        "2": {
          "name": "punctuation.section.angle-brackets.begin.template.definition.cpp"
        }
      },
      "end": ">",
      "endCaptures": {
        "0": {
          "name": "punctuation.section.angle-brackets.end.template.definition.cpp"
        }
      },
      "name": "meta.template.definition.cpp",
      "patterns": [{
        "begin": "(?<=\\w)(?:\\s+)?<",
        "beginCaptures": {
          "0": {
            "name": "punctuation.section.angle-brackets.begin.template.call.cpp"
          }
        },
        "end": ">",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.angle-brackets.end.template.call.cpp"
          }
        },
        "patterns": [{
          "include": "#template_call_context"
        }]
      }, {
        "include": "#template_definition_context"
      }]
    },
    "template_definition_argument": {
      "captures": {
        "1": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "2": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "3": {
          "name": "storage.type.template.argument.$3.cpp"
        },
        "4": {
          "patterns": [{
            "match": "(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*",
            "name": "storage.type.template.argument.$0.cpp"
          }]
        },
        "5": {
          "name": "entity.name.type.template.cpp"
        },
        "6": {
          "name": "storage.type.template.argument.$6.cpp"
        },
        "7": {
          "name": "punctuation.vararg-ellipses.template.definition.cpp"
        },
        "8": {
          "name": "entity.name.type.template.cpp"
        },
        "9": {
          "name": "storage.type.template.cpp"
        },
        "10": {
          "name": "punctuation.section.angle-brackets.begin.template.definition.cpp"
        },
        "11": {
          "name": "storage.type.template.argument.$11.cpp"
        },
        "12": {
          "name": "entity.name.type.template.cpp"
        },
        "13": {
          "name": "punctuation.section.angle-brackets.end.template.definition.cpp"
        },
        "14": {
          "name": "storage.type.template.argument.$14.cpp"
        },
        "15": {
          "name": "entity.name.type.template.cpp"
        },
        "16": {
          "name": "keyword.operator.assignment.cpp"
        },
        "17": {
          "name": "punctuation.separator.delimiter.comma.template.argument.cpp"
        }
      },
      "match": "((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:(?:(?:((?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*)|((?:(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*\\s+)+)((?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*))|((?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*)(?:\\s+)?(\\.\\.\\.)(?:\\s+)?((?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*))|(?<!\\w)(template)(?:\\s+)?(<)(?:\\s+)?((?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*)(?:\\s+)?((?:(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*)?)(?:\\s+)?(>)(?:\\s+)?(class|typename)(?:\\s+((?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*))?)(?:\\s+)?(?:(\\=)(?:\\s+)?(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*)?(?:(,)|(?=>|$))"
    },
    "template_definition_context": {
      "patterns": [{
        "include": "#scope_resolution_template_definition_inner_generated"
      }, {
        "include": "#template_definition_argument"
      }, {
        "include": "#template_argument_defaulted"
      }, {
        "include": "#template_call_innards"
      }, {
        "include": "#evaluation_context"
      }]
    },
    "template_explicit_instantiation": {
      "captures": {
        "1": {
          "name": "storage.modifier.specifier.extern.cpp"
        },
        "2": {
          "name": "storage.type.template.cpp"
        }
      },
      "match": "(?<!\\w)(?:(extern)\\s+)?(template)\\s+",
      "name": "meta.template.explicit-instantiation.cpp"
    },
    "template_isolated_definition": {
      "captures": {
        "1": {
          "name": "storage.type.template.cpp"
        },
        "2": {
          "name": "punctuation.section.angle-brackets.begin.template.definition.cpp"
        },
        "3": {
          "name": "meta.template.definition.cpp",
          "patterns": [{
            "include": "#template_definition_context"
          }]
        },
        "4": {
          "name": "punctuation.section.angle-brackets.end.template.definition.cpp"
        }
      },
      "match": "(?<!\\w)(template)(?:\\s+)?(<)(.*)(>)(?:\\s+)?$"
    },
    "ternary_operator": {
      "applyEndPatternLast": 1,
      "begin": "\\?",
      "beginCaptures": {
        "0": {
          "name": "keyword.operator.ternary.cpp"
        }
      },
      "end": ":",
      "endCaptures": {
        "0": {
          "name": "keyword.operator.ternary.cpp"
        }
      },
      "patterns": [{
        "include": "#ever_present_context"
      }, {
        "include": "#string_context"
      }, {
        "include": "#number_literal"
      }, {
        "include": "#method_access"
      }, {
        "include": "#member_access"
      }, {
        "include": "#predefined_macros"
      }, {
        "include": "#operators"
      }, {
        "include": "#memory_operators"
      }, {
        "include": "#wordlike_operators"
      }, {
        "include": "#type_casting_operators"
      }, {
        "include": "#control_flow_keywords"
      }, {
        "include": "#exception_keywords"
      }, {
        "include": "#the_this_keyword"
      }, {
        "include": "#language_constants"
      }, {
        "include": "#builtin_storage_type_initilizer"
      }, {
        "include": "#qualifiers_and_specifiers_post_parameters"
      }, {
        "include": "#functional_specifiers_pre_parameters"
      }, {
        "include": "#storage_types"
      }, {
        "include": "#lambdas"
      }, {
        "include": "#attributes_context"
      }, {
        "include": "#parentheses"
      }, {
        "include": "#function_call"
      }, {
        "include": "#scope_resolution_inner_generated"
      }, {
        "include": "#square_brackets"
      }, {
        "include": "#semicolon"
      }, {
        "include": "#comma"
      }]
    },
    "the_this_keyword": {
      "captures": {
        "1": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "2": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "3": {
          "name": "variable.language.this.cpp"
        }
      },
      "match": "((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?<!\\w)this(?!\\w))"
    },
    "type_alias": {
      "captures": {
        "1": {
          "name": "keyword.other.using.directive.cpp"
        },
        "2": {
          "name": "entity.name.type.cpp"
        },
        "3": {
          "patterns": [{
            "include": "#attributes_context"
          }, {
            "include": "#number_literal"
          }]
        },
        "4": {
          "name": "keyword.operator.assignment.cpp"
        },
        "5": {
          "name": "keyword.other.typename.cpp"
        },
        "6": {
          "patterns": [{
            "include": "#storage_specifiers"
          }]
        },
        "7": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "8": {
          "name": "meta.qualified_type.cpp",
          "patterns": [{
            "match": "::",
            "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.cpp"
          }, {
            "match": "(?<!\\w)(?:(?:struct)|(?:class)|(?:union)|(?:enum))(?!\\w)",
            "name": "storage.type.$0.cpp"
          }, {
            "include": "#attributes_context"
          }, {
            "include": "#storage_types"
          }, {
            "include": "#number_literal"
          }, {
            "include": "#string_context"
          }, {
            "include": "#comma"
          }, {
            "include": "#scope_resolution_inner_generated"
          }, {
            "begin": "<",
            "beginCaptures": {
              "0": {
                "name": "punctuation.section.angle-brackets.begin.template.call.cpp"
              }
            },
            "end": ">",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.angle-brackets.end.template.call.cpp"
              }
            },
            "name": "meta.template.call.cpp",
            "patterns": [{
              "include": "#template_call_context"
            }]
          }, {
            "match": "(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*",
            "name": "entity.name.type.cpp"
          }]
        },
        "9": {
          "patterns": [{
            "include": "#attributes_context"
          }, {
            "include": "#number_literal"
          }]
        },
        "10": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "11": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "12": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "13": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "14": {
          "patterns": [{
            "match": "::",
            "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.type.cpp"
          }, {
            "match": "(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)",
            "name": "entity.name.scope-resolution.type.cpp"
          }, {
            "include": "#template_call_range"
          }]
        },
        "15": {
          "patterns": [{
            "include": "#template_call_range"
          }]
        },
        "17": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "18": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "20": {
          "name": "meta.declaration.type.alias.value.unknown.cpp",
          "patterns": [{
            "include": "#evaluation_context"
          }]
        },
        "21": {
          "patterns": [{
            "match": "\\*",
            "name": "storage.modifier.pointer.cpp"
          }, {
            "captures": {
              "1": {
                "patterns": [{
                  "include": "#inline_comment"
                }]
              },
              "2": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "3": {
                "name": "comment.block.cpp"
              },
              "4": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "(?:\\&((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))){2,}\\&",
            "name": "invalid.illegal.reference-type.cpp"
          }, {
            "match": "\\&",
            "name": "storage.modifier.reference.cpp"
          }]
        },
        "22": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "23": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "24": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "25": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "26": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "27": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "28": {
          "name": "punctuation.definition.begin.bracket.square.cpp"
        },
        "29": {
          "patterns": [{
            "include": "#evaluation_context"
          }]
        },
        "30": {
          "name": "punctuation.definition.end.bracket.square.cpp"
        },
        "31": {
          "name": "punctuation.terminator.statement.cpp"
        }
      },
      "match": `(using)\\s+(?!namespace)((?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*)(?:\\s+)?((?:(?:(?:\\[\\[.*?\\]\\]|__attribute(?:__)?\\s*\\(\\s*\\(.*?\\)\\s*\\))|__declspec\\(.*?\\))|alignas\\(.*?\\))(?!\\)))?(?:\\s+)?(\\=)(?:\\s+)?((?:typename)?)(?:\\s+)?((?:(?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)(?<!\\w)(?:(?:thread_local)|(?:volatile)|(?:register)|(?:restrict)|(?:static)|(?:extern)|(?:const))(?!\\w)\\s+)+)?(?:(\\s*+((?:(?:(?:\\[\\[.*?\\]\\]|__attribute(?:__)?\\s*\\(\\s*\\(.*?\\)\\s*\\))|__declspec\\(.*?\\))|alignas\\(.*?\\))(?!\\)))?((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:(?:(?:(?:unsigned)|(?:signed)|(?:short)|(?:long))|(?:(?:struct)|(?:class)|(?:union)|(?:enum)))((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*(?:((?:::)?(?:(?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)\\s*+(((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<19>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)\\s*+)?::)*+)((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))?(?!(?:(?:transaction_safe_dynamic)|(?:__has_cpp_attribute)|(?:reinterpret_cast)|(?:transaction_safe)|(?:atomic_noexcept)|(?:atomic_commit)|(?:__has_include)|(?:atomic_cancel)|(?:synchronized)|(?:thread_local)|(?:dynamic_cast)|(?:static_cast)|(?:const_cast)|(?:constexpr)|(?:co_return)|(?:constinit)|(?:namespace)|(?:protected)|(?:consteval)|(?:constexpr)|(?:constexpr)|(?:co_return)|(?:consteval)|(?:co_await)|(?:continue)|(?:template)|(?:reflexpr)|(?:volatile)|(?:register)|(?:co_await)|(?:co_yield)|(?:restrict)|(?:noexcept)|(?:volatile)|(?:override)|(?:explicit)|(?:decltype)|(?:operator)|(?:noexcept)|(?:noexcept)|(?:typename)|(?:requires)|(?:co_yield)|(?:nullptr)|(?:alignof)|(?:alignas)|(?:default)|(?:mutable)|(?:virtual)|(?:mutable)|(?:private)|(?:include)|(?:warning)|(?:_Pragma)|(?:defined)|(?:typedef)|(?:__asm__)|(?:concept)|(?:define)|(?:module)|(?:sizeof)|(?:switch)|(?:delete)|(?:pragma)|(?:and_eq)|(?:inline)|(?:xor_eq)|(?:typeid)|(?:import)|(?:extern)|(?:public)|(?:bitand)|(?:static)|(?:export)|(?:return)|(?:friend)|(?:ifndef)|(?:not_eq)|(?:false)|(?:final)|(?:break)|(?:const)|(?:catch)|(?:endif)|(?:ifdef)|(?:undef)|(?:error)|(?:audit)|(?:while)|(?:using)|(?:axiom)|(?:or_eq)|(?:compl)|(?:throw)|(?:bitor)|(?:const)|(?:line)|(?:case)|(?:else)|(?:this)|(?:true)|(?:goto)|(?:else)|(?:NULL)|(?:elif)|(?:new)|(?:asm)|(?:xor)|(?:and)|(?:try)|(?:not)|(?:for)|(?:do)|(?:if)|(?:or)|(?:if))\\b)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*\\b((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<19>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)?(?![\\w<:.]))|(.*(?<!;)))(?:(((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))?(?:(?:&|\\*)((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*(?:&|\\*))((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))?(?:(\\[)(\\w*)(\\])(?:\\s+)?)?(?:\\s+)?(?:(;)|\\n)`,
      "name": "meta.declaration.type.alias.cpp"
    },
    "type_casting_operators": {
      "captures": {
        "1": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "2": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "3": {
          "name": "keyword.operator.wordlike.cpp keyword.operator.cast.$3.cpp"
        }
      },
      "match": "((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?<!\\w)(?:(?:reinterpret_cast)|(?:dynamic_cast)|(?:static_cast)|(?:const_cast))(?!\\w))"
    },
    "typedef_class": {
      "begin": "((?<!\\w)typedef(?!\\w))(?:\\s+)?(?=(?<!\\w)class(?!\\w))",
      "beginCaptures": {
        "1": {
          "name": "keyword.other.typedef.cpp"
        }
      },
      "end": "(?<=;)",
      "endCaptures": {},
      "patterns": [{
        "begin": "((?<!\\w)class(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:(?={)|(?:((?:(?:(?:\\[\\[.*?\\]\\]|__attribute(?:__)?\\s*\\(\\s*\\(.*?\\)\\s*\\))|__declspec\\(.*?\\))|alignas\\(.*?\\))(?!\\)))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))?((?:(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*+)?(?:((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(:(?!:)))?)",
        "beginCaptures": {
          "0": {
            "name": "meta.head.class.cpp"
          },
          "1": {
            "name": "storage.type.$1.cpp"
          },
          "2": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "3": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "4": {
            "name": "comment.block.cpp"
          },
          "5": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "6": {
            "patterns": [{
              "include": "#attributes_context"
            }, {
              "include": "#number_literal"
            }]
          },
          "7": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "8": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "9": {
            "name": "comment.block.cpp"
          },
          "10": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "11": {
            "patterns": [{
              "captures": {
                "1": {
                  "name": "storage.type.modifier.final.cpp"
                },
                "2": {
                  "patterns": [{
                    "include": "#inline_comment"
                  }]
                },
                "3": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "4": {
                  "name": "comment.block.cpp"
                },
                "5": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                }
              },
              "match": "((?<!\\w)final(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))"
            }, {
              "captures": {
                "1": {
                  "name": "entity.name.type.class.cpp"
                },
                "2": {
                  "patterns": [{
                    "include": "#inline_comment"
                  }]
                },
                "3": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "4": {
                  "name": "comment.block.cpp"
                },
                "5": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                },
                "6": {
                  "name": "storage.type.modifier.final.cpp"
                },
                "7": {
                  "patterns": [{
                    "include": "#inline_comment"
                  }]
                },
                "8": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "9": {
                  "name": "comment.block.cpp"
                },
                "10": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                }
              },
              "match": "((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:((?<!\\w)final(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))?(?=:|{|$)"
            }, {
              "match": "DLLEXPORT",
              "name": "entity.name.other.preprocessor.macro.predefined.DLLEXPORT.cpp"
            }, {
              "match": "(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*",
              "name": "entity.name.other.preprocessor.macro.predefined.probably.$0.cpp"
            }]
          },
          "12": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "13": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "14": {
            "name": "comment.block.cpp"
          },
          "15": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "16": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "17": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "18": {
            "name": "comment.block.cpp"
          },
          "19": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "20": {
            "name": "punctuation.separator.colon.inheritance.cpp"
          }
        },
        "end": "(?:(?:(?<=\\}|%>|\\?\\?>)(?:\\s+)?(;)|(;))|(?=[;>\\[\\]=]))",
        "endCaptures": {
          "1": {
            "name": "punctuation.terminator.statement.cpp"
          },
          "2": {
            "name": "punctuation.terminator.statement.cpp"
          }
        },
        "name": "meta.block.class.cpp",
        "patterns": [{
          "begin": "\\G ?",
          "beginCaptures": {},
          "end": "(?:\\{|<%|\\?\\?<|(?=;))",
          "endCaptures": {
            "0": {
              "name": "punctuation.section.block.begin.bracket.curly.class.cpp"
            }
          },
          "name": "meta.head.class.cpp",
          "patterns": [{
            "include": "#ever_present_context"
          }, {
            "include": "#inheritance_context"
          }, {
            "include": "#template_call_range"
          }]
        }, {
          "begin": "(?<=\\{|<%|\\?\\?<)",
          "beginCaptures": {},
          "end": "\\}|%>|\\?\\?>",
          "endCaptures": {
            "0": {
              "name": "punctuation.section.block.end.bracket.curly.class.cpp"
            }
          },
          "name": "meta.body.class.cpp",
          "patterns": [{
            "include": "#function_pointer"
          }, {
            "include": "#static_assert"
          }, {
            "include": "#constructor_inline"
          }, {
            "include": "#destructor_inline"
          }, {
            "include": "$self"
          }]
        }, {
          "begin": "(?<=\\}|%>|\\?\\?>)[\\s]*",
          "beginCaptures": {},
          "end": "[\\s]*(?=;)",
          "endCaptures": {},
          "name": "meta.tail.class.cpp",
          "patterns": [{
            "captures": {
              "1": {
                "patterns": [{
                  "match": "\\*",
                  "name": "storage.modifier.pointer.cpp"
                }, {
                  "captures": {
                    "1": {
                      "patterns": [{
                        "include": "#inline_comment"
                      }]
                    },
                    "2": {
                      "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                    },
                    "3": {
                      "name": "comment.block.cpp"
                    },
                    "4": {
                      "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                    }
                  },
                  "match": "(?:\\&((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))){2,}\\&",
                  "name": "invalid.illegal.reference-type.cpp"
                }, {
                  "match": "\\&",
                  "name": "storage.modifier.reference.cpp"
                }]
              },
              "2": {
                "patterns": [{
                  "include": "#inline_comment"
                }]
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "4": {
                "name": "comment.block.cpp"
              },
              "5": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              },
              "6": {
                "patterns": [{
                  "include": "#inline_comment"
                }]
              },
              "7": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "8": {
                "name": "comment.block.cpp"
              },
              "9": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              },
              "10": {
                "patterns": [{
                  "include": "#inline_comment"
                }]
              },
              "11": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "12": {
                "name": "comment.block.cpp"
              },
              "13": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              },
              "14": {
                "name": "entity.name.type.alias.cpp"
              }
            },
            "match": "(((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))?(?:(?:&|\\*)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*(?:&|\\*))?((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))"
          }, {
            "match": ","
          }]
        }]
      }]
    },
    "typedef_function_pointer": {
      "begin": "((?<!\\w)typedef(?!\\w))(?:\\s+)?(?=.*\\(\\*\\s*(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*\\s*\\))",
      "beginCaptures": {
        "1": {
          "name": "keyword.other.typedef.cpp"
        }
      },
      "end": "(?<=;)",
      "endCaptures": {},
      "patterns": [{
        "begin": `(\\s*+((?:(?:(?:\\[\\[.*?\\]\\]|__attribute(?:__)?\\s*\\(\\s*\\(.*?\\)\\s*\\))|__declspec\\(.*?\\))|alignas\\(.*?\\))(?!\\)))?((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:(?:(?:(?:unsigned)|(?:signed)|(?:short)|(?:long))|(?:(?:struct)|(?:class)|(?:union)|(?:enum)))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*(?:((?:::)?(?:(?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)\\s*+(((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<18>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)\\s*+)?::)*+)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))?(?!(?:(?:transaction_safe_dynamic)|(?:__has_cpp_attribute)|(?:reinterpret_cast)|(?:transaction_safe)|(?:atomic_noexcept)|(?:atomic_commit)|(?:__has_include)|(?:atomic_cancel)|(?:synchronized)|(?:thread_local)|(?:dynamic_cast)|(?:static_cast)|(?:const_cast)|(?:constexpr)|(?:co_return)|(?:constinit)|(?:namespace)|(?:protected)|(?:consteval)|(?:constexpr)|(?:constexpr)|(?:co_return)|(?:consteval)|(?:co_await)|(?:continue)|(?:template)|(?:reflexpr)|(?:volatile)|(?:register)|(?:co_await)|(?:co_yield)|(?:restrict)|(?:noexcept)|(?:volatile)|(?:override)|(?:explicit)|(?:decltype)|(?:operator)|(?:noexcept)|(?:noexcept)|(?:typename)|(?:requires)|(?:co_yield)|(?:nullptr)|(?:alignof)|(?:alignas)|(?:default)|(?:mutable)|(?:virtual)|(?:mutable)|(?:private)|(?:include)|(?:warning)|(?:_Pragma)|(?:defined)|(?:typedef)|(?:__asm__)|(?:concept)|(?:define)|(?:module)|(?:sizeof)|(?:switch)|(?:delete)|(?:pragma)|(?:and_eq)|(?:inline)|(?:xor_eq)|(?:typeid)|(?:import)|(?:extern)|(?:public)|(?:bitand)|(?:static)|(?:export)|(?:return)|(?:friend)|(?:ifndef)|(?:not_eq)|(?:false)|(?:final)|(?:break)|(?:const)|(?:catch)|(?:endif)|(?:ifdef)|(?:undef)|(?:error)|(?:audit)|(?:while)|(?:using)|(?:axiom)|(?:or_eq)|(?:compl)|(?:throw)|(?:bitor)|(?:const)|(?:line)|(?:case)|(?:else)|(?:this)|(?:true)|(?:goto)|(?:else)|(?:NULL)|(?:elif)|(?:new)|(?:asm)|(?:xor)|(?:and)|(?:try)|(?:not)|(?:for)|(?:do)|(?:if)|(?:or)|(?:if))\\b)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*\\b((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<18>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)?(?![\\w<:.]))(((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))?(?:(?:&|\\*)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*(?:&|\\*))?((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(\\()(\\*)(?:\\s+)?((?:(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*)?)(?:\\s+)?(?:(\\[)(\\w*)(\\])(?:\\s+)?)*(\\))(?:\\s+)?(\\()`,
        "beginCaptures": {
          "1": {
            "name": "meta.qualified_type.cpp",
            "patterns": [{
              "match": "::",
              "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.cpp"
            }, {
              "match": "(?<!\\w)(?:(?:struct)|(?:class)|(?:union)|(?:enum))(?!\\w)",
              "name": "storage.type.$0.cpp"
            }, {
              "include": "#attributes_context"
            }, {
              "include": "#storage_types"
            }, {
              "include": "#number_literal"
            }, {
              "include": "#string_context"
            }, {
              "include": "#comma"
            }, {
              "include": "#scope_resolution_inner_generated"
            }, {
              "begin": "<",
              "beginCaptures": {
                "0": {
                  "name": "punctuation.section.angle-brackets.begin.template.call.cpp"
                }
              },
              "end": ">",
              "endCaptures": {
                "0": {
                  "name": "punctuation.section.angle-brackets.end.template.call.cpp"
                }
              },
              "name": "meta.template.call.cpp",
              "patterns": [{
                "include": "#template_call_context"
              }]
            }, {
              "match": "(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*",
              "name": "entity.name.type.cpp"
            }]
          },
          "2": {
            "patterns": [{
              "include": "#attributes_context"
            }, {
              "include": "#number_literal"
            }]
          },
          "3": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "4": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "5": {
            "name": "comment.block.cpp"
          },
          "6": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "7": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "8": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "9": {
            "name": "comment.block.cpp"
          },
          "10": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "11": {
            "patterns": [{
              "match": "::",
              "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.type.cpp"
            }, {
              "match": "(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)",
              "name": "entity.name.scope-resolution.type.cpp"
            }, {
              "include": "#template_call_range"
            }]
          },
          "12": {
            "patterns": [{
              "include": "#template_call_range"
            }]
          },
          "13": {},
          "14": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "15": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "16": {
            "name": "comment.block.cpp"
          },
          "17": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "18": {},
          "19": {
            "patterns": [{
              "match": "\\*",
              "name": "storage.modifier.pointer.cpp"
            }, {
              "captures": {
                "1": {
                  "patterns": [{
                    "include": "#inline_comment"
                  }]
                },
                "2": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "3": {
                  "name": "comment.block.cpp"
                },
                "4": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                }
              },
              "match": "(?:\\&((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))){2,}\\&",
              "name": "invalid.illegal.reference-type.cpp"
            }, {
              "match": "\\&",
              "name": "storage.modifier.reference.cpp"
            }]
          },
          "20": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "21": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "22": {
            "name": "comment.block.cpp"
          },
          "23": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "24": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "25": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "26": {
            "name": "comment.block.cpp"
          },
          "27": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "28": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "29": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "30": {
            "name": "comment.block.cpp"
          },
          "31": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "32": {
            "name": "punctuation.section.parens.begin.bracket.round.function.pointer.cpp"
          },
          "33": {
            "name": "punctuation.definition.function.pointer.dereference.cpp"
          },
          "34": {
            "name": "entity.name.type.alias.cpp entity.name.type.pointer.function.cpp"
          },
          "35": {
            "name": "punctuation.definition.begin.bracket.square.cpp"
          },
          "36": {
            "patterns": [{
              "include": "#evaluation_context"
            }]
          },
          "37": {
            "name": "punctuation.definition.end.bracket.square.cpp"
          },
          "38": {
            "name": "punctuation.section.parens.end.bracket.round.function.pointer.cpp"
          },
          "39": {
            "name": "punctuation.section.parameters.begin.bracket.round.function.pointer.cpp"
          }
        },
        "end": "(\\))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?=[{=,);>]|\\n)(?!\\()",
        "endCaptures": {
          "1": {
            "name": "punctuation.section.parameters.end.bracket.round.function.pointer.cpp"
          },
          "2": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "3": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "4": {
            "name": "comment.block.cpp"
          },
          "5": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          }
        },
        "patterns": [{
          "include": "#function_parameter_context"
        }]
      }]
    },
    "typedef_struct": {
      "begin": "((?<!\\w)typedef(?!\\w))(?:\\s+)?(?=(?<!\\w)struct(?!\\w))",
      "beginCaptures": {
        "1": {
          "name": "keyword.other.typedef.cpp"
        }
      },
      "end": "(?<=;)",
      "endCaptures": {},
      "patterns": [{
        "begin": "((?<!\\w)struct(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:(?={)|(?:((?:(?:(?:\\[\\[.*?\\]\\]|__attribute(?:__)?\\s*\\(\\s*\\(.*?\\)\\s*\\))|__declspec\\(.*?\\))|alignas\\(.*?\\))(?!\\)))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))?((?:(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*+)?(?:((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(:(?!:)))?)",
        "beginCaptures": {
          "0": {
            "name": "meta.head.struct.cpp"
          },
          "1": {
            "name": "storage.type.$1.cpp"
          },
          "2": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "3": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "4": {
            "name": "comment.block.cpp"
          },
          "5": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "6": {
            "patterns": [{
              "include": "#attributes_context"
            }, {
              "include": "#number_literal"
            }]
          },
          "7": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "8": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "9": {
            "name": "comment.block.cpp"
          },
          "10": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "11": {
            "patterns": [{
              "captures": {
                "1": {
                  "name": "storage.type.modifier.final.cpp"
                },
                "2": {
                  "patterns": [{
                    "include": "#inline_comment"
                  }]
                },
                "3": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "4": {
                  "name": "comment.block.cpp"
                },
                "5": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                }
              },
              "match": "((?<!\\w)final(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))"
            }, {
              "captures": {
                "1": {
                  "name": "entity.name.type.struct.cpp"
                },
                "2": {
                  "patterns": [{
                    "include": "#inline_comment"
                  }]
                },
                "3": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "4": {
                  "name": "comment.block.cpp"
                },
                "5": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                },
                "6": {
                  "name": "storage.type.modifier.final.cpp"
                },
                "7": {
                  "patterns": [{
                    "include": "#inline_comment"
                  }]
                },
                "8": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "9": {
                  "name": "comment.block.cpp"
                },
                "10": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                }
              },
              "match": "((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:((?<!\\w)final(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))?(?=:|{|$)"
            }, {
              "match": "DLLEXPORT",
              "name": "entity.name.other.preprocessor.macro.predefined.DLLEXPORT.cpp"
            }, {
              "match": "(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*",
              "name": "entity.name.other.preprocessor.macro.predefined.probably.$0.cpp"
            }]
          },
          "12": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "13": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "14": {
            "name": "comment.block.cpp"
          },
          "15": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "16": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "17": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "18": {
            "name": "comment.block.cpp"
          },
          "19": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "20": {
            "name": "punctuation.separator.colon.inheritance.cpp"
          }
        },
        "end": "(?:(?:(?<=\\}|%>|\\?\\?>)(?:\\s+)?(;)|(;))|(?=[;>\\[\\]=]))",
        "endCaptures": {
          "1": {
            "name": "punctuation.terminator.statement.cpp"
          },
          "2": {
            "name": "punctuation.terminator.statement.cpp"
          }
        },
        "name": "meta.block.struct.cpp",
        "patterns": [{
          "begin": "\\G ?",
          "beginCaptures": {},
          "end": "(?:\\{|<%|\\?\\?<|(?=;))",
          "endCaptures": {
            "0": {
              "name": "punctuation.section.block.begin.bracket.curly.struct.cpp"
            }
          },
          "name": "meta.head.struct.cpp",
          "patterns": [{
            "include": "#ever_present_context"
          }, {
            "include": "#inheritance_context"
          }, {
            "include": "#template_call_range"
          }]
        }, {
          "begin": "(?<=\\{|<%|\\?\\?<)",
          "beginCaptures": {},
          "end": "\\}|%>|\\?\\?>",
          "endCaptures": {
            "0": {
              "name": "punctuation.section.block.end.bracket.curly.struct.cpp"
            }
          },
          "name": "meta.body.struct.cpp",
          "patterns": [{
            "include": "#function_pointer"
          }, {
            "include": "#static_assert"
          }, {
            "include": "#constructor_inline"
          }, {
            "include": "#destructor_inline"
          }, {
            "include": "$self"
          }]
        }, {
          "begin": "(?<=\\}|%>|\\?\\?>)[\\s]*",
          "beginCaptures": {},
          "end": "[\\s]*(?=;)",
          "endCaptures": {},
          "name": "meta.tail.struct.cpp",
          "patterns": [{
            "captures": {
              "1": {
                "patterns": [{
                  "match": "\\*",
                  "name": "storage.modifier.pointer.cpp"
                }, {
                  "captures": {
                    "1": {
                      "patterns": [{
                        "include": "#inline_comment"
                      }]
                    },
                    "2": {
                      "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                    },
                    "3": {
                      "name": "comment.block.cpp"
                    },
                    "4": {
                      "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                    }
                  },
                  "match": "(?:\\&((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))){2,}\\&",
                  "name": "invalid.illegal.reference-type.cpp"
                }, {
                  "match": "\\&",
                  "name": "storage.modifier.reference.cpp"
                }]
              },
              "2": {
                "patterns": [{
                  "include": "#inline_comment"
                }]
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "4": {
                "name": "comment.block.cpp"
              },
              "5": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              },
              "6": {
                "patterns": [{
                  "include": "#inline_comment"
                }]
              },
              "7": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "8": {
                "name": "comment.block.cpp"
              },
              "9": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              },
              "10": {
                "patterns": [{
                  "include": "#inline_comment"
                }]
              },
              "11": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "12": {
                "name": "comment.block.cpp"
              },
              "13": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              },
              "14": {
                "name": "entity.name.type.alias.cpp"
              }
            },
            "match": "(((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))?(?:(?:&|\\*)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*(?:&|\\*))?((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))"
          }, {
            "match": ","
          }]
        }]
      }]
    },
    "typedef_union": {
      "begin": "((?<!\\w)typedef(?!\\w))(?:\\s+)?(?=(?<!\\w)union(?!\\w))",
      "beginCaptures": {
        "1": {
          "name": "keyword.other.typedef.cpp"
        }
      },
      "end": "(?<=;)",
      "endCaptures": {},
      "patterns": [{
        "begin": "((?<!\\w)union(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:(?={)|(?:((?:(?:(?:\\[\\[.*?\\]\\]|__attribute(?:__)?\\s*\\(\\s*\\(.*?\\)\\s*\\))|__declspec\\(.*?\\))|alignas\\(.*?\\))(?!\\)))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))?((?:(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*+)?(?:((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(:(?!:)))?)",
        "beginCaptures": {
          "0": {
            "name": "meta.head.union.cpp"
          },
          "1": {
            "name": "storage.type.$1.cpp"
          },
          "2": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "3": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "4": {
            "name": "comment.block.cpp"
          },
          "5": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "6": {
            "patterns": [{
              "include": "#attributes_context"
            }, {
              "include": "#number_literal"
            }]
          },
          "7": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "8": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "9": {
            "name": "comment.block.cpp"
          },
          "10": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "11": {
            "patterns": [{
              "captures": {
                "1": {
                  "name": "storage.type.modifier.final.cpp"
                },
                "2": {
                  "patterns": [{
                    "include": "#inline_comment"
                  }]
                },
                "3": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "4": {
                  "name": "comment.block.cpp"
                },
                "5": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                }
              },
              "match": "((?<!\\w)final(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))"
            }, {
              "captures": {
                "1": {
                  "name": "entity.name.type.union.cpp"
                },
                "2": {
                  "patterns": [{
                    "include": "#inline_comment"
                  }]
                },
                "3": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "4": {
                  "name": "comment.block.cpp"
                },
                "5": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                },
                "6": {
                  "name": "storage.type.modifier.final.cpp"
                },
                "7": {
                  "patterns": [{
                    "include": "#inline_comment"
                  }]
                },
                "8": {
                  "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                },
                "9": {
                  "name": "comment.block.cpp"
                },
                "10": {
                  "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                }
              },
              "match": "((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:((?<!\\w)final(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))?(?=:|{|$)"
            }, {
              "match": "DLLEXPORT",
              "name": "entity.name.other.preprocessor.macro.predefined.DLLEXPORT.cpp"
            }, {
              "match": "(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*",
              "name": "entity.name.other.preprocessor.macro.predefined.probably.$0.cpp"
            }]
          },
          "12": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "13": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "14": {
            "name": "comment.block.cpp"
          },
          "15": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "16": {
            "patterns": [{
              "include": "#inline_comment"
            }]
          },
          "17": {
            "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
          },
          "18": {
            "name": "comment.block.cpp"
          },
          "19": {
            "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
          },
          "20": {
            "name": "punctuation.separator.colon.inheritance.cpp"
          }
        },
        "end": "(?:(?:(?<=\\}|%>|\\?\\?>)(?:\\s+)?(;)|(;))|(?=[;>\\[\\]=]))",
        "endCaptures": {
          "1": {
            "name": "punctuation.terminator.statement.cpp"
          },
          "2": {
            "name": "punctuation.terminator.statement.cpp"
          }
        },
        "name": "meta.block.union.cpp",
        "patterns": [{
          "begin": "\\G ?",
          "beginCaptures": {},
          "end": "(?:\\{|<%|\\?\\?<|(?=;))",
          "endCaptures": {
            "0": {
              "name": "punctuation.section.block.begin.bracket.curly.union.cpp"
            }
          },
          "name": "meta.head.union.cpp",
          "patterns": [{
            "include": "#ever_present_context"
          }, {
            "include": "#inheritance_context"
          }, {
            "include": "#template_call_range"
          }]
        }, {
          "begin": "(?<=\\{|<%|\\?\\?<)",
          "beginCaptures": {},
          "end": "\\}|%>|\\?\\?>",
          "endCaptures": {
            "0": {
              "name": "punctuation.section.block.end.bracket.curly.union.cpp"
            }
          },
          "name": "meta.body.union.cpp",
          "patterns": [{
            "include": "#function_pointer"
          }, {
            "include": "#static_assert"
          }, {
            "include": "#constructor_inline"
          }, {
            "include": "#destructor_inline"
          }, {
            "include": "$self"
          }]
        }, {
          "begin": "(?<=\\}|%>|\\?\\?>)[\\s]*",
          "beginCaptures": {},
          "end": "[\\s]*(?=;)",
          "endCaptures": {},
          "name": "meta.tail.union.cpp",
          "patterns": [{
            "captures": {
              "1": {
                "patterns": [{
                  "match": "\\*",
                  "name": "storage.modifier.pointer.cpp"
                }, {
                  "captures": {
                    "1": {
                      "patterns": [{
                        "include": "#inline_comment"
                      }]
                    },
                    "2": {
                      "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
                    },
                    "3": {
                      "name": "comment.block.cpp"
                    },
                    "4": {
                      "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
                    }
                  },
                  "match": "(?:\\&((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))){2,}\\&",
                  "name": "invalid.illegal.reference-type.cpp"
                }, {
                  "match": "\\&",
                  "name": "storage.modifier.reference.cpp"
                }]
              },
              "2": {
                "patterns": [{
                  "include": "#inline_comment"
                }]
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "4": {
                "name": "comment.block.cpp"
              },
              "5": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              },
              "6": {
                "patterns": [{
                  "include": "#inline_comment"
                }]
              },
              "7": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "8": {
                "name": "comment.block.cpp"
              },
              "9": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              },
              "10": {
                "patterns": [{
                  "include": "#inline_comment"
                }]
              },
              "11": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "12": {
                "name": "comment.block.cpp"
              },
              "13": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              },
              "14": {
                "name": "entity.name.type.alias.cpp"
              }
            },
            "match": "(((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))?(?:(?:&|\\*)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*(?:&|\\*))?((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))"
          }, {
            "match": ","
          }]
        }]
      }]
    },
    "typeid_operator": {
      "begin": "((?<!\\w)typeid(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(\\()",
      "beginCaptures": {
        "1": {
          "name": "keyword.operator.functionlike.cpp keyword.operator.typeid.cpp"
        },
        "2": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "3": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "4": {
          "name": "comment.block.cpp"
        },
        "5": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "6": {
          "name": "punctuation.section.arguments.begin.bracket.round.operator.typeid.cpp"
        }
      },
      "contentName": "meta.arguments.operator.typeid",
      "end": "\\)",
      "endCaptures": {
        "0": {
          "name": "punctuation.section.arguments.end.bracket.round.operator.typeid.cpp"
        }
      },
      "patterns": [{
        "include": "#evaluation_context"
      }]
    },
    "typename": {
      "captures": {
        "1": {
          "name": "storage.modifier.cpp"
        },
        "2": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "3": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "4": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "5": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "6": {
          "name": "meta.qualified_type.cpp",
          "patterns": [{
            "match": "::",
            "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.cpp"
          }, {
            "match": "(?<!\\w)(?:(?:struct)|(?:class)|(?:union)|(?:enum))(?!\\w)",
            "name": "storage.type.$0.cpp"
          }, {
            "include": "#attributes_context"
          }, {
            "include": "#storage_types"
          }, {
            "include": "#number_literal"
          }, {
            "include": "#string_context"
          }, {
            "include": "#comma"
          }, {
            "include": "#scope_resolution_inner_generated"
          }, {
            "begin": "<",
            "beginCaptures": {
              "0": {
                "name": "punctuation.section.angle-brackets.begin.template.call.cpp"
              }
            },
            "end": ">",
            "endCaptures": {
              "0": {
                "name": "punctuation.section.angle-brackets.end.template.call.cpp"
              }
            },
            "name": "meta.template.call.cpp",
            "patterns": [{
              "include": "#template_call_context"
            }]
          }, {
            "match": "(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*",
            "name": "entity.name.type.cpp"
          }]
        },
        "7": {
          "patterns": [{
            "include": "#attributes_context"
          }, {
            "include": "#number_literal"
          }]
        },
        "8": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "9": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "10": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "11": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "12": {
          "patterns": [{
            "match": "::",
            "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.type.cpp"
          }, {
            "match": "(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)",
            "name": "entity.name.scope-resolution.type.cpp"
          }, {
            "include": "#template_call_range"
          }]
        },
        "13": {
          "patterns": [{
            "include": "#template_call_range"
          }]
        },
        "14": {},
        "15": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "16": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "17": {}
      },
      "match": `(((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?<!\\w)typename(?!\\w))((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(\\s*+((?:(?:(?:\\[\\[.*?\\]\\]|__attribute(?:__)?\\s*\\(\\s*\\(.*?\\)\\s*\\))|__declspec\\(.*?\\))|alignas\\(.*?\\))(?!\\)))?((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:(?:(?:(?:unsigned)|(?:signed)|(?:short)|(?:long))|(?:(?:struct)|(?:class)|(?:union)|(?:enum)))((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*(?:((?:::)?(?:(?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)\\s*+(((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<17>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)\\s*+)?::)*+)((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))?(?!(?:(?:transaction_safe_dynamic)|(?:__has_cpp_attribute)|(?:reinterpret_cast)|(?:transaction_safe)|(?:atomic_noexcept)|(?:atomic_commit)|(?:__has_include)|(?:atomic_cancel)|(?:synchronized)|(?:thread_local)|(?:dynamic_cast)|(?:static_cast)|(?:const_cast)|(?:constexpr)|(?:co_return)|(?:constinit)|(?:namespace)|(?:protected)|(?:consteval)|(?:constexpr)|(?:constexpr)|(?:co_return)|(?:consteval)|(?:co_await)|(?:continue)|(?:template)|(?:reflexpr)|(?:volatile)|(?:register)|(?:co_await)|(?:co_yield)|(?:restrict)|(?:noexcept)|(?:volatile)|(?:override)|(?:explicit)|(?:decltype)|(?:operator)|(?:noexcept)|(?:noexcept)|(?:typename)|(?:requires)|(?:co_yield)|(?:nullptr)|(?:alignof)|(?:alignas)|(?:default)|(?:mutable)|(?:virtual)|(?:mutable)|(?:private)|(?:include)|(?:warning)|(?:_Pragma)|(?:defined)|(?:typedef)|(?:__asm__)|(?:concept)|(?:define)|(?:module)|(?:sizeof)|(?:switch)|(?:delete)|(?:pragma)|(?:and_eq)|(?:inline)|(?:xor_eq)|(?:typeid)|(?:import)|(?:extern)|(?:public)|(?:bitand)|(?:static)|(?:export)|(?:return)|(?:friend)|(?:ifndef)|(?:not_eq)|(?:false)|(?:final)|(?:break)|(?:const)|(?:catch)|(?:endif)|(?:ifdef)|(?:undef)|(?:error)|(?:audit)|(?:while)|(?:using)|(?:axiom)|(?:or_eq)|(?:compl)|(?:throw)|(?:bitor)|(?:const)|(?:line)|(?:case)|(?:else)|(?:this)|(?:true)|(?:goto)|(?:else)|(?:NULL)|(?:elif)|(?:new)|(?:asm)|(?:xor)|(?:and)|(?:try)|(?:not)|(?:for)|(?:do)|(?:if)|(?:or)|(?:if))\\b)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*\\b((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<17>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)?(?![\\w<:.]))`
    },
    "undef": {
      "captures": {
        "1": {
          "name": "keyword.control.directive.undef.cpp"
        },
        "2": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "3": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "4": {
          "name": "punctuation.definition.directive.cpp"
        },
        "5": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "6": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "7": {
          "name": "entity.name.function.preprocessor.cpp"
        }
      },
      "match": "(^((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(#)(?:\\s+)?undef\\b)((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))",
      "name": "meta.preprocessor.undef.cpp"
    },
    "union_block": {
      "begin": "((?<!\\w)union(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:(?={)|(?:((?:(?:(?:\\[\\[.*?\\]\\]|__attribute(?:__)?\\s*\\(\\s*\\(.*?\\)\\s*\\))|__declspec\\(.*?\\))|alignas\\(.*?\\))(?!\\)))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))?((?:(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*+)?(?:((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(:(?!:)))?)",
      "beginCaptures": {
        "0": {
          "name": "meta.head.union.cpp"
        },
        "1": {
          "name": "storage.type.$1.cpp"
        },
        "2": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "3": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "4": {
          "name": "comment.block.cpp"
        },
        "5": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "6": {
          "patterns": [{
            "include": "#attributes_context"
          }, {
            "include": "#number_literal"
          }]
        },
        "7": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "8": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "9": {
          "name": "comment.block.cpp"
        },
        "10": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "11": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "storage.type.modifier.final.cpp"
              },
              "2": {
                "patterns": [{
                  "include": "#inline_comment"
                }]
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "4": {
                "name": "comment.block.cpp"
              },
              "5": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "((?<!\\w)final(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))"
          }, {
            "captures": {
              "1": {
                "name": "entity.name.type.union.cpp"
              },
              "2": {
                "patterns": [{
                  "include": "#inline_comment"
                }]
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "4": {
                "name": "comment.block.cpp"
              },
              "5": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              },
              "6": {
                "name": "storage.type.modifier.final.cpp"
              },
              "7": {
                "patterns": [{
                  "include": "#inline_comment"
                }]
              },
              "8": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "9": {
                "name": "comment.block.cpp"
              },
              "10": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?:((?<!\\w)final(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))?(?=:|{|$)"
          }, {
            "match": "DLLEXPORT",
            "name": "entity.name.other.preprocessor.macro.predefined.DLLEXPORT.cpp"
          }, {
            "match": "(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*",
            "name": "entity.name.other.preprocessor.macro.predefined.probably.$0.cpp"
          }]
        },
        "12": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "13": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "14": {
          "name": "comment.block.cpp"
        },
        "15": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "16": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "17": {
          "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
        },
        "18": {
          "name": "comment.block.cpp"
        },
        "19": {
          "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
        },
        "20": {
          "name": "punctuation.separator.colon.inheritance.cpp"
        }
      },
      "end": "(?:(?:(?<=\\}|%>|\\?\\?>)(?:\\s+)?(;)|(;))|(?=[;>\\[\\]=]))",
      "endCaptures": {
        "1": {
          "name": "punctuation.terminator.statement.cpp"
        },
        "2": {
          "name": "punctuation.terminator.statement.cpp"
        }
      },
      "name": "meta.block.union.cpp",
      "patterns": [{
        "begin": "\\G ?",
        "beginCaptures": {},
        "end": "(?:\\{|<%|\\?\\?<|(?=;))",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.block.begin.bracket.curly.union.cpp"
          }
        },
        "name": "meta.head.union.cpp",
        "patterns": [{
          "include": "#ever_present_context"
        }, {
          "include": "#inheritance_context"
        }, {
          "include": "#template_call_range"
        }]
      }, {
        "begin": "(?<=\\{|<%|\\?\\?<)",
        "beginCaptures": {},
        "end": "\\}|%>|\\?\\?>",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.block.end.bracket.curly.union.cpp"
          }
        },
        "name": "meta.body.union.cpp",
        "patterns": [{
          "include": "#function_pointer"
        }, {
          "include": "#static_assert"
        }, {
          "include": "#constructor_inline"
        }, {
          "include": "#destructor_inline"
        }, {
          "include": "$self"
        }]
      }, {
        "begin": "(?<=\\}|%>|\\?\\?>)[\\s]*",
        "beginCaptures": {},
        "end": "[\\s]*(?=;)",
        "endCaptures": {},
        "name": "meta.tail.union.cpp",
        "patterns": [{
          "include": "$self"
        }]
      }]
    },
    "union_declare": {
      "captures": {
        "1": {
          "name": "storage.type.union.declare.cpp"
        },
        "2": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "3": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "4": {
          "name": "entity.name.type.union.cpp"
        },
        "5": {
          "patterns": [{
            "match": "\\*",
            "name": "storage.modifier.pointer.cpp"
          }, {
            "captures": {
              "1": {
                "patterns": [{
                  "include": "#inline_comment"
                }]
              },
              "2": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "3": {
                "name": "comment.block.cpp"
              },
              "4": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "(?:\\&((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))){2,}\\&",
            "name": "invalid.illegal.reference-type.cpp"
          }, {
            "match": "\\&",
            "name": "storage.modifier.reference.cpp"
          }]
        },
        "6": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "7": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "8": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "9": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "10": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "11": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        },
        "12": {
          "name": "variable.other.object.declare.cpp"
        },
        "13": {
          "patterns": [{
            "include": "#inline_comment"
          }]
        },
        "14": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "comment.block.cpp punctuation.definition.comment.begin.cpp"
              },
              "2": {
                "name": "comment.block.cpp"
              },
              "3": {
                "name": "comment.block.cpp punctuation.definition.comment.end.cpp"
              }
            },
            "match": "\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+"
          }]
        }
      },
      "match": "((?<!\\w)union(?!\\w))((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))(((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))?(?:(?:&|\\*)((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z)))*(?:&|\\*))?((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))\\b(?!override\\W|override\\$|final\\W|final\\$)((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))((?:((?:\\s*+\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(?=\\S)(?![:{a-zA-Z])"
    },
    "using_name": {
      "captures": {
        "1": {
          "name": "keyword.other.using.directive.cpp"
        }
      },
      "match": "(using)\\s+(?!namespace\\b)"
    },
    "using_namespace": {
      "begin": `(?<!\\w)(using)\\s+(namespace)\\s+((::)?(?:(?!\\b(?:__has_cpp_attribute|reinterpret_cast|atomic_noexcept|atomic_commit|atomic_cancel|__has_include|thread_local|dynamic_cast|synchronized|static_cast|const_cast|consteval|co_return|protected|constinit|constexpr|co_return|consteval|namespace|constexpr|constexpr|co_await|explicit|volatile|noexcept|co_yield|noexcept|noexcept|requires|typename|decltype|operator|template|continue|co_await|co_yield|volatile|register|restrict|reflexpr|mutable|alignof|include|private|defined|typedef|_Pragma|__asm__|concept|mutable|warning|default|virtual|alignas|public|sizeof|delete|not_eq|bitand|and_eq|xor_eq|typeid|switch|return|struct|static|extern|inline|friend|ifndef|define|pragma|export|import|module|catch|throw|const|or_eq|compl|while|ifdef|const|bitor|union|class|undef|error|break|using|endif|goto|line|enum|this|case|else|elif|else|not|try|for|asm|and|xor|new|do|if|or|if)\\b)(?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w)\\s*+(((?<!<)<(?!<)(?:(?:\\/\\*(?:[^\\*]++|\\*+(?!\\/))*+\\*\\/)|(?:"(?:[^"]*|\\\\")")|(?:'(?:[^']*|\\\\')')|\\g<6>|(?:(?:[^'"<>\\/]|\\/[^*])++))*>)\\s*+)?::)*\\s*+)?((?<!\\w)(?:[a-zA-Z_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))(?:[a-zA-Z0-9_]|(?:\\\\u[0-9a-fA-F]{4}|\\\\U[0-9a-fA-F]{8}))*(?!\\w))(?=;|\\n)`,
      "beginCaptures": {
        "1": {
          "name": "keyword.other.using.directive.cpp"
        },
        "2": {
          "name": "keyword.other.namespace.directive.cpp storage.type.namespace.directive.cpp"
        },
        "3": {
          "patterns": [{
            "include": "#scope_resolution_namespace_using_inner_generated"
          }]
        },
        "4": {
          "name": "punctuation.separator.namespace.access.cpp punctuation.separator.scope-resolution.namespace.using.cpp"
        },
        "5": {
          "patterns": [{
            "include": "#template_call_range"
          }]
        },
        "6": {},
        "7": {
          "name": "entity.name.namespace.cpp"
        }
      },
      "end": ";",
      "endCaptures": {
        "0": {
          "name": "punctuation.terminator.statement.cpp"
        }
      },
      "name": "meta.using-namespace.cpp"
    },
    "vararg_ellipses": {
      "match": "(?<!\\.)\\.\\.\\.(?!\\.)",
      "name": "punctuation.vararg-ellipses.cpp"
    },
    "wordlike_operators": {
      "patterns": [{
        "match": "(?<!\\w)(?:(?:noexcept)|(?:xor_eq)|(?:and_eq)|(?:delete)|(?:not_eq)|(?:bitand)|(?:bitor)|(?:compl)|(?:or_eq)|(?:not)|(?:xor)|(?:new)|(?:and)|(?:or))(?!\\w)",
        "name": "keyword.operator.wordlike.cpp keyword.operator.$0.cpp"
      }]
    }
  },
  "scopeName": "source.cpp",
  "embeddedLangs": ["cpp-macro", "regexp", "glsl", "sql"],
  "aliases": ["c++"]
});
var cpp = [...cpp_macro, ...regexp, ...glsl, ...sql, lang2];

export {
  cpp
};
//# sourceMappingURL=chunk-JFDEN5M2.js.map
