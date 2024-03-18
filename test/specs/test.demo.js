
//mocha definition
describe('test-case-001', function(){
    it('any name', async ()=>{
       browser.url('https://google.com') 
       //find single object
       await $('[name="q"]').setValue("sadasdasd")
       browser.pause(9000)
       browser.keys('Enter')
       //find many objects
       //$$


    })
})
