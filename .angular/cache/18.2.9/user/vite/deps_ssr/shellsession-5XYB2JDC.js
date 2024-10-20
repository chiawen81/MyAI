import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  shellscript
} from "./chunk-UI2VLQQK.js";
import "./chunk-NQ4HTGF6.js";

// node_modules/shiki/dist/langs/shellsession.mjs
var lang = Object.freeze({
  "displayName": "Shell Session",
  "fileTypes": ["sh-session"],
  "name": "shellsession",
  "patterns": [{
    "captures": {
      "1": {
        "name": "entity.other.prompt-prefix.shell-session"
      },
      "2": {
        "name": "punctuation.separator.prompt.shell-session"
      },
      "3": {
        "name": "source.shell",
        "patterns": [{
          "include": "source.shell"
        }]
      }
    },
    "match": "(?x) ^ (?: ( (?:\\(\\S+\\)\\s*)? (?: sh\\S*?                       | \\w+\\S+[@:]\\S+(?:\\s+\\S+)? | \\[\\S+?[@:][^\\n]+?\\].*? ) ) \\s* )? ( [>$#%❯➜] | \\p{Greek} ) \\s+ (.*) $"
  }, {
    "match": "^.+$",
    "name": "meta.output.shell-session"
  }],
  "scopeName": "text.shell-session",
  "embeddedLangs": ["shellscript"],
  "aliases": ["console"]
});
var shellsession = [...shellscript, lang];
export {
  shellsession as default
};
//# sourceMappingURL=shellsession-5XYB2JDC.js.map
