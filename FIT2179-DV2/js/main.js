//── Color Palettes (Wong 2011 — colorblind safe) ─────────
const threatColorScale = {
  "domain": ["Vulnerable", "Endangered", "Critically Endangered"],
  "range":  ["#56B4E9", "#E69F00", "#D55E00"]
};
 
const driverColorScale = {
  "domain": ["Agriculture", "Logging", "Shifting Cultivation", "Settlements", "Mining", "Wildfire", "Other"],
  "range":  ["#D55E00", "#E69F00", "#F0E442", "#CC79A7", "#0072B2", "#56B4E9", "#009E73"]
};
 
// ── Chart 1: Donut ───────────────────────────────────────
const donutSpec = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": 280,
  "height": 280,
  "data": {
    "values": [
      { "category": "Vulnerable",            "count": 1311, "order": 3 },
      { "category": "Endangered",            "count": 865,  "order": 2 },
      { "category": "Critically Endangered", "count": 336,  "order": 1 }
    ]
  },
  "layer": [
    {
      "mark": {
        "type": "arc",
        "innerRadius": 80,
        "outerRadius": 130,
        "stroke": "#faf7f2",
        "strokeWidth": 2
      },
      "encoding": {
        "theta": { "field": "count", "type": "quantitative", "stack": true },
        "order":  { "field": "order", "type": "ordinal" },
        "color": {
          "field": "category",
          "type": "nominal",
          "scale": threatColorScale,
          "legend": {
            "title": null,
            "orient": "bottom",
            "columns": 1,
            "labelFontSize": 12,
            "symbolSize": 120
          }
        },
        "tooltip": [
          { "field": "category", "type": "nominal",      "title": "Status" },
          { "field": "count",    "type": "quantitative", "title": "Number of species" }
        ]
      }
    },
    {
      "mark": { "type": "text", "fontSize": 28, "fontWeight": "bold", "color": "#1a2e1a" },
      "encoding": { "text": { "value": "2,512" } }
    },
    {
      "mark": { "type": "text", "fontSize": 11, "color": "#6b6459", "dy": 22 },
      "encoding": { "text": { "value": "species assessed" } }
    }
  ],
  "view": { "stroke": null },
  "background": "transparent"
};
 
// ── Chart 2: Stacked Bar ─────────────────────────────────
const stackedBarSpec = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": 400,
  "height": 280,
  "data": {
    "values": [
      { "group": "Flowering Plants", "category": "Critically Endangered", "count": 167 },
      { "group": "Flowering Plants", "category": "Endangered",            "count": 356 },
      { "group": "Flowering Plants", "category": "Vulnerable",            "count": 845 },
      { "group": "Monocots",         "category": "Critically Endangered", "count": 36  },
      { "group": "Monocots",         "category": "Endangered",            "count": 117 },
      { "group": "Monocots",         "category": "Vulnerable",            "count": 78  },
      { "group": "Corals",           "category": "Critically Endangered", "count": 4   },
      { "group": "Corals",           "category": "Endangered",            "count": 28  },
      { "group": "Corals",           "category": "Vulnerable",            "count": 191 },
      { "group": "Sharks & Rays",    "category": "Critically Endangered", "count": 15  },
      { "group": "Sharks & Rays",    "category": "Endangered",            "count": 51  },
      { "group": "Sharks & Rays",    "category": "Vulnerable",            "count": 46  },
      { "group": "Mammals",          "category": "Critically Endangered", "count": 28  },
      { "group": "Mammals",          "category": "Endangered",            "count": 52  },
      { "group": "Mammals",          "category": "Vulnerable",            "count": 25  },
      { "group": "Fish",             "category": "Critically Endangered", "count": 14  },
      { "group": "Fish",             "category": "Endangered",            "count": 35  },
      { "group": "Fish",             "category": "Vulnerable",            "count": 40  },
      { "group": "Birds",            "category": "Critically Endangered", "count": 14  },
      { "group": "Birds",            "category": "Endangered",            "count": 33  },
      { "group": "Birds",            "category": "Vulnerable",            "count": 32  },
      { "group": "Reptiles",         "category": "Critically Endangered", "count": 23  },
      { "group": "Reptiles",         "category": "Endangered",            "count": 14  },
      { "group": "Reptiles",         "category": "Vulnerable",            "count": 25  },
      { "group": "Insects",          "category": "Critically Endangered", "count": 18  },
      { "group": "Insects",          "category": "Endangered",            "count": 30  },
      { "group": "Insects",          "category": "Vulnerable",            "count": 15  },
      { "group": "Amphibians",       "category": "Critically Endangered", "count": 13  },
      { "group": "Amphibians",       "category": "Endangered",            "count": 17  },
      { "group": "Amphibians",       "category": "Vulnerable",            "count": 12  }
    ]
  },
  "mark": { "type": "bar", "cornerRadiusEnd": 3 },
  "encoding": {
    "x": {
      "field": "count", "type": "quantitative", "stack": "zero",
      "axis": { "title": "Number of species", "grid": false }
    },
    "y": {
      "field": "group", "type": "nominal", "sort": "-x",
      "axis": { "title": null }
    },
    "color": {
      "field": "category", "type": "nominal",
      "scale": threatColorScale,
      "legend": null
    },
    "order": {
      "field": "category",
      "sort": ["Vulnerable", "Endangered", "Critically Endangered"]
    },
    "tooltip": [
      { "field": "group",    "type": "nominal",      "title": "Group"   },
      { "field": "category", "type": "nominal",      "title": "Status"  },
      { "field": "count",    "type": "quantitative", "title": "Species" }
    ]
  },
  "view": { "stroke": null },
  "background": "transparent"
};
 
