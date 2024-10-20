import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  typescript
} from "./chunk-TSIBLI5C.js";
import {
  ruby
} from "./chunk-4GWXPJLH.js";
import {
  shellscript
} from "./chunk-UI2VLQQK.js";
import "./chunk-SWAVIBYJ.js";
import {
  rust
} from "./chunk-H6I2XBLE.js";
import {
  sass
} from "./chunk-QFWAJXVT.js";
import {
  scala
} from "./chunk-5KJZQFNJ.js";
import {
  swift
} from "./chunk-IOOWU35U.js";
import {
  toml
} from "./chunk-OWPULHDK.js";
import {
  julia
} from "./chunk-RH5UCSOQ.js";
import {
  r
} from "./chunk-XHOHCUAO.js";
import {
  kotlin
} from "./chunk-BVLT3GZR.js";
import {
  less
} from "./chunk-BUQ4VAGX.js";
import {
  make
} from "./chunk-DCZRDHPT.js";
import {
  objective_c
} from "./chunk-OALMQTWG.js";
import {
  ocaml
} from "./chunk-Q4RUJKVH.js";
import {
  perl
} from "./chunk-IDQIUHF4.js";
import {
  elixir
} from "./chunk-OWDKMGZQ.js";
import {
  elm
} from "./chunk-BAY3UCBX.js";
import {
  erlang
} from "./chunk-3VGB76QC.js";
import {
  go
} from "./chunk-AH3YBRNK.js";
import {
  groovy
} from "./chunk-S3F53UQ5.js";
import {
  haskell
} from "./chunk-XRXRBTMY.js";
import {
  jsx
} from "./chunk-SWECK6HL.js";
import {
  python
} from "./chunk-TYHVRD4G.js";
import {
  coffee
} from "./chunk-E7CM3ZIZ.js";
import {
  cpp
} from "./chunk-JFDEN5M2.js";
import "./chunk-XBSJNNYU.js";
import "./chunk-UXBYIOCN.js";
import {
  sql
} from "./chunk-6ZZBOZY5.js";
import {
  csharp
} from "./chunk-ONKMBYWA.js";
import {
  diff
} from "./chunk-VP54Z4ID.js";
import {
  docker
} from "./chunk-HXCML7PY.js";
import {
  json
} from "./chunk-K7RVDJWM.js";
import {
  yaml
} from "./chunk-YZTUBCZF.js";
import {
  csv
} from "./chunk-HLQDQOM7.js";
import {
  c
} from "./chunk-L3CNJAQQ.js";
import {
  clojure
} from "./chunk-PXQ4K7EX.js";
import {
  html
} from "./chunk-INHGZOUG.js";
import {
  scss
} from "./chunk-JCIBJMOH.js";
import {
  xml
} from "./chunk-RYDGKIIS.js";
import {
  java
} from "./chunk-PZDAJBBP.js";
import {
  javascript
} from "./chunk-TZXFUJOZ.js";
import {
  css
} from "./chunk-2SZ5X6K7.js";
import "./chunk-NQ4HTGF6.js";

