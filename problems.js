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
                expectedOutput: 'Hello, World!',
                validation: { mode: 'output-only' },
                hints: {
                    h1: '정답 출력 결과만 맞으면 됩니다. 구현 방식은 자유입니다.',
                    h2: '예: print("Hello, World!")'
                },
                tests: [
                    { desc: 'Expected output과 일치하는 문자열을 출력한다', check: (c) => c.toLowerCase().includes('hello') && c.toLowerCase().includes('world') }
                ]
            },
            {
                id: 2,
                title: 'Add Two Numbers',
                difficulty: 'beginner',
                description: 'Create a function that adds two numbers. The function should return the sum for sample inputs such as 2 and 3.',
                expectedOutput: '5',
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
                description: 'Create name and age variables, then print both values on separate lines (first name, then age).',
                expectedOutput: 'Alice\n20',
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
                description: 'Swap values of variables a and b so that each variable holds the other\'s original value.',
                expectedOutput: 'a=2, b=1',
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
                expectedOutput: '50',
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
                description: 'Create a Person class with __init__ method so an object can be created with name and age properties.',
                expectedOutput: 'Person("Alice", 20)',
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
                expectedOutput: 'For nums=[2,7,11,15], target=9 -> [0, 1]',
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
                expectedOutput: 'Hello, World!',
                validation: { mode: 'output-only' },
                hints: {
                    h1: '결과 출력이 맞으면 통과합니다. 특정 문법 강제는 없습니다.',
                    h2: '예: System.out.println("Hello, World!");'
                },
                tests: [
                    { desc: 'Expected output과 일치하는 문자열을 출력한다', check: (c) => c.toLowerCase().includes('hello') && c.toLowerCase().includes('world') }
                ]
            },
            {
                id: 2,
                title: 'Add Two Numbers',
                difficulty: 'beginner',
                description: 'Create a method that adds two integers and returns their sum for sample inputs like 2 and 3.',
                expectedOutput: '5',
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
                description: 'Create a Person class with fields and constructor so a Person instance can be created with name and age.',
                expectedOutput: 'new Person("Alice", 20)',
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
                expectedOutput: 'Hello, World!',
                validation: { mode: 'output-only' },
                hints: {
                    h1: '출력 결과만 일치하면 어떤 방식이든 괜찮습니다.',
                    h2: '예: console.log("Hello, World!");'
                },
                tests: [
                    { desc: 'Expected output과 일치하는 문자열을 출력한다', check: (c) => c.toLowerCase().includes('hello') && c.toLowerCase().includes('world') }
                ]
            },
            {
                id: 2,
                title: 'Function with Types',
                difficulty: 'beginner',
                description: 'Create a typed function that adds two numbers and returns their numeric sum for sample inputs like 2 and 3.',
                expectedOutput: '5',
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
                description: 'Create a Person class with typed properties so it can instantiate a Person with typed name and age.',
                expectedOutput: 'new Person("Alice", 20)',
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
                expectedOutput: 'Hello, World!',
                validation: { mode: 'output-only' },
                hints: {
                    h1: '핵심은 출력 결과입니다. 구현 방식은 자유입니다.',
                    h2: '예: fmt.Println("Hello, World!")'
                },
                tests: [
                    { desc: 'Expected output과 일치하는 문자열을 출력한다', check: (c) => c.toLowerCase().includes('hello') && c.toLowerCase().includes('world') }
                ]
            },
            {
                id: 2,
                title: 'Function Definition',
                difficulty: 'beginner',
                description: 'Create a function that adds two integers and returns the sum for sample inputs like 2 and 3.',
                expectedOutput: '5',
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
                description: 'Create a Person struct with a method that returns a greeting string when called.',
                expectedOutput: 'Hello',
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
                expectedOutput: 'Hello, World!',
                validation: { mode: 'output-only' },
                hints: {
                    h1: '정답은 출력 결과 기준으로 채점됩니다.',
                    h2: '예: println!("Hello, World!");'
                },
                tests: [
                    { desc: 'Expected output과 일치하는 문자열을 출력한다', check: (c) => c.toLowerCase().includes('hello') && c.toLowerCase().includes('world') }
                ]
            },
            {
                id: 2,
                title: 'Function Definition',
                difficulty: 'beginner',
                description: 'Create a function that adds two i32 numbers and evaluates to their sum for sample inputs like 2 and 3.',
                expectedOutput: '5',
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
                description: 'Create a struct with implementation block where a constructor-like method returns an instance.',
                expectedOutput: 'Person::new("Alice")',
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
                expectedOutput: 'Hello, World!',
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
                expectedOutput: 'Variables are declared with DATA ... TYPE ... syntax.',
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
                expectedOutput: 'ALV grid display call is implemented with output table binding.',
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
                expectedOutput: 'SELECT statement fetches rows into an internal table.',
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
    basics: ['Print', 'Display', 'Output', 'Write'],
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
        variables: ['=', 'int ', 'String '],
        operators: ['+', '-', '*', '/', '%'],
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
        variables: ['='],
        operators: ['+', '-', '*', '/', '%'],
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
        variables: ['const ', 'let ', '='],
        operators: ['+', '-', '*', '/', '%'],
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
        variables: [':=', 'var '],
        operators: ['+', '-', '*', '/', '%'],
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
        variables: ['let ', 'let mut '],
        operators: ['+', '-', '*', '/', '%'],
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
        variables: ['DATA', '='],
        operators: ['+', '-', '*', '/', 'MOD'],
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
        { concept: 'declare', prompt: 'Declare and Print Variables', task: 'Create variables for a name and age, then print both values.' },
        { concept: 'reassign', prompt: 'Reassign a Variable', task: 'Assign a value to a variable, update it, and print the final value.' },
        { concept: 'constant', prompt: 'Use a Constant Value', task: 'Create a constant and use it in a small calculation or output.' },
        { concept: 'type-convert', prompt: 'Convert Between Types', task: 'Convert a numeric string to a number and use it in arithmetic.' },
        { concept: 'scope', prompt: 'Practice Variable Scope', task: 'Use variables inside and outside a block/function to print scope behavior.' },
        { concept: 'swap', prompt: 'Swap Two Values', task: 'Swap two variables and print the swapped result.' },
        { concept: 'accumulate', prompt: 'Accumulate a Total', task: 'Update a variable repeatedly to build a running total.' },
        { concept: 'input-parse', prompt: 'Parse Input into Variables', task: 'Read input data and store parsed values in separate variables.' },
        { concept: 'state', prompt: 'Track State with Variables', task: 'Use a state variable and change behavior based on its value.' },
        { concept: 'mini-model', prompt: 'Combine Multiple Variables', task: 'Use several variables together to compute and print a final result.' }
    ],
    operators: [
        { concept: 'arithmetic', prompt: 'Basic Arithmetic', task: 'Calculate and print results using +, -, *, and /.' },
        { concept: 'modulo', prompt: 'Use Modulo (%)', task: 'Use modulo to check whether a number is even or odd.' },
        { concept: 'comparison', prompt: 'Compare Two Values', task: 'Write expressions that compare two numbers and print the boolean results.' },
        { concept: 'logical', prompt: 'Combine Logical Conditions', task: 'Use logical operators to combine multiple conditions.' },
        { concept: 'precedence', prompt: 'Operator Precedence', task: 'Use parentheses to control evaluation order in an expression.' },
        { concept: 'compound', prompt: 'Compound Assignment', task: 'Update a variable using compound operators like += or -=.' },
        { concept: 'boolean-chain', prompt: 'Boolean Expression Chain', task: 'Create one clear boolean expression from multiple checks.' },
        { concept: 'score-rule', prompt: 'Score Rule Formula', task: 'Implement a scoring formula with arithmetic and comparison operators.' },
        { concept: 'discount-rule', prompt: 'Discount and Tax Calculation', task: 'Compute final price using discount and tax rules.' },
        { concept: 'edge-case', prompt: 'Operator Edge Cases', task: 'Handle boundary values safely when performing operations.' }
    ],
    conditions: [
        { concept: 'if-basic', prompt: 'Single If Condition', task: 'Use one if statement to run code only when a condition is true.' },
        { concept: 'if-else', prompt: 'If-Else Branch', task: 'Handle true and false cases using if-else.' },
        { concept: 'elif-chain', prompt: 'Multiple Branches', task: 'Use if/else-if (elif) to handle multiple conditions.' },
        { concept: 'nested', prompt: 'Nested Conditions', task: 'Use a condition inside another condition to refine decisions.' },
        { concept: 'guard', prompt: 'Guard Condition', task: 'Return or exit early when invalid input is detected.' },
        { concept: 'range-check', prompt: 'Range Validation', task: 'Check whether a value is within a specific range.' },
        { concept: 'category-map', prompt: 'Map Value to Label', task: 'Map input values to categories such as grade levels.' },
        { concept: 'validation', prompt: 'Input Validation', task: 'Validate user input and print clear error/success output.' },
        { concept: 'decision-table', prompt: 'Decision Table Logic', task: 'Implement branching logic based on multiple rule combinations.' },
        { concept: 'business-rule', prompt: 'Business Rule Branching', task: 'Apply realistic conditional rules to compute a final result.' }
    ]
};

