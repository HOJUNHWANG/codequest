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
            // 여기에 더 많은 문제 추가!
        ],
        
        variables: [
            // Variables 카테고리 문제들
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
// 문제 추가 템플릿
// ========================================
/*
{
    id: 번호,
    title: '문제 제목',
    difficulty: 'beginner' | 'easy' | 'medium' | 'hard',
    description: '문제 설명',
    hints: {
        h1: '가벼운 힌트',
        h2: '구체적인 코드 예시'
    },
    tests: [
        { 
            desc: '테스트 설명', 
            check: (code) => code.includes('키워드') 
        }
    ]
}
*/
