define(['app'], function(app) {

  var date = new Date(),
    y = date.getFullYear(),
    m = date.getMonth();
  var firstDay = new Date(y, m, 1);
  var lastDay = new Date(y, m + 1, 0);

  var yyyy = y.toString();
  var mm = (m + 1).toString(); // getMonth() is zero-based
  var dd = date.getDate().toString();
  var fd = firstDay.getDate().toString();
  var ld = lastDay.getDate().toString();

  var oneDay = 24 * 3600 * 1000;
  var thirtyDays = 30 * oneDay;
  var thirteenMonth = 395 * oneDay;
  var sevenDays = 7 * oneDay;

  function hasProperty(obj) {
    if (typeof obj === "object") {
      for (var f in obj) {
        return true;
      }
    }
    return false;
  }

  return {
    isEmpty: function(value) {
      return (value === null) || (value === undefined) || (angular.isArray(value) && value.length === 0) || ((value + "") === "") || (typeof value === "object" && !hasProperty(value));
    },

    getFormatedCurrentDate: function() {
      return (mm[1] ? mm : "0" + mm[0]) + '/' + (dd[1] ? dd : "0" + dd[0]) + '/' + yyyy;
    },

    getCurrentYear: function() {
      return yyyy;
    },

    getFormatedFirstDayOfCurrentMonth: function() {
      return (mm[1] ? mm : "0" + mm[0]) + '/' + (fd[1] ? fd : "0" + fd[0]) + '/' + yyyy;
    },

    getFormatedLastDayOfCurrentMonth: function() {
      return (mm[1] ? mm : "0" + mm[0]) + '/' + (ld[1] ? ld : "0" + ld[0]) + '/' + yyyy;
    },

    getFormatedDateYear: function() {
      return yyyy
    },

    getFormatedDate: function(item) {
      if(item) {
        var date = new Date(item)
        var yyyy = date.getFullYear().toString();
        var mm = (date.getMonth() + 1).toString(); // getMonth() is zero/based
        var dd = date.getDate().toString();

        return (mm[1] ? mm : "0" + mm[0]) + '/' + (dd[1] ? dd : "0" + dd[0]) + '/' + yyyy;
      } else {
        return "";
      }
    },

    getFormatedDateTime: function(d) {
      if (d && d !== "") {
        var date = new Date(d);
        var dd = date.getDate().toString();
        var MM = (date.getMonth() + 1).toString(); //Months are zero based
        var yyyy = date.getFullYear();
        var hh = date.getHours().toString();
        var mm = date.getMinutes().toString();
        var ss = date.getSeconds().toString();
        return (MM[1] ? MM : "0" + MM[0]) + "/" + (dd[1] ? dd : "0" + dd[0]) + "/" + yyyy + " " +
          (hh[1] ? hh : "0" + hh[0]) + ":" + (mm[1] ? mm : "0" + mm[0]) + ":" + (ss[1] ? ss : "0" + ss[0]);
      } else {
        return "";
      }

    },

    getFormatedDateTimeInMin: function(d) {
      if (d) {
        var date = new Date(d);
        var dd = date.getDate().toString();
        var MM = (date.getMonth() + 1).toString(); //Months are zero based
        var yyyy = date.getFullYear();
        var hh = date.getHours().toString();
        var mm = date.getMinutes().toString();
        return (MM[1] ? MM : "0" + MM[0]) + "/" + (dd[1] ? dd : "0" + dd[0]) + "/" + yyyy + " " +
          (hh[1] ? hh : "0" + hh[0]) + ":" + (mm[1] ? mm : "0" + mm[0]);
      } else {
        return "";
      }
    },

    getFormatedTime: function(d) {
      if (d) {
        var date = new Date(d);
        var hh = date.getHours().toString();
        var mm = date.getMinutes().toString();
        return (hh[1] ? hh : "0" + hh[0]) + ":" + (mm[1] ? mm : "0" + mm[0]);
      } else {
        return "";
      }
    },

    getMMDDYYYY: function(date) {
      return date.substr(0, 10).replace(/\//g, '-');
    },

    getMMDDYYYYHHMM: function(date) {
      return date.substr(0, 16);
    },

    getFirstDayOfCurrentMonth: function() {
      return firstDay;
    },

    getCurrentDate: function() {
      return new Date();
    },

    getWeeklyDate: function(dateItem) {
      //return thursday date
      var ret = new Date(dateItem || new Date());
      ret.setDate(ret.getDate() + (4 - 1 - ret.getDay() + 7) % 7 + 1);
      ret = new Date(ret);
      // console.log(ret)
      return this.getFormatedDate(ret);
    },

    getMonthAgoOfCurrentDate: function() {
      var res = new Date(Date.now() - thirtyDays);
      return this.getFormatedDate(res);
    },
    getNYearAgoOfCurrentDate: function(yearAfter) {
      var date = new Date();
      var dd = date.getDate().toString();
      var MM = (date.getMonth()+1).toString(); //Months are zero based
      var yyyy = (date.getFullYear()+yearAfter).toString();
      var res = new Date(MM+'/'+dd+'/'+yyyy);
      return this.getFormatedDate(res);
    },
    getYearAgoOfCurrentDate: function(yearBefore) {
      var date = new Date();
      var dd = date.getDate().toString();
      var MM = (date.getMonth()+1).toString(); //Months are zero based
      var yyyy = (date.getFullYear()-yearBefore).toString();
      var res = new Date(MM+'/'+dd+'/'+yyyy);
      return this.getFormatedDate(res);
    },
    getWeekAgoOfCurrentDate: function() {
      var res = new Date(Date.now() - sevenDays);
      return this.getFormatedDate(res);res
    },
    getFormatedFirstDayOfLastYear: function() {
      var firstDayOfLastYear = new Date(y - 1, 0, 1);
      var dd = firstDayOfLastYear.getDate().toString();
      var MM = (firstDayOfLastYear.getMonth()+1).toString(); //Months are zero based
      var yyyy = (firstDayOfLastYear.getFullYear()).toString();
      var res = new Date(MM+'/'+dd+'/'+yyyy);
      return this.getFormatedDate(res);
    },
    getFormatedFirstDayOfLastMonth: function() {
      var date = new Date(Date.now() - thirteenMonth);
      var dt = new Date(y,m,1);
      var dd = dt.getDate().toString();
      var MM = (date.getMonth()+1).toString(); //Months are zero based
      var yyyy = (date.getFullYear()).toString();
      var res = new Date(MM+'/'+dd+'/'+yyyy);
      return this.getFormatedDate(res);
    },

    getMMMYYYY: function(dd) {
      var date = new Date(dd);
      var month = new Array();
      month[0] = "January";
      month[1] = "February";
      month[2] = "March";
      month[3] = "April";
      month[4] = "May";
      month[5] = "June";
      month[6] = "July";
      month[7] = "August";
      month[8] = "September";
      month[9] = "October";
      month[10] = "November";
      month[11] = "December";
      var mm = month[date.getMonth()];
      var MMM = mm.substr(0, 3);
      var yyyy = date.getFullYear();
      return MMM + "-" + yyyy;
    },

    getSelectedColumns: function(columnDefs, selectedColumnsFields) {
      var selectedColumns = [];
      for (var i = 0; i < columnDefs.length; i++) {
        var column = columnDefs[i];
        if (selectedColumnsFields.indexOf(column.field) != -1) {
          column.hide = false;
          selectedColumns.push(column);
        }
      }
      return selectedColumns;
    },

    setICMMasterData: function(icmMasterData) {
      window.localStorage.icmMasterData = angular.toJson(icmMasterData);
    },

    getICMMasterData: function() {
      return angular.fromJson(window.localStorage['icmMasterData']);
    },

    setSCMMasterData: function(scmMasterData) {
      window.localStorage.scmMasterData = angular.toJson(scmMasterData);
    },

    getSCMMasterData: function() {
      return angular.fromJson(window.localStorage['scmMasterData']);
    },

    setSRMasterData: function(srMasterData) {
      window.localStorage.srMasterData = angular.toJson(srMasterData);
    },

    getSRMasterData: function() {
      return angular.fromJson(window.localStorage['srMasterData']);
    },

    setSLMMasterData: function(slmMasterData) {
      window.localStorage.slmMasterData = angular.toJson(slmMasterData);
    },

    getSLMMasterData: function() {
      return angular.fromJson(window.localStorage['slmMasterData']);
    },

    setICARMasterData: function(icarMasterData) {
      window.localStorage.icarMasterData = angular.toJson(icarMasterData);
    },

    getICARMasterData: function() {
      return angular.fromJson(window.localStorage['icarMasterData']);
    },

    setPBMMasterData: function(pbmMasterData) {
      window.localStorage.pbmMasterData = angular.toJson(pbmMasterData);
    },

    getPBMMasterData: function() {
      return angular.fromJson(window.localStorage['pbmMasterData']);
    },

    setRtopAgendaMasteData: function(rtopAgendaMasterData) {
      window.localStorage.rtopAgendaMasterData = angular.toJson(rtopAgendaMasterData);
    },

    getRtopAgendaMasteData: function() {
      return angular.fromJson(window.localStorage['rtopAgendaMasterData']);
    },

    setSpeakerMasteData: function(speakerMasterData) {
      window.localStorage.speakerMasterData = angular.toJson(speakerMasterData);
    },

    getSpeakerMasteData: function() {
      return angular.fromJson(window.localStorage['speakerMasterData']);
    },

    setRcaMasterData: function(rcaMasterData) {
      window.localStorage.rcaMasterData = angular.toJson(rcaMasterData);
    },

    getRcaMasterData: function() {
      return angular.fromJson(window.localStorage['rcaMasterData']);
    },

    setQuestMasterData: function(questMasterData) {
      window.localStorage.questMasterData = angular.toJson(questMasterData);
    },
    getQuestMasterData: function() {
      return angular.fromJson(window.localStorage['questMasterData']);
    },

    setITAMMasterData: function(itamMasterData) {
      window.localStorage.itamMasterData = angular.toJson(itamMasterData);
    },

    getITAMMasterData: function() {
      return angular.fromJson(window.localStorage['itamMasterData']);
    },
    getSelectedItemDescById: function (keyId,id,keyDesc,collection)
    {
      var desc ='';
      var length = collection && collection.length;
      for (var i = 0; i < length; i++) {
        if(collection[i][keyId] === id){
          desc = collection[i][keyDesc];
        }
      }
      // console.log("desc : : : : :" + desc);
      return desc;

    },
    getSelectedItem: function(collection, key, isArray) {
      var items = [];
      var length = collection && collection.length;
      for (var i = 0; i < length; i++) {
        items.push(collection[i][key]);
      }
      if (isArray) {
        return items;
      } else {
        return items.toString();
      }

    },

    getSelectedItemIdByDesc: function(keyid, collection, keydesc, desc) {
      var id = '';
      var length = collection.length;
      for (var i = 0; i < length; i++) {
        if (collection[i][keydesc] === desc) {
          id = collection[i][keyid];
        }
      }
      return id;
    },

    getSelectedId: function(collection, key) {
      return this.getSelectedItem(collection, key, false);
    },

    getSelectedIds: function(collection, key) {
      return this.getSelectedItem(collection, key, true);
    },

    calChildItems: function(parentIds, parentSelectId, items) {
      var childItems = [];
      var len = items && items.length || 0;
      for (var i = 0; i < len; i++) {
        var item = items[i];
        if (parentIds.indexOf(item[parentSelectId]) >= 0) {
          childItems.push(item);
        }
      }
      return childItems;
    },

    getCookie: function (cname) {
      var name = cname + "=";
      var ca = document.cookie.split(';');
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    },

    getModuleName: function(scope, data) {
      var nameData = {}
      if (scope.currentState !== '') {
        var length = data.length;
        for (var i = 0; i < length; i++) {
          if (scope.currentState === data[i].tabname) {
            scope.$parent.iconCurrentMenu = data[i].icon
            scope.$parent.currentMenu = data[i].subEntityDesc;
            break;
          }
        }
      }
      return null
    },
    isNumber: function(input) {
      if (isNaN(input))
        return false;
      else
        return true;
    },
    isInteger: function isInteger(str) {
      var isInteger=/^\+?[1-9][0-9]*$/;
      return (isInteger.test(str));
    },
    percentRange: function(input) {
      if (!isNaN(input)) {
        if (input >= 0 && input <= 100)
          return true;
        else
          return false;
      } else
        return false;
    },
    getSubModuleName: function(scope, state, data) {
      if (state.current.name !== '') {
        var length = data.length;
        for (var i = 0; i < length; i++) {
          if (state.current.name === data[i].tabname) {
            scope.$parent.$parent.pageIcon = data[i].icon
            scope.$parent.$parent.pageName = data[i].subEntityDesc;
          }
          if (state.current.parent === data[i].tabname) {
            scope.$parent.$parent.currentMenu = data[i].subEntityDesc;
            scope.$parent.$parent.iconCurrentMenu = data[i].icon;
            break;
          }
        }
      }
      return
    },

    buildSelectedOption: function(key1, value1, key2, value2) {
      var selected = [];
      if (!this.isEmpty(value2)) {
        var obj = {};
        obj[key1] = value1;
        obj[key2] = value2;
        selected.push(obj);
      }
      return selected;
    },

    buildSelectedChildOption: function(parentkey, parentvalue, key1, value1, key2, value2) {
      var selected = [];
      var obj = {};
      obj[parentkey] = parentvalue;
      obj[key1] = value1;
      obj[key2] = value2;
      selected.push(obj);
      return selected;
    },

    sortByDate:function(collection, key) {
      if(collection && collection.length > 0) {
        return collection.sort(function(obj1,obj2) {return new Date(obj2[key]).getTime() - new Date(obj1[key]).getTime()});
      }else {
        return collection;
      }
    },

    compareStringDate: function(date1, date2) {
      if (angular.isString(date1) && angular.isString(date2)) {
        var d1 = Date.parse(date1);
        var d2 = Date.parse(date2);
        if (d1 >= d2) {
            return true;
        } else {
          return false;
        }
      }
    },

    getAGLocale: function() {
      var localeText = {}
      //paging
      localeText.next = '<i class="icon-angle-right"></i>';
      localeText.last = '<i class="icon-angle-double-right"></i>';
      localeText.first = '<i class="icon-angle-double-left"></i>';
      localeText.previous = '<i class="icon-angle-left"></i>';
      // tool panel
      localeText.columns = 'View By';
      localeText.pivotedColumns = 'Group By';
      return localeText;
    },

    getDefaultLayout: function($scope) {
      $scope.$parent.selectedLayout = 'default';
      $scope.$parent.layoutView = 'default';
      return $scope;
    },

    insertItemByDate: function(strDate, collection, newItem, label) {
      if (collection) {
        var newDate = new Date(strDate);
        for (var i = 0; i < collection.length; i++) {
          var date = new Date(collection[i][label]);
          if (newDate < date) {
            collection.splice(i, 0, newItem);
            return;
          }
        }
        collection.push(newItem);
      }
    },

    fixStylePbmViewAgenda:function(){
        //do special treatment for pages with special html this is not well fit for the whole logic;
        var firstThead=$(".svgTemplate").find("thead:first");
        var replacedTh=$(".svgTemplate").find("thead:first").find("th:gt(1)");
        replacedTh.css("background-color","#00B388").css("color","#fff");
        $(".svgTemplate").find("th:contains( Current Week RtOPs)").attr("colspan","4");
        var newTr=$("<tr></tr>");
        newTr.append(replacedTh);
        firstThead.append(newTr);
    },

    fixMainStyleExportChart:function(){
        $(".svgTemplate").find(".MsoNormalTable").find("tbody").find("tr:odd").css("background-color","#f9f9f9");
        $(".svgTemplate").find(".MsoNormalTable").find("tbody").find("td").css("border","1px solid #eee");
    },

    fixStyleForWrapDetail:function(sectionType){
        function deleteEmptyTr(){
            $.each($(exportDiv).find("tr"),function(i,v){
                if($(v).children("td").length == 1 && $($(v).children("td").eq(0)).text().length == 0){
                    $(v).remove();
                }
            });
        }
        function fixSubHeader(){
            $.each(($(exportDiv).find("th.addedSubHeader")),function(i,v){
                var findThlength = $(v).closest("thead").next("thead").find("th").length;
                if(findThlength > 0){
                    $(v).attr("colspan",findThlength);
                }

                $(v).css("background-color","#00B388").attr("align","left");
            });
        }
        function fixMainCss(){
            $(exportDiv).children("table").not(":first").css("margin-top","20px");
            $(exportDiv).find(".eachPanelTable")
            .css("border","none")
            .css("margin-top","6px");
            $(exportDiv).children("table").children("thead")
            .css("background-color","#00B388")
            .css("color","#fff")
            .css("font-size","13px")
            .css("padding","6px 10px");
            $(exportDiv).find(".eachPanelTable").children("thead")
            .css("background-color","#000")
            .css("color","#fff")
            .css("padding","6px 10px")
            .attr("text-align","center");
            $(exportDiv).find(".eachPanelTable").children("thead").children("th")
            .css("border","solid 1px #fff");
        }
        function fixEmptyTr(sectionType){
            if(sectionType === "pdf"){
                var fixTableColor = "#e5e5e5";
            } else {
                var fixTableColor = "#000";
            }
            $.each($(exportDiv).find("table.eachPanelTable"),function(i, v){
                if($(v).find("td[colspan]").length!=0 || $(v).find("td[rowspan]").length!=0){
                    return true;
                }
                var stroeTdNumbers = [];
                $.each($(v).find("tbody").find("tr"),function(z, q){
                    stroeTdNumbers.push($(q).children("td").length);
                });
                var maxTdLen = Math.max.apply(null,stroeTdNumbers);
                $.each($(v).find("tbody").find("tr"),function(z, q){
                    var checktdLen = $(q).children("td").length;
                    if(checktdLen < maxTdLen){
                        var tdEmptyLen = maxTdLen - checktdLen;
                        for(var m = 0;m < tdEmptyLen; m++){
                            var addTd = $("<td style='border:solid 1px "+fixTableColor+"'></td>");
                            addTd.appendTo($(q));
                        }
                    }
                });

            });
        }
        fixMainCss();
        fixSubHeader();
        deleteEmptyTr();
        fixEmptyTr(sectionType);
    },

    fixTableOrder:function(scopeReference,configData){
        if(typeof configData.fixTableIndex=="number"){
            var dataDiv=  $(exportDiv).find(".panel-default").eq(configData.fixTableIndex);
            var findOthers=$(dataDiv).find(".panel-body").children("div").not($("div:has(table)"));
            var tbodyPlus="<table width='100%'>";
            $.each(findOthers,function(i,v){
                tbodyPlus+="<tr width='100%'>";
                var tds=$(v).children();
                $.each(tds,function(i,v){
                    var eachTdValue=$(v).text();
                    if(i==1 && tds.length==3){
                        var nextValue= $(tds[i+1]).text();
                        eachTdValue+=nextValue;
                    }
                    tbodyPlus+=("<td class='plusVal'>"+eachTdValue+"</td>");
                    if(i==1){
                        return false;
                    }
                });
                tbodyPlus+="</tr>";
                //tbody=tbodyPlus+tbody;
            });
            tbodyPlus+="</table>";
            var targetTable=$(exportDiv).children("table").eq(configData.fixTableIndex);
            targetTable.prepend(tbodyPlus);
        }
    },

    fixWordTpl:function(sectionDetailType){
        if(sectionDetailType === "word"){
            $(exportDiv).find(".eachPanelTable").css("margin","0px");
        }
    },
    setChronicStatusColor:function(){
        $("thead th").css("color","#fff");
        $("table").attr("text-align","center");

    },
    fixChronicStatusCss:function(){
        $("tbody td").css("border","solid 1px #eee");
         $(".table-striped").find("thead").find("th").css("background-color","#00B388");
    },
    fixNgHideForExport:function(htmlCollection){
        if(htmlCollection && htmlCollection.length > 0){
            var data = [];
            $.each(htmlCollection,function(i,v){
                if(!$(v).hasClass("ng-hide")){
                    data.push(v);
                }
            });
            return data;
        }
    },
    addTextareaValchronicStatus:function(){
        $.each($("tbody textarea") , function(i,v){
            $(v).css("overflow","hidden").css("height","50px");
            $(v)[0].innerHTML = $(v).attr("value");
        });
    },
    addCheckboxVal:function(){
        $.each($("tbody").find("input[type='checkbox']") , function(i,v){
            var value = $(v).attr("value") == "true" ? true : false;
            $(v).attr("checked" , value);
        });
    },
    fixSimpleDetailObject:function(data , exportEmptyVal){
        if("changeAffectedClient" in data && data["changeAffectedClient"] instanceof Array ){
            var clientDesc = "";
            if(data["changeAffectedClient"].length > 0){
                for(var i = 0;i < data["changeAffectedClient"].length;i++){
                    clientDesc += data["changeAffectedClient"][i]["clientDesc"];
                    if(i != (data["changeAffectedClient"].length)-1){
                        clientDesc += ",";
                    }
                }
            }
            data.changeAffectedClient = clientDesc;
        }
        if("rtopAffectedClients" in data && data["rtopAffectedClients"] instanceof Array ){
            var clientDesc = "";
            if(data["rtopAffectedClients"].length > 0){
                for(var i = 0;i < data["rtopAffectedClients"].length;i++){
                    clientDesc += data["rtopAffectedClients"][i]["clientDesc"];
                    if(i != (data["rtopAffectedClients"].length)-1){
                        clientDesc += ",";
                    }
                }
            }
            data.rtopAffectedClients = clientDesc;
        }
        for(var dataKey in data){
            if(!exportEmptyVal){
                if(typeof data[dataKey] == "string" && data[dataKey].length == 0){
                //empty string
                    data[dataKey] = "N/A";
                }
                if(typeof data[dataKey] == "number" && data[dataKey] === 0){
                // number 0
                    data[dataKey] = "N/A";
                }
            }else{
                if(typeof data[dataKey] == "number" && data[dataKey] === 0){
                    data[dataKey] = data[dataKey]+"";
                }
            }
        }
        return data;
    },
  };
});

Array.prototype.move = function(oldIndex, newIndex) {
    while (oldIndex < 0) {
        oldIndex += this.length;
    }
    while (newIndex < 0) {
        newIndex += this.length;
    }
    if (newIndex >= this.length) {
        var k = newIndex - this.length;
        while ((k--) + 1) {
            this.push(undefined);
        }
    }
    this.splice(newIndex, 0, this.splice(oldIndex, 1)[0]);
    return this; // for testing purposes
};

if (!String.prototype.startsWith) {
    String.prototype.startsWith = function(searchString, position) {
        position = position || 0;
        return this.substr(position, searchString.length) === searchString;
    };
}