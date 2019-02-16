function display(v)
{
  document.getElementById("res").value+=v;
}
function dis()
{
  document.getElementById("res").value="";
}
function solve()
{
    var z=document.getElementById("res").value;
    try {
      var r=eval(z);
      if(isNaN(r))
      {
        throw 'e';
      }
      else
       {
        throw r;
      }
    }
  catch(err)
  {
    if(err==r)
    {
    document.getElementById("res").value=err;
   }
    else
     {
      document.getElementById("res").value=err.name;
    }
  }
}
function solvelog()
{
  var z=document.getElementById("res").value;
  var r=Math.log(z);
  document.getElementById("res").value=r;
}
function solvesin()
{
  var z=document.getElementById("res").value;
  var r=Math.sin(z);
  document.getElementById("res").value=r;
}
function solvecos()
{
  var z=document.getElementById("res").value;
  var r=Math.cos(z);
  document.getElementById("res").value=r;
}
function solvetan()
{
  var z=document.getElementById("res").value;
  var r=Math.tan(z);
  document.getElementById("res").value=r;
}
function solvepi()
{
  var r=Math.PI;
  document.getElementById("res").value+=r;
}
function solveexp()
{
  var z=document.getElementById("res").value;
  var r=Math.exp(z);
  document.getElementById("res").value=r;
}
function solvesqrt()
{
  var z=document.getElementById("res").value;
  var r=Math.sqrt(z);
  document.getElementById("res").value=r;
}
function solvepow()
{
  var z=document.getElementById("res").value;
  var r=Math.pow(z);
  document.getElementById("res").value=r;
}
function hide()
{
  var x=document.getElementById("sci");
  if(x.style.display=="none")
  {
    document.getElementById("arrow").value='▲';
    x.style.display="table-row-group";
  }
  else {
    document.getElementById("arrow").value='▼';
    x.style.display="none";
  }
  var x=document.getElementById("sci1");
  if(x.style.display=="none")
  {
    document.getElementById("arrow").value='▲';
    x.style.display="table-row-group";
  }
  else {
    document.getElementById("arrow").value='▼';
    x.style.display="none";
  }

}
