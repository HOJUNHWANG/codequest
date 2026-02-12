// CodeQuest Problem Database
// Add your problems here!

const CATEGORIES = [
    { id: 'basics', name: '🌱 Step 1: First Steps', total: 30 },
    { id: 'variables', name: '📦 Step 2: Variables & Types', total: 30 },
    { id: 'operators', name: '➕ Step 3: Operators', total: 30 },
    { id: 'conditions', name: '🔀 Step 4: Conditionals', total: 30 },
    { id: 'loops', name: '🔄 Step 5: Loops', total: 30 },
    { id: 'functions', name: '⚡ Step 6: Functions', total: 30 },
    { id: 'arrays', name: '📋 Step 7: Arrays & Lists', total: 30 },
    { id: 'strings', name: '📝 Step 8: Strings', total: 30 },
    { id: 'oop', name: '🎨 Step 9: OOP Basics', total: 30 },
    { id: 'collections', name: '🗂️ Step 10: Collections', total: 30 },
    { id: 'errors', name: '🚨 Step 11: Error Handling', total: 30 },
    { id: 'files', name: '📁 Step 12: File I/O', total: 30 },
    { id: 'datastructures', name: '🏗️ Step 13: Data Structures', total: 30 },
    { id: 'algorithms', name: '🧮 Step 14: Algorithms', total: 30 },
    { id: 'recursion', name: '🔁 Step 15: Recursion', total: 30 },
    { id: 'async', name: '⚙️ Step 16: Async/Concurrency', total: 30 },
    { id: 'testing', name: '🧪 Step 17: Testing', total: 30 },
    { id: 'realworld', name: '💼 Step 18: Real-World Projects', total: 30 },
    { id: 'database', name: '🗄️ Step 19: Database Operations', total: 30 },
    { id: 'api', name: '🌐 Step 20: API Development', total: 20 },
    { id: 'security', name: '🔒 Step 21: Security', total: 15 },
    { id: 'performance', name: '⚡ Step 22: Performance', total: 15 },
    { id: 'interview', name: '🚀 Step 23: Big Tech Interviews', total: 50 }
];