// ── Forest Driver Data ────────────────────────────────────
const forestDriverData = [
  { "year": 2001, "driver": "Agriculture", "hectares": 263761 },
  { "year": 2001, "driver": "Logging", "hectares": 51116 },
  { "year": 2001, "driver": "Mining", "hectares": 2446 },
  { "year": 2001, "driver": "Other", "hectares": 528 },
  { "year": 2001, "driver": "Settlements", "hectares": 6289 },
  { "year": 2001, "driver": "Shifting Cultivation", "hectares": 7424 },
  { "year": 2001, "driver": "Wildfire", "hectares": 898 },
  { "year": 2002, "driver": "Agriculture", "hectares": 258338 },
  { "year": 2002, "driver": "Logging", "hectares": 36631 },
  { "year": 2002, "driver": "Mining", "hectares": 2412 },
  { "year": 2002, "driver": "Other", "hectares": 596 },
  { "year": 2002, "driver": "Settlements", "hectares": 6778 },
  { "year": 2002, "driver": "Shifting Cultivation", "hectares": 7091 },
  { "year": 2002, "driver": "Wildfire", "hectares": 747 },
  { "year": 2003, "driver": "Agriculture", "hectares": 136239 },
  { "year": 2003, "driver": "Logging", "hectares": 35487 },
  { "year": 2003, "driver": "Mining", "hectares": 1505 },
  { "year": 2003, "driver": "Other", "hectares": 277 },
  { "year": 2003, "driver": "Settlements", "hectares": 4328 },
  { "year": 2003, "driver": "Shifting Cultivation", "hectares": 5468 },
  { "year": 2003, "driver": "Wildfire", "hectares": 608 },
  { "year": 2004, "driver": "Agriculture", "hectares": 264328 },
  { "year": 2004, "driver": "Logging", "hectares": 65475 },
  { "year": 2004, "driver": "Mining", "hectares": 2797 },
  { "year": 2004, "driver": "Other", "hectares": 471 },
  { "year": 2004, "driver": "Settlements", "hectares": 9502 },
  { "year": 2004, "driver": "Shifting Cultivation", "hectares": 7560 },
  { "year": 2004, "driver": "Wildfire", "hectares": 1644 },
  { "year": 2005, "driver": "Agriculture", "hectares": 300046 },
  { "year": 2005, "driver": "Logging", "hectares": 54507 },
  { "year": 2005, "driver": "Mining", "hectares": 2792 },
  { "year": 2005, "driver": "Other", "hectares": 747 },
  { "year": 2005, "driver": "Settlements", "hectares": 7473 },
  { "year": 2005, "driver": "Shifting Cultivation", "hectares": 7821 },
  { "year": 2005, "driver": "Wildfire", "hectares": 2142 },
  { "year": 2006, "driver": "Agriculture", "hectares": 258142 },
  { "year": 2006, "driver": "Logging", "hectares": 56498 },
  { "year": 2006, "driver": "Mining", "hectares": 3913 },
  { "year": 2006, "driver": "Other", "hectares": 464 },
  { "year": 2006, "driver": "Settlements", "hectares": 7165 },
  { "year": 2006, "driver": "Shifting Cultivation", "hectares": 7191 },
  { "year": 2006, "driver": "Wildfire", "hectares": 942 },
  { "year": 2007, "driver": "Agriculture", "hectares": 304234 },
  { "year": 2007, "driver": "Logging", "hectares": 79535 },
  { "year": 2007, "driver": "Mining", "hectares": 4239 },
  { "year": 2007, "driver": "Other", "hectares": 681 },
  { "year": 2007, "driver": "Settlements", "hectares": 8032 },
  { "year": 2007, "driver": "Shifting Cultivation", "hectares": 7289 },
  { "year": 2007, "driver": "Wildfire", "hectares": 1458 },
  { "year": 2008, "driver": "Agriculture", "hectares": 277062 },
  { "year": 2008, "driver": "Logging", "hectares": 72450 },
  { "year": 2008, "driver": "Mining", "hectares": 3556 },
  { "year": 2008, "driver": "Other", "hectares": 646 },
  { "year": 2008, "driver": "Settlements", "hectares": 5785 },
  { "year": 2008, "driver": "Shifting Cultivation", "hectares": 7933 },
  { "year": 2008, "driver": "Wildfire", "hectares": 621 },
  { "year": 2009, "driver": "Agriculture", "hectares": 497555 },
  { "year": 2009, "driver": "Logging", "hectares": 94779 },
  { "year": 2009, "driver": "Mining", "hectares": 5833 },
  { "year": 2009, "driver": "Other", "hectares": 1348 },
  { "year": 2009, "driver": "Settlements", "hectares": 10649 },
  { "year": 2009, "driver": "Shifting Cultivation", "hectares": 9639 },
  { "year": 2009, "driver": "Wildfire", "hectares": 3019 },
  { "year": 2010, "driver": "Agriculture", "hectares": 350039 },
  { "year": 2010, "driver": "Logging", "hectares": 57728 },
  { "year": 2010, "driver": "Mining", "hectares": 5083 },
  { "year": 2010, "driver": "Other", "hectares": 907 },
  { "year": 2010, "driver": "Settlements", "hectares": 8527 },
  { "year": 2010, "driver": "Shifting Cultivation", "hectares": 6979 },
  { "year": 2010, "driver": "Wildfire", "hectares": 1398 },
  { "year": 2011, "driver": "Agriculture", "hectares": 364849 },
  { "year": 2011, "driver": "Logging", "hectares": 55225 },
  { "year": 2011, "driver": "Mining", "hectares": 27351 },
  { "year": 2011, "driver": "Other", "hectares": 987 },
  { "year": 2011, "driver": "Settlements", "hectares": 6813 },
  { "year": 2011, "driver": "Shifting Cultivation", "hectares": 6429 },
  { "year": 2011, "driver": "Wildfire", "hectares": 1236 },
  { "year": 2012, "driver": "Agriculture", "hectares": 474974 },
  { "year": 2012, "driver": "Logging", "hectares": 107677 },
  { "year": 2012, "driver": "Mining", "hectares": 21155 },
  { "year": 2012, "driver": "Other", "hectares": 2482 },
  { "year": 2012, "driver": "Settlements", "hectares": 9295 },
  { "year": 2012, "driver": "Shifting Cultivation", "hectares": 9073 },
  { "year": 2012, "driver": "Wildfire", "hectares": 3031 },
  { "year": 2013, "driver": "Agriculture", "hectares": 264400 },
  { "year": 2013, "driver": "Logging", "hectares": 49275 },
  { "year": 2013, "driver": "Mining", "hectares": 6480 },
  { "year": 2013, "driver": "Other", "hectares": 1284 },
  { "year": 2013, "driver": "Settlements", "hectares": 3872 },
  { "year": 2013, "driver": "Shifting Cultivation", "hectares": 6204 },
  { "year": 2013, "driver": "Wildfire", "hectares": 1705 },
  { "year": 2014, "driver": "Agriculture", "hectares": 449080 },
  { "year": 2014, "driver": "Logging", "hectares": 130864 },
  { "year": 2014, "driver": "Mining", "hectares": 26198 },
  { "year": 2014, "driver": "Other", "hectares": 4108 },
  { "year": 2014, "driver": "Settlements", "hectares": 12139 },
  { "year": 2014, "driver": "Shifting Cultivation", "hectares": 14200 },
  { "year": 2014, "driver": "Wildfire", "hectares": 9104 },
  { "year": 2015, "driver": "Agriculture", "hectares": 312093 },
  { "year": 2015, "driver": "Logging", "hectares": 107093 },
  { "year": 2015, "driver": "Mining", "hectares": 6677 },
  { "year": 2015, "driver": "Other", "hectares": 4621 },
  { "year": 2015, "driver": "Settlements", "hectares": 7432 },
  { "year": 2015, "driver": "Shifting Cultivation", "hectares": 11311 },
  { "year": 2015, "driver": "Wildfire", "hectares": 4817 },
  { "year": 2016, "driver": "Agriculture", "hectares": 377222 },
  { "year": 2016, "driver": "Logging", "hectares": 137296 },
  { "year": 2016, "driver": "Mining", "hectares": 8708 },
  { "year": 2016, "driver": "Other", "hectares": 3926 },
  { "year": 2016, "driver": "Settlements", "hectares": 10888 },
  { "year": 2016, "driver": "Shifting Cultivation", "hectares": 13156 },
  { "year": 2016, "driver": "Wildfire", "hectares": 14129 },
  { "year": 2017, "driver": "Agriculture", "hectares": 322358 },
  { "year": 2017, "driver": "Logging", "hectares": 126150 },
  { "year": 2017, "driver": "Mining", "hectares": 6477 },
  { "year": 2017, "driver": "Other", "hectares": 2488 },
  { "year": 2017, "driver": "Settlements", "hectares": 9070 },
  { "year": 2017, "driver": "Shifting Cultivation", "hectares": 11498 },
  { "year": 2017, "driver": "Wildfire", "hectares": 5088 },
  { "year": 2018, "driver": "Agriculture", "hectares": 290056 },
  { "year": 2018, "driver": "Logging", "hectares": 121939 },
  { "year": 2018, "driver": "Mining", "hectares": 5336 },
  { "year": 2018, "driver": "Other", "hectares": 1585 },
  { "year": 2018, "driver": "Settlements", "hectares": 7012 },
  { "year": 2018, "driver": "Shifting Cultivation", "hectares": 9076 },
  { "year": 2018, "driver": "Wildfire", "hectares": 2906 },
  { "year": 2019, "driver": "Agriculture", "hectares": 270226 },
  { "year": 2019, "driver": "Logging", "hectares": 101142 },
  { "year": 2019, "driver": "Mining", "hectares": 4159 },
  { "year": 2019, "driver": "Other", "hectares": 1019 },
  { "year": 2019, "driver": "Settlements", "hectares": 7323 },
  { "year": 2019, "driver": "Shifting Cultivation", "hectares": 8076 },
  { "year": 2019, "driver": "Wildfire", "hectares": 3395 },
  { "year": 2020, "driver": "Agriculture", "hectares": 195633 },
  { "year": 2020, "driver": "Logging", "hectares": 54823 },
  { "year": 2020, "driver": "Mining", "hectares": 3837 },
  { "year": 2020, "driver": "Other", "hectares": 930 },
  { "year": 2020, "driver": "Settlements", "hectares": 4909 },
  { "year": 2020, "driver": "Shifting Cultivation", "hectares": 7062 },
  { "year": 2020, "driver": "Wildfire", "hectares": 1499 },
  { "year": 2021, "driver": "Agriculture", "hectares": 205875 },
  { "year": 2021, "driver": "Logging", "hectares": 48776 },
  { "year": 2021, "driver": "Mining", "hectares": 5554 },
  { "year": 2021, "driver": "Other", "hectares": 1250 },
  { "year": 2021, "driver": "Settlements", "hectares": 5530 },
  { "year": 2021, "driver": "Shifting Cultivation", "hectares": 9563 },
  { "year": 2021, "driver": "Wildfire", "hectares": 951 },
  { "year": 2022, "driver": "Agriculture", "hectares": 173858 },
  { "year": 2022, "driver": "Logging", "hectares": 55847 },
  { "year": 2022, "driver": "Mining", "hectares": 4997 },
  { "year": 2022, "driver": "Other", "hectares": 1435 },
  { "year": 2022, "driver": "Settlements", "hectares": 3766 },
  { "year": 2022, "driver": "Shifting Cultivation", "hectares": 7134 },
  { "year": 2022, "driver": "Wildfire", "hectares": 947 },
  { "year": 2023, "driver": "Agriculture", "hectares": 206969 },
  { "year": 2023, "driver": "Logging", "hectares": 78861 },
  { "year": 2023, "driver": "Mining", "hectares": 6109 },
  { "year": 2023, "driver": "Other", "hectares": 1651 },
  { "year": 2023, "driver": "Settlements", "hectares": 5274 },
  { "year": 2023, "driver": "Shifting Cultivation", "hectares": 8589 },
  { "year": 2023, "driver": "Wildfire", "hectares": 1134 },
  { "year": 2024, "driver": "Agriculture", "hectares": 182363 },
  { "year": 2024, "driver": "Logging", "hectares": 74903 },
  { "year": 2024, "driver": "Mining", "hectares": 6991 },
  { "year": 2024, "driver": "Other", "hectares": 2382 },
  { "year": 2024, "driver": "Settlements", "hectares": 5464 },
  { "year": 2024, "driver": "Shifting Cultivation", "hectares": 7463 },
  { "year": 2024, "driver": "Wildfire", "hectares": 2883 }
];

