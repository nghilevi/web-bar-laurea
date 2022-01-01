var app = angular.module("myapp", ["firebase"]);
/*this function will be called by Angular. Once we have the scope, we can then assign variables to the scope*/
function MyController($scope, $firebase) {
	var ref = new Firebase("https://barlaurea.firebaseio.com/week1");
	var itemCode="item1";
	//items is an object
	$scope.items = $firebase(ref);
	$scope.sidebarEdit="partials/weekDayEditForm.html"; //weekday.html edit form
	$scope.editingWeekDay=null;

	$scope.editWeekDay=function(itemWeekDay){
		itemCode="item1";
		if(itemWeekDay=="Monday"){
			itemCode="item1";
		}else if(itemWeekDay=="Tuesday"){
			itemCode="item2";
		}else if(itemWeekDay=="Wednesday"){
			itemCode="item3";
		}else if(itemWeekDay=="Thursday"){
			itemCode="item4";
		}else if(itemWeekDay=="Friday"){
			itemCode="item5";
		}
		$scope.editingWeekDay=$scope.items[itemCode];
	}

	$scope.submitChanges=function(){
		//get back the udated item
		var updatedItem=$scope.editingWeekDay;

		//each item which has been changed has its own code, so it will be changed accordingly based on this code in the database
		if(itemCode=="item1"){
			$scope.items.$update({item1: updatedItem});
		}else if(itemCode=="item2"){
			$scope.items.$update({item2: updatedItem});
		}else if(itemCode=="item3"){
			$scope.items.$update({item3: updatedItem});
		}else if(itemCode=="item4"){
			$scope.items.$update({item4: updatedItem});
		}else if(itemCode=="item5"){
			$scope.items.$update({item5: updatedItem});
		}
		
		//hide the edit form		
		$scope.editingWeekDay=false;
	}

	$scope.cancel=function(){
		//hide the edit form		
		$scope.editingWeekDay=false;
	}

}