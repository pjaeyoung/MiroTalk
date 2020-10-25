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
    cy.get('body').then(($body) => {
      const $questionGroup = $body.find('li > div > button:last-of-type');
      if($questionGroup.length > 0){
        cy.get('li > div > button:last-of-type').each(($btnDelete)=>{
          $btnDelete.trigger('click');
        })
      }
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

  it('질문리스트에 아이템이 하나도 없으면 모드 버튼을 클릭했을 때 모달창을 띄우지 않습니다.',()=>{
    cy.get('li > div > button:last-of-type').each(($btnDelete)=>{
      $btnDelete.trigger('click');
    })
    cy.get('button[name=chat]').should('have.attr','disabled');
    cy.get('button[name=video').should('have.attr','disabled');
  });

  describe('모달창',()=>{
    beforeEach(()=>{
      cy.get('button[name=chat]').trigger('click');
    });

    afterEach(()=>{
      cy.get('.modal').then(($modal)=>{
        $modal.hide();
      })
    })

    it('닫기 버튼을 누르면 모달창을 제거해야합니다.',()=>{
      cy.get('.modal .btn-close').trigger('click');
      cy.get('.modal').should('not.be.visible');
    })

    it('timer는 1부터 10까지만 작성이 가능합니다.',()=>{
      const input = cy.get('.modal input');
      let testCases = [['2','2'],['10','10'],['-1','1'],['11','1']];
      testCases.forEach(([received,expected])=>{
        input.type(received).should('contain.value',expected);
      });
    });

    it('chat버튼으로 모달창을 출력 후 start 버튼을 클릭하면 ChatMode 페이지로 전환해야 합니다.',()=>{
      cy.get('.modal .btn-start').trigger('click');
      cy.url().should((url)=>{
        expect(url.match(/(?<=\/)\w+$/)[0]).to.equals('ChatMode');
      })
    });

    it('video버튼으로 모달창을 출력 후 start 버튼을 클릭하면 VideoMode 페이지로 전환해야 합니다.',()=>{
      cy.get('.modal .btn-close').trigger('click');
      cy.get('button[name=video]').trigger('click');
      cy.get('.modal .btn-start').trigger('click');
      cy.url().should((url)=>{
        expect(url.match(/(?<=\/)\w+$/)[0]).to.equals('VideoMode');
      })
    });
  })
});