// ── Chart 2b: 100% Normalized Bar ────────────────────────
const normalizedBarSpec = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": 600,
  "height": 320,
  "data": {
    "values": [
      { "group": "Flowering Plants", "category": "Critically Endangered", "count": 167 },
      { "group": "Flowering Plants", "category": "Endangered",            "count": 356 },
      { "group": "Flowering Plants", "category": "Vulnerable",            "count": 845 },
      { "group": "Monocots",         "category": "Critically Endangered", "count": 36  },
      { "group": "Monocots",         "category": "Endangered",            "count": 117 },
      { "group": "Monocots",         "category": "Vulnerable",            "count": 78  },
      { "group": "Corals",           "category": "Critically Endangered", "count": 4   },
      { "group": "Corals",           "category": "Endangered",            "count": 28  },
      { "group": "Corals",           "category": "Vulnerable",            "count": 191 },
      { "group": "Sharks & Rays",    "category": "Critically Endangered", "count": 15  },
      { "group": "Sharks & Rays",    "category": "Endangered",            "count": 51  },
      { "group": "Sharks & Rays",    "category": "Vulnerable",            "count": 46  },
      { "group": "Mammals",          "category": "Critically Endangered", "count": 28  },
      { "group": "Mammals",          "category": "Endangered",            "count": 52  },
      { "group": "Mammals",          "category": "Vulnerable",            "count": 25  },
      { "group": "Fish",             "category": "Critically Endangered", "count": 14  },
      { "group": "Fish",             "category": "Endangered",            "count": 35  },
      { "group": "Fish",             "category": "Vulnerable",            "count": 40  },
      { "group": "Birds",            "category": "Critically Endangered", "count": 14  },
      { "group": "Birds",            "category": "Endangered",            "count": 33  },
      { "group": "Birds",            "category": "Vulnerable",            "count": 32  },
      { "group": "Reptiles",         "category": "Critically Endangered", "count": 23  },
      { "group": "Reptiles",         "category": "Endangered",            "count": 14  },
      { "group": "Reptiles",         "category": "Vulnerable",            "count": 25  },
      { "group": "Insects",          "category": "Critically Endangered", "count": 18  },
      { "group": "Insects",          "category": "Endangered",            "count": 30  },
      { "group": "Insects",          "category": "Vulnerable",            "count": 15  },
      { "group": "Amphibians",       "category": "Critically Endangered", "count": 13  },
      { "group": "Amphibians",       "category": "Endangered",            "count": 17  },
      { "group": "Amphibians",       "category": "Vulnerable",            "count": 12  }
    ]
  },
  "mark": { "type": "bar", "cornerRadiusEnd": 3 },
  "encoding": {
    "x": {
      "field": "count", "type": "quantitative", "stack": "normalize",
      "axis": { 
        "title": "Proportion of species", 
        "format": "%",
        "grid": false
      }
    },
    "y": {
      "field": "group", "type": "nominal",
      "sort": { "field": "count", "op": "sum", "order": "descending" },
      "axis": { "title": null }
    },
    "color": {
      "field": "category", "type": "nominal",
      "scale": threatColorScale,
      "legend": null
    },
    "order": {
      "field": "category",
      "sort": ["Vulnerable", "Endangered", "Critically Endangered"]
    },
    "tooltip": [
      { "field": "group",    "type": "nominal",      "title": "Group"   },
      { "field": "category", "type": "nominal",      "title": "Status"  },
      { "field": "count",    "type": "quantitative", "title": "Species" }
    ]
  },
  "view": { "stroke": null },
  "background": "transparent"
};



