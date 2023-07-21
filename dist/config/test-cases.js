"use strict";

module.exports = [
/*
 *    TEST N°1
 */
{
  string: "welcome AND bye",

  // TREE
  tree: {
    lexeme: {
      type: "and"
    },
    left: {
      lexeme: {
        type: "string",
        value: "welcome"
      },
      left: null,
      right: null
    },
    right: {
      lexeme: {
        type: "string",
        value: "bye"
      },
      left: null,
      right: null
    }
  },

  // QUERY
  query: {
    type: "and",
    values: [{
      type: "string",
      value: "welcome"
    }, {
      type: "string",
      value: "bye"
    }]
  },

  values: ["welcome", "bye"]
},

/*
 *    TEST N°2
 */
{
  string: "welcome OR bye",

  // TREE
  tree: {
    lexeme: {
      type: "or"
    },
    left: {
      lexeme: {
        type: "string",
        value: "welcome"
      },
      left: null,
      right: null
    },
    right: {
      lexeme: {
        type: "string",
        value: "bye"
      },
      left: null,
      right: null
    }
  },

  // QUERY
  query: {
    type: "or",
    values: [{
      type: "string",
      value: "welcome"
    }, {
      type: "string",
      value: "bye"
    }]
  },

  values: ["welcome", "bye"]
},

/*
 *    TEST N°3
 */
{
  string: "welcome AND bye AND hello",

  // TREE
  tree: {
    lexeme: {
      type: "and"
    },
    left: {
      lexeme: {
        type: "string",
        value: "welcome"
      },
      left: null,
      right: null
    },
    right: {
      lexeme: {
        type: "and"
      },
      left: {
        lexeme: {
          type: "string",
          value: "bye"
        },
        left: null,
        right: null
      },
      right: {
        lexeme: {
          type: "string",
          value: "hello"
        },
        left: null,
        right: null
      }
    }
  },

  // QUERY
  query: {
    type: "and",
    values: [{
      type: "string",
      value: "welcome"
    }, {
      type: "string",
      value: "bye"
    }, {
      type: "string",
      value: "hello"
    }]
  },

  values: ["welcome", "bye", "hello"]
},

/*
 *    TEST N°4
 */
{
  string: "welcome OR bye AND hello",

  // TREE
  tree: {
    lexeme: {
      type: "or"
    },
    left: {
      lexeme: {
        type: "string",
        value: "welcome"
      },
      left: null,
      right: null
    },
    right: {
      lexeme: {
        type: "and"
      },
      left: {
        lexeme: {
          type: "string",
          value: "bye"
        },
        left: null,
        right: null
      },
      right: {
        lexeme: {
          type: "string",
          value: "hello"
        },
        left: null,
        right: null
      }
    }
  },

  // QUERY
  query: {
    type: "or",
    values: [{
      type: "string",
      value: "welcome"
    }, {
      type: "and",
      values: [{
        type: "string",
        value: "bye"
      }, {
        type: "string",
        value: "hello"
      }]
    }]
  },

  values: ["welcome", "bye", "hello"]
},

/*
 *    TEST N°5
 */
{
  string: "welcome AND bye OR hello",

  // TREE
  tree: {
    lexeme: {
      type: "or"
    },
    left: {
      lexeme: {
        type: "and"
      },
      left: {
        lexeme: {
          type: "string",
          value: "welcome"
        },
        left: null,
        right: null
      },
      right: {
        lexeme: {
          type: "string",
          value: "bye"
        },
        left: null,
        right: null
      }
    },
    right: {
      lexeme: {
        type: "string",
        value: "hello"
      },
      left: null,
      right: null
    }
  },

  // QUERY
  query: {
    type: "or",
    values: [{
      type: "and",
      values: [{
        type: "string",
        value: "welcome"
      }, {
        type: "string",
        value: "bye"
      }]
    }, {
      type: "string",
      value: "hello"
    }]
  },

  values: ["welcome", "bye", "hello"]
},

/*
 *    TEST N°6
 */
{
  string: "(welcome OR bye) AND hello",

  // TREE
  tree: {
    lexeme: {
      type: "and"
    },
    left: {
      lexeme: {
        type: "or"
      },
      left: {
        lexeme: {
          type: "string",
          value: "welcome"
        },
        left: null,
        right: null
      },
      right: {
        lexeme: {
          type: "string",
          value: "bye"
        },
        left: null,
        right: null
      }
    },
    right: {
      lexeme: {
        type: "string",
        value: "hello"
      },
      left: null,
      right: null
    }
  },

  // QUERY
  query: {
    type: "and",
    values: [{
      type: "or",
      values: [{
        type: "string",
        value: "welcome"
      }, {
        type: "string",
        value: "bye"
      }]
    }, {
      type: "string",
      value: "hello"
    }]
  },

  values: ["welcome", "bye", "hello"]
},

/*
 *    TEST N°7
 */
{
  string: "(welcome OR bye) AND (hello OR ahoy)",

  // TREE
  tree: {
    lexeme: {
      type: "and"
    },
    left: {
      lexeme: {
        type: "or"
      },
      left: {
        lexeme: {
          type: "string",
          value: "welcome"
        },
        left: null,
        right: null
      },
      right: {
        lexeme: {
          type: "string",
          value: "bye"
        },
        left: null,
        right: null
      }
    },
    right: {
      lexeme: {
        type: "or"
      },
      left: {
        lexeme: {
          type: "string",
          value: "hello"
        },
        left: null,
        right: null
      },
      right: {
        lexeme: {
          type: "string",
          value: "ahoy"
        },
        left: null,
        right: null
      }
    }
  },

  // QUERY
  query: {
    type: "and",
    values: [{
      type: "or",
      values: [{
        type: "string",
        value: "welcome"
      }, {
        type: "string",
        value: "bye"
      }]
    }, {
      type: "or",
      values: [{
        type: "string",
        value: "hello"
      }, {
        type: "string",
        value: "ahoy"
      }]
    }]
  },

  values: ["welcome", "bye", "hello", "ahoy"]
},

/*
 *    TEST N°8
 */
{
  string: '"hello there" OR "welcome here"',

  // TREE
  tree: {
    lexeme: {
      type: "or"
    },
    left: {
      lexeme: {
        type: "string",
        value: "hello there"
      },
      left: null,
      right: null
    },
    right: {
      lexeme: {
        type: "string",
        value: "welcome here"
      },
      left: null,
      right: null
    }
  },

  // QUERY
  query: {
    type: "or",
    values: [{
      type: "string",
      value: "hello there"
    }, {
      type: "string",
      value: "welcome here"
    }]
  },

  values: ["hello there", "welcome here"]
},

/*
 *    TEST N°9
 */
{
  string: '"hello there" OR welcome here',

  // TREE
  tree: {
    lexeme: {
      type: "or"
    },
    left: {
      lexeme: {
        type: "string",
        value: "hello there"
      },
      left: null,
      right: null
    },
    right: {
      lexeme: {
        type: "and"
      },
      left: {
        lexeme: {
          type: "string",
          value: "welcome"
        },
        left: null,
        right: null
      },
      right: {
        lexeme: {
          type: "string",
          value: "here"
        },
        left: null,
        right: null
      }
    }
  },

  // QUERY
  query: {
    type: "or",
    values: [{
      type: "string",
      value: "hello there"
    }, {
      type: "and",
      values: [{
        type: "string",
        value: "welcome"
      }, {
        type: "string",
        value: "here"
      }]
    }]
  },

  values: ["hello there", "welcome", "here"]
},

/*
 *    TEST N°10
 */
{
  string: '"hello OR there"',

  // TREE
  tree: {
    lexeme: {
      type: "string",
      value: "hello OR there"
    },
    left: null,
    right: null
  },

  // QUERY
  query: {
    type: "string",
    value: "hello OR there"
  },

  values: ["hello OR there"]
},

/*
 *    TEST N°11
 */
{
  string: '"hello there" AND ("welcome here" OR ahoy)',

  // TREE
  tree: {
    lexeme: {
      type: "and"
    },
    left: {
      lexeme: {
        type: "string",
        value: "hello there"
      },
      left: null,
      right: null
    },
    right: {
      lexeme: {
        type: "or"
      },
      left: {
        lexeme: {
          type: "string",
          value: "welcome here"
        },
        left: null,
        right: null
      },
      right: {
        lexeme: {
          type: "string",
          value: "ahoy"
        },
        left: null,
        right: null
      }
    }
  },

  // QUERY
  query: {
    type: "and",
    values: [{
      type: "string",
      value: "hello there"
    }, {
      type: "or",
      values: [{
        type: "string",
        value: "welcome here"
      }, {
        type: "string",
        value: "ahoy"
      }]
    }]
  },

  values: ["hello there", "welcome here", "ahoy"]
},

/*
 *    TEST N°12
 */
{
  string: '"hello (" AND ") there"',

  // TREE
  tree: {
    lexeme: {
      type: "and"
    },
    left: {
      lexeme: {
        type: "string",
        value: "hello ("
      },
      left: null,
      right: null
    },
    right: {
      lexeme: {
        type: "string",
        value: ") there"
      },
      left: null,
      right: null
    }
  },

  // QUERY
  query: {
    type: "and",
    values: [{
      type: "string",
      value: "hello ("
    }, {
      type: "string",
      value: ") there"
    }]
  },

  values: ["hello (", ") there"]
},

/*
 *    TEST N°13
 */
{
  string: "hello (welcome)",

  // TREE
  tree: {
    lexeme: {
      type: "and"
    },
    left: {
      lexeme: {
        type: "string",
        value: "hello"
      },
      left: null,
      right: null
    },
    right: {
      lexeme: {
        type: "string",
        value: "welcome"
      },
      left: null,
      right: null
    }
  },

  // QUERY
  query: {
    type: "and",
    values: [{
      type: "string",
      value: "hello"
    }, {
      type: "string",
      value: "welcome"
    }]
  },

  values: ["hello", "welcome"]
},

/*
 *    TEST N°14
 */
{
  string: "\\(hello bye\\) welcome",

  // TREE
  tree: {
    lexeme: {
      type: "and"
    },
    left: {
      lexeme: {
        type: "string",
        value: "(hello"
      },
      left: null,
      right: null
    },
    right: {
      lexeme: {
        type: "and"
      },
      left: {
        lexeme: {
          type: "string",
          value: "bye)"
        },
        left: null,
        right: null
      },
      right: {
        lexeme: {
          type: "string",
          value: "welcome"
        },
        left: null,
        right: null
      }
    }
  },

  // QUERY
  query: {
    type: "and",
    values: [{
      type: "string",
      value: "(hello"
    }, {
      type: "string",
      value: "bye)"
    }, {
      type: "string",
      value: "welcome"
    }]
  },

  values: ["(hello", "bye)", "welcome"]
},

/*
 *    TEST N°15
 */
{
  string: "hello\\ \\OR\\ there",

  // TREE
  tree: {
    lexeme: {
      type: "string",
      value: "hello OR there"
    },
    left: null,
    right: null
  },

  // QUERY
  query: {
    type: "string",
    value: "hello OR there"
  },

  values: ["hello OR there"]
},

/*
 *    TEST N°15
 */
{
  string: '"(welcome hello)"',

  // TREE
  tree: {
    lexeme: {
      type: "string",
      value: "(welcome hello)"
    },
    left: null,
    right: null
  },

  // QUERY
  query: {
    type: "string",
    value: "(welcome hello)"
  },

  values: ["(welcome hello)"]
},

/*
 *    TEST N°17
 */
{
  string: '("hello',
  err: "Can't reach end of quoted string"
},

/*
 *    TEST N°18
 */
{
  string: ')" bye" (',
  err: "end of string just after startBlock"
},

/*
 *    TEST N°19
 */
{
  string: 'test"',
  err: "Can't reach end of quoted string"
},

/*
 *    TEST N°20
 */
{
  string: "bye)",
  err: "Unexpected token endBlock"
},

/*
 *    TEST N°21
 */
{
  string: "",

  // TREE
  tree: {},

  // QUERY
  query: {}
},

/*
 *    TEST N°22
 */
{
  string: "and test",
  err: "Nothing before and block, values: test"
},

/*
 *    TEST N°23
 */
{
  string: "or test",
  err: "Nothing before or block, values: test"
},

/*
 *    TEST N°24
 */
{
  string: "android",

  // TREE
  tree: {
    lexeme: {
      type: "string",
      value: "android"
    },
    left: null,
    right: null
  },

  // QUERY
  query: {
    type: "string",
    value: "android"
  },

  values: ["android"]
},

/*
 *    TEST N°25
 */
{
  string: "orroid",

  // TREE
  tree: {
    lexeme: {
      type: "string",
      value: "orroid"
    },
    left: null,
    right: null
  },

  // QUERY
  query: {
    type: "string",
    value: "orroid"
  },

  values: ["orroid"]
},

/*
 *    TEST N°26
 */
{
  string: "()",
  err: "Empty block"
}, {
  string: "NOT welcome",

  // TREE
  err: "Nothing before not block, values: welcome"
},

/*
 *    TEST N°27
 */
{
  string: "NOT (welcome AND bye)",

  // TREE
  err: "Nothing before not block, values: (,welcome,AND,bye,)"
},

/*
 *    TEST N°28
 */
{
  string: "NOT welcome AND bye",

  // TREE
  err: "Nothing before not block, values: welcome,AND,bye"
},
/*
 *    TEST N°29
 */
{
  string: "NOT (welcome OR bye)",

  // TREE
  err: "Nothing before not block, values: (,welcome,OR,bye,)"
},
/*
 *    TEST N°30
 */
{
  string: "NOT welcome OR bye",

  // TREE
  err: "Nothing before not block, values: welcome,OR,bye"
},
/*
 *    TEST N°31
 */
{
  string: "welcome NOT bye",

  // TREE
  tree: {
    lexeme: { type: "not" },
    left: {
      lexeme: { type: "string", value: "welcome" },
      left: null,
      right: null
    },
    right: {
      lexeme: { type: "string", value: "bye" },
      left: null,
      right: null
    }
  },

  // QUERY
  query: {
    type: "not",
    values: [{
      type: "string",
      value: "welcome"
    }, {
      type: "string",
      value: "bye"
    }]
  },

  values: ["welcome", "bye"]
},
/*
 *    TEST N°32
 */
{
  string: "welcome NOT (bye)",

  // TREE
  tree: {
    lexeme: { type: "not" },
    left: {
      lexeme: { type: "string", value: "welcome" },
      left: null,
      right: null
    },
    right: {
      lexeme: { type: "string", value: "bye" },
      left: null,
      right: null
    }
  },

  // QUERY
  query: {
    type: "not",
    values: [{
      type: "string",
      value: "welcome"
    }, {
      type: "string",
      value: "bye"
    }]
  },

  values: ["welcome", "bye"]
},
/*
 *    TEST N°33
 */
{
  string: "welcome NOT (hello AND bye)",

  // TREE
  tree: {
    lexeme: { type: "not" },
    left: {
      lexeme: { type: "string", value: "welcome" },
      left: null,
      right: null
    },
    right: {
      lexeme: { type: "and" },
      left: {
        lexeme: { type: "string", value: "hello" },
        left: null,
        right: null
      },
      right: {
        lexeme: { type: "string", value: "bye" },
        left: null,
        right: null
      }
    }
  },

  // QUERY
  query: {
    type: "not",
    values: [{ type: "string", value: "welcome" }, {
      type: "and",
      values: [{ type: "string", value: "hello" }, { type: "string", value: "bye" }]
    }]
  },

  values: ["welcome", "hello", "bye"]
},
/*
 *    TEST N°34
 */
{
  string: "welcome NOT (hello OR bye)",

  // TREE
  tree: {
    lexeme: { type: "not" },
    left: {
      lexeme: { type: "string", value: "welcome" },
      left: null,
      right: null
    },
    right: {
      lexeme: { type: "or" },
      left: {
        lexeme: { type: "string", value: "hello" },
        left: null,
        right: null
      },
      right: {
        lexeme: { type: "string", value: "bye" },
        left: null,
        right: null
      }
    }
  },

  // QUERY
  query: {
    type: "not",
    values: [{ type: "string", value: "welcome" }, {
      type: "or",
      values: [{ type: "string", value: "hello" }, { type: "string", value: "bye" }]
    }]
  },

  values: ["welcome", "hello", "bye"]
},
/*
 *    TEST N°35
 */
{
  string: 'welcome NOT ("hello world" AND bye)',

  // TREE
  tree: {
    lexeme: { type: "not" },
    left: {
      lexeme: { type: "string", value: "welcome" },
      left: null,
      right: null
    },
    right: {
      lexeme: { type: "and" },
      left: {
        lexeme: { type: "string", value: "hello world" },
        left: null,
        right: null
      },
      right: {
        lexeme: { type: "string", value: "bye" },
        left: null,
        right: null
      }
    }
  },

  // QUERY
  query: {
    type: "not",
    values: [{ type: "string", value: "welcome" }, {
      type: "and",
      values: [{ type: "string", value: "hello world" }, { type: "string", value: "bye" }]
    }]
  },

  values: ["welcome", "hello world", "bye"]
},
/*
 *    TEST N°36
 */
{
  string: 'welcome NOT ("hello world" AND "bye bye")',

  // TREE
  tree: {
    lexeme: {
      type: "not"
    },
    left: {
      lexeme: {
        type: "string",
        value: "welcome"
      },
      left: null,
      right: null
    },
    right: {
      lexeme: {
        type: "and"
      },
      left: {
        lexeme: {
          type: "string",
          value: "hello world"
        },
        left: null,
        right: null
      },
      right: {
        lexeme: {
          type: "string",
          value: "bye bye"
        },
        left: null,
        right: null
      }
    }
  },

  // QUERY
  query: {
    type: "not",
    values: [{ type: "string", value: "welcome" }, {
      type: "and",
      values: [{ type: "string", value: "hello world" }, { type: "string", value: "bye bye" }]
    }]
  },

  values: ["welcome", "hello world", "bye bye"]
},
/*
 *    TEST N°37
 */
{
  string: "(welcome AND hello) NOT bye",

  // TREE
  tree: {
    lexeme: { type: "not" },
    left: {
      lexeme: { type: "and" },
      left: {
        lexeme: { type: "string", value: "welcome" },
        left: null,
        right: null
      },
      right: {
        lexeme: { type: "string", value: "hello" },
        left: null,
        right: null
      }
    },
    right: {
      lexeme: { type: "string", value: "bye" },
      left: null,
      right: null
    }
  },

  // QUERY
  query: {
    type: "not",
    values: [{
      type: "and",
      values: [{ type: "string", value: "welcome" }, { type: "string", value: "hello" }]
    }, { type: "string", value: "bye" }]
  },

  values: ["welcome", "hello", "bye"]
},
/*
 *    TEST N°38
 */
{
  string: "(welcome OR hello) NOT bye",

  // TREE
  tree: {
    lexeme: { type: "not" },
    left: {
      lexeme: { type: "or" },
      left: {
        lexeme: { type: "string", value: "welcome" },
        left: null,
        right: null
      },
      right: {
        lexeme: { type: "string", value: "hello" },
        left: null,
        right: null
      }
    },
    right: {
      lexeme: { type: "string", value: "bye" },
      left: null,
      right: null
    }
  },

  // QUERY
  query: {
    type: "not",
    values: [{
      type: "or",
      values: [{ type: "string", value: "welcome" }, { type: "string", value: "hello" }]
    }, { type: "string", value: "bye" }]
  },

  values: ["welcome", "hello", "bye"]
},
/*
 *    TEST N°39
 */
{
  string: "(welcome AND hello) NOT (bye AND hi)",

  // TREE
  tree: {
    lexeme: { type: "not" },
    left: {
      lexeme: { type: "and" },
      left: {
        lexeme: { type: "string", value: "welcome" },
        left: null,
        right: null
      },
      right: {
        lexeme: { type: "string", value: "hello" },
        left: null,
        right: null
      }
    },
    right: {
      lexeme: { type: "and" },
      left: {
        lexeme: { type: "string", value: "bye" },
        left: null,
        right: null
      },
      right: {
        lexeme: { type: "string", value: "hi" },
        left: null,
        right: null
      }
    }
  },

  // QUERY
  query: {
    type: "not",
    values: [{
      type: "and",
      values: [{ type: "string", value: "welcome" }, { type: "string", value: "hello" }]
    }, {
      type: "and",
      values: [{ type: "string", value: "bye" }, { type: "string", value: "hi" }]
    }]
  },

  values: ["welcome", "hello", "bye", "hi"]
},
/*
 *    TEST N°40
 */
{
  string: "(welcome OR hello) NOT (bye AND hi)",

  // TREE
  tree: {
    lexeme: {
      type: "not"
    },
    left: {
      lexeme: {
        type: "or"
      },
      left: {
        lexeme: {
          type: "string",
          value: "welcome"
        },
        left: null,
        right: null
      },
      right: {
        lexeme: {
          type: "string",
          value: "hello"
        },
        left: null,
        right: null
      }
    },
    right: {
      lexeme: {
        type: "and"
      },
      left: {
        lexeme: {
          type: "string",
          value: "bye"
        },
        left: null,
        right: null
      },
      right: {
        lexeme: {
          type: "string",
          value: "hi"
        },
        left: null,
        right: null
      }
    }
  },

  // QUERY
  query: {
    type: "not",
    values: [{
      type: "or",
      values: [{ type: "string", value: "welcome" }, { type: "string", value: "hello" }]
    }, {
      type: "and",
      values: [{ type: "string", value: "bye" }, { type: "string", value: "hi" }]
    }]
  },

  values: ["welcome", "hello", "bye", "hi"]
},
/*
 *    TEST N°41
 */
{
  string: "(welcome OR hello) NOT (bye OR hi)",

  // TREE
  tree: {
    lexeme: { type: "not" },
    left: {
      lexeme: { type: "or" },
      left: {
        lexeme: { type: "string", value: "welcome" },
        left: null,
        right: null
      },
      right: {
        lexeme: { type: "string", value: "hello" },
        left: null,
        right: null
      }
    },
    right: {
      lexeme: { type: "or" },
      left: {
        lexeme: { type: "string", value: "bye" },
        left: null,
        right: null
      },
      right: {
        lexeme: { type: "string", value: "hi" },
        left: null,
        right: null
      }
    }
  },

  // QUERY
  query: {
    type: "not",
    values: [{
      type: "or",
      values: [{ type: "string", value: "welcome" }, { type: "string", value: "hello" }]
    }, {
      type: "or",
      values: [{ type: "string", value: "bye" }, { type: "string", value: "hi" }]
    }]
  },

  values: ["welcome", "hello", "bye", "hi"]
}, {
  string: "AND NOT welcome",

  // TREE
  err: "Nothing before not block, values: welcome"
},

/*
 *    TEST N°27
 */
{
  string: "AND NOT (welcome AND bye)",

  // TREE
  err: "Nothing before not block, values: (,welcome,AND,bye,)"
}, {
  string: "AND NOT welcome AND bye",

  // TREE
  err: "Nothing before not block, values: welcome,AND,bye"
}, {
  string: "AND NOT (welcome OR bye)",

  // TREE
  err: "Nothing before not block, values: (,welcome,OR,bye,)"
}, {
  string: "AND NOT welcome OR bye",

  // TREE
  err: "Nothing before not block, values: welcome,OR,bye"
}, {
  string: "welcome AND NOT bye",

  // TREE
  tree: {
    lexeme: { type: "not" },
    left: {
      lexeme: { type: "string", value: "welcome" },
      left: null,
      right: null
    },
    right: {
      lexeme: { type: "string", value: "bye" },
      left: null,
      right: null
    }
  },

  // QUERY
  query: {
    type: "not",
    values: [{
      type: "string",
      value: "welcome"
    }, {
      type: "string",
      value: "bye"
    }]
  },

  values: ["welcome", "bye"]
}, {
  string: "welcome AND NOT (bye)",

  // TREE
  tree: {
    lexeme: { type: "not" },
    left: {
      lexeme: { type: "string", value: "welcome" },
      left: null,
      right: null
    },
    right: {
      lexeme: { type: "string", value: "bye" },
      left: null,
      right: null
    }
  },

  // QUERY
  query: {
    type: "not",
    values: [{
      type: "string",
      value: "welcome"
    }, {
      type: "string",
      value: "bye"
    }]
  },

  values: ["welcome", "bye"]
}, {
  string: "welcome AND NOT (hello AND bye)",

  // TREE
  tree: {
    lexeme: { type: "not" },
    left: {
      lexeme: { type: "string", value: "welcome" },
      left: null,
      right: null
    },
    right: {
      lexeme: { type: "and" },
      left: {
        lexeme: { type: "string", value: "hello" },
        left: null,
        right: null
      },
      right: {
        lexeme: { type: "string", value: "bye" },
        left: null,
        right: null
      }
    }
  },

  // QUERY
  query: {
    type: "not",
    values: [{ type: "string", value: "welcome" }, {
      type: "and",
      values: [{ type: "string", value: "hello" }, { type: "string", value: "bye" }]
    }]
  },

  values: ["welcome", "hello", "bye"]
}, {
  string: "welcome AND NOT (hello OR bye)",

  // TREE
  tree: {
    lexeme: { type: "not" },
    left: {
      lexeme: { type: "string", value: "welcome" },
      left: null,
      right: null
    },
    right: {
      lexeme: { type: "or" },
      left: {
        lexeme: { type: "string", value: "hello" },
        left: null,
        right: null
      },
      right: {
        lexeme: { type: "string", value: "bye" },
        left: null,
        right: null
      }
    }
  },

  // QUERY
  query: {
    type: "not",
    values: [{ type: "string", value: "welcome" }, {
      type: "or",
      values: [{ type: "string", value: "hello" }, { type: "string", value: "bye" }]
    }]
  },

  values: ["welcome", "hello", "bye"]
}, {
  string: 'welcome AND NOT ("hello world" AND bye)',

  // TREE
  tree: {
    lexeme: { type: "not" },
    left: {
      lexeme: { type: "string", value: "welcome" },
      left: null,
      right: null
    },
    right: {
      lexeme: { type: "and" },
      left: {
        lexeme: { type: "string", value: "hello world" },
        left: null,
        right: null
      },
      right: {
        lexeme: { type: "string", value: "bye" },
        left: null,
        right: null
      }
    }
  },

  // QUERY
  query: {
    type: "not",
    values: [{ type: "string", value: "welcome" }, {
      type: "and",
      values: [{ type: "string", value: "hello world" }, { type: "string", value: "bye" }]
    }]
  },

  values: ["welcome", "hello world", "bye"]
}, {
  string: 'welcome AND NOT ("hello world" AND "bye bye")',

  // TREE
  tree: {
    lexeme: {
      type: "not"
    },
    left: {
      lexeme: {
        type: "string",
        value: "welcome"
      },
      left: null,
      right: null
    },
    right: {
      lexeme: {
        type: "and"
      },
      left: {
        lexeme: {
          type: "string",
          value: "hello world"
        },
        left: null,
        right: null
      },
      right: {
        lexeme: {
          type: "string",
          value: "bye bye"
        },
        left: null,
        right: null
      }
    }
  },

  // QUERY
  query: {
    type: "not",
    values: [{ type: "string", value: "welcome" }, {
      type: "and",
      values: [{ type: "string", value: "hello world" }, { type: "string", value: "bye bye" }]
    }]
  },

  values: ["welcome", "hello world", "bye bye"]
}, {
  string: "(welcome AND hello) AND NOT bye",

  // TREE
  tree: {
    lexeme: { type: "not" },
    left: {
      lexeme: { type: "and" },
      left: {
        lexeme: { type: "string", value: "welcome" },
        left: null,
        right: null
      },
      right: {
        lexeme: { type: "string", value: "hello" },
        left: null,
        right: null
      }
    },
    right: {
      lexeme: { type: "string", value: "bye" },
      left: null,
      right: null
    }
  },

  // QUERY
  query: {
    type: "not",
    values: [{
      type: "and",
      values: [{ type: "string", value: "welcome" }, { type: "string", value: "hello" }]
    }, { type: "string", value: "bye" }]
  },

  values: ["welcome", "hello", "bye"]
}, {
  string: "(welcome OR hello) AND NOT bye",

  // TREE
  tree: {
    lexeme: { type: "not" },
    left: {
      lexeme: { type: "or" },
      left: {
        lexeme: { type: "string", value: "welcome" },
        left: null,
        right: null
      },
      right: {
        lexeme: { type: "string", value: "hello" },
        left: null,
        right: null
      }
    },
    right: {
      lexeme: { type: "string", value: "bye" },
      left: null,
      right: null
    }
  },

  // QUERY
  query: {
    type: "not",
    values: [{
      type: "or",
      values: [{ type: "string", value: "welcome" }, { type: "string", value: "hello" }]
    }, { type: "string", value: "bye" }]
  },

  values: ["welcome", "hello", "bye"]
}, {
  string: "(welcome AND hello) AND NOT (bye AND hi)",

  // TREE
  tree: {
    lexeme: { type: "not" },
    left: {
      lexeme: { type: "and" },
      left: {
        lexeme: { type: "string", value: "welcome" },
        left: null,
        right: null
      },
      right: {
        lexeme: { type: "string", value: "hello" },
        left: null,
        right: null
      }
    },
    right: {
      lexeme: { type: "and" },
      left: {
        lexeme: { type: "string", value: "bye" },
        left: null,
        right: null
      },
      right: {
        lexeme: { type: "string", value: "hi" },
        left: null,
        right: null
      }
    }
  },

  // QUERY
  query: {
    type: "not",
    values: [{
      type: "and",
      values: [{ type: "string", value: "welcome" }, { type: "string", value: "hello" }]
    }, {
      type: "and",
      values: [{ type: "string", value: "bye" }, { type: "string", value: "hi" }]
    }]
  },

  values: ["welcome", "hello", "bye", "hi"]
}, {
  string: "(welcome OR hello) AND NOT (bye AND hi)",

  // TREE
  tree: {
    lexeme: {
      type: "not"
    },
    left: {
      lexeme: {
        type: "or"
      },
      left: {
        lexeme: {
          type: "string",
          value: "welcome"
        },
        left: null,
        right: null
      },
      right: {
        lexeme: {
          type: "string",
          value: "hello"
        },
        left: null,
        right: null
      }
    },
    right: {
      lexeme: {
        type: "and"
      },
      left: {
        lexeme: {
          type: "string",
          value: "bye"
        },
        left: null,
        right: null
      },
      right: {
        lexeme: {
          type: "string",
          value: "hi"
        },
        left: null,
        right: null
      }
    }
  },

  // QUERY
  query: {
    type: "not",
    values: [{
      type: "or",
      values: [{ type: "string", value: "welcome" }, { type: "string", value: "hello" }]
    }, {
      type: "and",
      values: [{ type: "string", value: "bye" }, { type: "string", value: "hi" }]
    }]
  },

  values: ["welcome", "hello", "bye", "hi"]
}, {
  string: "(welcome OR hello) AND NOT (bye OR hi)",

  // TREE
  tree: {
    lexeme: { type: "not" },
    left: {
      lexeme: { type: "or" },
      left: {
        lexeme: { type: "string", value: "welcome" },
        left: null,
        right: null
      },
      right: {
        lexeme: { type: "string", value: "hello" },
        left: null,
        right: null
      }
    },
    right: {
      lexeme: { type: "or" },
      left: {
        lexeme: { type: "string", value: "bye" },
        left: null,
        right: null
      },
      right: {
        lexeme: { type: "string", value: "hi" },
        left: null,
        right: null
      }
    }
  },

  // QUERY
  query: {
    type: "not",
    values: [{
      type: "or",
      values: [{ type: "string", value: "welcome" }, { type: "string", value: "hello" }]
    }, {
      type: "or",
      values: [{ type: "string", value: "bye" }, { type: "string", value: "hi" }]
    }]
  },

  values: ["welcome", "hello", "bye", "hi"]
}];