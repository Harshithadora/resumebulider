// function getfile(file,callback)
// {
//   var xhr = new XMLHttpRequest();
//   xhr.overrideMimeType("application/json") ;
//   xhr.open("GET",file,true);
//   xhr.onreadystatechange = function()
//   {
//     if(xhr.readyState === 4 && xhr.status == "200"){
//     callback(xhr.responseText);
//   }
// };
// xhr.send(null);
// }
//getfile("data.json",function(text){
//  var data = JSON.parse(text);
  //console.log(data);
//  details(data.basics);
  //career(data.careerObjective);
  //education(data.education);
//  skillset(data.skills);
  //achieve(data.achievements);
function loadjson(file){
  return new Promise((resolve,reject)=>{
    return fetch(file).then(response=>{
      if(response.ok){
        resolve(response.json());
      }
      else{
        reject(new Error('error'));
      }
    })
  })
}
var newfile = loadjson("data.json")
newfile.then(data=>{
  details(data.basics);
  career(data.careerObjective);
  education(data.education);
skillset(data.skills);
achieve(data.achievements);

})
var child = document.querySelector(".childone")
function details(det)
{
    var img = document.createElement("img");
    img.src = det.image;
    child.appendChild(img);

    var name = document.createElement("h3");
    name.textContent = det.name;
    child.appendChild(name);

    var phoneno = document.createElement("h3");
    phoneno.textContent = det.phoneno;
    child.appendChild(phoneno);

    var email = document.createElement("a");
    email.href = "mailto:harshitha@gmail.com";
    email.textContent=det.email;
    child.appendChild(email);

    var Address = document.createElement("h2");
    Address.textContent = "Address:";
    child.appendChild(Address);

    var hr= document.createElement("hr");
    child.appendChild(hr);

    var Address = document.createElement("p");
    Address.textContent = det.Address;
    child.appendChild(Address);

}
var child2 = document.querySelector(".childtwo")
function career(careerinfo)
{

  var career = document.createElement("h3");
  career.textContent = "career Objective";
  child2.appendChild(career);

  var hr = document.createElement("hr");
  child2.appendChild(hr);

var info1 = document.createElement("p");
info1.textContent = careerinfo.info;
child2.appendChild(info1);

}
function education(edu)
{
var ed = document.createElement("h2");
ed.textContent = "Educational Qualification";
child2.appendChild(ed);

 var hr = document.createElement("hr");
 child2.appendChild(hr);

 for(i=0;i<edu.length;i++)
 {
   var deg = document.createElement("h3");
   deg.textContent = edu[i].degree;
   child2.appendChild(deg);

   var eduul = document.createElement("ul");
   var eduli = document.createElement("li");
   eduli.textContent = edu[i].institute;
   eduul.appendChild(eduli);
   child2.appendChild(eduul);

      var dataul = document.createElement("ul");
      var datali = document.createElement("li");
      datali.textContent = edu[i].data;
      dataul.appendChild(datali);
      child2.appendChild(dataul);
}
}
function skillset(skillinfo)
{
  var sk = document.createElement("h2");
  sk.textContent = "Technical Skills:";
  child2.appendChild(sk);

  var h = document.createElement("hr");
  child2.appendChild(h);

  var skilldata = document.createElement("table");
  skilldata.border="1";
  child2.appendChild(skilldata);

  tabledata = "";
  for(i=0;i<skillinfo.length;i++){
    tabledata+="<tr><td>"+skillinfo[i].title+"</td><td>"+skillinfo[i].data+"</td></tr>"
   }
    skilldata.innerHTML=tabledata;
}
function  achieve(achievements)
 {
   var ac = document.createElement("h2");
   ac.textContent = "Achievements:";
   child2.appendChild(ac);

   var hr = document.createElement("hr");
   child2.appendChild(hr);

   var ach = document.createElement("ul");
    var ach1= document.createElement("li");
   ach1.textContent = achievements.data;
   ach.appendChild(ach1);
    child2.appendChild(ach);

    var ach2 = document.createElement("ul");
     var ach3= document.createElement("li");
    ach3.textContent = achievements.data1;
    ach2.appendChild(ach3);
     child2.appendChild(ach2);
}
