var job = ["programer","Firfighter","Cop","Construction worker","Data analyst"];
var city = ["Dallas","Chicago","Mexico city","las Vegas","Los Angeles"];
var spouse = ["Daisy","Jessica","Shelia","Carmen","Alia"];
var numkids = [3,1,2,5,0]

var xxx = Math.floor (Math.random() * 5 )

function future(job,city,spouse,numkids){
document.write("You will be a " + job + " in " + city + ", and married to " + spouse+ " with " + numkids + " kids.");
}
future (job[xxx],city[xxx],spouse[xxx],numkids[xxx])