// ── Part 2: What's Threatening Them? ─────────────────────

// ── Chart 3: Heatmap — Threat × Species Class ────────────
const heatmapSpec = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": 520,
  "height": 280,
  "data": {
    "values": [
      { "class": "Amphibians",       "threat": "Agriculture & Aquaculture",   "count": 24  },
      { "class": "Amphibians",       "threat": "Climate Change",              "count": 4   },
      { "class": "Amphibians",       "threat": "Habitat Loss",                "count": 8   },
      { "class": "Amphibians",       "threat": "Hunting & Trapping",          "count": 3   },
      { "class": "Amphibians",       "threat": "Infrastructure",              "count": 17  },
      { "class": "Amphibians",       "threat": "Invasive Species & Disease",  "count": 0   },
      { "class": "Amphibians",       "threat": "Logging & Timber",            "count": 29  },
      { "class": "Amphibians",       "threat": "Pollution",                   "count": 4   },
      { "class": "Birds",            "threat": "Agriculture & Aquaculture",   "count": 58  },
      { "class": "Birds",            "threat": "Climate Change",              "count": 25  },
      { "class": "Birds",            "threat": "Habitat Loss",                "count": 37  },
      { "class": "Birds",            "threat": "Hunting & Trapping",          "count": 60  },
      { "class": "Birds",            "threat": "Infrastructure",              "count": 32  },
      { "class": "Birds",            "threat": "Invasive Species & Disease",  "count": 16  },
      { "class": "Birds",            "threat": "Logging & Timber",            "count": 52  },
      { "class": "Birds",            "threat": "Pollution",                   "count": 14  },
      { "class": "Corals",           "threat": "Agriculture & Aquaculture",   "count": 207 },
      { "class": "Corals",           "threat": "Climate Change",              "count": 223 },
      { "class": "Corals",           "threat": "Hunting & Trapping",          "count": 39  },
      { "class": "Corals",           "threat": "Infrastructure",              "count": 219 },
      { "class": "Corals",           "threat": "Invasive Species & Disease",  "count": 223 },
      { "class": "Corals",           "threat": "Logging & Timber",            "count": 41  },
      { "class": "Corals",           "threat": "Pollution",                   "count": 202 },
      { "class": "Corals",           "threat": "Habitat Loss",                "count": 0   },
      { "class": "Fish",             "threat": "Agriculture & Aquaculture",   "count": 50  },
      { "class": "Fish",             "threat": "Climate Change",              "count": 23  },
      { "class": "Fish",             "threat": "Habitat Loss",                "count": 27  },
      { "class": "Fish",             "threat": "Hunting & Trapping",          "count": 27  },
      { "class": "Fish",             "threat": "Infrastructure",              "count": 32  },
      { "class": "Fish",             "threat": "Invasive Species & Disease",  "count": 3   },
      { "class": "Fish",             "threat": "Logging & Timber",            "count": 37  },
      { "class": "Fish",             "threat": "Pollution",                   "count": 22  },
      { "class": "Flowering Plants", "threat": "Agriculture & Aquaculture",   "count": 661 },
      { "class": "Flowering Plants", "threat": "Climate Change",              "count": 120 },
      { "class": "Flowering Plants", "threat": "Habitat Loss",                "count": 480 },
      { "class": "Flowering Plants", "threat": "Hunting & Trapping",          "count": 141 },
      { "class": "Flowering Plants", "threat": "Infrastructure",              "count": 346 },
      { "class": "Flowering Plants", "threat": "Invasive Species & Disease",  "count": 3   },
      { "class": "Flowering Plants", "threat": "Logging & Timber",            "count": 648 },
      { "class": "Flowering Plants", "threat": "Pollution",                   "count": 8   },
      { "class": "Insects",          "threat": "Agriculture & Aquaculture",   "count": 49  },
      { "class": "Insects",          "threat": "Climate Change",              "count": 9   },
      { "class": "Insects",          "threat": "Habitat Loss",                "count": 12  },
      { "class": "Insects",          "threat": "Hunting & Trapping",          "count": 6   },
      { "class": "Insects",          "threat": "Infrastructure",              "count": 21  },
      { "class": "Insects",          "threat": "Invasive Species & Disease",  "count": 1   },
      { "class": "Insects",          "threat": "Logging & Timber",            "count": 29  },
      { "class": "Insects",          "threat": "Pollution",                   "count": 6   },
      { "class": "Mammals",          "threat": "Agriculture & Aquaculture",   "count": 78  },
      { "class": "Mammals",          "threat": "Climate Change",              "count": 18  },
      { "class": "Mammals",          "threat": "Habitat Loss",                "count": 53  },
      { "class": "Mammals",          "threat": "Hunting & Trapping",          "count": 70  },
      { "class": "Mammals",          "threat": "Infrastructure",              "count": 52  },
      { "class": "Mammals",          "threat": "Invasive Species & Disease",  "count": 29  },
      { "class": "Mammals",          "threat": "Logging & Timber",            "count": 70  },
      { "class": "Mammals",          "threat": "Pollution",                   "count": 16  },
      { "class": "Monocots",         "threat": "Agriculture & Aquaculture",   "count": 124 },
      { "class": "Monocots",         "threat": "Climate Change",              "count": 21  },
      { "class": "Monocots",         "threat": "Habitat Loss",                "count": 49  },
      { "class": "Monocots",         "threat": "Hunting & Trapping",          "count": 57  },
      { "class": "Monocots",         "threat": "Infrastructure",              "count": 51  },
      { "class": "Monocots",         "threat": "Invasive Species & Disease",  "count": 0   },
      { "class": "Monocots",         "threat": "Logging & Timber",            "count": 76  },
      { "class": "Monocots",         "threat": "Pollution",                   "count": 7   },
      { "class": "Reptiles",         "threat": "Agriculture & Aquaculture",   "count": 20  },
      { "class": "Reptiles",         "threat": "Climate Change",              "count": 10  },
      { "class": "Reptiles",         "threat": "Habitat Loss",                "count": 12  },
      { "class": "Reptiles",         "threat": "Hunting & Trapping",          "count": 30  },
      { "class": "Reptiles",         "threat": "Infrastructure",              "count": 37  },
      { "class": "Reptiles",         "threat": "Invasive Species & Disease",  "count": 8   },
      { "class": "Reptiles",         "threat": "Logging & Timber",            "count": 9   },
      { "class": "Reptiles",         "threat": "Pollution",                   "count": 12  },
      { "class": "Sharks & Rays",    "threat": "Agriculture & Aquaculture",   "count": 67  },
      { "class": "Sharks & Rays",    "threat": "Climate Change",              "count": 24  },
      { "class": "Sharks & Rays",    "threat": "Habitat Loss",                "count": 73  },
      { "class": "Sharks & Rays",    "threat": "Hunting & Trapping",          "count": 36  },
      { "class": "Sharks & Rays",    "threat": "Infrastructure",              "count": 62  },
      { "class": "Sharks & Rays",    "threat": "Invasive Species & Disease",  "count": 1   },
      { "class": "Sharks & Rays",    "threat": "Logging & Timber",            "count": 9   },
      { "class": "Sharks & Rays",    "threat": "Pollution",                   "count": 50  }
    ]
  },
  "mark": { "type": "rect", "cornerRadius": 2 },
  "encoding": {
    "x": {
      "field": "threat", "type": "nominal",
      "sort": ["Agriculture & Aquaculture", "Logging & Timber", "Habitat Loss",
               "Hunting & Trapping", "Infrastructure", "Climate Change",
               "Pollution", "Invasive Species & Disease"],
      "axis": {
        "title": null,
        "labelAngle": -35,
        "labelFontSize": 11,
        "labelLimit": 140
      }
    },
    "y": {
      "field": "class", "type": "nominal",
      "sort": ["Flowering Plants", "Corals", "Monocots", "Mammals",
               "Sharks & Rays", "Birds", "Fish", "Insects", "Reptiles", "Amphibians"],
      "axis": { "title": null, "labelFontSize": 11 }
    },
    "color": {
      "field": "count", "type": "quantitative",
      "scale": {
        "range": ["#f5cba7", "#D55E00"],
        "domainMin": 0
      },
      "legend": {
        "title": "Species affected",
        "orient": "right",
        "labelFontSize": 10,
        "gradientLength": 120
      }
    },
    "tooltip": [
      { "field": "class",  "type": "nominal",      "title": "Species group" },
      { "field": "threat", "type": "nominal",      "title": "Threat"        },
      { "field": "count",  "type": "quantitative", "title": "Species affected" }
    ]
  },
  "view": { "stroke": null },
  "background": "transparent"
};

