import "./chunk-WDMUDEB6.js";

// node_modules/shiki/dist/langs/kusto.mjs
var lang = Object.freeze({
  "displayName": "Kusto",
  "fileTypes": ["csl", "kusto", "kql"],
  "name": "kusto",
  "patterns": [{
    "comment": "Tabular operators: common helper operators",
    "match": "\\b(by|from|of|to|step|with)\\b",
    "name": "keyword.other.operator.kusto"
  }, {
    "comment": "Query statements: https://docs.microsoft.com/en-us/azure/kusto/query/statements",
    "match": "\\b(let|set|alias|declare|pattern|query_parameters|restrict|access|set)\\b",
    "name": "keyword.control.kusto"
  }, {
    "comment": "https://learn.microsoft.com/en-us/azure/data-explorer/kusto/query/datatypes-string-operators",
    "match": "\\b(and|or|has_all|has_any|matches|regex)\\b",
    "name": "keyword.other.operator.kusto"
  }, {
    "captures": {
      "1": {
        "name": "support.function.kusto"
      },
      "2": {
        "patterns": [{
          "include": "#Strings"
        }]
      }
    },
    "comment": "https://learn.microsoft.com/en-us/azure/data-explorer/kusto/query/clusterfunction",
    "match": "\\b(cluster|database)(?:\\s*\\(\\s*(.+?)\\s*\\))?(?!\\w)",
    "name": "meta.special.database.kusto"
  }, {
    "comment": "Special functions: https://learn.microsoft.com/en-us/azure/data-explorer/kusto/query/tablefunction",
    "match": "\\b(external_table|materialized_view|materialize|table|toscalar)\\b",
    "name": "support.function.kusto"
  }, {
    "comment": "https://learn.microsoft.com/en-us/azure/data-explorer/kusto/query/betweenoperator",
    "match": "(?<!\\w)(!?between)\\b",
    "name": "keyword.other.operator.kusto"
  }, {
    "captures": {
      "1": {
        "name": "support.function.kusto"
      },
      "2": {
        "patterns": [{
          "include": "#Numeric"
        }]
      },
      "3": {
        "patterns": [{
          "include": "#Numeric"
        }]
      }
    },
    "comment": "https://learn.microsoft.com/en-us/azure/data-explorer/kusto/query/binoperators",
    "match": "\\b(binary_and|binary_or|binary_shift_left|binary_shift_right|binary_xor)(?:\\s*\\(\\s*(\\w+)\\s*,\\s*(\\w+)\\s*\\))?(?!\\w)",
    "name": "meta.scalar.bitwise.kusto"
  }, {
    "captures": {
      "1": {
        "name": "support.function.kusto"
      },
      "2": {
        "patterns": [{
          "include": "#Numeric"
        }]
      }
    },
    "comment": "https://learn.microsoft.com/en-us/azure/data-explorer/kusto/query/binary-notfunction",
    "match": "\\b(binary_not|bitset_count_ones)(?:\\s*\\(\\s*(\\w+)\\s*\\))?(?!\\w)",
    "name": "meta.scalar.bitwise.kusto"
  }, {
    "comment": "https://learn.microsoft.com/en-us/azure/data-explorer/kusto/query/in-cs-operator",
    "match": "(?<!\\w)(!?in~?)(?!\\w)",
    "name": "keyword.other.operator.kusto"
  }, {
    "comment": "https://learn.microsoft.com/en-us/azure/data-explorer/kusto/query/datatypes-string-operators",
    "match": "(?<!\\w)(!?(?:contains|endswith|hasprefix|hassuffix|has|startswith)(?:_cs)?)(?!\\w)",
    "name": "keyword.other.operator.kusto"
  }, {
    "captures": {
      "1": {
        "name": "support.function.kusto"
      },
      "2": {
        "patterns": [{
          "include": "#DateTimeTimeSpanDataTypes"
        }, {
          "include": "#TimeSpanLiterals"
        }, {
          "include": "#DateTimeTimeSpanFunctions"
        }, {
          "include": "#Numeric"
        }]
      },
      "3": {
        "patterns": [{
          "include": "#DateTimeTimeSpanDataTypes"
        }, {
          "include": "#TimeSpanLiterals"
        }, {
          "include": "#DateTimeTimeSpanFunctions"
        }, {
          "include": "#Numeric"
        }]
      },
      "4": {
        "patterns": [{
          "include": "#DateTimeTimeSpanDataTypes"
        }, {
          "include": "#TimeSpanLiterals"
        }, {
          "include": "#DateTimeTimeSpanFunctions"
        }, {
          "include": "#Numeric"
        }]
      }
    },
    "comment": "https://learn.microsoft.com/en-us/azure/data-explorer/kusto/query/rangefunction",
    "match": "\\b(range)\\s*\\((?:\\s*(\\w+(?:\\(.*?\\))?)\\s*,\\s*(\\w+(?:\\(.*?\\))?)\\s*,?(?:\\s*)?(\\w+(?:\\(.*?\\))?)?\\s*\\))?(?!\\w)",
    "name": "meta.scalar.function.range.kusto"
  }, {
    "comment": "https://learn.microsoft.com/en-us/azure/data-explorer/kusto/query/scalarfunctions",
    "match": "\\b(abs|acos|around|array_concat|array_iff|array_index_of|array_length|array_reverse|array_rotate_left|array_rotate_right|array_shift_left|array_shift_right|array_slice|array_sort_asc|array_sort_desc|array_split|array_sum|asin|assert|atan2|atan|bag_has_key|bag_keys|bag_merge|bag_remove_keys|base64_decode_toarray|base64_decode_tostring|base64_decode_toguid|base64_encode_fromarray|base64_encode_tostring|base64_encode_fromguid|beta_cdf|beta_inv|beta_pdf|bin_at|bin_auto|case|ceiling|coalesce|column_ifexists|convert_angle|convert_energy|convert_force|convert_length|convert_mass|convert_speed|convert_temperature|convert_volume|cos|cot|countof|current_cluster_endpoint|current_database|current_principal_details|current_principal_is_member_of|current_principal|cursor_after|cursor_before_or_at|cursor_current|current_cursor|dcount_hll|degrees|dynamic_to_json|estimate_data_size|exp10|exp2|exp|extent_id|extent_tags|extract_all|extract_json|extractjson|extract|floor|format_bytes|format_ipv4_mask|format_ipv4|gamma|gettype|gzip_compress_to_base64_string|gzip_decompress_from_base64_string|has_any_index|has_any_ipv4_prefix|has_any_ipv4|has_ipv4_prefix|has_ipv4|hash_combine|hash_many|hash_md5|hash_sha1|hash_sha256|hash_xxhash64|hash|iff|iif|indexof_regex|indexof|ingestion_time|ipv4_compare|ipv4_is_in_range|ipv4_is_in_any_range|ipv4_is_match|ipv4_is_private|ipv4_netmask_suffix|ipv6_compare|ipv6_is_match|isascii|isempty|isfinite|isinf|isnan|isnotempty|notempty|isnotnull|notnull|isnull|isutf8|jaccard_index|log10|log2|loggamma|log|make_string|max_of|min_of|new_guid|not|bag_pack|pack_all|pack_array|pack_dictionary|pack|parse_command_line|parse_csv|parse_ipv4_mask|parse_ipv4|parse_ipv6_mask|parse_ipv6|parse_path|parse_urlquery|parse_url|parse_user_agent|parse_version|parse_xml|percentile_tdigest|percentile_array_tdigest|percentrank_tdigest|pi|pow|radians|rand|rank_tdigest|regex_quote|repeat|replace_regex|replace_string|reverse|round|set_difference|set_has_element|set_intersect|set_union|sign|sin|split|sqrt|strcat_array|strcat_delim|strcmp|strcat|string_size|strlen|strrep|substring|tan|to_utf8|tobool|todecimal|todouble|toreal|toguid|tohex|toint|tolong|tolower|tostring|toupper|translate|treepath|trim_end|trim_start|trim|unixtime_microseconds_todatetime|unixtime_milliseconds_todatetime|unixtime_nanoseconds_todatetime|unixtime_seconds_todatetime|url_decode|url_encode_component|url_encode|welch_test|zip|zlib_compress_to_base64_string|zlib_decompress_from_base64_string)\\b",
    "name": "support.function.kusto"
  }, {
    "captures": {
      "1": {
        "name": "support.function.kusto"
      },
      "2": {
        "patterns": [{
          "include": "#DateTimeTimeSpanDataTypes"
        }, {
          "include": "#TimeSpanLiterals"
        }, {
          "include": "#DateTimeTimeSpanFunctions"
        }, {
          "include": "#Numeric"
        }]
      },
      "3": {
        "patterns": [{
          "include": "#TimeSpanLiterals"
        }, {
          "include": "#Numeric"
        }]
      }
    },
    "comment": "https://learn.microsoft.com/en-us/azure/data-explorer/kusto/query/binfunction",
    "match": "\\b(bin)(?:\\s*\\(\\s*(.+?)\\s*,\\s*(.+?)\\s*\\))?(?!\\w)",
    "name": "meta.scalar.function.bin.kusto"
  }, {
    "comment": "https://learn.microsoft.com/en-us/azure/data-explorer/kusto/query/count-aggfunction",
    "match": "\\b(count)\\s*\\(\\s*\\)(?!\\w)",
    "name": "support.function.kusto"
  }, {
    "comment": "https://learn.microsoft.com/en-us/azure/data-explorer/kusto/query/aggregation-functions",
    "match": "\\b(arg_max|arg_min|avgif|avg|binary_all_and|binary_all_or|binary_all_xor|buildschema|countif|dcount|dcountif|hll|hll_merge|make_bag_if|make_bag|make_list_with_nulls|make_list_if|make_list|make_set_if|make_set|maxif|max|minif|min|percentilesw_array|percentiles_array|percentilesw|percentilew|percentiles|percentile|stdevif|stdevp|stdev|sumif|sum|take_anyif|take_any|tdigest_merge|merge_tdigest|tdigest|varianceif|variancep|variance)\\b",
    "name": "support.function.kusto"
  }, {
    "comment": "https://learn.microsoft.com/en-us/azure/data-explorer/kusto/query/geospatial-grid-systems",
    "match": "\\b(geo_distance_2points|geo_distance_point_to_line|geo_distance_point_to_polygon|geo_intersects_2lines|geo_intersects_2polygons|geo_intersects_line_with_polygon|geo_intersection_2lines|geo_intersection_2polygons|geo_intersection_line_with_polygon|geo_line_centroid|geo_line_densify|geo_line_length|geo_line_simplify|geo_polygon_area|geo_polygon_centroid|geo_polygon_densify|geo_polygon_perimeter|geo_polygon_simplify|geo_polygon_to_s2cells|geo_point_in_circle|geo_point_in_polygon|geo_point_to_geohash|geo_point_to_h3cell|geo_point_to_s2cell|geo_geohash_to_central_point|geo_geohash_neighbors|geo_geohash_to_polygon|geo_s2cell_to_central_point|geo_s2cell_neighbors|geo_s2cell_to_polygon|geo_h3cell_to_central_point|geo_h3cell_neighbors|geo_h3cell_to_polygon|geo_h3cell_parent|geo_h3cell_children|geo_h3cell_level|geo_h3cell_rings|geo_simplify_polygons_array|geo_union_lines_array|geo_union_polygons_array)\\b",
    "name": "support.function.kusto"
  }, {
    "comment": "https://learn.microsoft.com/en-us/azure/data-explorer/kusto/query/windowsfunctions",
    "match": "\\b(next|prev|row_cumsum|row_number|row_rank|row_window_session)\\b",
    "name": "support.function.kusto"
  }, {
    "comment": "User-defined functions: https://docs.microsoft.com/en-us/azure/kusto/query/functions/user-defined-functions",
    "match": "\\.(create-or-alter|replace)",
    "name": "keyword.control.kusto"
  }, {
    "comment": "User-defined functions: https://docs.microsoft.com/en-us/azure/kusto/query/functions/user-defined-functions",
    "match": "(?<=let ).+(?=\\W*=)",
    "name": "entity.function.name.lambda.kusto"
  }, {
    "comment": "User-defined functions: https://docs.microsoft.com/en-us/azure/kusto/query/functions/user-defined-functions",
    "match": "\\b(folder|docstring|skipvalidation)\\b",
    "name": "keyword.other.operator.kusto"
  }, {
    "match": "\\b(function)\\b",
    "name": "storage.type.kusto"
  }, {
    "comment": "Data types: https://docs.microsoft.com/en-us/azure/kusto/query/scalar-data-types",
    "match": "\\b(bool|decimal|dynamic|guid|int|long|real|string)\\b",
    "name": "storage.type.kusto"
  }, {
    "captures": {
      "1": {
        "name": "keyword.other.query.kusto"
      },
      "2": {
        "name": "variable.other.kusto"
      }
    },
    "comment": "https://learn.microsoft.com/en-us/azure/data-explorer/kusto/query/asoperator",
    "match": "\\b(as)\\s+(\\w+)\\b",
    "name": "meta.query.as.kusto"
  }, {
    "comment": "https://learn.microsoft.com/en-us/azure/data-explorer/kusto/query/datatableoperator",
    "match": "\\b(datatable)(?=\\W*\\()",
    "name": "keyword.other.query.kusto"
  }, {
    "captures": {
      "1": {
        "name": "keyword.other.query.kusto"
      },
      "2": {
        "name": "keyword.other.operator.kusto"
      }
    },
    "comment": "https://learn.microsoft.com/en-us/azure/data-explorer/kusto/query/facetoperator",
    "match": "\\b(facet)(?:\\s+(by))?\\b",
    "name": "meta.query.facet.kusto"
  }, {
    "captures": {
      "1": {
        "name": "keyword.other.query.kusto"
      },
      "2": {
        "name": "entity.name.function.kusto"
      }
    },
    "comment": "https://learn.microsoft.com/en-us/azure/data-explorer/kusto/query/invokeoperator",
    "match": "\\b(invoke)(?:\\s+(\\w+))?\\b",
    "name": "meta.query.invoke.kusto"
  }, {
    "captures": {
      "1": {
        "name": "keyword.other.query.kusto"
      },
      "2": {
        "name": "keyword.other.operator.kusto"
      },
      "3": {
        "name": "variable.other.column.kusto"
      }
    },
    "comment": "https://learn.microsoft.com/en-us/azure/data-explorer/kusto/query/orderoperator",
    "match": "\\b(order)(?:\\s+(by)\\s+(\\w+))?\\b",
    "name": "meta.query.order.kusto"
  }, {
    "captures": {
      "1": {
        "name": "keyword.other.query.kusto"
      },
      "2": {
        "name": "variable.other.column.kusto"
      },
      "3": {
        "name": "keyword.other.operator.kusto"
      },
      "4": {
        "patterns": [{
          "include": "#TimeSpanLiterals"
        }, {
          "include": "#DateTimeTimeSpanFunctions"
        }, {
          "include": "#Numeric"
        }]
      },
      "5": {
        "name": "keyword.other.operator.kusto"
      },
      "6": {
        "patterns": [{
          "include": "#TimeSpanLiterals"
        }, {
          "include": "#DateTimeTimeSpanFunctions"
        }, {
          "include": "#Numeric"
        }]
      },
      "7": {
        "name": "keyword.other.operator.kusto"
      },
      "8": {
        "patterns": [{
          "include": "#TimeSpanLiterals"
        }, {
          "include": "#DateTimeTimeSpanFunctions"
        }, {
          "include": "#Numeric"
        }]
      }
    },
    "comment": "https://learn.microsoft.com/en-us/azure/data-explorer/kusto/query/rangeoperator",
    "match": "\\b(range)\\s+(\\w+)\\s+(from)\\s+(\\w+(?:\\(\\w*\\))?)\\s+(to)\\s+(\\w+(?:\\(\\w*\\))?)\\s+(step)\\s+(\\w+(?:\\(\\w*\\))?)\\b",
    "name": "meta.query.range.kusto"
  }, {
    "captures": {
      "1": {
        "name": "keyword.other.query.kusto"
      },
      "2": {
        "patterns": [{
          "include": "#Numeric"
        }]
      }
    },
    "comment": "https://learn.microsoft.com/en-us/azure/data-explorer/kusto/query/sampleoperator",
    "match": "\\b(sample)(?:\\s+(\\d+))?(?![\\w-])",
    "name": "meta.query.sample.kusto"
  }, {
    "captures": {
      "1": {
        "name": "keyword.other.query.kusto"
      },
      "2": {
        "patterns": [{
          "include": "#Numeric"
        }]
      },
      "3": {
        "name": "keyword.other.operator.kusto"
      },
      "4": {
        "name": "variable.other.column.kusto"
      }
    },
    "comment": "https://learn.microsoft.com/en-us/azure/data-explorer/kusto/query/sampledistinctoperator",
    "match": "\\b(sample-distinct)(?:\\s+(\\d+)\\s+(of)\\s+(\\w+))?\\b",
    "name": "meta.query.sample-distinct.kusto"
  }, {
    "captures": {
      "1": {
        "name": "keyword.other.query.kusto"
      },
      "2": {
        "name": "keyword.other.operator.kusto"
      }
    },
    "comment": "https://learn.microsoft.com/en-us/azure/data-explorer/kusto/query/sortoperator",
    "match": "\\b(sort)(?:\\s+(by))?\\b",
    "name": "meta.query.sort.kusto"
  }, {
    "captures": {
      "1": {
        "name": "keyword.other.query.kusto"
      },
      "2": {
        "patterns": [{
          "include": "#Numeric"
        }]
      }
    },
    "comment": "https://learn.microsoft.com/en-us/azure/data-explorer/kusto/query/takeoperator",
    "match": "\\b(take|limit)(?:\\s+(\\d+))\\b",
    "name": "meta.query.take.kusto"
  }, {
    "captures": {
      "1": {
        "name": "keyword.other.query.kusto"
      },
      "2": {
        "patterns": [{
          "include": "#Numeric"
        }]
      },
      "3": {
        "name": "keyword.other.operator.kusto"
      },
      "4": {
        "name": "variable.other.column.kusto"
      }
    },
    "comment": "https://learn.microsoft.com/en-us/azure/data-explorer/kusto/query/topoperator",
    "match": "\\b(top)(?:\\s+(\\d+)\\s+(by)\\s+(\\w+))?(?![\\w-])\\b",
    "name": "meta.query.top.kusto"
  }, {
    "captures": {
      "1": {
        "name": "keyword.other.query.kusto"
      },
      "2": {
        "patterns": [{
          "include": "#Numeric"
        }]
      },
      "3": {
        "name": "keyword.other.operator.kusto"
      },
      "4": {
        "name": "variable.other.column.kusto"
      },
      "5": {
        "name": "keyword.other.operator.kusto"
      },
      "6": {
        "name": "variable.other.column.kusto"
      }
    },
    "comment": "https://learn.microsoft.com/en-us/azure/data-explorer/kusto/query/tophittersoperator",
    "match": "\\b(top-hitters)(?:\\s+(\\d+)\\s+(of)\\s+(\\w+)(?:\\s+(by)\\s+(\\w+))?)?\\b",
    "name": "meta.query.top-hitters.kusto"
  }, {
    "comment": "Tabular operators: https://learn.microsoft.com/en-us/azure/data-explorer/kusto/query/queries",
    "match": "\\b(consume|count|distinct|evaluate|extend|externaldata|find|fork|getschema|join|lookup|make-series|mv-apply|mv-expand|project-away|project-keep|project-rename|project-reorder|project|parse|parse-where|parse-kv|partition|print|reduce|render|scan|search|serialize|shuffle|summarize|top-nested|union|where)\\b",
    "name": "keyword.other.query.kusto"
  }, {
    "comment": "Tabular operators: evalute (plugins): https://docs.microsoft.com/en-us/azure/kusto/query/evaluateoperator",
    "match": "\\b(active_users_count|activity_counts_metrics|activity_engagement|new_activity_metrics|activity_metrics|autocluster|azure_digital_twins_query_request|bag_unpack|basket|cosmosdb_sql_request|dcount_intersect|diffpatterns|funnel_sequence_completion|funnel_sequence|http_request_post|http_request|infer_storage_schema|ipv4_lookup|mysql_request|narrow|pivot|preview|rolling_percentile|rows_near|schema_merge|session_count|sequence_detect|sliding_window_counts|sql_request)\\b",
    "name": "support.function.kusto"
  }, {
    "comment": "Tabular operators: join: https://docs.microsoft.com/en-us/azure/kusto/query/joinoperator",
    "match": "\\b(on|kind|hint\\.remote|hint\\.strategy)\\b",
    "name": "keyword.other.operator.kusto"
  }, {
    "comment": "Tabular operators: join ($left, $right): https://docs.microsoft.com/en-us/azure/kusto/query/joinoperator",
    "match": "(\\$left|\\$right)\\b",
    "name": "keyword.other.kusto"
  }, {
    "comment": "Tabular operators: join (kinds, strategies): https://docs.microsoft.com/en-us/azure/kusto/query/joinoperator",
    "match": "\\b(innerunique|inner|leftouter|rightouter|fullouter|leftanti|anti|leftantisemi|rightanti|rightantisemi|leftsemi|rightsemi|broadcast)\\b",
    "name": "keyword.other.kusto"
  }, {
    "comment": "https://learn.microsoft.com/en-us/azure/data-explorer/kusto/query/machine-learning-and-tsa",
    "match": "\\b(series_abs|series_acos|series_add|series_asin|series_atan|series_cos|series_decompose|series_decompose_anomalies|series_decompose_forecast|series_divide|series_equals|series_exp|series_fft|series_fill_backward|series_fill_const|series_fill_forward|series_fill_linear|series_fir|series_fit_2lines_dynamic|series_fit_2lines|series_fit_line_dynamic|series_fit_line|series_fit_poly|series_greater_equals|series_greater|series_ifft|series_iir|series_less_equals|series_less|series_multiply|series_not_equals|series_outliers|series_pearson_correlation|series_periods_detect|series_periods_validate|series_pow|series_seasonal|series_sign|series_sin|series_stats|series_stats_dynamic|series_subtract|series_tan)\\b",
    "name": "support.function.kusto"
  }, {
    "comment": "Tabular operators: mv-expand (bagexpand options): https://docs.microsoft.com/en-us/azure/kusto/query/mvexpandoperator",
    "match": "\\b(bag|array)\\b",
    "name": "keyword.other.operator.kusto"
  }, {
    "comment": "Tabular operators: order: https://docs.microsoft.com/en-us/azure/kusto/query/orderoperator",
    "match": "\\b(asc|desc|nulls first|nulls last)\\b",
    "name": "keyword.other.kusto"
  }, {
    "comment": "Tabular operators: parse: https://docs.microsoft.com/en-us/azure/kusto/query/parseoperator",
    "match": "\\b(regex|simple|relaxed)\\b",
    "name": "keyword.other.kusto"
  }, {
    "match": "\\b(anomalychart|areachart|barchart|card|columnchart|ladderchart|linechart|piechart|pivotchart|scatterchart|stackedareachart|timechart|timepivot)\\b",
    "name": "support.function.kusto"
  }, {
    "include": "#Strings"
  }, {
    "match": "\\{.*?\\}",
    "name": "string.other.kusto"
  }, {
    "comment": "Comments",
    "match": "//.*",
    "name": "comment.line.kusto"
  }, {
    "include": "#TimeSpanLiterals"
  }, {
    "include": "#DateTimeTimeSpanFunctions"
  }, {
    "include": "#DateTimeTimeSpanDataTypes"
  }, {
    "include": "#Numeric"
  }, {
    "match": "\\b(true|false|null)\\b",
    "name": "constant.language.kusto"
  }, {
    "comment": "Deprecated functions",
    "match": "\\b(anyif|any|array_strcat|base64_decodestring|base64_encodestring|make_dictionary|makelist|makeset|mvexpand|todynamic|parse_json|replace|weekofyear)(?=\\W*\\(|\\b)",
    "name": "invalid.deprecated.kusto"
  }],
  "repository": {
    "DateTimeTimeSpanDataTypes": {
      "patterns": [{
        "match": "\\b(datetime|timespan|time)\\b",
        "name": "storage.type.kusto"
      }]
    },
    "DateTimeTimeSpanFunctions": {
      "patterns": [{
        "captures": {
          "1": {
            "name": "support.function.kusto"
          },
          "2": {
            "patterns": [{
              "include": "#DateTimeTimeSpanDataTypes"
            }]
          },
          "3": {
            "patterns": [{
              "include": "#Strings"
            }]
          }
        },
        "comment": "https://learn.microsoft.com/en-us/azure/data-explorer/kusto/query/format-datetimefunction",
        "match": `\\b(format_datetime)(?:\\s*\\(\\s*(.+?)\\s*,\\s*(['"].*?['"])\\s*\\))?(?!\\w)`,
        "name": "meta.scalar.function.format_datetime.kusto"
      }, {
        "comment": "Scalar function: DateTime/Timespan Functions: https://docs.microsoft.com/en-us/azure/kusto/query/scalarfunctions#datetimetimespan-functions",
        "match": "\\b(ago|datetime_add|datetime_diff|datetime_local_to_utc|datetime_part|datetime_utc_to_local|dayofmonth|dayofweek|dayofyear|endofday|endofmonth|endofweek|endofyear|format_timespan|getmonth|getyear|hourofday|make_datetime|make_timespan|monthofyear|now|startofday|startofmonth|startofweek|startofyear|todatetime|totimespan|week_of_year)(?=\\W*\\()",
        "name": "support.function.kusto"
      }]
    },
    "Escapes": {
      "patterns": [{
        "match": `(\\\\['"]|\\\\\\\\)`,
        "name": "constant.character.escape.kusto"
      }]
    },
    "Numeric": {
      "patterns": [{
        "match": "\\b((0(x|X)[0-9a-fA-F]*)|(([0-9]+\\.?[0-9]*+)|(\\.[0-9]+))((e|E)(\\+|-)?[0-9]+)?)(L|l|UL|ul|u|U|F|f|ll|LL|ull|ULL)?(?=\\b|\\w)",
        "name": "constant.numeric.kusto"
      }]
    },
    "Strings": {
      "patterns": [{
        "begin": '([@h]?")',
        "beginCaptures": {
          "1": {
            "name": "punctuation.definition.string.kusto"
          }
        },
        "comment": "https://learn.microsoft.com/en-us/azure/data-explorer/kusto/query/scalar-data-types/string",
        "end": '"',
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.string.kusto"
          }
        },
        "name": "string.quoted.double.kusto",
        "patterns": [{
          "include": "#Escapes"
        }]
      }, {
        "begin": "([@h]?')",
        "beginCaptures": {
          "1": {
            "name": "punctuation.definition.string.kusto"
          }
        },
        "comment": "https://learn.microsoft.com/en-us/azure/data-explorer/kusto/query/scalar-data-types/string",
        "end": "'",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.string.kusto"
          }
        },
        "name": "string.quoted.single.kusto",
        "patterns": [{
          "include": "#Escapes"
        }]
      }, {
        "begin": "([@h]?```)",
        "beginCaptures": {
          "1": {
            "name": "punctuation.definition.string.kusto"
          }
        },
        "comment": "https://learn.microsoft.com/en-us/azure/data-explorer/kusto/query/scalar-data-types/string#multi-line-string-literals",
        "end": "```",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.string.kusto"
          }
        },
        "name": "string.quoted.multi.kusto",
        "patterns": [{
          "include": "#Escapes"
        }]
      }]
    },
    "TimeSpanLiterals": {
      "patterns": [{
        "comment": "timespan literals: https://docs.microsoft.com/en-us/azure/kusto/query/scalar-data-types/timespan#timespan-literals",
        "match": "[+-]?(?:\\d*\\.)?\\d+(?:microseconds?|ticks?|seconds?|ms|d|h|m|s)\\b",
        "name": "constant.numeric.kusto"
      }]
    }
  },
  "scopeName": "source.kusto",
  "aliases": ["kql"]
});
var kusto = [lang];
export {
  kusto as default
};
//# sourceMappingURL=kusto-SDJRZGHP.js.map