// node_modules/shiki/dist/langs/asciidoc.mjs
var lang = Object.freeze({
  "displayName": "AsciiDoc",
  "fileTypes": ["ad", "asc", "adoc", "asciidoc", "adoc.txt"],
  "name": "asciidoc",
  "patterns": [{
    "include": "#comment"
  }, {
    "include": "#callout-list-item"
  }, {
    "include": "#titles"
  }, {
    "include": "#attribute-entry"
  }, {
    "include": "#blocks"
  }, {
    "include": "#block-title"
  }, {
    "include": "#tables"
  }, {
    "include": "#horizontal-rule"
  }, {
    "include": "#list"
  }, {
    "include": "#inlines"
  }, {
    "include": "#block-attribute"
  }, {
    "include": "#line-break"
  }],
  "repository": {
    "admonition-paragraph": {
      "patterns": [{
        "begin": "(?=(?>(?:^\\[(NOTE|TIP|IMPORTANT|WARNING|CAUTION)((?:,|#|\\.|%)[^\\]]+)*\\]$)))",
        "end": "((?<=--|====)$|^\\p{Blank}*$)",
        "name": "markup.admonition.asciidoc",
        "patterns": [{
          "captures": {
            "0": {
              "patterns": [{
                "include": "#block-attribute-inner"
              }]
            }
          },
          "match": "^\\[(NOTE|TIP|IMPORTANT|WARNING|CAUTION)((?:,|#|\\.|%)([^,\\]]+))*\\]$"
        }, {
          "include": "#inlines"
        }, {
          "include": "#block-title"
        }, {
          "begin": "^(={4,})\\s*$",
          "comment": "example block",
          "end": "(?<=\\1)",
          "patterns": [{
            "include": "#inlines"
          }, {
            "include": "#list"
          }]
        }, {
          "begin": "^(-{2})\\s*$",
          "comment": "open block",
          "end": "(?<=\\1)",
          "patterns": [{
            "include": "#inlines"
          }, {
            "include": "#list"
          }]
        }]
      }, {
        "begin": "^(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\\:\\p{Blank}+",
        "captures": {
          "1": {
            "name": "entity.name.function.asciidoc"
          }
        },
        "end": "^\\p{Blank}*$",
        "name": "markup.admonition.asciidoc",
        "patterns": [{
          "include": "#inlines"
        }]
      }]
    },
    "anchor-macro": {
      "patterns": [{
        "captures": {
          "1": {
            "name": "support.constant.asciidoc"
          },
          "2": {
            "name": "markup.blockid.asciidoc"
          },
          "3": {
            "name": "string.unquoted.asciidoc"
          },
          "4": {
            "name": "support.constant.asciidoc"
          }
        },
        "match": "(?<!\\\\)(?:(\\[{2})([\\p{Alpha}:_][\\p{Word}:.-]*)(?:,\\p{Blank}*(\\S.*?))?(\\]{2}))",
        "name": "markup.other.anchor.asciidoc"
      }, {
        "captures": {
          "1": {
            "name": "entity.name.function.asciidoc"
          },
          "2": {
            "name": "markup.blockid.asciidoc"
          },
          "3": {
            "name": "string.unquoted.asciidoc"
          }
        },
        "match": "(?<!\\\\)(anchor):(\\S+)\\[(.*?[^\\\\])?\\]",
        "name": "markup.other.anchor.asciidoc"
      }]
    },
    "attribute-entry": {
      "patterns": [{
        "begin": "^(:)(!?\\w.*?)(:)(\\p{Blank}+.+\\p{Blank}(?:\\+|\\\\))$",
        "beginCaptures": {
          "1": {
            "name": "punctuation.separator.attribute-entry.asciidoc"
          },
          "2": {
            "name": "support.constant.attribute-name.asciidoc"
          },
          "3": {
            "name": "punctuation.separator.attribute-entry.asciidoc"
          },
          "4": {
            "name": "string.unquoted.attribute-value.asciidoc",
            "patterns": [{
              "include": "#inlines"
            }, {
              "include": "#hard-break-backslash"
            }, {
              "include": "#line-break"
            }, {
              "include": "#line-break-backslash"
            }]
          }
        },
        "contentName": "string.unquoted.attribute-value.asciidoc",
        "end": "^\\p{Blank}+.+$(?<!\\+|\\\\)|^\\p{Blank}*$",
        "endCaptures": {
          "0": {
            "name": "string.unquoted.attribute-value.asciidoc"
          }
        },
        "name": "meta.definition.attribute-entry.asciidoc",
        "patterns": [{
          "include": "#inlines"
        }, {
          "include": "#hard-break-backslash"
        }, {
          "include": "#line-break"
        }, {
          "include": "#line-break-backslash"
        }]
      }, {
        "captures": {
          "1": {
            "name": "punctuation.separator.asciidoc"
          },
          "2": {
            "name": "support.constant.attribute-name.asciidoc"
          },
          "3": {
            "name": "punctuation.separator.asciidoc"
          },
          "4": {
            "name": "string.unquoted.attribute-value.asciidoc",
            "patterns": [{
              "include": "#inlines"
            }, {
              "include": "#line-break"
            }]
          }
        },
        "match": "^(:)(!?\\w.*?)(:)(\\p{Blank}+(.*))?$",
        "name": "meta.definition.attribute-entry.asciidoc"
      }]
    },
    "attribute-reference": {
      "patterns": [{
        "captures": {
          "2": {
            "name": "entity.name.function.asciidoc"
          },
          "3": {
            "name": "punctuation.separator.asciidoc"
          },
          "4": {
            "name": "support.constant.attribute-name.asciidoc"
          },
          "6": {
            "name": "punctuation.separator.asciidoc"
          },
          "7": {
            "name": "string.unquoted.attribute-value.asciidoc"
          }
        },
        "match": "(?<!\\\\)(\\{)(set|counter2?)(:)([\\p{Alnum}\\-_!]+)((:)(.*?))?(?<!\\\\)(\\})",
        "name": "markup.substitution.attribute-reference.asciidoc"
      }, {
        "match": "(?<!\\\\)(\\{)(\\w+(?:[\\-]\\w+)*)(?<!\\\\)(\\})",
        "name": "markup.substitution.attribute-reference.asciidoc"
      }]
    },
    "bibliography-anchor": {
      "patterns": [{
        "captures": {
          "1": {
            "name": "support.constant.asciidoc"
          },
          "2": {
            "name": "markup.biblioref.asciidoc"
          },
          "3": {
            "name": "support.constant.asciidoc"
          }
        },
        "match": "(?<!\\\\)(\\[{3})([\\p{Word}:][\\p{Word}:.-]*?)(\\]{3})",
        "name": "bibliography-anchor.asciidoc"
      }]
    },
    "bibtex-macro": {
      "patterns": [{
        "begin": "(?<!\\\\)(citenp:)([a-z,]*)(\\[)",
        "beginCaptures": {
          "1": {
            "name": "entity.name.function.asciidoc"
          },
          "2": {
            "name": "markup.meta.attribute-list.asciidoc"
          }
        },
        "contentName": "string.unquoted.asciidoc",
        "end": "\\]|^$",
        "name": "markup.macro.inline.bibtex.asciidoc"
      }]
    },
    "block-attribute": {
      "patterns": [{
        "captures": {
          "0": {
            "patterns": [{
              "include": "#block-attribute-inner"
            }]
          }
        },
        "match": `^\\[(|\\p{Blank}*[\\p{Word}\\{,.#"'%].*)\\]$`,
        "name": "markup.heading.block-attribute.asciidoc"
      }]
    },
    "block-attribute-inner": {
      "patterns": [{
        "comment": "separators",
        "match": "([,.#%])",
        "name": "punctuation.separator.asciidoc"
      }, {
        "captures": {
          "0": {
            "name": "markup.meta.attribute-list.asciidoc",
            "patterns": [{
              "include": "#keywords"
            }]
          }
        },
        "comment": "blockname",
        "match": "(?<=\\[)([^\\[\\],.#%=]+)"
      }, {
        "captures": {
          "0": {
            "patterns": [{
              "include": "#attribute-reference"
            }]
          }
        },
        "comment": "attributes",
        "match": `(?<=\\{|,|.|#|"|'|%)([^\\],.#%]+)`,
        "name": "markup.meta.attribute-list.asciidoc"
      }]
    },
    "block-callout": {
      "patterns": [{
        "captures": {
          "2": {
            "name": "constant.other.symbol.asciidoc"
          },
          "4": {
            "name": "constant.numeric.asciidoc"
          },
          "5": {
            "name": "constant.other.symbol.asciidoc"
          }
        },
        "match": "(?:(?:\\/\\/|#|--|;;) ?)?( )?(?<!\\\\)(<)!?(--|)(\\d+)\\3(>)(?=(?: ?<!?\\3\\d+\\3>)*$)",
        "name": "callout.source.code.asciidoc"
      }]
    },
    "block-title": {
      "patterns": [{
        "begin": "^\\.([^\\p{Blank}.].*)",
        "captures": {
          "1": {
            "name": "markup.heading.blocktitle.asciidoc"
          }
        },
        "end": "$"
      }]
    },
    "blocks": {
      "patterns": [{
        "include": "#front-matter-block"
      }, {
        "include": "#comment-paragraph"
      }, {
        "include": "#admonition-paragraph"
      }, {
        "include": "#quote-paragraph"
      }, {
        "include": "#listing-paragraph"
      }, {
        "include": "#source-paragraphs"
      }, {
        "include": "#passthrough-paragraph"
      }, {
        "include": "#example-paragraph"
      }, {
        "include": "#sidebar-paragraph"
      }, {
        "include": "#literal-paragraph"
      }, {
        "include": "#open-block"
      }]
    },
    "callout-list-item": {
      "patterns": [{
        "captures": {
          "1": {
            "name": "constant.other.symbol.asciidoc"
          },
          "2": {
            "name": "constant.numeric.asciidoc"
          },
          "3": {
            "name": "constant.other.symbol.asciidoc"
          },
          "4": {
            "patterns": [{
              "include": "#inlines"
            }]
          }
        },
        "match": "^(<)(\\d+)(>)\\p{Blank}+(.*)$",
        "name": "callout.asciidoc"
      }]
    },
    "characters": {
      "patterns": [{
        "captures": {
          "1": {
            "name": "constant.character.asciidoc"
          },
          "3": {
            "name": "constant.character.asciidoc"
          }
        },
        "match": "(?<!\\\\)(&)(\\S+?)(;)",
        "name": "markup.character-reference.asciidoc"
      }]
    },
    "comment": {
      "patterns": [{
        "begin": "^(/{4,})$",
        "end": "^\\1$",
        "name": "comment.block.asciidoc",
        "patterns": [{
          "include": "#inlines"
        }]
      }, {
        "match": "^/{2}([^/].*)?$",
        "name": "comment.inline.asciidoc"
      }]
    },
    "comment-paragraph": {
      "patterns": [{
        "begin": "(?=(?>(?:^\\[(comment)((?:,|#|\\.|%)[^\\]]+)*\\]$)))",
        "end": "((?<=--)$|^\\p{Blank}*$)",
        "name": "comment.block.asciidoc",
        "patterns": [{
          "captures": {
            "0": {
              "patterns": [{
                "include": "#block-attribute-inner"
              }]
            }
          },
          "match": "^\\[(comment)((?:,|#|\\.|%)([^,\\]]+))*\\]$"
        }, {
          "include": "#block-title"
        }, {
          "begin": "^(-{2})\\s*$",
          "comment": "open block",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#inlines"
          }, {
            "include": "#list"
          }]
        }, {
          "include": "#inlines"
        }]
      }]
    },
    "emphasis": {
      "patterns": [{
        "captures": {
          "1": {
            "name": "markup.meta.attribute-list.asciidoc"
          },
          "2": {
            "name": "markup.italic.asciidoc"
          },
          "3": {
            "name": "punctuation.definition.asciidoc"
          },
          "5": {
            "name": "punctuation.definition.asciidoc"
          }
        },
        "match": "(?<!\\\\\\\\)(\\[(?:[^\\]]+?)\\])?((__)((?!_).+?)(__))",
        "name": "markup.emphasis.unconstrained.asciidoc"
      }, {
        "captures": {
          "1": {
            "name": "markup.meta.attribute-list.asciidoc"
          },
          "2": {
            "name": "markup.italic.asciidoc"
          },
          "3": {
            "name": "punctuation.definition.asciidoc"
          },
          "5": {
            "name": "punctuation.definition.asciidoc"
          }
        },
        "match": "(?!_{4,}\\s*$)(?<=^|[^\\p{Word};:])(\\[(?:[^\\]]+?)\\])?((_)(\\S|\\S.*?\\S)(_))(?!\\p{Word})",
        "name": "markup.emphasis.constrained.asciidoc"
      }]
    },
    "example-paragraph": {
      "patterns": [{
        "begin": "(?=(?>(?:^\\[(example)((?:,|#|\\.|%)[^\\]]+)*\\]$)))",
        "end": "((?<=--|====)$|^\\p{Blank}*$)",
        "name": "markup.block.example.asciidoc",
        "patterns": [{
          "captures": {
            "0": {
              "patterns": [{
                "include": "#block-attribute-inner"
              }]
            }
          },
          "match": "^\\[(example)((?:,|#|\\.|%)([^,\\]]+))*\\]$"
        }, {
          "include": "#block-title"
        }, {
          "begin": "^(={4,})$",
          "comment": "example block",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "$self"
          }]
        }, {
          "begin": "^(-{2})$",
          "comment": "open block",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "$self"
          }]
        }, {
          "include": "#inlines"
        }]
      }, {
        "begin": "^(={4,})$",
        "end": "^(\\1)$",
        "name": "markup.block.example.asciidoc",
        "patterns": [{
          "include": "$self"
        }]
      }]
    },
    "footnote-macro": {
      "patterns": [{
        "begin": "(?<!\\\\)footnote(?:(ref):|:([\\w-]+)?)\\[(?:|(.*?[^\\\\]))\\]",
        "beginCaptures": {
          "1": {
            "name": "entity.name.function.asciidoc"
          },
          "2": {
            "name": "support.constant.attribute-name.asciidoc"
          }
        },
        "contentName": "string.unquoted.asciidoc",
        "end": "\\]|^$",
        "name": "markup.other.footnote.asciidoc",
        "patterns": [{
          "include": "#inlines"
        }]
      }]
    },
    "front-matter-block": {
      "patterns": [{
        "begin": "\\A(-{3}$)",
        "end": "^(\\1)$",
        "name": "markup.block.front-matter.asciidoc",
        "patterns": [{
          "include": "source.yaml"
        }]
      }]
    },
    "general-block-macro": {
      "patterns": [{
        "captures": {
          "1": {
            "name": "entity.name.function.asciidoc"
          },
          "2": {
            "name": "punctuation.separator.asciidoc"
          },
          "3": {
            "name": "markup.link.asciidoc",
            "patterns": [{
              "include": "#attribute-reference"
            }]
          },
          "4": {
            "name": "punctuation.separator.asciidoc"
          },
          "5": {
            "name": "string.unquoted.asciidoc",
            "patterns": [{
              "include": "#attribute-reference"
            }]
          },
          "6": {
            "name": "punctuation.separator.asciidoc"
          }
        },
        "match": "^(\\p{Word}+)(::)(\\S*?)(\\[)((?:\\\\\\]|[^\\]])*?)(\\])$",
        "name": "markup.macro.block.general.asciidoc"
      }]
    },
    "hard-break-backslash": {
      "patterns": [{
        "captures": {
          "1": {
            "name": "constant.other.symbol.hard-break.asciidoc"
          }
        },
        "match": "(?<=\\S)\\p{Blank}+(\\+ \\\\)$"
      }]
    },
    "horizontal-rule": {
      "patterns": [{
        "match": "^(?:'|<){3,}$|^ {0,3}([-\\*'])( *)\\1\\2\\1$",
        "name": "constant.other.symbol.horizontal-rule.asciidoc"
      }]
    },
    "image-macro": {
      "patterns": [{
        "captures": {
          "1": {
            "name": "entity.name.function.asciidoc"
          },
          "2": {
            "name": "markup.link.asciidoc"
          },
          "3": {
            "name": "string.unquoted.asciidoc"
          }
        },
        "match": "(?<!\\\\)(image|icon):([^:\\[][^\\[]*)\\[((?:\\\\\\]|[^\\]])*?)\\]",
        "name": "markup.macro.image.asciidoc"
      }]
    },
    "include-directive": {
      "patterns": [{
        "captures": {
          "1": {
            "name": "entity.name.function.asciidoc"
          },
          "2": {
            "name": "punctuation.separator.asciidoc"
          },
          "3": {
            "name": "markup.link.asciidoc",
            "patterns": [{
              "include": "#attribute-reference"
            }]
          },
          "4": {
            "name": "punctuation.separator.asciidoc"
          },
          "5": {
            "name": "string.unquoted.asciidoc",
            "patterns": [{
              "include": "#attribute-reference"
            }]
          },
          "6": {
            "name": "punctuation.separator.asciidoc"
          }
        },
        "match": "^(include)(::)([^\\[]+)(\\[)(.*?)(\\])$"
      }]
    },
    "inlines": {
      "patterns": [{
        "include": "#typographic-quotes"
      }, {
        "include": "#strong"
      }, {
        "include": "#monospace"
      }, {
        "include": "#emphasis"
      }, {
        "include": "#superscript"
      }, {
        "include": "#subscript"
      }, {
        "include": "#mark"
      }, {
        "include": "#general-block-macro"
      }, {
        "include": "#anchor-macro"
      }, {
        "include": "#footnote-macro"
      }, {
        "include": "#image-macro"
      }, {
        "include": "#kbd-macro"
      }, {
        "include": "#link-macro"
      }, {
        "include": "#stem-macro"
      }, {
        "include": "#menu-macro"
      }, {
        "include": "#passthrough-macro"
      }, {
        "include": "#xref-macro"
      }, {
        "include": "#attribute-reference"
      }, {
        "include": "#characters"
      }, {
        "include": "#bibtex-macro"
      }, {
        "include": "#bibliography-anchor"
      }]
    },
    "kbd-macro": {
      "patterns": [{
        "captures": {
          "1": {
            "name": "entity.name.function.asciidoc"
          },
          "3": {
            "name": "string.unquoted.asciidoc"
          }
        },
        "match": "(?<!\\\\)(kbd|btn):(\\[)((?:\\\\\\]|[^\\]])+?)(\\])",
        "name": "markup.macro.kbd.asciidoc"
      }]
    },
    "keywords": {
      "patterns": [{
        "comment": "Admonition",
        "match": "(NOTE|TIP|IMPORTANT|WARNING|CAUTION)",
        "name": "entity.name.function.asciidoc"
      }, {
        "comment": "Paragraph or verbatim",
        "match": "(comment|example|literal|listing|normal|pass|quote|sidebar|source|verse|abstract|partintro)",
        "name": "entity.name.function.asciidoc"
      }, {
        "comment": "Diagram",
        "match": "(actdiag|blockdiag|ditaa|graphviz|meme|mermaid|nwdiag|packetdiag|pikchr|plantuml|rackdiag|seqdiag|shaape|wavedrom)",
        "name": "entity.name.function.asciidoc"
      }, {
        "comment": "Others",
        "match": "(sect[1-4]|preface|colophon|dedication|glossary|bibliography|synopsis|appendix|index|normal|partintro|music|latex|stem)",
        "name": "entity.name.function.asciidoc"
      }]
    },
    "line-break": {
      "patterns": [{
        "captures": {
          "1": {
            "name": "variable.line-break.asciidoc"
          }
        },
        "match": "(?<=\\S)\\p{Blank}+(\\+)$"
      }]
    },
    "line-break-backslash": {
      "patterns": [{
        "captures": {
          "1": {
            "name": "variable.line-break.asciidoc"
          }
        },
        "match": "(?<=\\S)\\p{Blank}+(\\\\)$"
      }]
    },
    "link-macro": {
      "patterns": [{
        "captures": {
          "1": {
            "name": "markup.link.asciidoc",
            "patterns": [{
              "include": "#attribute-reference"
            }]
          },
          "2": {
            "name": "string.unquoted.asciidoc"
          }
        },
        "match": "(?:^|<|[\\s>\\(\\)\\[\\];])((?<!\\\\)(?:https?|file|ftp|irc)://[^\\s\\[\\]<]*[^\\s.,\\[\\]<\\)])(?:\\[((?:\\\\\\]|[^\\]])*?)\\])?",
        "name": "markup.other.url.asciidoc"
      }, {
        "captures": {
          "1": {
            "name": "markup.substitution.attribute-reference.asciidoc"
          },
          "2": {
            "name": "string.unquoted.asciidoc"
          }
        },
        "match": "(?:^|<|[\\p{Blank}>\\(\\)\\[\\];])((?<!\\\\)\\{uri-\\w+(?:[\\-]\\w+)*(?<!\\\\)\\})(?:\\[((?:\\\\\\]|[^\\]])*?)\\])",
        "name": "markup.other.url.asciidoc"
      }, {
        "captures": {
          "1": {
            "name": "entity.name.function.asciidoc"
          },
          "2": {
            "name": "markup.link.asciidoc",
            "patterns": [{
              "include": "#attribute-reference"
            }]
          },
          "3": {
            "name": "string.unquoted.asciidoc"
          }
        },
        "match": "(?<!\\\\)(link|mailto):([^\\s\\[]+)(?:\\[((?:\\\\\\]|[^\\]])*?)\\])",
        "name": "markup.other.url.asciidoc"
      }, {
        "match": "\\p{Word}[\\p{Word}.%+-]*(@)\\p{Alnum}[\\p{Alnum}.-]*(\\.)\\p{Alpha}{2,4}\\b",
        "name": "markup.link.email.asciidoc"
      }]
    },
    "list": {
      "patterns": [{
        "captures": {
          "1": {
            "name": "markup.list.bullet.asciidoc"
          },
          "2": {
            "name": "markup.todo.box.asciidoc"
          }
        },
        "match": "^\\s*(-)\\p{Blank}(\\[[\\p{Blank}\\*x]\\])(?=\\p{Blank})",
        "name": "markup.todo.asciidoc"
      }, {
        "captures": {
          "1": {
            "name": "markup.list.bullet.asciidoc"
          }
        },
        "match": "^\\p{Blank}*(-|\\*{1,5}|\\u2022{1,5})(?=\\p{Blank})",
        "name": "markup.list.asciidoc"
      }, {
        "captures": {
          "1": {
            "name": "markup.list.bullet.asciidoc"
          }
        },
        "match": "^\\p{Blank}*(\\.{1,5}|\\d+\\.|[a-zA-Z]\\.|[IVXivx]+\\))(?=\\p{Blank})",
        "name": "markup.list.asciidoc"
      }, {
        "captures": {
          "1": {
            "patterns": [{
              "include": "#link-macro"
            }, {
              "include": "#attribute-reference"
            }]
          },
          "2": {
            "name": "markup.list.bullet.asciidoc"
          }
        },
        "match": "^\\p{Blank}*(.*?\\S)(:{2,4}|;;)($|\\p{Blank}+)",
        "name": "markup.heading.list.asciidoc"
      }]
    },
    "listing-paragraph": {
      "patterns": [{
        "begin": "(?=(?>(?:^\\[(listing)((?:,|#|\\.|%)[^\\]]+)*\\]$)))",
        "end": "((?<=--)$|^\\p{Blank}*$)",
        "name": "markup.block.listing.asciidoc",
        "patterns": [{
          "captures": {
            "0": {
              "patterns": [{
                "include": "#block-attribute-inner"
              }]
            }
          },
          "match": "^\\[(listing)((?:,|#|\\.|%)([^,\\]]+))*\\]$"
        }, {
          "include": "#block-title"
        }, {
          "begin": "^(-{4,})\\s*$",
          "comment": "listing block",
          "end": "^(\\1)$"
        }, {
          "begin": "^(-{2})\\s*$",
          "comment": "open block",
          "end": "^(\\1)$"
        }, {
          "include": "#inlines"
        }]
      }]
    },
    "literal-paragraph": {
      "patterns": [{
        "begin": "(?=(?>(?:^\\[(literal)((?:,|#|\\.|%)[^\\]]+)*\\]$)))",
        "end": "((?<=--|\\.\\.)$|^\\p{Blank}*$)",
        "name": "markup.block.literal.asciidoc",
        "patterns": [{
          "captures": {
            "0": {
              "patterns": [{
                "include": "#block-attribute-inner"
              }]
            }
          },
          "match": "^\\[(literal)((?:,|#|\\.|%)([^,\\]]+))*\\]$"
        }, {
          "include": "#block-title"
        }, {
          "begin": "^(\\.{4,})$",
          "comment": "literal block",
          "end": "^(\\1)$"
        }, {
          "begin": "^(-{2})\\s*$",
          "comment": "open block",
          "end": "^(\\1)$"
        }, {
          "include": "#inlines"
        }]
      }, {
        "begin": "^(\\.{4,})$",
        "end": "^(\\1)$",
        "name": "markup.block.literal.asciidoc"
      }]
    },
    "mark": {
      "patterns": [{
        "captures": {
          "1": {
            "name": "markup.meta.attribute-list.asciidoc"
          },
          "2": {
            "name": "markup.mark.asciidoc"
          },
          "3": {
            "name": "punctuation.definition.asciidoc"
          },
          "5": {
            "name": "punctuation.definition.asciidoc"
          }
        },
        "match": "(?<!\\\\\\\\)(\\[[^\\]]+?\\])((##)(.+?)(##))",
        "name": "markup.mark.unconstrained.asciidoc"
      }, {
        "captures": {
          "1": {
            "name": "markup.highlight.asciidoc"
          },
          "2": {
            "name": "punctuation.definition.asciidoc"
          },
          "4": {
            "name": "punctuation.definition.asciidoc"
          }
        },
        "match": "(?<!\\\\\\\\)((##)(.+?)(##))",
        "name": "markup.mark.unconstrained.asciidoc"
      }, {
        "captures": {
          "1": {
            "name": "markup.meta.attribute-list.asciidoc"
          },
          "2": {
            "name": "markup.mark.asciidoc"
          },
          "3": {
            "name": "punctuation.definition.asciidoc"
          },
          "5": {
            "name": "punctuation.definition.asciidoc"
          }
        },
        "match": "(?<![\\\\;:\\p{Word}#])(\\[[^\\]]+?\\])((#)(\\S|\\S.*?\\S)(#)(?!\\p{Word}))",
        "name": "markup.mark.constrained.asciidoc"
      }, {
        "captures": {
          "1": {
            "name": "markup.meta.attribute-list.asciidoc"
          },
          "2": {
            "name": "markup.highlight.asciidoc"
          },
          "3": {
            "name": "punctuation.definition.asciidoc"
          },
          "5": {
            "name": "punctuation.definition.asciidoc"
          }
        },
        "match": "(?<![\\\\;:\\p{Word}#])(\\[[^\\]]+?\\])?((#)(\\S|\\S.*?\\S)(#)(?!\\p{Word}))",
        "name": "markup.mark.constrained.asciidoc"
      }]
    },
    "menu-macro": {
      "patterns": [{
        "captures": {
          "1": {
            "name": "entity.name.function.asciidoc"
          },
          "2": {
            "name": "markup.link.asciidoc"
          },
          "3": {
            "name": "string.unquoted.asciidoc"
          }
        },
        "match": "(?<!\\\\)(menu):(\\p{Word}|\\p{Word}.*?\\S)\\[\\p{Blank}*(.+?)?\\]",
        "name": "markup.other.menu.asciidoc"
      }]
    },
    "monospace": {
      "patterns": [{
        "captures": {
          "1": {
            "name": "markup.meta.attribute-list.asciidoc"
          },
          "2": {
            "name": "markup.raw.monospace.asciidoc"
          },
          "3": {
            "name": "punctuation.definition.asciidoc"
          },
          "5": {
            "name": "punctuation.definition.asciidoc"
          }
        },
        "match": "(?<!\\\\)(\\[.+?\\])?((``)(.+?)(``))",
        "name": "markup.monospace.unconstrained.asciidoc"
      }, {
        "captures": {
          "1": {
            "name": "markup.meta.attribute-list.asciidoc"
          },
          "2": {
            "name": "markup.raw.monospace.asciidoc"
          },
          "3": {
            "name": "punctuation.definition.asciidoc"
          },
          "5": {
            "name": "punctuation.definition.asciidoc"
          }
        },
        "match": "(?<![\\\\;:\\p{Word}\"'`])(\\[.+?\\])?((`)(\\S|\\S.*?\\S)(`))(?![\\p{Word}\"'`])",
        "name": "markup.monospace.constrained.asciidoc"
      }]
    },
    "open-block": {
      "patterns": [{
        "begin": "^(-{2})$",
        "beginCaptures": {
          "1": {
            "name": "constant.other.symbol.asciidoc"
          }
        },
        "end": "^(\\1)$",
        "endCaptures": {
          "1": {
            "name": "constant.other.symbol.asciidoc"
          }
        },
        "name": "markup.block.open.asciidoc",
        "patterns": [{
          "include": "$self"
        }]
      }]
    },
    "passthrough-macro": {
      "patterns": [{
        "captures": {
          "1": {
            "name": "markup.meta.attribute-list.asciidoc"
          },
          "3": {
            "name": "support.constant.asciidoc"
          },
          "4": {
            "name": "string.unquoted.asciidoc",
            "patterns": [{
              "include": "text.html.basic"
            }]
          },
          "5": {
            "name": "support.constant.asciidoc"
          }
        },
        "match": "(?:(?<!\\\\)(\\[([^\\]]+?)\\]))?(?:\\\\{0,2})(?<delim>\\+{2,3}|\\${2})(.*?)(\\k<delim>)",
        "name": "markup.macro.inline.passthrough.asciidoc"
      }, {
        "begin": "(?<!\\\\)(pass:)([a-z,]*)(\\[)",
        "beginCaptures": {
          "1": {
            "name": "entity.name.function.asciidoc"
          },
          "2": {
            "name": "markup.meta.attribute-list.asciidoc"
          }
        },
        "contentName": "string.unquoted.asciidoc",
        "end": "\\]|^$",
        "name": "markup.macro.inline.passthrough.asciidoc",
        "patterns": [{
          "include": "text.html.basic"
        }]
      }]
    },
    "passthrough-paragraph": {
      "patterns": [{
        "begin": "(?=(?>(?:^\\[(pass)((?:,|#|\\.|%)[^\\]]+)*\\]$)))",
        "end": "((?<=--|\\+\\+)$|^\\p{Blank}*$)",
        "name": "markup.block.passthrough.asciidoc",
        "patterns": [{
          "captures": {
            "0": {
              "name": "markup.heading.asciidoc",
              "patterns": [{
                "include": "#block-attribute-inner"
              }]
            }
          },
          "match": "^\\[(pass)((?:,|#|\\.|%)([^,\\]]+))*\\]$"
        }, {
          "include": "#block-title"
        }, {
          "begin": "^(\\+{4,})\\s*$",
          "comment": "passthrough block",
          "end": "(?<=\\1)",
          "patterns": [{
            "include": "text.html.basic"
          }]
        }, {
          "begin": "^(-{2})\\s*$",
          "comment": "open block",
          "end": "(?<=\\1)",
          "patterns": [{
            "include": "text.html.basic"
          }]
        }]
      }, {
        "begin": "(^\\+{4,}$)",
        "end": "\\1",
        "name": "markup.block.passthrough.asciidoc",
        "patterns": [{
          "include": "text.html.basic"
        }]
      }]
    },
    "quote-paragraph": {
      "patterns": [{
        "begin": "(?=(?>(?:^\\[(quote|verse)((?:,|#|\\.|%)([^,\\]]+))*\\]$)))",
        "end": '((?<=____|""|--)$|^\\p{Blank}*$)',
        "name": "markup.italic.quotes.asciidoc",
        "patterns": [{
          "captures": {
            "0": {
              "patterns": [{
                "include": "#block-attribute-inner"
              }]
            }
          },
          "match": "^\\[(quote|verse)((?:,|#|\\.|%)([^,\\]]+))*\\]$"
        }, {
          "include": "#block-title"
        }, {
          "include": "#inlines"
        }, {
          "begin": "^([_]{4,})\\s*$",
          "comment": "quotes block",
          "end": "(?<=\\1)",
          "patterns": [{
            "include": "#inlines"
          }, {
            "include": "#list"
          }]
        }, {
          "begin": '^("{2})\\s*$',
          "comment": "air quotes",
          "end": "(?<=\\1)",
          "patterns": [{
            "include": "#inlines"
          }, {
            "include": "#list"
          }]
        }, {
          "begin": "^(-{2})\\s*$",
          "comment": "open block",
          "end": "(?<=\\1)$",
          "patterns": [{
            "include": "#inlines"
          }, {
            "include": "#list"
          }]
        }]
      }, {
        "begin": '^("")$',
        "end": "^\\1$",
        "name": "markup.italic.quotes.asciidoc",
        "patterns": [{
          "include": "#inlines"
        }, {
          "include": "#list"
        }]
      }, {
        "begin": "^\\p{Blank}*(>) ",
        "end": "^\\p{Blank}*?$",
        "name": "markup.italic.quotes.asciidoc",
        "patterns": [{
          "include": "#inlines"
        }, {
          "include": "#list"
        }]
      }]
    },
    "sidebar-paragraph": {
      "patterns": [{
        "begin": "(?=(?>(?:^\\[(sidebar)((?:,|#|\\.|%)[^\\]]+)*\\]$)))",
        "end": "((?<=--|\\*\\*\\*\\*)$|^\\p{Blank}*$)",
        "name": "markup.block.sidebar.asciidoc",
        "patterns": [{
          "captures": {
            "0": {
              "patterns": [{
                "include": "#block-attribute-inner"
              }]
            }
          },
          "match": "^\\[(sidebar)((?:,|#|\\.|%)([^,\\]]+))*\\]$"
        }, {
          "include": "#block-title"
        }, {
          "begin": "^(\\*{4,})$",
          "comment": "sidebar block",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "$self"
          }]
        }, {
          "begin": "^(-{2})$",
          "comment": "open block",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "$self"
          }]
        }, {
          "include": "#inlines"
        }]
      }, {
        "begin": "^(\\*{4,})$",
        "end": "^(\\1)$",
        "name": "markup.block.sidebar.asciidoc",
        "patterns": [{
          "include": "$self"
        }]
      }]
    },
    "source-asciidoctor": {
      "patterns": [{
        "begin": "(?=(?>(?:^\\[(source)(?:,|#)\\p{Blank}*(?i:(c))((?:,|#)[^\\]]+)*\\]$)))",
        "end": "((?<=--|\\.\\.\\.\\.)$|^\\p{Blank}*$)",
        "name": "markup.code.c.asciidoc",
        "patterns": [{
          "captures": {
            "0": {
              "name": "markup.heading.asciidoc",
              "patterns": [{
                "include": "#block-attribute-inner"
              }]
            }
          },
          "match": "^\\[(source)(?:,|#)\\p{Blank}*(?i:(c))((?:,|#)([^,\\]]+))*\\]$"
        }, {
          "include": "#inlines"
        }, {
          "include": "#block-title"
        }, {
          "begin": "^(-{4,})\\s*$",
          "comment": "listing block",
          "contentName": "source.embedded.c",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.c"
          }]
        }, {
          "begin": "^(-{2})\\s*$",
          "comment": "open block",
          "contentName": "source.embedded.c",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.c"
          }]
        }, {
          "begin": "^(\\.{4})\\s*$",
          "comment": "literal block",
          "contentName": "source.embedded.c",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.c"
          }]
        }]
      }, {
        "begin": "(?=(?>(?:^\\[(source)(?:,|#)\\p{Blank}*(?i:(clojure))((?:,|#)[^\\]]+)*\\]$)))",
        "end": "((?<=--|\\.\\.\\.\\.)$|^\\p{Blank}*$)",
        "name": "markup.code.clojure.asciidoc",
        "patterns": [{
          "captures": {
            "0": {
              "name": "markup.heading.asciidoc",
              "patterns": [{
                "include": "#block-attribute-inner"
              }]
            }
          },
          "match": "^\\[(source)(?:,|#)\\p{Blank}*(?i:(clojure))((?:,|#)([^,\\]]+))*\\]$"
        }, {
          "include": "#inlines"
        }, {
          "include": "#block-title"
        }, {
          "begin": "^(-{4,})\\s*$",
          "comment": "listing block",
          "contentName": "source.embedded.clojure",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.clojure"
          }]
        }, {
          "begin": "^(-{2})\\s*$",
          "comment": "open block",
          "contentName": "source.embedded.clojure",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.clojure"
          }]
        }, {
          "begin": "^(\\.{4})\\s*$",
          "comment": "literal block",
          "contentName": "source.embedded.clojure",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.clojure"
          }]
        }]
      }, {
        "begin": "(?=(?>(?:^\\[(source)(?:,|#)\\p{Blank}*(?i:(coffee-?(script)?))((?:,|#)[^\\]]+)*\\]$)))",
        "end": "((?<=--|\\.\\.\\.\\.)$|^\\p{Blank}*$)",
        "name": "markup.code.coffee.asciidoc",
        "patterns": [{
          "captures": {
            "0": {
              "name": "markup.heading.asciidoc",
              "patterns": [{
                "include": "#block-attribute-inner"
              }]
            }
          },
          "match": "^\\[(source)(?:,|#)\\p{Blank}*(?i:(coffee-?(script)?))((?:,|#)([^,\\]]+))*\\]$"
        }, {
          "include": "#inlines"
        }, {
          "include": "#block-title"
        }, {
          "begin": "^(-{4,})\\s*$",
          "comment": "listing block",
          "contentName": "source.embedded.coffee",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.coffee"
          }]
        }, {
          "begin": "^(-{2})\\s*$",
          "comment": "open block",
          "contentName": "source.embedded.coffee",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.coffee"
          }]
        }, {
          "begin": "^(\\.{4})\\s*$",
          "comment": "literal block",
          "contentName": "source.embedded.coffee",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.coffee"
          }]
        }]
      }, {
        "begin": "(?=(?>(?:^\\[(source)(?:,|#)\\p{Blank}*(?i:(c(pp|\\+\\+)))((?:,|#)[^\\]]+)*\\]$)))",
        "end": "((?<=--|\\.\\.\\.\\.)$|^\\p{Blank}*$)",
        "name": "markup.code.cpp.asciidoc",
        "patterns": [{
          "captures": {
            "0": {
              "name": "markup.heading.asciidoc",
              "patterns": [{
                "include": "#block-attribute-inner"
              }]
            }
          },
          "match": "^\\[(source)(?:,|#)\\p{Blank}*(?i:(c(pp|\\+\\+)))((?:,|#)([^,\\]]+))*\\]$"
        }, {
          "include": "#inlines"
        }, {
          "include": "#block-title"
        }, {
          "begin": "^(-{4,})\\s*$",
          "comment": "listing block",
          "contentName": "source.embedded.cpp",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.cpp"
          }]
        }, {
          "begin": "^(-{2})\\s*$",
          "comment": "open block",
          "contentName": "source.embedded.cpp",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.cpp"
          }]
        }, {
          "begin": "^(\\.{4})\\s*$",
          "comment": "literal block",
          "contentName": "source.embedded.cpp",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.cpp"
          }]
        }]
      }, {
        "begin": "(?=(?>(?:^\\[(source)(?:,|#)\\p{Blank}*(?i:(css))((?:,|#)[^\\]]+)*\\]$)))",
        "end": "((?<=--|\\.\\.\\.\\.)$|^\\p{Blank}*$)",
        "name": "markup.code.css.asciidoc",
        "patterns": [{
          "captures": {
            "0": {
              "name": "markup.heading.asciidoc",
              "patterns": [{
                "include": "#block-attribute-inner"
              }]
            }
          },
          "match": "^\\[(source)(?:,|#)\\p{Blank}*(?i:(css))((?:,|#)([^,\\]]+))*\\]$"
        }, {
          "include": "#inlines"
        }, {
          "include": "#block-title"
        }, {
          "begin": "^(-{4,})\\s*$",
          "comment": "listing block",
          "contentName": "source.embedded.css",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.css"
          }]
        }, {
          "begin": "^(-{2})\\s*$",
          "comment": "open block",
          "contentName": "source.embedded.css",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.css"
          }]
        }, {
          "begin": "^(\\.{4})\\s*$",
          "comment": "literal block",
          "contentName": "source.embedded.css",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.css"
          }]
        }]
      }, {
        "begin": "(?=(?>(?:^\\[(source)(?:,|#)\\p{Blank}*(?i:(cs(harp)?))((?:,|#)[^\\]]+)*\\]$)))",
        "end": "((?<=--|\\.\\.\\.\\.)$|^\\p{Blank}*$)",
        "name": "markup.code.cs.asciidoc",
        "patterns": [{
          "captures": {
            "0": {
              "name": "markup.heading.asciidoc",
              "patterns": [{
                "include": "#block-attribute-inner"
              }]
            }
          },
          "match": "^\\[(source)(?:,|#)\\p{Blank}*(?i:(cs(harp)?))((?:,|#)([^,\\]]+))*\\]$"
        }, {
          "include": "#inlines"
        }, {
          "include": "#block-title"
        }, {
          "begin": "^(-{4,})\\s*$",
          "comment": "listing block",
          "contentName": "source.embedded.cs",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.cs"
          }]
        }, {
          "begin": "^(-{2})\\s*$",
          "comment": "open block",
          "contentName": "source.embedded.cs",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.cs"
          }]
        }, {
          "begin": "^(\\.{4})\\s*$",
          "comment": "literal block",
          "contentName": "source.embedded.cs",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.cs"
          }]
        }]
      }, {
        "begin": "(?=(?>(?:^\\[(source)(?:,|#)\\p{Blank}*(?i:(diff|patch|rej))((?:,|#)[^\\]]+)*\\]$)))",
        "end": "((?<=--|\\.\\.\\.\\.)$|^\\p{Blank}*$)",
        "name": "markup.code.diff.asciidoc",
        "patterns": [{
          "captures": {
            "0": {
              "name": "markup.heading.asciidoc",
              "patterns": [{
                "include": "#block-attribute-inner"
              }]
            }
          },
          "match": "^\\[(source)(?:,|#)\\p{Blank}*(?i:(diff|patch|rej))((?:,|#)([^,\\]]+))*\\]$"
        }, {
          "include": "#inlines"
        }, {
          "include": "#block-title"
        }, {
          "begin": "^(-{4,})\\s*$",
          "comment": "listing block",
          "contentName": "source.embedded.diff",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.diff"
          }]
        }, {
          "begin": "^(-{2})\\s*$",
          "comment": "open block",
          "contentName": "source.embedded.diff",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.diff"
          }]
        }, {
          "begin": "^(\\.{4})\\s*$",
          "comment": "literal block",
          "contentName": "source.embedded.diff",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.diff"
          }]
        }]
      }, {
        "begin": "(?=(?>(?:^\\[(source)(?:,|#)\\p{Blank}*(?i:(docker(file)?))((?:,|#)[^\\]]+)*\\]$)))",
        "end": "((?<=--|\\.\\.\\.\\.)$|^\\p{Blank}*$)",
        "name": "markup.code.dockerfile.asciidoc",
        "patterns": [{
          "captures": {
            "0": {
              "name": "markup.heading.asciidoc",
              "patterns": [{
                "include": "#block-attribute-inner"
              }]
            }
          },
          "match": "^\\[(source)(?:,|#)\\p{Blank}*(?i:(docker(file)?))((?:,|#)([^,\\]]+))*\\]$"
        }, {
          "include": "#inlines"
        }, {
          "include": "#block-title"
        }, {
          "begin": "^(-{4,})\\s*$",
          "comment": "listing block",
          "contentName": "source.embedded.dockerfile",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.dockerfile"
          }]
        }, {
          "begin": "^(-{2})\\s*$",
          "comment": "open block",
          "contentName": "source.embedded.dockerfile",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.dockerfile"
          }]
        }, {
          "begin": "^(\\.{4})\\s*$",
          "comment": "literal block",
          "contentName": "source.embedded.dockerfile",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.dockerfile"
          }]
        }]
      }, {
        "begin": "(?=(?>(?:^\\[(source)(?:,|#)\\p{Blank}*(?i:(elixir))((?:,|#)[^\\]]+)*\\]$)))",
        "end": "((?<=--|\\.\\.\\.\\.)$|^\\p{Blank}*$)",
        "name": "markup.code.elixir.asciidoc",
        "patterns": [{
          "captures": {
            "0": {
              "name": "markup.heading.asciidoc",
              "patterns": [{
                "include": "#block-attribute-inner"
              }]
            }
          },
          "match": "^\\[(source)(?:,|#)\\p{Blank}*(?i:(elixir))((?:,|#)([^,\\]]+))*\\]$"
        }, {
          "include": "#inlines"
        }, {
          "include": "#block-title"
        }, {
          "begin": "^(-{4,})\\s*$",
          "comment": "listing block",
          "contentName": "source.embedded.elixir",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.elixir"
          }]
        }, {
          "begin": "^(-{2})\\s*$",
          "comment": "open block",
          "contentName": "source.embedded.elixir",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.elixir"
          }]
        }, {
          "begin": "^(\\.{4})\\s*$",
          "comment": "literal block",
          "contentName": "source.embedded.elixir",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.elixir"
          }]
        }]
      }, {
        "begin": "(?=(?>(?:^\\[(source)(?:,|#)\\p{Blank}*(?i:(elm))((?:,|#)[^\\]]+)*\\]$)))",
        "end": "((?<=--|\\.\\.\\.\\.)$|^\\p{Blank}*$)",
        "name": "markup.code.elm.asciidoc",
        "patterns": [{
          "captures": {
            "0": {
              "name": "markup.heading.asciidoc",
              "patterns": [{
                "include": "#block-attribute-inner"
              }]
            }
          },
          "match": "^\\[(source)(?:,|#)\\p{Blank}*(?i:(elm))((?:,|#)([^,\\]]+))*\\]$"
        }, {
          "include": "#inlines"
        }, {
          "include": "#block-title"
        }, {
          "begin": "^(-{4,})\\s*$",
          "comment": "listing block",
          "contentName": "source.embedded.elm",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.elm"
          }]
        }, {
          "begin": "^(-{2})\\s*$",
          "comment": "open block",
          "contentName": "source.embedded.elm",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.elm"
          }]
        }, {
          "begin": "^(\\.{4})\\s*$",
          "comment": "literal block",
          "contentName": "source.embedded.elm",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.elm"
          }]
        }]
      }, {
        "begin": "(?=(?>(?:^\\[(source)(?:,|#)\\p{Blank}*(?i:(erlang))((?:,|#)[^\\]]+)*\\]$)))",
        "end": "((?<=--|\\.\\.\\.\\.)$|^\\p{Blank}*$)",
        "name": "markup.code.erlang.asciidoc",
        "patterns": [{
          "captures": {
            "0": {
              "name": "markup.heading.asciidoc",
              "patterns": [{
                "include": "#block-attribute-inner"
              }]
            }
          },
          "match": "^\\[(source)(?:,|#)\\p{Blank}*(?i:(erlang))((?:,|#)([^,\\]]+))*\\]$"
        }, {
          "include": "#inlines"
        }, {
          "include": "#block-title"
        }, {
          "begin": "^(-{4,})\\s*$",
          "comment": "listing block",
          "contentName": "source.embedded.erlang",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.erlang"
          }]
        }, {
          "begin": "^(-{2})\\s*$",
          "comment": "open block",
          "contentName": "source.embedded.erlang",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.erlang"
          }]
        }, {
          "begin": "^(\\.{4})\\s*$",
          "comment": "literal block",
          "contentName": "source.embedded.erlang",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.erlang"
          }]
        }]
      }, {
        "begin": "(?=(?>(?:^\\[(source)(?:,|#)\\p{Blank}*(?i:(go(lang)?))((?:,|#)[^\\]]+)*\\]$)))",
        "end": "((?<=--|\\.\\.\\.\\.)$|^\\p{Blank}*$)",
        "name": "markup.code.go.asciidoc",
        "patterns": [{
          "captures": {
            "0": {
              "name": "markup.heading.asciidoc",
              "patterns": [{
                "include": "#block-attribute-inner"
              }]
            }
          },
          "match": "^\\[(source)(?:,|#)\\p{Blank}*(?i:(go(lang)?))((?:,|#)([^,\\]]+))*\\]$"
        }, {
          "include": "#inlines"
        }, {
          "include": "#block-title"
        }, {
          "begin": "^(-{4,})\\s*$",
          "comment": "listing block",
          "contentName": "source.embedded.go",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.go"
          }]
        }, {
          "begin": "^(-{2})\\s*$",
          "comment": "open block",
          "contentName": "source.embedded.go",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.go"
          }]
        }, {
          "begin": "^(\\.{4})\\s*$",
          "comment": "literal block",
          "contentName": "source.embedded.go",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.go"
          }]
        }]
      }, {
        "begin": "(?=(?>(?:^\\[(source)(?:,|#)\\p{Blank}*(?i:(groovy))((?:,|#)[^\\]]+)*\\]$)))",
        "end": "((?<=--|\\.\\.\\.\\.)$|^\\p{Blank}*$)",
        "name": "markup.code.groovy.asciidoc",
        "patterns": [{
          "captures": {
            "0": {
              "name": "markup.heading.asciidoc",
              "patterns": [{
                "include": "#block-attribute-inner"
              }]
            }
          },
          "match": "^\\[(source)(?:,|#)\\p{Blank}*(?i:(groovy))((?:,|#)([^,\\]]+))*\\]$"
        }, {
          "include": "#inlines"
        }, {
          "include": "#block-title"
        }, {
          "begin": "^(-{4,})\\s*$",
          "comment": "listing block",
          "contentName": "source.embedded.groovy",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.groovy"
          }]
        }, {
          "begin": "^(-{2})\\s*$",
          "comment": "open block",
          "contentName": "source.embedded.groovy",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.groovy"
          }]
        }, {
          "begin": "^(\\.{4})\\s*$",
          "comment": "literal block",
          "contentName": "source.embedded.groovy",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.groovy"
          }]
        }]
      }, {
        "begin": "(?=(?>(?:^\\[(source)(?:,|#)\\p{Blank}*(?i:(haskell))((?:,|#)[^\\]]+)*\\]$)))",
        "end": "((?<=--|\\.\\.\\.\\.)$|^\\p{Blank}*$)",
        "name": "markup.code.haskell.asciidoc",
        "patterns": [{
          "captures": {
            "0": {
              "name": "markup.heading.asciidoc",
              "patterns": [{
                "include": "#block-attribute-inner"
              }]
            }
          },
          "match": "^\\[(source)(?:,|#)\\p{Blank}*(?i:(haskell))((?:,|#)([^,\\]]+))*\\]$"
        }, {
          "include": "#inlines"
        }, {
          "include": "#block-title"
        }, {
          "begin": "^(-{4,})\\s*$",
          "comment": "listing block",
          "contentName": "source.embedded.haskell",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.haskell"
          }]
        }, {
          "begin": "^(-{2})\\s*$",
          "comment": "open block",
          "contentName": "source.embedded.haskell",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.haskell"
          }]
        }, {
          "begin": "^(\\.{4})\\s*$",
          "comment": "literal block",
          "contentName": "source.embedded.haskell",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.haskell"
          }]
        }]
      }, {
        "begin": "(?=(?>(?:^\\[(source)(?:,|#)\\p{Blank}*(?i:(html))((?:,|#)[^\\]]+)*\\]$)))",
        "end": "((?<=--|\\.\\.\\.\\.)$|^\\p{Blank}*$)",
        "name": "markup.code.html.basic.asciidoc",
        "patterns": [{
          "captures": {
            "0": {
              "name": "markup.heading.asciidoc",
              "patterns": [{
                "include": "#block-attribute-inner"
              }]
            }
          },
          "match": "^\\[(source)(?:,|#)\\p{Blank}*(?i:(html))((?:,|#)([^,\\]]+))*\\]$"
        }, {
          "include": "#inlines"
        }, {
          "include": "#block-title"
        }, {
          "begin": "^(-{4,})\\s*$",
          "comment": "listing block",
          "contentName": "text.embedded.html.basic",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "text.html.basic"
          }]
        }, {
          "begin": "^(-{2})\\s*$",
          "comment": "open block",
          "contentName": "text.embedded.html.basic",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "text.html.basic"
          }]
        }, {
          "begin": "^(\\.{4})\\s*$",
          "comment": "literal block",
          "contentName": "text.embedded.html.basic",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "text.html.basic"
          }]
        }]
      }, {
        "begin": "(?=(?>(?:^\\[(source)(?:,|#)\\p{Blank}*(?i:(java))((?:,|#)[^\\]]+)*\\]$)))",
        "end": "((?<=--|\\.\\.\\.\\.)$|^\\p{Blank}*$)",
        "name": "markup.code.java.asciidoc",
        "patterns": [{
          "captures": {
            "0": {
              "name": "markup.heading.asciidoc",
              "patterns": [{
                "include": "#block-attribute-inner"
              }]
            }
          },
          "match": "^\\[(source)(?:,|#)\\p{Blank}*(?i:(java))((?:,|#)([^,\\]]+))*\\]$"
        }, {
          "include": "#inlines"
        }, {
          "include": "#block-title"
        }, {
          "begin": "^(-{4,})\\s*$",
          "comment": "listing block",
          "contentName": "source.embedded.java",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.java"
          }]
        }, {
          "begin": "^(-{2})\\s*$",
          "comment": "open block",
          "contentName": "source.embedded.java",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.java"
          }]
        }, {
          "begin": "^(\\.{4})\\s*$",
          "comment": "literal block",
          "contentName": "source.embedded.java",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.java"
          }]
        }]
      }, {
        "begin": "(?=(?>(?:^\\[(source)(?:,|#)\\p{Blank}*(?i:(javascript|js))((?:,|#)[^\\]]+)*\\]$)))",
        "end": "((?<=--|\\.\\.\\.\\.)$|^\\p{Blank}*$)",
        "name": "markup.code.js.asciidoc",
        "patterns": [{
          "captures": {
            "0": {
              "name": "markup.heading.asciidoc",
              "patterns": [{
                "include": "#block-attribute-inner"
              }]
            }
          },
          "match": "^\\[(source)(?:,|#)\\p{Blank}*(?i:(javascript|js))((?:,|#)([^,\\]]+))*\\]$"
        }, {
          "include": "#inlines"
        }, {
          "include": "#block-title"
        }, {
          "begin": "^(-{4,})\\s*$",
          "comment": "listing block",
          "contentName": "source.embedded.js",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.js"
          }]
        }, {
          "begin": "^(-{2})\\s*$",
          "comment": "open block",
          "contentName": "source.embedded.js",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.js"
          }]
        }, {
          "begin": "^(\\.{4})\\s*$",
          "comment": "literal block",
          "contentName": "source.embedded.js",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.js"
          }]
        }]
      }, {
        "begin": "(?=(?>(?:^\\[(source)(?:,|#)\\p{Blank}*(?i:(json))((?:,|#)[^\\]]+)*\\]$)))",
        "end": "((?<=--|\\.\\.\\.\\.)$|^\\p{Blank}*$)",
        "name": "markup.code.json.asciidoc",
        "patterns": [{
          "captures": {
            "0": {
              "name": "markup.heading.asciidoc",
              "patterns": [{
                "include": "#block-attribute-inner"
              }]
            }
          },
          "match": "^\\[(source)(?:,|#)\\p{Blank}*(?i:(json))((?:,|#)([^,\\]]+))*\\]$"
        }, {
          "include": "#inlines"
        }, {
          "include": "#block-title"
        }, {
          "begin": "^(-{4,})\\s*$",
          "comment": "listing block",
          "contentName": "source.embedded.json",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.json"
          }]
        }, {
          "begin": "^(-{2})\\s*$",
          "comment": "open block",
          "contentName": "source.embedded.json",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.json"
          }]
        }, {
          "begin": "^(\\.{4})\\s*$",
          "comment": "literal block",
          "contentName": "source.embedded.json",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.json"
          }]
        }]
      }, {
        "begin": "(?=(?>(?:^\\[(source)(?:,|#)\\p{Blank}*(?i:(jsx))((?:,|#)[^\\]]+)*\\]$)))",
        "end": "((?<=--|\\.\\.\\.\\.)$|^\\p{Blank}*$)",
        "name": "markup.code.js.jsx.asciidoc",
        "patterns": [{
          "captures": {
            "0": {
              "name": "markup.heading.asciidoc",
              "patterns": [{
                "include": "#block-attribute-inner"
              }]
            }
          },
          "match": "^\\[(source)(?:,|#)\\p{Blank}*(?i:(jsx))((?:,|#)([^,\\]]+))*\\]$"
        }, {
          "include": "#inlines"
        }, {
          "include": "#block-title"
        }, {
          "begin": "^(-{4,})\\s*$",
          "comment": "listing block",
          "contentName": "source.embedded.js.jsx",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.js.jsx"
          }]
        }, {
          "begin": "^(-{2})\\s*$",
          "comment": "open block",
          "contentName": "source.embedded.js.jsx",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.js.jsx"
          }]
        }, {
          "begin": "^(\\.{4})\\s*$",
          "comment": "literal block",
          "contentName": "source.embedded.js.jsx",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.js.jsx"
          }]
        }]
      }, {
        "begin": "(?=(?>(?:^\\[(source)(?:,|#)\\p{Blank}*(?i:(julia))((?:,|#)[^\\]]+)*\\]$)))",
        "end": "((?<=--|\\.\\.\\.\\.)$|^\\p{Blank}*$)",
        "name": "markup.code.julia.asciidoc",
        "patterns": [{
          "captures": {
            "0": {
              "name": "markup.heading.asciidoc",
              "patterns": [{
                "include": "#block-attribute-inner"
              }]
            }
          },
          "match": "^\\[(source)(?:,|#)\\p{Blank}*(?i:(julia))((?:,|#)([^,\\]]+))*\\]$"
        }, {
          "include": "#inlines"
        }, {
          "include": "#block-title"
        }, {
          "begin": "^(-{4,})\\s*$",
          "comment": "listing block",
          "contentName": "source.embedded.julia",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.julia"
          }]
        }, {
          "begin": "^(-{2})\\s*$",
          "comment": "open block",
          "contentName": "source.embedded.julia",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.julia"
          }]
        }, {
          "begin": "^(\\.{4})\\s*$",
          "comment": "literal block",
          "contentName": "source.embedded.julia",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.julia"
          }]
        }]
      }, {
        "begin": "(?=(?>(?:^\\[(source)(?:,|#)\\p{Blank}*(?i:(kotlin|kts?))((?:,|#)[^\\]]+)*\\]$)))",
        "end": "((?<=--|\\.\\.\\.\\.)$|^\\p{Blank}*$)",
        "name": "markup.code.kotlin.asciidoc",
        "patterns": [{
          "captures": {
            "0": {
              "name": "markup.heading.asciidoc",
              "patterns": [{
                "include": "#block-attribute-inner"
              }]
            }
          },
          "match": "^\\[(source)(?:,|#)\\p{Blank}*(?i:(kotlin|kts?))((?:,|#)([^,\\]]+))*\\]$"
        }, {
          "include": "#inlines"
        }, {
          "include": "#block-title"
        }, {
          "begin": "^(-{4,})\\s*$",
          "comment": "listing block",
          "contentName": "source.embedded.kotlin",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.kotlin"
          }]
        }, {
          "begin": "^(-{2})\\s*$",
          "comment": "open block",
          "contentName": "source.embedded.kotlin",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.kotlin"
          }]
        }, {
          "begin": "^(\\.{4})\\s*$",
          "comment": "literal block",
          "contentName": "source.embedded.kotlin",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.kotlin"
          }]
        }]
      }, {
        "begin": "(?=(?>(?:^\\[(source)(?:,|#)\\p{Blank}*(?i:(less))((?:,|#)[^\\]]+)*\\]$)))",
        "end": "((?<=--|\\.\\.\\.\\.)$|^\\p{Blank}*$)",
        "name": "markup.code.css.less.asciidoc",
        "patterns": [{
          "captures": {
            "0": {
              "name": "markup.heading.asciidoc",
              "patterns": [{
                "include": "#block-attribute-inner"
              }]
            }
          },
          "match": "^\\[(source)(?:,|#)\\p{Blank}*(?i:(less))((?:,|#)([^,\\]]+))*\\]$"
        }, {
          "include": "#inlines"
        }, {
          "include": "#block-title"
        }, {
          "begin": "^(-{4,})\\s*$",
          "comment": "listing block",
          "contentName": "source.embedded.css.less",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.css.less"
          }]
        }, {
          "begin": "^(-{2})\\s*$",
          "comment": "open block",
          "contentName": "source.embedded.css.less",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.css.less"
          }]
        }, {
          "begin": "^(\\.{4})\\s*$",
          "comment": "literal block",
          "contentName": "source.embedded.css.less",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.css.less"
          }]
        }]
      }, {
        "begin": "(?=(?>(?:^\\[(source)(?:,|#)\\p{Blank}*(?i:(make(file)?))((?:,|#)[^\\]]+)*\\]$)))",
        "end": "((?<=--|\\.\\.\\.\\.)$|^\\p{Blank}*$)",
        "name": "markup.code.makefile.asciidoc",
        "patterns": [{
          "captures": {
            "0": {
              "name": "markup.heading.asciidoc",
              "patterns": [{
                "include": "#block-attribute-inner"
              }]
            }
          },
          "match": "^\\[(source)(?:,|#)\\p{Blank}*(?i:(make(file)?))((?:,|#)([^,\\]]+))*\\]$"
        }, {
          "include": "#inlines"
        }, {
          "include": "#block-title"
        }, {
          "begin": "^(-{4,})\\s*$",
          "comment": "listing block",
          "contentName": "source.embedded.makefile",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.makefile"
          }]
        }, {
          "begin": "^(-{2})\\s*$",
          "comment": "open block",
          "contentName": "source.embedded.makefile",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.makefile"
          }]
        }, {
          "begin": "^(\\.{4})\\s*$",
          "comment": "literal block",
          "contentName": "source.embedded.makefile",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.makefile"
          }]
        }]
      }, {
        "begin": "(?=(?>(?:^\\[(source)(?:,|#)\\p{Blank}*(?i:(markdown|mdown|md))((?:,|#)[^\\]]+)*\\]$)))",
        "end": "((?<=--|\\.\\.\\.\\.)$|^\\p{Blank}*$)",
        "name": "markup.code.gfm.asciidoc",
        "patterns": [{
          "captures": {
            "0": {
              "name": "markup.heading.asciidoc",
              "patterns": [{
                "include": "#block-attribute-inner"
              }]
            }
          },
          "match": "^\\[(source)(?:,|#)\\p{Blank}*(?i:(markdown|mdown|md))((?:,|#)([^,\\]]+))*\\]$"
        }, {
          "include": "#inlines"
        }, {
          "include": "#block-title"
        }, {
          "begin": "^(-{4,})\\s*$",
          "comment": "listing block",
          "contentName": "source.embedded.gfm",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.gfm"
          }]
        }, {
          "begin": "^(-{2})\\s*$",
          "comment": "open block",
          "contentName": "source.embedded.gfm",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.gfm"
          }]
        }, {
          "begin": "^(\\.{4})\\s*$",
          "comment": "literal block",
          "contentName": "source.embedded.gfm",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.gfm"
          }]
        }]
      }, {
        "begin": "(?=(?>(?:^\\[(source)(?:,|#)\\p{Blank}*(?i:(mustache))((?:,|#)[^\\]]+)*\\]$)))",
        "end": "((?<=--|\\.\\.\\.\\.)$|^\\p{Blank}*$)",
        "name": "markup.code.html.mustache.asciidoc",
        "patterns": [{
          "captures": {
            "0": {
              "name": "markup.heading.asciidoc",
              "patterns": [{
                "include": "#block-attribute-inner"
              }]
            }
          },
          "match": "^\\[(source)(?:,|#)\\p{Blank}*(?i:(mustache))((?:,|#)([^,\\]]+))*\\]$"
        }, {
          "include": "#inlines"
        }, {
          "include": "#block-title"
        }, {
          "begin": "^(-{4,})\\s*$",
          "comment": "listing block",
          "contentName": "text.embedded.html.mustache",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "text.html.mustache"
          }]
        }, {
          "begin": "^(-{2})\\s*$",
          "comment": "open block",
          "contentName": "text.embedded.html.mustache",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "text.html.mustache"
          }]
        }, {
          "begin": "^(\\.{4})\\s*$",
          "comment": "literal block",
          "contentName": "text.embedded.html.mustache",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "text.html.mustache"
          }]
        }]
      }, {
        "begin": "(?=(?>(?:^\\[(source)(?:,|#)\\p{Blank}*(?i:(objc|objective-c))((?:,|#)[^\\]]+)*\\]$)))",
        "end": "((?<=--|\\.\\.\\.\\.)$|^\\p{Blank}*$)",
        "name": "markup.code.objc.asciidoc",
        "patterns": [{
          "captures": {
            "0": {
              "name": "markup.heading.asciidoc",
              "patterns": [{
                "include": "#block-attribute-inner"
              }]
            }
          },
          "match": "^\\[(source)(?:,|#)\\p{Blank}*(?i:(objc|objective-c))((?:,|#)([^,\\]]+))*\\]$"
        }, {
          "include": "#inlines"
        }, {
          "include": "#block-title"
        }, {
          "begin": "^(-{4,})\\s*$",
          "comment": "listing block",
          "contentName": "source.embedded.objc",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.objc"
          }]
        }, {
          "begin": "^(-{2})\\s*$",
          "comment": "open block",
          "contentName": "source.embedded.objc",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.objc"
          }]
        }, {
          "begin": "^(\\.{4})\\s*$",
          "comment": "literal block",
          "contentName": "source.embedded.objc",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.objc"
          }]
        }]
      }, {
        "begin": "(?=(?>(?:^\\[(source)(?:,|#)\\p{Blank}*(?i:(ocaml))((?:,|#)[^\\]]+)*\\]$)))",
        "end": "((?<=--|\\.\\.\\.\\.)$|^\\p{Blank}*$)",
        "name": "markup.code.ocaml.asciidoc",
        "patterns": [{
          "captures": {
            "0": {
              "name": "markup.heading.asciidoc",
              "patterns": [{
                "include": "#block-attribute-inner"
              }]
            }
          },
          "match": "^\\[(source)(?:,|#)\\p{Blank}*(?i:(ocaml))((?:,|#)([^,\\]]+))*\\]$"
        }, {
          "include": "#inlines"
        }, {
          "include": "#block-title"
        }, {
          "begin": "^(-{4,})\\s*$",
          "comment": "listing block",
          "contentName": "source.embedded.ocaml",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.ocaml"
          }]
        }, {
          "begin": "^(-{2})\\s*$",
          "comment": "open block",
          "contentName": "source.embedded.ocaml",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.ocaml"
          }]
        }, {
          "begin": "^(\\.{4})\\s*$",
          "comment": "literal block",
          "contentName": "source.embedded.ocaml",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.ocaml"
          }]
        }]
      }, {
        "begin": "(?=(?>(?:^\\[(source)(?:,|#)\\p{Blank}*(?i:(perl))((?:,|#)[^\\]]+)*\\]$)))",
        "end": "((?<=--|\\.\\.\\.\\.)$|^\\p{Blank}*$)",
        "name": "markup.code.perl.asciidoc",
        "patterns": [{
          "captures": {
            "0": {
              "name": "markup.heading.asciidoc",
              "patterns": [{
                "include": "#block-attribute-inner"
              }]
            }
          },
          "match": "^\\[(source)(?:,|#)\\p{Blank}*(?i:(perl))((?:,|#)([^,\\]]+))*\\]$"
        }, {
          "include": "#inlines"
        }, {
          "include": "#block-title"
        }, {
          "begin": "^(-{4,})\\s*$",
          "comment": "listing block",
          "contentName": "source.embedded.perl",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.perl"
          }]
        }, {
          "begin": "^(-{2})\\s*$",
          "comment": "open block",
          "contentName": "source.embedded.perl",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.perl"
          }]
        }, {
          "begin": "^(\\.{4})\\s*$",
          "comment": "literal block",
          "contentName": "source.embedded.perl",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.perl"
          }]
        }]
      }, {
        "begin": "(?=(?>(?:^\\[(source)(?:,|#)\\p{Blank}*(?i:(perl6))((?:,|#)[^\\]]+)*\\]$)))",
        "end": "((?<=--|\\.\\.\\.\\.)$|^\\p{Blank}*$)",
        "name": "markup.code.perl6.asciidoc",
        "patterns": [{
          "captures": {
            "0": {
              "name": "markup.heading.asciidoc",
              "patterns": [{
                "include": "#block-attribute-inner"
              }]
            }
          },
          "match": "^\\[(source)(?:,|#)\\p{Blank}*(?i:(perl6))((?:,|#)([^,\\]]+))*\\]$"
        }, {
          "include": "#inlines"
        }, {
          "include": "#block-title"
        }, {
          "begin": "^(-{4,})\\s*$",
          "comment": "listing block",
          "contentName": "source.embedded.perl6",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.perl6"
          }]
        }, {
          "begin": "^(-{2})\\s*$",
          "comment": "open block",
          "contentName": "source.embedded.perl6",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.perl6"
          }]
        }, {
          "begin": "^(\\.{4})\\s*$",
          "comment": "literal block",
          "contentName": "source.embedded.perl6",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.perl6"
          }]
        }]
      }, {
        "begin": "(?=(?>(?:^\\[(source)(?:,|#)\\p{Blank}*(?i:(php))((?:,|#)[^\\]]+)*\\]$)))",
        "end": "((?<=--|\\.\\.\\.\\.)$|^\\p{Blank}*$)",
        "name": "markup.code.html.php.asciidoc",
        "patterns": [{
          "captures": {
            "0": {
              "name": "markup.heading.asciidoc",
              "patterns": [{
                "include": "#block-attribute-inner"
              }]
            }
          },
          "match": "^\\[(source)(?:,|#)\\p{Blank}*(?i:(php))((?:,|#)([^,\\]]+))*\\]$"
        }, {
          "include": "#inlines"
        }, {
          "include": "#block-title"
        }, {
          "begin": "^(-{4,})\\s*$",
          "comment": "listing block",
          "contentName": "text.embedded.html.php",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "text.html.php"
          }]
        }, {
          "begin": "^(-{2})\\s*$",
          "comment": "open block",
          "contentName": "text.embedded.html.php",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "text.html.php"
          }]
        }, {
          "begin": "^(\\.{4})\\s*$",
          "comment": "literal block",
          "contentName": "text.embedded.html.php",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "text.html.php"
          }]
        }]
      }, {
        "begin": "(?=(?>(?:^\\[(source)(?:,|#)\\p{Blank}*(?i:(properties))((?:,|#)[^\\]]+)*\\]$)))",
        "end": "((?<=--|\\.\\.\\.\\.)$|^\\p{Blank}*$)",
        "name": "markup.code.asciidoc.properties.asciidoc",
        "patterns": [{
          "captures": {
            "0": {
              "name": "markup.heading.asciidoc",
              "patterns": [{
                "include": "#block-attribute-inner"
              }]
            }
          },
          "match": "^\\[(source)(?:,|#)\\p{Blank}*(?i:(properties))((?:,|#)([^,\\]]+))*\\]$"
        }, {
          "include": "#inlines"
        }, {
          "include": "#block-title"
        }, {
          "begin": "^(-{4,})\\s*$",
          "comment": "listing block",
          "contentName": "source.embedded.asciidoc.properties",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.asciidoc.properties"
          }]
        }, {
          "begin": "^(-{2})\\s*$",
          "comment": "open block",
          "contentName": "source.embedded.asciidoc.properties",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.asciidoc.properties"
          }]
        }, {
          "begin": "^(\\.{4})\\s*$",
          "comment": "literal block",
          "contentName": "source.embedded.asciidoc.properties",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.asciidoc.properties"
          }]
        }]
      }, {
        "begin": "(?=(?>(?:^\\[(source)(?:,|#)\\p{Blank}*(?i:(py(thon)?))((?:,|#)[^\\]]+)*\\]$)))",
        "end": "((?<=--|\\.\\.\\.\\.)$|^\\p{Blank}*$)",
        "name": "markup.code.python.asciidoc",
        "patterns": [{
          "captures": {
            "0": {
              "name": "markup.heading.asciidoc",
              "patterns": [{
                "include": "#block-attribute-inner"
              }]
            }
          },
          "match": "^\\[(source)(?:,|#)\\p{Blank}*(?i:(py(thon)?))((?:,|#)([^,\\]]+))*\\]$"
        }, {
          "include": "#inlines"
        }, {
          "include": "#block-title"
        }, {
          "begin": "^(-{4,})\\s*$",
          "comment": "listing block",
          "contentName": "source.embedded.python",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.python"
          }]
        }, {
          "begin": "^(-{2})\\s*$",
          "comment": "open block",
          "contentName": "source.embedded.python",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.python"
          }]
        }, {
          "begin": "^(\\.{4})\\s*$",
          "comment": "literal block",
          "contentName": "source.embedded.python",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.python"
          }]
        }]
      }, {
        "begin": "(?=(?>(?:^\\[(source)(?:,|#)\\p{Blank}*(?i:(r))((?:,|#)[^\\]]+)*\\]$)))",
        "end": "((?<=--|\\.\\.\\.\\.)$|^\\p{Blank}*$)",
        "name": "markup.code.r.asciidoc",
        "patterns": [{
          "captures": {
            "0": {
              "name": "markup.heading.asciidoc",
              "patterns": [{
                "include": "#block-attribute-inner"
              }]
            }
          },
          "match": "^\\[(source)(?:,|#)\\p{Blank}*(?i:(r))((?:,|#)([^,\\]]+))*\\]$"
        }, {
          "include": "#inlines"
        }, {
          "include": "#block-title"
        }, {
          "begin": "^(-{4,})\\s*$",
          "comment": "listing block",
          "contentName": "source.embedded.r",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.r"
          }]
        }, {
          "begin": "^(-{2})\\s*$",
          "comment": "open block",
          "contentName": "source.embedded.r",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.r"
          }]
        }, {
          "begin": "^(\\.{4})\\s*$",
          "comment": "literal block",
          "contentName": "source.embedded.r",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.r"
          }]
        }]
      }, {
        "begin": "(?=(?>(?:^\\[(source)(?:,|#)\\p{Blank}*(?i:(ruby|rb))((?:,|#)[^\\]]+)*\\]$)))",
        "end": "((?<=--|\\.\\.\\.\\.)$|^\\p{Blank}*$)",
        "name": "markup.code.ruby.asciidoc",
        "patterns": [{
          "captures": {
            "0": {
              "name": "markup.heading.asciidoc",
              "patterns": [{
                "include": "#block-attribute-inner"
              }]
            }
          },
          "match": "^\\[(source)(?:,|#)\\p{Blank}*(?i:(ruby|rb))((?:,|#)([^,\\]]+))*\\]$"
        }, {
          "include": "#inlines"
        }, {
          "include": "#block-title"
        }, {
          "begin": "^(-{4,})\\s*$",
          "comment": "listing block",
          "contentName": "source.embedded.ruby",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.ruby"
          }]
        }, {
          "begin": "^(-{2})\\s*$",
          "comment": "open block",
          "contentName": "source.embedded.ruby",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.ruby"
          }]
        }, {
          "begin": "^(\\.{4})\\s*$",
          "comment": "literal block",
          "contentName": "source.embedded.ruby",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.ruby"
          }]
        }]
      }, {
        "begin": "(?=(?>(?:^\\[(source)(?:,|#)\\p{Blank}*(?i:(rust|rs))((?:,|#)[^\\]]+)*\\]$)))",
        "end": "((?<=--|\\.\\.\\.\\.)$|^\\p{Blank}*$)",
        "name": "markup.code.rust.asciidoc",
        "patterns": [{
          "captures": {
            "0": {
              "name": "markup.heading.asciidoc",
              "patterns": [{
                "include": "#block-attribute-inner"
              }]
            }
          },
          "match": "^\\[(source)(?:,|#)\\p{Blank}*(?i:(rust|rs))((?:,|#)([^,\\]]+))*\\]$"
        }, {
          "include": "#inlines"
        }, {
          "include": "#block-title"
        }, {
          "begin": "^(-{4,})\\s*$",
          "comment": "listing block",
          "contentName": "source.embedded.rust",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.rust"
          }]
        }, {
          "begin": "^(-{2})\\s*$",
          "comment": "open block",
          "contentName": "source.embedded.rust",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.rust"
          }]
        }, {
          "begin": "^(\\.{4})\\s*$",
          "comment": "literal block",
          "contentName": "source.embedded.rust",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.rust"
          }]
        }]
      }, {
        "begin": "(?=(?>(?:^\\[(source)(?:,|#)\\p{Blank}*(?i:(sass))((?:,|#)[^\\]]+)*\\]$)))",
        "end": "((?<=--|\\.\\.\\.\\.)$|^\\p{Blank}*$)",
        "name": "markup.code.sass.asciidoc",
        "patterns": [{
          "captures": {
            "0": {
              "name": "markup.heading.asciidoc",
              "patterns": [{
                "include": "#block-attribute-inner"
              }]
            }
          },
          "match": "^\\[(source)(?:,|#)\\p{Blank}*(?i:(sass))((?:,|#)([^,\\]]+))*\\]$"
        }, {
          "include": "#inlines"
        }, {
          "include": "#block-title"
        }, {
          "begin": "^(-{4,})\\s*$",
          "comment": "listing block",
          "contentName": "source.embedded.sass",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.sass"
          }]
        }, {
          "begin": "^(-{2})\\s*$",
          "comment": "open block",
          "contentName": "source.embedded.sass",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.sass"
          }]
        }, {
          "begin": "^(\\.{4})\\s*$",
          "comment": "literal block",
          "contentName": "source.embedded.sass",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.sass"
          }]
        }]
      }, {
        "begin": "(?=(?>(?:^\\[(source)(?:,|#)\\p{Blank}*(?i:(scala))((?:,|#)[^\\]]+)*\\]$)))",
        "end": "((?<=--|\\.\\.\\.\\.)$|^\\p{Blank}*$)",
        "name": "markup.code.scala.asciidoc",
        "patterns": [{
          "captures": {
            "0": {
              "name": "markup.heading.asciidoc",
              "patterns": [{
                "include": "#block-attribute-inner"
              }]
            }
          },
          "match": "^\\[(source)(?:,|#)\\p{Blank}*(?i:(scala))((?:,|#)([^,\\]]+))*\\]$"
        }, {
          "include": "#inlines"
        }, {
          "include": "#block-title"
        }, {
          "begin": "^(-{4,})\\s*$",
          "comment": "listing block",
          "contentName": "source.embedded.scala",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.scala"
          }]
        }, {
          "begin": "^(-{2})\\s*$",
          "comment": "open block",
          "contentName": "source.embedded.scala",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.scala"
          }]
        }, {
          "begin": "^(\\.{4})\\s*$",
          "comment": "literal block",
          "contentName": "source.embedded.scala",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.scala"
          }]
        }]
      }, {
        "begin": "(?=(?>(?:^\\[(source)(?:,|#)\\p{Blank}*(?i:(scss))((?:,|#)[^\\]]+)*\\]$)))",
        "end": "((?<=--|\\.\\.\\.\\.)$|^\\p{Blank}*$)",
        "name": "markup.code.css.scss.asciidoc",
        "patterns": [{
          "captures": {
            "0": {
              "name": "markup.heading.asciidoc",
              "patterns": [{
                "include": "#block-attribute-inner"
              }]
            }
          },
          "match": "^\\[(source)(?:,|#)\\p{Blank}*(?i:(scss))((?:,|#)([^,\\]]+))*\\]$"
        }, {
          "include": "#inlines"
        }, {
          "include": "#block-title"
        }, {
          "begin": "^(-{4,})\\s*$",
          "comment": "listing block",
          "contentName": "source.embedded.css.scss",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.css.scss"
          }]
        }, {
          "begin": "^(-{2})\\s*$",
          "comment": "open block",
          "contentName": "source.embedded.css.scss",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.css.scss"
          }]
        }, {
          "begin": "^(\\.{4})\\s*$",
          "comment": "literal block",
          "contentName": "source.embedded.css.scss",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.css.scss"
          }]
        }]
      }, {
        "begin": "(?=(?>(?:^\\[(source)(?:,|#)\\p{Blank}*(?i:(sh|bash|shell))((?:,|#)[^\\]]+)*\\]$)))",
        "end": "((?<=--|\\.\\.\\.\\.)$|^\\p{Blank}*$)",
        "name": "markup.code.shell.asciidoc",
        "patterns": [{
          "captures": {
            "0": {
              "name": "markup.heading.asciidoc",
              "patterns": [{
                "include": "#block-attribute-inner"
              }]
            }
          },
          "match": "^\\[(source)(?:,|#)\\p{Blank}*(?i:(sh|bash|shell))((?:,|#)([^,\\]]+))*\\]$"
        }, {
          "include": "#inlines"
        }, {
          "include": "#block-title"
        }, {
          "begin": "^(-{4,})\\s*$",
          "comment": "listing block",
          "contentName": "source.embedded.shell",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.shell"
          }]
        }, {
          "begin": "^(-{2})\\s*$",
          "comment": "open block",
          "contentName": "source.embedded.shell",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.shell"
          }]
        }, {
          "begin": "^(\\.{4})\\s*$",
          "comment": "literal block",
          "contentName": "source.embedded.shell",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.shell"
          }]
        }]
      }, {
        "begin": "(?=(?>(?:^\\[(source)(?:,|#)\\p{Blank}*(?i:(sql))((?:,|#)[^\\]]+)*\\]$)))",
        "end": "((?<=--|\\.\\.\\.\\.)$|^\\p{Blank}*$)",
        "name": "markup.code.sql.asciidoc",
        "patterns": [{
          "captures": {
            "0": {
              "name": "markup.heading.asciidoc",
              "patterns": [{
                "include": "#block-attribute-inner"
              }]
            }
          },
          "match": "^\\[(source)(?:,|#)\\p{Blank}*(?i:(sql))((?:,|#)([^,\\]]+))*\\]$"
        }, {
          "include": "#inlines"
        }, {
          "include": "#block-title"
        }, {
          "begin": "^(-{4,})\\s*$",
          "comment": "listing block",
          "contentName": "source.embedded.sql",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.sql"
          }]
        }, {
          "begin": "^(-{2})\\s*$",
          "comment": "open block",
          "contentName": "source.embedded.sql",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.sql"
          }]
        }, {
          "begin": "^(\\.{4})\\s*$",
          "comment": "literal block",
          "contentName": "source.embedded.sql",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.sql"
          }]
        }]
      }, {
        "begin": "(?=(?>(?:^\\[(source)(?:,|#)\\p{Blank}*(?i:(swift))((?:,|#)[^\\]]+)*\\]$)))",
        "end": "((?<=--|\\.\\.\\.\\.)$|^\\p{Blank}*$)",
        "name": "markup.code.swift.asciidoc",
        "patterns": [{
          "captures": {
            "0": {
              "name": "markup.heading.asciidoc",
              "patterns": [{
                "include": "#block-attribute-inner"
              }]
            }
          },
          "match": "^\\[(source)(?:,|#)\\p{Blank}*(?i:(swift))((?:,|#)([^,\\]]+))*\\]$"
        }, {
          "include": "#inlines"
        }, {
          "include": "#block-title"
        }, {
          "begin": "^(-{4,})\\s*$",
          "comment": "listing block",
          "contentName": "source.embedded.swift",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.swift"
          }]
        }, {
          "begin": "^(-{2})\\s*$",
          "comment": "open block",
          "contentName": "source.embedded.swift",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.swift"
          }]
        }, {
          "begin": "^(\\.{4})\\s*$",
          "comment": "literal block",
          "contentName": "source.embedded.swift",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.swift"
          }]
        }]
      }, {
        "begin": "(?=(?>(?:^\\[(source)(?:,|#)\\p{Blank}*(?i:(toml))((?:,|#)[^\\]]+)*\\]$)))",
        "end": "((?<=--|\\.\\.\\.\\.)$|^\\p{Blank}*$)",
        "name": "markup.code.toml.asciidoc",
        "patterns": [{
          "captures": {
            "0": {
              "name": "markup.heading.asciidoc",
              "patterns": [{
                "include": "#block-attribute-inner"
              }]
            }
          },
          "match": "^\\[(source)(?:,|#)\\p{Blank}*(?i:(toml))((?:,|#)([^,\\]]+))*\\]$"
        }, {
          "include": "#inlines"
        }, {
          "include": "#block-title"
        }, {
          "begin": "^(-{4,})\\s*$",
          "comment": "listing block",
          "contentName": "source.embedded.toml",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.toml"
          }]
        }, {
          "begin": "^(-{2})\\s*$",
          "comment": "open block",
          "contentName": "source.embedded.toml",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.toml"
          }]
        }, {
          "begin": "^(\\.{4})\\s*$",
          "comment": "literal block",
          "contentName": "source.embedded.toml",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.toml"
          }]
        }]
      }, {
        "begin": "(?=(?>(?:^\\[(source)(?:,|#)\\p{Blank}*(?i:(typescript|ts))((?:,|#)[^\\]]+)*\\]$)))",
        "end": "((?<=--|\\.\\.\\.\\.)$|^\\p{Blank}*$)",
        "name": "markup.code.ts.asciidoc",
        "patterns": [{
          "captures": {
            "0": {
              "name": "markup.heading.asciidoc",
              "patterns": [{
                "include": "#block-attribute-inner"
              }]
            }
          },
          "match": "^\\[(source)(?:,|#)\\p{Blank}*(?i:(typescript|ts))((?:,|#)([^,\\]]+))*\\]$"
        }, {
          "include": "#inlines"
        }, {
          "include": "#block-title"
        }, {
          "begin": "^(-{4,})\\s*$",
          "comment": "listing block",
          "contentName": "source.embedded.ts",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.ts"
          }]
        }, {
          "begin": "^(-{2})\\s*$",
          "comment": "open block",
          "contentName": "source.embedded.ts",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.ts"
          }]
        }, {
          "begin": "^(\\.{4})\\s*$",
          "comment": "literal block",
          "contentName": "source.embedded.ts",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.ts"
          }]
        }]
      }, {
        "begin": "(?=(?>(?:^\\[(source)(?:,|#)\\p{Blank}*(?i:(xml))((?:,|#)[^\\]]+)*\\]$)))",
        "end": "((?<=--|\\.\\.\\.\\.)$|^\\p{Blank}*$)",
        "name": "markup.code.xml.asciidoc",
        "patterns": [{
          "captures": {
            "0": {
              "name": "markup.heading.asciidoc",
              "patterns": [{
                "include": "#block-attribute-inner"
              }]
            }
          },
          "match": "^\\[(source)(?:,|#)\\p{Blank}*(?i:(xml))((?:,|#)([^,\\]]+))*\\]$"
        }, {
          "include": "#inlines"
        }, {
          "include": "#block-title"
        }, {
          "begin": "^(-{4,})\\s*$",
          "comment": "listing block",
          "contentName": "text.embedded.xml",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "text.xml"
          }]
        }, {
          "begin": "^(-{2})\\s*$",
          "comment": "open block",
          "contentName": "text.embedded.xml",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "text.xml"
          }]
        }, {
          "begin": "^(\\.{4})\\s*$",
          "comment": "literal block",
          "contentName": "text.embedded.xml",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "text.xml"
          }]
        }]
      }, {
        "begin": "(?=(?>(?:^\\[(source)(?:,|#)\\p{Blank}*(?i:(ya?ml))((?:,|#)[^\\]]+)*\\]$)))",
        "end": "((?<=--|\\.\\.\\.\\.)$|^\\p{Blank}*$)",
        "name": "markup.code.yaml.asciidoc",
        "patterns": [{
          "captures": {
            "0": {
              "name": "markup.heading.asciidoc",
              "patterns": [{
                "include": "#block-attribute-inner"
              }]
            }
          },
          "match": "^\\[(source)(?:,|#)\\p{Blank}*(?i:(ya?ml))((?:,|#)([^,\\]]+))*\\]$"
        }, {
          "include": "#inlines"
        }, {
          "include": "#block-title"
        }, {
          "begin": "^(-{4,})\\s*$",
          "comment": "listing block",
          "contentName": "source.embedded.yaml",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.yaml"
          }]
        }, {
          "begin": "^(-{2})\\s*$",
          "comment": "open block",
          "contentName": "source.embedded.yaml",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.yaml"
          }]
        }, {
          "begin": "^(\\.{4})\\s*$",
          "comment": "literal block",
          "contentName": "source.embedded.yaml",
          "end": "^(\\1)$",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }, {
            "include": "source.yaml"
          }]
        }]
      }, {
        "begin": "(?=(?>(?:^\\[(source)((?:,|#)[^\\]]+)*\\]$)))",
        "end": "((?<=--|\\.\\.\\.\\.)$|^\\p{Blank}*$)",
        "patterns": [{
          "captures": {
            "0": {
              "name": "markup.heading.asciidoc",
              "patterns": [{
                "include": "#block-attribute-inner"
              }]
            }
          },
          "match": "^\\[(source)((?:,|#)([^,\\]]+))*\\]$"
        }, {
          "include": "#inlines"
        }, {
          "include": "#block-title"
        }, {
          "begin": "^(-{4,})\\s*$",
          "comment": "listing block",
          "end": "^(\\1)$",
          "name": "markup.raw.asciidoc",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }]
        }, {
          "begin": "^(-{2})\\s*$",
          "comment": "open block",
          "end": "^(\\1)$",
          "name": "markup.raw.asciidoc",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }]
        }, {
          "begin": "^(\\.{4})\\s*$",
          "comment": "literal block",
          "end": "^(\\1)$",
          "name": "markup.raw.asciidoc",
          "patterns": [{
            "include": "#block-callout"
          }, {
            "include": "#include-directive"
          }]
        }]
      }, {
        "begin": "^(-{4,})\\s*$",
        "beginCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "end": "^(\\1)$",
        "endCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "name": "markup.raw.asciidoc",
        "patterns": [{
          "include": "#block-callout"
        }, {
          "include": "#include-directive"
        }]
      }]
    },
    "source-markdown": {
      "patterns": [{
        "begin": "^\\s*(`{3,})\\s*(?i:(c))\\s*$",
        "beginCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "contentName": "source.embedded.c",
        "end": "^\\s*\\1\\s*$",
        "endCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "name": "markup.code.c.asciidoc",
        "patterns": [{
          "include": "#block-callout"
        }, {
          "include": "source.c"
        }]
      }, {
        "begin": "^\\s*(`{3,})\\s*(?i:(clojure))\\s*$",
        "beginCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "contentName": "source.embedded.clojure",
        "end": "^\\s*\\1\\s*$",
        "endCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "name": "markup.code.clojure.asciidoc",
        "patterns": [{
          "include": "#block-callout"
        }, {
          "include": "source.clojure"
        }]
      }, {
        "begin": "^\\s*(`{3,})\\s*(?i:(coffee-?(script)?))\\s*$",
        "beginCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "contentName": "source.embedded.coffee",
        "end": "^\\s*\\1\\s*$",
        "endCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "name": "markup.code.coffee.asciidoc",
        "patterns": [{
          "include": "#block-callout"
        }, {
          "include": "source.coffee"
        }]
      }, {
        "begin": "^\\s*(`{3,})\\s*(?i:(c(pp|\\+\\+)))\\s*$",
        "beginCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "contentName": "source.embedded.cpp",
        "end": "^\\s*\\1\\s*$",
        "endCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "name": "markup.code.cpp.asciidoc",
        "patterns": [{
          "include": "#block-callout"
        }, {
          "include": "source.cpp"
        }]
      }, {
        "begin": "^\\s*(`{3,})\\s*(?i:(css))\\s*$",
        "beginCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "contentName": "source.embedded.css",
        "end": "^\\s*\\1\\s*$",
        "endCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "name": "markup.code.css.asciidoc",
        "patterns": [{
          "include": "#block-callout"
        }, {
          "include": "source.css"
        }]
      }, {
        "begin": "^\\s*(`{3,})\\s*(?i:(cs(harp)?))\\s*$",
        "beginCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "contentName": "source.embedded.cs",
        "end": "^\\s*\\1\\s*$",
        "endCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "name": "markup.code.cs.asciidoc",
        "patterns": [{
          "include": "#block-callout"
        }, {
          "include": "source.cs"
        }]
      }, {
        "begin": "^\\s*(`{3,})\\s*(?i:(diff|patch|rej))\\s*$",
        "beginCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "contentName": "source.embedded.diff",
        "end": "^\\s*\\1\\s*$",
        "endCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "name": "markup.code.diff.asciidoc",
        "patterns": [{
          "include": "#block-callout"
        }, {
          "include": "source.diff"
        }]
      }, {
        "begin": "^\\s*(`{3,})\\s*(?i:(docker(file)?))\\s*$",
        "beginCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "contentName": "source.embedded.dockerfile",
        "end": "^\\s*\\1\\s*$",
        "endCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "name": "markup.code.dockerfile.asciidoc",
        "patterns": [{
          "include": "#block-callout"
        }, {
          "include": "source.dockerfile"
        }]
      }, {
        "begin": "^\\s*(`{3,})\\s*(?i:(elixir))\\s*$",
        "beginCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "contentName": "source.embedded.elixir",
        "end": "^\\s*\\1\\s*$",
        "endCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "name": "markup.code.elixir.asciidoc",
        "patterns": [{
          "include": "#block-callout"
        }, {
          "include": "source.elixir"
        }]
      }, {
        "begin": "^\\s*(`{3,})\\s*(?i:(elm))\\s*$",
        "beginCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "contentName": "source.embedded.elm",
        "end": "^\\s*\\1\\s*$",
        "endCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "name": "markup.code.elm.asciidoc",
        "patterns": [{
          "include": "#block-callout"
        }, {
          "include": "source.elm"
        }]
      }, {
        "begin": "^\\s*(`{3,})\\s*(?i:(erlang))\\s*$",
        "beginCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "contentName": "source.embedded.erlang",
        "end": "^\\s*\\1\\s*$",
        "endCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "name": "markup.code.erlang.asciidoc",
        "patterns": [{
          "include": "#block-callout"
        }, {
          "include": "source.erlang"
        }]
      }, {
        "begin": "^\\s*(`{3,})\\s*(?i:(go(lang)?))\\s*$",
        "beginCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "contentName": "source.embedded.go",
        "end": "^\\s*\\1\\s*$",
        "endCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "name": "markup.code.go.asciidoc",
        "patterns": [{
          "include": "#block-callout"
        }, {
          "include": "source.go"
        }]
      }, {
        "begin": "^\\s*(`{3,})\\s*(?i:(groovy))\\s*$",
        "beginCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "contentName": "source.embedded.groovy",
        "end": "^\\s*\\1\\s*$",
        "endCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "name": "markup.code.groovy.asciidoc",
        "patterns": [{
          "include": "#block-callout"
        }, {
          "include": "source.groovy"
        }]
      }, {
        "begin": "^\\s*(`{3,})\\s*(?i:(haskell))\\s*$",
        "beginCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "contentName": "source.embedded.haskell",
        "end": "^\\s*\\1\\s*$",
        "endCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "name": "markup.code.haskell.asciidoc",
        "patterns": [{
          "include": "#block-callout"
        }, {
          "include": "source.haskell"
        }]
      }, {
        "begin": "^\\s*(`{3,})\\s*(?i:(html))\\s*$",
        "beginCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "contentName": "text.embedded.html.basic",
        "end": "^\\s*\\1\\s*$",
        "endCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "name": "markup.code.html.basic.asciidoc",
        "patterns": [{
          "include": "#block-callout"
        }, {
          "include": "text.html.basic"
        }]
      }, {
        "begin": "^\\s*(`{3,})\\s*(?i:(java))\\s*$",
        "beginCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "contentName": "source.embedded.java",
        "end": "^\\s*\\1\\s*$",
        "endCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "name": "markup.code.java.asciidoc",
        "patterns": [{
          "include": "#block-callout"
        }, {
          "include": "source.java"
        }]
      }, {
        "begin": "^\\s*(`{3,})\\s*(?i:(javascript|js))\\s*$",
        "beginCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "contentName": "source.embedded.js",
        "end": "^\\s*\\1\\s*$",
        "endCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "name": "markup.code.js.asciidoc",
        "patterns": [{
          "include": "#block-callout"
        }, {
          "include": "source.js"
        }]
      }, {
        "begin": "^\\s*(`{3,})\\s*(?i:(json))\\s*$",
        "beginCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "contentName": "source.embedded.json",
        "end": "^\\s*\\1\\s*$",
        "endCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "name": "markup.code.json.asciidoc",
        "patterns": [{
          "include": "#block-callout"
        }, {
          "include": "source.json"
        }]
      }, {
        "begin": "^\\s*(`{3,})\\s*(?i:(jsx))\\s*$",
        "beginCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "contentName": "source.embedded.js.jsx",
        "end": "^\\s*\\1\\s*$",
        "endCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "name": "markup.code.js.jsx.asciidoc",
        "patterns": [{
          "include": "#block-callout"
        }, {
          "include": "source.js.jsx"
        }]
      }, {
        "begin": "^\\s*(`{3,})\\s*(?i:(julia))\\s*$",
        "beginCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "contentName": "source.embedded.julia",
        "end": "^\\s*\\1\\s*$",
        "endCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "name": "markup.code.julia.asciidoc",
        "patterns": [{
          "include": "#block-callout"
        }, {
          "include": "source.julia"
        }]
      }, {
        "begin": "^\\s*(`{3,})\\s*(?i:(kotlin|kts?))\\s*$",
        "beginCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "contentName": "source.embedded.kotlin",
        "end": "^\\s*\\1\\s*$",
        "endCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "name": "markup.code.kotlin.asciidoc",
        "patterns": [{
          "include": "#block-callout"
        }, {
          "include": "source.kotlin"
        }]
      }, {
        "begin": "^\\s*(`{3,})\\s*(?i:(less))\\s*$",
        "beginCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "contentName": "source.embedded.css.less",
        "end": "^\\s*\\1\\s*$",
        "endCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "name": "markup.code.css.less.asciidoc",
        "patterns": [{
          "include": "#block-callout"
        }, {
          "include": "source.css.less"
        }]
      }, {
        "begin": "^\\s*(`{3,})\\s*(?i:(make(file)?))\\s*$",
        "beginCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "contentName": "source.embedded.makefile",
        "end": "^\\s*\\1\\s*$",
        "endCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "name": "markup.code.makefile.asciidoc",
        "patterns": [{
          "include": "#block-callout"
        }, {
          "include": "source.makefile"
        }]
      }, {
        "begin": "^\\s*(`{3,})\\s*(?i:(markdown|mdown|md))\\s*$",
        "beginCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "contentName": "source.embedded.gfm",
        "end": "^\\s*\\1\\s*$",
        "endCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "name": "markup.code.gfm.asciidoc",
        "patterns": [{
          "include": "#block-callout"
        }, {
          "include": "source.gfm"
        }]
      }, {
        "begin": "^\\s*(`{3,})\\s*(?i:(mustache))\\s*$",
        "beginCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "contentName": "text.embedded.html.mustache",
        "end": "^\\s*\\1\\s*$",
        "endCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "name": "markup.code.html.mustache.asciidoc",
        "patterns": [{
          "include": "#block-callout"
        }, {
          "include": "text.html.mustache"
        }]
      }, {
        "begin": "^\\s*(`{3,})\\s*(?i:(objc|objective-c))\\s*$",
        "beginCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "contentName": "source.embedded.objc",
        "end": "^\\s*\\1\\s*$",
        "endCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "name": "markup.code.objc.asciidoc",
        "patterns": [{
          "include": "#block-callout"
        }, {
          "include": "source.objc"
        }]
      }, {
        "begin": "^\\s*(`{3,})\\s*(?i:(ocaml))\\s*$",
        "beginCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "contentName": "source.embedded.ocaml",
        "end": "^\\s*\\1\\s*$",
        "endCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "name": "markup.code.ocaml.asciidoc",
        "patterns": [{
          "include": "#block-callout"
        }, {
          "include": "source.ocaml"
        }]
      }, {
        "begin": "^\\s*(`{3,})\\s*(?i:(perl))\\s*$",
        "beginCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "contentName": "source.embedded.perl",
        "end": "^\\s*\\1\\s*$",
        "endCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "name": "markup.code.perl.asciidoc",
        "patterns": [{
          "include": "#block-callout"
        }, {
          "include": "source.perl"
        }]
      }, {
        "begin": "^\\s*(`{3,})\\s*(?i:(perl6))\\s*$",
        "beginCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "contentName": "source.embedded.perl6",
        "end": "^\\s*\\1\\s*$",
        "endCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "name": "markup.code.perl6.asciidoc",
        "patterns": [{
          "include": "#block-callout"
        }, {
          "include": "source.perl6"
        }]
      }, {
        "begin": "^\\s*(`{3,})\\s*(?i:(php))\\s*$",
        "beginCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "contentName": "text.embedded.html.php",
        "end": "^\\s*\\1\\s*$",
        "endCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "name": "markup.code.html.php.asciidoc",
        "patterns": [{
          "include": "#block-callout"
        }, {
          "include": "text.html.php"
        }]
      }, {
        "begin": "^\\s*(`{3,})\\s*(?i:(properties))\\s*$",
        "beginCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "contentName": "source.embedded.asciidoc.properties",
        "end": "^\\s*\\1\\s*$",
        "endCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "name": "markup.code.asciidoc.properties.asciidoc",
        "patterns": [{
          "include": "#block-callout"
        }, {
          "include": "source.asciidoc.properties"
        }]
      }, {
        "begin": "^\\s*(`{3,})\\s*(?i:(py(thon)?))\\s*$",
        "beginCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "contentName": "source.embedded.python",
        "end": "^\\s*\\1\\s*$",
        "endCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "name": "markup.code.python.asciidoc",
        "patterns": [{
          "include": "#block-callout"
        }, {
          "include": "source.python"
        }]
      }, {
        "begin": "^\\s*(`{3,})\\s*(?i:(r))\\s*$",
        "beginCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "contentName": "source.embedded.r",
        "end": "^\\s*\\1\\s*$",
        "endCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "name": "markup.code.r.asciidoc",
        "patterns": [{
          "include": "#block-callout"
        }, {
          "include": "source.r"
        }]
      }, {
        "begin": "^\\s*(`{3,})\\s*(?i:(ruby|rb))\\s*$",
        "beginCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "contentName": "source.embedded.ruby",
        "end": "^\\s*\\1\\s*$",
        "endCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "name": "markup.code.ruby.asciidoc",
        "patterns": [{
          "include": "#block-callout"
        }, {
          "include": "source.ruby"
        }]
      }, {
        "begin": "^\\s*(`{3,})\\s*(?i:(rust|rs))\\s*$",
        "beginCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "contentName": "source.embedded.rust",
        "end": "^\\s*\\1\\s*$",
        "endCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "name": "markup.code.rust.asciidoc",
        "patterns": [{
          "include": "#block-callout"
        }, {
          "include": "source.rust"
        }]
      }, {
        "begin": "^\\s*(`{3,})\\s*(?i:(sass))\\s*$",
        "beginCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "contentName": "source.embedded.sass",
        "end": "^\\s*\\1\\s*$",
        "endCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "name": "markup.code.sass.asciidoc",
        "patterns": [{
          "include": "#block-callout"
        }, {
          "include": "source.sass"
        }]
      }, {
        "begin": "^\\s*(`{3,})\\s*(?i:(scala))\\s*$",
        "beginCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "contentName": "source.embedded.scala",
        "end": "^\\s*\\1\\s*$",
        "endCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "name": "markup.code.scala.asciidoc",
        "patterns": [{
          "include": "#block-callout"
        }, {
          "include": "source.scala"
        }]
      }, {
        "begin": "^\\s*(`{3,})\\s*(?i:(scss))\\s*$",
        "beginCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "contentName": "source.embedded.css.scss",
        "end": "^\\s*\\1\\s*$",
        "endCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "name": "markup.code.css.scss.asciidoc",
        "patterns": [{
          "include": "#block-callout"
        }, {
          "include": "source.css.scss"
        }]
      }, {
        "begin": "^\\s*(`{3,})\\s*(?i:(sh|bash|shell))\\s*$",
        "beginCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "contentName": "source.embedded.shell",
        "end": "^\\s*\\1\\s*$",
        "endCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "name": "markup.code.shell.asciidoc",
        "patterns": [{
          "include": "#block-callout"
        }, {
          "include": "source.shell"
        }]
      }, {
        "begin": "^\\s*(`{3,})\\s*(?i:(sql))\\s*$",
        "beginCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "contentName": "source.embedded.sql",
        "end": "^\\s*\\1\\s*$",
        "endCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "name": "markup.code.sql.asciidoc",
        "patterns": [{
          "include": "#block-callout"
        }, {
          "include": "source.sql"
        }]
      }, {
        "begin": "^\\s*(`{3,})\\s*(?i:(swift))\\s*$",
        "beginCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "contentName": "source.embedded.swift",
        "end": "^\\s*\\1\\s*$",
        "endCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "name": "markup.code.swift.asciidoc",
        "patterns": [{
          "include": "#block-callout"
        }, {
          "include": "source.swift"
        }]
      }, {
        "begin": "^\\s*(`{3,})\\s*(?i:(toml))\\s*$",
        "beginCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "contentName": "source.embedded.toml",
        "end": "^\\s*\\1\\s*$",
        "endCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "name": "markup.code.toml.asciidoc",
        "patterns": [{
          "include": "#block-callout"
        }, {
          "include": "source.toml"
        }]
      }, {
        "begin": "^\\s*(`{3,})\\s*(?i:(typescript|ts))\\s*$",
        "beginCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "contentName": "source.embedded.ts",
        "end": "^\\s*\\1\\s*$",
        "endCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "name": "markup.code.ts.asciidoc",
        "patterns": [{
          "include": "#block-callout"
        }, {
          "include": "source.ts"
        }]
      }, {
        "begin": "^\\s*(`{3,})\\s*(?i:(xml))\\s*$",
        "beginCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "contentName": "text.embedded.xml",
        "end": "^\\s*\\1\\s*$",
        "endCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "name": "markup.code.xml.asciidoc",
        "patterns": [{
          "include": "#block-callout"
        }, {
          "include": "text.xml"
        }]
      }, {
        "begin": "^\\s*(`{3,})\\s*(?i:(ya?ml))\\s*$",
        "beginCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "contentName": "source.embedded.yaml",
        "end": "^\\s*\\1\\s*$",
        "endCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "name": "markup.code.yaml.asciidoc",
        "patterns": [{
          "include": "#block-callout"
        }, {
          "include": "source.yaml"
        }]
      }, {
        "begin": "^\\s*(`{3,}).*$",
        "beginCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "end": "^\\s*\\1\\s*$",
        "endCaptures": {
          "0": {
            "name": "support.asciidoc"
          }
        },
        "name": "markup.raw.asciidoc",
        "patterns": [{
          "include": "#block-callout"
        }]
      }]
    },
    "source-paragraphs": {
      "patterns": [{
        "include": "#source-asciidoctor"
      }, {
        "include": "#source-markdown"
      }]
    },
    "stem-macro": {
      "patterns": [{
        "begin": "(?<!\\\\)(stem|(?:latex|ascii)math):([a-z,]*)(\\[)",
        "beginCaptures": {
          "1": {
            "name": "entity.name.function.asciidoc"
          },
          "2": {
            "name": "markup.meta.attribute-list.asciidoc"
          }
        },
        "contentName": "string.unquoted.asciidoc",
        "end": "\\]|^$",
        "name": "markup.macro.inline.stem.asciidoc"
      }]
    },
    "strong": {
      "patterns": [{
        "captures": {
          "1": {
            "name": "markup.meta.attribute-list.asciidoc"
          },
          "2": {
            "name": "markup.bold.asciidoc"
          },
          "3": {
            "name": "punctuation.definition.asciidoc"
          },
          "5": {
            "name": "punctuation.definition.asciidoc"
          }
        },
        "match": "(?<!\\\\\\\\)(\\[.+?\\])?((\\*\\*)(.+?)(\\*\\*))",
        "name": "markup.strong.unconstrained.asciidoc"
      }, {
        "captures": {
          "1": {
            "name": "markup.meta.attribute-list.asciidoc"
          },
          "2": {
            "name": "markup.bold.asciidoc"
          },
          "3": {
            "name": "punctuation.definition.asciidoc"
          },
          "5": {
            "name": "punctuation.definition.asciidoc"
          }
        },
        "match": "(?<![\\\\;:\\p{Word}\\*])(\\[.+?\\])?((\\*)(\\S|\\S.*?\\S)(\\*)(?!\\p{Word}))",
        "name": "markup.strong.constrained.asciidoc"
      }]
    },
    "subscript": {
      "patterns": [{
        "captures": {
          "1": {
            "name": "markup.meta.sub.attribute-list.asciidoc"
          },
          "2": {
            "name": "markup.sub.subscript.asciidoc"
          },
          "3": {
            "name": "punctuation.definition.asciidoc"
          },
          "5": {
            "name": "punctuation.definition.asciidoc"
          }
        },
        "match": "(?<!\\\\)(\\[.+?\\])?((~)(\\S+?)(~))",
        "name": "markup.subscript.asciidoc"
      }]
    },
    "superscript": {
      "patterns": [{
        "captures": {
          "1": {
            "name": "markup.meta.super.attribute-list.asciidoc"
          },
          "2": {
            "name": "markup.super.superscript.asciidoc"
          },
          "3": {
            "name": "punctuation.definition.asciidoc"
          },
          "5": {
            "name": "punctuation.definition.asciidoc"
          }
        },
        "match": "(?<!\\\\)(\\[.+?\\])?((\\^)(\\S+?)(\\^))",
        "name": "markup.superscript.asciidoc"
      }]
    },
    "table-csv": {
      "patterns": [{
        "begin": "^(,===)$",
        "beginCaptures": {
          "0": {
            "name": "markup.table.delimiter.asciidoc"
          }
        },
        "contentName": "string.unquoted.asciidoc",
        "end": "^(\\1)$",
        "endCaptures": {
          "0": {
            "name": "markup.table.delimiter.asciidoc"
          }
        },
        "name": "markup.table.csv.asciidoc",
        "patterns": [{
          "include": "text.csv"
        }, {
          "captures": {
            "0": {
              "name": "markup.table.cell.delimiter.asciidoc"
            }
          },
          "comment": "cell separator",
          "match": ","
        }, {
          "include": "#general-block-macro"
        }]
      }]
    },
    "table-dsv": {
      "patterns": [{
        "begin": "^(:===)$",
        "beginCaptures": {
          "0": {
            "name": "markup.table.delimiter.asciidoc"
          }
        },
        "contentName": "string.unquoted.asciidoc",
        "end": "^(\\1)$",
        "endCaptures": {
          "0": {
            "name": "markup.table.delimiter.asciidoc"
          }
        },
        "name": "markup.table.dsv.asciidoc",
        "patterns": [{
          "captures": {
            "0": {
              "name": "markup.table.cell.delimiter.asciidoc"
            }
          },
          "comment": "cell separator",
          "match": ":"
        }, {
          "include": "#general-block-macro"
        }]
      }]
    },
    "table-nested": {
      "patterns": [{
        "begin": "^(!===)$",
        "beginCaptures": {
          "0": {
            "name": "markup.table.delimiter.asciidoc"
          }
        },
        "contentName": "markup.table.content.asciidoc",
        "end": "^(\\1)$",
        "endCaptures": {
          "0": {
            "name": "markup.table.delimiter.asciidoc"
          }
        },
        "name": "markup.table.nested.asciidoc",
        "patterns": [{
          "captures": {
            "1": {
              "name": "markup.meta.attribute-list.asciidoc"
            },
            "2": {
              "name": "markup.table.cell.delimiter.asciidoc"
            }
          },
          "comment": "cell separator and attributes",
          "match": "(^|[^\\p{Blank}\\\\]*)(?<!\\\\)(!)"
        }, {
          "include": "#tables-includes"
        }]
      }]
    },
    "table-psv": {
      "patterns": [{
        "begin": "^(\\|===)$",
        "beginCaptures": {
          "0": {
            "name": "markup.table.delimiter.asciidoc"
          }
        },
        "contentName": "markup.table.content.asciidoc",
        "end": "^(\\1)$",
        "endCaptures": {
          "0": {
            "name": "markup.table.delimiter.asciidoc"
          }
        },
        "name": "markup.table.asciidoc",
        "patterns": [{
          "captures": {
            "1": {
              "name": "markup.meta.attribute-list.asciidoc"
            },
            "2": {
              "name": "markup.table.cell.delimiter.asciidoc"
            }
          },
          "comment": "cell separator and attributes",
          "match": "(^|[^\\p{Blank}\\\\]*)(?<!\\\\)(\\|)"
        }, {
          "include": "#tables-includes"
        }]
      }]
    },
    "tables": {
      "patterns": [{
        "include": "#table-psv"
      }, {
        "include": "#table-nested"
      }, {
        "include": "#table-csv"
      }, {
        "include": "#table-dsv"
      }]
    },
    "tables-includes": {
      "patterns": [{
        "include": "#comment"
      }, {
        "include": "#callout-list-item"
      }, {
        "include": "#attribute-entry"
      }, {
        "include": "#block-title"
      }, {
        "include": "#explicit-paragraph"
      }, {
        "include": "#section"
      }, {
        "include": "#blocks"
      }, {
        "include": "#list"
      }, {
        "include": "#inlines"
      }, {
        "include": "#line-break"
      }]
    },
    "titles": {
      "patterns": [{
        "begin": "^((?:=|#){6})([\\p{Blank}]+)(?=\\S+)",
        "beginCaptures": {
          "1": {
            "name": "markup.heading.marker.asciidoc"
          },
          "2": {
            "name": "markup.heading.space.asciidoc"
          }
        },
        "end": "$",
        "name": "markup.heading.heading-5.asciidoc",
        "patterns": [{
          "include": "$self"
        }]
      }, {
        "begin": "^((?:=|#){5})([\\p{Blank}]+)(?=\\S+)",
        "beginCaptures": {
          "1": {
            "name": "markup.heading.marker.asciidoc"
          },
          "2": {
            "name": "markup.heading.space.asciidoc"
          }
        },
        "end": "$",
        "name": "markup.heading.heading-4.asciidoc",
        "patterns": [{
          "include": "$self"
        }]
      }, {
        "begin": "^((?:=|#){4})([\\p{Blank}]+)(?=\\S+)",
        "beginCaptures": {
          "1": {
            "name": "markup.heading.marker.asciidoc"
          },
          "2": {
            "name": "markup.heading.space.asciidoc"
          }
        },
        "end": "$",
        "name": "markup.heading.heading-3.asciidoc",
        "patterns": [{
          "include": "$self"
        }]
      }, {
        "begin": "^((?:=|#){3})([\\p{Blank}]+)(?=\\S+)",
        "beginCaptures": {
          "1": {
            "name": "markup.heading.marker.asciidoc"
          },
          "2": {
            "name": "markup.heading.space.asciidoc"
          }
        },
        "end": "$",
        "name": "markup.heading.heading-2.asciidoc",
        "patterns": [{
          "include": "$self"
        }]
      }, {
        "begin": "^((?:=|#){2})([\\p{Blank}]+)(?=\\S+)",
        "beginCaptures": {
          "1": {
            "name": "markup.heading.marker.asciidoc"
          },
          "2": {
            "name": "markup.heading.space.asciidoc"
          }
        },
        "end": "$",
        "name": "markup.heading.heading-1.asciidoc",
        "patterns": [{
          "include": "$self"
        }]
      }, {
        "begin": "^((?:=|#){1})([\\p{Blank}]+)(?=\\S+)",
        "beginCaptures": {
          "1": {
            "name": "markup.heading.marker.asciidoc"
          },
          "2": {
            "name": "markup.heading.space.asciidoc"
          }
        },
        "end": "$",
        "name": "markup.heading.heading-0.asciidoc",
        "patterns": [{
          "include": "$self"
        }]
      }]
    },
    "typographic-quotes": {
      "patterns": [{
        "captures": {
          "1": {
            "name": "markup.meta.attribute-list.asciidoc"
          },
          "3": {
            "name": "punctuation.definition.asciidoc"
          },
          "5": {
            "name": "punctuation.definition.asciidoc"
          }
        },
        "comment": "double-quoted",
        "match": '(?:^|(?<!\\p{Word}|;|:))(\\[([^\\]]+?)\\])?("`)(\\S|\\S.*?\\S)(`")(?!\\p{Word})',
        "name": "markup.italic.quote.typographic-quotes.asciidoc"
      }, {
        "captures": {
          "1": {
            "name": "markup.meta.attribute-list.asciidoc"
          },
          "3": {
            "name": "punctuation.definition.asciidoc"
          },
          "5": {
            "name": "punctuation.definition.asciidoc"
          }
        },
        "comment": "single-quoted",
        "match": "(?:^|(?<!\\p{Word}|;|:))(\\[([^\\]]+?)\\])?('`)(\\S|\\S.*?\\S)(`')(?!\\p{Word})",
        "name": "markup.italic.quote.typographic-quotes.asciidoc"
      }]
    },
    "xref-macro": {
      "patterns": [{
        "captures": {
          "1": {
            "name": "constant.asciidoc"
          },
          "2": {
            "name": "markup.meta.attribute-list.asciidoc"
          },
          "3": {
            "name": "string.unquoted.asciidoc"
          },
          "4": {
            "name": "constant.asciidoc"
          }
        },
        "match": '(?<!\\\\)(?:(<<)([\\p{Word}":./]+,)?(.*?)(>>))',
        "name": "markup.reference.xref.asciidoc"
      }, {
        "begin": '(?<!\\\\)(xref:)([\\p{Word}":.\\/].*?)(\\[)',
        "beginCaptures": {
          "1": {
            "name": "entity.name.function.asciidoc"
          },
          "2": {
            "name": "markup.meta.attribute-list.asciidoc"
          }
        },
        "contentName": "string.unquoted.asciidoc",
        "end": "\\]|^$",
        "name": "markup.reference.xref.asciidoc"
      }]
    }
  },
  "scopeName": "text.asciidoc",
  "embeddedLangs": ["html", "yaml", "csv", "c", "clojure", "coffee", "cpp", "css", "csharp", "diff", "docker", "elixir", "elm", "erlang", "go", "groovy", "haskell", "java", "javascript", "json", "jsx", "julia", "kotlin", "less", "make", "objective-c", "ocaml", "perl", "python", "r", "ruby", "rust", "sass", "scala", "scss", "shellscript", "sql", "swift", "toml", "typescript", "xml"],
  "aliases": ["adoc"]
});
var asciidoc = [...html, ...yaml, ...csv, ...c, ...clojure, ...coffee, ...cpp, ...css, ...csharp, ...diff, ...docker, ...elixir, ...elm, ...erlang, ...go, ...groovy, ...haskell, ...java, ...javascript, ...json, ...jsx, ...julia, ...kotlin, ...less, ...make, ...objective_c, ...ocaml, ...perl, ...python, ...r, ...ruby, ...rust, ...sass, ...scala, ...scss, ...shellscript, ...sql, ...swift, ...toml, ...typescript, ...xml, lang];
export {
  asciidoc as default
};
//# sourceMappingURL=asciidoc-HFX5RSA6.js.map