// ── Chart 4: Lollipop — Population Trend ─────────────────
const lollipopSpec = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": 600,
  "height": 200,
  "data": {
    "values": [
      { "trend": "Decreasing", "count": 1457, "pct": "58%" },
      { "trend": "Unknown",    "count": 551,  "pct": "22%" },
      { "trend": "Stable",     "count": 186,  "pct": "7%"  },
      { "trend": "Increasing", "count": 4,    "pct": "<1%" }
    ]
  },
  "layer": [
    {
      "mark": { "type": "rule", "strokeWidth": 2, "color": "#c8c0b4" },
      "encoding": {
        "y": {
          "field": "trend", "type": "nominal",
          "sort": ["Decreasing", "Unknown", "Stable", "Increasing"],
          "axis": { "title": null, "labelFontSize": 12 }
        },
        "x": {
          "datum": 0,           "type": "quantitative"
        },
        "x2": {
          "field": "count",     "type": "quantitative"
        }
      }
    },
    {
      "mark": { "type": "point", "filled": true, "size": 120 },
      "encoding": {
        "y": {
          "field": "trend", "type": "nominal",
          "sort": ["Decreasing", "Unknown", "Stable", "Increasing"],
          "axis": { "title": null, "labelFontSize": 12 }
        },
        "x": {
          "field": "count", "type": "quantitative",
          "axis": { "title": "Number of species", "grid": false }
        },
        "color": {
          "field": "trend", "type": "nominal",
          "scale": {
            "domain": ["Decreasing", "Unknown", "Stable", "Increasing"],
            "range":  ["#D55E00", "#CC79A7", "#E69F00", "#009E73"]
          },
          "legend": null
        },
        "tooltip": [
          { "field": "trend", "type": "nominal",      "title": "Trend"   },
          { "field": "count", "type": "quantitative", "title": "Species" },
          { "field": "pct",   "type": "nominal",      "title": "Share"   }
        ]
      }
    },
    {
      "mark": { "type": "text", "align": "left", "dx": 8, "fontSize": 12, "fontWeight": "bold" },
      "encoding": {
        "y": {
          "field": "trend", "type": "nominal",
          "sort": ["Decreasing", "Unknown", "Stable", "Increasing"]
        },
        "x": { "field": "count", "type": "quantitative" },
        "text": { "field": "pct", "type": "nominal" },
        "color": {
          "field": "trend", "type": "nominal",
          "scale": {
            "domain": ["Decreasing", "Unknown", "Stable", "Increasing"],
            "range":  ["#D55E00", "#CC79A7", "#E69F00", "#009E73"]
          }
        }
      }
    }
  ],
  "view": { "stroke": null },
  "background": "transparent"
};




// ── Chart 5: Stacked Area Chart ───────────────────────────
const stackedAreaSpec = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": 500,
  "height": 300,
  "data": { "values": forestDriverData },
  "mark": { "type": "area", "opacity": 0.85 },
  "encoding": {
    "x": {
      "field": "year",
      "type": "quantitative",
      "axis": {
        "title": null,
        "labelAngle": -45,
        "grid": false,
        "format": "d",
        "tickCount": 12
      }
    },
    "y": {
      "field": "hectares", "type": "quantitative", "stack": "zero",
      "axis": {
        "title": "Forest loss (hectares)",
        "format": "~s",
        "grid": true,
        "gridColor": "#e8e4dc"
      }
    },
    "color": {
      "field": "driver", "type": "nominal",
      "scale": driverColorScale,
      "legend": {
        "title": "Driver",
        "orient": "right",
        "labelFontSize": 11
      }
    },
    "tooltip": [
      { "field": "year",     "type": "quantitative", "title": "Year",     "format": "d"    },
      { "field": "driver",   "type": "nominal",      "title": "Driver"                     },
      { "field": "hectares", "type": "quantitative", "title": "Hectares", "format": ",.0f" }
    ]
  },
  "view": { "stroke": null },
  "background": "transparent"
};
 
