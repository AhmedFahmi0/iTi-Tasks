var contout=document.getElementById("container")
var first=document.getElementById("first")
var cont=document.getElementById("inner")
var txt=document.getElementById("txt")
var lbl=document.getElementById("lbl")
txt.style.height="25px"
var btn=document.getElementById("btn")
btn.style.position="relative"
btn.style.left="30px"
lbl.style.position="relative"
lbl.style.right="45px"
btn.style.height="30px"
btn.style.width="80px"
btn.style.color="white"
btn.style.borderStyle="solid"
btn.style.borderWidth="5px"
btn.style.borderColor="blue"
btn.style.backgroundColor="#008080"
btn.style.borderWidth="0px"
btn.style.borderRadius="3px"
contout.style.border="20px"
contout.style.backgroundColor="#E0FFFF"
contout.style.borderStyle="solid"
contout.style.borderColor="#7FFFD4"
contout.style.borderWidth="1px"
contout.style.minHeight="150px"
cont.style.backgroundColor="white"
contout.style.position="relative"
contout.style.left="40%"
contout.style.top="100px"
contout.style.padding="20px"
contout.style.width="450px"
form.style.position="relative"
form.style.top="10px"
form.style.left="40px"
form.style.padding="60px"
contout.style.position="flex"
contout.style.flexDirection="column"
contout.style.justifyContent="space-between"

 $("#btn").on("click", function () {
      $("#inner").append(`<div class="first"><div class="tsk">${$("#txt").val()}</div>
        <div class="btns">
            <button type="button" class="done">✓</button>
            <button type="button" class="delete">X</button>
        </div></div>`)
    });
    $("#inner").on("click",".delete",{},function (e){
        $(this).parent().parent().remove();
});

$("#inner").on("click",".done",{},function (e){
        $(this).parent().parent().css("backgroundColor","green")

}); 