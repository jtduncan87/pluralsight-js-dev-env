import {expect} from 'chai';
import {jsdom} from 'jsdom';
import fs from 'fs';

describe('First test', () =>{
  it('should pass', () =>{
    expect(true).to.equal(true);
  })
});

describe('index.html', ()=>{
  it('should say hello', (done) =>{ // async tests need done
    const index = fs.readFileSync('./src/index.html', 'utf-8')
    jsdom.env(index, function(err, win){
      const h1 = win.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal('Roll Tide!');
      done();
      win.close();
    });
  })
})