// ── Chart 6: Bar Chart + Reference Line ───────────────────
const driverBarSpec = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": 500,
  "height": 280,
  "data": {
    "values": [
      { "driver": "Agriculture",          "hectares": 6999700 },
      { "driver": "Logging",              "hectares": 1854077 },
      { "driver": "Shifting Cultivation", "hectares": 203229  },
      { "driver": "Mining",               "hectares": 174605  },
      { "driver": "Settlements",          "hectares": 173315  },
      { "driver": "Wildfire",             "hectares": 66302   },
      { "driver": "Other",                "hectares": 36813   }
    ]
  },
  "layer": [
    {
      "mark": { "type": "bar", "cornerRadiusEnd": 3 },
      "encoding": {
        "y": {
          "field": "driver", "type": "nominal", "sort": "-x",
          "axis": { "title": null, "labelFontSize": 12 }
        },
        "x": {
          "field": "hectares", "type": "quantitative",
          "axis": {
            "title": "Total forest loss 2001–2024 (hectares)",
            "format": "~s",
            "grid": false
          }
        },
        "color": {
          "field": "driver", "type": "nominal",
          "scale": driverColorScale,
          "legend": null
        },
        "tooltip": [
          { "field": "driver",   "type": "nominal",      "title": "Driver"         },
          { "field": "hectares", "type": "quantitative", "title": "Total hectares", "format": ",.0f" }
        ]
      }
    },
    {
      "mark": {
        "type": "rule",
        "color": "#444",
        "strokeWidth": 2,
        "strokeDash": [6, 3]
      },
      "encoding": {
        "x": { "datum": 1358292, "type": "quantitative" }
      }
    },
    {
      "mark": {
        "type": "text",
        "color": "#444",
        "fontSize": 11,
        "dx": 6,
        "dy": 0,
        "align": "left",
        "baseline": "middle"
      },
      "encoding": {
        "x": { "datum": 1358292, "type": "quantitative" },
        "y": { "value": 10 },
        "text": { "value": "Mean per driver" }
      }
    }
  ],
  "view": { "stroke": null },
  "background": "transparent"
};

// ── Chart 7: Proportional Symbol Map ───────────────────────────────────
const symbolMapSpec = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": 600,
  "height": 400,
  "projection": { 
    "type": "mercator",
    "center": [109.5, 4.0],
    "scale": 1500
  },
  "layer": [
    {
      "data": { "sphere": true },
      "mark": {
        "type": "geoshape",
        "fill": "#c8dce8",
        "stroke": null
      }
    },
    {
      "data": { "graticule": true },
      "mark": {
        "type": "geoshape",
        "stroke": "#a0bfcc",
        "strokeWidth": 0.3,
        "fill": null
      }
    },
    {
      "data": {
        "url": "data/world-110m.json",
        "format": { "type": "topojson", "feature": "countries" }
      },
      "mark": {
        "type": "geoshape",
        "fill": "#7fb3c8",
        "stroke": "#666",
        "strokeWidth": 0.5
      }
    },
    {
      "data": {
        "url": "data/malaysia-states.geojson",
        "format": { "type": "json" }
      },
      "mark": {
        "type": "geoshape",
        "fill": null,
        "stroke": "#e8e4dc", 
        "strokeWidth": 1
      }
    },
    {
      "data": {
        "url": "data/species_cr_points.csv",
        "format": { "type": "csv" }
      },
      "mark": {
        "type": "circle",
        "opacity": 0.7,
        "size": 40,
        "color": "#D55E00"
      },
      "encoding": {
        "longitude": { "field": "lon", "type": "quantitative" },
        "latitude":  { "field": "lat", "type": "quantitative" },
        "tooltip": [
          { "field": "sci_name", "title": "Species" },
          { "field": "status",   "title": "Status"  }
        ]
      }
    }
  ],
  "view": { "stroke": null },
  "background": "transparent"
};


// ── Chart 8: Choropleth ───────────────────────────────────
const choroSpec = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": 600,
  "height": 400,
  "projection": { 
    "type": "mercator",
    "center": [108.5, 4.5],
    "scale": 1400
  },
  "layer": [
    {
      "data": { "sphere": true },
      "mark": { "type": "geoshape", "fill": "#c8dce8", "stroke": null }
    },
    {
      "data": { "graticule": true },
      "mark": { "type": "geoshape", "stroke": "#a0bfcc", "strokeWidth": 0.3, "fill": null }
    },
    {
      "data": {
        "url": "data/world-110m.json",
        "format": { "type": "topojson", "feature": "countries" }
      },
      "mark": { "type": "geoshape", "fill": "#7fb3c8", "stroke": "#666", "strokeWidth": 0.5 }
    },
    {
      "data": {
        "url": "data/malaysia-topo.json",
        "format": { "type": "topojson", "feature": "data" }
      },
      "mark": { "type": "geoshape", "stroke": "#ffffff", "strokeWidth": 1 },
      "encoding": {
        "color": {
          "field": "properties.total", "type": "quantitative",
          "scale": { "scheme": "greens", "domainMin": 0 },
          "legend": { "title": "Threatened species", "orient": "bottom-left" }
        },
        "tooltip": [
          { "field": "properties.shapeName", "title": "State"              },
          { "field": "properties.total",     "title": "Threatened species" },
          { "field": "properties.cr",        "title": "Critically Endangered" }
        ]
      }
    }
  ],
  "view": { "stroke": null },
  "background": "transparent"
};

// ── Chart 9: Small Multiples Map ─────────────────────────
function makeMiniMap(status, color) {
  return {
    "title": {
      "text": status,
      "fontSize": 13,
      "fontWeight": "bold",
      "color": "#2c3e2d"
    },
    "width": 340,
    "height": 230,
    "projection": { "type": "mercator" },
    "layer": [
      {
        "data": {
          "url": "data/malaysia-states.geojson"
        },
        "mark": {
          "type": "geoshape",
          "fill": "#e8e4dc",
          "stroke": "#aaa",
          "strokeWidth": 0.6
        }
      },
      {
        "data": {
          "url": "data/species_all_points.csv",
          "format": { "type": "csv" }
        },
        "transform": [
          { "filter": `datum.status === '${status}'` }
        ],
        "mark": {
          "type": "circle",
          "opacity": 0.55,
          "size": 20,
          "color": color
        },
        "encoding": {
          "longitude": { "field": "lon", "type": "quantitative" },
          "latitude":  { "field": "lat", "type": "quantitative" },
          "tooltip": [
            { "field": "sci_name", "title": "Species" },
            { "field": "status",   "title": "Threat Level" }
          ]
        }
      }
    ]
  };
}

