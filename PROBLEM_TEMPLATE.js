// ========================================
// 문제 추가 템플릿
// ========================================

// 1. 이 템플릿을 복사
// 2. 내용 수정
// 3. problems.js의 해당 언어/카테고리 배열에 추가

{
    id: 999,  // ⬅️ 문제 번호 (고유값)
    
    title: 'Your Problem Title',  // ⬅️ 문제 제목
    
    difficulty: 'beginner',  // ⬅️ beginner | easy | medium | hard
    
    description: 'Write a detailed description of the problem here.',  // ⬅️ 문제 설명
    
    hints: {
        h1: 'Give a gentle hint here',  // ⬅️ 가벼운 힌트
        h2: 'def solution():\n    return "Show actual code here"'  // ⬅️ 구체적 코드 (개행은 \n 사용)
    },
    
    tests: [
        // ⬅️ 테스트 케이스들 (여러 개 가능)
        { 
            desc: 'Check if code contains something',  // 테스트 설명
            check: (code) => code.includes('keyword')  // 검사 함수
        },
        { 
            desc: 'Check with regex pattern', 
            check: (code) => /for|while/.test(code)  // 정규식 사용 가능
        },
        {
            desc: 'Check multiple conditions',
            check: (code) => code.includes('def') && code.includes('return')
        }
    ]
}

// ========================================
// 검사 함수 (check) 예제
// ========================================

// 1. 키워드 포함 여부
check: (code) => code.includes('print')

// 2. 대소문자 무시하고 포함 여부
check: (code) => code.toLowerCase().includes('hello')

// 3. 정규식 패턴 매칭
check: (code) => /def\s+\w+\(/.test(code)  // def 함수명( 패턴

// 4. 여러 조건 AND
check: (code) => code.includes('class') && code.includes('__init__')

// 5. 여러 조건 OR
check: (code) => code.includes('for') || code.includes('while')

// 6. 특정 횟수 이상 나타나는지
check: (code) => (code.match(/return/g) || []).length >= 2

// 7. ABAP 키워드 (대소문자 무시)
check: (code) => code.toUpperCase().includes('DATA')

// 8. 부정 조건 (포함하지 않아야 함)
check: (code) => !code.includes('temp') && !code.includes('tmp')

// ========================================
// 언어별 예제
// ========================================

// PYTHON 예제
{
    id: 10,
    title: 'List Comprehension',
    difficulty: 'easy',
    description: 'Create a list of even numbers from 0 to 20 using list comprehension.',
    hints: {
        h1: 'Use [x for x in range() if condition]',
        h2: 'evens = [x for x in range(21) if x % 2 == 0]'
    },
    tests: [
        { desc: 'Uses list comprehension', check: (c) => /\[.*for.*in.*\]/.test(c) },
        { desc: 'Uses range', check: (c) => c.includes('range') },
        { desc: 'Uses modulo', check: (c) => c.includes('%') }
    ]
}

// JAVA 예제
{
    id: 20,
    title: 'ArrayList Operations',
    difficulty: 'easy',
    description: 'Create an ArrayList, add 5 elements, and print them.',
    hints: {
        h1: 'Use ArrayList<Type> and .add() method',
        h2: 'ArrayList<Integer> list = new ArrayList<>();\nlist.add(1);\nfor(int n : list) System.out.println(n);'
    },
    tests: [
        { desc: 'Uses ArrayList', check: (c) => c.includes('ArrayList') },
        { desc: 'Uses add method', check: (c) => c.includes('.add(') },
        { desc: 'Has loop', check: (c) => /for|while/.test(c) }
    ]
}

// ABAP 예제
{
    id: 30,
    title: 'Internal Table Loop',
    difficulty: 'medium',
    description: 'Loop through an internal table and sum all values.',
    hints: {
        h1: 'Use LOOP AT...INTO and accumulate',
        h2: 'DATA: lv_sum TYPE i.\nLOOP AT lt_numbers INTO DATA(lv_num).\n  lv_sum = lv_sum + lv_num.\nENDLOOP.'
    },
    tests: [
        { desc: 'Uses LOOP AT', check: (c) => c.toUpperCase().includes('LOOP AT') },
        { desc: 'Has ENDLOOP', check: (c) => c.toUpperCase().includes('ENDLOOP') },
        { desc: 'Has accumulation', check: (c) => c.includes('+') || c.includes('SUM') }
    ]
}
