# wandted_pre_onboarding 사전과제
## 기능 요구사항
기업 채용을 위한 웹 서비스로 회사는 채용공고를 생성하고 사용자가 지원하는 형식이다.

- 채용공고 등록

requestdto
```json
{
    'companyName': 회사명,
    'position': 채용포지션,
    'price': 채용보상금,
    'content': 채용내용,
    'language': 사용언어
}
```
dto를 통하여 채용공고에 필요한 request를 받은 뒤 dto를 post entitiy로 변환하여 typeorm의 save 메서드를 사용하여 db에 저장하도록 구현

-------------------
- 채용공고 수정

- 채용공고 삭제

- 채용공고 목록 조회

- 채용공고 검색

- 채용 상세 페이지 조회

- 채용공고 지원