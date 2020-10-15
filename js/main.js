
(()=>{


    // make an AJAX request using Fetch API

    fetch('./data/classData.json')
    //return plain javascript object
    .then(res => res.json())
    .then(data => {
        console.log(data);

        //handleData
        //call the function that puts pieces onm the page

        handleDataSet(data);
    })
    .catch((err) => {
        console.log(err);
    })


    function handleDataSet(data){

        for (let user in data){

            
        let profPanelText = document.querySelector(".profPanelText"),
            profPanelTextChild = profPanelText.children;
    
        profPanelTextChild[0].textContent = classData.coursename + " - " + classData.coursecode;
        profPanelTextChild[1].textContent = "Professor - " + classData.profname;

        console.log(profPanelTextChild[2].childNodes);
        profPanelTextChild[2].childNodes[1].innerHTML = classData.classtime[0];
        profPanelTextChild[2].childNodes[3].innerHTML = classData.classtime[1];

        }
    }





})();