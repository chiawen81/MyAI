import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  html_derivative
} from "./chunk-VRGU3GPN.js";
import {
  cmake
} from "./chunk-JMQGLB5F.js";
import {
  ruby
} from "./chunk-4GWXPJLH.js";
import {
  shellscript
} from "./chunk-UI2VLQQK.js";
import "./chunk-SWAVIBYJ.js";
import {
  python
} from "./chunk-TYHVRD4G.js";
import {
  cpp
} from "./chunk-JFDEN5M2.js";
import "./chunk-XBSJNNYU.js";
import "./chunk-UXBYIOCN.js";
import "./chunk-6ZZBOZY5.js";
import {
  yaml
} from "./chunk-YZTUBCZF.js";
import "./chunk-L3CNJAQQ.js";
import "./chunk-INHGZOUG.js";
import "./chunk-RYDGKIIS.js";
import "./chunk-PZDAJBBP.js";
import {
  javascript
} from "./chunk-TZXFUJOZ.js";
import "./chunk-2SZ5X6K7.js";
import "./chunk-NQ4HTGF6.js";

// node_modules/shiki/dist/langs/rst.mjs
var lang = Object.freeze({
  "displayName": "reStructuredText",
  "name": "rst",
  "patterns": [{
    "include": "#body"
  }],
  "repository": {
    "anchor": {
      "match": "^\\.{2}\\s+(_[^:]+:)\\s*",
      "name": "entity.name.tag.anchor"
    },
    "block": {
      "begin": "^(\\s*)(\\.{2}\\s+\\S+::)(.*)",
      "beginCaptures": {
        "2": {
          "name": "keyword.control"
        },
        "3": {
          "name": "variable"
        }
      },
      "end": "^(?!\\1\\s|\\s*$)",
      "patterns": [{
        "include": "#block-param"
      }, {
        "include": "#body"
      }]
    },
    "block-comment": {
      "begin": "^(\\s*)\\.{2}(\\s+|$)",
      "end": "^(?=\\S)|^\\s*$",
      "name": "comment.block",
      "patterns": [{
        "begin": "^\\s{3,}(?=\\S)",
        "name": "comment.block",
        "while": "^\\s{3}.*|^\\s*$"
      }]
    },
    "block-param": {
      "patterns": [{
        "captures": {
          "1": {
            "name": "keyword.control"
          },
          "2": {
            "name": "variable.parameter"
          }
        },
        "match": "(:param\\s+(.+?):)(?:\\s|$)"
      }, {
        "captures": {
          "1": {
            "name": "keyword.control"
          },
          "2": {
            "patterns": [{
              "match": "\\b(0x[a-fA-F\\d]+|\\d+)\\b",
              "name": "constant.numeric"
            }, {
              "include": "#inline-markup"
            }]
          }
        },
        "match": "(:.+?:)(?:$|\\s+(.*))"
      }]
    },
    "blocks": {
      "patterns": [{
        "include": "#domains"
      }, {
        "include": "#doctest"
      }, {
        "include": "#code-block-cpp"
      }, {
        "include": "#code-block-py"
      }, {
        "include": "#code-block-console"
      }, {
        "include": "#code-block-javascript"
      }, {
        "include": "#code-block-yaml"
      }, {
        "include": "#code-block-cmake"
      }, {
        "include": "#code-block-kconfig"
      }, {
        "include": "#code-block-ruby"
      }, {
        "include": "#code-block-dts"
      }, {
        "include": "#code-block"
      }, {
        "include": "#doctest-block"
      }, {
        "include": "#raw-html"
      }, {
        "include": "#block"
      }, {
        "include": "#literal-block"
      }, {
        "include": "#block-comment"
      }]
    },
    "body": {
      "patterns": [{
        "include": "#title"
      }, {
        "include": "#inline-markup"
      }, {
        "include": "#anchor"
      }, {
        "include": "#line-block"
      }, {
        "include": "#replace-include"
      }, {
        "include": "#footnote"
      }, {
        "include": "#substitution"
      }, {
        "include": "#blocks"
      }, {
        "include": "#table"
      }, {
        "include": "#simple-table"
      }, {
        "include": "#options-list"
      }]
    },
    "bold": {
      "begin": `(?<=[\\s"'(\\[{<]|^)\\*{2}[^\\s*]`,
      "end": "\\*{2}|^\\s*$",
      "name": "markup.bold"
    },
    "citation": {
      "applyEndPatternLast": 0,
      "begin": "(?<=[\\s\"'(\\[{<]|^)`[^\\s`]",
      "end": "`_{,2}|^\\s*$",
      "name": "entity.name.tag"
    },
    "code-block": {
      "begin": "^(\\s*)(\\.{2}\\s+(code|code-block)::)",
      "beginCaptures": {
        "2": {
          "name": "keyword.control"
        }
      },
      "patterns": [{
        "include": "#block-param"
      }],
      "while": "^\\1(?=\\s)|^\\s*$"
    },
    "code-block-cmake": {
      "begin": "^(\\s*)(\\.{2}\\s+(code|code-block)::)\\s*(cmake)\\s*$",
      "beginCaptures": {
        "2": {
          "name": "keyword.control"
        },
        "4": {
          "name": "variable.parameter.codeblock.cmake"
        }
      },
      "patterns": [{
        "include": "#block-param"
      }, {
        "include": "source.cmake"
      }],
      "while": "^\\1(?=\\s)|^\\s*$"
    },
    "code-block-console": {
      "begin": "^(\\s*)(\\.{2}\\s+(code|code-block)::)\\s*(console|shell|bash)\\s*$",
      "beginCaptures": {
        "2": {
          "name": "keyword.control"
        },
        "4": {
          "name": "variable.parameter.codeblock.console"
        }
      },
      "patterns": [{
        "include": "#block-param"
      }, {
        "include": "source.shell"
      }],
      "while": "^\\1(?=\\s)|^\\s*$"
    },
    "code-block-cpp": {
      "begin": "^(\\s*)(\\.{2}\\s+(code|code-block)::)\\s*(c|c\\+\\+|cpp|C|C\\+\\+|CPP|Cpp)\\s*$",
      "beginCaptures": {
        "2": {
          "name": "keyword.control"
        },
        "4": {
          "name": "variable.parameter.codeblock.cpp"
        }
      },
      "patterns": [{
        "include": "#block-param"
      }, {
        "include": "source.cpp"
      }],
      "while": "^\\1(?=\\s)|^\\s*$"
    },
    "code-block-dts": {
      "begin": "^(\\s*)(\\.{2}\\s+(code|code-block)::)\\s*(dts|DTS|devicetree)\\s*$",
      "beginCaptures": {
        "2": {
          "name": "keyword.control"
        },
        "4": {
          "name": "variable.parameter.codeblock.dts"
        }
      },
      "patterns": [{
        "include": "#block-param"
      }, {
        "include": "source.dts"
      }],
      "while": "^\\1(?=\\s)|^\\s*$"
    },
    "code-block-javascript": {
      "begin": "^(\\s*)(\\.{2}\\s+(code|code-block)::)\\s*(javascript)\\s*$",
      "beginCaptures": {
        "2": {
          "name": "keyword.control"
        },
        "4": {
          "name": "variable.parameter.codeblock.js"
        }
      },
      "patterns": [{
        "include": "#block-param"
      }, {
        "include": "source.js"
      }],
      "while": "^\\1(?=\\s)|^\\s*$"
    },
    "code-block-kconfig": {
      "begin": "^(\\s*)(\\.{2}\\s+(code|code-block)::)\\s*([kK]config)\\s*$",
      "beginCaptures": {
        "2": {
          "name": "keyword.control"
        },
        "4": {
          "name": "variable.parameter.codeblock.kconfig"
        }
      },
      "patterns": [{
        "include": "#block-param"
      }, {
        "include": "source.kconfig"
      }],
      "while": "^\\1(?=\\s)|^\\s*$"
    },
    "code-block-py": {
      "begin": "^(\\s*)(\\.{2}\\s+(code|code-block)::)\\s*(python)\\s*$",
      "beginCaptures": {
        "2": {
          "name": "keyword.control"
        },
        "4": {
          "name": "variable.parameter.codeblock.py"
        }
      },
      "patterns": [{
        "include": "#block-param"
      }, {
        "include": "source.python"
      }],
      "while": "^\\1(?=\\s)|^\\s*$"
    },
    "code-block-ruby": {
      "begin": "^(\\s*)(\\.{2}\\s+(code|code-block)::)\\s*(ruby)\\s*$",
      "beginCaptures": {
        "2": {
          "name": "keyword.control"
        },
        "4": {
          "name": "variable.parameter.codeblock.ruby"
        }
      },
      "patterns": [{
        "include": "#block-param"
      }, {
        "include": "source.ruby"
      }],
      "while": "^\\1(?=\\s)|^\\s*$"
    },
    "code-block-yaml": {
      "begin": "^(\\s*)(\\.{2}\\s+(code|code-block)::)\\s*(ya?ml)\\s*$",
      "beginCaptures": {
        "2": {
          "name": "keyword.control"
        },
        "4": {
          "name": "variable.parameter.codeblock.yaml"
        }
      },
      "patterns": [{
        "include": "#block-param"
      }, {
        "include": "source.yaml"
      }],
      "while": "^\\1(?=\\s)|^\\s*$"
    },
    "doctest": {
      "begin": "^(>>>)\\s*(.*)",
      "beginCaptures": {
        "1": {
          "name": "keyword.control"
        },
        "2": {
          "patterns": [{
            "include": "source.python"
          }]
        }
      },
      "end": "^\\s*$"
    },
    "doctest-block": {
      "begin": "^(\\s*)(\\.{2}\\s+doctest::)\\s*$",
      "beginCaptures": {
        "2": {
          "name": "keyword.control"
        }
      },
      "patterns": [{
        "include": "#block-param"
      }, {
        "include": "source.python"
      }],
      "while": "^\\1(?=\\s)|^\\s*$"
    },
    "domain-auto": {
      "begin": "^(\\s*)(\\.{2}\\s+auto(?:class|module|exception|function|decorator|data|method|attribute|property)::)\\s*(.*)",
      "beginCaptures": {
        "2": {
          "name": "keyword.control.py"
        },
        "3": {
          "patterns": [{
            "include": "source.python"
          }]
        }
      },
      "patterns": [{
        "include": "#block-param"
      }, {
        "include": "#body"
      }],
      "while": "^\\1(?=\\s)|^\\s*$"
    },
    "domain-cpp": {
      "begin": "^(\\s*)(\\.{2}\\s+(?:cpp|c):(?:class|struct|function|member|var|type|enum|enum-struct|enum-class|enumerator|union|concept)::)\\s*(?:(@\\w+)|(.*))",
      "beginCaptures": {
        "2": {
          "name": "keyword.control"
        },
        "3": {
          "name": "entity.name.tag"
        },
        "4": {
          "patterns": [{
            "include": "source.cpp"
          }]
        }
      },
      "patterns": [{
        "include": "#block-param"
      }, {
        "include": "#body"
      }],
      "while": "^\\1(?=\\s)|^\\s*$"
    },
    "domain-js": {
      "begin": "^(\\s*)(\\.{2}\\s+js:\\w+::)\\s*(.*)",
      "beginCaptures": {
        "2": {
          "name": "keyword.control"
        },
        "3": {
          "patterns": [{
            "include": "source.js"
          }]
        }
      },
      "end": "^(?!\\1[ \\t]|$)",
      "patterns": [{
        "include": "#block-param"
      }, {
        "include": "#body"
      }]
    },
    "domain-py": {
      "begin": "^(\\s*)(\\.{2}\\s+py:(?:module|function|data|exception|class|attribute|property|method|staticmethod|classmethod|decorator|decoratormethod)::)\\s*(.*)",
      "beginCaptures": {
        "2": {
          "name": "keyword.control"
        },
        "3": {
          "patterns": [{
            "include": "source.python"
          }]
        }
      },
      "patterns": [{
        "include": "#block-param"
      }, {
        "include": "#body"
      }],
      "while": "^\\1(?=\\s)|^\\s*$"
    },
    "domains": {
      "patterns": [{
        "include": "#domain-cpp"
      }, {
        "include": "#domain-py"
      }, {
        "include": "#domain-auto"
      }, {
        "include": "#domain-js"
      }]
    },
    "escaped": {
      "match": "\\\\.",
      "name": "constant.character.escape"
    },
    "footnote": {
      "match": "^\\s*\\.{2}\\s+\\[(?:[\\w\\.-]+|[#*]|#\\w+)\\]\\s+",
      "name": "entity.name.tag"
    },
    "footnote-ref": {
      "match": "\\[(?:[\\w\\.-]+|[#*])\\]_",
      "name": "entity.name.tag"
    },
    "ignore": {
      "patterns": [{
        "match": "'[`*]+'"
      }, {
        "match": "<[`*]+>"
      }, {
        "match": "{[`*]+}"
      }, {
        "match": "\\([`*]+\\)"
      }, {
        "match": "\\[[`*]+\\]"
      }, {
        "match": '"[`*]+"'
      }]
    },
    "inline-markup": {
      "patterns": [{
        "include": "#escaped"
      }, {
        "include": "#ignore"
      }, {
        "include": "#ref"
      }, {
        "include": "#literal"
      }, {
        "include": "#monospaced"
      }, {
        "include": "#citation"
      }, {
        "include": "#bold"
      }, {
        "include": "#italic"
      }, {
        "include": "#list"
      }, {
        "include": "#macro"
      }, {
        "include": "#reference"
      }, {
        "include": "#footnote-ref"
      }]
    },
    "italic": {
      "begin": `(?<=[\\s"'(\\[{<]|^)\\*[^\\s*]`,
      "end": "\\*|^\\s*$",
      "name": "markup.italic"
    },
    "line-block": {
      "match": "^\\|\\s+",
      "name": "keyword.control"
    },
    "list": {
      "match": "^\\s*(\\d+\\.|\\* -|[a-zA-Z#]\\.|[iIvVxXmMcC]+\\.|\\(\\d+\\)|\\d+\\)|[*+-])\\s+",
      "name": "keyword.control"
    },
    "literal": {
      "captures": {
        "1": {
          "name": "keyword.control"
        },
        "2": {
          "name": "entity.name.tag"
        }
      },
      "match": "(:\\S+:)(`.*?`\\\\?)"
    },
    "literal-block": {
      "begin": "^(\\s*)(.*)(::)\\s*$",
      "beginCaptures": {
        "2": {
          "patterns": [{
            "include": "#inline-markup"
          }]
        },
        "3": {
          "name": "keyword.control"
        }
      },
      "while": "^\\1(?=\\s)|^\\s*$"
    },
    "macro": {
      "match": "\\|[^\\|]+\\|",
      "name": "entity.name.tag"
    },
    "monospaced": {
      "begin": "(?<=[\\s\"'(\\[{<]|^)``[^\\s`]",
      "end": "``|^\\s*$",
      "name": "string.interpolated"
    },
    "options-list": {
      "match": "(?:(?:^|,\\s+)(?:[-+]\\w|--?[a-zA-Z][\\w-]+|/\\w+)(?:[ =](?:\\w+|<[^<>]+?>))?)+(?=  |\\t|$)",
      "name": "variable.parameter"
    },
    "raw-html": {
      "begin": "^(\\s*)(\\.{2}\\s+raw\\s*::)\\s+(html)\\s*$",
      "beginCaptures": {
        "2": {
          "name": "keyword.control"
        },
        "3": {
          "name": "variable.parameter.html"
        }
      },
      "patterns": [{
        "include": "#block-param"
      }, {
        "include": "text.html.derivative"
      }],
      "while": "^\\1(?=\\s)|^\\s*$"
    },
    "ref": {
      "begin": "(:ref:)`",
      "beginCaptures": {
        "1": {
          "name": "keyword.control"
        }
      },
      "end": "`|^\\s*$",
      "name": "entity.name.tag",
      "patterns": [{
        "match": "<.*?>",
        "name": "markup.underline.link"
      }]
    },
    "reference": {
      "match": "[\\w-]*[a-zA-Z\\d-]__?\\b",
      "name": "entity.name.tag"
    },
    "replace-include": {
      "captures": {
        "1": {
          "name": "keyword.control"
        },
        "2": {
          "name": "entity.name.tag"
        },
        "3": {
          "name": "keyword.control"
        }
      },
      "match": "^\\s*(\\.{2})\\s+(\\|[^\\|]+\\|)\\s+(replace::)"
    },
    "simple-table": {
      "match": "^[=\\s]+$",
      "name": "keyword.control.table"
    },
    "substitution": {
      "match": "^\\.{2}\\s*\\|([^|]+)\\|",
      "name": "entity.name.tag"
    },
    "table": {
      "begin": "^\\s*\\+[=+-]+\\+\\s*$",
      "beginCaptures": {
        "0": {
          "name": "keyword.control.table"
        }
      },
      "end": "^(?![+|])",
      "patterns": [{
        "match": "[=+|-]",
        "name": "keyword.control.table"
      }]
    },
    "title": {
      "match": "^(\\*{3,}|#{3,}|\\={3,}|~{3,}|\\+{3,}|-{3,}|`{3,}|\\^{3,}|:{3,}|\"{3,}|_{3,}|'{3,})$",
      "name": "markup.heading"
    }
  },
  "scopeName": "source.rst",
  "embeddedLangs": ["html-derivative", "cpp", "python", "javascript", "shellscript", "yaml", "cmake", "ruby"]
});
var rst = [...html_derivative, ...cpp, ...python, ...javascript, ...shellscript, ...yaml, ...cmake, ...ruby, lang];
export {
  rst as default
};
//# sourceMappingURL=rst-B3TIDNBS.js.map
