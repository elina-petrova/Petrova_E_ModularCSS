

(()=>{
    let profPanelText = document.querySelector(".profPanelText"),
        profPanelTextChild = profPanelText.children;
    
   profPanelTextChild[0].textContent = classData.coursename;
   profPanelTextChild[1].textContent = classData.coursecode;
   profPanelTextChild[2].textContent = classData.classtime;



})();