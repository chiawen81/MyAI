import { createRequire } from 'module';const require = createRequire(import.meta.url);
import "./chunk-NQ4HTGF6.js";

// node_modules/shiki/dist/langs/codeowners.mjs
var lang = Object.freeze({
  "displayName": "CODEOWNERS",
  "name": "codeowners",
  "patterns": [{
    "include": "#comment"
  }, {
    "include": "#pattern"
  }, {
    "include": "#owner"
  }],
  "repository": {
    "comment": {
      "patterns": [{
        "begin": "^\\s*#",
        "captures": {
          "0": {
            "name": "punctuation.definition.comment.codeowners"
          }
        },
        "end": "$",
        "name": "comment.line.codeowners"
      }]
    },
    "owner": {
      "match": "\\S*@\\S+",
      "name": "storage.type.function.codeowners"
    },
    "pattern": {
      "match": "^\\s*(\\S+)",
      "name": "variable.other.codeowners"
    }
  },
  "scopeName": "text.codeowners"
});
var codeowners = [lang];
export {
  codeowners as default
};
//# sourceMappingURL=codeowners-7KVMQW35.js.map
