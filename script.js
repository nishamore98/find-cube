var arr = [1,5,4,3,8,20];

function myOnload() {
    document.getElementById('myarray').innerHTML=arr;
};

function myfun(){
    var ans = [];
    for(var i=0;i<arr.length;i++){
        var temp = arr[i]*arr[i]*arr[i];
        ans.push(temp);
    }
    document.getElementById('myans').innerHTML=ans;
}
