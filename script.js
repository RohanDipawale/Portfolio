console.log("console is running");
document.querySelector('.Cross').style.display = 'none';
document.querySelector('.hamburgur').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.Ham').style.display = 'inline'
        document.querySelector('.Cross').style.display = 'none'
    }
    else{
        document.querySelector('.Ham').style.display = 'none'
        setTimeout(()=> {
            document.querySelector('.Cross').style.display = 'inline'
        }, 200);
    }
});