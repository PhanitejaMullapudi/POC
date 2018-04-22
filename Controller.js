var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope) {
    $scope.UserName = "";
    $scope.DataList1 = [{
        "id": "1",
        "min": "1.1 KRA 1",
        "date": "",
        "weight": "",
        "midMinSocre": "",
        "midMaxSocre": "",
        "midTotalWeight": "",
        "finMinSocre": "",
        "finMaxSocre": "",
        "finTotalWeight": "",
        "isParent": "true"
    },
    {
        "min": "1.1.1",
        "date": "",
        "weight": "1",
        "midMinSocre": "1",
        "midMaxSocre": "3",
        "midTotalWeight": "3",
        "finMinSocre": "",
        "finMaxSocre": "",
        "finTotalWeight": "3",
        "isParent": "false"
    },
    {
        "min": "1.1.2",
        "date": "",
        "weight": "1",
        "midMinSocre": "1",
        "midMaxSocre": "3",
        "midTotalWeight": "3",
        "finMinSocre": "",
        "finMaxSocre": "",
        "finTotalWeight": "3",
        "isParent": "false"
    }];
    $scope.DataList2 = [{
        "id": "2",
        "min": "1.2 KRA 2",
        "date": "",
        "weight": "",
        "midMinSocre": "",
        "midMaxSocre": "",
        "midTotalWeight": "",
        "finMinSocre": "",
        "finMaxSocre": "",
        "finTotalWeight": "",
        "isParent": "true"
    },
    {
        "min": "1.2.1",
        "date": "",
        "weight": "1",
        "midMinSocre": "1",
        "midMaxSocre": "3",
        "midTotalWeight": "3",
        "finMinSocre": "",
        "finMaxSocre": "",
        "finTotalWeight": "3",
        "isParent": "false"
    },
    {
        "min": "1.2.2",
        "date": "",
        "weight": "1",
        "midMinSocre": "1",
        "midMaxSocre": "3",
        "midTotalWeight": "3",
        "finMinSocre": "",
        "finMaxSocre": "",
        "finTotalWeight": "3",
        "isParent": "false"
    }
    ];
    $scope.AddToD1 = function () {
        $scope.DataList1.push({
            "min": "1.2." + $scope.DataList1.length,
            "date": "",
            "weight": "1",
            "midMinSocre": "1",
            "midMaxSocre": "3",
            "midTotalWeight": "3",
            "finMinSocre": "",
            "finMaxSocre": "",
            "finTotalWeight": "3",
            "isParent": "false"
        })
    };
    $scope.AddToD2 = function () {
        $scope.DataList2.push({
            "min": "1.2." + $scope.DataList2.length,
            "date": "",
            "weight": "1",
            "midMinSocre": "1",
            "midMaxSocre": "3",
            "midTotalWeight": "3",
            "finMinSocre": "",
            "finMaxSocre": "",
            "finTotalWeight": "3",
            "isParent": "false"
        })
    };
});
 