function cleanCategoryName(name) {
    return (name || '').replace(/^\S+\s+Step\s+\d+:\s*/i, '').trim() || name;
}

function toTitleCase(text) {
    return (text || '')
        .replace(/[-_]+/g, ' ')
        .split(' ')
        .filter(Boolean)
        .map(part => part.charAt(0).toUpperCase() + part.slice(1))
        .join(' ');
}

function buildGeneratedTitle(action, keyword, category) {
    if (category === 'basics' && keyword === 'main') return 'Main Entry Point';
    return `${toTitleCase(action)} ${toTitleCase(keyword)}`;
}

function buildGeneratedDescription(language, action, keyword, category) {
    const langName = language.toUpperCase();

    if (category === 'basics' && keyword === 'main') {
        return `Write ${langName} code that defines a main entry point and prints output.`;
    }

    if (action.toLowerCase() === keyword.toLowerCase()) {
        return `Write ${langName} code using ${keyword}. Keep the solution short and clear.`;
    }

    return `Write ${langName} code to ${action.toLowerCase()} ${keyword}. Keep the solution short and clear.`;
}

function createPriorityProblem(category, language, id, seq, total) {
    const pack = PRIORITY_CATEGORY_STEPS[category];
    if (!pack || seq > pack.length) return null;

    const step = pack[seq - 1];
    const difficulty = difficultyByPosition(seq - 1, total);
    const signals = getSignals(language, category, step.concept);
    const lead = signals[0] || step.concept;
    const follow = signals[1] || step.concept;
    const profile = validationProfile(category, difficulty);

    return {
        id,
        title: step.prompt,
        difficulty,
        description: step.task,
        expectedOutput: `${toTitleCase(step.prompt)} requirement is satisfied with correct ${language.toUpperCase()} output/behavior.`,
        hints: {
            h1: `${langHintPrefix(language)}${step.concept} 흐름을 먼저 주석으로 정리한 뒤 코드로 옮기세요.`,
            h2: `${langHintPrefix(language)}핵심 시그널(${lead})과 보조 시그널(${follow})을 포함해 정답 로직을 완성하세요.`
        },
        tests: [
            {
                desc: `Uses language/category signal (${lead})`,
                check: (code) => {
                    const normalized = normalizeCodeForValidation(code).toLowerCase();
                    return signals.some(signal => normalized.includes(String(signal).toLowerCase()));
                }
            },
            {
                desc: `Contains executable ${language.toUpperCase()} logic`,
                check: (code) => hasExecutableShape(language, code) && !isLikelyPlaceholderSubmission(code)
            },
            {
                desc: 'Meaningful implementation length',
                check: (code) => hasMeaningfulImplementation(code, profile.minChars, {
                    minLines: profile.minLines,
                    minTokens: profile.minTokens
                })
            }
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
        java: 'Java 문법으로 ',
        python: 'Python 문법으로 ',
        typescript: 'TypeScript 문법으로 ',
        go: 'Go 문법으로 ',
        rust: 'Rust 문법으로 ',
        abap: 'ABAP 문법으로 '
    }[language] || '';
}

function getSignals(language, category, keyword) {
    const rules = LANGUAGE_SIGNALS[language] || { default: [] };
    const selected = [];

    if (rules[category]) selected.push(...rules[category]);
    selected.push(...(rules.default || []));

    const keywordSignal = String(keyword || '').trim();
    const keywordLooksLikeCode = /[^a-zA-Z]/.test(keywordSignal) || keywordSignal.length <= 4;
    if (keywordLooksLikeCode) {
        selected.push(keywordSignal);
    }

    return [...new Set(selected)].filter(Boolean);
}

function normalizeCodeForValidation(code) {
    return (code || '')
        .replace(/\/\*[\s\S]*?\*\//g, ' ')
        .replace(/(^|\s)#.*$/gm, '$1')
        .replace(/\/\/.*$/gm, '')
        .replace(/--.*$/gm, '')
        .trim();
}

function hasMeaningfulImplementation(code, minimumChars, options = {}) {
    const normalized = normalizeCodeForValidation(code);
    if (!normalized) return false;

    const meaningfulLines = normalized
        .split('\n')
        .map(line => line.trim())
        .filter(Boolean);

    const tokenCount = (normalized.match(/[A-Za-z_][A-Za-z0-9_]*|\d+|[(){}\[\].,:;+\-*/%<>=!&|]/g) || []).length;
    const minLines = options.minLines || 2;
    const minTokens = options.minTokens || 8;

    return normalized.length > minimumChars && meaningfulLines.length >= minLines && tokenCount >= minTokens;
}

function validationProfile(category, difficulty) {
    const isHard = difficulty === 'hard';
    const defaultProfile = {
        minChars: isHard ? 40 : 12,
        minLines: 2,
        minTokens: 8
    };

    if (category === 'variables') {
        return {
            minChars: isHard ? 30 : 8,
            minLines: 1,
            minTokens: 5
        };
    }

    if (category === 'operators') {
        return {
            minChars: isHard ? 35 : 10,
            minLines: 1,
            minTokens: 6
        };
    }

    return defaultProfile;
}


function hasExecutableShape(language, code) {
    const normalized = normalizeCodeForValidation(code);
    if (!normalized) return false;

    const executablePatterns = {
        python: /(def\s+\w+\s*\(|return\b|print\s*\(|if\b|for\b|while\b|=)/,
        java: /(class\s+\w+|public\s+static\s+void\s+main|return\b|if\b|for\b|while\b|=)/,
        typescript: /(function\s+\w+\s*\(|const\s+\w+\s*=|return\b|if\b|for\b|while\b|=>)/,
        go: /(func\s+\w+\s*\(|return\b|if\b|for\b|:=|var\s+\w+)/,
        rust: /(fn\s+\w+\s*\(|let\s+mut\s+|let\s+\w+|return\b|if\b|for\b|while\b|match\b)/,
        abap: /(DATA\b|WRITE\b|IF\b|LOOP\b|SELECT\b|CALL\s+FUNCTION\b)/i
    };

    const pattern = executablePatterns[language] || /(=|return\b|if\b|for\b|while\b|print\s*\()/;
    return pattern.test(normalized);
}

function isLikelyPlaceholderSubmission(code) {
    const normalized = normalizeCodeForValidation(code);
    if (!normalized) return true;

    const compact = normalized.replace(/\s+/g, ' ').trim().toLowerCase();
    const placeholders = [
        'def',
        'function',
        'class',
        'todo',
        'pass',
        'return',
        'write your solution here'
    ];

    return placeholders.includes(compact);
}

function createGeneratedProblem(category, language, id, seq, total) {
    const priority = createPriorityProblem(category, language, id, seq, total);
    if (priority) return priority;

    const keywordSet = CATEGORY_KEYWORDS[category] || ['logic', 'code', 'test', 'solve'];
    const actionSet = CATEGORY_ACTIONS[category] || ['Build', 'Solve', 'Refine', 'Practice'];
    const keyword = keywordSet[(seq - 1) % keywordSet.length];
    const action = actionSet[(seq - 1) % actionSet.length];
    const difficulty = difficultyByPosition(seq - 1, total);
    const guide = langHintPrefix(language);
    const signals = getSignals(language, category, keyword);
    const mainSignal = signals[0] || keyword;
    const profile = validationProfile(category, difficulty);

    return {
        id,
        title: buildGeneratedTitle(action, keyword, category),
        difficulty,
        description: buildGeneratedDescription(language, action, keyword, category),
        expectedOutput: `Implements ${toTitleCase(action)} ${toTitleCase(keyword)} correctly in ${language.toUpperCase()} and produces expected behavior.`,
        hints: {
            h1: `${guide}${keyword} 개념을 먼저 작은 코드 블록으로 검증하세요.`,
            h2: `${guide}${mainSignal} 및 관련 구문(${signals.slice(1, 3).join(', ') || keyword})을 포함해 입력/처리/출력을 분리하세요.`
        },
        tests: [
            {
                desc: `Uses language/category signal (${mainSignal})`,
                check: (code) => {
                    const normalized = normalizeCodeForValidation(code).toLowerCase();
                    return signals.some(signal => normalized.includes(signal.toLowerCase()));
                }
            },
            {
                desc: `Contains executable ${language.toUpperCase()} logic`,
                check: (code) => hasExecutableShape(language, code) && !isLikelyPlaceholderSubmission(code)
            },
            {
                desc: 'Has enough implementation length',
                check: (code) => hasMeaningfulImplementation(code, profile.minChars, {
                    minLines: profile.minLines,
                    minTokens: profile.minTokens
                })
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
// 문제 추가 템플릿
// ========================================
/*
{
    id: number,
    title: 'Problem title',
    difficulty: 'beginner' | 'easy' | 'medium' | 'hard',
    description: 'Problem description',
    expectedOutput: 'Expected output or behavior',
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
