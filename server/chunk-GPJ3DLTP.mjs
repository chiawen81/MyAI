import './polyfills.server.mjs';
var e=Object.freeze({displayName:"Shell",name:"shellscript",patterns:[{include:"#initial_context"}],repository:{alias_statement:{begin:"(?:(?:[ \\t]*+)(alias)(?:[ \\t]*+)((?:(?:((?<!\\w)-\\w+\\b)(?:[ \\t]*+))*))(?:(?:[ \\t]*+)(?:((?<!\\w)(?:[a-zA-Z_0-9-]+)(?!\\w))(?:(?:(\\[)((?:(?:(?:(?:\\$?)(?:(?<!\\w)(?:[a-zA-Z_0-9-]+)(?!\\w))|@)|\\*)|(-?\\d+)))(\\]))?))(?:(?:(\\=)|(\\+\\=))|(\\-\\=))))",beginCaptures:{1:{name:"storage.type.alias.shell"},2:{patterns:[{match:"(?<!\\w)-\\w+\\b",name:"string.unquoted.argument.shell constant.other.option.shell"}]},3:{name:"string.unquoted.argument.shell constant.other.option.shell"},4:{name:"variable.other.assignment.shell"},5:{name:"punctuation.definition.array.access.shell"},6:{name:"variable.other.assignment.shell"},7:{name:"constant.numeric.shell constant.numeric.integer.shell"},8:{name:"punctuation.definition.array.access.shell"},9:{name:"keyword.operator.assignment.shell"},10:{name:"keyword.operator.assignment.compound.shell"},11:{name:"keyword.operator.assignment.compound.shell"}},end:"(?:(?= |\\t|$)|(?:(?:(?:(;)|(&&))|(\\|\\|))|(&)))",endCaptures:{1:{name:"punctuation.terminator.statement.semicolon.shell"},2:{name:"punctuation.separator.statement.and.shell"},3:{name:"punctuation.separator.statement.or.shell"},4:{name:"punctuation.separator.statement.background.shell"}},name:"meta.expression.assignment.alias.shell",patterns:[{include:"#normal_context"}]},argument:{begin:"(?:[ \\t]++)(?!(?:&|\\||\\(|\\[|#|\\n|$|;))",beginCaptures:{},end:"(?= |\\t|;|\\||&|$|\\n|\\)|\\`)",endCaptures:{},name:"meta.argument.shell",patterns:[{include:"#argument_context"},{include:"#line_continuation"}]},argument_context:{patterns:[{captures:{1:{name:"string.unquoted.argument.shell",patterns:[{match:"\\*",name:"variable.language.special.wildcard.shell"},{include:"#variable"},{include:"#numeric_literal"},{captures:{1:{name:"constant.language.$1.shell"}},match:"(?<!\\w)(\\b(?:true|false)\\b)(?!\\w)"}]}},match:"(?:[ \\t]*+)((?:[^ \\t\\n>&;<>\\(\\)\\$`\\\\\"'<\\|]+)(?!>))"},{include:"#normal_context"}]},arithmetic_double:{patterns:[{begin:"\\(\\(",beginCaptures:{0:{name:"punctuation.section.arithmetic.double.shell"}},end:"\\)(?:\\s*)\\)",endCaptures:{0:{name:"punctuation.section.arithmetic.double.shell"}},name:"meta.arithmetic.shell",patterns:[{include:"#math"},{include:"#string"}]}]},arithmetic_no_dollar:{patterns:[{begin:"\\(",beginCaptures:{0:{name:"punctuation.section.arithmetic.single.shell"}},end:"\\)",endCaptures:{0:{name:"punctuation.section.arithmetic.single.shell"}},name:"meta.arithmetic.shell",patterns:[{include:"#math"},{include:"#string"}]}]},array_access_inline:{captures:{1:{name:"punctuation.section.array.shell"},2:{patterns:[{include:"#special_expansion"},{include:"#string"},{include:"#variable"}]},3:{name:"punctuation.section.array.shell"}},match:"(?:(\\[)([^\\[\\]]+)(\\]))"},array_value:{begin:"(?:[ \\t]*+)(?:((?<!\\w)(?:[a-zA-Z_0-9-]+)(?!\\w))(?:(?:(\\[)((?:(?:(?:(?:\\$?)(?:(?<!\\w)(?:[a-zA-Z_0-9-]+)(?!\\w))|@)|\\*)|(-?\\d+)))(\\]))?))(?:(?:(\\=)|(\\+\\=))|(\\-\\=))(?:[ \\t]*+)(\\()",beginCaptures:{1:{name:"variable.other.assignment.shell"},2:{name:"punctuation.definition.array.access.shell"},3:{name:"variable.other.assignment.shell"},4:{name:"constant.numeric.shell constant.numeric.integer.shell"},5:{name:"punctuation.definition.array.access.shell"},6:{name:"keyword.operator.assignment.shell"},7:{name:"keyword.operator.assignment.compound.shell"},8:{name:"keyword.operator.assignment.compound.shell"},9:{name:"punctuation.definition.array.shell"}},end:"\\)",endCaptures:{0:{name:"punctuation.definition.array.shell"}},patterns:[{include:"#comment"},{captures:{1:{name:"variable.other.assignment.array.shell entity.other.attribute-name.shell"},2:{name:"keyword.operator.assignment.shell punctuation.definition.assignment.shell"}},match:"(?:((?<!\\w)(?:[a-zA-Z_0-9-]+)(?!\\w))(\\=))"},{captures:{1:{name:"punctuation.definition.bracket.named-array.shell"},2:{name:"string.unquoted.shell entity.other.attribute-name.bracket.shell"},3:{name:"punctuation.definition.bracket.named-array.shell"},4:{name:"punctuation.definition.assignment.shell"}},match:"(?:(\\[)(.+?)(\\])(\\=))"},{include:"#normal_context"},{include:"#simple_unquoted"}]},assignment_statement:{patterns:[{include:"#array_value"},{include:"#modified_assignment_statement"},{include:"#normal_assignment_statement"}]},basic_command_name:{captures:{1:{name:"storage.modifier.$1.shell"},2:{name:"entity.name.function.call.shell entity.name.command.shell",patterns:[{match:"(?<!\\w)(?:continue|return|break)(?!\\w)",name:"keyword.control.$0.shell"},{match:"(?<!\\w)(?:(?:unfunction|continue|autoload|unsetopt|bindkey|builtin|getopts|command|declare|unalias|history|unlimit|typeset|suspend|source|printf|unhash|disown|ulimit|return|which|alias|break|false|print|shift|times|umask|umask|unset|read|type|exec|eval|wait|echo|dirs|jobs|kill|hash|stat|exit|test|trap|true|let|set|pwd|cd|fg|bg|fc|:|\\.)(?!\\/))(?!\\w)(?!-)",name:"support.function.builtin.shell"},{include:"#variable"}]}},match:`(?:(?:(?!(?:!|&|\\||\\(|\\)|\\{|\\[|<|>|#|\\n|$|;|[ \\t]))(?!nocorrect |nocorrect	|nocorrect$|readonly |readonly	|readonly$|function |function	|function$|foreach |foreach	|foreach$|coproc |coproc	|coproc$|logout |logout	|logout$|export |export	|export$|select |select	|select$|repeat |repeat	|repeat$|pushd |pushd	|pushd$|until |until	|until$|while |while	|while$|local |local	|local$|case |case	|case$|done |done	|done$|elif |elif	|elif$|else |else	|else$|esac |esac	|esac$|popd |popd	|popd$|then |then	|then$|time |time	|time$|for |for	|for$|end |end	|end$|fi |fi	|fi$|do |do	|do$|in |in	|in$|if |if	|if$))(?:((?<=^|;|&|[ \\t])(?:readonly|declare|typeset|export|local)(?=[ \\t]|;|&|$))|((?!"|'|\\\\\\n?$)(?:[^!'"<> \\t\\n\\r]+?)))(?:(?= |\\t)|(?:(?=;|\\||&|\\n|\\)|\\\`|\\{|\\}|[ \\t]*#|\\])(?<!\\\\))))`,name:"meta.statement.command.name.basic.shell"},block_comment:{begin:"(?:(?:\\s*+)(\\/\\*))",beginCaptures:{1:{name:"punctuation.definition.comment.begin.shell"}},end:"\\*\\/",endCaptures:{0:{name:"punctuation.definition.comment.end.shell"}},name:"comment.block.shell"},boolean:{match:"\\b(?:true|false)\\b",name:"constant.language.$0.shell"},case_statement:{begin:"(?:(\\bcase\\b)(?:[ \\t]*+)(.+?)(?:[ \\t]*+)(\\bin\\b))",beginCaptures:{1:{name:"keyword.control.case.shell"},2:{patterns:[{include:"#initial_context"}]},3:{name:"keyword.control.in.shell"}},end:"\\besac\\b",endCaptures:{0:{name:"keyword.control.esac.shell"}},name:"meta.case.shell",patterns:[{include:"#comment"},{captures:{1:{name:"keyword.operator.pattern.case.default.shell"}},match:"(?:[ \\t]*+)(\\* *\\))"},{begin:"(?<!\\))(?!(?:[ \\t]*+)(?:esac\\b|$))",beginCaptures:{},end:"(?:(?=\\besac\\b)|(\\)))",endCaptures:{1:{name:"keyword.operator.pattern.case.shell"}},name:"meta.case.entry.pattern.shell",patterns:[{include:"#case_statement_context"}]},{begin:"(?<=\\))",beginCaptures:{},end:"(?:(;;)|(?=\\besac\\b))",endCaptures:{1:{name:"punctuation.terminator.statement.case.shell"}},name:"meta.case.entry.body.shell",patterns:[{include:"#typical_statements"},{include:"#initial_context"}]}]},case_statement_context:{patterns:[{match:"\\*",name:"variable.language.special.quantifier.star.shell keyword.operator.quantifier.star.shell punctuation.definition.arbitrary-repetition.shell punctuation.definition.regex.arbitrary-repetition.shell"},{match:"\\+",name:"variable.language.special.quantifier.plus.shell keyword.operator.quantifier.plus.shell punctuation.definition.arbitrary-repetition.shell punctuation.definition.regex.arbitrary-repetition.shell"},{match:"\\?",name:"variable.language.special.quantifier.question.shell keyword.operator.quantifier.question.shell punctuation.definition.arbitrary-repetition.shell punctuation.definition.regex.arbitrary-repetition.shell"},{match:"@",name:"variable.language.special.at.shell keyword.operator.at.shell punctuation.definition.regex.at.shell"},{match:"\\|",name:"keyword.operator.orvariable.language.special.or.shell keyword.operator.alternation.ruby.shell punctuation.definition.regex.alternation.shell punctuation.separator.regex.alternation.shell"},{match:"\\\\.",name:"constant.character.escape.shell"},{match:"(?<=\\tin| in| |\\t|;;)\\(",name:"keyword.operator.pattern.case.shell"},{begin:"(?<=\\S)(\\()",beginCaptures:{1:{name:"punctuation.definition.group.shell punctuation.definition.regex.group.shell"}},end:"\\)",endCaptures:{0:{name:"punctuation.definition.group.shell punctuation.definition.regex.group.shell"}},name:"meta.parenthese.shell",patterns:[{include:"#case_statement_context"}]},{begin:"\\[",beginCaptures:{0:{name:"punctuation.definition.character-class.shell"}},end:"\\]",endCaptures:{0:{name:"punctuation.definition.character-class.shell"}},name:"string.regexp.character-class.shell",patterns:[{match:"\\\\.",name:"constant.character.escape.shell"}]},{include:"#string"},{match:"[^) \\t\\n\\[\\?\\*\\|\\@]",name:"string.unquoted.pattern.shell string.regexp.unquoted.shell"}]},command_name_range:{begin:"\\G",beginCaptures:{},end:"(?:(?= |\\t|;|\\||&|$|\\n|\\)|\\`)|(?=<))",endCaptures:{},name:"meta.statement.command.name.shell",patterns:[{match:"(?<!\\w)(?:continue|return|break)(?!\\w)",name:"entity.name.function.call.shell entity.name.command.shell keyword.control.$0.shell"},{match:"(?<!\\w)(?:(?:unfunction|continue|autoload|unsetopt|bindkey|builtin|getopts|command|declare|unalias|history|unlimit|typeset|suspend|source|printf|unhash|disown|ulimit|return|which|alias|break|false|print|shift|times|umask|umask|unset|read|type|exec|eval|wait|echo|dirs|jobs|kill|hash|stat|exit|test|trap|true|let|set|pwd|cd|fg|bg|fc|:|\\.)(?!\\/))(?!\\w)(?!-)",name:"entity.name.function.call.shell entity.name.command.shell support.function.builtin.shell"},{include:"#variable"},{captures:{1:{name:"entity.name.function.call.shell entity.name.command.shell"}},match:`(?:(?<!\\w)(?<=\\G|'|"|\\}|\\))([^ \\n\\t\\r"'=;&\\|\`\\)\\{<>]+))`},{begin:`(?:(?:\\G|(?<! |\\t|;|\\||&|\\n|\\{|#))(?:(\\$?)((?:(")|(')))))`,beginCaptures:{1:{name:"meta.statement.command.name.quoted.shell punctuation.definition.string.shell entity.name.function.call.shell entity.name.command.shell"},2:{},3:{name:"meta.statement.command.name.quoted.shell string.quoted.double.shell punctuation.definition.string.begin.shell entity.name.function.call.shell entity.name.command.shell"},4:{name:"meta.statement.command.name.quoted.shell string.quoted.single.shell punctuation.definition.string.begin.shell entity.name.function.call.shell entity.name.command.shell"}},end:"(?<!\\G)(?<=(?:\\2))",endCaptures:{},patterns:[{include:"#continuation_of_single_quoted_command_name"},{include:"#continuation_of_double_quoted_command_name"}]},{include:"#line_continuation"},{include:"#simple_unquoted"}]},command_statement:{begin:"(?:(?:[ \\t]*+)(?:(?!(?:!|&|\\||\\(|\\)|\\{|\\[|<|>|#|\\n|$|;|[ \\t]))(?!nocorrect |nocorrect	|nocorrect$|readonly |readonly	|readonly$|function |function	|function$|foreach |foreach	|foreach$|coproc |coproc	|coproc$|logout |logout	|logout$|export |export	|export$|select |select	|select$|repeat |repeat	|repeat$|pushd |pushd	|pushd$|until |until	|until$|while |while	|while$|local |local	|local$|case |case	|case$|done |done	|done$|elif |elif	|elif$|else |else	|else$|esac |esac	|esac$|popd |popd	|popd$|then |then	|then$|time |time	|time$|for |for	|for$|end |end	|end$|fi |fi	|fi$|do |do	|do$|in |in	|in$|if |if	|if$)(?!\\\\\\n?$)))",beginCaptures:{},end:"(?=;|\\||&|\\n|\\)|\\`|\\{|\\}|[ \\t]*#|\\])(?<!\\\\)",endCaptures:{},name:"meta.statement.command.shell",patterns:[{include:"#command_name_range"},{include:"#line_continuation"},{include:"#option"},{include:"#argument"},{include:"#string"},{include:"#heredoc"}]},comment:{captures:{1:{name:"comment.line.number-sign.shell meta.shebang.shell"},2:{name:"punctuation.definition.comment.shebang.shell"},3:{name:"comment.line.number-sign.shell"},4:{name:"punctuation.definition.comment.shell"}},match:"(?:(?:^|(?:[ \\t]++))(?:((?:(#!)(?:.*)))|((?:(#)(?:.*)))))"},comments:{patterns:[{include:"#block_comment"},{include:"#line_comment"}]},"compound-command":{patterns:[{begin:"\\[",beginCaptures:{0:{name:"punctuation.definition.logical-expression.shell"}},end:"\\]",endCaptures:{0:{name:"punctuation.definition.logical-expression.shell"}},name:"meta.scope.logical-expression.shell",patterns:[{include:"#logical-expression"},{include:"#initial_context"}]},{begin:"(?<=\\s|^){(?=\\s|$)",beginCaptures:{0:{name:"punctuation.definition.group.shell"}},end:"(?<=^|;)\\s*(})",endCaptures:{1:{name:"punctuation.definition.group.shell"}},name:"meta.scope.group.shell",patterns:[{include:"#initial_context"}]}]},continuation_of_double_quoted_command_name:{begin:'(?:\\G(?<="))',beginCaptures:{},contentName:"meta.statement.command.name.continuation string.quoted.double entity.name.function.call entity.name.command",end:'"',endCaptures:{0:{name:"string.quoted.double.shell punctuation.definition.string.end.shell entity.name.function.call.shell entity.name.command.shell"}},patterns:[{match:'\\\\[\\$\\n`"\\\\]',name:"constant.character.escape.shell"},{include:"#variable"},{include:"#interpolation"}]},continuation_of_single_quoted_command_name:{begin:"(?:\\G(?<='))",beginCaptures:{},contentName:"meta.statement.command.name.continuation string.quoted.single entity.name.function.call entity.name.command",end:"'",endCaptures:{0:{name:"string.quoted.single.shell punctuation.definition.string.end.shell entity.name.function.call.shell entity.name.command.shell"}}},custom_command_names:{patterns:[]},custom_commands:{patterns:[]},double_quote_context:{patterns:[{match:'\\\\[\\$`"\\\\\\n]',name:"constant.character.escape.shell"},{include:"#variable"},{include:"#interpolation"}]},double_quote_escape_char:{match:'\\\\[\\$`"\\\\\\n]',name:"constant.character.escape.shell"},floating_keyword:{patterns:[{match:"(?<=^|;|&| |\\t)(?:then|elif|else|done|end|do|if|fi)(?= |\\t|;|&|$)",name:"keyword.control.$0.shell"}]},for_statement:{patterns:[{begin:"(?:(\\bfor\\b)(?:(?:[ \\t]*+)((?<!\\w)(?:[a-zA-Z_0-9-]+)(?!\\w))(?:[ \\t]*+)(\\bin\\b)))",beginCaptures:{1:{name:"keyword.control.for.shell"},2:{name:"variable.other.for.shell"},3:{name:"keyword.control.in.shell"}},end:"(?=;|\\||&|\\n|\\)|\\`|\\{|\\}|[ \\t]*#|\\])(?<!\\\\)",endCaptures:{},name:"meta.for.in.shell",patterns:[{include:"#string"},{include:"#simple_unquoted"},{include:"#normal_context"}]},{begin:"(\\bfor\\b)",beginCaptures:{1:{name:"keyword.control.for.shell"}},end:"(?=;|\\||&|\\n|\\)|\\`|\\{|\\}|[ \\t]*#|\\])(?<!\\\\)",endCaptures:{},name:"meta.for.shell",patterns:[{include:"#arithmetic_double"},{include:"#normal_context"}]}]},function_definition:{applyEndPatternLast:1,begin:`(?:[ \\t]*+)(?:(?:(\\bfunction\\b)(?:[ \\t]*+)([^ \\t\\n\\r\\(\\)="']+)(?:(?:(\\()(?:[ \\t]*+)(\\)))?))|(?:([^ \\t\\n\\r\\(\\)="']+)(?:[ \\t]*+)(\\()(?:[ \\t]*+)(\\))))`,beginCaptures:{1:{name:"storage.type.function.shell"},2:{name:"entity.name.function.shell"},3:{name:"punctuation.definition.arguments.shell"},4:{name:"punctuation.definition.arguments.shell"},5:{name:"entity.name.function.shell"},6:{name:"punctuation.definition.arguments.shell"},7:{name:"punctuation.definition.arguments.shell"}},end:"(?<=\\}|\\))",endCaptures:{},name:"meta.function.shell",patterns:[{match:"(?:\\G(?:\\t| |\\n))"},{begin:"\\{",beginCaptures:{0:{name:"punctuation.definition.group.shell punctuation.section.function.definition.shell"}},end:"\\}",endCaptures:{0:{name:"punctuation.definition.group.shell punctuation.section.function.definition.shell"}},name:"meta.function.body.shell",patterns:[{include:"#initial_context"}]},{begin:"\\(",beginCaptures:{0:{name:"punctuation.definition.group.shell punctuation.section.function.definition.shell"}},end:"\\)",endCaptures:{0:{name:"punctuation.definition.group.shell punctuation.section.function.definition.shell"}},name:"meta.function.body.shell",patterns:[{include:"#initial_context"}]},{include:"#initial_context"}]},heredoc:{patterns:[{begin:`(?:((?<!<)(?:<<-))(?:[ \\t]*+)("|')(?:[ \\t]*+)([^"']+?)(?=\\s|;|&|<|"|')((?:\\2))(.*))`,beginCaptures:{1:{name:"keyword.operator.heredoc.shell"},2:{name:"punctuation.definition.string.heredoc.quote.shell"},3:{name:"punctuation.definition.string.heredoc.delimiter.shell"},4:{name:"punctuation.definition.string.heredoc.quote.shell"},5:{patterns:[{include:"#redirect_fix"},{include:"#typical_statements"}]}},contentName:"string.quoted.heredoc.indent.$3",end:"(?:(?:^\\t*)(?:\\3)(?=\\s|;|&|$))",endCaptures:{0:{name:"punctuation.definition.string.heredoc.$0.shell"}},patterns:[]},{begin:`(?:((?<!<)(?:<<)(?!<))(?:[ \\t]*+)("|')(?:[ \\t]*+)([^"']+?)(?=\\s|;|&|<|"|')((?:\\2))(.*))`,beginCaptures:{1:{name:"keyword.operator.heredoc.shell"},2:{name:"punctuation.definition.string.heredoc.quote.shell"},3:{name:"punctuation.definition.string.heredoc.delimiter.shell"},4:{name:"punctuation.definition.string.heredoc.quote.shell"},5:{patterns:[{include:"#redirect_fix"},{include:"#typical_statements"}]}},contentName:"string.quoted.heredoc.no-indent.$3",end:"(?:^(?:\\3)(?=\\s|;|&|$))",endCaptures:{0:{name:"punctuation.definition.string.heredoc.delimiter.shell"}},patterns:[]},{begin:`(?:((?<!<)(?:<<-))(?:[ \\t]*+)([^"' \\t]+)(?=\\s|;|&|<|"|')(.*))`,beginCaptures:{1:{name:"keyword.operator.heredoc.shell"},2:{name:"punctuation.definition.string.heredoc.delimiter.shell"},3:{patterns:[{include:"#redirect_fix"},{include:"#typical_statements"}]}},contentName:"string.unquoted.heredoc.indent.$2",end:"(?:(?:^\\t*)(?:\\2)(?=\\s|;|&|$))",endCaptures:{0:{name:"punctuation.definition.string.heredoc.delimiter.shell"}},patterns:[{include:"#double_quote_escape_char"},{include:"#variable"},{include:"#interpolation"}]},{begin:`(?:((?<!<)(?:<<)(?!<))(?:[ \\t]*+)([^"' \\t]+)(?=\\s|;|&|<|"|')(.*))`,beginCaptures:{1:{name:"keyword.operator.heredoc.shell"},2:{name:"punctuation.definition.string.heredoc.delimiter.shell"},3:{patterns:[{include:"#redirect_fix"},{include:"#typical_statements"}]}},contentName:"string.unquoted.heredoc.no-indent.$2",end:"(?:^(?:\\2)(?=\\s|;|&|$))",endCaptures:{0:{name:"punctuation.definition.string.heredoc.delimiter.shell"}},patterns:[{include:"#double_quote_escape_char"},{include:"#variable"},{include:"#interpolation"}]}]},herestring:{patterns:[{begin:"(<<<)\\s*(('))",beginCaptures:{1:{name:"keyword.operator.herestring.shell"},2:{name:"string.quoted.single.shell"},3:{name:"punctuation.definition.string.begin.shell"}},contentName:"string.quoted.single.shell",end:"(')",endCaptures:{0:{name:"string.quoted.single.shell"},1:{name:"punctuation.definition.string.end.shell"}},name:"meta.herestring.shell"},{begin:'(<<<)\\s*(("))',beginCaptures:{1:{name:"keyword.operator.herestring.shell"},2:{name:"string.quoted.double.shell"},3:{name:"punctuation.definition.string.begin.shell"}},contentName:"string.quoted.double.shell",end:'(")',endCaptures:{0:{name:"string.quoted.double.shell"},1:{name:"punctuation.definition.string.end.shell"}},name:"meta.herestring.shell",patterns:[{include:"#double_quote_context"}]},{captures:{1:{name:"keyword.operator.herestring.shell"},2:{name:"string.unquoted.herestring.shell",patterns:[{include:"#initial_context"}]}},match:"(<<<)\\s*(([^\\s)\\\\]|\\\\.)+)",name:"meta.herestring.shell"}]},initial_context:{patterns:[{include:"#comment"},{include:"#pipeline"},{include:"#normal_statement_seperator"},{include:"#logical_expression_double"},{include:"#logical_expression_single"},{include:"#assignment_statement"},{include:"#case_statement"},{include:"#for_statement"},{include:"#loop"},{include:"#function_definition"},{include:"#line_continuation"},{include:"#arithmetic_double"},{include:"#misc_ranges"},{include:"#variable"},{include:"#interpolation"},{include:"#heredoc"},{include:"#herestring"},{include:"#redirection"},{include:"#pathname"},{include:"#floating_keyword"},{include:"#alias_statement"},{include:"#normal_statement"},{include:"#string"},{include:"#support"}]},inline_comment:{captures:{1:{name:"comment.block.shell punctuation.definition.comment.begin.shell"},2:{name:"comment.block.shell"},3:{patterns:[{match:"\\*\\/",name:"comment.block.shell punctuation.definition.comment.end.shell"},{match:"\\*",name:"comment.block.shell"}]}},match:"(\\/\\*)((?:(?:[^\\*]|(?:(?:\\*++)[^\\/]))*+)((?:(?:\\*++)\\/)))"},interpolation:{patterns:[{include:"#arithmetic_dollar"},{include:"#subshell_dollar"},{begin:"`",beginCaptures:{0:{name:"punctuation.definition.evaluation.backticks.shell"}},end:"`",endCaptures:{0:{name:"punctuation.definition.evaluation.backticks.shell"}},name:"string.interpolated.backtick.shell",patterns:[{match:"\\\\[`\\\\$]",name:"constant.character.escape.shell"},{begin:"(?<=\\W)(?=#)(?!#{)",beginCaptures:{1:{name:"punctuation.whitespace.comment.leading.shell"}},end:"(?!\\G)",patterns:[{begin:"#",beginCaptures:{0:{name:"punctuation.definition.comment.shell"}},end:"(?=`)",name:"comment.line.number-sign.shell"}]},{include:"#initial_context"}]}]},keyword:{patterns:[{match:"(?<=^|;|&|\\s)(then|else|elif|fi|for|in|do|done|select|continue|esac|while|until|return)(?=\\s|;|&|$)",name:"keyword.control.shell"},{match:"(?<=^|;|&|\\s)(?:export|declare|typeset|local|readonly)(?=\\s|;|&|$)",name:"storage.modifier.shell"}]},line_comment:{begin:"(?:\\s*+)(\\/\\/)",beginCaptures:{1:{name:"punctuation.definition.comment.shell"}},end:"(?<=\\n)(?<!\\\\\\n)",endCaptures:{},name:"comment.line.double-slash.shell",patterns:[{include:"#line_continuation_character"}]},line_continuation:{match:"\\\\(?=\\n)",name:"constant.character.escape.line-continuation.shell"},"logical-expression":{patterns:[{include:"#arithmetic_no_dollar"},{comment:"do we want a special rule for ( expr )?",match:"=[=~]?|!=?|<|>|&&|\\|\\|",name:"keyword.operator.logical.shell"},{match:"(?<!\\S)-(nt|ot|ef|eq|ne|l[te]|g[te]|[a-hknoprstuwxzOGLSN])\\b",name:"keyword.operator.logical.shell"}]},logical_expression_context:{patterns:[{include:"#regex_comparison"},{include:"#arithmetic_no_dollar"},{include:"#logical-expression"},{include:"#logical_expression_single"},{include:"#logical_expression_double"},{include:"#comment"},{include:"#boolean"},{include:"#redirect_number"},{include:"#numeric_literal"},{include:"#pipeline"},{include:"#normal_statement_seperator"},{include:"#string"},{include:"#variable"},{include:"#interpolation"},{include:"#heredoc"},{include:"#herestring"},{include:"#pathname"},{include:"#floating_keyword"},{include:"#support"}]},logical_expression_double:{begin:"\\[\\[",beginCaptures:{0:{name:"punctuation.definition.logical-expression.shell"}},end:"\\]\\]",endCaptures:{0:{name:"punctuation.definition.logical-expression.shell"}},name:"meta.scope.logical-expression.shell",patterns:[{include:"#logical_expression_context"}]},logical_expression_single:{begin:"\\[",beginCaptures:{0:{name:"punctuation.definition.logical-expression.shell"}},end:"\\]",endCaptures:{0:{name:"punctuation.definition.logical-expression.shell"}},name:"meta.scope.logical-expression.shell",patterns:[{include:"#logical_expression_context"}]},loop:{patterns:[{begin:"(?<=^|;|&|\\s)(for)\\s+(.+?)\\s+(in)(?=\\s|;|&|$)",beginCaptures:{1:{name:"keyword.control.shell"},2:{name:"variable.other.loop.shell",patterns:[{include:"#string"}]},3:{name:"keyword.control.shell"}},end:"(?<=^|;|&|\\s)done(?=\\s|;|&|$|\\))",endCaptures:{0:{name:"keyword.control.shell"}},name:"meta.scope.for-in-loop.shell",patterns:[{include:"#initial_context"}]},{begin:"(?<=^|;|&|\\s)(while|until)(?=\\s|;|&|$)",beginCaptures:{1:{name:"keyword.control.shell"}},end:"(?<=^|;|&|\\s)done(?=\\s|;|&|$|\\))",endCaptures:{0:{name:"keyword.control.shell"}},name:"meta.scope.while-loop.shell",patterns:[{include:"#initial_context"}]},{begin:"(?<=^|;|&|\\s)(select)\\s+((?:[^\\s\\\\]|\\\\.)+)(?=\\s|;|&|$)",beginCaptures:{1:{name:"keyword.control.shell"},2:{name:"variable.other.loop.shell"}},end:"(?<=^|;|&|\\s)(done)(?=\\s|;|&|$|\\))",endCaptures:{1:{name:"keyword.control.shell"}},name:"meta.scope.select-block.shell",patterns:[{include:"#initial_context"}]},{begin:"(?<=^|;|&|\\s)if(?=\\s|;|&|$)",beginCaptures:{0:{name:"keyword.control.if.shell"}},end:"(?<=^|;|&|\\s)fi(?=\\s|;|&|$)",endCaptures:{0:{name:"keyword.control.fi.shell"}},name:"meta.scope.if-block.shell",patterns:[{include:"#initial_context"}]}]},math:{patterns:[{include:"#variable"},{match:"\\+{1,2}|-{1,2}|!|~|\\*{1,2}|/|%|<[<=]?|>[>=]?|==|!=|^|\\|{1,2}|&{1,2}|\\?|\\:|,|=|[*/%+\\-&^|]=|<<=|>>=",name:"keyword.operator.arithmetic.shell"},{match:"0[xX][0-9A-Fa-f]+",name:"constant.numeric.hex.shell"},{match:";",name:"punctuation.separator.semicolon.range"},{match:"0\\d+",name:"constant.numeric.octal.shell"},{match:"\\d{1,2}#[0-9a-zA-Z@_]+",name:"constant.numeric.other.shell"},{match:"\\d+",name:"constant.numeric.integer.shell"},{match:"(?<!\\w)(?:[a-zA-Z_0-9]+)(?!\\w)",name:"variable.other.normal.shell"}]},math_operators:{patterns:[{match:"\\+{1,2}|-{1,2}|!|~|\\*{1,2}|/|%|<[<=]?|>[>=]?|==|!=|^|\\|{1,2}|&{1,2}|\\?|\\:|,|=|[*/%+\\-&^|]=|<<=|>>=",name:"keyword.operator.arithmetic.shell"},{match:"0[xX][0-9A-Fa-f]+",name:"constant.numeric.hex.shell"},{match:"0\\d+",name:"constant.numeric.octal.shell"},{match:"\\d{1,2}#[0-9a-zA-Z@_]+",name:"constant.numeric.other.shell"},{match:"\\d+",name:"constant.numeric.integer.shell"}]},misc_ranges:{patterns:[{include:"#logical_expression_single"},{include:"#logical_expression_double"},{include:"#subshell_dollar"},{begin:"(?<![^ \\t])({)",beginCaptures:{1:{name:"punctuation.definition.group.shell"}},end:"}",endCaptures:{0:{name:"punctuation.definition.group.shell"}},name:"meta.scope.group.shell",patterns:[{include:"#initial_context"}]}]},modified_assignment_statement:{begin:"(?<=^|;|&|[ \\t])(?:readonly|declare|typeset|export|local)(?=[ \\t]|;|&|$)",beginCaptures:{0:{name:"storage.modifier.$0.shell"}},end:"(?=;|\\||&|\\n|\\)|\\`|\\{|\\}|[ \\t]*#|\\])(?<!\\\\)",endCaptures:{},name:"meta.statement.shell meta.expression.assignment.modified.shell",patterns:[{match:"(?<!\\w)-\\w+\\b",name:"string.unquoted.argument.shell constant.other.option.shell"},{include:"#array_value"},{captures:{1:{name:"variable.other.assignment.shell"},2:{name:"punctuation.definition.array.access.shell"},3:{name:"variable.other.assignment.shell"},4:{name:"constant.numeric.shell constant.numeric.integer.shell"},5:{name:"punctuation.definition.array.access.shell"},6:{name:"keyword.operator.assignment.shell"},7:{name:"keyword.operator.assignment.compound.shell"},8:{name:"keyword.operator.assignment.compound.shell"},9:{name:"constant.numeric.shell constant.numeric.hex.shell"},10:{name:"constant.numeric.shell constant.numeric.octal.shell"},11:{name:"constant.numeric.shell constant.numeric.other.shell"},12:{name:"constant.numeric.shell constant.numeric.decimal.shell"},13:{name:"constant.numeric.shell constant.numeric.version.shell"},14:{name:"constant.numeric.shell constant.numeric.integer.shell"}},match:"(?:((?<!\\w)(?:[a-zA-Z_0-9-]+)(?!\\w))(?:(?:(\\[)((?:(?:(?:(?:\\$?)(?:(?<!\\w)(?:[a-zA-Z_0-9-]+)(?!\\w))|@)|\\*)|(-?\\d+)))(\\]))?)(?:(?:(?:(\\=)|(\\+\\=))|(\\-\\=))?)(?:(?:(?<==| |\\t|^|\\{|\\(|\\[)(?:(?:(?:(?:(?:(0[xX][0-9A-Fa-f]+)|(0\\d+))|(\\d{1,2}#[0-9a-zA-Z@_]+))|(-?\\d+(?:\\.\\d+)))|(-?\\d+(?:\\.\\d+)+))|(-?\\d+))(?= |\\t|$|\\}|\\)|;))?))"},{include:"#normal_context"}]},modifiers:{match:"(?<=^|;|&|[ \\t])(?:readonly|declare|typeset|export|local)(?=[ \\t]|;|&|$)",name:"storage.modifier.$0.shell"},normal_assignment_statement:{begin:"(?:[ \\t]*+)(?:((?<!\\w)(?:[a-zA-Z_0-9-]+)(?!\\w))(?:(?:(\\[)((?:(?:(?:(?:\\$?)(?:(?<!\\w)(?:[a-zA-Z_0-9-]+)(?!\\w))|@)|\\*)|(-?\\d+)))(\\]))?))(?:(?:(\\=)|(\\+\\=))|(\\-\\=))",beginCaptures:{1:{name:"variable.other.assignment.shell"},2:{name:"punctuation.definition.array.access.shell"},3:{name:"variable.other.assignment.shell"},4:{name:"constant.numeric.shell constant.numeric.integer.shell"},5:{name:"punctuation.definition.array.access.shell"},6:{name:"keyword.operator.assignment.shell"},7:{name:"keyword.operator.assignment.compound.shell"},8:{name:"keyword.operator.assignment.compound.shell"}},end:"(?=;|\\||&|\\n|\\)|\\`|\\{|\\}|[ \\t]*#|\\])(?<!\\\\)",endCaptures:{},name:"meta.expression.assignment.shell",patterns:[{include:"#comment"},{include:"#string"},{include:"#normal_assignment_statement"},{begin:"(?<= |\\t)(?! |\\t|\\w+=)",beginCaptures:{},end:"(?=;|\\||&|\\n|\\)|\\`|\\{|\\}|[ \\t]*#|\\])(?<!\\\\)",endCaptures:{},name:"meta.statement.command.env.shell",patterns:[{include:"#command_name_range"},{include:"#line_continuation"},{include:"#option"},{include:"#argument"},{include:"#string"}]},{include:"#simple_unquoted"},{include:"#normal_context"}]},normal_context:{patterns:[{include:"#comment"},{include:"#pipeline"},{include:"#normal_statement_seperator"},{include:"#misc_ranges"},{include:"#boolean"},{include:"#redirect_number"},{include:"#numeric_literal"},{include:"#string"},{include:"#variable"},{include:"#interpolation"},{include:"#heredoc"},{include:"#herestring"},{include:"#redirection"},{include:"#pathname"},{include:"#floating_keyword"},{include:"#support"},{include:"#parenthese"}]},normal_statement:{begin:"(?:(?!^[ \\t]*+$)(?:(?<=^until | until |\\tuntil |^while | while |\\twhile |^elif | elif |\\telif |^else | else |\\telse |^then | then |\\tthen |^do | do |\\tdo |^if | if |\\tif )|(?<=(?:^|;|\\||&|!|\\(|\\{|\\`)))(?:[ \\t]*+)(?!nocorrect\\W|nocorrect\\$|function\\W|function\\$|foreach\\W|foreach\\$|repeat\\W|repeat\\$|logout\\W|logout\\$|coproc\\W|coproc\\$|select\\W|select\\$|while\\W|while\\$|pushd\\W|pushd\\$|until\\W|until\\$|case\\W|case\\$|done\\W|done\\$|elif\\W|elif\\$|else\\W|else\\$|esac\\W|esac\\$|popd\\W|popd\\$|then\\W|then\\$|time\\W|time\\$|for\\W|for\\$|end\\W|end\\$|fi\\W|fi\\$|do\\W|do\\$|in\\W|in\\$|if\\W|if\\$))",beginCaptures:{},end:"(?=;|\\||&|\\n|\\)|\\`|\\{|\\}|[ \\t]*#|\\])(?<!\\\\)",endCaptures:{},name:"meta.statement.shell",patterns:[{include:"#typical_statements"}]},normal_statement_seperator:{captures:{1:{name:"punctuation.terminator.statement.semicolon.shell"},2:{name:"punctuation.separator.statement.and.shell"},3:{name:"punctuation.separator.statement.or.shell"},4:{name:"punctuation.separator.statement.background.shell"}},match:"(?:(?:(?:(;)|(&&))|(\\|\\|))|(&))"},numeric_literal:{captures:{1:{name:"constant.numeric.shell constant.numeric.hex.shell"},2:{name:"constant.numeric.shell constant.numeric.octal.shell"},3:{name:"constant.numeric.shell constant.numeric.other.shell"},4:{name:"constant.numeric.shell constant.numeric.decimal.shell"},5:{name:"constant.numeric.shell constant.numeric.version.shell"},6:{name:"constant.numeric.shell constant.numeric.integer.shell"}},match:"(?<==| |\\t|^|\\{|\\(|\\[)(?:(?:(?:(?:(?:(0[xX][0-9A-Fa-f]+)|(0\\d+))|(\\d{1,2}#[0-9a-zA-Z@_]+))|(-?\\d+(?:\\.\\d+)))|(-?\\d+(?:\\.\\d+)+))|(-?\\d+))(?= |\\t|$|\\}|\\)|;)"},option:{begin:"(?:(?:[ \\t]++)(-)((?!(?:!|&|\\||\\(|\\)|\\{|\\[|<|>|#|\\n|$|;|[ \\t]))))",beginCaptures:{1:{name:"string.unquoted.argument.shell constant.other.option.dash.shell"},2:{name:"string.unquoted.argument.shell constant.other.option.shell"}},contentName:"string.unquoted.argument constant.other.option",end:"(?:(?=[ \\t])|(?:(?=;|\\||&|\\n|\\)|\\`|\\{|\\}|[ \\t]*#|\\])(?<!\\\\)))",endCaptures:{},patterns:[{include:"#option_context"}]},option_context:{patterns:[{include:"#misc_ranges"},{include:"#string"},{include:"#variable"},{include:"#interpolation"},{include:"#heredoc"},{include:"#herestring"},{include:"#redirection"},{include:"#pathname"},{include:"#floating_keyword"},{include:"#support"}]},parenthese:{patterns:[{begin:"\\(",beginCaptures:{0:{name:"punctuation.section.parenthese.shell"}},end:"\\)",endCaptures:{0:{name:"punctuation.section.parenthese.shell"}},name:"meta.parenthese.group.shell",patterns:[{include:"#initial_context"}]}]},pathname:{patterns:[{match:"(?<=\\s|:|=|^)~",name:"keyword.operator.tilde.shell"},{match:"\\*|\\?",name:"keyword.operator.glob.shell"},{begin:"([?*+@!])(\\()",beginCaptures:{1:{name:"keyword.operator.extglob.shell"},2:{name:"punctuation.definition.extglob.shell"}},end:"\\)",endCaptures:{0:{name:"punctuation.definition.extglob.shell"}},name:"meta.structure.extglob.shell",patterns:[{include:"#initial_context"}]}]},pipeline:{patterns:[{match:"(?<=^|;|&|\\s)(time)(?=\\s|;|&|$)",name:"keyword.other.shell"},{match:"[|!]",name:"keyword.operator.pipe.shell"}]},redirect_fix:{captures:{1:{name:"keyword.operator.redirect.shell"},2:{name:"string.unquoted.argument.shell"}},match:"(?:(>>?)(?:[ \\t]*+)([^ \\t\\n>&;<>\\(\\)\\$`\\\\\"'<\\|]+))"},redirect_number:{captures:{1:{name:"keyword.operator.redirect.stdout.shell"},2:{name:"keyword.operator.redirect.stderr.shell"},3:{name:"keyword.operator.redirect.$3.shell"}},match:"(?<=[ \\t])(?:(?:(1)|(2)|(\\d+))(?=>))"},redirection:{patterns:[{begin:"[><]\\(",beginCaptures:{0:{name:"punctuation.definition.string.begin.shell"}},end:"\\)",endCaptures:{0:{name:"punctuation.definition.string.end.shell"}},name:"string.interpolated.process-substitution.shell",patterns:[{include:"#initial_context"}]},{match:"(?<![<>])(&>|\\d*>&\\d*|\\d*(>>|>|<)|\\d*<&|\\d*<>)(?![<>])",name:"keyword.operator.redirect.shell"}]},regex_comparison:{match:"\\=~",name:"keyword.operator.logical.regex.shell"},regexp:{patterns:[{match:"(?:.+)"}]},simple_options:{captures:{0:{patterns:[{captures:{1:{name:"string.unquoted.argument.shell constant.other.option.dash.shell"},2:{name:"string.unquoted.argument.shell constant.other.option.shell"}},match:"(?:[ \\t]++)(\\-)(\\w+)"}]}},match:"(?:(?:[ \\t]++)\\-(?:\\w+))*"},simple_unquoted:{match:"[^ \\t\\n>&;<>\\(\\)\\$`\\\\\"'<\\|]",name:"string.unquoted.shell"},special_expansion:{match:"!|:[-=?]?|\\*|@|##|#|%%|%|\\/",name:"keyword.operator.expansion.shell"},start_of_command:{match:"(?:(?:[ \\t]*+)(?:(?!(?:!|&|\\||\\(|\\)|\\{|\\[|<|>|#|\\n|$|;|[ \\t]))(?!nocorrect |nocorrect	|nocorrect$|readonly |readonly	|readonly$|function |function	|function$|foreach |foreach	|foreach$|coproc |coproc	|coproc$|logout |logout	|logout$|export |export	|export$|select |select	|select$|repeat |repeat	|repeat$|pushd |pushd	|pushd$|until |until	|until$|while |while	|while$|local |local	|local$|case |case	|case$|done |done	|done$|elif |elif	|elif$|else |else	|else$|esac |esac	|esac$|popd |popd	|popd$|then |then	|then$|time |time	|time$|for |for	|for$|end |end	|end$|fi |fi	|fi$|do |do	|do$|in |in	|in$|if |if	|if$)(?!\\\\\\n?$)))"},string:{patterns:[{match:"\\\\.",name:"constant.character.escape.shell"},{begin:"'",beginCaptures:{0:{name:"punctuation.definition.string.begin.shell"}},end:"'",endCaptures:{0:{name:"punctuation.definition.string.end.shell"}},name:"string.quoted.single.shell"},{begin:'\\$?"',beginCaptures:{0:{name:"punctuation.definition.string.begin.shell"}},end:'"',endCaptures:{0:{name:"punctuation.definition.string.end.shell"}},name:"string.quoted.double.shell",patterns:[{match:'\\\\[\\$\\n`"\\\\]',name:"constant.character.escape.shell"},{include:"#variable"},{include:"#interpolation"}]},{begin:"\\$'",beginCaptures:{0:{name:"punctuation.definition.string.begin.shell"}},end:"'",endCaptures:{0:{name:"punctuation.definition.string.end.shell"}},name:"string.quoted.single.dollar.shell",patterns:[{match:"\\\\(?:a|b|e|f|n|r|t|v|\\\\|')",name:"constant.character.escape.ansi-c.shell"},{match:'\\\\[0-9]{3}"',name:"constant.character.escape.octal.shell"},{match:'\\\\x[0-9a-fA-F]{2}"',name:"constant.character.escape.hex.shell"},{match:'\\\\c."',name:"constant.character.escape.control-char.shell"}]}]},subshell_dollar:{patterns:[{begin:"(?:\\$\\()",beginCaptures:{0:{name:"punctuation.definition.subshell.single.shell"}},end:"\\)",endCaptures:{0:{name:"punctuation.definition.subshell.single.shell"}},name:"meta.scope.subshell",patterns:[{include:"#parenthese"},{include:"#initial_context"}]}]},support:{patterns:[{match:"(?<=^|;|&|\\s)(?::|\\.)(?=\\s|;|&|$)",name:"support.function.builtin.shell"}]},typical_statements:{patterns:[{include:"#assignment_statement"},{include:"#case_statement"},{include:"#for_statement"},{include:"#while_statement"},{include:"#function_definition"},{include:"#command_statement"},{include:"#line_continuation"},{include:"#arithmetic_double"},{include:"#normal_context"}]},variable:{patterns:[{captures:{1:{name:"punctuation.definition.variable.shell variable.parameter.positional.all.shell"},2:{name:"variable.parameter.positional.all.shell"}},match:"(?:(\\$)(\\@(?!\\w)))"},{captures:{1:{name:"punctuation.definition.variable.shell variable.parameter.positional.shell"},2:{name:"variable.parameter.positional.shell"}},match:"(?:(\\$)([0-9](?!\\w)))"},{captures:{1:{name:"punctuation.definition.variable.shell variable.language.special.shell"},2:{name:"variable.language.special.shell"}},match:"(?:(\\$)([-*#?$!0_](?!\\w)))"},{begin:"(?:(\\$)(\\{)(?:[ \\t]*+)(?=\\d))",beginCaptures:{1:{name:"punctuation.definition.variable.shell variable.parameter.positional.shell"},2:{name:"punctuation.section.bracket.curly.variable.begin.shell punctuation.definition.variable.shell variable.parameter.positional.shell"}},contentName:"meta.parameter-expansion",end:"\\}",endCaptures:{0:{name:"punctuation.section.bracket.curly.variable.end.shell punctuation.definition.variable.shell variable.parameter.positional.shell"}},patterns:[{include:"#special_expansion"},{include:"#array_access_inline"},{match:"[0-9]+",name:"variable.parameter.positional.shell"},{match:"(?<!\\w)(?:[a-zA-Z_0-9-]+)(?!\\w)",name:"variable.other.normal.shell"},{include:"#variable"},{include:"#string"}]},{begin:"(?:(\\$)(\\{))",beginCaptures:{1:{name:"punctuation.definition.variable.shell"},2:{name:"punctuation.section.bracket.curly.variable.begin.shell punctuation.definition.variable.shell"}},contentName:"meta.parameter-expansion",end:"\\}",endCaptures:{0:{name:"punctuation.section.bracket.curly.variable.end.shell punctuation.definition.variable.shell"}},patterns:[{include:"#special_expansion"},{include:"#array_access_inline"},{match:"(?<!\\w)(?:[a-zA-Z_0-9-]+)(?!\\w)",name:"variable.other.normal.shell"},{include:"#variable"},{include:"#string"}]},{captures:{1:{name:"punctuation.definition.variable.shell variable.other.normal.shell"},2:{name:"variable.other.normal.shell"}},match:"(?:(\\$)((?:\\w+)(?!\\w)))"}]},while_statement:{patterns:[{begin:"(\\bwhile\\b)",beginCaptures:{1:{name:"keyword.control.while.shell"}},end:"(?=;|\\||&|\\n|\\)|\\`|\\{|\\}|[ \\t]*#|\\])(?<!\\\\)",endCaptures:{},name:"meta.while.shell",patterns:[{include:"#line_continuation"},{include:"#math_operators"},{include:"#option"},{include:"#simple_unquoted"},{include:"#normal_context"},{include:"#string"}]}]}},scopeName:"source.shell",aliases:["bash","sh","shell","zsh"]}),n=[e];export{n as a};
