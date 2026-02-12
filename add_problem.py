#!/usr/bin/env python3
"""
CodeQuest Problem Generator
대화형으로 문제를 생성하고 problems.js에 자동 추가
"""

def create_problem():
    print("=" * 60)
    print("CodeQuest Problem Generator")
    print("=" * 60)
    print()
    
    # 언어 선택
    languages = ['java', 'python', 'typescript', 'go', 'rust', 'abap']
    print("언어를 선택하세요:")
    for i, lang in enumerate(languages, 1):
        print(f"  {i}. {lang}")
    
    lang_choice = int(input("\n선택 (1-6): ")) - 1
    language = languages[lang_choice]
    
    # 카테고리 선택
    categories = [
        'basics', 'variables', 'operators', 'conditions', 'loops', 'functions',
        'arrays', 'strings', 'oop', 'collections', 'errors', 'files',
        'datastructures', 'algorithms', 'recursion', 'async', 'testing',
        'realworld', 'database', 'api', 'security', 'performance', 'interview'
    ]
    
    print("\n카테고리를 선택하세요:")
    for i, cat in enumerate(categories, 1):
        print(f"  {i:2d}. {cat}")
    
    cat_choice = int(input("\n선택 (1-23): ")) - 1
    category = categories[cat_choice]
    
    # 문제 정보 입력
    print("\n" + "=" * 60)
    problem_id = int(input("문제 번호 (ID): "))
    title = input("문제 제목: ")
    
    print("\n난이도 선택:")
    print("  1. beginner")
    print("  2. easy")
    print("  3. medium")
    print("  4. hard")
    difficulty_choice = int(input("선택 (1-4): "))
    difficulties = ['beginner', 'easy', 'medium', 'hard']
    difficulty = difficulties[difficulty_choice - 1]
    
    description = input("\n문제 설명: ")
    hint1 = input("Hint 1 (가벼운 힌트): ")
    hint2 = input("Hint 2 (구체적인 코드): ")
    
    # 테스트 케이스
    print("\n테스트 케이스 입력 (완료하려면 빈 줄):")
    tests = []
    test_num = 1
    while True:
        test_desc = input(f"  Test {test_num} 설명 (빈 줄=완료): ")
        if not test_desc:
            break
        
        print("    검사할 키워드/패턴 (예: 'print', 'def', '/for|while/'):")
        test_pattern = input("    > ")
        
        # 검사 함수 생성
        if test_pattern.startswith('/') and test_pattern.endswith('/'):
            # 정규식
            pattern = test_pattern[1:-1]
            check = f"(c) => /{pattern}/.test(c)"
        else:
            # 단순 포함
            check = f"(c) => c.includes('{test_pattern}')"
        
        tests.append({
            'desc': test_desc,
            'check': check
        })
        test_num += 1
    
    # JavaScript 코드 생성
    hint2_escaped = hint2.replace('\\', '\\\\').replace('\n', '\\n').replace("'", "\\'")
    
    problem_code = f"""            {{
                id: {problem_id},
                title: '{title}',
                difficulty: '{difficulty}',
                description: '{description}',
                hints: {{
                    h1: '{hint1}',
                    h2: '{hint2_escaped}'
                }},
                tests: [
"""
    
    for test in tests:
        problem_code += f"                    {{ desc: '{test['desc']}', check: {test['check']} }},\n"
    
    problem_code += """                ]
            }"""
    
    # 결과 출력
    print("\n" + "=" * 60)
    print("생성된 문제 코드:")
    print("=" * 60)
    print(problem_code)
    print("=" * 60)
    
    # 파일에 추가할지 확인
    save = input("\nproblems.js에 추가하시겠습니까? (y/n): ")
    
    if save.lower() == 'y':
        with open('problems.js', 'r', encoding='utf-8') as f:
            content = f.read()
        
        # 해당 언어/카테고리 섹션 찾기
        search_pattern = f"{language}: {{\n        {category}: ["
        
        if search_pattern in content:
            # 기존 배열에 추가
            insert_pos = content.find(search_pattern) + len(search_pattern)
            # 배열의 마지막 항목 뒤에 추가
            # 간단하게 하기 위해 수동으로 추가하라고 안내
            print("\n⚠️  자동 추가는 복잡합니다.")
            print(f"\n✅ problems.js 파일을 열고")
            print(f"   {language} > {category} 섹션에")
            print(f"   위 코드를 복사해서 붙여넣으세요!")
        else:
            print(f"\n⚠️  {language} > {category} 섹션이 없습니다.")
            print(f"   먼저 섹션을 만들고 위 코드를 추가하세요.")
    
    print("\n✅ 완료!")

if __name__ == '__main__':
    try:
        create_problem()
    except KeyboardInterrupt:
        print("\n\n취소되었습니다.")
    except Exception as e:
        print(f"\n❌ 에러: {e}")
