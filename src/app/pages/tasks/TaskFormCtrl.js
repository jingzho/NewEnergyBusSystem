
(function () {
    'use strict';

    angular.module('demo.pages.tasks')
        .controller('TaskFormCtrl', TaskFormCtrl);

    function TaskFormCtrl($scope) {
        $scope.smartTablePageSize = 15;
        $scope.modalDatas = {};

        const formName = ['快充站巡视表单', '离散站巡视表单', '公交充电数据表','充电桩巡视表单','公交站高压巡视任务单'];
        const createDate = ['2018-06-01', '2018-05-30', '2018-04-15'];
        const createMan = ['周婧'];
        const formType = ['样式一','样式二','样式三'];
        $scope.formsData = [];
        +function() {
            for (let i = 0; i < 3; i++) {
                $scope.formsData.push({
                    id: i + 1,
                    formName: formName [Math.floor(Math.random() * formName.length)],
                    createDate: createDate [Math.floor(Math.random() * createDate .length)],
                    createMan: createMan [Math.floor(Math.random() * createMan .length)],
                    formType: formType [Math.floor(Math.random() * formType .length)],
                });
            }
        }();
    }
})();
