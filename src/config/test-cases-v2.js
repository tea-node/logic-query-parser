module.exports = [
  /*
   *    TEST N°1
   */
  {
    string: "welcome + bye",

    // TREE
    tree: {
      lexeme: {
        type: "and",
      },
      left: {
        lexeme: {
          type: "string",
          value: "welcome",
        },
        left: null,
        right: null,
      },
      right: {
        lexeme: {
          type: "string",
          value: "bye",
        },
        left: null,
        right: null,
      },
    },

    // QUERY
    query: {
      type: "and",
      values: [
        {
          type: "string",
          value: "welcome",
        },
        {
          type: "string",
          value: "bye",
        },
      ],
    },
  },

  /*
   *    TEST N°2
   */
  {
    string: "welcome / bye",

    // TREE
    tree: {
      lexeme: {
        type: "or",
      },
      left: {
        lexeme: {
          type: "string",
          value: "welcome",
        },
        left: null,
        right: null,
      },
      right: {
        lexeme: {
          type: "string",
          value: "bye",
        },
        left: null,
        right: null,
      },
    },

    // QUERY
    query: {
      type: "or",
      values: [
        {
          type: "string",
          value: "welcome",
        },
        {
          type: "string",
          value: "bye",
        },
      ],
    },

    values: ["welcome", "bye"],
  },

  /*
   *    TEST N°3
   */
  {
    string: "welcome + bye + hello",

    // TREE
    tree: {
      lexeme: {
        type: "and",
      },
      left: {
        lexeme: {
          type: "string",
          value: "welcome",
        },
        left: null,
        right: null,
      },
      right: {
        lexeme: {
          type: "and",
        },
        left: {
          lexeme: {
            type: "string",
            value: "bye",
          },
          left: null,
          right: null,
        },
        right: {
          lexeme: {
            type: "string",
            value: "hello",
          },
          left: null,
          right: null,
        },
      },
    },

    // QUERY
    query: {
      type: "and",
      values: [
        {
          type: "string",
          value: "welcome",
        },
        {
          type: "string",
          value: "bye",
        },
        {
          type: "string",
          value: "hello",
        },
      ],
    },

    values: ["welcome", "bye", "hello"],
  },

  /*
   *    TEST N°4
   */
  {
    string: "welcome / bye + hello",

    // TREE
    tree: {
      lexeme: {
        type: "or",
      },
      left: {
        lexeme: {
          type: "string",
          value: "welcome",
        },
        left: null,
        right: null,
      },
      right: {
        lexeme: {
          type: "and",
        },
        left: {
          lexeme: {
            type: "string",
            value: "bye",
          },
          left: null,
          right: null,
        },
        right: {
          lexeme: {
            type: "string",
            value: "hello",
          },
          left: null,
          right: null,
        },
      },
    },

    // QUERY
    query: {
      type: "or",
      values: [
        {
          type: "string",
          value: "welcome",
        },
        {
          type: "and",
          values: [
            {
              type: "string",
              value: "bye",
            },
            {
              type: "string",
              value: "hello",
            },
          ],
        },
      ],
    },

    values: ["welcome", "bye", "hello"],
  },

  {
    string: "welcome + bye / hello",

    // TREE
    tree: {
      lexeme: {
        type: "or",
      },
      left: {
        lexeme: {
          type: "and",
        },
        left: {
          lexeme: {
            type: "string",
            value: "welcome",
          },
          left: null,
          right: null,
        },
        right: {
          lexeme: {
            type: "string",
            value: "bye",
          },
          left: null,
          right: null,
        },
      },
      right: {
        lexeme: {
          type: "string",
          value: "hello",
        },
        left: null,
        right: null,
      },
    },

    // QUERY
    query: {
      type: "or",
      values: [
        {
          type: "and",
          values: [
            {
              type: "string",
              value: "welcome",
            },
            {
              type: "string",
              value: "bye",
            },
          ],
        },
        {
          type: "string",
          value: "hello",
        },
      ],
    },

    values: ["welcome", "bye", "hello"],
  },

  /*
   *    TEST N°6
   */
  {
    string: "(welcome / bye) + hello",

    // TREE
    tree: {
      lexeme: {
        type: "and",
      },
      left: {
        lexeme: {
          type: "or",
        },
        left: {
          lexeme: {
            type: "string",
            value: "welcome",
          },
          left: null,
          right: null,
        },
        right: {
          lexeme: {
            type: "string",
            value: "bye",
          },
          left: null,
          right: null,
        },
      },
      right: {
        lexeme: {
          type: "string",
          value: "hello",
        },
        left: null,
        right: null,
      },
    },

    // QUERY
    query: {
      type: "and",
      values: [
        {
          type: "or",
          values: [
            {
              type: "string",
              value: "welcome",
            },
            {
              type: "string",
              value: "bye",
            },
          ],
        },
        {
          type: "string",
          value: "hello",
        },
      ],
    },

    values: ["welcome", "bye", "hello"],
  },

  /*
   *    TEST N°7
   */
  {
    string: "(welcome / bye) + (hello / ahoy)",

    // TREE
    tree: {
      lexeme: {
        type: "and",
      },
      left: {
        lexeme: {
          type: "or",
        },
        left: {
          lexeme: {
            type: "string",
            value: "welcome",
          },
          left: null,
          right: null,
        },
        right: {
          lexeme: {
            type: "string",
            value: "bye",
          },
          left: null,
          right: null,
        },
      },
      right: {
        lexeme: {
          type: "or",
        },
        left: {
          lexeme: {
            type: "string",
            value: "hello",
          },
          left: null,
          right: null,
        },
        right: {
          lexeme: {
            type: "string",
            value: "ahoy",
          },
          left: null,
          right: null,
        },
      },
    },

    // QUERY
    query: {
      type: "and",
      values: [
        {
          type: "or",
          values: [
            {
              type: "string",
              value: "welcome",
            },
            {
              type: "string",
              value: "bye",
            },
          ],
        },
        {
          type: "or",
          values: [
            {
              type: "string",
              value: "hello",
            },
            {
              type: "string",
              value: "ahoy",
            },
          ],
        },
      ],
    },

    values: ["welcome", "bye", "hello", "ahoy"],
  },

  /*
   *    TEST N°8
   */
  {
    string: '"hello there" / "welcome here"',

    // TREE
    tree: {
      lexeme: {
        type: "or",
      },
      left: {
        lexeme: {
          type: "string",
          value: "hello there",
        },
        left: null,
        right: null,
      },
      right: {
        lexeme: {
          type: "string",
          value: "welcome here",
        },
        left: null,
        right: null,
      },
    },

    // QUERY
    query: {
      type: "or",
      values: [
        {
          type: "string",
          value: "hello there",
        },
        {
          type: "string",
          value: "welcome here",
        },
      ],
    },

    values: ["hello there", "welcome here"],
  },

  /*
   *    TEST N°9
   */
  {
    string: '"hello there" / welcome here',

    // TREE
    tree: {
      lexeme: {
        type: "or",
      },
      left: {
        lexeme: {
          type: "string",
          value: "hello there",
        },
        left: null,
        right: null,
      },
      right: {
        lexeme: {
          type: "and",
        },
        left: {
          lexeme: {
            type: "string",
            value: "welcome",
          },
          left: null,
          right: null,
        },
        right: {
          lexeme: {
            type: "string",
            value: "here",
          },
          left: null,
          right: null,
        },
      },
    },

    // QUERY
    query: {
      type: "or",
      values: [
        {
          type: "string",
          value: "hello there",
        },
        {
          type: "and",
          values: [
            {
              type: "string",
              value: "welcome",
            },
            {
              type: "string",
              value: "here",
            },
          ],
        },
      ],
    },

    values: ["hello there", "welcome", "here"],
  },

  /*
   *    TEST N°10
   */
  {
    string: '"hello / there"',

    // TREE
    tree: {
      lexeme: {
        type: "string",
        value: "hello / there",
      },
      left: null,
      right: null,
    },

    // QUERY
    query: {
      type: "string",
      value: "hello / there",
    },

    values: ["hello / there"],
  },

  /*
   *    TEST N°11
   */
  {
    string: '"hello there" + ("welcome here" / ahoy)',

    // TREE
    tree: {
      lexeme: {
        type: "and",
      },
      left: {
        lexeme: {
          type: "string",
          value: "hello there",
        },
        left: null,
        right: null,
      },
      right: {
        lexeme: {
          type: "or",
        },
        left: {
          lexeme: {
            type: "string",
            value: "welcome here",
          },
          left: null,
          right: null,
        },
        right: {
          lexeme: {
            type: "string",
            value: "ahoy",
          },
          left: null,
          right: null,
        },
      },
    },

    // QUERY
    query: {
      type: "and",
      values: [
        {
          type: "string",
          value: "hello there",
        },
        {
          type: "or",
          values: [
            {
              type: "string",
              value: "welcome here",
            },
            {
              type: "string",
              value: "ahoy",
            },
          ],
        },
      ],
    },

    values: ["hello there", "welcome here", "ahoy"],
  },

  /*
   *    TEST N°12
   */
  {
    string: '"hello (" + ") there"',

    // TREE
    tree: {
      lexeme: {
        type: "and",
      },
      left: {
        lexeme: {
          type: "string",
          value: "hello (",
        },
        left: null,
        right: null,
      },
      right: {
        lexeme: {
          type: "string",
          value: ") there",
        },
        left: null,
        right: null,
      },
    },

    // QUERY
    query: {
      type: "and",
      values: [
        {
          type: "string",
          value: "hello (",
        },
        {
          type: "string",
          value: ") there",
        },
      ],
    },

    values: ["hello (", ") there"],
  },

  /*
   *    TEST N°13
   */
  {
    string: "hello (welcome)",

    // TREE
    tree: {
      lexeme: {
        type: "and",
      },
      left: {
        lexeme: {
          type: "string",
          value: "hello",
        },
        left: null,
        right: null,
      },
      right: {
        lexeme: {
          type: "string",
          value: "welcome",
        },
        left: null,
        right: null,
      },
    },

    // QUERY
    query: {
      type: "and",
      values: [
        {
          type: "string",
          value: "hello",
        },
        {
          type: "string",
          value: "welcome",
        },
      ],
    },

    values: ["hello", "welcome"],
  },

  /*
   *    TEST N°14
   */
  {
    string: "\\(hello bye\\) welcome",

    // TREE
    tree: {
      lexeme: {
        type: "and",
      },
      left: {
        lexeme: {
          type: "string",
          value: "(hello",
        },
        left: null,
        right: null,
      },
      right: {
        lexeme: {
          type: "and",
        },
        left: {
          lexeme: {
            type: "string",
            value: "bye)",
          },
          left: null,
          right: null,
        },
        right: {
          lexeme: {
            type: "string",
            value: "welcome",
          },
          left: null,
          right: null,
        },
      },
    },

    // QUERY
    query: {
      type: "and",
      values: [
        {
          type: "string",
          value: "(hello",
        },
        {
          type: "string",
          value: "bye)",
        },
        {
          type: "string",
          value: "welcome",
        },
      ],
    },

    values: ["(hello", "bye)", "welcome"],
  },

  /*
   *    TEST N°15
   */
  {
    string: "hello\\ \\/\\ there",

    // TREE
    tree: {
      lexeme: {
        type: "string",
        value: "hello / there",
      },
      left: null,
      right: null,
    },

    // QUERY
    query: {
      type: "string",
      value: "hello / there",
    },

    values: ["hello / there"],
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
        value: "(welcome hello)",
      },
      left: null,
      right: null,
    },

    // QUERY
    query: {
      type: "string",
      value: "(welcome hello)",
    },

    values: ["(welcome hello)"],
  },

  /*
   *    TEST N°22
   */
  {
    string: "+ test",
    err: "Nothing before and block, values: test",
  },

  /*
   *    TEST N°23
   */
  {
    string: "/ test",
    err: "Nothing before or block, values: test",
  },

  {
    string: "- welcome",

    // TREE
    err: "Nothing before not block, values: welcome",
  },

  /*
   *    TEST N°27
   */
  {
    string: "- (welcome + bye)",

    // TREE
    err: "Nothing before not block, values: (,welcome,+,bye,)",
  },

  /*
   *    TEST N°28
   */
  {
    string: "- welcome + bye",

    // TREE
    err: "Nothing before not block, values: welcome,+,bye",
  },

  /*
   *    TEST N°29
   */
  {
    string: "- (welcome / bye)",

    // TREE
    err: "Nothing before not block, values: (,welcome,/,bye,)",
  },
  /*
   *    TEST N°30
   */
  {
    string: "- welcome / bye",

    // TREE
    err: "Nothing before not block, values: welcome,/,bye",
  },

  /*
   *    TEST N°30
   */
  {
    string: "- welcome / bye",

    // TREE
    err: "Nothing before not block, values: welcome,/,bye",
  },

  /*
   *    TEST N°31
   */
  {
    string: "welcome - bye",

    // TREE
    tree: {
      lexeme: { type: "not" },
      left: {
        lexeme: { type: "string", value: "welcome" },
        left: null,
        right: null,
      },
      right: {
        lexeme: { type: "string", value: "bye" },
        left: null,
        right: null,
      },
    },

    // QUERY
    query: {
      type: "not",
      values: [
        {
          type: "string",
          value: "welcome",
        },
        {
          type: "string",
          value: "bye",
        },
      ],
    },

    values: ["welcome", "bye"],
  },
  /*
   *    TEST N°32
   */
  {
    string: "welcome - (bye)",

    // TREE
    tree: {
      lexeme: { type: "not" },
      left: {
        lexeme: { type: "string", value: "welcome" },
        left: null,
        right: null,
      },
      right: {
        lexeme: { type: "string", value: "bye" },
        left: null,
        right: null,
      },
    },

    // QUERY
    query: {
      type: "not",
      values: [
        {
          type: "string",
          value: "welcome",
        },
        {
          type: "string",
          value: "bye",
        },
      ],
    },

    values: ["welcome", "bye"],
  },

  /*
   *    TEST N°33
   */
  {
    string: "welcome - (hello + bye)",

    // TREE
    tree: {
      lexeme: { type: "not" },
      left: {
        lexeme: { type: "string", value: "welcome" },
        left: null,
        right: null,
      },
      right: {
        lexeme: { type: "and" },
        left: {
          lexeme: { type: "string", value: "hello" },
          left: null,
          right: null,
        },
        right: {
          lexeme: { type: "string", value: "bye" },
          left: null,
          right: null,
        },
      },
    },

    // QUERY
    query: {
      type: "not",
      values: [
        { type: "string", value: "welcome" },
        {
          type: "and",
          values: [
            { type: "string", value: "hello" },
            { type: "string", value: "bye" },
          ],
        },
      ],
    },

    values: ["welcome", "hello", "bye"],
  },
  /*
   *    TEST N°34
   */
  {
    string: "welcome - (hello / bye)",

    // TREE
    tree: {
      lexeme: { type: "not" },
      left: {
        lexeme: { type: "string", value: "welcome" },
        left: null,
        right: null,
      },
      right: {
        lexeme: { type: "or" },
        left: {
          lexeme: { type: "string", value: "hello" },
          left: null,
          right: null,
        },
        right: {
          lexeme: { type: "string", value: "bye" },
          left: null,
          right: null,
        },
      },
    },

    // QUERY
    query: {
      type: "not",
      values: [
        { type: "string", value: "welcome" },
        {
          type: "or",
          values: [
            { type: "string", value: "hello" },
            { type: "string", value: "bye" },
          ],
        },
      ],
    },

    values: ["welcome", "hello", "bye"],
  },
  /*
   *    TEST N°35
   */
  {
    string: 'welcome - ("hello world" + bye)',

    // TREE
    tree: {
      lexeme: { type: "not" },
      left: {
        lexeme: { type: "string", value: "welcome" },
        left: null,
        right: null,
      },
      right: {
        lexeme: { type: "and" },
        left: {
          lexeme: { type: "string", value: "hello world" },
          left: null,
          right: null,
        },
        right: {
          lexeme: { type: "string", value: "bye" },
          left: null,
          right: null,
        },
      },
    },

    // QUERY
    query: {
      type: "not",
      values: [
        { type: "string", value: "welcome" },
        {
          type: "and",
          values: [
            { type: "string", value: "hello world" },
            { type: "string", value: "bye" },
          ],
        },
      ],
    },

    values: ["welcome", "hello world", "bye"],
  },
  /*
   *    TEST N°36
   */
  {
    string: 'welcome - ("hello world" + "bye bye")',

    // TREE
    tree: {
      lexeme: {
        type: "not",
      },
      left: {
        lexeme: {
          type: "string",
          value: "welcome",
        },
        left: null,
        right: null,
      },
      right: {
        lexeme: {
          type: "and",
        },
        left: {
          lexeme: {
            type: "string",
            value: "hello world",
          },
          left: null,
          right: null,
        },
        right: {
          lexeme: {
            type: "string",
            value: "bye bye",
          },
          left: null,
          right: null,
        },
      },
    },

    // QUERY
    query: {
      type: "not",
      values: [
        { type: "string", value: "welcome" },
        {
          type: "and",
          values: [
            { type: "string", value: "hello world" },
            { type: "string", value: "bye bye" },
          ],
        },
      ],
    },

    values: ["welcome", "hello world", "bye bye"],
  },

  /*
   *    TEST N°37
   */
  {
    string: "(welcome + hello) - bye",

    // TREE
    tree: {
      lexeme: { type: "not" },
      left: {
        lexeme: { type: "and" },
        left: {
          lexeme: { type: "string", value: "welcome" },
          left: null,
          right: null,
        },
        right: {
          lexeme: { type: "string", value: "hello" },
          left: null,
          right: null,
        },
      },
      right: {
        lexeme: { type: "string", value: "bye" },
        left: null,
        right: null,
      },
    },

    // QUERY
    query: {
      type: "not",
      values: [
        {
          type: "and",
          values: [
            { type: "string", value: "welcome" },
            { type: "string", value: "hello" },
          ],
        },
        { type: "string", value: "bye" },
      ],
    },

    values: ["welcome", "hello", "bye"],
  },
  /*
   *    TEST N°38
   */
  {
    string: "(welcome / hello) - bye",

    // TREE
    tree: {
      lexeme: { type: "not" },
      left: {
        lexeme: { type: "or" },
        left: {
          lexeme: { type: "string", value: "welcome" },
          left: null,
          right: null,
        },
        right: {
          lexeme: { type: "string", value: "hello" },
          left: null,
          right: null,
        },
      },
      right: {
        lexeme: { type: "string", value: "bye" },
        left: null,
        right: null,
      },
    },

    // QUERY
    query: {
      type: "not",
      values: [
        {
          type: "or",
          values: [
            { type: "string", value: "welcome" },
            { type: "string", value: "hello" },
          ],
        },
        { type: "string", value: "bye" },
      ],
    },

    values: ["welcome", "hello", "bye"],
  },
  /*
   *    TEST N°39
   */
  {
    string: "(welcome + hello) - (bye + hi)",

    // TREE
    tree: {
      lexeme: { type: "not" },
      left: {
        lexeme: { type: "and" },
        left: {
          lexeme: { type: "string", value: "welcome" },
          left: null,
          right: null,
        },
        right: {
          lexeme: { type: "string", value: "hello" },
          left: null,
          right: null,
        },
      },
      right: {
        lexeme: { type: "and" },
        left: {
          lexeme: { type: "string", value: "bye" },
          left: null,
          right: null,
        },
        right: {
          lexeme: { type: "string", value: "hi" },
          left: null,
          right: null,
        },
      },
    },

    // QUERY
    query: {
      type: "not",
      values: [
        {
          type: "and",
          values: [
            { type: "string", value: "welcome" },
            { type: "string", value: "hello" },
          ],
        },
        {
          type: "and",
          values: [
            { type: "string", value: "bye" },
            { type: "string", value: "hi" },
          ],
        },
      ],
    },

    values: ["welcome", "hello", "bye", "hi"],
  },
  /*
   *    TEST N°40
   */
  {
    string: "(welcome / hello) - (bye + hi)",

    // TREE
    tree: {
      lexeme: {
        type: "not",
      },
      left: {
        lexeme: {
          type: "or",
        },
        left: {
          lexeme: {
            type: "string",
            value: "welcome",
          },
          left: null,
          right: null,
        },
        right: {
          lexeme: {
            type: "string",
            value: "hello",
          },
          left: null,
          right: null,
        },
      },
      right: {
        lexeme: {
          type: "and",
        },
        left: {
          lexeme: {
            type: "string",
            value: "bye",
          },
          left: null,
          right: null,
        },
        right: {
          lexeme: {
            type: "string",
            value: "hi",
          },
          left: null,
          right: null,
        },
      },
    },

    // QUERY
    query: {
      type: "not",
      values: [
        {
          type: "or",
          values: [
            { type: "string", value: "welcome" },
            { type: "string", value: "hello" },
          ],
        },
        {
          type: "and",
          values: [
            { type: "string", value: "bye" },
            { type: "string", value: "hi" },
          ],
        },
      ],
    },

    values: ["welcome", "hello", "bye", "hi"],
  },
  /*
   *    TEST N°41
   */
  {
    string: "(welcome / hello) - (bye / hi)",

    // TREE
    tree: {
      lexeme: { type: "not" },
      left: {
        lexeme: { type: "or" },
        left: {
          lexeme: { type: "string", value: "welcome" },
          left: null,
          right: null,
        },
        right: {
          lexeme: { type: "string", value: "hello" },
          left: null,
          right: null,
        },
      },
      right: {
        lexeme: { type: "or" },
        left: {
          lexeme: { type: "string", value: "bye" },
          left: null,
          right: null,
        },
        right: {
          lexeme: { type: "string", value: "hi" },
          left: null,
          right: null,
        },
      },
    },

    // QUERY
    query: {
      type: "not",
      values: [
        {
          type: "or",
          values: [
            { type: "string", value: "welcome" },
            { type: "string", value: "hello" },
          ],
        },
        {
          type: "or",
          values: [
            { type: "string", value: "bye" },
            { type: "string", value: "hi" },
          ],
        },
      ],
    },

    values: ["welcome", "hello", "bye", "hi"],
  },
];
