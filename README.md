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
dto를 통하여 채용공고에 필요한 request를 입력 받는다.

dto의 companyName을 통해 db에서 회사 정보를 조회한다.

회사 정보가 없을 시 notfoundexception을 발생시킨다.

dto의 채용공고 정보와 조회한 회사 정보를 post entitiy로 변환하여 typeorm의 save 메서드를 사용하여 db에 저장한다.

-------------------
- 채용공고 수정

requestdto
```json
{
    'position': 채용포지션,
    'price': 채용보상금,
    'content': 채용내용,
    'language': 사용언어
}
```
url querystring으로 채용공고 id를 받고, requestDto를 통해 수정에 필요한 request를 입력받는다

채용공고를 전부 수정하지 않을 수 있으므로 put이 아닌 patch를 컨트롤러에서 사용하였다. 

채용공고 id를 이용하여 findOneBy({id}) 메서드를 사용해 db에서 채용공고를 조회하고 없을 경우 notfoundexception을 발생시킨다.

채용공고 조회시 requestDto의 값을 사용하여 채용공고를 수정한 후 save() 매서드를 사용하여 db에 저장한다.

------
- 채용공고 삭제

url querystring으로 삭제할 채용공고 id를 받아온다

채용공고 id를 이용하여 typeorm의 delete 메서드를 사용해 db에서 채용공고를 삭제한다.

채용공고가 없을 경우는 notfoundexception을 발생시킨다.

- 채용공고 목록 조회
reponserdto
```json
{
    'id': 채용공고 pk
    'position': 채용포지션,
    'price': 채용보상금,
    'language': 사용언어
    'company': Company entity
}
```

typeorm의 find() 메서드를 사용해 db에 저장된 채용공고를 모두 조회한다.

조회한 posts 배열을 for문을 사용해 toDto 메서드를 사용해 getPostDto로 변환한다.

posts entity가 아닌 Dto를 리턴한다.

- 채용공고 검색

url querystring으로 조회할 채용공고 id를 입력받는다.

typeorm의 findOneBy({id) 메서드를 사용해 db에 저장된 id의 채용공고를 조회한다.

채용공고가 존재하지 않을 시 notfoundexception을 발생시킨다.

- 채용 상세 페이지 조회

- 채용공고 지원