const smallMultiplesSpec = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "background": "transparent",
  "hconcat": [
    {
      "title": { "text": "Vulnerable", "fontSize": 13, "fontWeight": "bold" },
      "width": 360, "height": 220,
      "projection": { "type": "mercator", "center": [90, 4.0], "scale": 480 },
      "layer": [
        { "data": { "sphere": true }, "mark": { "type": "geoshape", "fill": "#c8dce8", "stroke": null } },
        { "data": { "graticule": { "step": [5, 5] } }, "mark": { "type": "geoshape", "filled": false, "stroke": "#a8c4d8", "strokeWidth": 0.3 } },
        { "data": { "url": "data/world-110m.json", "format": { "type": "topojson", "feature": "countries" } }, "mark": { "type": "geoshape", "fill": "#7fb3c8", "stroke": "#666", "strokeWidth": 0.5 } },
        { "data": { "url": "data/malaysia-topo.json", "format": { "type": "topojson", "feature": "data" } }, "mark": { "type": "geoshape", "fill": "#e8e4dc", "stroke": "#aaa", "strokeWidth": 0.6 } },
        { "data": { "url": "data/species_all_points.csv", "format": { "type": "csv" } },
          "transform": [ { "filter": "datum.status === 'Vulnerable'" } ],
          "mark": { "type": "circle", "opacity": 0.55, "size": 18, "color": "#56B4E9" },
          "encoding": { "longitude": { "field": "lon", "type": "quantitative" }, "latitude": { "field": "lat", "type": "quantitative" }, "tooltip": [ { "field": "sci_name", "title": "Species" } ] }
        }
      ]
    },
    {
      "title": { "text": "Endangered", "fontSize": 13, "fontWeight": "bold" },
      "width": 360, "height": 220,
      "projection": { "type": "mercator", "center": [90, 4.0], "scale": 480 },
      "layer": [
        { "data": { "sphere": true }, "mark": { "type": "geoshape", "fill": "#c8dce8", "stroke": null } },
        { "data": { "graticule": { "step": [5, 5] } }, "mark": { "type": "geoshape", "filled": false, "stroke": "#a8c4d8", "strokeWidth": 0.3 } },
        { "data": { "url": "data/world-110m.json", "format": { "type": "topojson", "feature": "countries" } }, "mark": { "type": "geoshape", "fill": "#7fb3c8", "stroke": "#666", "strokeWidth": 0.5 } },
        { "data": { "url": "data/malaysia-topo.json", "format": { "type": "topojson", "feature": "data" } }, "mark": { "type": "geoshape", "fill": "#e8e4dc", "stroke": "#aaa", "strokeWidth": 0.6 } },
        { "data": { "url": "data/species_all_points.csv", "format": { "type": "csv" } },
          "transform": [ { "filter": "datum.status === 'Endangered'" } ],
          "mark": { "type": "circle", "opacity": 0.55, "size": 18, "color": "#E69F00" },
          "encoding": { "longitude": { "field": "lon", "type": "quantitative" }, "latitude": { "field": "lat", "type": "quantitative" }, "tooltip": [ { "field": "sci_name", "title": "Species" } ] }
        }
      ]
    },
    {
      "title": { "text": "Critically Endangered", "fontSize": 13, "fontWeight": "bold" },
      "width": 360, "height": 220,
      "projection": { "type": "mercator", "center": [90, 4.0], "scale": 480 },
      "layer": [
        { "data": { "sphere": true }, "mark": { "type": "geoshape", "fill": "#c8dce8", "stroke": null } },
        { "data": { "graticule": { "step": [5, 5] } }, "mark": { "type": "geoshape", "filled": false, "stroke": "#a8c4d8", "strokeWidth": 0.3 } },
        { "data": { "url": "data/world-110m.json", "format": { "type": "topojson", "feature": "countries" } }, "mark": { "type": "geoshape", "fill": "#7fb3c8", "stroke": "#666", "strokeWidth": 0.5 } },
        { "data": { "url": "data/malaysia-topo.json", "format": { "type": "topojson", "feature": "data" } }, "mark": { "type": "geoshape", "fill": "#e8e4dc", "stroke": "#aaa", "strokeWidth": 0.6 } },
        { "data": { "url": "data/species_all_points.csv", "format": { "type": "csv" } },
          "transform": [ { "filter": "datum.status === 'Critically Endangered'" } ],
          "mark": { "type": "circle", "opacity": 0.55, "size": 18, "color": "#D55E00" },
          "encoding": { "longitude": { "field": "lon", "type": "quantitative" }, "latitude": { "field": "lat", "type": "quantitative" }, "tooltip": [ { "field": "sci_name", "title": "Species" } ] }
        }
      ]
    }
  ],
  "config": { "view": { "stroke": null }, "concat": { "spacing": 16 } }
};


// ── Chart 11: Total Forest Loss per Year — Line + Annotation ──
const totalLossData = [
  { "year": 2001, "total": 332805 },
  { "year": 2002, "total": 312841 },
  { "year": 2003, "total": 184057 },
  { "year": 2004, "total": 352003 },
  { "year": 2005, "total": 375758 },
  { "year": 2006, "total": 334526 },
  { "year": 2007, "total": 405691 },
  { "year": 2008, "total": 368259 },
  { "year": 2009, "total": 623092 },
  { "year": 2010, "total": 430950 },
  { "year": 2011, "total": 463150 },
  { "year": 2012, "total": 628383 },
  { "year": 2013, "total": 333361 },
  { "year": 2014, "total": 646026 },
  { "year": 2015, "total": 454490 },
  { "year": 2016, "total": 565553 },
  { "year": 2017, "total": 483499 },
  { "year": 2018, "total": 438009 },
  { "year": 2019, "total": 395404 },
  { "year": 2020, "total": 268775 },
  { "year": 2021, "total": 277597 },
  { "year": 2022, "total": 248127 },
  { "year": 2023, "total": 308655 },
  { "year": 2024, "total": 282533 }
];

const lineAnnotationSpec = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": 580,
  "height": 300,
  "padding": { "left": 5, "top": 10, "right": 10, "bottom": 10 },
  "background": "transparent",
  "layer": [
    {
      "data": { "values": [ { "x1": 2019.5, "x2": 2024.5 } ] },
      "mark": { "type": "rect", "opacity": 0.08, "color": "#009E73" },
      "encoding": {
        "x":  { "field": "x1", "type": "quantitative", "scale": { "domain": [2001, 2024] } },
        "x2": { "field": "x2", "type": "quantitative" }
      }
    },
    {
      "data": { "values": totalLossData },
      "mark": { "type": "line", "strokeWidth": 2.5, "color": "#D55E00" },
      "encoding": {
        "x": {
          "field": "year", "type": "quantitative",
          "scale": { "domain": [2001, 2024] },
          "axis": { "title": null, "format": "d", "grid": false, "tickCount": 12, "labelAngle": -45 }
        },
        "y": {
          "field": "total", "type": "quantitative",
          "axis": { "title": null, "format": "~s", "grid": true, "gridColor": "#e8e4dc" }
        }
      }
    },
    {
      "data": { "values": totalLossData },
      "mark": { "type": "point", "filled": true, "size": 40, "color": "#D55E00" },
      "encoding": {
        "x": { "field": "year", "type": "quantitative" },
        "y": { "field": "total", "type": "quantitative" },
        "tooltip": [
          { "field": "year",  "title": "Year",          "format": "d"    },
          { "field": "total", "title": "Hectares lost", "format": ",.0f" }
        ]
      }
    },
    {
      "data": { "values": [ { "year": 2014, "total": 646026 } ] },
      "mark": { "type": "point", "filled": true, "size": 100, "color": "#D55E00", "strokeWidth": 2, "stroke": "#fff" },
      "encoding": {
        "x": { "field": "year",  "type": "quantitative" },
        "y": { "field": "total", "type": "quantitative" }
      }
    },
    {
      "data": { "values": [ { "year": 2014, "total": 646026, "label": "Peak: 646,000 ha lost in 2014" } ] },
      "mark": { "type": "text", "align": "left", "dx": 8, "dy": -10, "fontSize": 11, "fontWeight": "bold", "color": "#D55E00" },
      "encoding": {
        "x":    { "field": "year",  "type": "quantitative" },
        "y":    { "field": "total", "type": "quantitative" },
        "text": { "field": "label" }
      }
    },
    {
      "data": { "values": [ { "year": 2022, "total": 620000, "label": "Loss declining since 2020" } ] },
      "mark": { "type": "text", "align": "center", "fontSize": 11, "fontStyle": "italic", "color": "#009E73" },
      "encoding": {
        "x":    { "field": "year",  "type": "quantitative" },
        "y":    { "field": "total", "type": "quantitative" },
        "text": { "field": "label" }
      }
    }
  ]
};

