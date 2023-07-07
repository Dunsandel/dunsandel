expandedText = {}
function ShowMore(id){
    if(expandedText[id]){
    document.getElementById(id).style.display = "none"
    document.getElementById(id+"Button").innerHTML = "Show More..."
    expandedText[id] = false
    }else{
        expandedText[id] = true
        document.getElementById(id).style.display = "initial"
        document.getElementById(id+"Button").innerHTML = "Show Less"
    }
}