var sales_cheeseburger=0;	//판매 수량
var sales_tomatoburger=0;
var sales_kebabburger=0;
var sales_doubleburger=0;

var total_cheeseburger=0;		//그날의 판매수량


var today=new Date();
var alert_string="이미 0개 입니다!";



//치즈버거
function count_sales_cheeseburger(){	//치즈버거 주문 개수
	sales_cheeseburger+=1;
	alert("치즈 버거 "+sales_cheeseburger+"개");
	
	 return sales_cheeseburger;
	 var dbRefObject = firebase.database().ref();
     dbRefObject.child("sales_burger/sales_cheeseburger").set(sales_cheeseburger);
    
}
function cancel_sales_cheeseburger(){	//치즈버거 주문 취소
	sales_cheeseburger-=1;
	if (sales_cheeseburger<0){
		alert(alert_string);
		sales_cheeseburger+=1;
	}
	alert("치즈 버거 "+sales_cheeseburger+"개");
	var dbRefObject = firebase.database().ref();
    dbRefObject.child("sales_burger/sales_cheeseburger").set(sales_cheeseburger);
}



//케밥버거
function count_sales_kebabburger(){	//케밥버거 주문 개수
	sales_kebabburger+=1;
	alert("케밥 버거 "+sales_kebabburger+"개");
	
	var dbRefObject = firebase.database().ref();
    dbRefObject.child("sales_burger/sales_kebabburger").set(sales_kebabburger);

}
function cancel_sales_kebabburger(){	//케밥버거 주문 취소
	sales_kebabburger-=1;
	if (sales_kebabburger<0){
		alert(alert_string);
		sales_kebabburger+=1;
	}
	alert("케밥 버거 "+sales_kebabburger+"개");
	var dbRefObject = firebase.database().ref();
    dbRefObject.child("sales_burger/sales_kebabburger").set(sales_kebabburger);
}


//토마토 버거
function count_sales_tomatoburger(){	//토마토버거 주문 개수
	sales_tomatoburger+=1;
	alert("토마토 버거 "+sales_tomatoburger+"개");
	
	var dbRefObject = firebase.database().ref();
    dbRefObject.child("sales_burger/sales_tomatoburger").set(sales_tomatoburger);
}
function cancel_sales_tomatoburger(){	//토마토버거 주문 취소
	sales_tomatoburger-=1;
	if (sales_tomatoburger<0){
		alert(alert_string);
		sales_tomatoburger+=1;
	}
	alert("토마토 버거 "+sales_tomatoburger+"개");
	var dbRefObject = firebase.database().ref();
    dbRefObject.child("sales_burger/sales_tomatoburger").set(sales_tomatoburger);
}

//더블 버거
function count_sales_doubleburger(){	//더블버거 주문 개수
	sales_doubleburger+=1;
	alert("더블 버거 "+sales_doubleburger+"개");
	var dbRefObject = firebase.database().ref();
    dbRefObject.child("sales_burger/sales_doubleburger").set(sales_doubleburger);
}
function cancel_sales_doubleburger(){	//더블버거 주문 취소
	sales_doubleburger-=1;
	if (sales_doubleburger<0){
		alert(alert_string);
		sales_doubleburger+=1;
	}
	alert("더블 버거 "+sales_doubleburger+"개");
	var dbRefObject = firebase.database().ref();
    dbRefObject.child("sales_burger/sales_doubleburger").set(sales_doubleburger);
}

//모든 손님들의 총 주문량

function sendSales(sales_cheeseburger){
	alert(sales_cheeseburger);	
}





//메뉴 추천 기능 만들기
var allergy_num;	//1: 육류알러지 2: 토마토 알러지 3: 유제품 알러지
var recommended_menus=["kebabburger","tomatoburger","doubleburger","cheeseburger"];

//알러지
function recommendation_allergy(allergy_num){
	if(allergy_num==1){	//육류 알러지인 경우
		writeAllergy2("meet","cheeseburger","tomatoburger");
	}
	else if(allergy_num==2){	//토마토 알러지인 경우
		writeAllergy3("tomato","cheeseburger","kebabburger","doubleburger");
	}
	else if(allergy_num==3){	//유제품 알러지인 경우
		writeAllergy3("milk","kebabburger","tomatoburger","doubleburger");
	}
	else{
		alert("오류");
	}
}

//알러지에 따른 추천 메뉴를 db에 저장-추천메뉴2개인 경우
function writeAllergy2(allergy,menu1, menu2){
	firebase.database().ref('allergyMenu/'+allergy).set({
		recommend1:menu1,
		recommend2:menu2
	});
}
//추천menu가 3개인 경우
function writeAllergy3(allergy,menu1, menu2,menu3){
	firebase.database().ref('allergyMenu/'+allergy).set({
		recommend1:menu1,
		recommend2:menu2,
		recommend3:menu3
	});
}

//입맛
function recommendation_taste(taste){

	if(taste=="hot"){
		if(recommended_menus.includes('doubleburger')||recommended_menus.includes('kebabburger')){
			recommended_menus=["doubleburger","kebabburger"];
			alert(recommended_menus);
		}
		else{
			alert("죄송합니다. 해당하는 메뉴가 없습니다.");
		}
	}
	else if(taste=="simple"){
		if(recommended_menus.includes('cheeseburger')){
			recommended_menus=["cheeseburger"];
			alert(recommended_menus);
		}
		else{
			alert("죄송합니다. 해당하는 메뉴가 없습니다.");
		}
	}
	else if(taste=="fresh"){
		if(recommended_menus.includes('tomatoburger')){
			recommended_menus=["tomatoburger"];
			alert(recommended_menus);
		}
		else{
			alert("죄송합니다. 해당하는 메뉴가 없습니다.");
		}
	}
}