// ── Chart 12: Dumbbell Chart  ────────
const dumbbellData = [
  { "group": "Flowering Plants", "cr": 167, "stable": 149 },
  { "group": "Monocots",         "cr": 44,  "stable": 23  },
  { "group": "Reptiles",         "cr": 23,  "stable": 5   },
  { "group": "Sharks & Rays",    "cr": 23,  "stable": 0   },
  { "group": "Mammals",          "cr": 13,  "stable": 1   },
  { "group": "Birds",            "cr": 13,  "stable": 0   },
  { "group": "Amphibians",       "cr": 9,   "stable": 1   },
  { "group": "Fish",             "cr": 8,   "stable": 0   }
];

const dumbbellSpec = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": 530,
  "height": 300,
  "background": "transparent",
  "data": { "values": dumbbellData },
  "layer": [
    {
      "mark": { "type": "rule", "strokeWidth": 2, "color": "#ccc" },
      "encoding": {
        "y":  { "field": "group", "type": "nominal", "sort": { "field": "cr", "order": "descending" }, "axis": { "title": null, "labelFontSize": 12 } },
        "x":  { "field": "stable", "type": "quantitative" },
        "x2": { "field": "cr",     "type": "quantitative" }
      }
    },
    {
      "mark": { "type": "point", "filled": true, "size": 100 },
      "encoding": {
        "y": { "field": "group", "type": "nominal", "sort": { "field": "cr", "order": "descending" } },
        "x": { "field": "stable", "type": "quantitative",
               "axis": { "title": "Number of species", "grid": false } },
        "color": { "value": "#009E73" },
        "tooltip": [
          { "field": "group",  "title": "Species group"     },
          { "field": "stable", "title": "Stable population" }
        ]
      }
    },
    {
      "mark": { "type": "point", "filled": true, "size": 100 },
      "encoding": {
        "y": { "field": "group", "type": "nominal", "sort": { "field": "cr", "order": "descending" } },
        "x": { "field": "cr", "type": "quantitative" },
        "color": { "value": "#D55E00" },
        "tooltip": [
          { "field": "group", "title": "Species group"         },
          { "field": "cr",    "title": "Critically Endangered" }
        ]
      }
    }
  ]
};

// ── Chart 13: Diverging Bar — Decreasing vs Stable ───────
const divergingData = [
  { "group": "Flowering Plants", "decreasing": -563, "stable": 149 },
  { "group": "Corals",           "decreasing": -223, "stable": 0   },
  { "group": "Monocots",         "decreasing": -130, "stable": 23  },
  { "group": "Sharks & Rays",    "decreasing": -110, "stable": 0   },
  { "group": "Mammals",          "decreasing": -99,  "stable": 1   },
  { "group": "Birds",            "decreasing": -79,  "stable": 0   },
  { "group": "Fish",             "decreasing": -58,  "stable": 0   },
  { "group": "Insects",          "decreasing": -55,  "stable": 0   },
  { "group": "Amphibians",       "decreasing": -33,  "stable": 1   },
  { "group": "Reptiles",         "decreasing": -28,  "stable": 5   }
];

const divergingSpec = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": 530,
  "height": 300,
  "background": "transparent",
  "data": { "values": divergingData },
  "layer": [
    {
      "mark": { "type": "bar", "cornerRadiusEnd": 3 },
      "encoding": {
        "y": {
          "field": "group", "type": "nominal",
          "sort": "x",
          "axis": { "title": null, "labelFontSize": 12 }
        },
        "x": {
          "field": "decreasing", "type": "quantitative",
          "axis": { "title": "← Decreasing          Stable →", "grid": false, "format": "d",
                    "values": [-600, -400, -200, 0, 50, 100, 150] }
        },
        "color": { "value": "#D55E00" },
        "tooltip": [
          { "field": "group",      "title": "Species group"       },
          { "field": "decreasing", "title": "Decreasing", "format": "d" }
        ]
      }
    },
    {
      "mark": { "type": "bar", "cornerRadiusEnd": 3 },
      "encoding": {
        "y": {
          "field": "group", "type": "nominal",
          "sort": "x"
        },
        "x": {
          "field": "stable", "type": "quantitative"
        },
        "color": { "value": "#009E73" },
        "tooltip": [
          { "field": "group",  "title": "Species group"     },
          { "field": "stable", "title": "Stable population" }
        ]
      }
    },
    {
      "mark": { "type": "rule", "color": "#333", "strokeWidth": 1.5 },
      "encoding": {
        "x": { "datum": 0, "type": "quantitative" }
      }
    }
  ]
};


// ── Render ────────────────────────────────────────────────

const embedOpt = { renderer: "svg", actions: false }; 
vegaEmbed("#chart1", donutSpec,       embedOpt);
vegaEmbed("#chart2", stackedBarSpec,  embedOpt);
vegaEmbed("#chart2b", normalizedBarSpec, embedOpt);
vegaEmbed("#chart3", heatmapSpec, embedOpt);
vegaEmbed("#chart4", lollipopSpec,   embedOpt);
vegaEmbed("#chart5", stackedAreaSpec,  embedOpt);
vegaEmbed("#chart6", driverBarSpec, embedOpt);
vegaEmbed("#chart7", symbolMapSpec, embedOpt);
vegaEmbed("#chart8", choroSpec,     embedOpt);
vegaEmbed("#chart9", smallMultiplesSpec, embedOpt);
vegaEmbed("#chart11", lineAnnotationSpec, embedOpt);
vegaEmbed("#chart12", dumbbellSpec, embedOpt);
vegaEmbed("#chart13", divergingSpec, embedOpt);