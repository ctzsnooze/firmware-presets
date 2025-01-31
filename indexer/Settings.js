'use strict';

const MetadataTypes = {
        STRING:             "STRING",
        STRING_ARRAY:       "STRING_ARRAY", // strings from multiple comment lines
        PRESET_CATEGORY:    "PRESET_CATEGORY", // TUNE/RATES/OSD etc
        FILE_PATH:          "FILE_PATH", // path/to/file.ext and check if file exists
        BOOLEAN:            "BOOLEAN", // true/false
        WORDS_ARRAY:        "WORDS_ARRAY", // "word1, word2, word3"
        FILE_PATH_ARRAY:    "FILE_PATH_ARRAY", // array of path/to/file.ext and check if files exist
}

const PresetCategories = {
    TUNE:           "TUNE",
    RATES:          "RATES",
    OSD:            "OSD",
    VTX:            "VTX",
    LEDS:           "LEDS",
    MODES:          "MODES",
    BNF:            "BNF",
    RC_SMOOTHING:   "RC_SMOOTHING",
    RC_LINK:        "RC_LINK",
    MIXED:          "MIXED",
}

const RegionDirectives = {
    REGION_DIRECTIVE: "region",
    BEGIN_REGION_DIRECTIVE: "region begin",
    END_REGION_DIRECTIVE: "region end",
    REGION_CHECKED: "(checked)",
    REGION_UNCHECKED: "(unchecked)",
}

const settings = {
    PresetCategories: Object.freeze(PresetCategories),

    MetadataTypes: Object.freeze(MetadataTypes),

    RegionDirectives : Object.freeze(RegionDirectives),

    presetsDir: "presets",
    presetsFileEncoding: "utf-8",

    presetsFileMetadata: Object.freeze({
        title:             {type: MetadataTypes.STRING,           optional: false  },
        firmwareVersion:   {type: MetadataTypes.STRING_ARRAY,     optional: false  },
        category:          {type: MetadataTypes.PRESET_CATEGORY,  optional: false  },
        official:          {type: MetadataTypes.BOOLEAN,          optional: false  },
        author:            {type: MetadataTypes.STRING,           optional: true   },
        description:       {type: MetadataTypes.STRING_ARRAY,     optional: true   },
        include:           {type: MetadataTypes.FILE_PATH_ARRAY,  optional: true   },
        keywords:          {type: MetadataTypes.WORDS_ARRAY,      optional: true   },
    }),
}

module.exports = Object.freeze(settings);
