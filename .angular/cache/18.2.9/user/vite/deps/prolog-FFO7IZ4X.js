import "./chunk-WDMUDEB6.js";

// node_modules/shiki/dist/langs/prolog.mjs
var lang = Object.freeze({
  "displayName": "Prolog",
  "fileTypes": ["pl", "pro"],
  "name": "prolog",
  "patterns": [{
    "include": "#comments"
  }, {
    "begin": "(?<=:-)\\s*",
    "end": "(\\.)",
    "endCaptures": {
      "1": {
        "name": "keyword.control.clause.bodyend.prolog"
      }
    },
    "name": "meta.clause.body.prolog",
    "patterns": [{
      "include": "#comments"
    }, {
      "include": "#builtin"
    }, {
      "include": "#controlandkeywords"
    }, {
      "include": "#atom"
    }, {
      "include": "#variable"
    }, {
      "include": "#constants"
    }, {
      "match": ".",
      "name": "meta.clause.body.prolog"
    }]
  }, {
    "begin": "^\\s*([a-z][a-zA-Z0-9_]*)(\\(?)(?=.*:-.*)",
    "beginCaptures": {
      "1": {
        "name": "entity.name.function.clause.prolog"
      },
      "2": {
        "name": "punctuation.definition.parameters.begin"
      }
    },
    "end": "((\\)?))\\s*(:-)",
    "endCaptures": {
      "1": {
        "name": "punctuation.definition.parameters.end"
      },
      "3": {
        "name": "keyword.control.clause.bodybegin.prolog"
      }
    },
    "name": "meta.clause.head.prolog",
    "patterns": [{
      "include": "#atom"
    }, {
      "include": "#variable"
    }, {
      "include": "#constants"
    }]
  }, {
    "begin": "^\\s*([a-z][a-zA-Z0-9_]*)(\\(?)(?=.*-->.*)",
    "beginCaptures": {
      "1": {
        "name": "entity.name.function.dcg.prolog"
      },
      "2": {
        "name": "punctuation.definition.parameters.begin"
      }
    },
    "end": "((\\)?))\\s*(-->)",
    "endCaptures": {
      "1": {
        "name": "punctuation.definition.parameters.end"
      },
      "3": {
        "name": "keyword.control.dcg.bodybegin.prolog"
      }
    },
    "name": "meta.dcg.head.prolog",
    "patterns": [{
      "include": "#atom"
    }, {
      "include": "#variable"
    }, {
      "include": "#constants"
    }]
  }, {
    "begin": "(?<=-->)\\s*",
    "end": "(\\.)",
    "endCaptures": {
      "1": {
        "name": "keyword.control.dcg.bodyend.prolog"
      }
    },
    "name": "meta.dcg.body.prolog",
    "patterns": [{
      "include": "#comments"
    }, {
      "include": "#controlandkeywords"
    }, {
      "include": "#atom"
    }, {
      "include": "#variable"
    }, {
      "include": "#constants"
    }, {
      "match": ".",
      "name": "meta.dcg.body.prolog"
    }]
  }, {
    "begin": "^\\s*([a-zA-Z][a-zA-Z0-9_]*)(\\(?)(?!.*(:-|-->).*)",
    "beginCaptures": {
      "1": {
        "name": "entity.name.function.fact.prolog"
      },
      "2": {
        "name": "punctuation.definition.parameters.begin"
      }
    },
    "end": "((\\)?))\\s*(\\.)(?!\\d+)",
    "endCaptures": {
      "1": {
        "name": "punctuation.definition.parameters.end"
      },
      "3": {
        "name": "keyword.control.fact.end.prolog"
      }
    },
    "name": "meta.fact.prolog",
    "patterns": [{
      "include": "#comments"
    }, {
      "include": "#atom"
    }, {
      "include": "#variable"
    }, {
      "include": "#constants"
    }]
  }],
  "repository": {
    "atom": {
      "patterns": [{
        "match": "(?<![a-zA-Z0-9_])[a-z][a-zA-Z0-9_]*(?!\\s*\\(|[a-zA-Z0-9_])",
        "name": "constant.other.atom.simple.prolog"
      }, {
        "match": "'.*?'",
        "name": "constant.other.atom.quoted.prolog"
      }, {
        "match": "\\[\\]",
        "name": "constant.other.atom.emptylist.prolog"
      }]
    },
    "builtin": {
      "patterns": [{
        "match": "\\b(op|nl|fail|dynamic|discontiguous|initialization|meta_predicate|module_transparent|multifile|public|thread_local|thread_initialization|volatile)\\b",
        "name": "keyword.other"
      }, {
        "match": "\\b(abolish|abort|abs|absolute_file_name|access_file|acos|acosh|acyclic_term|add_import_module|append|apropos|arg|asin|asinh|assert|asserta|assertz|at_end_of_stream|at_halt|atan|atanh|atom|atom_chars|atom_codes|atom_concat|atom_length|atom_number|atom_prefix|atom_string|atom_to_stem_list|atom_to_term|atomic|atomic_concat|atomic_list_concat|atomics_to_string|attach_packs|attr_portray_hook|attr_unify_hook|attribute_goals|attvar|autoload|autoload_path|b_getval|b_set_dict|b_setval|bagof|begin_tests|between|blob|break|byte_count|call_dcg|call_residue_vars|callable|cancel_halt|catch|ceil|ceiling|char_code|char_conversion|char_type|character_count|chdir|chr_leash|chr_notrace|chr_show_store|chr_trace|clause|clause_property|close|close_dde_conversation|close_table|code_type|collation_key|compare|compare_strings|compile_aux_clauses|compile_predicates|compiling|compound|compound_name_arguments|compound_name_arity|consult|context_module|copy_predicate_clauses|copy_stream_data|copy_term|copy_term_nat|copysign|cos|cosh|cputime|create_prolog_flag|current_arithmetic_function|current_atom|current_blob|current_char_conversion|current_engine|current_flag|current_format_predicate|current_functor|current_input|current_key|current_locale|current_module|current_op|current_output|current_predicate|current_prolog_flag|current_signal|current_stream|current_trie|cyclic_term|date_time_stamp|date_time_value|day_of_the_week|dcg_translate_rule|dde_current_connection|dde_current_service|dde_execute|dde_poke|dde_register_service|dde_request|dde_unregister_service|debug|debugging|default_module|del_attr|del_attrs|del_dict|delete_directory|delete_file|delete_import_module|deterministic|dict_create|dict_pairs|dif|directory_files|divmod|doc_browser|doc_collect|doc_load_library|doc_server|double_metaphone|downcase_atom|dtd|dtd_property|duplicate_term|dwim_match|dwim_predicate|e|edit|encoding|engine_create|engine_fetch|engine_next|engine_next_reified|engine_post|engine_self|engine_yield|ensure_loaded|epsilon|erase|erf|erfc|eval|exception|exists_directory|exists_file|exists_source|exp|expand_answer|expand_file_name|expand_file_search_path|expand_goal|expand_query|expand_term|explain|fast_read|fast_term_serialized|fast_write|file_base_name|file_directory_name|file_name_extension|file_search_path|fill_buffer|find_chr_constraint|findall|findnsols|flag|float|float_fractional_part|float_integer_part|floor|flush_output|forall|format|format_predicate|format_time|free_dtd|free_sgml_parser|free_table|freeze|frozen|functor|garbage_collect|garbage_collect_atoms|garbage_collect_clauses|gdebug|get|get_attr|get_attrs|get_byte|get_char|get_code|get_dict|get_flag|get_sgml_parser|get_single_char|get_string_code|get_table_attribute|get_time|getbit|getenv|goal_expansion|ground|gspy|gtrace|guitracer|gxref|gzopen|halt|help|import_module|in_pce_thread|in_pce_thread_sync|in_table|include|inf|instance|integer|iri_xml_namespace|is_absolute_file_name|is_dict|is_engine|is_list|is_stream|is_thread|keysort|known_licenses|leash|length|lgamma|library_directory|license|line_count|line_position|list_strings|listing|load_dtd|load_files|load_html|load_rdf|load_sgml|load_structure|load_test_files|load_xml|locale_create|locale_destroy|locale_property|locale_sort|log|lsb|make|make_directory|make_library_index|max|memberchk|message_hook|message_property|message_queue_create|message_queue_destroy|message_queue_property|message_to_string|min|module|module_property|msb|msort|mutex_create|mutex_destroy|mutex_lock|mutex_property|mutex_statistics|mutex_trylock|mutex_unlock|name|nan|nb_current|nb_delete|nb_getval|nb_link_dict|nb_linkarg|nb_linkval|nb_set_dict|nb_setarg|nb_setval|new_dtd|new_order_table|new_sgml_parser|new_table|nl|nodebug|noguitracer|nonvar|noprotocol|normalize_space|nospy|nospyall|notrace|nth_clause|nth_integer_root_and_remainder|number|number_chars|number_codes|number_string|numbervars|odbc_close_statement|odbc_connect|odbc_current_connection|odbc_current_table|odbc_data_source|odbc_debug|odbc_disconnect|odbc_driver_connect|odbc_end_transaction|odbc_execute|odbc_fetch|odbc_free_statement|odbc_get_connection|odbc_prepare|odbc_query|odbc_set_connection|odbc_statistics|odbc_table_column|odbc_table_foreign_key|odbc_table_primary_key|odbc_type|on_signal|op|open|open_dde_conversation|open_dtd|open_null_stream|open_resource|open_string|open_table|order_table_mapping|parse_time|passed|pce_dispatch|pdt_install_console|peek_byte|peek_char|peek_code|peek_string|phrase|plus|popcount|porter_stem|portray|portray_clause|powm|predicate_property|predsort|prefix_string|print|print_message|print_message_lines|process_rdf|profile|profiler|project_attributes|prolog|prolog_choice_attribute|prolog_current_choice|prolog_current_frame|prolog_cut_to|prolog_debug|prolog_exception_hook|prolog_file_type|prolog_frame_attribute|prolog_ide|prolog_list_goal|prolog_load_context|prolog_load_file|prolog_nodebug|prolog_skip_frame|prolog_skip_level|prolog_stack_property|prolog_to_os_filename|prolog_trace_interception|prompt|protocol|protocola|protocolling|put|put_attr|put_attrs|put_byte|put_char|put_code|put_dict|qcompile|qsave_program|random|random_float|random_property|rational|rationalize|rdf_write_xml|read|read_clause|read_history|read_link|read_pending_chars|read_pending_codes|read_string|read_table_fields|read_table_record|read_table_record_data|read_term|read_term_from_atom|recorda|recorded|recordz|redefine_system_predicate|reexport|reload_library_index|rename_file|require|reset|reset_profiler|resource|retract|retractall|round|run_tests|running_tests|same_file|same_term|see|seeing|seek|seen|select_dict|set_end_of_stream|set_flag|set_input|set_locale|set_module|set_output|set_prolog_IO|set_prolog_flag|set_prolog_stack|set_random|set_sgml_parser|set_stream|set_stream_position|set_test_options|setarg|setenv|setlocale|setof|sgml_parse|shell|shift|show_coverage|show_profile|sign|sin|sinh|size_file|skip|sleep|sort|source_exports|source_file|source_file_property|source_location|split_string|spy|sqrt|stamp_date_time|statistics|stream_pair|stream_position_data|stream_property|string|string_chars|string_code|string_codes|string_concat|string_length|string_lower|string_upper|strip_module|style_check|sub_atom|sub_atom_icasechk|sub_string|subsumes_term|succ|suite|swritef|tab|table_previous_record|table_start_of_record|table_version|table_window|tan|tanh|tell|telling|term_attvars|term_expansion|term_hash|term_string|term_subsumer|term_to_atom|term_variables|test|test_report|text_to_string|thread_at_exit|thread_create|thread_detach|thread_exit|thread_get_message|thread_join|thread_message_hook|thread_peek_message|thread_property|thread_self|thread_send_message|thread_setconcurrency|thread_signal|thread_statistics|throw|time|time_file|tmp_file|tmp_file_stream|tokenize_atom|told|trace|tracing|trie_destroy|trie_gen|trie_insert|trie_insert_new|trie_lookup|trie_new|trie_property|trie_term|trim_stacks|truncate|tty_get_capability|tty_goto|tty_put|tty_size|ttyflush|unaccent_atom|unifiable|unify_with_occurs_check|unix|unknown|unload_file|unsetenv|upcase_atom|use_module|var|var_number|var_property|variant_hash|version|visible|wait_for_input|when|wildcard_match|win_add_dll_directory|win_exec|win_folder|win_has_menu|win_insert_menu|win_insert_menu_item|win_registry_get_value|win_remove_dll_directory|win_shell|win_window_pos|window_title|with_mutex|with_output_to|working_directory|write|write_canonical|write_length|write_term|writef|writeln|writeq|xml_is_dom|xml_to_rdf|zopen)\\b",
        "name": "support.function.builtin.prolog"
      }]
    },
    "comments": {
      "patterns": [{
        "match": "%.*",
        "name": "comment.line.percent-sign.prolog"
      }, {
        "begin": "/\\*",
        "captures": {
          "0": {
            "name": "punctuation.definition.comment.prolog"
          }
        },
        "end": "\\*/",
        "name": "comment.block.prolog"
      }]
    },
    "constants": {
      "patterns": [{
        "match": "(?<![a-zA-Z]|/)(\\d+|(\\d+\\.\\d+))",
        "name": "constant.numeric.integer.prolog"
      }, {
        "match": '".*?"',
        "name": "string.quoted.double.prolog"
      }]
    },
    "controlandkeywords": {
      "patterns": [{
        "begin": "(->)",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.if.prolog"
          }
        },
        "end": "(;)",
        "endCaptures": {
          "1": {
            "name": "keyword.control.else.prolog"
          }
        },
        "name": "meta.if.prolog",
        "patterns": [{
          "include": "$self"
        }, {
          "include": "#builtin"
        }, {
          "include": "#comments"
        }, {
          "include": "#atom"
        }, {
          "include": "#variable"
        }, {
          "match": ".",
          "name": "meta.if.body.prolog"
        }]
      }, {
        "match": "!",
        "name": "keyword.control.cut.prolog"
      }, {
        "match": "(\\s(is)\\s)|=:=|=\\.\\.|=?\\\\?=|\\\\\\+|@?>|@?=?<|\\+|\\*|\\-",
        "name": "keyword.operator.prolog"
      }]
    },
    "variable": {
      "patterns": [{
        "match": "(?<![a-zA-Z0-9_])[A-Z][a-zA-Z0-9_]*",
        "name": "variable.parameter.uppercase.prolog"
      }, {
        "match": "(?<!\\w)_",
        "name": "variable.language.anonymous.prolog"
      }]
    }
  },
  "scopeName": "source.prolog"
});
var prolog = [lang];
export {
  prolog as default
};
//# sourceMappingURL=prolog-FFO7IZ4X.js.map
