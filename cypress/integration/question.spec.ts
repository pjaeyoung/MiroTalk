describe('질문작성페이지 테스트', () => {
  let questions;

  before(() => {
    cy.visit('/');
    cy.fixture('questions').then((_q) => {
      questions = _q;
    });
  });

  beforeEach(() => {
    questions.forEach((question) => {
      cy.get('input[name=createQuestion]').type(`${question}{enter}`);
    });
  });

  afterEach(() => {
    cy.get('li > div > button:last-of-type').then(($btn) => {
      $btn.trigger('click');
    });
  });

  it('질문입력창에 작성한 글이 질문리스트아이템으로 생성되어야 합니다. ', () => {
    cy.get('li > input').then(($questionGroup) => {
      expect($questionGroup).to.have.length(3);
      $questionGroup.each((index) => {
        expect($questionGroup[index]).value(questions[index]);
      });
    });
  });

  it('질문리스트아이템의 수정버튼을 클릭하면 해당 질문리스트아이템의 변경사항이 질문리스트에 업데이트되어야합니다.', () => {
    cy.get('li:first-child > div > button:first-of-type').then(($btn) => {
      $btn.trigger('click');
    });

    const newText = '질문변경시키기';
    cy.get('li:first-child > input').clear().type(newText).should('value', newText);
  });

  it('질문리스트아이템의 삭제버튼을 클릭하면 해당 질문리스트아이템은 질문리스트에서 삭제해야합니다.', () => {
    cy.get('li:first-child > div > button:last-of-type').then(($btn) => {
      $btn.trigger('click');
    });
    cy.get('li > input').then(($questionGroup) => {
      expect($questionGroup).to.have.length(2);
      $questionGroup.each((index) => {
        expect($questionGroup[index]).is.not.value(questions[0]);
      });
    });
  });
});