const PROBLEMS = {
    // ========================================
    // PYTHON PROBLEMS
    // ========================================
    python: {
        basics: [
            {
                id: 1,
                title: 'Print Hello World',
                difficulty: 'beginner',
                description: 'Write code that prints "Hello, World!"',
                hints: {
                    h1: 'Use the print() function',
                    h2: 'print("Hello, World!")'
                },
                tests: [
                    { desc: 'Uses print function', check: (c) => c.includes('print') },
                    { desc: 'Contains "Hello" and "World"', check: (c) => c.toLowerCase().includes('hello') && c.toLowerCase().includes('world') }
                ]
            },
            {
                id: 2,
                title: 'Add Two Numbers',
                difficulty: 'beginner',
                description: 'Create a function that adds two numbers.',
                hints: {
                    h1: 'Use def keyword to define a function',
                    h2: 'def add(a, b):\n    return a + b'
                },
                tests: [
                    { desc: 'Has function definition', check: (c) => c.includes('def') },
                    { desc: 'Uses + operator', check: (c) => c.includes('+') },
                    { desc: 'Has return statement', check: (c) => c.includes('return') }
                ]
            },
            // Add more problems here!
        ],
        
        variables: [
            {
                id: 10,
                title: 'Create and Print Variables',
                difficulty: 'beginner',
                description: 'Create name and age variables, then print both values.',
                hints: {
                    h1: 'Use two variable assignments and print()',
                    h2: 'name = "Alice"\nage = 20\nprint(name)\nprint(age)'
                },
                tests: [
                    { desc: 'Creates at least one variable', check: (c) => c.includes('=') },
                    { desc: 'Uses print', check: (c) => c.includes('print') }
                ]
            },
            {
                id: 11,
                title: 'Swap Two Variables',
                difficulty: 'easy',
                description: 'Swap values of variables a and b.',
                hints: {
                    h1: 'Python supports tuple swap syntax',
                    h2: 'a, b = b, a'
                },
                tests: [
                    { desc: 'Uses variable assignment', check: (c) => c.includes('=') },
                    { desc: 'Touches both a and b', check: (c) => c.includes('a') && c.includes('b') }
                ]
            },
            {
                id: 12,
                title: 'Type Conversion Basics',
                difficulty: 'easy',
                description: 'Convert string "42" to number and add 8.',
                hints: {
                    h1: 'Use int() for conversion',
                    h2: 'n = int("42")\nprint(n + 8)'
                },
                tests: [
                    { desc: 'Uses int conversion', check: (c) => /int\s*\(/.test(c) },
                    { desc: 'Uses addition', check: (c) => c.includes('+') }
                ]
            }
        ],
        
        oop: [
            {
                id: 50,
                title: 'Create a Class',
                difficulty: 'easy',
                description: 'Create a Person class with __init__ method.',
                hints: {
                    h1: 'Use class keyword and define __init__ method',
                    h2: 'class Person:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age'
                },
                tests: [
                    { desc: 'Has class definition', check: (c) => c.includes('class') },
                    { desc: 'Has __init__ method', check: (c) => c.includes('__init__') }
                ]
            }
        ],
        
        interview: [
            {
                id: 200,
                title: 'Two Sum',
                difficulty: 'medium',
                description: 'Return indices of two numbers that add up to target.',
                hints: {
                    h1: 'Use a dictionary to store seen numbers and their indices',
                    h2: 'def two_sum(nums, target):\n    seen = {}\n    for i, n in enumerate(nums):\n        if target - n in seen:\n            return [seen[target - n], i]\n        seen[n] = i'
                },
                tests: [
                    { desc: 'Uses dictionary', check: (c) => /\{|\}|dict/.test(c) },
                    { desc: 'Has loop', check: (c) => /for|while/.test(c) }
                ]
            }
        ]
    },

    // ========================================
    // JAVA PROBLEMS
    // ========================================
    java: {
        basics: [
            {
                id: 1,
                title: 'Print Hello World',
                difficulty: 'beginner',
                description: 'Write a program that prints "Hello, World!" to console.',
                hints: {
                    h1: 'Use System.out.println() method',
                    h2: 'System.out.println("Hello, World!");'
                },
                tests: [
                    { desc: 'Uses System.out.println', check: (c) => c.includes('System.out.println') },
                    { desc: 'Contains "Hello" and "World"', check: (c) => c.toLowerCase().includes('hello') && c.toLowerCase().includes('world') }
                ]
            },
            {
                id: 2,
                title: 'Add Two Numbers',
                difficulty: 'beginner',
                description: 'Create a method that adds two integers.',
                hints: {
                    h1: 'Define a method with int return type and two int parameters',
                    h2: 'public static int add(int a, int b) { return a + b; }'
                },
                tests: [
                    { desc: 'Has method definition', check: (c) => /public|private/.test(c) },
                    { desc: 'Uses + operator', check: (c) => c.includes('+') },
                    { desc: 'Has return statement', check: (c) => c.includes('return') }
                ]
            }
        ],
        
        oop: [
            {
                id: 50,
                title: 'Create a Class',
                difficulty: 'easy',
                description: 'Create a Person class with fields and constructor.',
                hints: {
                    h1: 'Use class keyword with private fields and public constructor',
                    h2: 'public class Person {\n  private String name;\n  private int age;\n  public Person(String n, int a) {\n    name = n;\n    age = a;\n  }\n}'
                },
                tests: [
                    { desc: 'Has class definition', check: (c) => c.includes('class') },
                    { desc: 'Has constructor', check: (c) => /public\s+\w+\s*\(/.test(c) }
                ]
            }
        ]
    },

    // ========================================
    // TYPESCRIPT PROBLEMS
    // ========================================
    typescript: {
        basics: [
            {
                id: 1,
                title: 'Print Hello World',
                difficulty: 'beginner',
                description: 'Print "Hello, World!" to console.',
                hints: {
                    h1: 'Use console.log() function',
                    h2: 'console.log("Hello, World!");'
                },
                tests: [
                    { desc: 'Uses console.log', check: (c) => c.includes('console.log') },
                    { desc: 'Contains Hello and World', check: (c) => c.toLowerCase().includes('hello') && c.toLowerCase().includes('world') }
                ]
            },
            {
                id: 2,
                title: 'Function with Types',
                difficulty: 'beginner',
                description: 'Create a typed function that adds two numbers.',
                hints: {
                    h1: 'Specify parameter types and return type',
                    h2: 'function add(a: number, b: number): number { return a + b; }'
                },
                tests: [
                    { desc: 'Has type annotations', check: (c) => /:\s*number/.test(c) },
                    { desc: 'Has return statement', check: (c) => c.includes('return') }
                ]
            }
        ],
        
        oop: [
            {
                id: 50,
                title: 'Create a Class',
                difficulty: 'easy',
                description: 'Create a Person class with typed properties.',
                hints: {
                    h1: 'Use class keyword with constructor',
                    h2: 'class Person {\n  constructor(public name: string, public age: number) {}\n}'
                },
                tests: [
                    { desc: 'Has class definition', check: (c) => c.includes('class') },
                    { desc: 'Has constructor', check: (c) => c.includes('constructor') }
                ]
            }
        ]
    },

    // ========================================
    // GO PROBLEMS
    // ========================================
    go: {
        basics: [
            {
                id: 1,
                title: 'Print Hello World',
                difficulty: 'beginner',
                description: 'Print "Hello, World!" using fmt package.',
                hints: {
                    h1: 'Use fmt.Println() function',
                    h2: 'fmt.Println("Hello, World!")'
                },
                tests: [
                    { desc: 'Uses fmt.Println', check: (c) => /fmt\.Println|fmt\.Printf/.test(c) },
                    { desc: 'Contains Hello and World', check: (c) => c.toLowerCase().includes('hello') && c.toLowerCase().includes('world') }
                ]
            },
            {
                id: 2,
                title: 'Function Definition',
                difficulty: 'beginner',
                description: 'Create a function that adds two integers.',
                hints: {
                    h1: 'Use func keyword with parameter types',
                    h2: 'func add(a int, b int) int {\n  return a + b\n}'
                },
                tests: [
                    { desc: 'Has func keyword', check: (c) => c.includes('func') },
                    { desc: 'Has return statement', check: (c) => c.includes('return') }
                ]
            }
        ],
        
        oop: [
            {
                id: 50,
                title: 'Struct and Method',
                difficulty: 'easy',
                description: 'Create a Person struct with a method.',
                hints: {
                    h1: 'Use type and struct keywords',
                    h2: 'type Person struct {\n  Name string\n  Age int\n}\n\nfunc (p Person) Greet() string {\n  return "Hello"\n}'
                },
                tests: [
                    { desc: 'Has struct definition', check: (c) => c.includes('struct') },
                    { desc: 'Has method with receiver', check: (c) => /func\s*\(.*\)/.test(c) }
                ]
            }
        ]
    },

    // ========================================
    // RUST PROBLEMS
    // ========================================
    rust: {
        basics: [
            {
                id: 1,
                title: 'Print Hello World',
                difficulty: 'beginner',
                description: 'Print "Hello, World!" using println! macro.',
                hints: {
                    h1: 'Use println! macro',
                    h2: 'println!("Hello, World!");'
                },
                tests: [
                    { desc: 'Uses println! macro', check: (c) => c.includes('println!') },
                    { desc: 'Contains Hello and World', check: (c) => c.toLowerCase().includes('hello') && c.toLowerCase().includes('world') }
                ]
            },
            {
                id: 2,
                title: 'Function Definition',
                difficulty: 'beginner',
                description: 'Create a function that adds two i32 numbers.',
                hints: {
                    h1: 'Use fn keyword with type annotations',
                    h2: 'fn add(a: i32, b: i32) -> i32 {\n  a + b\n}'
                },
                tests: [
                    { desc: 'Has fn keyword', check: (c) => c.includes('fn') },
                    { desc: 'Has type annotations', check: (c) => /i32|->/.test(c) }
                ]
            }
        ],
        
        oop: [
            {
                id: 50,
                title: 'Struct and Impl',
                difficulty: 'easy',
                description: 'Create a struct with implementation block.',
                hints: {
                    h1: 'Use struct for data, impl for methods',
                    h2: 'struct Person {\n  name: String\n}\n\nimpl Person {\n  fn new(name: String) -> Self {\n    Person { name }\n  }\n}'
                },
                tests: [
                    { desc: 'Has struct definition', check: (c) => c.includes('struct') },
                    { desc: 'Has impl block', check: (c) => c.includes('impl') }
                ]
            }
        ]
    },

    // ========================================
    // ABAP PROBLEMS (SAP Focused)
    // ========================================
    abap: {
        basics: [
            {
                id: 1,
                title: 'WRITE Statement',
                difficulty: 'beginner',
                description: 'Output "Hello, World!" using WRITE statement.',
                hints: {
                    h1: 'Use WRITE: / for output',
                    h2: "WRITE: / 'Hello, World!'."
                },
                tests: [
                    { desc: 'Uses WRITE statement', check: (c) => c.toUpperCase().includes('WRITE') },
                    { desc: 'Contains Hello and World', check: (c) => c.toLowerCase().includes('hello') && c.toLowerCase().includes('world') }
                ]
            },
            {
                id: 2,
                title: 'DATA Declaration',
                difficulty: 'beginner',
                description: 'Declare variables using DATA statement.',
                hints: {
                    h1: 'Use DATA: variable TYPE type',
                    h2: "DATA: lv_age TYPE i VALUE 25,\n      lv_name TYPE string VALUE 'Alice'."
                },
                tests: [
                    { desc: 'Uses DATA keyword', check: (c) => c.toUpperCase().includes('DATA') },
                    { desc: 'Uses TYPE keyword', check: (c) => c.toUpperCase().includes('TYPE') }
                ]
            }
        ],
        
        realworld: [
            {
                id: 100,
                title: 'ALV Report',
                difficulty: 'medium',
                description: 'Create a simple ALV report displaying data.',
                hints: {
                    h1: 'Use REUSE_ALV_GRID_DISPLAY function module',
                    h2: "CALL FUNCTION 'REUSE_ALV_GRID_DISPLAY'\n  TABLES\n    t_outtab = lt_data."
                },
                tests: [
                    { desc: 'Uses ALV function', check: (c) => /REUSE_ALV|CL_SALV/i.test(c) },
                    { desc: 'Has CALL FUNCTION', check: (c) => c.toUpperCase().includes('CALL FUNCTION') }
                ]
            },
            {
                id: 101,
                title: 'SELECT Statement',
                difficulty: 'medium',
                description: 'Read data from database table using SELECT.',
                hints: {
                    h1: 'Use SELECT...FROM...INTO TABLE',
                    h2: "SELECT * FROM mara INTO TABLE lt_data UP TO 10 ROWS."
                },
                tests: [
                    { desc: 'Uses SELECT', check: (c) => c.toUpperCase().includes('SELECT') },
                    { desc: 'Uses FROM', check: (c) => c.toUpperCase().includes('FROM') }
                ]
            }
        ]
    }
};

// ========================================
// AUTO-FILL CURRICULUM (up to category total)
// ========================================

const SUPPORTED_LANGUAGES = ['java', 'python', 'typescript', 'go', 'rust', 'abap'];

const CATEGORY_KEYWORDS = {
    basics: ['print', 'output', 'hello', 'main'],
    variables: ['variable', 'type', 'assignment', 'constant'],
    operators: ['+', '-', '*', '/', '%'],
    conditions: ['if', 'else', 'branch', 'condition'],
    loops: ['for', 'while', 'loop', 'iteration'],
    functions: ['function', 'parameter', 'return', 'call'],
    arrays: ['array', 'list', 'index', 'length'],
    strings: ['string', 'substring', 'split', 'join'],
    oop: ['class', 'object', 'method', 'constructor'],
    collections: ['map', 'set', 'dictionary', 'collection'],
    errors: ['error', 'exception', 'handle', 'try'],
    files: ['file', 'read', 'write', 'path'],
    datastructures: ['stack', 'queue', 'tree', 'graph'],
    algorithms: ['sort', 'search', 'complexity', 'optimize'],
    recursion: ['recursion', 'base case', 'call stack', 'divide'],
    async: ['async', 'await', 'concurrency', 'promise'],
    testing: ['test', 'assert', 'case', 'coverage'],
    realworld: ['service', 'module', 'workflow', 'integration'],
    database: ['query', 'table', 'join', 'transaction'],
    api: ['endpoint', 'request', 'response', 'json'],
    security: ['auth', 'token', 'hash', 'validation'],
    performance: ['cache', 'latency', 'throughput', 'profile'],
    interview: ['two sum', 'binary search', 'dp', 'greedy']
};

const CATEGORY_ACTIONS = {
    basics: ['Print', 'Display', 'Write', 'Output'],
    variables: ['Declare', 'Update', 'Convert', 'Reassign'],
    operators: ['Calculate', 'Compare', 'Evaluate', 'Compose'],
    conditions: ['Branch', 'Validate', 'Decide', 'Guard'],
    loops: ['Iterate', 'Repeat', 'Aggregate', 'Traverse'],
    functions: ['Define', 'Refactor', 'Compose', 'Extract'],
    arrays: ['Traverse', 'Filter', 'Transform', 'Slice'],
    strings: ['Parse', 'Normalize', 'Split', 'Format'],
    oop: ['Design', 'Encapsulate', 'Instantiate', 'Model'],
    collections: ['Group', 'Index', 'Map', 'Deduplicate'],
    errors: ['Detect', 'Recover', 'Handle', 'Protect'],
    files: ['Load', 'Persist', 'Append', 'Stream'],
    datastructures: ['Build', 'Push', 'Pop', 'Search'],
    algorithms: ['Sort', 'Search', 'Optimize', 'Analyze'],
    recursion: ['Unroll', 'Divide', 'Return', 'Trace'],
    async: ['Await', 'Schedule', 'Synchronize', 'Fan-out'],
    testing: ['Assert', 'Mock', 'Verify', 'Refactor'],
    realworld: ['Implement', 'Integrate', 'Orchestrate', 'Stabilize'],
    database: ['Select', 'Join', 'Insert', 'Commit'],
    api: ['Expose', 'Validate', 'Serialize', 'Handle'],
    security: ['Authenticate', 'Authorize', 'Sanitize', 'Protect'],
    performance: ['Measure', 'Cache', 'Profile', 'Tune'],
    interview: ['Solve', 'Optimize', 'Explain', 'Generalize']
};

const LANGUAGE_SIGNALS = {
    java: {
        default: ['class', 'public', ';'],
        basics: ['System.out.println'],
        conditions: ['if'],
        loops: ['for', 'while'],
        functions: ['return'],
        oop: ['class', 'new'],
        collections: ['List', 'Map'],
        errors: ['try', 'catch']
    },
    python: {
        default: ['def', ':'],
        basics: ['print'],
        conditions: ['if'],
        loops: ['for', 'while'],
        functions: ['return'],
        oop: ['class', '__init__'],
        collections: ['dict', 'set'],
        errors: ['try', 'except']
    },
    typescript: {
        default: ['function', ':'],
        basics: ['console.log'],
        conditions: ['if'],
        loops: ['for', 'while'],
        functions: ['return'],
        oop: ['class', 'constructor'],
        collections: ['Map', 'Set'],
        errors: ['try', 'catch']
    },
    go: {
        default: ['func', '{'],
        basics: ['fmt.Println'],
        conditions: ['if'],
        loops: ['for'],
        functions: ['return'],
        oop: ['struct'],
        collections: ['map', '[]'],
        errors: ['error', 'if err']
    },
    rust: {
        default: ['fn', '{'],
        basics: ['println!'],
        conditions: ['if'],
        loops: ['for', 'while'],
        functions: ['->'],
        oop: ['struct', 'impl'],
        collections: ['Vec', 'HashMap'],
        errors: ['Result', 'match']
    },
    abap: {
        default: ['DATA', '.'],
        basics: ['WRITE'],
        conditions: ['IF'],
        loops: ['LOOP', 'DO'],
        functions: ['FORM', 'METHOD'],
        oop: ['CLASS', 'METHOD'],
        collections: ['TABLE'],
        errors: ['MESSAGE', 'SY-SUBRC']
    }
};


const PRIORITY_CATEGORY_STEPS = {
    variables: [
        { concept: 'declare', prompt: 'Declare variables and print their values' },
        { concept: 'reassign', prompt: 'Reassign variable values and print the result' },
        { concept: 'constant', prompt: 'Define and use constants' },
        { concept: 'type-convert', prompt: 'Convert between string and number types' },
        { concept: 'scope', prompt: 'Work with block/local variable scope' },
        { concept: 'swap', prompt: 'Swap two variable values' },
        { concept: 'accumulate', prompt: 'Update a running total in a variable' },
        { concept: 'input-parse', prompt: 'Parse input into variables' },
        { concept: 'state', prompt: 'Branch based on state variables' },
        { concept: 'mini-model', prompt: 'Combine multiple variables in one logic flow' }
    ],
    operators: [
        { concept: 'arithmetic', prompt: 'Compute arithmetic expressions' },
        { concept: 'modulo', prompt: 'Use modulo for remainder-based rules' },
        { concept: 'comparison', prompt: 'Build comparison expressions' },
        { concept: 'logical', prompt: 'Combine logical operators' },
        { concept: 'precedence', prompt: 'Control precedence with parentheses' },
        { concept: 'compound', prompt: 'Use compound assignment operators' },
        { concept: 'boolean-chain', prompt: 'Simplify chained boolean conditions' },
        { concept: 'score-rule', prompt: 'Write a score calculation rule' },
        { concept: 'discount-rule', prompt: 'Write a discount/tax formula' },
        { concept: 'edge-case', prompt: 'Handle operator edge cases' }
    ],
    conditions: [
        { concept: 'if-basic', prompt: 'Handle a single if condition' },
        { concept: 'if-else', prompt: 'Use an if-else branch' },
        { concept: 'elif-chain', prompt: 'Build a multi-branch condition chain' },
        { concept: 'nested', prompt: 'Write nested conditionals' },
        { concept: 'guard', prompt: 'Use a guard condition for early return' },
        { concept: 'range-check', prompt: 'Validate numeric ranges' },
        { concept: 'category-map', prompt: 'Map values to categories' },
        { concept: 'validation', prompt: 'Validate input values' },
        { concept: 'decision-table', prompt: 'Implement a decision table' },
        { concept: 'business-rule', prompt: 'Apply realistic business rules' }
    ]
};

function cleanCategoryName(rawName) {
    return rawName
        .replace(/^\S+\s+Step\s+\d+:\s*/i, '')
        .replace(/^Step\s+\d+:\s*/i, '')
        .trim();
}

function languageDisplayName(language) {
    return (language || '').toUpperCase();
}

function createPriorityProblem(category, language, id, seq, total) {
    const pack = PRIORITY_CATEGORY_STEPS[category];
    if (!pack || seq > pack.length) return null;

    const step = pack[seq - 1];
    const difficulty = difficultyByPosition(seq - 1, total);
    const categoryName = cleanCategoryName(CATEGORIES.find(c => c.id === category)?.name || category);
    const signals = getPrioritySignals(language, category, step.concept);
    const lead = signals[0] || step.concept;
    const follow = signals[1] || step.concept;

    return {
        id,
        title: `[Core ${seq}] ${categoryName}`,
        difficulty,
        description: `Goal: ${step.prompt}.\nWrite a ${languageDisplayName(language)} solution that shows input (or sample values), processing logic, and output.`,
        hints: {
            h1: `${langHintPrefix(language)}Start with a short plan in comments, then translate it into code.`,
            h2: `${langHintPrefix(language)}Include a core signal (${lead}) and a secondary signal (${follow}) in your final solution.`
        },
        tests: [
            { desc: `Includes core signal (${lead})`, check: (code) => code.toLowerCase().includes(lead.toLowerCase()) },
            { desc: `Includes secondary signal (${follow})`, check: (code) => code.toLowerCase().includes(follow.toLowerCase()) },
            { desc: 'Meaningful implementation length', check: (code) => code.trim().length > (difficulty === 'hard' ? 45 : 18) }
        ]
    };
}

function difficultyByPosition(index, total) {
    const r = (index + 1) / total;
    if (r <= 0.4) return 'beginner';
    if (r <= 0.75) return 'easy';
    if (r <= 0.95) return 'medium';
    return 'hard';
}

function langHintPrefix(language) {
    return {
        java: 'In Java, ',
        python: 'In Python, ',
        typescript: 'In TypeScript, ',
        go: 'In Go, ',
        rust: 'In Rust, ',
        abap: 'In ABAP, '
    }[language] || '';
}

function getSignals(language, category, keyword) {
    const rules = LANGUAGE_SIGNALS[language] || { default: [] };
    const selected = [...(rules.default || [])];
    if (rules[category]) selected.push(...rules[category]);
    selected.push(keyword);
    return [...new Set(selected)].filter(Boolean);
}

function getPrioritySignals(language, category, concept) {
    const rules = LANGUAGE_SIGNALS[language] || { default: [] };
    const selected = [concept, ...(rules[category] || []), ...(rules.default || [])];
    return [...new Set(selected)].filter(Boolean);
}

function createGeneratedProblem(category, language, id, seq, total) {
    const priority = createPriorityProblem(category, language, id, seq, total);
    if (priority) return priority;

    const keywordSet = CATEGORY_KEYWORDS[category] || ['logic', 'code', 'test', 'solve'];
    const actionSet = CATEGORY_ACTIONS[category] || ['Build', 'Solve', 'Refine', 'Practice'];
    const keyword = keywordSet[(seq - 1) % keywordSet.length];
    const action = actionSet[(seq - 1) % actionSet.length];
    const difficulty = difficultyByPosition(seq - 1, total);
    const categoryName = cleanCategoryName(CATEGORIES.find(c => c.id === category)?.name || category);
    const guide = langHintPrefix(language);
    const signals = getSignals(language, category, keyword);
    const mainSignal = signals[0] || keyword;

    return {
        id,
        title: `${categoryName} Practice ${seq}`,
        difficulty,
        description: `Goal: Practice ${keyword} in ${categoryName}.\nTask: Write ${languageDisplayName(language)} code, run one clear example, and print the result.`,
        hints: {
            h1: `${guide}first verify the ${keyword} concept with a tiny code snippet.`,
            h2: `${guide}include ${mainSignal} and related syntax (${signals.slice(1, 3).join(', ') || keyword}) while separating input, logic, and output.`
        },
        tests: [
            {
                desc: `Uses language/category signal (${mainSignal})`,
                check: (code) => signals.some(signal => code.toLowerCase().includes(signal.toLowerCase()))
            },
            {
                desc: 'Has enough implementation length',
                check: (code) => code.trim().length > (difficulty === 'hard' ? 40 : 12)
            }
        ]
    };
}

function ensureCurriculumDepth() {
    SUPPORTED_LANGUAGES.forEach(language => {
        if (!PROBLEMS[language]) PROBLEMS[language] = {};

        CATEGORIES.forEach(category => {
            const total = category.total;
            if (!PROBLEMS[language][category.id]) {
                PROBLEMS[language][category.id] = [];
            }

            const items = PROBLEMS[language][category.id];
            const usedIds = new Set(items.map(p => p.id));
            let nextId = items.length > 0 ? Math.max(...items.map(p => p.id)) + 1 : 1;

            while (items.length < total) {
                while (usedIds.has(nextId)) nextId++;
                const seq = items.length + 1;
                items.push(createGeneratedProblem(category.id, language, nextId, seq, total));
                usedIds.add(nextId);
                nextId++;
            }
        });
    });
}

ensureCurriculumDepth();

// ========================================
// Problem template
// ========================================
/*
{
    id: number,
    title: 'Problem title',
    difficulty: 'beginner' | 'easy' | 'medium' | 'hard',
    description: 'Problem description',
    hints: {
        h1: 'Light hint',
        h2: 'Concrete code example'
    },
    tests: [
        { 
            desc: 'Test description', 
            check: (code) => code.includes('keyword') 
        }
    ]
}
*/
