describe('PartA', function(){
    var alert_msg;

    beforeEach(function(){
        jasmine.getFixtures().fixturesPath = '';
        loadFixtures('../cscie3ProjectUnit1/PartA/project1.html');
        $.getScript("../cscie3ProjectUnit1/PartA/js/project1.js");



    });

    describe('step 1', function(){

        it('should produce 3 alert dialogs', function(){
            var alertSpy = spyOn(window, 'alert');


            //var spyEvent = spyOnEvent('#clickme1', 'click');
            $('#clickme1').click();
            //expect('click').toHaveBeenTriggeredOn('#clickme1');
            //expect(spyEvent).toHaveBeenTriggered();

            expect(alertSpy).toHaveBeenTriggered();

        });

    });

});
