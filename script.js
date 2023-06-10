const result = document.getElementById('result')

result.addEventListener('click',(value) => calcy(value))

const calcy = () => {
    let web = document.getElementById('web').value
    let maths = document.getElementById('maths').value
    let comp = document.getElementById('computer').value
    let phy = document.getElementById('physics').value
    let Grade = ""

    let totalMarks = parseInt(web) + parseInt(maths) + parseInt(comp) + parseInt(phy)

    let percentage = (totalMarks/400) * 100

    if(percentage <= 100 && percentage >= 80){
        Grade = "A"   
    }
    else if(percentage <= 79 && percentage >= 60){
        Grade = "B"   
    }
    else if(percentage <= 59 && percentage >= 40){
        Grade = "C"   
    }
    else{
        Grade = "F"
    }

    if(percentage >= 39){
        document.getElementById('showData').innerHTML =  `Out of 400 your total is  ${totalMarks} and percentage is ${percentage}%. <br> Your grade is ${Grade}. You are Pass. `
    }

    else{
        document.getElementById('showData').innerHTML = `Out of 400 your total is  ${totalMarks} and percentage is ${percentage}%. <br> Your grade is ${Grade}. You are Fail. `
    }

}